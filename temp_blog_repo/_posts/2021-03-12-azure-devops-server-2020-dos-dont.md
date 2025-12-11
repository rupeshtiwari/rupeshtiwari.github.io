---
title: "Azure DevOps Server 2020 Do's & Don't"
date: 2021-03-12 00:00 +0000
description: "Guidelines for on-premise Azure DevOp's Server"
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/xhD5sAQ.png
header:
  image: https://i.imgur.com/fTKI1gL.png
  teaser: https://i.imgur.com/xhD5sAQ.png
  og_image: https://i.imgur.com/xhD5sAQ.png
category:
  - devops
tags:
  - devops
  - azure
  - beginners
  - tutorial
---

> Did you know **Azure DevOps Services** and **Azure DevOps Server** are different entities? I have learned lessons while working on **Azure DevOps Server 2020** on-premise pipelines. In this article, I would share all of them so that you don't repeat the mistake and get benefited.

## Azure DevOps Vs Azure DevOps Server

**Azure DevOps Services:**
If you are working on dev.azure.com portal then you are using Azure DevOps Services. Most of the facilities you will get here. Microsoft is also focusing more on this portal to provide excellent services. I also supports `universal packages` such as `Cache` task etc.

**Azure DevOps Server:**
If you are using Azure DevOps on your premise. Just like you were doing while using TFS on premise. Then it is called as **Azure DevOps Server.** `Universal Packages` are not supported in Azure DevOps Server as of now.

## Azure DevOps Server 2020

In this article I will explain my learning from Azure DevOps Server 2020 only. In my company we are using **Azure DevOps Server 2020**
And my machines are **WINDOWS Operating Systems**. If you are also using on-premise Azure DevOps with Windows OS then continue reading this article.

## Defining Build Agent Pool Name

In your Pipeline `YML` file make sure you define correct `Build Pool Name`. If you put `default` then It will take the default pool from your portal settings and use default agent as well. Which is not recommended.

### Option 1: Define the Build Agent Pool Name from DevOps Editor

Build Agent Pool will actually point to a physical build machine. So by doing this you are dictating Azure DevOps server to build your code on a particular machine.

You can define the Build Agent Pool from Editor.

1. Edit your CI/CD pipeline

![](https://i.imgur.com/eAF7jnv.png)

2. Select Trigger option

![](https://i.imgur.com/7Cd5FQR.png)

3. Select your Agent Pool Name

![](https://i.imgur.com/Af0lT0T.png)

### Option 2: Defining the Build Agent Pool in YML file

Another option is to define pool name on your `azure-pipelines.yml` file.

```yml
pool: BuildPool-1
```

![](https://i.imgur.com/ZNKh8Im.png)

## Using PowerShell Task instead of Script Task

If your on-premise azure server machine is windows one then always prefer **`powershell`** task over **`script`**. I love to use `script` task. **script task** In **Windows Azure Server** refers to **`command line`** scripts only. However, I have very bad experience executing node.js scripts using `script` task in azure pipeline. It behaves very weirdly. I would therefore, advise even though it is very prompting to use `script` don't use it.

👍 Rule of thumb is: Use **PowerShell** **task** when you want to execute **node.js** scripts on build machine.

![](https://i.imgur.com/BGqlTRc.png)

## Sharing `JSON` across Azure Pipeline Task

Sharing JSON across the azure pipeline task is common thing. Suppose you have a node.js script that returns a JSON structure all the commands you want to execute. That JSON you wan to use in next task.

The simple way that works in `ubuntu` Azure DevOps Services. However, in windows on-premise Azure DevOps Server 2020 below is the way to use JSON across tasks.

**Task 1 is returning a JSON**

```javascript=
# in script1.js
console.log({build:["proj1","proj2"]});
```

Azure-pipelines.yml

```yaml
powershell: |
  $commands=$(node script1.js)
  Write-Host "##vso[task.setvariable variable=COMMANDS]$commands"
```

**In Task 2 Using the JSON Shared from Task 1**

```javascript=
# in script2.js

/* note here the json will come as string
 * and JSON.parse(process.argv[2]) won't work.
 * You must use eval to assign
 * the json in global variable.
*/
👉eval("commands="+process.argv[2]);👈

const projects = commands['build'];

```

**azure-pipelines.yml**

```yaml
powershell: |
  node script1.js $(COMMANDS)
```

## Tagging Git Branch on Azure DevOps

The recommended way to tag the Git Branch in Azure DevOps Server is to tag from the Pipeline Editor.

Follow the steps to tag your branch.

1. Select YAML
2. Select Get Sources
3. On Build Success I will tag. Feel free to choose whichever option you want.
4. Build Number as Tag Format. You can use something else for Tagging.

![](https://i.imgur.com/2iEVkYn.png)

_If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your bright future is awaiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
