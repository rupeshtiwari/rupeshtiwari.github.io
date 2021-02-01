---
layout: post
title: 'Methods to change Context – CALL and APPLY: Essential JavaScript Concepts'
date: 2019-09-09 06:00:10.000000000 -04:00
type: post

published: true
password: ''
status: publish
categories:
- JavaScript
tags:
- fullstackmaster
- JavaScript
meta:
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1611062595;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2555;}i:1;a:1:{s:2:"id";i:2586;}i:2;a:1:{s:2:"id";i:2595;}}}}
  _edit_last: '1'
  _wpcom_is_markdown: '1'
  _thumbnail_id: '2584'
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
  _yoast_wpseo_primary_category: '195'
  wpmm_postgrid_views: '362'
  _qode-like: '0'
  _b2s_post_meta: 'a:6:{s:8:"og_title";s:125:"Methods to change Context – CALL and
    APPLY: - Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack
    Training";s:7:"og_desc";s:147:"In our previous article JavaScript Concepts: What
    Is this Keyword | 0004-08 We read about ‘This’ concept of JavaScript which refers
    to calling";s:8:"og_image";s:81:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/09/RUPESH-51-javascript.png";s:10:"card_title";s:125:"Methods
    to change Context – CALL and APPLY: - Rupesh Tiwari - Author Developer & Trainer
    | Professional Full Stack Training";s:9:"card_desc";s:147:"In our previous article
    JavaScript Concepts: What Is this Keyword | 0004-08 We read about ‘This’ concept
    of JavaScript which refers to calling";s:10:"card_image";s:81:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/09/RUPESH-51-javascript.png";}'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/methods-to-change-context-call-and-apply-essential-javascript-concepts/"
---
<p>In our previous article <a href="https://www.youtube.com/watch?v=3JFm7DS6SG8" target="_blank" rel="noopener noreferrer"><strong>JavaScript Concepts: What Is this Keyword | 0004-08</strong></a> We read about ‘This’ concept of JavaScript which refers to calling context of the function. Now we will see, what are the available possible ways to call the context we have.</p>
<p>In our video tutorial <strong><a href="https://www.youtube.com/watch?v=TZ8hrRZs9hM" target="_blank" rel="noopener noreferrer">JavaScript Concepts: what Is this Keyword | part 2 | 0004-09</a><em> </em></strong>We have explained two different ways of calling context, one is CALL and other one is APPLY. One very common thing that strikes our mind while writing JavaScript is when to use Call and when to use Apply. This question is very nicely explained in our video session with some practical examples.</p>
<p>Both methods Call() and Apply() serve the exact same purpose. The only difference between how they work is that Call() expects all parameters to be passed in individually, whereas Apply() expects an array of all of our parameters. Apply lets you invoke the function with arguments as an array; Call requires the parameters be listed explicitly. A useful mnemonic is <strong><em>"</em>A<em> for </em>a<em>rray and </em>C<em> for </em>c<em>omma."</em></strong></p>
<p><strong>Pseudo syntax:</strong></p>
<p>theFunction.apply(valueForThis, arrayOfArgs)</p>
<p>theFunction.call(valueForThis, arg1, arg2, ...)</p>
<p><img class="alignnone size-full wp-image-2583" src="{{ site.baseurl }}/assets/2019/09/JS-This1.png" alt="" width="790" height="350" /></p>
<p><iframe src="https://www.youtube.com/embed/TZ8hrRZs9hM" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
