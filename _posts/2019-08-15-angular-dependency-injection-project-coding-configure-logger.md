---
layout: post
title: Configure Logger - Angular Dependency Injection Project coding
date: 2019-08-15 06:00:29.000000000 -04:00
type: post

published: true
password: ''
status: publish
categories:
- Angular
- Dependency Injection
tags:
- Angular
- Dependency Injection
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609263418;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2505;}i:1;a:1:{s:2:"id";i:2514;}i:2;a:1:{s:2:"id";i:2508;}}}}
  _edit_last: '1'
  _thumbnail_id: '2496'
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
  wpmm_postgrid_views: '366'
  _qode-like: '0'
  _b2s_post_meta: a:6:{s:8:"og_title";s:62:"Configure Logger - Angular Dependency
    Injection Project coding";s:7:"og_desc";s:160:"In our sixth angular coding session
    Angular Coding Session Learn Dependency Injection | Practical | 6/8, we will see
    how to configure logger based on environmen";s:8:"og_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-94.png";s:10:"card_title";s:62:"Configure
    Logger - Angular Dependency Injection Project coding";s:9:"card_desc";s:160:"In
    our sixth angular coding session Angular Coding Session Learn Dependency Injection
    | Practical | 6/8, we will see how to configure logger based on environmen";s:10:"card_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-94.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/angular-dependency-injection-project-coding-configure-logger/"
---
<p>In our sixth angular coding session <strong><a href="https://www.youtube.com/watch?v=5xZunv-kwqU&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=33" target="_blank" rel="noopener noreferrer">Angular Coding Session Learn Dependency Injection | Practical | 6/8</a><em>, </em></strong>we will see how to configure logger based on environment in our project. In this demo we will see how to configure the logger service such that based on environment change it will switch to http or console. Let’s say for dev it should use console logger and for prod it will go to http logger.</p>
<p>In this scenario, we will use UseFactory pattern to produce new instances for same family. Its requirement says that based on some key or some environment mode we need to produce two kinds of objects either http or console logger. However both of them belong to same class i.e. Logger class. Both are inherited from Logger base class as child classes.</p>
<p>In our seventh angular coding session <strong><a href="https://www.youtube.com/watch?v=9iofty6emok&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=34" target="_blank" rel="noopener noreferrer">Angular Coding Session Learn Dependency Injection | Practical | 7/8</a><em>, </em></strong>we have continued the coding to make our app configurable based on environment modes. In our next coding session we will see how to dynamically inject the console or http logger based on the configuration settings coming from the release definition. Snapshot from coding session below:</p>
<p><img class="alignnone size-full wp-image-2512" src="{{ site.baseurl }}/assets/2019/08/DI_Coding_6-7.png" alt="" width="790" height="419" /></p>
<p><iframe src="https://www.youtube.com/embed/9iofty6emok" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
