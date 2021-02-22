---
title: Pagination and Filter – online ecommerce store
date: 2020-05-04T10:00:23.000Z
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

<p>As we already fixed design and responsiveness of Login and Register pages of our ecommerce app in previous demo session <a href="https://www.youtube.com/watch?v=-sZAlN5sSI0&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=68&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Creating Responsive Login And Register Page | Mobile Compatible. </strong></a>Next in this video tutorial <a href="https://www.youtube.com/watch?v=HIF-qFKQsOk&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=69&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Pagination And Filter e-Commerce Angular App | mat-table</strong></a> we will focus on fixing the Products page of our online store and make it mobile compatible.</p>
<p>If we see our Products page now, it’s showing all products overlapping on each other. Also there are no options to choose and put them into cart, no filtering, and no pagination option as well.</p>
<p><img class="alignnone size-full wp-image-3288" src="{{ site.baseurl }}/assets/2020/05/PF-1.png" alt="" width="853" height="481" /></p>
<p>Currently we are using mat-card or mat-grid, but we should use mat-table to make it look better and responsive. Also we need to do Filter, sorting and Pagination of this Products page. All this functionality is readily available in angular material site. We can go to angular material site <a href="https://material.angular.io/">https://material.angular.io</a> to get the code for required functionality.</p>
<p><img class="alignnone size-full wp-image-3287" src="{{ site.baseurl }}/assets/2020/05/PF-2.png" alt="" width="851" height="483" /></p>
<p>We can also go to embedded Stackblitz link in angular material site <a href="https://stackblitz.com/">https://stackblitz.com</a> and check the entire code base to get more clarity on it.</p>
<p><img class="alignnone size-full wp-image-3286" src="{{ site.baseurl }}/assets/2020/05/PF-3.png" alt="" width="852" height="481" /></p>
<p>Now one by one we can copy the required code in our Products component, let’s start with filter first. We just need to put filter code in product component html file and ts file from stackblitz site.</p>
<p><img class="alignnone size-full wp-image-3285" src="{{ site.baseurl }}/assets/2020/05/PF-4.png" alt="" width="855" height="481" /></p>
<p><img class="alignnone size-full wp-image-3284" src="{{ site.baseurl }}/assets/2020/05/PF-5.png" alt="" width="854" height="483" /></p>
<p>After putting this code we can see filter functionality is added to our products page and its working properly. Also we can apply full width in filter form as well to make it look better.</p>
<p><img class="alignnone size-full wp-image-3283" src="{{ site.baseurl }}/assets/2020/05/PF-6.png" alt="" width="852" height="480" /></p>
<p>Similarly we will pick Pagination code from angular material and use it in our app.</p>
<p><img class="alignnone size-full wp-image-3282" src="{{ site.baseurl }}/assets/2020/05/PF-7.png" alt="" width="852" height="479" /></p>
<p><img class="alignnone size-full wp-image-3281" src="{{ site.baseurl }}/assets/2020/05/PF-8.png" alt="" width="854" height="479" /></p>
<p><img class="alignnone size-full wp-image-3280" src="{{ site.baseurl }}/assets/2020/05/PF-9.png" alt="" width="852" height="480" /></p>
<p>Finally we can see pagination functionality appearing in our ecommerce app.</p>
<p><img class="alignnone size-full wp-image-3279" src="{{ site.baseurl }}/assets/2020/05/PF-10.png" alt="" width="854" height="479" /></p>
<p>Next in our upcoming video session <strong><a href="https://www.youtube.com/watch?v=ID3sxo7NchA&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=70&amp;t=0s" target="_blank" rel="noopener noreferrer">Responsive Products Page | e-Commerce | Angular Material | 1</a> </strong>we will work on adding functionality of AddCart where we can add/delete items or change its quantity.</p>
<p><iframe src="https://www.youtube.com/embed/HIF-qFKQsOk" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
