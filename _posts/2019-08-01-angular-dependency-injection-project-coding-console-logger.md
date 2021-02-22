---
title: Angular Dependency Injection Project coding – Console Logger
date: 2019-08-01T10:00:41.000Z
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

<p>In our second angular coding session <strong><a href="https://www.youtube.com/watch?v=AIFbohEG1xs&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=29" target="_blank" rel="noopener noreferrer">Angular Coding Session Learn Dependency Injection | Practical | 2/8</a><em>, </em></strong>we will see how to use console logger as a service in our project. We will see how to differentiate between various types of modules:</p>
<ul>
<li>Shared module</li>
<li>Feature module</li>
<li>Core module.</li>
</ul>
<p>In Feature module we want to share multiple features, for example here we have sales module, pricing module as they have separate business use cases in them. Similarly we have shared module which we want to share on multiple features for example star rating as its two different instances being shared in both pricing &amp; sales modules.  In core module we will keep all of the core services which should be singleton throughout the app like logger, home page.</p>
<p>We will see why it is a good practice to keep some services which are common and has to be a single instance throughout the application in the core module. Also this session explains best practices in angular coding like how we should try to use shortcuts provided by angular to reduce redundant coding. For example, we can use angular shortcut in console logger by using injectables decorator and writing {providedIn: ‘root’} to ask angular to provide consolelogger service in the root. Now we need not to go to Appmodule and register consolelogger service there. These angular shortcuts help us in writing minimum required code.</p>
<p>Below is snapshot of our coding session:</p>
<p><img class="alignnone size-full wp-image-2500" src="{{ site.baseurl }}/assets/2019/08/DI_Coding_2.png" alt="" width="790" height="419" /></p>
<p><iframe src="https://www.youtube.com/embed/AIFbohEG1xs" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
