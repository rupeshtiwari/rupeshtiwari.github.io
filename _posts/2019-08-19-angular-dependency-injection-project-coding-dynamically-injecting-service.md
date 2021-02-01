---
layout: post
title: Dynamically Injecting Service - Angular Dependency Injection Project coding
date: 2019-08-19 06:00:59.000000000 -04:00
type: post

published: true
comments: true
social-share: true
categories:
- Angular
- Dependency Injection
tags:
- Angular
- Dependency Injection
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1610275018;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2511;}i:1;a:1:{s:2:"id";i:2499;}i:2;a:1:{s:2:"id";i:2508;}}}}
  _edit_last: '1'
  _thumbnail_id: '2497'
  slide_template: default
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '90'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _yoast_wpseo_primary_category: '178'
  wpmm_postgrid_views: '448'
  _qode-like: '0'
  _b2s_post_meta: a:6:{s:8:"og_title";s:75:"Dynamically Injecting Service - Angular
    Dependency Injection Project coding";s:7:"og_desc";s:160:"In our eighth angular
    coding session Angular Coding Session Learn Dependency Injection | Practical |
    8/8, we will see how to dynamically inject the console or h";s:8:"og_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-95.png";s:10:"card_title";s:75:"Dynamically
    Injecting Service - Angular Dependency Injection Project coding";s:9:"card_desc";s:160:"In
    our eighth angular coding session Angular Coding Session Learn Dependency Injection
    | Practical | 8/8, we will see how to dynamically inject the console or h";s:10:"card_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-95.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/angular-dependency-injection-project-coding-dynamically-injecting-service/"
---
<p>In our eighth angular coding session <strong><a href="https://www.youtube.com/watch?v=triCx8mDfZA&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=35" target="_blank" rel="noopener noreferrer">Angular Coding Session Learn Dependency Injection | Practical | 8/8</a><em>, </em></strong>we will see how to dynamically inject the console or http logger based on the configuration settings in our project. Here we will see why http logger constructor will not be called even though we have provided it in the Http logger.</p>
<p>We coded our project to provide it in the root and it doesn’t mean it will create an instance; it’s just that it is available there. Whenever somebody will ask, it will go to Injector; it will check if it has value or not, if not then it will go to the provider of that node. If it is module then it will ask module’s provider. It will ask module provider, you have it or not and if not how to create it. Node or module’s provider will create it and provide it to you and then Injector will use it.</p>
<p>But in our demo session if anybody needs logger, it will just ask Logger as base class. In this way we made service to be initialized whenever it is asked. If we go to the line item component, we will see there it is injected as Logger. So unless we will ask http logger or console logger explicitly, we will not get the instance.</p>
<p>This is what we should have in our Architecture to make our code robust and flexible. Snapshot from our demo coding session below:</p>
<p><img class="alignnone size-full wp-image-2515" src="{{ site.baseurl }}/assets/2019/08/DI_Coding_8.png" alt="" width="790" height="416" /></p>
<p><iframe src="https://www.youtube.com/embed/triCx8mDfZA" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
