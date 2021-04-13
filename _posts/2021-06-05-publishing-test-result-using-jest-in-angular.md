---
title: Publishing Test Results Using JEST in Angular
date: 2021-06-05 00:00 +0000
description: Learn publishing Angular Test results to Azure pipeline while using JEST test runners.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/24fxIaG.png
header:
  image: https://i.imgur.com/F7mns5J.png
  teaser: https://i.imgur.com/24fxIaG.png
  og_image: https://i.imgur.com/24fxIaG.png
tags:
  - angular
  - devops
  - azure
  - testing
---

> Are you wondering how to publish **Test Results** over **Azure CI Build** while using **Angular** and **JEST**? In this article I will demonstrate **nx monorepo** publishing test results using **azure pipeline**.

If you are u are using Karma Test Runner then read my previous article [Publishing Nx Monorepo Test Results in Azure CI Pipeline](https://www.rupeshtiwari.com/blog/publishing-nx-monorepo-test-results-in-azure-ci-pipeline/).

![](https://imgur.com/XwPm3dn.gif)

## Azure Publish Test Results Task

I am using **Azure CI build** to build, test and deploy my Angular App.

### Azure Publish Test Result Task Name

We will use Azure Task **`PublishTestResults@2`** to publish our angular test results to **Azure Pipelines**.

### Supported Test Results Formats

As of now Azure Task only supports below Test Result formats:

1. JUnit
2. NUnit
3. VSTest
4. xUnit
5. cTest

We will use **JUnit** format to publish Angular Test Result. Also just let you know that Azure The default option uses JUnit format to publish test results.

## Generating Test Results in Angular App

When we run test in Angular App Test Results files are supposed to be created.

### Installing Jest-JUnit npm Package

Since we are using JEST let's install [jest-junit](https://www.npmjs.com/package/jest-junit) in our angular app first.

![](https://imgur.com/LqZMBCh.png)

Run below script on root of your project where you see package.json file.

```shell
npm i -D jest-junit
```

### Updating Jest.Config

Let's define the JUnit Reporter config inside the Jest.Config file. Here I will define `outputDirectory` , `outputName` and `suiteName`

```
 reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test_results',
        outputName: 'jest-junit.xml',
        suiteName: 'Angular Inventions Tests'
      },
    ],
  ],
```

### Creating Test Script

In order to generate report we have to run the test. Add below test script in `package.json`.

```json
...
scripts :{
  "test:prod": "jest --ci"
  ...
}

```

### Generating Test Results

Let's Run `npm run test:prod` and notice our test is passing.

![](https://imgur.com/GZQZxhI.png)

As well as test report created under folder `test_results`.

![](https://imgur.com/kVq7uZ2.png)

## Azure Pipeline Update

In order for publishing your test results on azure pipelines. You can setup your `azure-pipelines.yml` for showing test results.

### Publish Test Results YAML

```yaml
- task: PublishTestResults@2
  enabled: false
  displayName: Publish Test Results
  inputs:
    testResultsFormat: 'JUnit'
    testResultsFiles: '**/test_results/jest-junit.xml'
    mergeTestResults: true
```

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
