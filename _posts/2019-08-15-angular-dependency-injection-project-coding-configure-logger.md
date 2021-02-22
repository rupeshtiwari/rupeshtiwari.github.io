---
title: Configure Logger - Angular Dependency Injection Project coding
date: 2019-08-15T10:00:29.000Z
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

<p>In our sixth angular coding session <strong><a href="https://www.youtube.com/watch?v=5xZunv-kwqU&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=33" target="_blank" rel="noopener noreferrer">Angular Coding Session Learn Dependency Injection | Practical | 6/8</a><em>, </em></strong>we will see how to configure logger based on environment in our project. In this demo we will see how to configure the logger service such that based on environment change it will switch to http or console. Let’s say for dev it should use console logger and for prod it will go to http logger.</p>
<p>In this scenario, we will use UseFactory pattern to produce new instances for same family. Its requirement says that based on some key or some environment mode we need to produce two kinds of objects either http or console logger. However both of them belong to same class i.e. Logger class. Both are inherited from Logger base class as child classes.</p>
<p>In our seventh angular coding session <strong><a href="https://www.youtube.com/watch?v=9iofty6emok&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=34" target="_blank" rel="noopener noreferrer">Angular Coding Session Learn Dependency Injection | Practical | 7/8</a><em>, </em></strong>we have continued the coding to make our app configurable based on environment modes. In our next coding session we will see how to dynamically inject the console or http logger based on the configuration settings coming from the release definition. Snapshot from coding session below:</p>
<p><img class="alignnone size-full wp-image-2512" src="{{ site.baseurl }}/assets/2019/08/DI_Coding_6-7.png" alt="" width="790" height="419" /></p>
<p><iframe src="https://www.youtube.com/embed/9iofty6emok" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
