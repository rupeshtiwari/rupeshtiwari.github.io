---
title: Responsive Products Page – online ecommerce store part 1
date: 2020-05-11T10:00:48.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
  - Express.JS
  - JavaScript
tags:
  - Angular
  - Express
  - fullstackmaster
  - JavaScript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In our previous demo session <a href="https://www.youtube.com/watch?v=HIF-qFKQsOk&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=69&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Pagination And Filter e-Commerce Angular App | mat-table</strong></a> we have covered filtering and pagination functionality in our ecommerce online store. Now we will focus on adding functionality of AddCart where we can add/delete items or change its quantity in our Products page.</p>
<p>In this video session <a href="https://www.youtube.com/watch?v=ID3sxo7NchA&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=70&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Responsive Products Page | e-Commerce | Angular Material | 1</strong> </a>we will see how to make responsive products page by using mat-table. Currently we are using mat-card or mat-grid and it looks like below:</p>
<p><img class="alignnone size-full wp-image-3299" src="{{ site.baseurl }}/assets/2020/05/R1-1.png" alt="" width="852" height="483" /></p>
<p>In normal mode it is looking good, but in mobile mode all products are overlapping with each other. Let’s try to fix this first by adding required code in products.component.html file.  Here also we can go to angular material site <a href="https://material.angular.io/">https://material.angular.io</a> to get the mat-table code for required functionality and put it in products html file.</p>
<p><img class="alignnone size-full wp-image-3298" src="{{ site.baseurl }}/assets/2020/05/R1-2.png" alt="" width="853" height="480" /></p>
<p><img class="alignnone size-full wp-image-3297" src="{{ site.baseurl }}/assets/2020/05/R1-3.png" alt="" width="853" height="480" /></p>
<p>After placing the code and making required changes, still we can see our products are not displaying at all. Reason is we do not have any data source and also have not defined displayed columns. For this first we need to create products.ts file by creating a class in core module and define some properties inside it.</p>
<p><img class="alignnone size-full wp-image-3296" src="{{ site.baseurl }}/assets/2020/05/R1-4.png" alt="" width="852" height="481" /></p>
<p><img class="alignnone size-full wp-image-3295" src="{{ site.baseurl }}/assets/2020/05/R1-5.png" alt="" width="855" height="478" /></p>
<p>Second thing we need to define the data source in product.component.ts file as shown below, currently it’s just an observable of any. Along with this we will also define properties loading, subscriptions and displayed columns in it.</p>
<p><img class="alignnone size-full wp-image-3294" src="{{ site.baseurl }}/assets/2020/05/R1-6.png" alt="" width="853" height="478" /></p>
<p><img class="alignnone size-full wp-image-3293" src="{{ site.baseurl }}/assets/2020/05/R1-7.png" alt="" width="800" height="476" /></p>
<p>At last we will do some css settings to look these products page better as shown below:</p>
<p><img class="alignnone size-full wp-image-3292" src="{{ site.baseurl }}/assets/2020/05/R1-8.png" alt="" width="853" height="480" /></p>
<p>In next video session <a href="https://www.youtube.com/watch?v=tijsesStWGI&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=71&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Responsive Products Page | e-Commerce | Angular Material | 2</strong></a> we will focus mainly on the responsive part of our products page.</p>
<p><iframe src="https://www.youtube.com/embed/ID3sxo7NchA" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
