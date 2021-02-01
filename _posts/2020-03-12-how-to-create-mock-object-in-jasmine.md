---
layout: post
title: how to create mock object in jasmine
date: 2020-03-12 11:03:00.000000000 -04:00
type: post

published: true
password: ''
status: publish
categories:
- jasmine
- JavaScriipt
- Test Driven Development (TDD)
- Unit Testing
tags:
- rupesh tiwari
- rupeshtiwari
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1611832742;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:295;}i:1;a:1:{s:2:"id";i:118;}i:2;a:1:{s:2:"id";i:1163;}}}}
  _edit_last: '1'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _b2s_post_meta: a:6:{s:8:"og_title";s:36:"how to create mock object in jasmine";s:7:"og_desc";s:245:"Jasmine
    createSpyObj allows you to create an object only with methods. However suppose
    you object has some properties as well. Then how will you create a complete mocked
    object in jasmine such that both of it's properties and methods are spied ?";s:8:"og_image";s:0:"";s:10:"card_title";s:36:"how
    to create mock object in jasmine";s:9:"card_desc";s:245:"Jasmine createSpyObj
    allows you to create an object only with methods. However suppose you object has
    some properties as well. Then how will you create a complete mocked object in
    jasmine such that both of it's properties and methods are spied ?";s:10:"card_image";s:0:"";}
  slide_template: default
  _wpb_vc_js_status: 'false'
  _inpost_head_script: a:1:{s:19:"synth_header_script";s:57:"<script src="https://gumroad.com/js/gumroad.js"></script>";}
  _yoast_wpseo_content_score: '90'
  wpmm_postgrid_views: '227'
  _qode-like: '0'
  _yoast_wpseo_primary_category: '289'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/how-to-create-mock-object-in-jasmine/"
description: 'Jasmine createSpyObj allows you to create an object only with methods. However
  suppose you object has some properties as well. Then how will you create a complete
  mocked object in jasmine such that both of it''s properties and methods are spied
  ? '
---
<p><!-- wp:paragraph --></p>
<p>While writing test in jasmine you will encounter a situation where you want to create a mock object &amp; also you want to spy it's property. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Jasmine <code>createSpyObj</code> allows you to create an object only with methods. However suppose you object has some properties as well. Then how will you create a complete mocked object in jasmine such that both of it's properties and methods are spied ? </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:block {"ref":3197} /--></p>
<p><!-- wp:paragraph --></p>
<p>Lets see below example You want to create a complete mock object of Person. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:enlighter/codeblock {"language":"js"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">function Person(name) {
  this.name = name;
  greet() {
    return `Hello ${this.name}`;
  }
}</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:paragraph --></p>
<p>In Jasmine there is nothing readymade for this. However here is the trick. First create an person object and copy all of its methods by using <code>jasmin.createSpyObj</code> next one by one you can create spy on it's property using <code>createSpy</code> method. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:enlighter/codeblock {"language":"js"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">const person = {
  ...jasmine.createSpyObj('person', [
      'greet',
    ]),
  name :jasmine.createSpy();
}</pre>
<p><!-- /wp:enlighter/codeblock --></p>
