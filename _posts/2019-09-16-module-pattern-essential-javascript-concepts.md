---
layout: post
title: 'Module Pattern: Essential JavaScript Concepts'
date: 2019-09-16 06:00:12.000000000 -04:00
type: post

published: true
comments: true
social-share: true
categories:
- JavaScript
tags:
- fullstackmaster
- JavaScript
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1601828245;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2595;}i:1;a:1:{s:2:"id";i:2604;}i:2;a:1:{s:2:"id";i:361;}}}}
  _edit_last: '1'
  _thumbnail_id: '2588'
  slide_template: default
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '60'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _yoast_wpseo_primary_category: '195'
  wpmm_postgrid_views: '442'
  _qode-like: '0'
  _b2s_post_meta: 'a:6:{s:8:"og_title";s:125:"Module Pattern: Essential JavaScript
    Concepts - Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack
    Training";s:7:"og_desc";s:137:"The Module Pattern is one of the most common design
    patterns used in JavaScript. It is easy to use and creates encapsulation of our
    code.";s:8:"og_image";s:81:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/09/RUPESH-52-javascript.png";s:10:"card_title";s:125:"Module
    Pattern: Essential JavaScript Concepts - Rupesh Tiwari - Author Developer & Trainer
    | Professional Full Stack Training";s:9:"card_desc";s:137:"The Module Pattern
    is one of the most common design patterns used in JavaScript. It is easy to use
    and creates encapsulation of our code.";s:10:"card_image";s:81:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/09/RUPESH-52-javascript.png";}'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/module-pattern-essential-javascript-concepts/"
---
<p>The Module Pattern is one of the most common design patterns used in JavaScript. It is easy to use and creates encapsulation of our code. Before we deep dive into this, first let’s see</p>
<ul>
<li>Where do we need this module pattern?</li>
<li>What is its significance?</li>
</ul>
<p>In singleton design pattern, let’s say we have requirement like we have very less sources and those sources we do not want to keep creating multiple times. We just want to have only one instance throughout the app, in those scenarios we do singleton design pattern on server side. We make sure whenever somebody ask for instance it has to call some method in the object.</p>
<p>For example on the server side if we have class called logger and whoever wants instance of this logger then they have to call get instance method in this class and it has to be a static method. This is exactly what we want in JavaScript and in this video tutorial <a href="https://www.youtube.com/watch?v=JBqr_jnwnrA" target="_blank" rel="noopener noreferrer"><strong>JavaScript Concepts- Module Pattern | 0004-11</strong></a> we will see how we achieve it in JS. When we do not have static concept and we cannot create a static function. This is where the concept of Module pattern comes.</p>
<p>When we need a single instance of an object throughout our app we do not need to create a class and then instantiate it, instead we can use Module pattern. It has many benefits over other pattern types like regular JS class and prototype Pattern. In our video tutorial we will see how we can create a class with private function. This video will answer most of the important question like</p>
<ul>
<li>Why module pattern is helpful for creating singleton objects in JavaScript?</li>
<li>Can we write static function in a class?</li>
<li>Can we get private function in JavaScript or not?</li>
</ul>
<p>Please visit our video tutorial to get your answers, snapshot of session below:</p>
<p><img class="alignnone size-full wp-image-2587" src="{{ site.baseurl }}/assets/2019/09/JS-Module.png" alt="" width="853" height="476" /></p>
<p><iframe src="https://www.youtube.com/embed/JBqr_jnwnrA" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
