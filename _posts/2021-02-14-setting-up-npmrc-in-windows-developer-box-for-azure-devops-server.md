---
title: Creating NPMRC in Windows Developer Box for Azure DevOps Server
date: "2021-02-14 00:00 +0000"
subtitle: setting npm authentication for dev box for restoring npm packages
description: setting npm authentication for dev box for restoring npm packages
image: https://i.imgur.com/q8sk7gJ.png
header: 
  teaser: https://i.imgur.com/sgvjHr1.png
  og_image: https://i.imgur.com/sgvjHr1.png
  image: https://i.imgur.com/q8sk7gJ.png
image: "https://i.imgur.com/q8sk7gJ.png"
tags:
  - devops
  - npm
  - node
  - beginners
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
toc: true
toc_sticky: true
toc_icon: cog
excerpt_separator: <!--more-->
related: true
share: true
read_time: true
author_profile: true
---

> Are you wondering how to create an `.npmrc` file and put an
> `authentication token` from azure devOps for your team member's development
> boxes? Do you have multiple scoped private `npm` registries in your on-premise
> azure devOps artifacts feeds? This is a required tooling you must do when you
> are working on on-premise Azure DevOps server. Read this article to get your
> answers.

## Introduction

In this article, I will focus more on restoring scoped node packages from local
artifacts feed. I have `myorg` as my company which creates some `npm` packages
which are not public called as [soped](https://docs.npmjs.com/misc/scope)
packages. They are goin in local azure artifacts feed.

As a developer, I need to setup my `npmrc` file and it's credential to install
all of my scoped `npm` packages. Read to learn how to Set up `npm`
authentication on your dev box.

## Why do you need .npmrc?

In order to **publish** or **restore** npm packages from either npmjs.com or
your local azure devOps `npm` registry you need authentication. Azure devOps
`npm` registry uses `.npmrc` file where you define your registry names and your
authentication token.
[Learn more about .npmrc configuration files](https://docs.npmjs.com/files/npmrc)

## vsts-npm-auth

Remember `vsts-npm-auth` can automatically add authentication token to npmrc if
it has only one registry entry. In this article, I will explain you how to setup
npmrc authentication for multiple registry `npmrc` file.
[Learn more here](https://docs.microsoft.com/en-us/azure/devops/artifacts/npm/npmrc?view=azure-devops&tabs=windows#windows)

## What is Upstream sources in Azure DevOps?

If your project only depends on `npm` packages from npmjs.com. Then in that case
you just create one upstream source in azure devOps server.
[Use packages from npmjs.com Learn more](https://docs.microsoft.com/en-us/azure/devops/artifacts/npm/upstream-sources?view=azure-devops)

In our discussion, we are talking about the
[Scoped](https://docs.npmjs.com/misc/scope) `npm` packages. Created locally for
my company and published to azure artifacts feed.

## Using NPM Scopes

[Scopes](https://docs.npmjs.com/misc/scope) are built into `npm` and are a way
of grouping packages together. You can publish and download scoped `npm`
packages to/from your azure Artifacts feeds. There are benefits of using scoped
packages and many company uses local scope and they publish their local `npm`
packages. We are doing the same.

**Defining our scoped projects**

Suppose, I have a project that depends on 2 scoped packages which are in my
azure artifacts feed. `@myorg-branding/logging` and `@myorg-customers/editor`
and it also depends on some packages from npmjs.com like `lodash` , `jquery`.
Now in order to install my packages from local artifacts feed what do I need to
do? How will I put authentication token such that I can download both private
and public packages? Let's see how can we setup our `.npmrc` file.

## Step 1: Creating .NPMRC file for scoped packages.

I will use VSCode to create `.npmrc` file and edit.

1. Open VsCode from `c:/users/<USERNAME>`
2. Create a file `.npmrc`

Next follow below instructions to get your authentication token and update
`.npmrc` file.

1. Go to your company's Azure Artifacts, select Connect to feed.
2. Select `npm`.
3. Select `Other` in the Project setup section. Copy the credential text from
   step ![](https://i.imgur.com/YS5DtGv.png)

## Step 2: Generating Personal Access Token (PAT)

Next, we need to create
[PAT](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page)
and encode Base64 and add to `.npmrc` file. We will create one

1. On the Connect to feed page click on Personal Access Token link. It will take
   you to page create new token and add new token.
2. I will give the name `NPM-DEV`
3. Keep the default collection
4. Expiration choose `Custom defined` and go for maximum ( which is 1 year
   expiry). Select 1 year time line. ![](https://i.imgur.com/dkzN2Hu.png)
5. Since this is for just development I will not check Build, Release, Test,
   Packaging etc. Select Custom defined, WorkItems Read write and manage, Code
   give full acess and select Create button.
   ![](https://i.imgur.com/mnXBvGO.png)
6. Copy the token created and notice expiry is set for next year.
   ![](https://i.imgur.com/qXlp4FB.png)

Note:💡 If you get authentication errors and can not install NPM packages with
this credential try to give **Full Access** to your PAT and try again. You can
[Edit your PAT anytime](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page#modify-a-pat)
to give full access.

## Step 3: Base64 encode the personal access token from Step 2

Don't go internet and use online base64 creator to convert in base64. Because,
someone can hack and take your organization PAT and misuse. To create base64
version of your PAT locally, run this command in PowerShell opened in admin
mode. It will prompt PAT so enter the Authentication token that you get from
Artifacts step 2. And then it will give you the base64 text. Copy the text you
will need that in next step.

```shell
node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
```

![](https://i.imgur.com/NSTsZpx.png)

## Step 4: Update npmrc file with Base64 PAT

Replace both [BASE64_ENCODED_PERSONAL_ACCESS_TOKEN] values in your user `.npmrc`
file with your personal access token from Step 3

## Final NPMRC file

This is how your `.npmrc` file look like.

```shell
@myorg-branding:registry=http://myorg-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/registry/
@myorg-customers:registry=http://aicpa-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/registry/
always-auth=true

; begin auth token
//myorg-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/registry/:username=NPM-DEV
//myorg-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/registry/:_password=bKrmcXhrNUFwdG50ZGcydGJqY2JkcmZlNnY2b3ozemtpbDdtMmxtY3Nya2FtNG5ybjVjYQ==
//myorg-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/registry/:email=myorg@myorg.com
//myorg-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/:username=NPM-DEV
//myorg-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/:_password=axhmcXhrNXFwdG54ZGcydGJqY2JkcmZlNnY2b3ozemtpbDdtMmxtY3Nya2FtNG5ybjVjYQ==
//myorg-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/:email=myorg@myorg.com
; end auth token
```

## Installing Scoped packages

Now you can open your project where you have scoped packages as well as public
npm packages.

![](https://i.imgur.com/M0Mh3ev.png)

Then run `npm install` to install scoped packages and npmjs.com packages as
well.

![](https://i.imgur.com/WVp0M65.png)

## Should I create PAT and NPMRC for each member in my team?

The answer to this question is relative. However, I will prefer to do one PAT
for entire dev team. So that one person can be authorized to maintain this PAT
whenever expired that person can update the PAT.

Keep your NPMRC in your company's shared folder so that all DEV team members can
copy from there and drop it to`%USERPROFILE%/.npmrc` location.

## Should I create new PAT and NPMRC for CI/CD?

For BUILD and release CI/CD, I would prefer creating separate PAT to keep things
separate. Feel free to use same if you have given Full Access or you don't want
to keep separate.

Like I said the answer to these questions are relative. There is no right or
wrong.

## How many .npmrc files I should have in my Team?

I would say minimum 2:

1. One for developers (`npm-user`)
2. One for CI/CD (`npm-cicd`)

## How do I update the PAT after expiry?

You can assign one person in the team who will put a calendar and remind
him/herself to update the PAT one month before it expires. S/he will Edit the
PAT and extend the date for next year.

1. Go to PAT list page
   http://myorg-tfs:8080/tfs/DefaultCollection/\_usersSettings/tokens
   ![](https://i.imgur.com/jHw9tXZ.png)
2. Select NPM-USER,
3. Select Edit button ![](https://i.imgur.com/faFED4f.png)
4. Change the date for next year to expire ![](https://i.imgur.com/QxjQy15.png)
5. Select Save Button

## References

1. [Use npm scopes](https://docs.microsoft.com/en-us/azure/devops/artifacts/npm/scopes?view=azure-devops&tabs=windows)
2. [Upstream sources](https://docs.microsoft.com/en-us/azure/devops/artifacts/concepts/upstream-sources?view=azure-devops)
3. [Set up authentication on your dev box](https://docs.microsoft.com/en-us/azure/devops/artifacts/npm/npmrc?view=azure-devops&tabs=windows#set-up-authentication-on-your-dev-box)
4. Then follow the step 3 to create base64 token and update npmrc file.

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
<a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi"> Email Rupesh</a> Founder
of <a href="https://www.fullstackmaster.net"> Fullstack Master</a>
