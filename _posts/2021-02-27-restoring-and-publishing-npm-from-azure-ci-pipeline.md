---
title: Restoring and Publishing NPM Packages from Azure CI Pipeline
date: '2021-02-27 00:00 +0000'
subtitle: >-
  restoring and publishing scoped npm packages from azure pipeline to azure
  artifacts
description: >-
  restoring and publishing scoped npm packages from azure pipeline to azure
  artifacts
header:
  image: 'https://i.imgur.com/MR0eU4y.jpg'
  teaser: https://i.imgur.com/d12se9m.jpg
  og_image: https://i.imgur.com/d12se9m.jpg
image: 'https://i.imgur.com/d12se9m.png'
tags:
  - devops
  - azure
  - angular
  - webdev
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

> Do you want to restore and publish your scoped and public `npm` packages from
> `Azure CI Pipeline`? Do you want to Configure CI/CD for Node application with
> Azure Pipelines? Are you Configuring a Node.js app? Then read this article. I
> will demonstrate the azure pipelines how to use `.npmrc` file and publish node
> packages to artifacts. And consume the same node package in your project by
> installing it locally.

## Introduction

I have one project, where I depend on 2 scoped `npm` libraries from my own
company's artifacts feed. And I want to create Azure Build CI pipeline which
will do below on build machine:

1. Install node packages both `private scoped` and `public npm packages`.

