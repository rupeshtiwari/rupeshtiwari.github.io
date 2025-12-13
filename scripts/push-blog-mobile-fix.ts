import { Octokit } from '@octokit/rest';
import * as fs from 'fs';

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

async function pushFile(octokit: Octokit, owner: string, repo: string, branch: string, filePath: string, localPath: string, message: string) {
  const content = Buffer.from(fs.readFileSync(localPath, 'utf-8')).toString('base64');
  
  try {
    let existingSha: string | undefined;
    try {
      const { data: existingFile } = await octokit.repos.getContent({
        owner,
        repo,
        path: filePath,
        ref: branch
      });
      if ('sha' in existingFile) {
        existingSha = existingFile.sha;
        console.log(`  Found existing ${filePath}, will update it`);
      }
    } catch (e: any) {
      if (e.status !== 404) throw e;
      console.log(`  Creating new ${filePath}`);
    }
    
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filePath,
      message,
      content,
      branch,
      sha: existingSha
    });
    
    console.log(`  ✅ ${filePath} pushed successfully!`);
    return data.commit.sha;
  } catch (error: any) {
    console.error(`  ❌ Error pushing ${filePath}:`, error.message);
    throw error;
  }
}

async function pushMobileFix() {
  const owner = 'rupeshtiwari';
  const repo = 'blogs';
  const branch = 'master';
  
  console.log('📱 Pushing mobile responsiveness fixes to blog...\n');
  
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  try {
    console.log('1️⃣ Pushing mobile-fixes.html...');
    await pushFile(
      octokit, owner, repo, branch,
      '_includes/mobile-fixes.html',
      './blog-content/_includes/mobile-fixes.html',
      'Add mobile responsiveness CSS fixes'
    );
    
    console.log('\n2️⃣ Updating head.html with mobile fixes include...');
    await pushFile(
      octokit, owner, repo, branch,
      '_includes/head.html',
      './blog-content/_includes/head.html',
      'Include mobile fixes in head'
    );
    
    console.log('\n✅ Mobile fixes pushed successfully!');
    console.log('\n💡 Jekyll will rebuild your site in 1-2 minutes.');
    console.log('   The blog should now be mobile-responsive.');
    
  } catch (error: any) {
    console.error('\n❌ Error:', error.message);
    throw error;
  }
}

pushMobileFix().catch(console.error);
