---
layout: post
title: Adding Login component in our angular app - Demo
date: 2020-01-20 06:00:05.000000000 -05:00
type: post

published: true
password: ''
status: publish
categories:
- Angular
- JavaScript
tags:
- Angular
- fullstackmaster
- JavaScript
- rupeshtiwari
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1612197104;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:3262;}i:1;a:1:{s:2:"id";i:3277;}i:2;a:1:{s:2:"id";i:3345;}}}}
  _edit_last: '1'
  _thumbnail_id: '2906'
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
  wpmm_postgrid_views: '455'
  _qode-like: '0'
  _b2s_post_meta: a:6:{s:8:"og_title";s:128:"Adding Login component in our angular
    app - Demo - Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack
    Training";s:7:"og_desc";s:129:"In this demo session Adding Log In Component |
    Angular | Demo| 0009-16 we will learn to implement Login functionality in our
    app.";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/12/RUPESH-107.png";s:10:"card_title";s:48:"Adding
    Login component in our angular app - Demo";s:9:"card_desc";s:160:"In this demo
    session Adding Log In Component | Angular | Demo| 0009-16 we will learn to implement
    Login functionality in our app. With this functionality, user ";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/12/RUPESH-107.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/adding-login-component-in-our-angular-app-demo/"
---
<p>In this demo session<a href="https://www.youtube.com/watch?v=CQ1d9v_AOBM&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=17&amp;t=0s" target="_blank" rel="noopener noreferrer"> <strong>Adding Log In Component | Angular | Demo| 0009-16 </strong></a>we will learn to implement Login functionality in our app. With this functionality, user will be able to log-in, log-out and register them if they are first time users. In our subsequent demo sessions we will also see how to host our API in in-memory &amp; in server as a RESTFUL API.</p>
<p>First start with adding Login feature by creating a Login component.</p>
<p><img class="alignnone size-full wp-image-2904" src="{{ site.baseurl }}/assets/2020/01/AL1.png" alt="" width="855" height="478" /></p>
<p>Now will create a Login button to showcase it as a button in our toolbar, so that on its click we are redirected to Login page. All this functionality with code is shown in below snapshots respectively.</p>
<p><img class="alignnone size-full wp-image-2903" src="{{ site.baseurl }}/assets/2020/01/AL2-1.png" alt="" width="854" height="479" /><br />
<img class="alignnone size-full wp-image-2902" src="{{ site.baseurl }}/assets/2020/01/AL2-2.png" alt="" width="853" height="479" /><br />
<img class="alignnone size-full wp-image-2901" src="{{ site.baseurl }}/assets/2020/01/AL2-3.png" alt="" width="854" height="480" /></p>
<p>Next we will try to make it this Login page more practical by putting some text and features. While performing this we faced one error saying ngmodel is not a known property.</p>
<p><img class="alignnone size-full wp-image-2900" src="{{ site.baseurl }}/assets/2020/01/AL3.png" alt="" width="854" height="478" /></p>
<p>To overcome this we need to import forms module &amp; reactive forms module from angular forms.</p>
<p><img class="alignnone size-full wp-image-2899" src="{{ site.baseurl }}/assets/2020/01/AL4.png" alt="" width="854" height="478" /></p>
<p>Now we are able to see output without any errors.</p>
<p><img class="alignnone size-full wp-image-2898" src="{{ site.baseurl }}/assets/2020/01/AL5.png" alt="" width="852" height="480" /></p>
<p>Next we can add other properties like password similar to email in this login page.</p>
<p><img class="alignnone size-full wp-image-2897" src="{{ site.baseurl }}/assets/2020/01/AL6.png" alt="" width="854" height="483" /></p>
<p>Now let’s make it little bit organized and put Login Button to make it more user friendly.</p>
<p><img class="alignnone size-full wp-image-2896" src="{{ site.baseurl }}/assets/2020/01/AL7.png" alt="" width="853" height="476" /></p>
<p>If user exists then he should get some confirmation message and redirected to home page.</p>
<p><img class="alignnone size-full wp-image-2909" src="{{ site.baseurl }}/assets/2020/01/AL8.png" alt="" width="854" height="483" /></p>
<p>In case of new user he should be redirected to registration page. Creating registration component we will see in our next demo session <a href="https://www.youtube.com/watch?v=LsZeU7uBSkY&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=18&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Creating Registration Component | Angular | Demo | 0009-17</strong></a></p>
<p><iframe src="https://www.youtube.com/embed/CQ1d9v_AOBM" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
