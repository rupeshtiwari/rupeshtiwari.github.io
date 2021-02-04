---
layout: post
title: Publishing Code Coverage in Azure CI Pipelines
date: "2021-01-27 00:00 +0000"
subtitle:
  Learn showing Angular Project Code Coverage from specs in Azure CI pipeline
description:
  Learn showing Angular Project Code Coverage from specs in Azure CI pipeline
cover-img: "https://i.imgur.com/NRaQUA5.png"
cover_image: "https://i.imgur.com/YJnJNSe.jpg"
thumbnail-img: "https://i.imgur.com/YJnJNSe.jpg"
share-img: "https://i.imgur.com/YJnJNSe.jpg"
tags: "devops,angular,beginners,tutorial"
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 589369
toc: true
---

> `Publish Code Coverage task` Publishes `Cobertura` or `JaCoCo` code coverage
> results from your build in azure CI Pipeline.

Azure DevOps provides us with the ability to show an overview of the code
coverage of our application's unit tests. To do so, just like publishing the
test results in a specific format, we'll need to publish the code coverage
results in a supported format. Currently, Azure DevOps supports both `Cobertura`
and `JaCoCo`.

## In Angular Generating Code Coverage using Cobertura

In Angular out of the box you get `karma-coverage-istanbul-reporter`. The
**Istanbul**, the code coverage tool used by the Angular CLI, has support for
**Cobertura** built-in, so we don't need to add any dependency in order to use
Cobertura.

![](https://i.imgur.com/8DX15qu.png)

Go to `karma.conf.js` you should see below `coverageIstanbulReporter` settings.

```json
   coverageIstanbulReporter: {
      dir: join(__dirname, '../../coverage'),
      reports: ['html', 'lcovonly',],
      fixWebpackSourcePaths: true,
    },
```

Add `cobertura` and `text-summary` reporters

`reports: ['html', 'lcovonly','text-summary', 'cobertura'],`

```json
   coverageIstanbulReporter: {
      dir: join(__dirname, '../../coverage'),
      reports: ['html', 'lcovonly','text-summary', 'cobertura'],
      fixWebpackSourcePaths: true,
    },
```

Run this command so that angular will generate code coverage. If you are not
using Nx.Monorepo then instead `ng` use `nx`.

`nx test --watch=false --code-coverage`

When you use `text-summary` you should also see the summary in vs code console.

![](https://i.imgur.com/yzKXEqD.png)

If you do not want this summary every time u run test then consider removing
`text-summary`

In My case I will remove `text-summary` Now lets run

`nx affected:test --base=main --codeCoverage=true`

![](https://i.imgur.com/koGT0XK.png)

See it will create coverage folder and files for each projects in your nx
monorepo workspace.

![](https://i.imgur.com/wmlK2yR.png)

## Enforcing Code Coverage Threshold in Angular App

You can fail test if threshold is not meet. Add below code in
`coverageIstanbulReporter`

```json
  thresholds: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80
      }
```

![](https://i.imgur.com/q1Uu6Zv.png)

Now after running test you will see below error. If you have not wrote
sufficient tests to meet the threshold.

![](https://i.imgur.com/h9IhFNM.png)

## Publishing Angular Code Coverage Results in CI Azure Pipeline

- Go to Azure pipeline edit page
- Search for task `code coverage` and Add this task to your pipeline.

![](https://i.imgur.com/LAbXQiw.png)

- Select `Cobertura`
- Summary file `$(Build.SourcesDirectory)/coverage/**/*.cobertura-coverage.xml`
  ![](https://i.imgur.com/jbax5hT.png)

```yaml
# Publish Code Coverage Results
- task: PublishCodeCoverageResults@1
inputs:
  codeCoverageTool: 'Cobertura'
  summaryFileLocation: '$(Build.SourcesDirectory)/coverage/**/*.xml'
condition: |
  and(
    succeeded(),
    not(contains(
        variables['COMMANDS'],
        '"test":[]'
    ))
  )
```

## Code Coverage in Azure pipeline

Overall Summary ![](https://i.imgur.com/LDdThYR.png)

Code Coverage ![](https://i.imgur.com/L7prbkw.png)

[Tests Summary](https://hackmd.io/ChTI9iFXQXGdlQAWrcqrKA)
![](https://i.imgur.com/hdinDdg.png)

## Merging Code Coverage in Azure Pipeline for Nx MonoRepo

At present, the code coverage reporting functionality provided by this task is
limited and it does not merge coverage data. If you provide multiple files as
input to the task, only the first match is considered. If you use multiple
publish code coverage tasks in the pipeline, the summary and report is shown for
the last task. Any previously uploaded data is ignored.

I have many code coverage files since I have a MonoRepo. In order to combine all
coverage files I may need some other blog for that so stay tuned.

<br/>

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

> You bright future is waiting for you so visit today
> [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board
> on your dream software company as a Developer,Architect or Lead Engineer role.



<br/>

### 💖 Say 👋 to me!

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:fullstackmaster1@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>
