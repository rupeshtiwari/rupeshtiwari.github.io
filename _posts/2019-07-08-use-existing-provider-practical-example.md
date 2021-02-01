---
layout: post
title: Use Existing provider practical example
date: 2019-07-08 10:26:39.000000000 -04:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Angular
- Dependency Injection
tags:
- Angular
- Dependency Injection
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609848088;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2386;}i:1;a:1:{s:2:"id";i:2410;}i:2;a:1:{s:2:"id";i:2508;}}}}
  _edit_last: '1'
  _thumbnail_id: '2407'
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
  _yoast_wpseo_primary_category: '178'
  wpmm_postgrid_views: '323'
  _qode-like: '0'
  _b2s_post_meta: a:6:{s:8:"og_title";s:119:"Use Existing provider practical example
    - Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack Training";s:7:"og_desc";s:106:"As
    we know UseExisting provider configures the Injector to return a value of another UseExisting token.";s:8:"og_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-85.png";s:10:"card_title";s:39:"Use
    Existing provider practical example";s:9:"card_desc";s:160:"As we know UseExisting
    provider configures the Injector to return a value of another UseExisting token.
    Through this provider, we can use already existing in";s:10:"card_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-85.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/use-existing-provider-practical-example/"
---
<p>As we know UseExisting provider configures the Injector to return a value of another UseExisting token. Through this provider, we can use already existing instance or object. Let’s discuss one practical example of UseExisting provider which is present in angular itself.</p>
<p>Inside the angular code base you will see library called as browser, inside that they have some implementation for sanitization which means they want to check whether security wise things are correct or not. Sanitizer is used by the views to sanitize potentially dangerous values. DomSanitizer and eDomSanitizerImpl are two subclasses used in Sanitizer.</p>
<p>So basically we have two abstract classes and one implementation class for sanitizer. In video session <a href="https://www.youtube.com/watch?v=avIl5dK_s2k" target="_blank" rel="noopener noreferrer"><strong>Use Existing Practical Example | useExisting | Angular | Tutoria</strong></a><strong>l<em> </em></strong>we have explained practical example of UseExisting provider type in detail. This is the real world example that angular uses with in itself. So mostly UseExisting provider is framework related stuff that shows capability of both Sanitizer &amp; domSanitizer.</p>
<p><img class="alignnone size-full wp-image-2406" src="{{ site.baseurl }}/assets/2019/07/85.png" alt="" width="790" height="398" /></p>
<p>DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing values to be safe to use in the different DOM contexts. In specific situations, it might be necessary to disable sanitization. Users can bypass security by constructing a value with one of the bypassSecurityTrust methods, and then binding to that value from the template. We can call one of the following methods depending upon the context, to disable Angular’s built-in sanitization.</p>
<ul>
<li>bypassSecurityTrustHtml</li>
<li>bypassSecurityTrustScript</li>
<li>bypassSecurityTrustStyle</li>
<li>bypassSecurityTrustUrl</li>
<li>bypassSecurityTrustResourceUrl</li>
</ul>
<p><iframe src="https://www.youtube.com/embed/avIl5dK_s2k" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
