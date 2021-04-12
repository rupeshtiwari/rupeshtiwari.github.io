---
title: Publishing Merged Code Coverage Report of Nx Workspace in Azure CI Pipeline
subtitle: Showing Nx Monorepo code coverage report in azure ci pipeline
description: Showing Nx Monorepo code coverage report in azure ci pipeline
date: '2021-02-01 18:55 -0500'
header:
  image: 'https://i.imgur.com/6gxkEV3.png'
  teaser: 'https://i.imgur.com/cqwnG3N.png'
  og_image: 'https://i.imgur.com/cqwnG3N.png'
image: 'https://i.imgur.com/cqwnG3N.jpg'
tags:
  - devops
  - nx
  - angular
  - beginners
category:
  - devops
last_modified_at: '2021-02-24 18:55 -0500'
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 589921
toc: true
related: true
share: true
read_time: true
author_profile: true
---

If you are working on [Nx Monorepo](https://nx.dev/) workspace and have many
angular projects. And if you are using Azure CI/CD Pipeline then you might aware
that there is no inbuilt azure task which will combine all of your code coverage
xml. Therefore, the only workaround is you must consolidated all code coverage
reports in one and publish that merged one only.

## What is Code Coverage Report in Azure CI Pipeline

> Code coverage helps you determine the proportion of your project's code that
> is actually being tested by tests such as unit tests. To increase your
> confidence of the code changes, and guard effectively against bugs
> [Learn More...](https://docs.microsoft.com/en-us/azure/devops/pipelines/test/review-code-coverage-results?view=azure-devops)

Reviewing the code coverage result helps to identify code path(s) that are not
covered by the tests. This information is important to improve the test
collateral over time by reducing the test debt.

![](https://i.imgur.com/LlgbXvN.png)

You can see at file level in azure pipeline

![](https://i.imgur.com/7FuBO8Z.png)

## Azure devops does not merge multiple code coverage reports

![](https://i.imgur.com/nrjxLDu.png)

At present, the code coverage reporting functionality provided by this task is
limited and it does not merge coverage data. If you provide multiple files as
input to the task, only the first match is considered. If you use multiple
publish code coverage tasks in the pipeline, the summary and report is shown for
the last task. Any previously uploaded data is ignored.
[Learn more...](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/test/publish-code-coverage-results?view=azure-devops)

However, Azure Devops supports merging multiple test results and display out of
the box. Check
[Publish Test Results Nx Monorepo Angular Azure Pipelines](https://hackmd.io/ChTI9iFXQXGdlQAWrcqrKA)
article to learn more.

![](https://i.imgur.com/oEUkpIZ.png)

## Installing Cobertura-merge npm package

At this time Azure Pipeline only support showing code coverage using
**Cobertura** or **JaCoCo** coverage formats only. I am using Cobertura in order
to publish code coverage.

[cobertura-merge](https://www.npmjs.com/package/cobertura-merge) is the npm
package is a Utility to merge multiple cobertura xml files into one. I will use
this npm package to merge my all code-coverage files.

![](https://i.imgur.com/Huz8YLq.png)

In case **cobertura-merge** is failing to install or failing to run and you are in windows machine then run below script:

```
npm --add-python-to-path='true' --debug install --global windows-build-tools
```

## Installing Glob npm package

We have nested code-coverage files so, I want to search all of the file path.
Therefore, I am installing
[glob npm package](https://www.npmjs.com/package/glob) to do that for me. Glob
npm package: Matches files using the patterns the shell uses, like stars and
stuff.

![](https://i.imgur.com/I9fjMZK.png)

## Folder structure of multiple code coverage files

Since I have a Nrwl.Nx monorepo which has angular apps and libs. And when I run
the test using `--codeCoverage=true` then it creates the
`cobertura-coverage.xml` files. Read [Publish Code Coverage Nx Monorepo Angular
in Azure Pipelines] to learn how to publish code coverage to azure pipeline.

Notice, I have coverage files from applications (apps) and libraries (libs)

![](https://i.imgur.com/FaaC9hS.png)

## Finding all Coverage File paths

We need to get the path of each `cobertura-coverage.xml` file.

Lets create a `merge-codecoverage.js` JavaScript file to search all xml files we
will use `glob` npm package.

```javascript
const glob = require('glob');
const path = require('path');

const targetDir = path.resolve(__dirname, '../../coverage');

glob(targetDir + '/**/*.xml', {}, (err, files) => {
  console.log(files);
});
```

![](https://i.imgur.com/HTtZNTz.png)

```shell
[
  "c:/Full Stack Master/Fullstackmaster COURSES/Mono Repo Course/temp/nx-monorepo-angular/coverage/apps/cutepuppies-admin/cobertura-coverage.xml",
  "c:/Full Stack Master/Fullstackmaster COURSES/Mono Repo Course/temp/nx-monorepo-angular/coverage/apps/cutepuppies-client/cobertura-coverage.xml",
  "c:/Full Stack Master/Fullstackmaster COURSES/Mono Repo Course/temp/nx-monorepo-angular/coverage/libs/branding/logger/cobertura-coverage.xml",
]
```

## Debugging JavaScript in VS Code

Read this article to learn
[How to debug Node.JS Code in VsCode](https://hackmd.io/2OykEQiaR6aOEGv9eEHDnA)

## Move All Cobertura Coverage Xml to Merge Folder

Install [fs-extra](https://www.npmjs.com/package/fs-extra) which will help us to
copy all of the coverage file in `merge` folder and then we will user
[cobertura-merge](https://www.npmjs.com/package/cobertura-merge) npm package to
crate single `merged-cobertura-coverage.xml` file.
![](https://i.imgur.com/XYWAJIf.png)

```javascript
function copyCodeCoverageToMergedFolder() {
  const coverageDir = path.resolve(__dirname, '../../coverage');
  const mergedDir = path.join(coverageDir, '/merged');
  const files = glob(coverageDir + '/**/*.xml', { sync: true });

  files.forEach((f, i) => {
    const x = `${path.basename(f)}-${i}.xml`; // creating unique file name
    fs.copySync(f, `${mergedDir}/${x}`);
  });
}
```

![](https://i.imgur.com/xCyymoJ.png)

## Merging All Cobertura Coverage Xml to Single Report

We will create `merged-cobertura-coverage.xml` which is combined of all of the
report files.

In order to merge all of them we need below script.

```shell
npx cobertura-merge -o merged-cobertura-coverage.xml package1=cobertura-coverage.xml-0.xml package2=cobertura-coverage.xml-1.xml package3=cobertura-coverage.xml-2.xml
```

Running the cobertura-merge script

![](https://i.imgur.com/dbWBJuM.png)

Merged file created inside the merged folder

![](https://i.imgur.com/6ZfMhQw.png)

Merged cobertura-coverage.xml file

![](https://i.imgur.com/F8zDEc4.png)

Here is the JavaScript for merging code coverage files.

```javascript
function mergeCodeCoverage() {
  const files = glob(mergedDir + '/**/*.xml', { sync: true });

  const packages = files
    .map((f, i) => `package${i + 1}=${path.basename(f)}`)
    .join(' ');
  const script = `cobertura-merge -o merged-cobertura-coverage.xml ${packages}`;

  execSync(script, {
    stdio: [0, 1, 2],
    cwd: mergedDir,
  });
}
```

## Updating Azure Pipeline to publish code coverage

Use below task to publish merged code coverage report in azure pipeline.

```yaml
# Publish Code Coverage Results
- task: PublishCodeCoverageResults@1
  enabled: false
  displayName: Code Coverage
  inputs:
    codeCoverageTool: 'Cobertura'
    summaryFileLocation: '$(Build.SourcesDirectory)/coverage/merged/merged-cobertura-coverage.xml'
  condition: |
    and(
      succeeded(),
      not(contains(
          variables['COMMANDS'],
          '"test":[]'
      ))
    )
```

## Identify How many projects are affected

I changed the logging.service.ts in branding service. Which is used by both
apps.

Run `nx affected:dep-graph --base=main`

![](https://i.imgur.com/X6P4NiW.png)

## Running azure pipeline for nx monorepo

Now lets run the azure pipeline and see if we can see the 3 projects code
coverage is shown in merged fashion.

See 3 tests are running in azure pipeline

![](https://i.imgur.com/quNbF0h.png)

publishing code coverage in azure pipeline ![](https://i.imgur.com/kAyhXao.png)

Notice it published the code coverage report for all 3 projects.

![](https://i.imgur.com/KaGBGjL.png)

## Excluding files from code coverage

I want to exclude the src folder root files from code coverage. We dont want to
show `test.ts` or `polyfills.ts` coverage report.

![](https://i.imgur.com/7AAnzIh.png)

Go to `workspace.json` file and identify your project names and in the `test`
configuration insert code coverage exclude file list like below screenshot.

```json
"codeCoverageExclude": [
          "apps/cutepuppies-client/src/test.ts",
          "apps/cutepuppies-client/src/polyfills.ts"
        ],
```

![](https://i.imgur.com/JGmLJ1s.png)

Now run `nx run cutepuppies-client:test --codeCoverage=true`

Now notice we do not have `src` folder files code coverage.

![](https://i.imgur.com/6zHAjd0.png)

Lets do this exclude for all of our project's test configuration.

## Showing Project Names in Merged Code Coverage Report

Notice, I have code coverage from below projects.

![](https://i.imgur.com/OTTjEXI.png)

I want to show the project names in the Code Coverage Report of Azure pipeline.
Therefore, we will update the JavaScript code to put correct project name per
code coverage file in our merged code coverage xml file. Like Below:

![](https://i.imgur.com/3fSOEx6.png)

I need to generate & run below `cobertura merge` script to create correct merged
code coverage file with project names.

```shell
npx cobertura-merge -o merged-cobertura-coverage.xml cutepuppies-admin=apps-cutepuppies-admin-cobertura-coverage.xml cutepuppies-client=apps-cutepuppies-client-cobertura-coverage.xml branding-logger=libs-branding-logger-cobertura-coverage.xml branding-ngmaterial=libs-branding-ngmaterial-cobertura-coverage.xml customers-users=libs-customers-users-cobertura-coverage.xml sales-puppies=libs-sales-puppies-cobertura-coverage.xml sales-puppy-editor=libs-sales-puppy-editor-cobertura-coverage.xml
```

Change the merge code coverage in JavaScript

```javascript
function mergeCodeCoverage() {
  copyCodeCoverageToMergedFolder();

  const files = glob(mergedDir + '/**/*.xml', { sync: true });

  const packages = files
    .map((f, i) => {
      const fileName = path.basename(f);
      const projectName = projects.filter((p) => fileName.search(p) > -1).pop();

      return `${projectName}=${fileName}`;
    })
    .join(' ');

  const script = `npx cobertura-merge -o merged-cobertura-coverage.xml ${packages}`;

  execSync(script, {
    stdio: [0, 1, 2],
    cwd: mergedDir,
  });
}

function copyCodeCoverageToMergedFolder() {
  fs.emptyDirSync(mergedDir);
  const files = glob(coverageDir + '/**/*.xml', { sync: true });

  files.forEach((f, i) => {
    const x = f.split('/coverage/')[1].replace(/\//g, '-').split('/').pop();
    fs.copySync(f, `${mergedDir}/${x}`);
  });
}
```

## Running Azure pipeline & Showing Nx Monorepo All Projects Code Coverage

Now you must
[call the above JavaScript from `azure-pipelines.yml` file](https://hackmd.io/QiDKOk2RTKee1Y822ceSYA).

🏃 Run your pipeline

![](https://i.imgur.com/5TKEEo0.png)

💯 Showing Code Coverage percentages

![](https://i.imgur.com/pr8leAN.png)

:hugging_face: Notice now we see our code coverage per application and the
correct file names.

![](https://i.imgur.com/I2ldTr2.png)

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

> Your future is waiting for you so visit today
> [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board
> on your dream software company as a Developer,Architect or Lead Engineer role.
> **💖 Say 👋 to me!**

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:fullstackmaster1@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>
