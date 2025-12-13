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

async function checkBuildLogs() {
  const owner = 'rupeshtiwari';
  const repo = 'blogs';
  
  console.log('🔍 Fetching failed build logs...\n');
  
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  try {
    // Get the failed workflow run
    const { data: runs } = await octokit.actions.listWorkflowRunsForRepo({
      owner,
      repo,
      status: 'failure',
      per_page: 1
    });
    
    if (runs.workflow_runs.length === 0) {
      console.log('No failed runs found');
      return;
    }
    
    const failedRun = runs.workflow_runs[0];
    console.log(`Failed run: ${failedRun.name} - ${failedRun.id}`);
    console.log(`Triggered: ${failedRun.created_at}`);
    console.log(`URL: ${failedRun.html_url}`);
    
    // Get jobs for this run
    const { data: jobs } = await octokit.actions.listJobsForWorkflowRun({
      owner,
      repo,
      run_id: failedRun.id
    });
    
    console.log('\nJobs:');
    for (const job of jobs.jobs) {
      const icon = job.conclusion === 'success' ? '✅' : job.conclusion === 'failure' ? '❌' : '🔄';
      console.log(`  ${icon} ${job.name}: ${job.conclusion || job.status}`);
      
      if (job.conclusion === 'failure') {
        console.log(`\n  Failed steps in ${job.name}:`);
        for (const step of job.steps || []) {
          if (step.conclusion === 'failure') {
            console.log(`    ❌ ${step.name}`);
          }
        }
        
        // Try to get logs
        try {
          const { data: logs } = await octokit.actions.downloadJobLogsForWorkflowRun({
            owner,
            repo,
            job_id: job.id
          });
          
          const logText = typeof logs === 'string' ? logs : '';
          // Look for error messages
          const errorLines = logText.split('\n').filter((line: string) => 
            line.toLowerCase().includes('error') || 
            line.toLowerCase().includes('failed') ||
            line.includes('Build Warning') ||
            line.includes('::error::')
          );
          
          if (errorLines.length > 0) {
            console.log('\n  Error logs:');
            errorLines.slice(0, 20).forEach((line: string) => console.log(`    ${line.trim()}`));
          }
        } catch (e: any) {
          console.log('  Could not fetch logs:', e.message);
        }
      }
    }
    
  } catch (error: any) {
    console.error('❌ Error:', error.message);
  }
}

checkBuildLogs().catch(console.error);
