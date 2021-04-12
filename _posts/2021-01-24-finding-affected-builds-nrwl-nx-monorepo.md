---
title: Finding Affected Builds in Nrwl Nx Monorepo
date: '2021-01-24 00:00 +0000'
subtitle: >-
  Affected builds and project names in nx monorepo speed up your development and
  ci cd process
description: >-
  Affected builds and project names in nx monorepo speed up your development and
  ci cd process
image: 'https://i.imgur.com/JAdLwFG.png'
cover_image: 'https://i.imgur.com/JAdLwFG.png'
thumbnail-img: 'https://i.imgur.com/r6BwCaN.png'
share-img: 'https://i.imgur.com/r6BwCaN.png'
tags:
  - nx
  - beginners
  - tutorial
  - angular
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
toc: true
related: true
share: true
read_time: true
author_profile: true
---

> In this article, I will explain how to know which applications or libraries
> are changed in your [nx monorepo workspace](https://nx.dev).

## First time building Nx Monorepo

First Time if you get the source from repo to your local machine and run.

`npm run affected:build`

Notice all of the applications and library projects will build.
![](https://i.imgur.com/9Wi4QC3.png)

Once the build is done Nx will remember which projects are compiled
successfully.

Next change the `log.service.ts` inside logger project in branding service.

![](https://i.imgur.com/fnKoKcA.png)

## Affected Dependency Graph in Nx Monorepo

Next lets check the dependency graph to know which are the apps and libraries
affected by our changes.

Run `npm run affected:dep-graph` ![](https://i.imgur.com/e7bnd0Z.png)

See it is showing we have change `logger` project and it is being used in
`customer-user-editor` and `onlinestore-admin` so all of these applications and
projects are affected.

![](https://i.imgur.com/NDhsfDS.png)

Nx can identify which are the projects changed. Which is great!

## Build only Affected Projects in Nx Monorepo

Now you can run below script to just build affected projects only.

Run `npm run affected:build`

Notice it is only building affected projects only.

![](https://i.imgur.com/2EQaucL.png)

That give us performance while developing since we only build and test the
projects that we change.

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
