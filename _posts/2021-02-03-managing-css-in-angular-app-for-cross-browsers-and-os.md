---
layout: post
title: Managing CSS in Angular App for Cross Browsers and OS
date: '2021-02-03 13:50 -0500'
subtitle: Learn creating multiple css files for cross browsers and os in angular app
description: Learn creating multiple css files for cross browsers and os in angular app
cover-img: 'https://imgur.com/NRaQUA5.jpg'
cover_image: 'https://i.imgur.com/Eiyywcv.png'
thumbnail-img: 'https://i.imgur.com/knMB5bS.png'
share-img: 'https://i.imgur.com/knMB5bS.png'
canonical_url: 'https://rupeshtiwari.github.io/2021-02-03-managing-css-in-angular-app-for-cross-browsers-and-os/'
tags: 'angular,css,productivity,webdev'
last_modified_at: null
published: false
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 591323
---

> Do you want to organize your **CSS** files in your **angular** app? Do you want to find out the strategy to segregate the CSS based on cross browsers and operating systems? You CSS designer should not be worried how to manage these. As a developer you should setup your angular app such that it works out of the box.

## Introduction 

I will use angular 10 project. Then I will install  `ngx-device-detector` node package and finally I will demonstrate the best practice to follow to dynamically load cross browser and operating system related CSS files in your angular application. 


## Installing ngx-device-detector Angular Library

I am assuming that you have created one angular project named as `manage-css` using angular cli `ng new manage-css --styles=scss`. I have angular project created with `sass` styles. 

```shell 
npm i -S ngx-device-detector
```

## Showing OS and Browser Info using ngx-device-detector Angular Library
Add below code in app component to see how **ngx-device-detector** works. 

**app.component.ts**
```typescript
import { Component } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'manage-css';
  deviceInfo: DeviceInfo;
  constructor(private deviceDetectorService: DeviceDetectorService) {
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
  }
}
```
**app.component.html**
```htmlembedded
<div>
  <ul>
    <li>user Agent - {{deviceInfo.userAgent}}</li>
    <li>Os - {{deviceInfo.os}}</li>
    <li>browser - {{deviceInfo.browser}}</li>
    <li>device - {{deviceInfo.device}}</li>
    <li>os_version - {{deviceInfo.os_version}}</li>
    <li>browser_version - {{deviceInfo.browser_version}}</li>
    <li>deviceType - {{deviceInfo.deviceType}}</li>
    <li>orientation - {{deviceInfo.orientation}}</li>
  </ul>
</div>

```

![](https://i.imgur.com/2cX7wWZ.png)

## Adding default style.scss for all Browsers (IE & Chrome etc.)

`styles.scss` would be our default style file. You could imagine this is our base style file. 

```sass
#test {
  background-color: aqua;
  height: auto;
  width: 200px;
}
```

Let's crate a `div` in `app.component.html`

```htmlembedded
<div id="test">
  This is angular app
  <br>
  Chrome color: aqua
  <br>
  IE color: yellow
</div>
```
Now our site is running both in chrome and IE browser nicely

Chrome: 

![](https://i.imgur.com/VbdHBNB.png)

IE browser: 

![](https://i.imgur.com/Yq10dRB.png)

Now I have requirement to show border only on IE browser not in Chrome. 

## Adding IE Browser specific CSS Files in Angular App

Let's assume we are writing CSS for chrome browser as default. 
And we want to extend few style class for IE browser. 
So lets create `styles-ie.scss` and extend one of our default class `test` from  `styles.scss`. 

extended `test` class and added border 

```sass
@import "./styles.scss";

#test {
  // @extend .test;
  border: 5px red dashed;
}
```

We need to add this file in **angular.json** so that angular will add this to the **index.html** file when we serve or build. 

Go to `angular.json`  >  `architect` > `build` > `options` > `styles` and add below code

```json
 "styles": [
              { "input": "src/styles.scss", "bundleName": "styles" },
              { "input": "src/styles-ie.scss", "bundleName": "styles-ie" }
            ],
```

Now lest run `npm run build` Notice we have 2 files `styles.css` and `styles-ie.css` in dist/manage-css folder

![](https://i.imgur.com/T0kIkDw.png)

Now in the `Index.hml` you see Angular build add both CSS files. 

![](https://i.imgur.com/s2j7PQB.png)


We do not want that. Because, I want IE style files to be removed while running in Chrome.

![](https://i.imgur.com/ea53Sa0.png)


## Loading only Chrome Styles on Chrome Browser

Now, I will use deviceInfo object to determine which browser I am in. Then I will use `Document` from `@angular/common` to remove the IE specific style files.

In order to do above I will prefer to create angular service `StyleService` and execute this when my application initialized. 

## Creating Style Service and Remove IE Specific style files

Lets search all the link nodes with having style files ending with `-ie.css` and remove them. 

Create `style.service.ts` add below code:

```typescript
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Injectable({ providedIn: 'root' })
export class StyleService {
  deviceInfo: DeviceInfo;
  constructor(
    private readonly deviceDetectorService: DeviceDetectorService,
    @Inject(DOCUMENT) private readonly document: any
  ) {}

  execute() {
    this.removeIEStylesIfRunningInChrome();
  }

  private removeIEStylesIfRunningInChrome() {
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
    const head = this.document.getElementsByTagName('head')[0];
    if (this.deviceInfo.browser === 'Chrome') {
      [...(this.document.querySelectorAll('link') as any)]
        .filter((x) => x.href?.indexOf('-ie.css') > -1)
        .forEach((f) => head.removeChild(f));
    }
  }
}

```

Create `init-styles.ts` 

```typescript
import { StyleService } from './style.service';

export function initStyles(styleService: StyleService) {
  return () => {
    styleService.execute();
  };
}
```

In `app.module.ts` add provider to call `initStyles`

```typescript
 providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initStyles,
      deps: [StyleService],
      multi: true,
    },
  ],
```

## Showing Chrome and IE specific styles only

Now lets run `ng serve` 

and in Chrome IE specific styles are removed only Chrome Styles are loaded 🙂

![](https://i.imgur.com/ULGLJVp.png)

and IE browser has extra style file for IE browser specific `styles-ie.css`  🙂

![](https://i.imgur.com/h8hf0P3.png)


## Adding Operating system specific styles in Angular app

I want to add `styles-mac.scss` and add black border to be shown only on MAC. 

Add `styles-mac.scss`

```sass 
@import "./styles.scss";

#test {
  // @extend .test;
  border: 5px black dashed;
}

```

Update `angular.json` to add MAC sass files.

```json
   "styles": [
              { "input": "src/styles.scss", "bundleName": "styles" },
              { "input": "src/styles-ie.scss", "bundleName": "styles-ie" },
              { "input": "src/styles-mac.scss", "bundleName": "styles-mac" }
            ],
```

Update the `styles.service` to add new method to remove MAC styles if running on Windows OS and call on `execute` function.


```typescript
execute() {
    this.removeIEStylesIfRunningInChrome();
    this.removeMacStylesIfRunningInWindowsOS();
}
private removeMacStylesIfRunningInWindowsOS() {
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
    const head = this.document.getElementsByTagName('head')[0];
    if (this.deviceInfo.os === 'Windows') {
      [...(this.document.querySelectorAll('link') as any)]
        .filter((x) => x.href?.indexOf('-mac.css') > -1)
        .forEach((f) => head.removeChild(f));
    }
  }
```





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
