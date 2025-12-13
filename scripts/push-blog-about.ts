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

async function pushAboutPage() {
  const owner = 'rupeshtiwari';
  const repo = 'blogs'; // Blog repo name
  const branch = 'master';
  const filePath = '_tabs/about.md';
  
  console.log('📤 Pushing About page to blog repo...\n');
  
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  // Read the about.md content
  const content = fs.readFileSync('./blog-content/_tabs/about.md', 'utf-8');
  const contentBase64 = Buffer.from(content).toString('base64');
  
  try {
    // Check if file already exists
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
        console.log('Found existing about.md, will update it');
      }
    } catch (e: any) {
      if (e.status !== 404) throw e;
      console.log('No existing about.md found, will create new');
    }
    
    // Create or update the file
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filePath,
      message: 'Update About page with professional bio',
      content: contentBase64,
      branch,
      sha: existingSha
    });
    
    console.log('✅ About page pushed successfully!');
    console.log(`   Commit: ${data.commit.sha.substring(0, 7)}`);
    console.log('\n💡 Your blog About page will update in a few minutes.');
    console.log('   Visit: https://blog.rupeshtiwari.com/about/');
    
  } catch (error: any) {
    if (error.status === 404) {
      console.error('❌ Blog repo not found. Make sure the repo name is correct.');
      console.error('   Looking for: github.com/rupeshtiwari/blog.rupeshtiwari.com');
    } else {
      console.error('❌ Error:', error.message);
    }
    throw error;
  }
}

pushAboutPage().catch(console.error);
