---
layout: post
title: What are providers & its various types in Angular?
date: 2019-06-27T06:29:54.000Z
type: post
published: true
comments: true
social-share: true
categories:
  - Dependency Injection
tags:
  - Angular
  - Dependency Injection
meta:
  _wpcom_is_markdown: "1"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1594765690;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2140;}i:1;a:1:{s:2:"id";i:2148;}i:2;a:1:{s:2:"id";i:2394;}}}}
  _edit_last: "1"
  _thumbnail_id: "2015"
  _b2s_post_meta: >-
    a:6:{s:8:"og_title";s:54:"What are providers &amp; its various types in
    Angular?";s:7:"og_desc";s:160:"A provider is an instruction to the DI system
    on how to obtain a value for a dependency. Most of the time, these
    dependencies are services that you create and
    p";s:8:"og_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png";s:10:"card_title";s:50:"What
    are providers & its various types in Angular?";s:9:"card_desc";s:160:"A
    provider is an instruction to the DI system on how to obtain a value for a
    dependency. Most of the time, these dependencies are services that you
    create and
    p";s:10:"card_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png";}
  slide_template: default
  _wpb_vc_js_status: "false"
  _yoast_wpseo_content_score: "30"
  qode_page_background_image_fixed: "yes"
  qode_hide-featured-image: "no"
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _yoast_wpseo_primary_category: "187"
  wpmm_postgrid_views: "378"
  _qode-like: "0"
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /what-are-providers-its-various-types-in-angular/

---

<p>A provider is an instruction to the DI system on how to obtain a value for a dependency. Most of the time, these dependencies are services that you create and provide.<br />
Provider is the one who serves an Injector and provides dependencies for each DI-token. We can configure injectors with providers and a provider links a token to a dependency. The real configuration for a provider is an object which describes a token and configuration for how to create the associated dependency. Basically it gives the how part of dependency, means how that dependency is created.<br />
Based on different-different requirements, we create various types of providers. They are classified as:</p>
<p><img class="alignnone size-full wp-image-2358" src="{{ site.baseurl }}/assets/2019/06/ProviderTypes.png" alt="" width="783" height="194" /></p>
<p>Visit our tutorial video <a href="https://www.youtube.com/watch?v=p-11o8INGOA" target="_blank" rel="noopener noreferrer"><strong>0008-20- angular: types of providers and type provider </strong></a>to get more insight on this topic and find answers to questions like what are Providers and how they works in Angular.</p>
<p><strong>Type Provider: </strong>It configures the Injector to return an instance of Type when `Type' is used as the token. Whenever component asks for class name, Type provider provides dependency for that corresponding class. In <a href="https://www.youtube.com/watch?v=p-11o8INGOA" target="_blank" rel="noopener noreferrer"><strong>video</strong></a>, it’s nicely explained with help of Logger class, snapshot below:</p>
<p><img class="alignnone size-full wp-image-2355" src="{{ site.baseurl }}/assets/2019/06/ProviderTypes-1.png" alt="" width="790" height="350" /></p>
<p><iframe src="https://www.youtube.com/embed/p-11o8INGOA" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
