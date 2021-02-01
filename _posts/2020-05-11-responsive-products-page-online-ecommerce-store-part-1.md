---
layout: post
title: Responsive Products Page – online ecommerce store part 1
date: 2020-05-11 06:00:48.000000000 -04:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Angular
- Express.JS
- JavaScript
tags:
- Angular
- Express
- fullstackmaster
- JavaScript
meta:
  slide_template: default
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '60'
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609276396;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:3277;}i:1;a:1:{s:2:"id";i:3301;}i:2;a:1:{s:2:"id";i:3262;}}}}
  _edit_last: '1'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _yoast_wpseo_primary_category: '178'
  wpmm_postgrid_views: '157'
  _qode-like: '0'
  _thumbnail_id: '3291'
  _b2s_post_meta: a:6:{s:8:"og_title";s:58:"Responsive Products Page – online ecommerce
    store part 1";s:7:"og_desc";s:171:"In our previous demo session Pagination And
    Filter e-Commerce Angular App | mat-table we have covered filtering and pagination
    functionality in our ecommerce online store.";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/04/RUPESH-123.png";s:10:"card_title";s:58:"Responsive
    Products Page – online ecommerce store part 1";s:9:"card_desc";s:160:"In our previous
    demo session Pagination And Filter e-Commerce Angular App | mat-table we have
    covered filtering and pagination functionality in our ecommerce on";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/04/RUPESH-123.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/responsive-products-page-online-ecommerce-store-part-1/"
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
