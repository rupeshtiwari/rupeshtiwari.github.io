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

async function removeOldSiteSubmodule() {
  const owner = 'rupeshtiwari';
  const repo = 'blogs';
  const branch = 'master';
  
  console.log('🔧 Removing old-site submodule reference...\n');
  
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  try {
    // Get the tree for the current commit
    const { data: branchData } = await octokit.repos.getBranch({
      owner,
      repo,
      branch
    });
    
    const commitSha = branchData.commit.sha;
    console.log('Current commit:', commitSha.substring(0, 7));
    
    // Get the tree
    const { data: commit } = await octokit.git.getCommit({
      owner,
      repo,
      commit_sha: commitSha
    });
    
    const treeSha = commit.tree.sha;
    
    // Get tree contents
    const { data: tree } = await octokit.git.getTree({
      owner,
      repo,
      tree_sha: treeSha
    });
    
    console.log('Tree entries:');
    const submodules = tree.tree.filter(item => item.mode === '160000');
    submodules.forEach(item => {
      console.log(`  - ${item.path} (submodule: ${item.sha})`);
    });
    
    if (submodules.length === 0) {
      console.log('No submodules found');
      return;
    }
    
    // Create new tree without the submodule entries
    const newTreeEntries = tree.tree
      .filter(item => item.mode !== '160000')
      .map(item => ({
        path: item.path,
        mode: item.mode as '100644' | '100755' | '040000' | '160000' | '120000',
        type: item.type as 'blob' | 'tree' | 'commit',
        sha: item.sha
      }));
    
    console.log('\n📝 Creating new tree without submodules...');
    const { data: newTree } = await octokit.git.createTree({
      owner,
      repo,
      tree: newTreeEntries,
      base_tree: undefined
    });
    
    console.log('New tree:', newTree.sha.substring(0, 7));
    
    // Create new commit
    console.log('📝 Creating commit...');
    const { data: newCommit } = await octokit.git.createCommit({
      owner,
      repo,
      message: 'Remove broken submodule references - fix GitHub Pages build',
      tree: newTree.sha,
      parents: [commitSha]
    });
    
    console.log('New commit:', newCommit.sha.substring(0, 7));
    
    // Update branch reference
    console.log('📤 Updating branch...');
    await octokit.git.updateRef({
      owner,
      repo,
      ref: `heads/${branch}`,
      sha: newCommit.sha
    });
    
    console.log('\n✅ Removed submodule references!');
    console.log('\n💡 GitHub Pages should rebuild successfully now.');
    console.log('   Check: https://github.com/rupeshtiwari/blogs/actions');
    
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

removeOldSiteSubmodule().catch(console.error);
