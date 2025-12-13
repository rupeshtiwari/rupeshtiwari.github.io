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

async function restoreConfig() {
  const owner = 'rupeshtiwari';
  const repo = 'blogs';
  const branch = 'master';
  
  console.log('🔍 Fetching commit history to find last working config...\n');
  
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  try {
    // Get recent commits to _config.yml
    const { data: commits } = await octokit.repos.listCommits({
      owner,
      repo,
      path: '_config.yml',
      per_page: 10
    });
    
    console.log('Recent commits to _config.yml:');
    for (const commit of commits.slice(0, 5)) {
      console.log(`  - ${commit.sha.substring(0, 7)}: ${commit.commit.message}`);
    }
    
    // Find a commit before the Chirpy change
    let restoreCommitSha: string | null = null;
    for (const commit of commits) {
      if (!commit.commit.message.includes('Chirpy') && 
          !commit.commit.message.includes('sitemap') &&
          !commit.commit.message.includes('Fix sitemap')) {
        restoreCommitSha = commit.sha;
        console.log(`\n📌 Found restore point: ${restoreCommitSha.substring(0, 7)} - ${commit.commit.message}`);
        break;
      }
    }
    
    if (!restoreCommitSha) {
      // If we can't find a good commit, use the one before the most recent
      restoreCommitSha = commits[1]?.sha || commits[0].sha;
      console.log(`\n📌 Using fallback commit: ${restoreCommitSha.substring(0, 7)}`);
    }
    
    // Fetch _config.yml from that commit
    console.log('\n📥 Fetching config from restore point...');
    const { data: fileData } = await octokit.repos.getContent({
      owner,
      repo,
      path: '_config.yml',
      ref: restoreCommitSha
    });
    
    if ('content' in fileData) {
      const originalConfig = Buffer.from(fileData.content, 'base64').toString('utf-8');
      console.log('\n📄 Original config theme line:');
      const themeMatch = originalConfig.match(/^(theme|remote_theme):.*/gm);
      themeMatch?.forEach(line => console.log(`   ${line}`));
      
      // Get current file SHA for update
      const { data: currentFile } = await octokit.repos.getContent({
        owner,
        repo,
        path: '_config.yml',
        ref: branch
      });
      
      const currentSha = 'sha' in currentFile ? currentFile.sha : undefined;
      
      // Restore the original config
      console.log('\n📤 Restoring original config...');
      const { data } = await octokit.repos.createOrUpdateFileContents({
        owner,
        repo,
        path: '_config.yml',
        message: 'Restore original Minimal Mistakes config - fix broken site',
        content: Buffer.from(originalConfig).toString('base64'),
        branch,
        sha: currentSha
      });
      
      console.log('\n✅ Config restored successfully!');
      console.log(`   Commit: ${data.commit.sha.substring(0, 7)}`);
      console.log('\n💡 GitHub Pages will rebuild in 1-2 minutes.');
      console.log('   Check: https://github.com/rupeshtiwari/blogs/actions');
    }
    
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

restoreConfig().catch(console.error);
