---
title: Caching Azure CI Pipeline Artifacts
date: '2021-01-15 00:00 +0000'
subtitle: Learn how Caching improves speed of your Angular Build in Azure CI build
description: Learn how Caching improves speed of your Angular Build in Azure CI build

header:
  image: 'https://i.imgur.com/hR3hWDC.jpg'
  teaser: https://i.imgur.com/xCqDrOE.jpg
  og_image: https://i.imgur.com/xCqDrOE.jpg

tags:
  - devops
  - azure
  - tutorial
  - beginners
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 589364
toc: true
related: true
share: true
read_time: true
author_profile: true
---

If you are following agile then continuous integration is must. I have setup
CI/CD in Azure DevOps and I personally found my **Angular** build is taking lot
of time. The `npm` install step itself takes like around 3 minutes or so to
download all **node_modules** files. If you are using
[nrwl.Nx monorepo](https://nx.dev/) then you will notice your `npm install` or
`npm ci` step will take around 8 to 10 minutes. Every-time you push the build it
will download all of the node packages from npm.org and will spend same amount
of time even-though you have not changed their versions. That is waste of time
and resources.

Fortunately, Azure DevOps now offers a new build task called
[cache task](https://docs.microsoft.com/en-us/azure/devops/pipelines/release/caching?view=azure-devops)
(Pipeline Caching). In this article I will give you steps to create a Build
Definition by using Cache Task. I will demonstrate how you can speedup your
build process more than 50% or so.

## Create Node.js Project

After restoring from cache during build time. If I use the node package to run
some program it should work lets test it.

add build script in package.json `build: node index.js`

index.js

```json=
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
```

## How to know cache location in Azure DevOps.

Check the log of `npm install` or `npm ci`

![](https://i.imgur.com/w9Jv2n9.png)

In my case it says `D:\\a\\.npm` which means it is `$(Pipeline.Workspace)/.npm`
in azure devops machine.

In this example it says cache location is `C:\\npm\\cache`

![](https://i.imgur.com/gm4ZDzA.png)

## First Npm Ci 20s

![](https://i.imgur.com/l1xLLRw.png)

## Second Time Npm Ci <1s

After first time build if you do not change package-lock.json file and rebuild
then your build should be super fast even less than a second.

![](https://i.imgur.com/WtatWWj.png)

## Steps to create Azure Devops CI Build Definition with Cache

Create new pipeline and select classic editor and start adding task as mentioned
below.

### step 1: Add Cache Task

Pipeline caching can help reduce build time by allowing the outputs or
downloaded dependencies from one run to be reused in later runs, thereby
reducing or avoiding the cost to recreate or re-download the same files again.

```
name: Cache npm Dependencies
key: **/package-lock.json, !**/node_modules/**/package-lock.json, !**/.*/**/package-lock.json
path:$(Build.SourcesDirectory)/node_modules
```

![](https://i.imgur.com/cwJQtEY.png)

### step 2: Add npm task for ci

select `ci`

Inside Control options:

- set enabled
- Run this task: Select Custom Condition
- Add `eq(variables['CacheRestored'],False)` in Custom Condition Text.
  ![](https://i.imgur.com/edQZnMN.png)

### step 3: Add npm task for build

Add new npm task and call it `npm build` Add your build script from your
package.json

![](https://i.imgur.com/ttAwfP8.png)

## Build Definition

```yaml
pool:
  name: Azure Pipelines
  demands: npm

steps:
  - task: Cache@2
    displayName: 'Cache npm Dependencies'
    inputs:
      key: '**/package-lock.json, !**/node_modules/**/package-lock.json,
        !**/.*/**/package-lock.json'
      path: '$(Build.SourcesDirectory)/node_modules'
      cacheHitVar: CacheRestored

  - task: Npm@1
    displayName: 'npm ci'
    inputs:
      command: ci
      verbose: false
    condition: eq(variables['CacheRestored'],False)

  - task: Npm@1
    displayName: 'npm build'
    inputs:
      command: custom
      verbose: false
      customCommand: 'run build'
```

## Become full stack developer 💻

If you want to become full stack developer and grow your carrier as new software
developer or Lead Developer/Architect. Consider subscribing to our full stack
development training programs. We have All-Access Monthly membership plans and
you will get unlimited access to all of our video courses, slides, source code &
Monthly video calls.

- Please subscribe to
  [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to
  access current and future angular, node.js and related courses.
- Please subscribe to
  [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to
  get everything from PRO plan. Additionally, you will get access to monthly
  live Q&A video call with Rupesh and you can ask doubts/questions and get more
  help, tips and tricks.

> Your bright future is awaiting for you so visit today
> [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board
> on your dream software company as a Developer,Architect or Lead Engineer role.

**💖 Say 👋 to me!**

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>
