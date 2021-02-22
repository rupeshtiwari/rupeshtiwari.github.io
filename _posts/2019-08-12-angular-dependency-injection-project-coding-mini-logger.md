---
title: Mini-Logger – Angular Dependency Injection Project coding
date: 2019-08-12T10:00:28.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
  - Dependency Injection
tags:
  - Angular
  - Dependency Injection
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In our fifth angular coding session <a href="https://www.youtube.com/watch?v=SIAuVR3u3m8&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=32" target="_blank" rel="noopener noreferrer"><strong>Angular Coding Session Learn Dependency Injection | Practical | 5/8 </strong></a>we will see how to create mini-logger by using existing logger in our project. It means let’s say our app is using http logger then mini-logger should use same http logger. It should not create new instance of logger. In case if our app is using socket logger then mini-logger should not create new socket connection, it should use the existing one.</p>
<p>Mini-logger should have just one method called as log{messagestring}. Like say for http logger and console logger we have three methods loginfo, logverbose and log but mini-logger we have only one method which acts like an interface to enter into http API or socket and log it. Final resource is Http or socket whichever we are using in app. Reason for making this requirement so concrete is to make us understand why we should use UseExisting provider type here.</p>
<p>Next we should try to make our code more configurable rather than making code changes every time we switch the environments. Let’s learn that coding in our next demo session. Screenshot from our fifth coding demo session is captured below:</p>
<p><img class="alignnone size-full wp-image-2509" src="{{ site.baseurl }}/assets/2019/08/DI_Coding_5.png" alt="" width="790" height="419" /></p>
<p><iframe src="https://www.youtube.com/embed/SIAuVR3u3m8" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
