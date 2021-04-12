---
title: Adding Tag to GIT Branch in Azure CI Pipelines
date: '2021-02-21 00:00 +0000'
image: 'https://i.imgur.com/ulkZsbK.png'
header:
  image: 'https://i.imgur.com/FPNZHjY.png'
  teaser: 'https://i.imgur.com/ulkZsbK.png'
  og_image: 'https://i.imgur.com/ulkZsbK.png'
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
toc: true
excerpt_separator: <!--more-->
related: true
share: true
read_time: true
author_profile: true
---

> Do you want to know how to tag your git branch while building your source code
> when someone commits or merge to MASTER/MAIN branch? Then please read this
> article. I will show you which extension, I use in my Azure pipeline to Tag my
> git branch. ![](https://i.imgur.com/apsuoAD.png)

## Installing "Git Tag" DevOp's Extension to Azure Server

I will use the DevOps extension
[Git Tag](https://marketplace.visualstudio.com/items?itemName=ATP.ATP-GitTag) by
ATP to implement the tagging. The good part of this extension is can be used
both during build and release time. So I will prefer this extension only.

![](https://i.imgur.com/4R1oFZN.png)

Add this extension to your organization azure devOps server.

![](https://i.imgur.com/6JtDJe2.png)

If you are using on-premise azure devOps server then learn here
[How to Install extensions for on-premises servers](https://docs.microsoft.com/en-us/azure/devops/marketplace/get-tfs-extensions?view=azure-devops-2020)

## Adding Git Tag Task in Azure Pipelines

Type: Select Build ( if you are tagging while release then select release). I am
doing while build time.

![](https://i.imgur.com/FV3XPqb.png)

Add this task to your `azure-pipelines.yaml` file.

```yaml
- task: tagBuildOrRelease@0
  displayName: 'Add Tag to git'
  inputs:
    type: 'Build'
    tags: 'TEST-$(Build.BuildNumber)'
```

## Running Azure CI Pipelines

Notice when I run pipeline `Add Tag to git` task succeed

![](https://i.imgur.com/Kb30R4s.png)

Notice My branch got tag after build success:

<div class="mermaid">
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
</div>

![](https://i.imgur.com/apsuoAD.png)

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to
become full stack developer and grow your carrier as new software developer or
Lead Developer/Architect. Consider subscribing to our full stack development
training programs. You can enroll to All-Access Monthly membership plans to get
unlimited access to all of our video courses, slides, source code & monthly
video calls.

- Please subscribe to
  [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to
  access current and future angular, node.js and related courses.
- Please subscribe to
  [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to
  get everything from PRO plan. Additionally, you will get access to monthly
  live Q&A video call with Rupesh and you can ask doubts/questions and get more
  help, tips and tricks.

> Your future is waiting for you so visit today
> [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board
> on your dream software company as a Developer,Architect or Lead Engineer role.

**💖 Say 👋 to me!** Rupesh Tiwari <a href="https://www.rupeshtiwari.com">
www.rupeshtiwari.com</a> ✉️
<a href="mailto:fullstackmaster1@gmail.com?subject=Hi"> Email Rupesh</a> Founder
of <a href="https://www.fullstackmaster.net"> Fullstack Master</a>
