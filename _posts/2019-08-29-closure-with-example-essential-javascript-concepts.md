---
layout: post
title: Closure With Example - Essential JavaScript Concepts
date: 2019-08-29T10:00:48.000Z
type: post
published: true
comments: true
social-share: true
categories:
  - JavaScript
tags:
  - fullstackmaster
  - JavaScript
  - rupeshtiwari
meta:
  _wpcom_is_markdown: "1"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609241348;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2537;}i:1;a:1:{s:2:"id";i:674;}i:2;a:1:{s:2:"id";i:2542;}}}}
  _edit_last: "1"
  _thumbnail_id: "2547"
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
  _yoast_wpseo_primary_category: "195"
  wpmm_postgrid_views: "407"
  _qode-like: "0"
  _b2s_post_meta: >-
    a:6:{s:8:"og_title";s:52:"Closure With Example - Essential JavaScript
    Concepts";s:7:"og_desc";s:160:"Closure is another JavaScript concept which
    comes in line with Scope concept. It basically comes into picture when we
    have nested functions. Whenever we have
    ne";s:8:"og_image";s:81:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/08/RUPESH-45-javascript.png";s:10:"card_title";s:52:"Closure
    With Example - Essential JavaScript Concepts";s:9:"card_desc";s:160:"Closure
    is another JavaScript concept which comes in line with Scope concept. It
    basically comes into picture when we have nested functions. Whenever we have
    ne";s:10:"card_image";s:81:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/08/RUPESH-45-javascript.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /closure-with-example-essential-javascript-concepts/

---

<p>Closure is another JavaScript concept which comes in line with Scope concept. It basically comes into picture when we have nested functions. Whenever we have nested functions and the inner functions has access to outer functions data like variables and arguments then this is known as Closure scope.</p>
<p>We need not to get confused with other scope types. Just consider we have only two scopes Global and function. So Closure scope is nothing but children of function scope however in this we have additional access to parent function scope as well.</p>
<p>In our video tutorial <strong><a href="https://www.youtube.com/watch?v=q2f5vbwz6_4&amp;list=PLZed_adPqIJoGpa6R2QdJy9RnqmOIy1Qd&amp;index=4" target="_blank" rel="noopener noreferrer">JavaScript Concepts: Closure | 0004-04</a><em>, </em></strong>closure concept is nicely explained with Christmas gift box example. So we can say once we have understanding of function scope, closure scope is nothing but sharing your own scopes. It’s like smaller function is having some scope and also it has access to outer function scopes.</p>
<p>In our subsequent video <strong><a href="https://www.youtube.com/watch?v=cmCo-XUN2UM&amp;list=PLZed_adPqIJoGpa6R2QdJy9RnqmOIy1Qd&amp;index=5" target="_blank" rel="noopener noreferrer">JavaScript Concepts: Closure Example | 0004-05</a><em>, </em></strong>we have explained couple of practical examples to understand Closure concept deeply. Please check out our GitHub repository here <a href="https://github.com/rupeshtiwari/javascript-concepts" target="_blank" rel="noopener noreferrer"><strong>https://github.com/rupeshtiwari/javascript-concepts</strong></a> created to explain all important Java concepts with examples. Snippet from GitHub code base is shown below, you can check console log for output of these examples. Ultimately we can summarize Closure concept as Inner function scope that has three accesses:</p>
<ul>
<li>Access to its local scope variables</li>
<li>Access to global scope variables</li>
<li>Access to its outer function variables and arguments.</li>
</ul>
<p><img class="alignnone size-full wp-image-2546" src="{{ site.baseurl }}/assets/2019/08/JS-Closure.png" alt="" width="610" height="546" /></p>
<p><iframe src="https://www.youtube.com/embed/q2f5vbwz6_4" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
