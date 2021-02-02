---
layout: post
title: Updating Azure CI Pipeline Build Number
date: '2021-01-28 00:00 +0000'
subtitle: Learn how to update build number in azure ci pipeline
description: Learn how to update build number in azure ci pipeline
cover-img: 'https://i.imgur.com/hiQZ0BG.png'
cover_image: 'https://i.imgur.com/1Ncfprq.png'
thumbnail-img: 'https://i.imgur.com/MxavTGI.png'
share-img: 'https://i.imgur.com/MxavTGI.png'
tags: 'devops,node,beginners,angular'
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 590106
---

> Did you have requirement to update your **Angular** CI build number as your new Package.json version number and Branch name? Well this is a good practice to do in your **Azure Build CI pipeline** for JavaScript Front-end Project builds. Learn how to create and update Azure CI build Number in pattern like **buildId-master** or **1234-master** or if it is feature branch then it becomes **1234-feature1**. 

## Job running in Unix platform

![](https://i.imgur.com/1hcP4pq.png)

```shell
Pool: Azure Pipelines
Image: Ubuntu16
Agent: Hosted Agent
Started: Today at 3:33 PM
Duration: 6s
```

## Create New Build Number

```yaml
- script: | 
    export newNumber=123-$(Build.SourceBranchName)
    echo "##vso[task.setvariable variable=NEWBUILDNUMBER;]$newNumber"
  displayName: 'Get New Build Number'
```

## Display New Build Number 

```yaml
- script: |
    echo new build number $(NEWBUILDNUMBER)
  displayName: 'Display New Build Number'
```


## Update build number with new Build Number

```yaml
- script: |
    echo "##vso[build.updatebuildnumber]$NEWBUILDNUMBER"
  displayName: 'Update Build Number'
```


## Display updated build number

```yaml
- script: |
    echo "New Build Number is: $(Build.BuildNumber)"
  displayName: 'Display Updated Build Number'
```

## Check Azure CI Pipeline

![](https://i.imgur.com/KvPBbxl.png)

### Complete azure-pipelines.yml file

```yaml
trigger:
- main

steps:
- script: | 
    export newNumber=123-$(Build.SourceBranchName)
    echo "===== creating new variable ====="
    echo "##vso[task.setvariable variable=NEWBUILDNUMBER;]$newNumber"
    echo "===== creating new variable ====="
  displayName: 'Get New Build Number'

- script: |
    echo new build number $(NEWBUILDNUMBER)
  displayName: 'Display New Build Number'

- script: |
    echo "===== updating buildnumber ====="
    echo "##vso[build.updatebuildnumber]$NEWBUILDNUMBER"
    echo "===== updating buildnumber ====="
  displayName: 'Update Build Number'

- script: |
    echo "New Build Number is: $(Build.BuildNumber)"
  displayName: 'Display Updated Build Number'
```


<br/>

## Become full stack developer 💻

If you want to become full stack developer and grow your carrier as new software developer or Lead Developer/Architect. Consider subscribing to our full stack development training programs. We have All-Access Monthly membership plans and you will get unlimited access to all of our video courses, slides, source code & Monthly video calls.

- Please subscribe to [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to access current and future angular, node.js and related courses.
- Please subscribe to [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to get everything from PRO plan. Additionally, you will get access to monthly live Q&A video call with Rupesh and you can ask doubts/questions and get more help, tips and tricks.

> You bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a Developer,Architect or Lead Engineer role.
<a href="https://www.fullstackmaster.net">
    <img height="65" src="https://i.imgur.com/9OCLciM.png" width="270">
</a>
 

<br/> 

### 💖 Say 👋 to me! 

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:fullstackmaster1@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>
