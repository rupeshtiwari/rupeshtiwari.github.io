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
        console.log(`  Found existing ${filePath}, will update`);
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
    
    console.log(`  ✅ ${filePath} pushed!`);
    return data.commit.sha;
  } catch (error: any) {
    console.error(`  ❌ Error pushing ${filePath}:`, error.message);
    throw error;
  }
}

async function pushPromoFiles() {
  const owner = 'rupeshtiwari';
  const repo = 'rupeshtiwari-blog';
  const branch = 'master';
  
  console.log('📤 Pushing promotional content to blog...\n');
  
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  const files = [
    { 
      remote: '_includes/coaching-cta.html', 
      local: './blog-content/_includes/coaching-cta.html',
      msg: 'Add coaching CTA component'
    },
    { 
      remote: '_includes/sidebar-promo.html', 
      local: './blog-content/_includes/sidebar-promo.html',
      msg: 'Add sidebar promotional content'
    },
    { 
      remote: '_includes/footer-cta.html', 
      local: './blog-content/_includes/footer-cta.html',
      msg: 'Add footer CTA section'
    },
    { 
      remote: '_data/navigation.yml', 
      local: './blog-content/_data/navigation.yml',
      msg: 'Update navigation with coaching and booking links'
    }
  ];
  
  try {
    for (const file of files) {
      console.log(`📁 Processing ${file.remote}...`);
      await pushFile(octokit, owner, repo, branch, file.remote, file.local, file.msg);
    }
    
    console.log('\n✅ All promotional content pushed successfully!');
    console.log('\n💡 Jekyll will rebuild in 1-2 minutes.');
    console.log('   New features:');
    console.log('   - Navigation has "Crack FAANG Interview" and "Book 1:1 Call" links');
    console.log('   - Coaching CTA component available for posts');
    console.log('   - Sidebar promotional content');
    console.log('   - Footer CTA section');
    
  } catch (error: any) {
    console.error('\n❌ Error:', error.message);
    throw error;
  }
}

pushPromoFiles().catch(console.error);

// Push related posts include
async function pushRelatedPosts() {
  const owner = 'rupeshtiwari';
  const repo = 'rupeshtiwari-blog';
  const branch = 'master';
  
  console.log('📤 Pushing related posts include...\n');
  
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  await pushFile(octokit, owner, repo, branch, '_includes/related-posts.html', './blog-content/_includes/related-posts.html', 'Add related posts section for blog footer');
  
  console.log('\n✅ Related posts component pushed!');
}

pushRelatedPosts().catch(console.error);
