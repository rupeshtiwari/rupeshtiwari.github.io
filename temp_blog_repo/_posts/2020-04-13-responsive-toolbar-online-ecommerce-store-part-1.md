---
title: Responsive Toolbar - Online ecommerce Store Part 1
date: 2020-04-13T10:00:31.000Z
published: true
comments: true
social-share: true
categories:
  - angular
  - express.JS
  - beginners
  - javascript
tags:
  - angular
  - express
  - beginners
  - javascript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>After learning error handling in our previous demo session <a href="https://www.youtube.com/watch?v=Zq_MT6Hc--U&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=59&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Handling Server Side HTTP Error | 0009-27</strong></a>, next we will focus on creating responsive toolbar in our ecommerce store. In today’s world most of the shopping sites are being used on mobile phones, ipads etc., so it’s a must requirement to have a responsive web app which can work properly in mobile devices.</p>
<p>In this video session <a href="https://www.youtube.com/watch?v=1gEjZavI6Rc&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=65&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Responsive Toolbar Online eCommerce Store Part 1 </strong></a>we will learn how to make our website responsive, first will start with toolbar. Currently our web app looks like below:</p>
<p><img class="alignnone size-full wp-image-3248" src="{{ site.baseurl }}/assets/2020/04/28.1.png" alt="" width="853" height="477" /></p>
<p>In order to setup a responsive toolbar, we need to take multiple steps. Each step is explained one by one with screenshots below:</p>
<p>First we will remove existing header part from app.component.html and put it in already created header.component.html.</p>
<p><img class="alignnone size-full wp-image-3247" src="{{ site.baseurl }}/assets/2020/04/28.2.png" alt="" width="853" height="478" /></p>
<p>In second step, we should go ahead and create the input property for user data. There are two ways to do that one is we can get the auth service and we can subscribe in auth service to get user data. However, here we will follow the other strategy in which we will create one smart component and sum of dump components who doesn’t know how to make network call.</p>
<p><img class="alignnone size-full wp-image-3246" src="{{ site.baseurl }}/assets/2020/04/28.3.png" alt="" width="851" height="481" /></p>
<p>Next step, we need to copy all of the css from app component and put it in header component css. Also in app component we need to pass the user to pm-header tag. However we can notice here in app.component.ts user is not observable. So first we need to make it observable so that it can push the data to header component.</p>
<p><img class="alignnone size-full wp-image-3245" src="{{ site.baseurl }}/assets/2020/04/28.4.png" alt="" width="857" height="482" /></p>
<p><img class="alignnone size-full wp-image-3244" src="{{ site.baseurl }}/assets/2020/04/28.5.png" alt="" width="854" height="483" /></p>
<p>In this way we converted our user to observable and now we can pass it to the header tag in app.component.html.</p>
<p><img class="alignnone size-full wp-image-3243" src="{{ site.baseurl }}/assets/2020/04/28.6.png" alt="" width="854" height="481" /></p>
<p>Also we will make some changes in design part to achieve the required output.  All this designing part is discussed in detail in our next video session <a href="https://www.youtube.com/watch?v=wsux8G3L-rQ&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=66&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Responsive Toolbar Online eCommerce Store Part 2 </strong></a>which is in continuity to this session.</p>
<p><iframe src="https://www.youtube.com/embed/1gEjZavI6Rc" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
