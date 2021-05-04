---
title: Caching Dependencies on GitHub Workflows
date: 2021-06-19 00:00 +0000
description: Learn how to cache workflow dependencies on GitHub.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
image: https://i.imgur.com/fucBPz6.gif
header:
  image: https://i.imgur.com/7nGHUOC.png
  teaser: https://i.imgur.com/fucBPz6.gif
  og_image: https://i.imgur.com/fucBPz6.gif
tags:
  - github
  - angular
  - actions
  - beginners
---

> While building/compiling **angular** or **node** application on `Local Build Machine` or `Azure Pipelines` or `GitHub Workflows` or `Netflix` or `Heroku`. The main issue we face is `npm install` or `npm ci` which takes large amount of time to finish. Which slows-down the productivity of the team. With `GitHub Workflows` **dependency caching** you can reduce the **install time to half**. Therefore, in this article we will learn how can you leverage the `GitHub caching` workflow dependencies mechanism to improve speed and save network utilization or bandwidth of your build server.

![](https://imgur.com/zUODzD0.gif)

## GitHub Actions: Cache workflow Dependencies

You will learn:

- ✔️ Cache `node_modules` from workflow.
- ✔️ `skip npm install` when a cached version is available.
- ✔️ `invalidate the cache` when our **dependencies are changed**.

## GitHub Actions Basics

### Workflow

> A workflow is a unit of automation from start to finish, including the definition of what triggers the automation, what environment or other aspects should be taken account during the automation, and what should happen as a result of the trigger.(GitHub, 2020).

### Job

> A job is a section of the workflow, and is made up of one or more steps. In this section of our workflow, the template defines the steps that make up the build job.(GitHub, 2020).

### Step

> A step represents one effect of the automation. A step could be defined as a GitHub Action, or another unit, like printing something to the console.(GitHub, 2020).

### Action

> A GitHub Action is a piece of automation written in a way that is compatible with workflows. Actions can be written by GitHub, by the open source community, or you can write them yourself!(GitHub, 2020).

## Using Cache Action

### Action Name

We will use `actions/cache@v2` to save and restore npm dependencies.

### What do we cache?

Normally we cache `node_modules` folder in node or angular applications.

### When New Cache Creates?

Whenever `package-lock.json` file changes cache action will create new cache with cache key. The Cache key uses context and expression to generate a new cache key that includes the runner's operating system and a SHA-256 hash of the `package-lock.json` file. When key doesn't match an existing cache, it's called a **cache miss**, and a new cache is created **if the job completes successfully**.

### When Cache is Restored?

When you push a code and your `package-lock.json` file is not changed. Then cache action will compare the cache key and if it matches an existing cache, it is called as **cache hit**. And the cache action will restore the cached `node_modules` files to the `path` directory.

### What is **restore-keys**

When a cache miss occurs, the action searches for alternate keys called `restore-keys`.

## Creating Workflow with Cache Action

Let's create new GitHub Workflow and add add `actions/cache@v2` action.

### Caching node_modules in Workflow

Below is one example how can you add `actions/cache@v2` action in your GitHub workflow. We want to cache `node_modules` folder. Therefore, lets set `path: node_modules`.

When `package-lock.json` file changes we want to recreate cache. Therefore, let's use `package-lock.json` in our key. Also key will have `os` and `cach-name`.

Once the **cache hit** happens then the below step will output `cache-hit as true`. Therefore, this express `steps.cache-nodemodules.outputs.cache-hit` will be `true`

{% gist 81a8c36affe7ed445b78941a1070996d %}

### Skip Npm Install

Now lets check if `steps.cache-nodemodules.outputs.cache-hit` will be `true` then we must not run `npm install`.

```yaml
- name: Install Dependencies
  if: steps.cache-nodemodules.outputs.cache-hit != 'true'
  # 👆 check if cache-hit happened then do not execute npm ci
  run: npm ci
```

### Complete Workflow Yaml

Create `.github\workflows\main.yml` file and add below script.

{% gist 44ebec690f2c01bf1df9b1d215a0e723 %}

## Creating 1st Build

Let's create our first build by pushing change to GitHub. Since this is first time we are pushing build. Npm install will occur and total build time is more it is **56s**.

![](https://imgur.com/J3MSIz3.png)

### Cache Miss

You will notice our `Cache node modules` action will not be able to find the cache.

![](https://imgur.com/FbbUuCQ.png)

### Executing Install Dependencies Step

Since workflow could not find `node_modules` in GitHub cache. It will install all node packages on `Install Dependencies` step. And notice `Install Dependencies` step took total **18.878s**. Therefore, total build time will be around **38s**

![](https://imgur.com/g6XaE9l.png)

### New Cache Saved in GitHub

Once the job is successful then Job cleanup process will execute. And during that phase `Cache will be saved`. The step name will be updated to `Post Cache node modules` and will only execute once Job is successful.

![](https://imgur.com/bughHIo.png)

This saved cache will be used in the next build. Stay tuned for the actual fun 😄

## Triggering 2nd Build

Let's do some change and push the build again. Notice since we did not change `package-lock.json` file. Total Workflow Job time is **34s**.

![](https://imgur.com/NNDepxy.png)

### Restoring node_modules from cache

Therefore, GitHub workflow will restore the `node_modules` from the cache.

![](https://imgur.com/Vatl4Sk.png)

### Skipping Install Dependencies Step

Therefore, notice `Install Dependencies` step skipped.

![](https://imgur.com/OcsXLBk.png)

### Cache Hit Occurred

Once workflow is success `cache` action will print below info about the **Cache Hit**. That proves that cache restoration happened successfully.

![](https://imgur.com/bdFN4QQ.png)

```shell
Post job cleanup.
Cache hit occurred on the primary key Linux-build-cache-node-modules-c473bbd9f33d84fd892675fbfce1a74d9c8b3f61d4e37c05ad92e29a23790116, not saving cache.
```

## Changing Package-lock.json file

When you install or uninstall or update existing npm packages. Then `package-lock.json` file will change and GitHub workflow will recreate the` node_module` cache.
Notice overall workflow executed in **57s**.
![](https://imgur.com/BVBh2Z5.png)

### Installing new Npm Package

![](https://imgur.com/MlVbvDD.png)

### Npm Dependencies Executed

![](https://imgur.com/9usffUQ.png)

So you learned whenever `package-lock.json` is changed workflow will be slow. However, in a team we rarely update `package-lcok.json` file and you will get good speed at other builds where you only change the project files.

All done 🎉 enjoy full speed GitHub cache action!

Checkout my [workflow file here](https://github.com/rupeshtiwari/angular-npm-cache-demo/blob/main/.github/workflows/main.yml).

## References

1. https://docs.github.com/en/actions/guides/caching-dependencies-to-speed-up-workflows

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

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
