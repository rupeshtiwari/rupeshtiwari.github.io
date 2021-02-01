---
layout: post
title: Creating Angular Service & Showing Products from JSON file - Demo
date: 2019-12-23 06:00:44.000000000 -05:00
type: post

published: true
comments: true
social-share: true
categories:
- Angular
tags:
- Angular
- fullstackmaster
- rupeshtiwari
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1610692511;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2881;}i:1;a:1:{s:2:"id";i:2630;}i:2;a:1:{s:2:"id";i:2995;}}}}
  _edit_last: '1'
  _thumbnail_id: '2848'
  slide_template: default
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '30'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _yoast_wpseo_primary_category: '178'
  wpmm_postgrid_views: '327'
  _qode-like: '0'
  _b2s_post_meta: a:6:{s:8:"og_title";s:123:"Creating Angular Service & Showing Products
    - Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack Training";s:7:"og_desc";s:135:"In
    this demo session Creating Product Service | Angular Service | Demo | 0009-11
    we will see how to show products from JSON file in our";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/11/RUPESH-102.png";s:10:"card_title";s:65:"Creating
    Angular Service & Showing Products from JSON file - Demo";s:9:"card_desc";s:160:"In
    this demo session Creating Product Service | Angular Service | Demo | 0009-11
    we will see how to show products from JSON file in our angular project. Each st";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/11/RUPESH-102.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/creating-angular-service-showing-products-from-json-file-demo/"
---
<p>In this demo session <a href="https://www.youtube.com/watch?v=V4vydyrmQy8&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=12&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Creating Product Service | Angular Service | Demo | 0009-11 </strong></a>we will see how to show products from JSON file in our angular project. Each step is explained with corresponding snapshot from our video session to make it readable and understanding.</p>
<p>In first step we will create <strong>products.json</strong> file and put some code there to list out products offering in our app.</p>
<p><img class="alignnone size-full wp-image-2847" src="{{ site.baseurl }}/assets/2019/12/PS1.png" alt="" width="854" height="478" /></p>
<p>Next in order to put code inside JSON file, we will copy code which is already written in our GutHub repository <a href="https://github.com/rupeshtiwari/product-mart/blob/master/package.json" target="_blank" rel="noopener noreferrer">https://github.com/rupeshtiwari/product-mart/blob/master/package.json</a> and paste it inside our newly created JSON file. Our complete code is checked-in in our GitHub repository; one can take code snippets from there and utilize them in their project.</p>
<p><img class="alignnone size-full wp-image-2846" src="{{ site.baseurl }}/assets/2019/12/PS2.png" alt="" width="850" height="523" /></p>
<p><img class="alignnone size-full wp-image-2845" src="{{ site.baseurl }}/assets/2019/12/PS3.png" alt="" width="855" height="481" /></p>
<p>One very important thing to remember here is for each module we need some data and for that data we need to create service. Will go to products module and create some service there to serve required data. Command to be used to create service here is <strong>ng g s products/product-data –m products/products.module </strong></p>
<p><img class="alignnone size-full wp-image-2844" src="{{ site.baseurl }}/assets/2019/12/PS4.png" alt="" width="857" height="479" /></p>
<p>In next step, we need to put products.json file in angular.json because our app is running on webpack i.e. nothing but in-memory sever where this products.json file is not available.</p>
<p><img class="alignnone size-full wp-image-2843" src="{{ site.baseurl }}/assets/2019/12/PS5.png" alt="" width="852" height="480" /></p>
<p>After doing this, we need to stop our in-memory server and again restart it to reflect our changes by running command <strong>ng serve</strong>.</p>
<p><img class="alignnone size-full wp-image-2842" src="{{ site.baseurl }}/assets/2019/12/PS6.png" alt="" width="853" height="478" /></p>
<p>Finally we can see products listed out in our app which are coming from JSON file through angular service.</p>
<p><img class="alignnone size-full wp-image-2841" src="{{ site.baseurl }}/assets/2019/12/PS7.png" alt="" width="858" height="485" /></p>
<p><iframe src="https://www.youtube.com/embed/V4vydyrmQy8" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
