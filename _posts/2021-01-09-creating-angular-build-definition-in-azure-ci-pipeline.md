---
layout: post
title: Creating Angular Build Definition in Azure CI Pipeline
date: "2021-01-09 00:00 +0000"
description: Learn creating Angular Build Azure CI Pipeline
subtitle: Learn creating Angular Build Azure CI Pipeline
image: "https://i.imgur.com/OCEHPk5.jpg"
cover-img: "https://i.imgur.com/NRaQUA5.png"
cover_image: "https://i.imgur.com/OCEHPk5.jpg"
thumbnail-img: "https://i.imgur.com/vkmKw3A.jpg"
share-img: "https://i.imgur.com/OCEHPk5.jpg"
tags:
  - devops
  - ci
  - angular
  - tutorial
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 589355
toc: true
---

If you want to create Build definition for Angular project in Azure DevOps, then
this article is for you. Login to
<a href="https://dev.azure.com/" class="crayons-link">Dev Azure</a> and go to
the pipelines and follow the instructions below:

- Click on new pipeline ![](https://i.imgur.com/lL89yiV.png)

- Use classic editor ![](https://i.imgur.com/8wKAv3h.png)

- Connect to repo ![](https://i.imgur.com/q5iSJZO.png)

- Tag your repository on success ![](https://i.imgur.com/bS4MlDc.png)

- Install npm packages ![](https://i.imgur.com/qmxh1BG.png)

- Build angular project ![](https://i.imgur.com/AYjqRfy.png)

- Copy Files to staging directory ![](https://i.imgur.com/ZccWGkS.png)

- Archive Files ![](https://i.imgur.com/kVK0idi.png)

- Publish artifacts to Drop folder ![](https://i.imgur.com/wyaK8G1.png)

---

```yaml
pool:
  name: Azure Pipelines
  demands: npm

steps:
  - task: Npm@1
    displayName: "npm install"
    inputs:
      verbose: false

  - task: Npm@1
    displayName: "npm build"
    inputs:
      command: custom
      verbose: false
      customCommand: "run build:apps"

  - task: CopyFiles@2
    displayName: "Copy Files to: $(Build.ArtifactStagingDirectory)"
    inputs:
      SourceFolder: "$(Build.SourcesDirectory)/dist"
      TargetFolder: "$(Build.ArtifactStagingDirectory)"

  - task: ArchiveFiles@2
    displayName: "Archive $(Build.ArtifactStagingDirectory)"
    inputs:
      rootFolderOrFile: "$(Build.ArtifactStagingDirectory)"
      includeRootFolder: false

  - task: PublishBuildArtifacts@1
    displayName: "Publish Artifact: drop"
```

## Running Angular Build on Azure Devops

Once you run angular build on azure devops. Then you will see it will create a
job and execute all task mentioned in build definition.
![](https://i.imgur.com/F2mvHHa.png)

## Where Drop folder goes?

Final archived folder will go at
`$(System.DefaultWorkingDirectory)/$(Build.BuildId)` location.

Drop folder will have buildid.zip file inside that you will have both `apps` and
`libs` folders.

![](https://i.imgur.com/fk6r96i.png)

## What drop folder has?

Drop folder has both `apps` and `libs` folders.
![](https://i.imgur.com/OdEd027.png)

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

> You bright future is waiting for you so visit today
> [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board
> on your dream software company as a Developer,Architect or Lead Engineer role.


**💖 Say 👋 to me!**

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:fullstackmaster1@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>
