---
layout: post
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
toc_sticky: true
image: https://i.imgur.com/thumbnail.png
header:
  image: https://i.imgur.com/FEATUREIMAGE.png
  teaser: https://i.imgur.com/thumbnail.png
  og_image: https://i.imgur.com/thumbnail.png
tags:
  - github
  - angular
  - actions
  - beginners
---
> While building angular program on build machine or azure pipelines or github workflows. The main problem we face is `npm install` or `npm ci` takes large amount of time to finish. Which slows-down the productivity of the team. With GitHub workflow dependency caching you can reduce the **install time to half**.  Therefore, in this article we will learn how can you leverage the `GitHub caching` workflow dependencies mechanism to improve speed and save network utilization or bandwidth of your build server.  

![](https://imgur.com/AbCNcxB.gif)

## GitHub Actions Basics

### Workflow

>A workflow is a unit of automation from start to finish, including the definition of what triggers the automation, what environment or other aspects should be taken account during the automation, and what should happen as a result of the trigger.(GitHub, 2020).

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

Whenever `package-lock.json` file changes cache action will create new cache with cache key. The Cache key uses context and expression to generate a new cache key that includes the runner's operating system and a SHA-256 hash of the `package-lock.json` file. When key doesn't match an existing cache, it's called a **cache miss**, and a new cache is created if the job completes successfully.

### When Cache is Restored?

When you push a code and your `package-lock.json` file is not changed. Then cache action will compare the cache key and if it matches an existing cache, it is called as **cache hit**. And the cache action will restore the cached `node_modules` files to the `path` directory. 

### What is **restore-keys**

When a cache miss occurs, the action searches for alternate keys called `restore-keys`. 


```yaml
- name: Cache node modules
  uses: actions/cache@v2
  env:
    cache-name: cache-node-modules
  with:
    # npm cache files are stored in `~/.npm` on Linux/macOS
    path: ~/.npm
    key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-build-${{ env.cache-name }}-
      ${{ runner.os }}-build-
      ${{ runner.os }}-

```


## References

1. https://docs.github.com/en/actions/guides/caching-dependencies-to-speed-up-workflows