---
title: Creating Angular Component & Lazy Loaded Module - Demo
date: 2019-12-09T11:00:48.000Z
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

<p>Let’s begin this demo session <a href="https://www.youtube.com/watch?v=emlJbYT7MbY&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=10&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Creating Products Module | Lazy loaded module | Angular | 0009-09 </strong></a>by creating a home component. Command used to generate home component is <strong>ng generate component home </strong>and shortcut is <strong>ng g c home. </strong>This command will automatically update our app module and put home folder inside our app folder.</p>
<p><img class="alignnone size-full wp-image-2830" src="{{ site.baseurl }}/assets/2019/12/LM1.png" alt="" width="852" height="481" /></p>
<p>It’s just a first step in our app creation process. Before getting deeper into its coding lets understand some dos &amp; don’ts regarding landing page:</p>
<ul>
<li>Landing/Home page should be very lite and it should not load entire application.</li>
<li>It should be very snappy and rest you can load on demand or under the hood. It is also known as lazy loading.</li>
<li>When you built features, try to build them lazy. It means build feature module in such a way that once you load your app it does not load whole application. This is also called as Lazy load module concept.</li>
</ul>
<p>Let’s create a simple landing page by executing home page creation command and see how our page looks in application window. Keeping in mind Lazy Load concept, we will also try to make our landing page lite keeping only required info like Welcome message and introduction kind of stuff.</p>
<p><img class="alignnone size-full wp-image-2829" src="{{ site.baseurl }}/assets/2019/12/LM2.png" alt="" width="855" height="481" /></p>
<p><iframe src="https://www.youtube.com/embed/emlJbYT7MbY" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
