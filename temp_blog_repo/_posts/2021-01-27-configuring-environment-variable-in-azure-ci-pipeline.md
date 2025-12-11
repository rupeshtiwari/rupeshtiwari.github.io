---
title: Configuring Environment Variable in Azure CI Pipeline
date: '2021-01-27 00:00 +0000'
subtitle: Learn how to define and use environment variable in azure ci pipeline
description: Learn how to define and use environment variable in azure ci pipeline
image: 'https://i.imgur.com/OISr8kK.png'
cover_image: 'https://i.imgur.com/OISr8kK.png'
thumbnail-img: 'https://i.imgur.com/JiL3zVz.png'
share-img: 'https://i.imgur.com/JiL3zVz.png'
tags:
  - devops
  - beginners
  - tutorial
  - azure
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 590145
toc: true
related: true
share: true
read_time: true
author_profile: true
---

> Do you want to create environment level variable for your Azure Build CI
> Pipeline and access them in your azure pipeline task? Example: If you are
> using [nx monorepo](https://nx.dev/) and you want to skip the Nx Caching while
> building your project in Azure pipeline or your build machine then read this
> article to understand it.

## New Variable Form

First go to your pipeline definition and select variable.

![](https://i.imgur.com/pIhtjuP.png)

## Submit New Variable Form

Add variable name with its default value and then submit.

![](https://i.imgur.com/hzet2hW.png)

![](https://i.imgur.com/pE19aCJ.png)

## Access Environment Variable in YML file

Prefix it with a dollar sign and enclose it in parentheses. For example:
`$(SKIP_NX_CACHE)`

## Access Environment Variable in Script

use environment variable syntax. Replace . and space with \_, capitalize the
letters, and then use your platform's syntax for referencing an environment
variable. Examples:

1. Batch script: `%SKIP_NX_CACHE%`
2. PowerShell script: `${env:SKIP_NX_CACHE}`
3. Bash script: `$(SKIP_NX_CACHE)`

## Example Accessing Environment Variable in You Nx Monorepo CI Pipeline

```yaml=
pool:
  vmImage: 'ubuntu-latest'

trigger:
  - main

variables:
  CAN_SKIP_NX_CACHE: $[eq(variables['SKIP_NX_CACHE'], 'True')] # Reading CAN_SKIP_NX_CACHE environment variable.

steps:
    - script: node ./build.js $(SKIP_NX_CACHE) # Calling your build script with environment variable value.
```

While running new pipeline from azure portal. You can always select your
variable and update its value to false or true that will be passed to your build
pipeline.

![](https://i.imgur.com/2Me50b0.png)

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
> **💖 Say 👋 to me!**

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>
