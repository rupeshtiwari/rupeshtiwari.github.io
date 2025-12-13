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

async function pushConfig() {
  const owner = 'rupeshtiwari';
  const repo = 'rupeshtiwari-blog';
  const branch = 'master';
  const filePath = '_config.yml';
  
  console.log('📤 Pushing updated _config.yml to blog repo...\n');
  
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  const content = fs.readFileSync('./blog-content/_config.yml', 'utf-8');
  const contentBase64 = Buffer.from(content).toString('base64');
  
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
        console.log('Found existing _config.yml, will update it');
      }
    } catch (e: any) {
      if (e.status !== 404) throw e;
      console.log('Creating new _config.yml');
    }
    
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filePath,
      message: 'Fix sitemap: add full URL to config',
      content: contentBase64,
      branch,
      sha: existingSha
    });
    
    console.log('✅ _config.yml pushed successfully!');
    console.log(`   Commit: ${data.commit.sha.substring(0, 7)}`);
    console.log('\n💡 Jekyll will rebuild your site in 1-2 minutes.');
    console.log('   The sitemap will now have full URLs.');
    
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

pushConfig().catch(console.error);
