---
layout: post
title: What is DI Token
date: 2019-05-27T09:01:44.000Z
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
  _thumbnail_id: "2015"
  wpmm_postgrid_views: "490"
  _b2s_post_meta:
    "a:6:{s:8:\"og_title\";s:16:\"What is DI
    Token\";s:7:\"og_desc\";s:157:\"When we think of learning Dependency
    Injection in Angular, couple of questions arises like   \tHow this DI
    concept works in Angular?  \tWhat are all the
    import\";s:8:\"og_image\";s:69:\"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png\";s:10:\"card_title\";s:16:\"What
    is DI Token\";s:9:\"card_desc\";s:157:\"When we think of learning Dependency
    Injection in Angular, couple of questions arises like   \tHow this DI
    concept works in Angular?  \tWhat are all the
    import\";s:10:\"card_image\";s:69:\"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png\";}"
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
  _qode-like: "0"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1608319525;s:7:"payload";a:0:{}}}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /what-is-di-token/
toc: true
---

<p>When we think of learning Dependency Injection in Angular, couple of questions arises like</p>
<ul>
<li>How this DI concept works in Angular?</li>
<li>What are all the important components that make it work?</li>
</ul>
<p>This video <a href="https://www.youtube.com/watch?v=_4OXnYZCh18" target="_blank" rel="noopener noreferrer"><strong>0008-12- angular: Dependency Injection (DI) Token part 1/3 </strong></a>will help you to get answers for most of your queries. It makes you understand</p>
<ul>
<li>What that core component is?</li>
<li>Why it is required?</li>
<li>What exactly it does?</li>
</ul>
<p>This component is known as DI Token (Dependency Injection Token) which is nothing but a key part in key-value pair similar to a lookup key which does lookup in lookup table.</p>
<p>E.g. If there is class A needs class B as dependency, so in order to know where that B instance exist and to get that &amp; give it to Class A, angular need some identifier that name or key to find/identify the instance of B is known DI Token.</p>
<p>DI Token should be valid at run time (JavaScript) and compile time (Typescript) both. A token can be a String, a Class or a Type. Refer to <a href="https://www.youtube.com/watch?v=_4OXnYZCh18" target="_blank" rel="noopener noreferrer"><strong>video</strong></a> to understand various token types in detail with some real time examples. Snapshot below:</p>
<p><img class="alignnone size-full wp-image-2128" src="{{ site.baseurl }}/assets/2019/05/DI-1.png" alt="" width="750" height="472" /></p>
<p>So in simple words we can define DI Token as a key to lookup for instance of the dependencies and it has to be valid at run time.</p>
