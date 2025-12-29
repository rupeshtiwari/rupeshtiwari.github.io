import { Octokit } from '@octokit/rest'
import * as fs from 'fs'
import * as path from 'path'

let connectionSettings: any;

async function getAccessToken() {
  // Support local deployment with GITHUB_TOKEN environment variable
  if (process.env.GITHUB_TOKEN) {
    return process.env.GITHUB_TOKEN;
  }
  
  // Replit deployment logic
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl. For local deployment, set GITHUB_TOKEN environment variable.');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

async function getAllFiles(dir: string, baseDir: string = dir): Promise<{path: string, content: string}[]> {
  const files: {path: string, content: string}[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);
    
    if (entry.isDirectory()) {
      files.push(...await getAllFiles(fullPath, baseDir));
    } else {
      const content = fs.readFileSync(fullPath);
      files.push({
        path: relativePath,
        content: content.toString('base64')
      });
    }
  }
  return files;
}

async function deploy() {
  const owner = 'rupeshtiwari';
  const repo = 'rupeshtiwari.github.io';
  const branch = 'main';
  
  console.log('Syncing dist/public to portfolio-build...');
  const distFiles = fs.readdirSync('./dist/public');
  for (const file of distFiles) {
    const src = path.join('./dist/public', file);
    const dest = path.join('./portfolio-build', file);
    if (fs.statSync(src).isDirectory()) {
      fs.cpSync(src, dest, { recursive: true });
    } else {
      fs.copyFileSync(src, dest);
    }
  }
  if (fs.existsSync('./client/public/sitemap.xml')) {
    fs.copyFileSync('./client/public/sitemap.xml', './portfolio-build/sitemap.xml');
  }
  if (fs.existsSync('./client/public/CNAME')) {
    fs.copyFileSync('./client/public/CNAME', './portfolio-build/CNAME');
  }
  console.log('Files synced!');
  
  console.log('Getting GitHub client...');
  const octokit = await getUncachableGitHubClient();
  
  console.log('Getting all files from portfolio-build...');
  const files = await getAllFiles('./portfolio-build');
  console.log(`Found ${files.length} files to deploy`);
  
  try {
    const { data: ref } = await octokit.git.getRef({
      owner,
      repo,
      ref: `heads/${branch}`
    });
    console.log(`Current commit SHA: ${ref.object.sha}`);
    
    const { data: commit } = await octokit.git.getCommit({
      owner,
      repo,
      commit_sha: ref.object.sha
    });
    
    console.log('Creating blobs for all files...');
    const blobs = await Promise.all(
      files.map(async (file) => {
        const { data } = await octokit.git.createBlob({
          owner,
          repo,
          content: file.content,
          encoding: 'base64'
        });
        return {
          path: file.path,
          mode: '100644' as const,
          type: 'blob' as const,
          sha: data.sha
        };
      })
    );
    
    console.log('Creating tree...');
    const { data: tree } = await octokit.git.createTree({
      owner,
      repo,
      tree: blobs,
      base_tree: undefined
    });
    
    console.log('Creating commit...');
    const { data: newCommit } = await octokit.git.createCommit({
      owner,
      repo,
      message: 'Deploy modern React portfolio from Replit',
      tree: tree.sha,
      parents: [ref.object.sha]
    });
    
    console.log('Updating reference...');
    await octokit.git.updateRef({
      owner,
      repo,
      ref: `heads/${branch}`,
      sha: newCommit.sha,
      force: true
    });
    
    console.log('✅ Successfully deployed to GitHub!');
    console.log(`Visit: https://rupeshtiwari.github.io or https://www.rupeshtiwari.com`);
    
  } catch (error: any) {
    if (error.status === 404) {
      console.log('Branch not found, creating initial commit...');
      
      console.log('Creating blobs...');
      const blobs = await Promise.all(
        files.map(async (file) => {
          const { data } = await octokit.git.createBlob({
            owner,
            repo,
            content: file.content,
            encoding: 'base64'
          });
          return {
            path: file.path,
            mode: '100644' as const,
            type: 'blob' as const,
            sha: data.sha
          };
        })
      );
      
      console.log('Creating tree...');
      const { data: tree } = await octokit.git.createTree({
        owner,
        repo,
        tree: blobs
      });
      
      console.log('Creating initial commit...');
      const { data: newCommit } = await octokit.git.createCommit({
        owner,
        repo,
        message: 'Initial deploy: Modern React portfolio from Replit',
        tree: tree.sha,
        parents: []
      });
      
      console.log('Creating branch reference...');
      await octokit.git.createRef({
        owner,
        repo,
        ref: `refs/heads/${branch}`,
        sha: newCommit.sha
      });
      
      console.log('✅ Successfully created and deployed to GitHub!');
    } else {
      throw error;
    }
  }
}

deploy().catch(console.error);
