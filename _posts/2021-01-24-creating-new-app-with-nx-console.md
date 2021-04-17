---
title: Creating New App with Nx Console
date: '2021-01-24 00:00 +0000'
subtitle: learn creating new application using nx console in monorepo
description: learn creating new application using nx console in monorepo
image: 'https://i.imgur.com/UJNuoEj.jpg'
cover_image: 'https://i.imgur.com/UJNuoEj.jpg'
thumbnail-img: 'https://i.imgur.com/KVtdDlT.png'
share-img: 'https://i.imgur.com/KVtdDlT.png'
tags:
  - nx
  - angular
  - beginners
  - monorepo
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 590337
toc: true
related: true
share: true
read_time: true
author_profile: true
---

> Do you want to create a new application on my [nx monorepo](https://nx.dev/)
> work-space? Also do want to make sure that you should be able to **build** and
> **test** your application using **nx command line scripts**? Then this article
> is for you In this article, I will walk you through the steps please follow
> along with me.

## Installing Nx Console Visual Studio Code Extension

Install Nx Console from nrwl Vs Code extension. For VSCode users, you can
install the Nx Console VSCode Plugin from Marketplace. Nx Console is an UI for
Nx. It will work for any schematic or any architect commands. Nx Console does
not have a specific UI for, say, generating a component. Instead, Nx Console
does what the command-line version of Nx does

## Creating New application using Nx Console

We are going to create a new application lets call it as
`onlinestore-dashboard`.

**Step 1**: Go to apps folder and right click you will see Nx generate (ui)
![](https://i.imgur.com/oetweVY.png)

**Step 2**: Select @nrwl/angular Create An Angular application option
![](https://i.imgur.com/duL1LwE.png) **Step 3**: Add application name as
`onlinestore-dashboard`. I will keep style `css` you can do `scss` if u want.
![](https://i.imgur.com/TnRHUtu.png) Notice nx console is also running dry run
and showing the files that it is going to create as you go. This is really
helpful. ![](https://i.imgur.com/YuBEmBZ.png) Check `routing` option to generate
routing module for the application Check `strict` to do strict type checking and
build optimization ![](https://i.imgur.com/Jqsbx3Q.png) Add
`scope:itops,type:app` in the tag for enforcing dependency constraints and
linting. Next I am selecting `karma` as my test runner. Feel free to continue
using `jest` that is default test runner. ![](https://i.imgur.com/Pgbrlvv.png)
Finally press the `Run` button. ![](https://i.imgur.com/6qkD0xS.png)

```shell=
Nx Console will execute below script automatically.
Executing task: ng generate @nrwl/angular:application --name=onlinestore-dashboard --routing --strict --tags=scope:itops,type:app --unitTestRunner=karma
```

It will ask which style you want I will select `css`.
![](https://i.imgur.com/oFdxsZ7.png) Check inside your apps folder it created
`onlinestore-dashboard` and `onlinestore-dashboard-e2e` projects
![](https://i.imgur.com/a8lOI4x.png) Folder structure of application created by
nx console. ![](https://i.imgur.com/1KMzB6n.png)

## Building Application using Nx

I will highly recommend using nx commands to build your project since it will
using caching strategy to minimize your build time. If you already build your
app and did not change and again build it then it immediately output the build
result from its previous cache

In order to build your application run below script
`nx build onlinestore-dashboard` ![](https://i.imgur.com/9d1eSz3.png) Inside the
`dist` folder you will see the apps/onlinestore-dashboard is created.
![](https://i.imgur.com/xqTO2BZ.png)

If you rebuild the same application without any change you can see nx console
will immediately output the build result within 3 seconds.
![](https://i.imgur.com/01WOXkW.png)

## Serving Application in local dev server

Run this script to serve application `nx serve onlinestore-dashboard`

![](https://i.imgur.com/66h4DrO.png)

Navigate to http://localhost:4200 and you should see project running
![](https://i.imgur.com/iTS5Wpg.png)

## Testing application using nx command line

Run below script to run application using nx console. Again use `nx` commands
for testing to get the benefit of output caching for test results.

`nx test onlinestore-dashboard --watch`

![](https://i.imgur.com/TrFv1Cu.png)

## Should I use JEST or KARMA for Test Runner?

If you are using Karma and in watch mode testing and if u do small changes the
it takes time to retest and run. Therefore, I would recommend using `JEST` for
better performance and speed testing in watch mode or offline mode.

## Conclusion

In this article you learn how to create an application using `nx console`. In my
next article I will explain you how to publish the application dist folder into
npm package so that you can install it as node package in some other node.js
project. Stay tuned. Jest :+1: +100 Karma :-1: -100

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

> Your bright future is waiting for you so visit today
> [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board
> on your dream software company as a Developer,Architect or Lead Engineer role.
> **💖 Say 👋 to me!**

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>
