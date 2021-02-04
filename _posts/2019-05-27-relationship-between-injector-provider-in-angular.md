---
layout: post
title: Relationship between Injector & Provider in Angular
date: 2019-05-27T09:26:03.000Z
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
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1601588648;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2353;}i:1;a:1:{s:2:"id";i:2148;}i:2;a:1:{s:2:"id";i:2514;}}}}
  _edit_last: "1"
  _thumbnail_id: "2004"
  wpmm_postgrid_views: "373"
  _b2s_post_meta:
    "a:6:{s:8:\"og_title\";s:51:\"Relationship between Injector & Provider in
    Angular\";s:7:\"og_desc\";s:160:\"A dependency\_provider\_configures an
    injector with a\_DI token, which that injector uses to provide the concrete,
    runtime version of a dependency value. The
    in\";s:8:\"og_image\";s:70:\"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI2.jpg\";s:10:\"card_title\";s:51:\"Relationship
    between Injector & Provider in Angular\";s:9:\"card_desc\";s:160:\"A
    dependency\_provider\_configures an injector with a\_DI token, which that
    injector uses to provide the concrete, runtime version of a dependency
    value. The
    in\";s:10:\"card_image\";s:70:\"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI2.jpg\";}"
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
  _publicize_twitter_user: "@rupeshtiwari_co"
  _wpcom_is_markdown: "1"
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /relationship-between-injector-provider-in-angular/
toc: true
---

<p>A Dependency Provider configures an Injector with a DI Token, which that injector uses to provide the concrete, runtime version of a dependency value. The injector relies on the provider configuration to create instances of the dependencies that it injects into components, directives, pipes, and other services.</p>
<p>Let’s try to understand this relationship with help of real world example. Suppose a customer goes to walmart to buy a computer table (C-Table), here Customer is nothing but a Component and Walmart where customer is searching for C-Table (DI-Token) is an Injector. Now if Computer Table is not available at walmart then it will ask manufacturing industry (Provider) to provide that Computer table.</p>
<p>This example is more precisely explained in video <strong><a href="https://www.youtube.com/watch?v=YYlWE30ydz4" target="_blank" rel="noopener noreferrer">0008-15- angular: Injector and Provider Relationship 1/4. </a></strong>Snapshot below:</p>
<p><img class="wp-image-2141 alignnone" src="{{ site.baseurl }}/assets/2019/05/IP-1.png" alt="" width="564" height="353" /></p>
<p>In simple words, Injector has key-value pair and If value is not available for any key (DI token) in injector then it will ask provider to provide the value for that key. So basically provider knows how to create or get that value like Computer Table in above example, here Walmart is Injector and warehouse is Provider.</p>
<p>An Injector &amp; provider has one-to-one relationship, Injector uses the provider. Whenever any component or module asks for any service then an injector associated with that particular component or module will go to provider to get the required service.</p>
