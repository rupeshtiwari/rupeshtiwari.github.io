---
title: Caching Pipeline Not Working in Azure DevOps Server 2020
date: 2021-02-25 00:00 +0000
description: Caching azure artifacts are not possible for azure server 2020
header:
  image: https://i.imgur.com/hR3hWDC.png 
  teaser: https://i.imgur.com/xCqDrOE.png
  og_image: https://i.imgur.com/xCqDrOE.png
category: 
  - devops
tags:
  - devops
  - webdev
  - azure
  - beginners
published: true
author_profile: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
---

>Artifacts caching does not work on-premise **Azure DevOps Server 2020**. The [Azure DevOps documentation on Cache Action]( https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/cache?view=azure-devops) is not updated and that is misleading.  

## Cache@2 utility Not working on premise Azure DevOps

You will get below error when you use `cache@2` in your pipeline.  Here is the [Microsoft GitHub Issue](https://github.com/microsoft/azure-pipelines-tasks/issues/13937). It clearly says that, `Cache@2` task is not supported on-premises. It works on Azure DevOps though however not work on Azure DevOps On-Premise Server. 

```
'API resource location is not registered' error with Azure pipeline cache task
```

[Reead: Stack overflow error](https://stackoverflow.com/questions/65187680/getting-api-resource-location-is-not-registered-error-with-azure-pipeline-cach)


## Why Cache@2 is not working in DevOps Server 

Microsoft DevOps Server does not support `Universal Packages` that is why `node_module` caching in pipeline does not work using `cache@2` or any `Universal Packages`. 

Currently, [Universal Packages are only available for Azure DevOps Services](https://developercommunity.visualstudio.com/content/problem/1223753/availability-of-universal-packages-in-azure-devops.html).

## When cache is included?

It seems by March it will be done as per [Microsoft GitHub Pull Request](https://github.com/Microsoft/azure-pipelines-yaml/pull/113). 

*If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box.*

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net).  If you want to become full stack developer and grow your carrier as new software developer or Lead Developer/Architect. Consider subscribing to our full stack development training programs. You can enroll to All-Access Monthly membership plans to get unlimited access to all of our video courses, slides, source code & monthly video calls.

- Please subscribe to [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to access current and future angular, node.js and related courses.
- Please subscribe to [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to get everything from PRO plan. Additionally, you will get access to monthly live Q&A video call with Rupesh and you can ask doubts/questions and get more help, tips and tricks.

> You bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a Developer,Architect or Lead Engineer role.
> 

**💖 Say 👋 to me!** 
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:fullstackmaster1@gmail.com?subject=Hi">fullstackmaster1@gmail.com</a> 
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)