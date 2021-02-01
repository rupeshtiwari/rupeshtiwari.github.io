---
layout: post
title: Types of Providers -UseFactory Provider
date: 2019-07-01 03:39:24.000000000 -04:00
type: post

published: true
password: ''
status: publish
categories:
- Angular
tags:
- Angular
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609206753;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2390;}i:1;a:1:{s:2:"id";i:2398;}i:2;a:1:{s:2:"id";i:2586;}}}}
  _edit_last: '1'
  _thumbnail_id: '2015'
  _b2s_post_meta: a:6:{s:8:"og_title";s:39:"Types of Providers -UseFactory Provider";s:7:"og_desc";s:160:"UseFactory
    provider configures the Injector to return a value by invoking a UseFactory function.
    It is basically a function which follows factory design pat";s:8:"og_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png";s:10:"card_title";s:39:"Types
    of Providers -UseFactory Provider";s:9:"card_desc";s:160:"UseFactory provider
    configures the Injector to return a value by invoking a UseFactory function. It
    is basically a function which follows factory design pat";s:10:"card_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png";}
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
  wpmm_postgrid_views: '402'
  _qode-like: '0'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/types-of-providers-usefactory-provider/"
---
<p>UseFactory provider configures the Injector to return a value by invoking a UseFactory function. It is basically a function which follows factory design pattern, and factory design is nothing but a pattern that just encapsulates the creation part of particular project. It follows polymorphism concept with same base class or same family. In this we owns the responsibility to create required class where we need all of the dependencies to pass. That’s why we should avoid using this factory provider everywhere and use it at minimum places.</p>
<p>Generally we keep this code in main part of project like where we bootstrap our project. UseFactory provider is not that simple as all other provider types, but at the same time it’s very powerful one. We can solve many complex scenarios if we use this provider intelligently. One such example is explained in detail in our video tutorial <a href="https://www.youtube.com/watch?v=rGwsw5KsL78" target="_blank" rel="noopener noreferrer"><strong>Use Factory Provider | useFactory | Tutorial | Angular</strong></a>. It describes how we can implement requirement of using different logger services in different environments, with minimal code change by using UseFactory provider.</p>
<p>Suppose in dev we need http logger, in QA we need socket logger and in prod we need in-memory logger. So in such scenarios UseFactory provider does the needful very wisely by keeping responsibility of creating classes and passing dependencies with the developer.</p>
<p><img class="alignnone size-full wp-image-2395" src="{{ site.baseurl }}/assets/2019/07/UseFactory-Provider.png" alt="" width="790" height="419" /></p>
<p>With UseFactory we can use a factory design at runtime to decide which kind of service we want to return if it got requested by any other class in our application. Sometimes we have to add some dependencies to the factory because we need it to decide whether to return service A or service B. However, we can add the dependencies with the deps property on the configuration object.</p>
<p><iframe src="https://www.youtube.com/embed/rGwsw5KsL78" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
