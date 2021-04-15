---
title: How to deploy Angular Apps to GitHub Pages (gh-pages) - Setup CI/CD for Angular App with GitHub Action 
date: 2021-06-26 00:00 +0000
description: Learn how to deploy angular apps to GitHub Pages by setup a ci/cd pipeline for angular application with GitHub Actions and workflow.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
image: https://i.imgur.com/cOq4pON.png
header:
  image: https://i.imgur.com/5HhDisG.png
  teaser: https://i.imgur.com/cOq4pON.png
  og_image: https://i.imgur.com/cOq4pON.png
tags:
  - github
  - angular
  - devops
  - beginners
---

> Do you want to **build** your first **Angular App** and **deploy** over cloud using **GitHub Actions**? How to deploy/publish Angular App to GitHub Pages automatically? Did you use **GitHub Actions** to **build** and **deploy** **Angular** App over **GitHub Pages**? Stay tuned in this article I will show you step by step from creating angular app to building and deploying using **GitHub Actions**.

![](https://imgur.com/YpOnPp5.gif)

## What are we building

We will build an angular application & deploy over [GitHub Pages](https://pages.github.com/).

## Creating an Angular Application

Run Below script to create new angular app.

`ng new sample-app`

![](https://imgur.com/h9kicuF.png)

### Install Npm package

 `ng add angular-cli-ghpages` 

## What are the steps on Build

- ✔️ Build
- ✔️ Lint
- ✔️ Test

## Creating GitHub Actions

Let's create GitHub workflow with jobs. Note that now a days GitHub actions runner sets the `CI=true` by default. [Learn more here](https://github.blog/changelog/2020-04-15-github-actions-sets-the-ci-environment-variable-to-true/)...

### Name of Workflow

```yaml
name: Angular GitHub CI # 👈
```

### Trigger on Main Branch

Let's trigger the job whenever `main` branch got new push.

```yaml
on:
  push:
    branches:
      - main # 👈
```

### Node Versions

Let's run on multiple node versions on `ubuntu-latest`.

```yaml
jobs:
  ci:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x]
        # 👆
```

Note we are using `node10` and `node12`/ Therefore, at a time there will be parallelly 2 jobs will run one for 10.x and one for `12.x`

![](https://imgur.com/gHBzHqt.png)

### Checkout source code

Let's checkout the code first.

```yaml
steps:
  - uses:
      actions/checkout@v2
      # 👆
```

### Setup Node Environment

```yaml
- name: Use Node.js ${{ matrix.node-version }}
- uses: actions/setup-node@v1
  with:
    node-version:
      ${{ matrix.node-version }}
      # 👆
```

### Use GitHub Cache

Let's use GitHub Cache to save `node_modules`. Learn more about [Caching GitHub Workflow dependencies here](https://www.rupeshtiwari.com/caching-dependencies-on-github-workflows).

{% gist 81a8c36affe7ed445b78941a1070996d %}

### Install Dependencies

Next we must install node packages conditionally. [Learn more here](https://www.rupeshtiwari.com/caching-dependencies-on-github-workflows)...

```yaml
- name: Install Dependencies
  if:
    steps.cache-nodemodules.outputs.cache-hit != 'true'
    # 👆 if cache hits the skip this step.
  run: npm ci
```

### Building Project

Let's run build in `production mode` to compile our project. We need to pass `-- --prod` so that `ng build --prod` will be executed.

```yaml
- name: Build
  run: npm run build -- --prod
```

### Linting Project

Let's run linting.

```yaml
- name: Lint
  run: npm run lint
```

### Testing Project

Let's run test in production mode. We need to make sure while running Test:

- ✔️ we are using **chrome headless browser** `"browsers": "ChromeHeadless"` and
- ✔️ Generating code coverage `"codeCoverage": true,`
- ✔️ Ignoring Source Map `"sourceMap": false`
- 👁️ Make sure not in watch mode ` "watch": false`

All of the above settings can be done in `angular.json` file.

Navigate to `angular.json` file identify project name.

1. Go to test object. `projects.sample-app.architect.test`
2. Add below code configuration for production.

```json
"configurations": {
  "production": {
    "sourceMap": false,
    "codeCoverage": true,
    "browsers": "ChromeHeadless",
    "watch": false
  }
},
```

It will look like this:
```json
       "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "configurations": { 👈
            "production": {
              "sourceMap": false,
              "codeCoverage": true,
              "browsers": "ChromeHeadless",
              "watch": false
            }
          },👈
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.spec.json",
            "karmaConfig": "karma.conf.js",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          }
        },
```

Lets add below script in the `main.yml` file. Which will use above production test configuration while running in build machine.

```yaml
- name: Test
  run: npm run test -- --prod
```

### Triggering GitHub Workflow

Now is the time to see our workflow in action. Go ahead and push the changes to GitHub and check your actions tab on github.

![](https://imgur.com/O8K0LCG.png)

Notice both jobs are completed:

![](https://imgur.com/zp6CsLX.png)

### Complete YAML file

{% gist c062101984b3dea4e953f5698ed09be2 %}

## Deploying Angular App to GitHub Pages

Next once you know your project is passing all these below steps under `CI` job.

- ✔️ Build
- ✔️ Lint
- ✔️ Test

Next we must deploy the app to somewhere. In this example I will deploy our app to [GitHub Pages](https://pages.github.com/).

### GitHub Pages

**GitHub Pages** are free where you can host your static site. I am going explain you the steps to deploy your angular app there.

### Using Ng Deploy

`ng deploy` is the **Angular CLI command** that automates the deployment of Angular App to **GitHub Pages**. When you run `ng deploy`, it executes a builder that performs the deployment for you.

Install [`angular-cli-ghpages`](https://www.npmjs.com/package/angular-cli-ghpages) builder by Running script `ng add angular-cli-ghpages` on command line from root of your project.

### Deploying to GitHub Pages From Local machine

In GitHub Page server we must give `base-href` to our `repository name` so that It can host our static files successfully. Since our GitHub repository name is `angular-ci-cd-with-github-actions` my deploy script would be: `ng deploy --base-href=/angular-ci-cd-with-github-actions/`

Add below script on `package.json`

```shell
    "deploy": "ng deploy --base-href=/angular-ci-cd-with-github-actions/"
```

You can even run the deploy command from local machine to test `npm run deploy`

![](https://imgur.com/wHjIBg7.png)

### Your App is Live on GitHubPage

Go to the settings of your GitHub Repository and notice the Site is published. Wait for 2-5 mins and then browse your app.

![](https://imgur.com/QMizEsH.png)

Notice our site is up and running on GitHub Pages

![](https://imgur.com/lZ1Qij8.png)

## Update GitHub Actions to Deploy Angular App

Next let's update the workflow to deploy our app over GitHub Pages. Below 2 steps we will run whenever previous steps are passing. Note that that `if: success()` is always implied unless you specify `if: always()` or `if: failure()` . Therefore, I am not adding if condition in my steps.

### Creating Change Log

Add secret called as `TOKEN_GITHUB_ACTION` to your repository.

![](https://imgur.com/tQNt59s.png)

Next we will use [Conventional ChangeLog Action](https://github.com/TriPSs/conventional-changelog-action) to create our change log.

{% gist ae8a69e9004fd19773e1cdfbf9dad768 %}

```yaml
- name: Conventional Changelog Action
  id: changelog
  uses: TriPSs/conventional-changelog-action@v3
  with:
    github-token: ${{ secrets.TOKEN_GITHUB_ACTION }}
    output-file: 'false'
```

### Creating GitHub Release

Next we will use [Conventional ChangeLog Action](https://github.com/TriPSs/conventional-changelog-action) to tag our repo and create GitHub Release. Note: If you have no changes then this will **not** create a **release**.

{% gist 432995b8ead5171de82e2623f446b60f %}

### Deploy to GitHub Pages

Finally let's deploy the app to GitHub Pages.

```yaml
- name: Deploy
  run: |
    npm run deploy
```

### Complete YAML for deploying angular app to GitHub-Pages

Here is my [final workflow](https://gist.github.com/rupeshtiwari/9f252dc665656c434c4d50a70519f9ac):
{% gist 9f252dc665656c434c4d50a70519f9ac %}

![](https://imgur.com/YpOnPp5.gif)

Now if you push the changes workflow will trigger and CI/CD will succeed 🆒!

![](https://imgur.com/aflIgUO.png)

All done 🎉 enjoy your angular ci/cd all free! Here is my [demo site live](http://www.rupeshtiwari.com/angular-ci-cd-with-github-actions/)

[![](https://i.imgur.com/lZ1Qij8.png)](http://www.rupeshtiwari.com/angular-ci-cd-with-github-actions/)

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
