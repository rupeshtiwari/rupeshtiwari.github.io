---
layout: post
title: How to Share Variables Between Tasks in Azure CI Pipeline
date: '2021-01-28 00:00 +0000'
subtitle: Learn sharing variable among azure ci tasks
description: Learn sharing variable among azure ci tasks
cover-img: 'https://i.imgur.com/hiQZ0BG.png'
cover_image: null
thumbnail-img: null
share-img: null
tags: 'devops,azure,tutorial,beginners'
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 589366
---

## Passing variables between tasks in the same job
In a script task, you need to print a special value to STDOUT that will be captured by Azure Pipelines to set the variable.


For example, to pass the variable COMMANDS between scripts:
1. Set the value with the command echo `"##vso[task.setvariable variable=COMMANDS]npm run build"`
2. In subsequent tasks, you can use the `$(COMMANDS)` syntax to have Azure Pipelines replace the variable with `npm run build`
3. Alternatively, in the following scripts tasks, `COMMANDS` is also set as environmental variable and can be accessed as `$COMMANDS`


--- 
## Become full stack developer 💻

If you want to become full stack developer and grow your carrier as new software developer or Lead Developer/Architect. Consider subscribing to our full stack development training programs. We have All-Access Monthly membership plans and you will get unlimited access to all of our video courses, slides, source code & Monthly video calls.

- Please subscribe to [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to access current and future angular, node.js and related courses.
- Please subscribe to [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to get everything from PRO plan. Additionally, you will get access to monthly live Q&A video call with Rupesh and you can ask doubts/questions and get more help, tips and tricks.

> You bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a Developer,Architect or Lead Engineer role.
<a href="https://www.fullstackmaster.net">
    <img height="65" src="https://i.imgur.com/9OCLciM.png" width="270">
</a>
 
