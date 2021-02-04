---
layout: post
title: What is Dependency Injection?
date: 2019-04-25T11:30:23.000Z
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
  _edit_last: "1"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1611285054;s:7:"payload";a:0:{}}}
  _thumbnail_id: "2004"
  wpmm_postgrid_views: "533"
  _b2s_post_meta: >-
    a:6:{s:8:"og_title";s:29:"What is Dependency
    Injection?";s:7:"og_desc";s:160:"Wikipedia Definition: Dependency injection
    is a technique whereby one object (or static method) supplies the
    dependencies of another object. A dependency is an
    ";s:8:"og_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI2.jpg";s:10:"card_title";s:29:"What
    is Dependency Injection?";s:9:"card_desc";s:160:"Wikipedia Definition:
    Dependency injection is a technique whereby one object (or static method)
    supplies the dependencies of another object. A dependency is an
    ";s:10:"card_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI2.jpg";}
  slide_template: default
  _wpb_vc_js_status: "false"
  _yoast_wpseo_content_score: "60"
  qode_page_background_image_fixed: "yes"
  qode_hide-featured-image: "no"
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _yoast_wpseo_primary_category: "178"
  _qode-like: "0"
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /what-is-dependency-injection/
toc: true
---

<p>Wikipedia Definition: Dependency injection is a technique whereby one object (or static method) supplies the dependencies of another object. A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it. The service is made part of the client's state. Passing the service to the client, rather than allowing a client to build or find the service, is the fundamental requirement of the pattern. Now let’s decode this definition with help of real world example:<br />
Let’s say we have a ‘Room’ class which contains various objects such as TV – LG brand, AC- Voltas etc. Here the ‘Room’ class is responsible for creating all the dependency objects. Now, what if we decide to change TV brand from LG to Samsung in future? If we do not use DI then we need to recreate the Room class with object having a new Samsung dependency. But by using dependency injection (DI), we can change the TV brand on the fly because dependencies can be injected at runtime.</p>
<p><img class="alignnone size-full wp-image-2008" src="{{ site.baseurl }}/assets/2019/04/DI.png" alt="" width="2000" height="598" /><br />
DI concept behaves as an intermediary in our code who does all the work of creating the preferred objects and providing it to the class. It makes our class independent from creating the objects.<br />
To get more insight into it, follow our Video tutorial <strong><a href="https://www.youtube.com/watch?v=Uo4TTIVWB_I" target="_blank" rel="noopener noreferrer">0008-2- What is Dependency Injection?</a></strong></p>
<p><iframe src="https://www.youtube.com/embed/Uo4TTIVWB_I" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
