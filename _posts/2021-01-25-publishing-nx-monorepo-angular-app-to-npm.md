---
layout: post
title: Publishing Nx Monorepo Angular App to NPM
date: '2021-01-25 00:00 +0000'
subtitle: learn how to publish angular app to npm from nx monorepo apps
description: learn how to publish angular app to npm from nx monorepo apps
cover-img: 'https://i.imgur.com/hiQZ0BG.png'
cover_image: 'https://i.imgur.com/QETXvJI.png'
thumbnail-img: 'https://i.imgur.com/bgL1DCX.png'
share-img: 'https://i.imgur.com/bgL1DCX.png'
tags: 'nx,angular,npm,beginners'
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 590438
---

> Do you want to publish your [nx monorepo](https://nx.dev) app to npmjs.org? In this article, I will explain how can u publish your app to npmjs.org. 

## Introduction

In my monorepo, when I build my app then inside the dist folder I get my application **dist/apps/onlinestore-dashboard**. I will show you how to automate things such that you can publish it into npm.org. Then anyone can install it as node package and use it in .net project or any other server side project's home page. 


## In Nx Monorepo Apps are not publishable by design

By default, Nrwl.Nx Monorepo Angular apps are not publishable. They don't expect you to put your apps in npm.org or your local microsoft npm repository.


## No package.json in App projects

Notice that in our application there is no `package.json` file. So by default it is not publishable to npm. If you build this application then you can notice inside the dist folder you will not have package.json file. 
![](https://i.imgur.com/kCdTCxu.png)

Lets see this in action go ahead in terminal and run 
`nx build onlinestore-dashboard`
Check the dist folder you will see there is no package.json file. 
![](https://i.imgur.com/sgqkBVO.png)

In order to make your application as npm package you need to have package.json file. 

Lets fix it I will have to:
- Add package.json to our application
- Copy the package.json file to the dist folder after build is done. 



## Adding new package.json file to app
Go to onlinestore-dashboard project and add a `package.json` file.

```json
{
  "name": "@fsms/onlinestore-dashboard",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^10.1.6",
    "@angular/core": "^10.1.6"
  },
  "dependencies": {
    "tslib": "^2.0.0"
  }
}

```
If you want to publish to your local Microsoft npm repository. Then you must add `.npmrc` file to your application.

## Copying Packag.json to Dist folder

Install `copyfiles` npm package as dev dependency. 

Run below script 

`npm i -D copyfiles`


Next lest create below script for copying package.json file in package.json file. 

`"copy:dashboard:prd": "copyfiles ./apps/onlinestore-dashboard/package.json ./dist"`


If you want to publish to your local Microsoft npm repository. Then you must copy `.npmrc` file to dist folder.

I am planning to publish this application over public npm.org. Therefore, I am not adding any `.npmrc` file. 

## Building application
Now lets make a script which will build our application and then copy package.json file.

`"build:dashboard:prd" :"nx build onlinestore-dashboard && npm run copy:dashboard:prd"`

Lets run this above script. 

![](https://i.imgur.com/aALuog2.png)

Verify the `dist` folder and notice `package.json` file is now present. 

![](https://i.imgur.com/oL4w0cM.png)


## Bumping the package.json version

If you do not bump the version of the package.json file. Then you will ended duplicate versions and npm.org will throw error something like this 

```error
ERR! You cannot publish over the previously published versions:
```

So lets add below scripts to bump the version.

```json
"publish:dashboard:patch":"cd dist/apps/onlinestore-dashboard && npm version patch --force",
"publish:dashboard:major":"cd dist/apps/onlinestore-dashboard && npm version patch --force",
"publish:dashboard:minor":"cd dist/apps/onlinestore-dashboard && npm version patch --force"
````

Now lets run:

`npm run publish:dashboard:patch`

Notice version in package.json in dist folder increased to `0.0.2` 

```json
{
  "name": "@fsms/onlinestore-dashboard",
  "version": "0.0.2",
  "peerDependencies": {
    "@angular/common": "^10.1.6",
    "@angular/core": "^10.1.6"
  },
  "dependencies": {
    "tslib": "^2.0.0"
  }
}
```

## Publishing app in npm
Lets update our script to publish to npm add `npm publish --access public`. 

```json
"publish:dashboard:patch":"cd dist/apps/onlinestore-dashboard && npm version patch --force && npm publish --access public",
"publish:dashboard:major":"cd dist/apps/onlinestore-dashboard && npm version patch --force && npm publish --access public",
"publish:dashboard:minor":"cd dist/apps/onlinestore-dashboard && npm version patch --force && npm publish --access public"
```


Login to npm run `npm login` enter your username, password and email id. 

![](https://i.imgur.com/3SYfX88.png)

![](https://i.imgur.com/ZlSMJYx.png)


## Verify app is published 
Login to npm.org and go to your account and search for your package.

![](https://i.imgur.com/g5sT0vr.png)

https://www.npmjs.com/package/@fsms/onlinestore-dashboard


## Conclusion

You learn how to publish a package to public organization. Still if you have a nrwl.Nx monorepo. Then  you need to write custom node.js code to identify which application is changed then bump the version for that application only and publish the same app to npm registry. 
In my next article I will explain that in detail.

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
