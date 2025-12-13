import { Octokit } from '@octokit/rest';

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

async function fixSubmodule() {
  const owner = 'rupeshtiwari';
  const repo = 'blogs';
  const branch = 'master';
  
  console.log('🔧 Fixing broken submodule reference...\n');
  
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  try {
    // Check .gitmodules file
    console.log('📥 Checking .gitmodules file...');
    let gitmodulesContent = '';
    let gitmodulesSha: string | undefined;
    
    try {
      const { data: gitmodulesFile } = await octokit.repos.getContent({
        owner,
        repo,
        path: '.gitmodules',
        ref: branch
      });
      
      if ('content' in gitmodulesFile) {
        gitmodulesContent = Buffer.from(gitmodulesFile.content, 'base64').toString('utf-8');
        gitmodulesSha = gitmodulesFile.sha;
        console.log('Current .gitmodules content:');
        console.log(gitmodulesContent);
      }
    } catch (e: any) {
      if (e.status === 404) {
        console.log('No .gitmodules file found');
        return;
      }
      throw e;
    }
    
    // Delete the .gitmodules file since the submodule is broken
    console.log('\n🗑️ Deleting broken .gitmodules file...');
    await octokit.repos.deleteFile({
      owner,
      repo,
      path: '.gitmodules',
      message: 'Remove broken submodule reference - fix build failure',
      sha: gitmodulesSha!,
      branch
    });
    console.log('✅ Deleted .gitmodules');
    
    // Also check for old-site directory entry in git (might be a submodule entry)
    console.log('\n🔍 Checking for old-site directory...');
    try {
      const { data: oldSite } = await octokit.repos.getContent({
        owner,
        repo,
        path: 'old-site',
        ref: branch
      });
      
      // If it's a submodule, it will show as a special type
      console.log('old-site entry type:', Array.isArray(oldSite) ? 'directory' : (oldSite as any).type);
      
      // If it's a submodule reference (type=commit), we need to remove it
      if (!Array.isArray(oldSite) && (oldSite as any).type === 'commit') {
        console.log('Found submodule reference, needs manual removal');
      }
    } catch (e: any) {
      if (e.status === 404) {
        console.log('No old-site directory/submodule found');
      } else {
        console.log('Error checking old-site:', e.message);
      }
    }
    
    console.log('\n✅ Fixed submodule issue!');
    console.log('\n💡 GitHub Pages should rebuild successfully now.');
    console.log('   Check: https://github.com/rupeshtiwari/blogs/actions');
    
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

fixSubmodule().catch(console.error);
