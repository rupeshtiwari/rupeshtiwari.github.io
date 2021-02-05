---
layout: post
title: Testing Nrwl Nx Angular Monorepo Projects using JEST
date: "2021-01-26 00:00 +0000"
subtitle: learn how to debug nx monorepo specs in chrome and vs code
description: learn how to debug nx monorepo specs in chrome and vs code
cover-img: "https://i.imgur.com/NRaQUA5.png"
cover_image: "https://i.imgur.com/P9U4q6m.png"
thumbnail-img: "https://i.imgur.com/AfCDCO2.png"
share-img: "https://i.imgur.com/AfCDCO2.png"
tags: nx,angular,monorepo,jest
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 590198
toc: true
---

> Do you want to debug your [NRWL/NX monorepo](https://nx.dev/) specs in visual
> studio code or right in chrome? Then this article is for you. I am going to
> use `JEST` test runner since it is more faster than `Karma` also Jest gives
> snapshot testing features. `JEST` is also the default testing framework when
> you create [NRWL/NX monorepo](https://nx.dev/). However, you can always create
> lib and applications using `karma` test runner in your nx monorepo.

## Nrwl.Nx Angular Monorepo Project

I have created a monorepo work-space and I have one library called as
`customers/users` and I want to do unit testing.

![](https://i.imgur.com/J04LNHO.png)

## Node Version For JEST Test

In order to test your project using `jest` make sure you have the node version
installed in your machine is more than 10.0. If you have your node version 10
then while running jest test you will get an error
`ReferenceError: globalThis is not defined` ![](https://i.imgur.com/0HBpljW.png)

I have updated my node version to latest at this time it is `v14.15.4`
![](https://i.imgur.com/RQ7M9ID.png)

Now if I run the spec using command `nx test customers-users`

![](https://i.imgur.com/B3YXZO1.png)

## Testing Project in Watch Mode

Run this script to run your library `nx test customers-users --watch`

![](https://i.imgur.com/AzXpuyi.png)

Now go and fail the test ![](https://i.imgur.com/xG9Yedk.png)

See tests are failing and it took just 7 seconds

![](https://i.imgur.com/2m4yyvX.png)

Please go ahead and fix the test.

## Debugging Nrwl.Nx Angular Library in VsCode

Create launch.json file inside `.vscode` folder and put below code. Make sure
you change the library name as per your project.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "vscode-jest-tests",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/@angular/cli/bin/ng",
      "args": [
        "test",
        "customers-users",
        "--runInBand=true",
        "--codeCoverage=false"
      ],
      "cwd": "${workspaceFolder}",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "trace": "all"
    }
  ]
}
```

Next click on debug button on vscode. ![](https://i.imgur.com/1ynnvVj.png)

See this panel where you can continue, step out/in, pause, stop test. You can
also see the closure variables etc. right in vscode.

![](https://i.imgur.com/JuO7vhw.png)

See debugger is hitting. ![](https://i.imgur.com/rRsdRqO.png)

If you hit continue then your debug in watch mode will stop.

## Debugging Nrwl.Nx work-spaces JEST Specs in Chrome

If I want to debug the test in Chrome then here is the steps to follow.

To debug tests using Chrome Devtools or an IDE you can run the test command
through node's `--inspect-brk` flag.

Below script to run `customers-users` project test in debug mode for chrome is
officially recommended script from Nrwl.Nx.
`node --inspect-brk ./node_modules/@nrwl/cli/bin/nx.js test customers-users --watch`
for some reason in my case @nrwl command for jest spec debug on chrome is not
working therefore, I am using below script to debug in chrome.

`node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand ./libs/customers/users/src --watch`

You should see the below message if debugger is running successful & listening
to web-socket port:

![](https://i.imgur.com/EQUF4jf.png)

Now open chrome and visit to the URL `chrome://inspect/#devices`

Then wait and notice in Chrome you should notice this message
`./node_modules/nx/bin/nx file:///inspect`

Click on inspect link ![](https://i.imgur.com/ahaKWeQ.png)

No if you open in chrome and search the user list component and put the debugger
then you will see the debugger is showing in chrome as well.
![](https://i.imgur.com/Tbx52XW.png)

Next change the test code

![](https://i.imgur.com/QIvpKjf.png)

and notice your chrome debugger will refresh automatically.

![](https://i.imgur.com/rx7bxrY.png)

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
**💖 Say 👋 to me!**

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:fullstackmaster1@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>
