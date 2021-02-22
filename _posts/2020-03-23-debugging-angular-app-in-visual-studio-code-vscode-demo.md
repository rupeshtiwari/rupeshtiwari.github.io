---
title: Debugging Angular App in Visual Studio Code (VSCode) - Demo
date: 2020-03-23T10:00:48.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
  - JavaScript
tags:
  - Angular
  - fullstackmaster
  - JavaScript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>As we already discussed in our previous demo session like with growing maturity our code becomes complex and difficult to debug. Then we come up with this debugger concept for both server and client side coding. In this video session <a href="https://www.youtube.com/watch?v=8AUSRUYQxik&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=26&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>0009-25- Debugging Angular App in Visual Studio Code (VSCode) </strong></a>we will focus on angular app debugging.</p>
<p>In order to debug our angular application, first we will see how to enable our code base for client side debugging. For this, we already created <strong>launch.json</strong> file in the VSCode in previous session. Here we will define all client side properties additionally, which will help us in angular app debugging.</p>
<p><img class="alignnone size-full wp-image-3038" src="{{ site.baseurl }}/assets/2020/03/25.1.png" alt="" width="851" height="480" /></p>
<p>Also we need to define task for client side debugging by putting few more objects in <strong>task.json</strong> file.</p>
<p><img class="alignnone size-full wp-image-3037" src="{{ site.baseurl }}/assets/2020/03/25.2.png" alt="" width="854" height="482" /></p>
<p><img class="alignnone size-full wp-image-3036" src="{{ site.baseurl }}/assets/2020/03/25.3.png" alt="" width="852" height="481" /></p>
<p>Next we will create “Serve” script in <strong>package.json</strong> file.</p>
<p><img class="alignnone size-full wp-image-3035" src="{{ site.baseurl }}/assets/2020/03/25.4.png" alt="" width="853" height="481" /></p>
<p>Now once we click on Client Debug button on top left corner, then debugger will be launched and we can see proceeding in Debug Console. Also we can check all the details at each function by putting checkpoints there.</p>
<p><img class="alignnone size-full wp-image-3034" src="{{ site.baseurl }}/assets/2020/03/25.5.png" alt="" width="855" height="481" /></p>
<p>So in this session we did hands on coding to create <strong>launch.json</strong> configuration object such that we can debug angular typescript code live in VSCode itself. No need to open chrome and hit F12 for debugging. Similarly we can configure our debugger to debug both client &amp; server side codes together.</p>
<p><iframe src="https://www.youtube.com/embed/8AUSRUYQxik" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
