---
layout: post
title: Sharing Variables within Tasks in Azure CI Pipeline
date: '2021-01-22 00:00 +0000'
subtitle: Learn how to create custom variable and share among Azure CI Pipeline tasks
description: Learn how to create custom variable and share among Azure CI Pipeline tasks
cover-img: https://i.imgur.com/hiQZ0BG.png
cover_image: https://i.imgur.com/3vFNOtc.png
thumbnail-img: https://i.imgur.com/MxavTGI.png
share-img: https://i.imgur.com/MxavTGI.png
tags: 'devops,ci,tutorial,beginners'
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 589372
---

Do you want to create one variable in task-1 and read the value of that variable in task-2 in your azure ci pipeline? If your answer is yes then read this article. 

I will show you how to get [new build number from node.js](https://hackmd.io/QiDKOk2RTKee1Y822ceSYA). Then we will use the new build number in another task to update the azure pipeline build number. 

## azure devops setvariable task
We will write expression to run inbuilt task from azure pipeline to set new variable. When we run  `script` from azure pipeline then basically it is a command line script you are running in windows command prompt.
`echo '##vso[task.setvariable variable=one]secondValue'`

```yml= 
- steps
 - script : |
     echo "##vso[task.setvariable variable=name]Rupesh"
     
 - script : echo "My Name is $(name)"  # it will print Rupesh
```

Notice we are using [Macro Syntax](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch#macro-syntax-variables) to access the variable `name`. 
:bulb: Notice I have read the variable `name` in next task. If I would read the variable on the first task it will print empty. So any task that assigns pipeline variables those are only accessible in next task onwards only. 

## Creating Pipeline Variable in Azure pipeline Task

Lets create `newBuildNumber` variable that we are getting from node.js script. 

:bulb: As we know when you create a pipeline level variable in a task then within the same task you will not be able to access that pipeline variable within same task. Therefore, always when you create a pipeline variable then try to always create new task to read that variable and do other task. Therefore, we are printing the value using task scoped variable `$num` on "Create New Variable" task. 



In below example I am using build.js file to get new build number. Read "[Calling Node.js Script from Azure Devops CI Pipeline](https://hackmd.io/QiDKOk2RTKee1Y822ceSYA)" to know how am I returning build id from build.js file.

Create below task and note we are using `setvariable` task to create `newBuildNumber` variable. 

```yaml=
- script: |
    echo "old buildnumber ~>$(Build.BuildNumber)"
    export num=$(node ./build.js $(Build.BuildId) $(Build.SourceBranchName))
    echo "##vso[task.setvariable variable=newBuildNumber]$num"
    echo "Created new variable 'newBuildNumber' with value $num"
  displayName: 'Creating New Variable'
  enabled: true
```
![](https://i.imgur.com/87SqLYm.png)


## Accessing Pipeline Variable in Azure pipeline Task

:bulb: Remember when you are accessing a pipeline variable that is shared across task then you must use [Macro Syntax](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch#macro-syntax-variables) means $(newBuildNumber). 

In this example I am using ``$(newBuildNumber)`` to access/read pipeline scoped `newBuildNumber` variable created from previous task.

We are updating the build number of the azure pipeline.

```yaml=
- script: |
    echo "Accessing NewBuild Number Variable $(newBuildNumber) & Updating Build Number of Pipeline"
    echo "##vso[build.updatebuildnumber]$(newBuildNumber)"
  displayName: 'Update Build Number'
  enabled: true
```
![](https://i.imgur.com/wL5xJkE.png)

## Displaying new Build number of azure pipeline
In order to display updated build number I will use `Build.BuildNumber`
```yaml=
- script:  echo "new buildnumber ~>$(Build.BuildNumber)"
  displayName: 'Display New Build Number'
  enabled: true
```

![](https://i.imgur.com/kMxUfSa.png)


--- 
## Become full stack developer 💻

If you want to become full stack developer and grow your carrier as new software developer or Lead Developer/Architect. Consider subscribing to our full stack development training programs. We have All-Access Monthly membership plans and you will get unlimited access to all of our video courses, slides, source code & Monthly video calls.

- Please subscribe to [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to access current and future angular, node.js and related courses.
- Please subscribe to [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to get everything from PRO plan. Additionally, you will get access to monthly live Q&A video call with Rupesh and you can ask doubts/questions and get more help, tips and tricks.

> You bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a Developer,Architect or Lead Engineer role.
<a href="https://www.fullstackmaster.net">
    <img height="65" src="https://i.imgur.com/9OCLciM.png" width="270">
</a>
 


--- 
### 💖 Say 👋 to me! 

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:fullstackmaster1@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>