---
layout: post
title: Publishing Nx Monorepo Test Results in Azure CI Pipeline
date: '2021-01-30 00:00 +0000'
subtitle: Learn writing Azure CI pipeline to show Nx Monorepo combined Test Results
description: Learn writing Azure CI pipeline to show Nx Monorepo combined Test Results
cover-img: 'https://i.imgur.com/hiQZ0BG.png'
cover_image: 'https://i.imgur.com/WQ5z6KK.png'
thumbnail-img: 'https://i.imgur.com/3ysBPoZ.png'
share-img: 'https://i.imgur.com/3ysBPoZ.png'
tags: 'devops,nx,angular,beginners'
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 589923
---

`Publish Test Results task` publishes test results to Azure CI Pipelines.

## Step 1: Publish Unit Test Summary Report
Step 1 - To generate Test Report I’m using Karma JUnit Reporter. First install it to your project.
`npm i karma-junit-reporter -D`
![](https://i.imgur.com/xU6AEaJ.png)


Step 2 — Now we have to import above ‘karma-junit-reporter’ in to our project and have to configure. So for that, open ‘karma.conf.js’ file in your project. There, in the ‘plugins’ section, add the following line.
![](https://i.imgur.com/wR88IaA.png)

Step 3 — Now we have to say use this ‘karma-junit-reporter’ to generate Test Report. For that, in ‘karma.conf.js’ file, you can see a section ‘reporter’. Add the following inside the array.

![](https://i.imgur.com/vI4aatC.png)


Step 4 — okay. Now we have said to use JUnit repoter service to generate our Test Report. But to where ? We have to say, where to publish the Test Report. For that, add the following Code Snippet, before the ‘reporters’ section.

![](https://i.imgur.com/5ej8reJ.png)

```json
junitReporter: {
    outputDir: 'testresults/junit',
    outputFile: 'unit-test-result.xml',
    useBrowserName: false,
},
```

Step 5- In the Azure DevOps Build Pipeline. ‘Publish Test Results’. Click on + symbol and search ‘Publish Test Results’. Add it.
![](https://i.imgur.com/HCfNtkY.png)

Add below task in your azure-pipelines.yml file. You can skip the `condition`. I needed that for my Nx Monorepo project. You can just have task and inputs only. 

Azure devops task supports merging multiple test results files out of the box. For that we will use `mergeTestResults: true` flag. 

```yaml
    # Publish Test Results
    # Publish Test Results
  - task: PublishTestResults@2
    inputs:
      testResultsFormat: 'JUnit'
      testResultsFiles: '**/testresults/**/*.xml'
      mergeTestResults: true
    condition: |
      and(
        succeeded(),
        not(contains(
            variables['COMMANDS'],
            '"test":[]'
        ))
      )

```

## Test results files created 

When you run test now you should see test results file.
![](https://i.imgur.com/mE8wvJL.png)


In order to avoid check-in them in git repo consider updating `.gitignore`

```shell
# Test Results
testresults/
```

![](https://i.imgur.com/drw4ibo.png)

## Running Build in Azure Pipeline


![](https://i.imgur.com/Vo6XfZr.png)



--- 
## Become full stack developer 💻

If you want to become full stack developer and grow your carrier as new software developer or Lead Developer/Architect. Consider subscribing to our full stack development training programs. We have All-Access Monthly membership plans and you will get unlimited access to all of our video courses, slides, source code & Monthly video calls.

- Please subscribe to [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to access current and future angular, node.js and related courses.
- Please subscribe to [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to get everything from PRO plan. Additionally, you will get access to monthly live Q&A video call with Rupesh and you can ask doubts/questions and get more help, tips and tricks.

> You bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a Developer,Architect or Lead Engineer role.
<a href="https://www.fullstackmaster.net">
    <img height="65" src="https://i.imgur.com/9OCLciM.png" width="270">
</a>
 
