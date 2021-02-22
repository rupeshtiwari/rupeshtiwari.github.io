---
title: Angular Dependency Injection Project coding - Introduction
date: 2019-07-25T10:00:38.000Z
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

<p>As we know about Dependency Injection in detail like what is DI, where to use it and what is its significance? So in order to understand Dependency Injection with real world project, let’s start coding from scratch to create a mini website. This mini website is nothing but a retail website which is selling various items. In this we have one Orders page where we have couple of line items and in each line item we have to change price &amp; quantity and ultimately it will reflect in total price automatically.</p>
<p>We will start with simple things but may be in future it can get more complex like we may need to apply special discount coupons on certain items, arrange line items by state and so on. So rather than creating these line items as a component , we will create them as a service because more we push business logic towards service more our application will be stable. It will also be helpful when we upgrade our angular as there will be less impact.</p>
<p>As per Hierarchical DI, we will create one Line item service which has independent instances at each line item and they all will talk to Order service which will commit changes into database. All this is well explained in our video tutorial <strong><a href="https://www.youtube.com/watch?v=oA3KKi2Y1Pw&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=27" target="_blank" rel="noopener noreferrer">Angular Dependency Injection | Sample App | Tutorial</a><em>  </em></strong>Snapshot below:</p>
<p><img class="alignnone size-full wp-image-2480" src="{{ site.baseurl }}/assets/2019/07/DI-Coding-1.png" alt="" width="790" height="417" /></p>
<p>Similarly we will try to understand few more concepts through this project. At the end of this project implementation we will learn below topics incrementally:</p>
<ul>
<li>Hierarchical DI</li>
<li>Console Logger</li>
<li>Http Logger</li>
<li>How to Inject the base URL: Provider usage</li>
<li>Mini logger with one Log function</li>
</ul>
<p><iframe src="https://www.youtube.com/embed/oA3KKi2Y1Pw" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
