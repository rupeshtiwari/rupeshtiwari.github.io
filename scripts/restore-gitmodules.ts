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

async function restoreGitmodules() {
  const owner = 'rupeshtiwari';
  const repo = 'blogs';
  const branch = 'master';
  
  console.log('🔧 Restoring .gitmodules for Chirpy assets...\n');
  
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  const gitmodulesContent = `[submodule "assets/lib"]
\tpath = assets/lib
\turl = https://github.com/cotes2020/chirpy-static-assets.git
`;
  
  try {
    // Check if .gitmodules exists
    let existingSha: string | undefined;
    try {
      const { data: existingFile } = await octokit.repos.getContent({
        owner,
        repo,
        path: '.gitmodules',
        ref: branch
      });
      if ('sha' in existingFile) {
        existingSha = existingFile.sha;
      }
    } catch (e: any) {
      if (e.status !== 404) throw e;
    }
    
    // Create/update .gitmodules
    console.log('📤 Creating .gitmodules...');
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: '.gitmodules',
      message: 'Restore .gitmodules for Chirpy static assets',
      content: Buffer.from(gitmodulesContent).toString('base64'),
      branch,
      sha: existingSha
    });
    
    console.log('✅ .gitmodules restored!');
    console.log(`   Commit: ${data.commit.sha.substring(0, 7)}`);
    
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

restoreGitmodules().catch(console.error);
