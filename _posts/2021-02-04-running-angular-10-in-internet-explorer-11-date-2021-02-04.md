---
layout: post
title: Running Angular 10 in Internet Explorer 11
date: "2021-02-04 00:00 +0000"
subtitle: Learn supporting Internet Explorer in Angular
description: Learn supporting Internet Explorer in Angular
cover-img: "https://i.imgur.com/NRaQUA5.png"
cover_image: "https://i.imgur.com/FtOy5i6.png"
thumbnail-img: "https://i.imgur.com/7pgedpv.png"
share-img: "https://i.imgur.com/7pgedpv.png"
canonical_url: >-
  https://rupeshtiwari.github.io/2021-02-03-running-angular-10-in-internet-explorer-11-date-2021-02-04/
tags: "angular,css,tutorial,beginners"
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
toc: true
excerpt_separator: <!--more-->
id: 592350
---

> Are you worried that new angular 10 project is not running in "**IE11**" even
> though you enable the given **polyfills** by angular team? Then please read
> this article.

## Angular 10 default tsconfig target is es2015

Since Angular 10 apps comes with target compiled version as **es2015** in
**tsconfig.json** file.

![](https://i.imgur.com/jUUlN7X.png)

## Enabling IE 11 Polyfills.js

Go to `polyfills.js` and un-comment below import for IE11.

```json
import 'classlist.js'; // Run `npm install --save classlist.js`.
```

Install node package:

```shell
npm install --save classlist.js
```

## Importing core-js in polyfills.js

Symbols, promise etc will not work in IE11 unless you put core-js in the
polyfills. Therefore, please import core-js in polyfills.

`import 'core-js'`

Then install **core-js**

Install node package

```shell
npm i core-js
```

![](https://i.imgur.com/9BNqBLr.png)

## Option-1: Converting compiler option to es5 in tsconfig

If your primary client is IE11. Then the simple option is to go to
**tsconfig.json** at the root of your project and change the **target** value to
**es5**

![](https://i.imgur.com/soe3snm.png)

This option will always create bundle in IE compatible format that works both

## Option-2: Maintaining es5 separate tsconfig

If you want to maintain both version **es2015** and **es5** then follow below:

1. Create new `tsconfig-es5.app.json`

![](https://i.imgur.com/BQlp9dx.png)

2. Add target **es5**

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "target": "es5"
  }
}
```

![](https://i.imgur.com/0fq8KaZ.png)

3. Go to `angular.json` under
   `projects:<YourAppName>:architect:build:configurations` add

```json
 "es5": {
            "tsConfig": "./tsconfig-es5.app.json"
        }
```

![](https://i.imgur.com/II1GeDj.png)

3. And `projects:<YourAppName>:architect:serve:configurations` add 👉 change
   yourappname with your project name.

![](https://i.imgur.com/ZFf99iB.png)

4. Add below scripts in package.json

```json
"build:ie":"ng build --configuration es5",
"build:ie:prod":"ng build --configuration es5 --prod",
"start:ie":"ng serve --configuration es5"

```

Now in order to open project in IE run `npm run start:ie`

Now in order to build project in IE compatible run `npm run build:ie`

Now in order to build project in IE compatible Prod Mode run
`npm run build:ie:prod`

## Reference

[How to run Angular 10 in IE](https://stackoverflow.com/questions/56379067/how-do-i-support-internet-explorer-in-an-angular-8-application)

<br/>

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
