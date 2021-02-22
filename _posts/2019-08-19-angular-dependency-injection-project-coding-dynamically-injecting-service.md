---
title:
  Dynamically Injecting Service - angular Dependency Injection Project coding
date: 2019-08-19T10:00:59.000Z
published: true
comments: true
social-share: true
categories:
  - angular
  - dependencyinjection
tags:
  - angular
  - dependencyinjection
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In our eighth angular coding session <strong><a href="https://www.youtube.com/watch?v=triCx8mDfZA&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=35" target="_blank" rel="noopener noreferrer">Angular Coding Session Learn Dependency Injection | Practical | 8/8</a><em>, </em></strong>we will see how to dynamically inject the console or http logger based on the configuration settings in our project. Here we will see why http logger constructor will not be called even though we have provided it in the Http logger.</p>
<p>We coded our project to provide it in the root and it doesn’t mean it will create an instance; it’s just that it is available there. Whenever somebody will ask, it will go to Injector; it will check if it has value or not, if not then it will go to the provider of that node. If it is module then it will ask module’s provider. It will ask module provider, you have it or not and if not how to create it. Node or module’s provider will create it and provide it to you and then Injector will use it.</p>
<p>But in our demo session if anybody needs logger, it will just ask Logger as base class. In this way we made service to be initialized whenever it is asked. If we go to the line item component, we will see there it is injected as Logger. So unless we will ask http logger or console logger explicitly, we will not get the instance.</p>
<p>This is what we should have in our Architecture to make our code robust and flexible. Snapshot from our demo coding session below:</p>
<p><img class="alignnone size-full wp-image-2515" src="{{ site.baseurl }}/assets/2019/08/DI_Coding_8.png" alt="" width="790" height="416" /></p>
<p><iframe src="https://www.youtube.com/embed/triCx8mDfZA" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
