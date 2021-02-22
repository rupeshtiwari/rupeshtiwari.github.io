---
title: Environment setup & Installation- Angular app development
date: 2019-10-28T10:00:55.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
tags:
  - Angular
  - fullstackmaster
  - rupeshtiwari
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>Let’s begin our Angular app development project from scratch. This article explains each step very minutely, so that you do not feel lost anywhere. It also showcases screenshots from our classroom video tutorial to make it more practical. You can visit our video session <a href="https://www.youtube.com/watch?v=t_cLb4OyAsA&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=4&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Creating Angular App using Angular CLI | 0009-03 </strong></a>anytime to get an insight into it.</p>
<p>The very first step is to set up our environment to work on. Step by step process is explained below:<br />
Download Node.js for your windows/MAC system. It can be 32 bit /64 bit depending on your requirement.<br />
<img class="alignnone size-full wp-image-2631" src="{{ site.baseurl }}/assets/2019/10/OE-4.png" alt="" width="790" height="400" /></p>
<p>After installation we can check in PowerShell which version is installed or if it’s already there in our system we can check which version we have by using command node -v. Along with this we can check which npm version node.js has installed by using npm –v.<br />
<img class="alignnone size-full wp-image-2638" src="{{ site.baseurl }}/assets/2019/10/OE-5.png" alt="" width="790" height="450" /></p>
<p>Next is we need some editor, here we have used visual studio editor VScode. We can download &amp; install it from their official site.<br />
<img class="alignnone size-full wp-image-2637" src="{{ site.baseurl }}/assets/2019/10/OE-6.png" alt="" width="790" height="400" /></p>
<p>With above three steps we are done with environmental setup and now we will install Angular CLI. This is something we want to install globally throughout our project. However while installing it globally, angular team also put angular CLI version locally. To install angular CLI we use command npm i –g @angular/cli<br />
<img class="alignnone size-full wp-image-2636" src="{{ site.baseurl }}/assets/2019/10/OE-7.png" alt="" width="790" height="450" /></p>
<p>To check version we can use command ng –version<br />
<img class="alignnone size-full wp-image-2635" src="{{ site.baseurl }}/assets/2019/10/OE-8.png" alt="" width="790" height="450" /></p>
<p>In above steps we completed all prerequisite to kick start our app development. Further we need to understand an important command to create angular app.<br />
<img class="alignnone size-full wp-image-2634" src="{{ site.baseurl }}/assets/2019/10/OE-9.png" alt="" width="790" height="400" /></p>
<p>Now we are all set to create our first angular project, we name it as PRODUCT MART. This is an Angular App where we are using Angular Material to develop pages and we are making this app from the scratch to learn angular.<br />
<img class="alignnone size-full wp-image-2633" src="{{ site.baseurl }}/assets/2019/10/OE-10.png" alt="" width="790" height="450" /></p>
<p>In our video session we have explained all created project files in detail in visual studio. Also it explains the importance of each file like Karma.config.js, polyfills.ts, angular.json etc. Sometimes people do ask like why my angular project does not work in IE? So for that answer lies in polyfill files, where we need to uncomment few codes so that our project become compatible with all required browsers.<br />
<img class="alignnone size-full wp-image-2632" src="{{ site.baseurl }}/assets/2019/10/OE-11.png" alt="" width="790" height="400" /></p>
<p>Also all our code is checked in into GitHub repository. Please visit our GitHub code base <strong><a href="https://github.com/rupeshtiwari/product-mart/tree/master" target="_blank" rel="noopener noreferrer">https://github.com/rupeshtiwari/product-mart/tree/master</a></strong> to get the code snippet for this project.</p>
<p><iframe src="https://www.youtube.com/embed/t_cLb4OyAsA" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
