---
layout: post
title: What is Injection Token and Where to use it?
date: 2019-05-27T09:12:00.000Z
type: post
published: true
comments: true
social-share: true
categories:
  - Angular
  - Dependency Injection
tags:
  - Dependency Injection
meta:
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609848023;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2132;}i:1;a:1:{s:2:"id";i:2505;}i:2;a:1:{s:2:"id";i:295;}}}}
  wpmm_postgrid_views: "398"
  _thumbnail_id: "2015"
  _edit_last: "1"
  _b2s_post_meta: >-
    a:6:{s:8:"og_title";s:44:"What is Injection Token and Where to use
    it?";s:7:"og_desc";s:160:"We cannot simply ignore the shortcomings like
    Interface, Array (bunch of objects) cannot be used as DI Token in angular.
    There can be possibility where we need
    ";s:8:"og_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png";s:10:"card_title";s:44:"What
    is Injection Token and Where to use it?";s:9:"card_desc";s:160:"We cannot
    simply ignore the shortcomings like Interface, Array (bunch of objects)
    cannot be used as DI Token in angular. There can be possibility where we
    need
    ";s:10:"card_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png";}
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
permalink: /what-is-injection-token-and-where-to-use-it/
toc: true
---

<p>We cannot simply ignore the shortcomings like Interface, Array (bunch of objects) cannot be used as DI Token in angular. There can be possibility where we need to inject something which is not available at runtime in angular like Interface, callable type or Array.</p>
<ul>
<li>To solve this problem Angular introduced another type of DI Token known as Injection Token as a class. We can give unique name to this class as per our requirement.</li>
<li>We can use an Injection Token whenever the type we are injecting is not reified (does not have a runtime representation) such as when injecting an interface, callable type, array or parameterized type.</li>
</ul>
<p>Let’s understand this with help of an example:</p>
<p>Suppose, I want to inject a configuration into my project and for that configuration I have created an interface. Now I want to create dependency injection token for that interface. Here we can create Injection token to fulfill our requirement.</p>
<p>For more details, please follow our video <strong><a href="https://www.youtube.com/watch?v=F4JcAtqUQ2o" target="_blank" rel="noopener noreferrer">0008-14- angular: Dependency Injection (DI) Token 3/3</a></strong> to get the complete picture of Injection token concept. It nicely explains where to use Injection token and what standards need to be followed while using it.</p>
