---
title: Setup CI/CD for Angular App with GitHub Action
date: 2021-06-26 00:00 +0000
description: Learn how to setup a ci/cd pipeline for angular application with GitHub Actions and workflow.
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
 - devops
 - beginners
---


## What are we going to build

We will build an angular application. 

## Creating an Angular Application

Run Below script to create new angular app. 

`ng new sample-app` 

![](https://imgur.com/h9kicuF.png)

## What are the steps on Build 

- ✔️ Build 
- ✔️ Lint 
- ✔️ Test 

## Creating GitHub Workflow
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

### Checkout source code

Let's checkout the code first. 

```yaml
steps:
      - uses: actions/checkout@v2
            # 👆
```

### Setup Node Environment

```yaml
- name: Use Node.js ${{ matrix.node-version }}
- uses: actions/setup-node@v1
  with:
    node-version: ${{ matrix.node-version }}
     # 👆
```

### Use GitHub Cache 

Let's use GitHub Cache to save `node_modules`. Learn more about [Caching GitHub Workflow dependencies here](https://www.rupeshtiwari.com/caching-dependencies-on-github-workflows).

{% gist 81a8c36affe7ed445b78941a1070996d %}

### Install Dependencies

Next we must install node packages conditionally. [Learn more here](https://www.rupeshtiwari.com/caching-dependencies-on-github-workflows)...

```yaml
- name: Install Dependencies
  if: steps.cache-nodemodules.outputs.cache-hit != 'true'
      # 👆 if cache hits the skip this step. 
  run: npm ci
```

### Building Project

Let's run build to compile our project. 

```yaml
- name: Build
  run: npm run build
```

### Linting Project

Let's run linting. 

```yaml
- name: Lint
  run: npm run lint
```

### Testing Project

Let's run test. 

```yaml
- name: Test
  run: npm run test
```

