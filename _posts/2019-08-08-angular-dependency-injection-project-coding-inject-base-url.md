---
layout: post
title: Angular Dependency Injection Project coding – Inject Base URL
date: 2019-08-08 06:00:32.000000000 -04:00
type: post
parent_id: '0'
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
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1610111213;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2511;}i:1;a:1:{s:2:"id";i:2514;}i:2;a:1:{s:2:"id";i:2508;}}}}
  _edit_last: '1'
  _thumbnail_id: '2493'
  slide_template: default
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '60'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _yoast_wpseo_primary_category: '178'
  wpmm_postgrid_views: '434'
  _qode-like: '0'
  _b2s_post_meta: a:6:{s:8:"og_title";s:127:"Angular Dependency Injection Project
    coding – - Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack
    Training";s:7:"og_desc";s:145:"In our fourth angular coding session Angular Coding
    Session Learn Dependency Injection | Practical | 4/8, we will see how to Inject
    Base URL from";s:8:"og_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-91.png";s:10:"card_title";s:127:"Angular
    Dependency Injection Project coding – - Rupesh Tiwari - Author Developer & Trainer
    | Professional Full Stack Training";s:9:"card_desc";s:145:"In our fourth angular
    coding session Angular Coding Session Learn Dependency Injection | Practical |
    4/8, we will see how to Inject Base URL from";s:10:"card_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-91.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/angular-dependency-injection-project-coding-inject-base-url/"
---
<p>In our fourth angular coding session <strong><a href="https://www.youtube.com/watch?v=Ww5gngAHdpU&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=31" target="_blank" rel="noopener noreferrer">Angular Coding Session Learn Dependency Injection | Practical | 4/8</a><em>, </em></strong>we will see how to Inject Base URL from module in our project. Its requirement says that we need to change base URL based on the environment i.e. for dev environment it should be different, for QA it should be different.</p>
<p>In Angular, we have Class name as DI token for any Class or instance. But for string, number angular has given a new class named as ‘Injection Token’ which we can use as DI token. In this demo we will see how injecting Base API URL from module will make our code more flexible and ready to accept changes easily.</p>
<p>So by the end of our fourth coding session we have learnt how to make our code future proof in order to accommodate further changes. If in future our requirement changes and we are asked to use some different logger let’s say http logger in place of console logger, we can simply make change at one place and it will work.  By injecting Base API URL from module we can change base URL based on the environment with just minimal changes in code.</p>
<p>In demo session it is explained and coding is done for just one component, but in actual coding for your project you need to do for all of your components wherever required. Screenshot from our demo session:</p>
<p><img class="alignnone size-full wp-image-2506" src="{{ site.baseurl }}/assets/2019/08/DI_Coding_4.png" alt="" width="790" height="419" /></p>
<p><iframe src="https://www.youtube.com/embed/Ww5gngAHdpU" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
