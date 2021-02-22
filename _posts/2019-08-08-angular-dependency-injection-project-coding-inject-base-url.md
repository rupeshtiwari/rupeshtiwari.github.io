---
title: Angular Dependency Injection Project coding – Inject Base URL
date: 2019-08-08T10:00:32.000Z
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

<p>In our fourth angular coding session <strong><a href="https://www.youtube.com/watch?v=Ww5gngAHdpU&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=31" target="_blank" rel="noopener noreferrer">Angular Coding Session Learn Dependency Injection | Practical | 4/8</a><em>, </em></strong>we will see how to Inject Base URL from module in our project. Its requirement says that we need to change base URL based on the environment i.e. for dev environment it should be different, for QA it should be different.</p>
<p>In Angular, we have Class name as DI token for any Class or instance. But for string, number angular has given a new class named as ‘Injection Token’ which we can use as DI token. In this demo we will see how injecting Base API URL from module will make our code more flexible and ready to accept changes easily.</p>
<p>So by the end of our fourth coding session we have learnt how to make our code future proof in order to accommodate further changes. If in future our requirement changes and we are asked to use some different logger let’s say http logger in place of console logger, we can simply make change at one place and it will work.  By injecting Base API URL from module we can change base URL based on the environment with just minimal changes in code.</p>
<p>In demo session it is explained and coding is done for just one component, but in actual coding for your project you need to do for all of your components wherever required. Screenshot from our demo session:</p>
<p><img class="alignnone size-full wp-image-2506" src="{{ site.baseurl }}/assets/2019/08/DI_Coding_4.png" alt="" width="790" height="419" /></p>
<p><iframe src="https://www.youtube.com/embed/Ww5gngAHdpU" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
