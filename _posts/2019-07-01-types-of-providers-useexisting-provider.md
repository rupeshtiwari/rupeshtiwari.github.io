---
layout: post
title: Types of Providers -UseExisting Provider
date: 2019-07-01 03:07:16.000000000 -04:00
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
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1594759232;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2508;}i:1;a:1:{s:2:"id";i:2405;}i:2;a:1:{s:2:"id";i:2381;}}}}
  _edit_last: '1'
  _thumbnail_id: '2015'
  _b2s_post_meta: a:6:{s:8:"og_title";s:40:"Types of Providers -UseExisting Provider";s:7:"og_desc";s:160:"UseExisting
    provider configures the Injector to return a value of another UseExisting token.
    Through this provider, we can use already existing instance or o";s:8:"og_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png";s:10:"card_title";s:40:"Types
    of Providers -UseExisting Provider";s:9:"card_desc";s:160:"UseExisting provider
    configures the Injector to return a value of another UseExisting token. Through
    this provider, we can use already existing instance or o";s:10:"card_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png";}
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
  wpmm_postgrid_views: '325'
  _qode-like: '0'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/types-of-providers-useexisting-provider/"
---
<p>UseExisting provider configures the Injector to return a value of another UseExisting token. Through this provider, we can use already existing instance or object.</p>
<p>Let’s understand UseExisting provider with help of real world example through <strong><a href="https://www.youtube.com/watch?v=ySXxNhHIlVw" target="_blank" rel="noopener noreferrer">Use Existing Provider | Angular | Tutorial</a><em> </em></strong>video. This tutorial explains why and where to use UseExisting provider type. Suppose we have a Logger instance which has multiple methods like log, log-debug, log-info etc., then there comes the requirement where we need only one method let say log-info method only and it’s named as mini-Logger.</p>
<p>In this scenario there are two options, one is to create mini-logger as a separate class but with this we will end up in doing lot of coding when requirement changes, second is we can use existing Logger class. When resource is common and you want to open two or more interfaces, then in such scenarios we can use UseExisting provider type. This concept is also known as Interface segregation concept.</p>
<p><img class="alignnone size-full wp-image-2387" src="{{ site.baseurl }}/assets/2019/07/UseExisting-Provider.png" alt="" width="790" height="421" /></p>
<p>So when we ask for mini-Logger, it delegates to Logger, Logger goes to instance and in this way instance comes into picture. This is applicable at each and every node and this power can be applied to component/module/directive etc. everywhere or we can say injector can be configured anywhere using this provider type.</p>
<p><iframe src="https://www.youtube.com/embed/ySXxNhHIlVw" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
