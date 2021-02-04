---
layout: post
title: Types of Providers -UseValue Provider
date: 2019-07-01T07:15:19.000Z
type: post
published: true
comments: true
social-share: true
categories:
  - Angular
tags:
  - Angular
meta:
  _wpcom_is_markdown: "1"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609838651;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2479;}i:1;a:1:{s:2:"id";i:2410;}i:2;a:1:{s:2:"id";i:2148;}}}}
  _edit_last: "1"
  _thumbnail_id: "2004"
  _b2s_post_meta:
    "a:6:{s:8:\"og_title\";s:37:\"Types of Providers -UseValue
    Provider\";s:7:\"og_desc\";s:160:\"UseValue provider configures the
    Injector\_to return a value for a token. It comes in that category of
    providers where we do not have unique thing to identify
    t\";s:8:\"og_image\";s:70:\"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI2.jpg\";s:10:\"card_title\";s:37:\"Types
    of Providers -UseValue Provider\";s:9:\"card_desc\";s:160:\"UseValue
    provider configures the Injector\_to return a value for a token. It comes in
    that category of providers where we do not have unique thing to identify
    t\";s:10:\"card_image\";s:70:\"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI2.jpg\";}"
  slide_template: default
  _wpb_vc_js_status: "false"
  _yoast_wpseo_content_score: "90"
  qode_page_background_image_fixed: "yes"
  qode_hide-featured-image: "no"
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _yoast_wpseo_primary_category: "178"
  wpmm_postgrid_views: "2795"
  _qode-like: "0"
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /types-of-providers-usevalue-provider/

---

<p>UseValue provider configures the Injector to return a value for a token. It comes in that category of providers where we do not have unique thing to identify them at run time.</p>
<p>In our video session <strong><a href="https://www.youtube.com/watch?v=BQoPlIOPCho" target="_blank" rel="noopener noreferrer">Use Value Provider | useValue | Tutorial</a><em> </em></strong>we will explain</p>
<ul>
<li>What UseValue providers are?</li>
<li>What is their significance in web programming?</li>
</ul>
<p>There are certain scenarios where we want to insert certain set of values/constants into our code base like components/modules etc. Rather than hard coding them inside the component/module, we can set them as a service. Let’s go through one real time example to understand this.</p>
<p>Suppose we prepared a web application for one of our client and want to sell same app to other customer. Here if we hardcode values/constants like logos, names, formatting as per the requirement of client1, then in order to reuse same codebase for client2 it will take lot of effort to prepare exactly same app for other client. But instead of hard coding if we keep all these values/constants in a Config file then we can deliver same app to client2 with minimal effort. This Config file can be injected into required codebase as many times as per the requirement. How to inject this Config file into our code? Answer is UseValue provider.</p>
<p>As we know there is no runtime existence for this, so to make it possible we use Injection Token as a class and use it as a DI token in provider. Snapshot from our video tutorial:</p>
<p><img class="alignnone size-full wp-image-2391" src="{{ site.baseurl }}/assets/2019/07/useVale-Provider.png" alt="" width="790" height="421" /></p>
<p><iframe src="https://www.youtube.com/embed/BQoPlIOPCho" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