![](https://i.imgur.com/1KG5YGF.png)

3. Build project (optional)
4. publish the `dist` folder to my private azure artifacts `npm` registry

![](https://i.imgur.com/qlmAosT.png)

If you have not setup `.npmrc` file in your local box yet. Then please read
[Setting up NPMRC in Windows Developer Box for Azure DevOps Server](https://rupeshtiwari.github.io/2021-02-13-setting-up-npmrc-in-windows-developer-box-for-azure-devops-server/).

## Creating a repo on Azure DevOps Server

Create your repository in azure devOps server. This is my repo. You can create
`angular`, `vue.js` or any project. I have created simple JavaScript project.

![](https://i.imgur.com/pTjL09s.png)

![](https://i.imgur.com/rlQJwr7.png)

## Creating Personal Authentication Token for Azure CI/CD Pipeline

We need one personal authentication token in order to run `ci/cd` in azure
pipelines. Therefore, create a PAT called as `npm-cicd` in azure tokens and
`base64` encode it.
[Learn more here](https://rupeshtiwari.github.io/2021-02-13-setting-up-npmrc-in-windows-developer-box-for-azure-devops-server/).

![](https://i.imgur.com/0PZ8S5Z.png)

We will create new Azure CI/CD environment variable and use this `base64`
encoded value.

## Creating NPM_TOKEN secret on the Azure CI/CD server

Edit your Azure pipeline and in variables create a new secret `NPM_TOKEN`, in
your CI/CD server. Set your `Base64` encoded `auth token` as it's value.

![](https://i.imgur.com/OlYwgfW.png)

## Creating and Check-In a project-specific .npmrc file

[Learn how to create `.npmrc` here](https://rupeshtiwari.github.io/2021-02-13-setting-up-npmrc-in-windows-developer-box-for-azure-devops-server/).

If you keep the `.npmrc` at root level then for local developer when they try to
install `npm` packages they will get an error.

```error
Error: Failed to replace env in config: $(NPM_TOKEN)
```

![](https://i.imgur.com/8t1QtY9.png)

Therefore, consider moving `.npmrc` template file at `npmrc/.npmrc` location.
Create `.npmrc` file at `npmrc/.npmrc` location. Make sure you put the `.npmrc`
file under some folder, I will put it in `npmrc/.npmrc`. You can use any name
for this folder.

![](https://i.imgur.com/82T0P8G.png)

Next in `.npmrc` file make sure to use `$(NPM_TOKEN)` for password field in your
`.npmrc` file. We will use Azure Pipeline Environment Variable to dynamically
replace the value of `$(NPM_TOKEN)` in our `.npmrc` file at Build time in Azure
CI pipeline.

```yml
@myorg-branding:registry=http://myorg-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/registry/
@myorg-customers:registry=http://aicpa-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/registry/
always-auth=true

; begin auth token
//myorg-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/registry/:username=NPM-CICD
//myorg-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/registry/:_password=$(NPM_TOKEN)
//myorg-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/registry/:email=myorg@myorg.com
//myorg-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/:username=NPM-CICD
//myorg-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/:_password=$(NPM_TOKEN)
//myorg-tfs:8080/tfs/DefaultCollection/_packaging/NpmFeed/npm/:email=myorg@myorg.com
; end auth token
```

## Creating Azure Pipeline For restoring Npm Packages during CI Build

Create `azure-pipelines.yml` file.

1. First we have to copy .npmrc file to `package.json` location where we have
   defined our project `dependencies`. So that npm will use the credentials
   defined in `.npmrc` file and install all scoped private node packages.

```yaml
- task: CopyFiles@2
    displayName: copy npmrc file
    inputs:
      sourceFolder: 'npmrc'
      Contents: '**'
      targetFolder: './'
```

2. We need to install all `npm` packages.

```yaml
 - task: Npm@1
    displayName: 'NPM CI'
    inputs:
      command: ci
      verbose: false
```

3. Here is my final `Azure-Pipelines.yaml`

```yaml
trigger:
  - master

pool:
  name: 'Default'

steps:
  - task: CopyFiles@2
    displayName: copy npmrc file
    inputs:
      sourceFolder: 'npmrc'
      Contents: '**'
      targetFolder: './'
  - task: Npm@1
    displayName: 'NPM CI'
    inputs:
      command: ci
      verbose: false
```

## Running Azure Pipelines to restore scoped `npm` packages on CI build

While running CI build, it will dynamically use the `NPM_TOKEN` in my `.npmrc`
file and use that credential to restore scoped private `npm` packages from azure
artifacts feed. Notice my build succeed and I could install all my local and
public node packages.

![](https://i.imgur.com/Vs2hXXa.png)

## `.npmrc` is Required During Publishing `Npm` Package

So we could install scoped `npm` packages during CI build. Now we will add
`npm publish` script to publish our project into azure artifacts feed. However,
notice in my project I want to publish my files which are under `dist` folder.

![](https://i.imgur.com/qlmAosT.png)

You might know that in order to publish files to `npm` registry. You must add
`.npmrc` file to the location where your `package.json` is present and from the
location where you are running `npm publish` script.

Therefore, we must copy `.npmrc` file to `dist` folder as well. I will do this
copy process in my `build` script.

## Creating Build script to copy `.npmrc` file To `dist` folder

1. Install [copyfiles](https://www.npmjs.com/package/copyfiles) in your project
   devdependencies. Run `npm i copyfiles -D`

2. Create `build` script add below code:

```shell
  "scripts": {
    "build": "copyfiles -f npmrc/.npmrc dist"
  },
```

Run Build `npm run build` Notice `.npmrc` file get copied to `dist` folder.

![](https://i.imgur.com/AzC3Fgw.png)

If you are using **Angular** project then do below to get `.npmrc` file copied
automatically on `ng build` command.

- Go to `angular.json` or if you are using [Nx monorepo](https://nx.dev) then go
  to `workspace.json` and identify location
  `yourProjectName.targets.build.options.assets` In this location just add your
  `.npmrc` file path and it will be copied to dist folder automatically.

  ```json
  "YourAngularApp": {
      "targets": {
          "build": {
              "options": { ...
                   "assets": [
                       ...,
                       "apps/cutepuppies-admin/src/.npmrc"
                      ],
  ```

## Adding Build Script in Azure CI Pipelines

Now we will add command line script azure pipelines to run `npm run build`. Add
below script on `azure-pipelines.yml`

```yaml
- script: npm run build
  displayName: Build
```

Notice build is success:

![](https://i.imgur.com/AiBJ3NU.png)

## Adding Publish script in Azure CI Pipelines

Now we will run `npm publish` from `dist` folder. Add below script on
`azure-pipelines.yml`

```yaml
- script: npm publish
  displayName: Publish
  workingDirectory: './dist'
```

Notice publish is success:

![](https://i.imgur.com/aklTf94.png)

## Verify Azure Artifacts to See your `Npm` Package

Now I will go to on-premise azure `artifacts` and search for my `npm` package.
Notice I find my package in my azure artifacts.

![](https://i.imgur.com/c0jFAfi.png)

## Install your NPM package and use it

Next I will install my published `npm` package in some project and try to use
it.

![](https://i.imgur.com/JhzAAa8.png)

```javascript
const { log } = require('@myorg-branding/testing-cicd');

log('Working with my new package logger');
```

See my package is working ![](https://i.imgur.com/xmpUF7b.png)

## References

1. https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow

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
