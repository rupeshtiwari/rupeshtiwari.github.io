---
layout: post
title: Mini-Logger – Angular Dependency Injection Project coding
date: 2019-08-12 06:00:28.000000000 -04:00
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
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609993501;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2502;}i:1;a:1:{s:2:"id";i:2511;}i:2;a:1:{s:2:"id";i:2514;}}}}
  _edit_last: '1'
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
  _yoast_wpseo_primary_category: '187'
  wpmm_postgrid_views: '408'
  _qode-like: '0'
  _thumbnail_id: '2494'
  _b2s_post_meta: a:6:{s:8:"og_title";s:59:"Mini-Logger – Angular Dependency Injection
    Project coding";s:7:"og_desc";s:160:"In our fifth angular coding session Angular
    Coding Session Learn Dependency Injection | Practical | 5/8 we will see how to
    create mini-logger by using existing ";s:8:"og_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-92.png";s:10:"card_title";s:59:"Mini-Logger
    – Angular Dependency Injection Project coding";s:9:"card_desc";s:160:"In our fifth
    angular coding session Angular Coding Session Learn Dependency Injection | Practical
    | 5/8 we will see how to create mini-logger by using existing ";s:10:"card_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-92.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/angular-dependency-injection-project-coding-mini-logger/"
---
<p>In our fifth angular coding session <a href="https://www.youtube.com/watch?v=SIAuVR3u3m8&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=32" target="_blank" rel="noopener noreferrer"><strong>Angular Coding Session Learn Dependency Injection | Practical | 5/8 </strong></a>we will see how to create mini-logger by using existing logger in our project. It means let’s say our app is using http logger then mini-logger should use same http logger. It should not create new instance of logger. In case if our app is using socket logger then mini-logger should not create new socket connection, it should use the existing one.</p>
<p>Mini-logger should have just one method called as log{messagestring}. Like say for http logger and console logger we have three methods loginfo, logverbose and log but mini-logger we have only one method which acts like an interface to enter into http API or socket and log it. Final resource is Http or socket whichever we are using in app. Reason for making this requirement so concrete is to make us understand why we should use UseExisting provider type here.</p>
<p>Next we should try to make our code more configurable rather than making code changes every time we switch the environments. Let’s learn that coding in our next demo session. Screenshot from our fifth coding demo session is captured below:</p>
<p><img class="alignnone size-full wp-image-2509" src="{{ site.baseurl }}/assets/2019/08/DI_Coding_5.png" alt="" width="790" height="419" /></p>
<p><iframe src="https://www.youtube.com/embed/SIAuVR3u3m8" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
