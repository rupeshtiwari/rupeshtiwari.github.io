---
layout: post
title: Calling Node.js Script from Azure CI Pipeline
date: '2021-01-31 00:00 +0000'
subtitle: Learn how to execute custom node.js script from azure ci pipeline
description: Learn how to execute custom node.js script from azure ci pipeline
cover-img: 'https://i.imgur.com/NRaQUA5.png'
cover_image: 'https://i.imgur.com/mGXdBOh.png'
thumbnail-img: 'https://i.imgur.com/uXPOglx.png'
share-img: 'https://i.imgur.com/uXPOglx.png'
tags: 'devops,node,azure,beginners'
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 589939
---

> If you want to run **node.js script** from **azure-pipelines.yml** and get the value returned from node.js script and use it in your CI next task. Then read this article. Example: I wanted to get new build number as per my package.json next version by running node script and update my CI pipeline build number.

## Introduction 

In this article I will show: 
- How can you call `build.js` file to create new build number using package.json file & Azure CI pipeline build Id.
- Then update Azure CI pipeline build number with the returned new build number. 
- Our new build number should be like **<buildId>-<branchname>** example: **123-main** or **123-feature1**


## Creating JavaScript to create new Build Number

Create build.js file and here we will take `buildId` and `branch-name` as parameter passed from `azure-pipelines.yml` file. 

Then we will increase the build id by one and add branch name and use that as new Build Number. 


```javascript
const buildId = process.argv[2];
const sourceBranchName = process.argv[3];
const newVersion = `${+buildId + 1}-${sourceBranchName}`;

console.log(newVersion); //Console Log will return the new version to Azure Pipelines. 
```

👉 **Remember when you write value using console log in your node.js script. Then that value will be shared to the azure pipelines.yml file.**

Therefore, do not write console log in your script which you don't want to pass to azure pipeline. 

## Creating Azure Pipelines file
Note: When you are creating a variable that is scoped within a single task. Then 
- use `export` to set a variable
- And use `$variable` syntax to access variable value. 

In below example we create `num` variable and we use `$num` to read the value of the variable. 

```yaml
trigger:
- main

steps:
# calling node.js script
- script: |
    export num=$(node ./build.js $(Build.BuildId) $(Build.SourceBranchName))
    echo "node.js returned $num"
  displayName: 'Executing Node.js script'
```

## Running Azure CI Pipeline

![](https://i.imgur.com/eh7pTE3.png)


## Returning multiple value from Node.js to Azure pipeline

In order to return one value make sure just do single console.log and you will return exactly that value. 
Just like we did for build number above. 

In order to return multiple values to Azure pipeline from node.js script. Don't write multiple console.logs. 

For example if u want to return build and test command to azure pipeline then use below syntax in your node.js script file. 

```javascript=
console.log({
build: 'npm run build',
test: 'npm test'
})
```

## Updating the Build Number with new build number given by node.js script

We will use `"##vso[build.updatebuildnumber]$newNumber"` script to update build number. 

Add script to update the build number in the Azure pipelines

```yaml
- script: |
    echo "old buildnumber ~>$(Build.BuildNumber)"
    export num=$(node ./build.js $(Build.BuildId) $(Build.SourceBranchName))
    echo "node.js returned $num"
    echo "##vso[build.updatebuildnumber]$num"
  displayName: 'Update Build Number'
```

Add another new script to show the build number. 

💡 Do not show the build number on the same previous task otherwise it will display the old build only. You must create new script to show the updated build number. 

```yaml
- script:  echo "new buildnumber ~>$(Build.BuildNumber)"
  displayName: 'Display New Build Number'
```
Updating build number
![](https://i.imgur.com/A2UbZDE.png)
Displaying new build number
![](https://i.imgur.com/e1k5FWV.png)

<br/> 

## Become full stack developer 💻

If you want to become full stack developer and grow your carrier as new software developer or Lead Developer/Architect. Consider subscribing to our full stack development training programs. We have All-Access Monthly membership plans and you will get unlimited access to all of our video courses, slides, source code & Monthly video calls.

- Please subscribe to [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to access current and future angular, node.js and related courses.
- Please subscribe to [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to get everything from PRO plan. Additionally, you will get access to monthly live Q&A video call with Rupesh and you can ask doubts/questions and get more help, tips and tricks.

> You bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a Developer,Architect or Lead Engineer role.

<br/>
### 💖 Say 👋 to me! 

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:fullstackmaster1@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>