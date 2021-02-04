---
layout: post
title: Can we inject an object or dependency through an Interface in Angular?
date: 2019-05-27T09:08:30.000Z
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
  _edit_last: "1"
  _thumbnail_id: "2004"
  wpmm_postgrid_views: "467"
  _b2s_post_meta: >-
    a:6:{s:8:"og_title";s:70:"Can we inject an object or dependency through an
    Interface in Angular?";s:7:"og_desc";s:160:"No, we cannot do dependency
    injection through Interface in Typescript Angular; it can be done in C# or
    JavaScript. This is very important concept need to know
    f";s:8:"og_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI2.jpg";s:10:"card_title";s:70:"Can
    we inject an object or dependency through an Interface in
    Angular?";s:9:"card_desc";s:160:"No, we cannot do dependency injection
    through Interface in Typescript Angular; it can be done in C# or JavaScript.
    This is very important concept need to know
    f";s:10:"card_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI2.jpg";}
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
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1601948875;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2136;}i:1;a:1:{s:2:"id";i:2505;}i:2;a:1:{s:2:"id";i:2353;}}}}
  _publicize_twitter_user: "@rupeshtiwari_co"
  _wpcom_is_markdown: "1"
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /can-we-inject-an-object-or-dependency-through-an-interface-in-angular/

---

<p>No, we cannot do dependency injection through Interface in Typescript Angular; it can be done in C# or Java. This is very important concept need to know for a single full stack developer as they are doing server side coding &amp; JavaScript coding both. That is the reason interface use is generally avoided in front end or typescript framework, use classes instead for making it DI (Dependency Injection) capable.</p>
<p><strong><a href="https://www.youtube.com/watch?v=c9LxdfuMhNo" target="_blank" rel="noopener noreferrer">0008-13- angular: Dependency Injection (DI) Token part 2</a></strong> neatly explains</p>
<ul>
<li>Why Interface cannot be used as DI Token.</li>
<li>It describes How Class can be used as a DI token and Interface cannot.</li>
</ul>
<p>In angular, class name can be used as DI Token because it finally converts class name into function and function is uniquely defined that can be used to find out the dependency. But for Interface there is no existence at run time, once you compile your typescript into java script there is no existence of interface. That’s why we cannot use Interface as DI token in Typescript Angular. Snapshot of our video session below:</p>
<p><img class="alignnone size-full wp-image-2133" src="{{ site.baseurl }}/assets/2019/05/DI-2.png" alt="" width="750" height="473" /></p>
