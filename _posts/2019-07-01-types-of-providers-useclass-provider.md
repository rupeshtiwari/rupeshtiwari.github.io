---
layout: post
title: Types of Providers -UseClass Provider
date: 2019-07-01T06:56:48.000Z
type: post
published: true
comments: true
social-share: true
categories:
  - Angular
tags:
  - Angular
meta:
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1610986852;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2386;}i:1;a:1:{s:2:"id";i:2394;}i:2;a:1:{s:2:"id";i:2502;}}}}
  _wpcom_is_markdown: "1"
  _edit_last: "1"
  _thumbnail_id: "2004"
  _b2s_post_meta:
    "a:6:{s:8:\"og_title\";s:37:\"Types of Providers -UseClass
    Provider\";s:7:\"og_desc\";s:160:\"Class Provider configures the
    Injector\_to return an instance of\_useClass\_for a token. It is similar to
    type provider but it has different way of providing
    co\";s:8:\"og_image\";s:70:\"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI2.jpg\";s:10:\"card_title\";s:37:\"Types
    of Providers -UseClass Provider\";s:9:\"card_desc\";s:160:\"Class Provider
    configures the Injector\_to return an instance of\_useClass\_for a token. It
    is similar to type provider but it has different way of providing
    co\";s:10:\"card_image\";s:70:\"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI2.jpg\";}"
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
  wpmm_postgrid_views: "297"
  _qode-like: "0"
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /types-of-providers-useclass-provider/

---

<p>Class Provider configures the Injector to return an instance of useClass for a token. It is similar to type provider but it has different way of providing corresponding dependency.</p>
<p>There is a typical example to explain useClass provider. Let’s understand this with logger example. We have a function named Log; it takes a message and does in-memory logging i.e. console.log. Suppose this is implemented in thousand components in this way. Now if requirement changes and we are asked to use http logger in place of in-memory logger. If we go and change individual components then we may end up in breaking software programming basic engineering principle that says, when we are changing something we should not change many things. So here we will use polymorphism concept that says once you have class defined and most of the components are using that class, and then tomorrow if you just want to change the behavior of that object then as per object oriented principle, create a new class rather than modifying that class. Means we can create separate class and inherit it from base class. Now we will be having two classes and we can switch anytime between them as per requirement. Tomorrow they can ask us to change it to another thing may be file log.</p>
<p>This can be achieved through useClass provider as it enables us to modify code as per changing requirements. Our tutorial video <strong><a href="https://www.youtube.com/watch?v=VB3HAIv5BvQ" target="_blank" rel="noopener noreferrer">Use Class Provider | Angular</a><em> </em></strong>explains how without changing any component, by just adding a new class with useClass provider we resolved the issue in this example.</p>
<p><img class="alignnone size-full wp-image-2382" src="{{ site.baseurl }}/assets/2019/07/Useclass_Provider.png" alt="" width="790" height="420" /></p>
<p><iframe src="https://www.youtube.com/embed/VB3HAIv5BvQ" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
