---
layout: post
title: Publishing Jekyll Blog Post to DevTo using GitHub CI and CD Pipeline
description: Learn cross-posting to dev to from jekyll blog
subtitle: Learn cross-posting to dev to from jekyll blog
date: "2021-02-01 15:03 -0500"
cover-img: "https://i.imgur.com/NRaQUA5.png"
cover_image: "https://i.imgur.com/TBAF05L.png"
thumbnail-img: "https://i.imgur.com/oKh8TiX.png"
share-img: "https://i.imgur.com/oKh8TiX.png"
canonical_url: 'https://rupeshtiwari.github.io/2021-02-01-publishing-jekyll-blog-post-to-dev-to-using-github-ci-cd-pipeline/'
tags: 'jekyll,github,devops,webdev' 
last_modified_at: '2021-02-01 15:03 -0500'
published: true
sitemap: true
excerpt_separator: <!--more-->
id: 589272
---

If you have a blogging site using **Jekyll** and you want to publish your blogs to your **[Dev.To](https://dev.to)** account? Then read this article.

## Jekyll Project

I have my Jekyll project and I do have 1 post and I want this post to be automatically published to my **[Dev.To](https://dev.to)** account when I push this post to GitHub. Really excited about that so lets begin.

![](https://i.imgur.com/IpE6Lxb.png)

## Publish to dev.to Action

I will use pre-built action by [sinedied/publish-devto](https://github.com/sinedied/publish-devto) to publish my post to dev.to.

[Market Place Publish to dev.to Action](https://github.com/marketplace/actions/publish-to-dev-to)

![](https://i.imgur.com/lJzRaRi.png)

## dev.to Front Matter Guidelines

Make sure you have below attributes in your blog post Front Matter.

Custom variables set for each post, located between the triple-dashed lines in your editor. Here is a list of possibilities:

**title**: the title of your article
**published**: boolean that determines whether or not your article is published
**description**: description area in Twitter cards and open graph cards
**tags**: max of four tags, needs to be comma-separated
**canonical_url**: link for the canonical version of the content
**cover_image**: cover image for post, accepts a URL.
The best size is 1000 x 420.
**series**: post series name.

### ✍ Markdown Basics

Below are some examples of commonly used markdown syntax. If you want to dive deeper, check out [this cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet).

## Creating API Keys in Dev.To

Login to dev.to and then go to accounts and create new api key.

![](https://i.imgur.com/7ePWc0H.png)

## Creating Github Workflow

Lets create ".github/workflows/publish.yml" file.

![](https://i.imgur.com/UOlHCHi.png)

It will publish post to dev.to/roopkt whenever merge or push happens to master branch.

```yaml=
name: publish
on:
  push:
    branches:
      - master

jobs:
  publish:
    runs-on: ubuntu-latest
    if: "! contains(toJSON(github.event.commits.*.message), '[skip ci]')"

    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: 12

    - name: Publish articles on dev.to
      uses: "sinedied/publish-devto@30728bf"
      with:
        files: '_posts/**/*.md'
        devto_key: ${{ secrets.DEVTO_TOKEN }}
github_token: ${{ secrets.GH_TOKEN }}
conventional_commits: true
```

## Run GitHub CI/CD

Lets update post and push the code to master branch.

![](https://i.imgur.com/YXoXUh9.png)

## Confirm published article on dev.to account

Notice my post published in https://dev.to/roopkt

![](https://i.imgur.com/OW01PLR.png)

![](https://i.imgur.com/xJXovX4.png)

Here is my article published : ["Enforcing Dependency Constraints in Nx Monorepo Projects"](https://dev.to/roopkt/enforcing-dependency-constraints-in-nx-monorepo-projects-3ldj)

## Skipping GitHub CI

Sometime you are not updating your blog rather fixing your site or updating about me or something else. And you don't want to trigger your CI so make sure you add `[skip ci]` in your commit comments. So that your blogs will be not published because CI will not trigger.

![](https://i.imgur.com/Mj2nC8m.png)

Notice we have check in our Job to not run if message has '[skip ci]'

![](https://i.imgur.com/UNbCUX9.png)

<br/>
 
## Become full stack developer 💻

If you want to become full stack developer and grow your carrier as new software developer or Lead Developer/Architect. Consider subscribing to our full stack development training programs. We have All-Access Monthly membership plans and you will get unlimited access to all of our video courses, slides, source code & Monthly video calls.

- Please subscribe to [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to access current and future angular, node.js and related courses.
- Please subscribe to [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to get everything from PRO plan. Additionally, you will get access to monthly live Q&A video call with Rupesh and you can ask doubts/questions and get more help, tips and tricks.

> You bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a Developer,Architect or Lead Engineer role.
<a href="https://www.fullstackmaster.net">
    <img height="65" src="https://i.imgur.com/9OCLciM.png" width="270">
</a>
 

<br/>

### 💖 Say 👋 to me! 

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:fullstackmaster1@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>