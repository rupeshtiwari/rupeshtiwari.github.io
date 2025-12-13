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

async function addAssetsSubmodule() {
  const owner = 'rupeshtiwari';
  const repo = 'blogs';
  const branch = 'master';
  
  console.log('🔧 Adding assets/lib submodule for Chirpy theme...\n');
  
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  try {
    // Get latest commit from the Chirpy static assets repo to use as submodule reference
    const { data: chirpyCommits } = await octokit.repos.listCommits({
      owner: 'cotes2020',
      repo: 'chirpy-static-assets',
      per_page: 1
    });
    
    const latestChirpySha = chirpyCommits[0].sha;
    console.log('Latest Chirpy assets commit:', latestChirpySha.substring(0, 7));
    
    // Get the current tree
    const { data: branchData } = await octokit.repos.getBranch({
      owner,
      repo,
      branch
    });
    
    const currentCommitSha = branchData.commit.sha;
    console.log('Current blog commit:', currentCommitSha.substring(0, 7));
    
    const { data: currentCommit } = await octokit.git.getCommit({
      owner,
      repo,
      commit_sha: currentCommitSha
    });
    
    const { data: currentTree } = await octokit.git.getTree({
      owner,
      repo,
      tree_sha: currentCommit.tree.sha
    });
    
    // Check if assets/lib already exists as a submodule
    const hasSubmodule = currentTree.tree.some(
      item => item.path === 'assets/lib' && item.mode === '160000'
    );
    
    if (hasSubmodule) {
      console.log('✅ assets/lib submodule already exists');
      return;
    }
    
    // Check if assets directory exists
    let assetsTree: any = null;
    const assetsEntry = currentTree.tree.find(item => item.path === 'assets' && item.type === 'tree');
    
    if (assetsEntry) {
      const { data: assetsTreeData } = await octokit.git.getTree({
        owner,
        repo,
        tree_sha: assetsEntry.sha!
      });
      assetsTree = assetsTreeData;
      console.log('Assets directory exists with', assetsTree.tree.length, 'entries');
    } else {
      console.log('Assets directory does not exist yet');
    }
    
    // Create new tree with the submodule entry
    console.log('\n📝 Creating tree with submodule entry...');
    
    // Build new assets tree entries
    let newAssetsTreeEntries: any[] = [];
    if (assetsTree) {
      newAssetsTreeEntries = assetsTree.tree
        .filter((item: any) => item.path !== 'lib')
        .map((item: any) => ({
          path: item.path,
          mode: item.mode as '100644' | '100755' | '040000' | '160000' | '120000',
          type: item.type as 'blob' | 'tree' | 'commit',
          sha: item.sha
        }));
    }
    
    // Add the lib submodule entry
    newAssetsTreeEntries.push({
      path: 'lib',
      mode: '160000' as const,
      type: 'commit' as const,
      sha: latestChirpySha
    });
    
    // Create new assets tree
    const { data: newAssetsTree } = await octokit.git.createTree({
      owner,
      repo,
      tree: newAssetsTreeEntries
    });
    
    console.log('New assets tree:', newAssetsTree.sha.substring(0, 7));
    
    // Build new root tree
    const newRootTreeEntries = currentTree.tree
      .filter(item => item.path !== 'assets')
      .map(item => ({
        path: item.path!,
        mode: item.mode as '100644' | '100755' | '040000' | '160000' | '120000',
        type: item.type as 'blob' | 'tree' | 'commit',
        sha: item.sha
      }));
    
    // Add the new assets tree
    newRootTreeEntries.push({
      path: 'assets',
      mode: '040000' as const,
      type: 'tree' as const,
      sha: newAssetsTree.sha
    });
    
    // Create new root tree
    const { data: newRootTree } = await octokit.git.createTree({
      owner,
      repo,
      tree: newRootTreeEntries
    });
    
    console.log('New root tree:', newRootTree.sha.substring(0, 7));
    
    // Create new commit
    console.log('📝 Creating commit...');
    const { data: newCommit } = await octokit.git.createCommit({
      owner,
      repo,
      message: 'Add assets/lib submodule for Chirpy theme',
      tree: newRootTree.sha,
      parents: [currentCommitSha]
    });
    
    console.log('New commit:', newCommit.sha.substring(0, 7));
    
    // Update branch
    console.log('📤 Updating branch...');
    await octokit.git.updateRef({
      owner,
      repo,
      ref: `heads/${branch}`,
      sha: newCommit.sha
    });
    
    console.log('\n✅ Added assets/lib submodule!');
    console.log('\n💡 GitHub Pages should rebuild with Chirpy theme assets.');
    console.log('   Check: https://github.com/rupeshtiwari/blogs/actions');
    
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

addAssetsSubmodule().catch(console.error);
