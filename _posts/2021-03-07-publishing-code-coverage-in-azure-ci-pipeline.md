---
title: Publishing Code Coverage in Azure CI Pipeline
date: "2021-03-07 00:00 +0000"
subtitle: Learn how to show Angular Code Coverage Report in Azure CI Pipeline
description: Learn how to show Angular Code Coverage Report in Azure CI Pipeline
image: "https://i.imgur.com/oaeFs3U.png"
cover_image: "https://i.imgur.com/oaeFs3U.png"
thumbnail-img: "https://i.imgur.com/lF87q1A.png"
share-img: "https://i.imgur.com/lF87q1A.png"
canonical_url: >-
  https://rupeshtiwari.github.io/2021-03-06-publishing-code-coverage-in-azure-ci-pipeline/
tags:
  - devops
  - angular
  - azure
  - beginners
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

> Do you want to show **Angular** Code Coverage Report in Azure CI Pipeline then
> read this article and follow the steps.

## IstanbulReporter in Karma.conf.js

Go to `Karma.conf.js` of your angular project and confirm you have **cobertura**
reporter.

```json
 coverageIstanbulReporter: {
      dir: require("path").join(
        __dirname,
        "../../coverage/fsms-angular-pubsub"
      ),
      reports: ["html", "lcovonly", "text-summary", "cobertura" 👈 //required],
      fixWebpackSourcePaths: true,
    },
```

## Running Test with Code Coverage Flag

While running test using angular cli make sure you pass `--code-coverage=true`.

```shell
ng test --code-coverage=true
```

![](https://i.imgur.com/XXYxtHz.png)

## Adding Code coverage Task in Azure Pipelines

Next use `PublishCodeCoverageResults@1` task from azure DevOps to publish the
`cobertura` report.

```yaml
- task: PublishCodeCoverageResults@1
  enabled: true
  displayName: Code Coverage
  inputs:
    codeCoverageTool: "Cobertura"
    summaryFileLocation:
      "./coverage/fsms-angular-pubsub/cobertura-coverage.xml"
      # 👆  put your coverage file path
  condition: |
    succeeded()
```

## Showing Code coverage in Azure Pipeline

Now run you pipeline and notice you will see the code coverage report on the
pipeline summary.

![](https://i.imgur.com/6LFMWCN.png)

![](https://i.imgur.com/zIGEJDF.png)

![](https://i.imgur.com/qn4sNuG.png)

Thanks and you are all set.

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

> You bright future is waiting for you so visit today
> [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board
> on your dream software company as a Developer,Architect or Lead Engineer role.

**💖 Say 👋 to me!** Rupesh Tiwari <a href="https://www.rupeshtiwari.com">
www.rupeshtiwari.com</a> ✉️
<a href="mailto:fullstackmaster1@gmail.com?subject=Hi"> Email Rupesh</a> Founder
of <a href="https://www.fullstackmaster.net"> Fullstack Master</a>
