import { Octokit } from '@octokit/rest';
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found');
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

function getAllFiles(dir: string, baseDir: string = dir): {path: string, content: string}[] {
  const files: {path: string, content: string}[] = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);
    
    if (entry.isDirectory()) {
      files.push(...getAllFiles(fullPath, baseDir));
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.markdown')) {
      const content = fs.readFileSync(fullPath);
      files.push({
        path: relativePath,
        content: content.toString('base64')
      });
    }
  }
  return files;
}

async function pushToBlogRepo() {
  const owner = 'rupeshtiwari';
  const repo = 'rupeshtiwari-blog';
  const branch = 'master';
  
  console.log('📤 Pushing blog content to GitHub...\n');
  
  const octokit = await getUncachableGitHubClient();
  
  // Get files from blog-drafts
  const postsDir = './blog-drafts/_posts';
  const scheduledDir = './blog-drafts/_scheduled';
  
  const postFiles = getAllFiles(postsDir, './blog-drafts');
  const scheduledFiles = getAllFiles(scheduledDir, './blog-drafts');
  
  const allFiles = [...postFiles, ...scheduledFiles];
  
  if (allFiles.length === 0) {
    console.log('❌ No blog posts found in blog-drafts/');
    console.log('   Run `npm run new-post` to create a new post first.');
    return;
  }
  
  console.log(`Found ${allFiles.length} file(s) to push:`);
  allFiles.forEach(f => console.log(`  - ${f.path}`));
  
  try {
    const { data: ref } = await octokit.git.getRef({
      owner,
      repo,
      ref: `heads/${branch}`
    });
    
    console.log(`\nCurrent commit: ${ref.object.sha.substring(0, 7)}`);
    
    // Create blobs for each file
    const blobs = await Promise.all(
      allFiles.map(async (file) => {
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
    
    // Get current tree
    const { data: currentCommit } = await octokit.git.getCommit({
      owner,
      repo,
      commit_sha: ref.object.sha
    });
    
    // Create new tree with the files
    const { data: tree } = await octokit.git.createTree({
      owner,
      repo,
      tree: blobs,
      base_tree: currentCommit.tree.sha
    });
    
    // Create commit
    const { data: newCommit } = await octokit.git.createCommit({
      owner,
      repo,
      message: `Add ${allFiles.length} blog post(s) from Replit`,
      tree: tree.sha,
      parents: [ref.object.sha]
    });
    
    // Update branch reference
    await octokit.git.updateRef({
      owner,
      repo,
      ref: `heads/${branch}`,
      sha: newCommit.sha
    });
    
    console.log('\n✅ Successfully pushed to blog repo!');
    console.log(`   Commit: ${newCommit.sha.substring(0, 7)}`);
    
    // Move processed files to archive
    const archiveDir = './blog-drafts/_archive';
    if (!fs.existsSync(archiveDir)) {
      fs.mkdirSync(archiveDir, { recursive: true });
    }
    
    allFiles.forEach(file => {
      const sourcePath = path.join('./blog-drafts', file.path);
      const archivePath = path.join(archiveDir, path.basename(file.path));
      if (fs.existsSync(sourcePath)) {
        fs.renameSync(sourcePath, archivePath);
        console.log(`   Archived: ${file.path}`);
      }
    });
    
    console.log('\n💡 Your posts have been pushed and archived locally.');
    console.log('   Scheduled posts will auto-publish on their date.');
    
  } catch (error: any) {
    console.error('❌ Error pushing to GitHub:', error.message);
    throw error;
  }
}

pushToBlogRepo().catch(console.error);
