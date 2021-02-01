---
layout: post
title: Angular Dependency Injection Project coding – http Logger
date: 2019-08-05 06:00:03.000000000 -04:00
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
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1611615618;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2511;}i:1;a:1:{s:2:"id";i:2508;}i:2;a:1:{s:2:"id";i:2514;}}}}
  _edit_last: '1'
  _thumbnail_id: '2492'
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
  wpmm_postgrid_views: '397'
  _qode-like: '0'
  _b2s_post_meta: a:6:{s:8:"og_title";s:127:"Angular Dependency Injection Project
    coding – - Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack
    Training";s:7:"og_desc";s:142:"In our third angular coding session Angular Coding
    Session Learn DependencyInjection | Practical | 3/8 we will see how to use http
    logger as a";s:8:"og_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-90.png";s:10:"card_title";s:127:"Angular
    Dependency Injection Project coding – - Rupesh Tiwari - Author Developer & Trainer
    | Professional Full Stack Training";s:9:"card_desc";s:142:"In our third angular
    coding session Angular Coding Session Learn DependencyInjection | Practical |
    3/8 we will see how to use http logger as a";s:10:"card_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-90.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/angular-dependency-injection-project-coding-http-logger/"
---
<p>In our third angular coding session <a href="https://www.youtube.com/watch?v=QzgnkJmIhyU&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=30" target="_blank" rel="noopener noreferrer"><strong>Angular Coding Session Learn Dependency Injection | Practical | 3/8 </strong></a>we will see how to use http logger as a service in our project. Here we will learn very interesting principle of Object Oriented Programming.</p>
<p>Till now we have done coding for Hierarchical DI, Console Logger as a service in our project. Now suppose our requirement changed and we are asked to use http logger instead of Console logger. While doing impact analysis for this change we came to know a very big designing flaw that we introduced while coding our application. I.e. we should not have specifically used Console logger, rather than we should have used abstract of it named as logger that can behave as any type like console, http, and web-socket logger during implementation time. So here we should use open-close concept in our designing i.e. application should be open for extension and closed for changes. It is nothing but polymorphism principle of OOPs that gives us this open-closed concept in designing. As per this principle, we should have a base class and from this base class we will derive our specialized classes.</p>
<p>For example here we can create base class Logger as an abstraction and then it could be any logger like console, http etc. during implementation time. Hence whenever we want to protect our code against new type, we will use polymorphism principle. We will create base class as an abstract and will use this base class everywhere.</p>
<p>All this is explained in detail with coding in our demo session, snapshot below:</p>
<p><img class="alignnone size-full wp-image-2503" src="{{ site.baseurl }}/assets/2019/08/DI_Coding_3.png" alt="" width="790" height="415" /></p>
<p><iframe src="https://www.youtube.com/embed/QzgnkJmIhyU" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
