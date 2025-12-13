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

async function checkBlogStatus() {
  const owner = 'rupeshtiwari';
  const repo = 'blogs';
  
  console.log('🔍 Checking blog repository status...\n');
  
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  try {
    // Check repo info
    const { data: repoData } = await octokit.repos.get({ owner, repo });
    console.log('📦 Repository:', repoData.full_name);
    console.log('   Default branch:', repoData.default_branch);
    console.log('   Has Pages:', repoData.has_pages);
    
    // Check GitHub Pages status
    try {
      const { data: pages } = await octokit.repos.getPages({ owner, repo });
      console.log('\n📄 GitHub Pages:');
      console.log('   URL:', pages.html_url);
      console.log('   Custom domain:', pages.cname || 'None');
      console.log('   HTTPS enforced:', pages.https_enforced);
      console.log('   Status:', pages.status);
      console.log('   Source branch:', pages.source?.branch);
      console.log('   Source path:', pages.source?.path);
    } catch (e: any) {
      console.log('\n❌ GitHub Pages not configured:', e.message);
    }
    
    // Check latest workflow runs
    console.log('\n🔄 Recent workflow runs:');
    const { data: runs } = await octokit.actions.listWorkflowRunsForRepo({
      owner,
      repo,
      per_page: 5
    });
    
    for (const run of runs.workflow_runs) {
      const status = run.conclusion || run.status;
      const icon = status === 'success' ? '✅' : status === 'failure' ? '❌' : '🔄';
      console.log(`   ${icon} ${run.name}: ${status} (${run.created_at})`);
    }
    
    // Check latest commit
    console.log('\n📝 Latest commits:');
    const { data: commits } = await octokit.repos.listCommits({
      owner,
      repo,
      per_page: 3
    });
    
    for (const commit of commits) {
      console.log(`   - ${commit.sha.substring(0, 7)}: ${commit.commit.message.split('\n')[0]}`);
    }
    
    // Check if CNAME file exists
    console.log('\n🌐 Checking CNAME file...');
    try {
      const { data: cnameFile } = await octokit.repos.getContent({
        owner,
        repo,
        path: 'CNAME'
      });
      if ('content' in cnameFile) {
        const cname = Buffer.from(cnameFile.content, 'base64').toString('utf-8').trim();
        console.log('   CNAME:', cname);
      }
    } catch (e: any) {
      console.log('   ❌ No CNAME file found');
    }
    
  } catch (error: any) {
    console.error('❌ Error:', error.message);
  }
}

checkBlogStatus().catch(console.error);
