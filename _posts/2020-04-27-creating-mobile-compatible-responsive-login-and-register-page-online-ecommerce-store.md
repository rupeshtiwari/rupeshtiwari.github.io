---
layout: post
title: >-
  Creating Mobile compatible Responsive Login and Register Page - Online
  ecommerce Store
date: 2020-04-27T10:00:18.000Z
type: post
published: true
comments: true
social-share: true
categories:
  - Angular
  - Express.JS
  - Full Stack Master
tags:
  - Angular
  - Express
  - fullstackmaster
  - JavaScript
meta:
  _wpcom_is_markdown: "1"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1602058864;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:3252;}i:1;a:1:{s:2:"id";i:3277;}i:2;a:1:{s:2:"id";i:3241;}}}}
  _edit_last: "1"
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
  wpmm_postgrid_views: "102"
  _qode-like: "0"
  _thumbnail_id: "3272"
  _b2s_post_meta: >-
    a:6:{s:8:"og_title";s:86:"Creating Mobile compatible Responsive Login and
    Register Page - Online ecommerce Store";s:7:"og_desc";s:145:"In our previous
    demo session Responsive Toolbar Online ecommerce Store Part 2 we have learnt
    how to create responsive toolbar with proper
    design.";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/03/RUPESH-121.png";s:10:"card_title";s:86:"Creating
    Mobile compatible Responsive Login and Register Page - Online ecommerce
    Store";s:9:"card_desc";s:160:"In our previous demo session Responsive
    Toolbar Online ecommerce Store Part 2 we have learnt how to create
    responsive toolbar with proper design. Next in this
    v";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/03/RUPESH-121.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: >-
  /creating-mobile-compatible-responsive-login-and-register-page-online-ecommerce-store/
toc: true
---

<p>In our previous demo session <a href="https://www.youtube.com/watch?v=wsux8G3L-rQ&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=66&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Responsive Toolbar Online ecommerce Store Part 2</strong></a> we have learnt how to create responsive toolbar with proper design. Next in this video session we will focus on creating mobile compatible responsive login and register page in our ecommerce store web app.</p>
<p>All this is explained in our demo session <a href="https://www.youtube.com/watch?v=-sZAlN5sSI0&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=67&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Creating Responsive Login And Register Page | Mobile Compatible</strong></a> in detail. Here we will go through each coding step one by one and briefly discuss with screenshots. Currently our ecommerce store looks like below in mobile:</p>
<p>Register page:</p>
<p><img src="{{ site.baseurl }}/assets/2020/04/30.1.png" alt="" width="855" height="479" class="alignnone size-full wp-image-3271" /></p>
<p>Login Page:</p>
<p><img src="{{ site.baseurl }}/assets/2020/04/30.2.png" alt="" width="855" height="481" class="alignnone size-full wp-image-3270" /></p>
<p>We can see register page text is coming properly, however in Login page message after login button is cutting. Also user data entry field are not properly aligned. Let’s start with login component first and make it responsive and look better. On comparison with Register page we noticed we have not applied full width in login component.</p>
<p><img src="{{ site.baseurl }}/assets/2020/04/30.3.png" alt="" width="855" height="482" class="alignnone size-full wp-image-3269" /></p>
<p>In order to make this change, first we need to make css part of login component in sync with register page and then we need to apply full width to our form fields as shown below:</p>
<p><img src="{{ site.baseurl }}/assets/2020/04/30.4.png" alt="" width="854" height="482" class="alignnone size-full wp-image-3268" /></p>
<p><img src="{{ site.baseurl }}/assets/2020/04/30.5.png" alt="" width="854" height="481" class="alignnone size-full wp-image-3267" /></p>
<p>Now if we check our Login page, it will display similar to Register page of our ecommerce store.</p>
<p><img src="{{ site.baseurl }}/assets/2020/04/30.6.png" alt="" width="854" height="477" class="alignnone size-full wp-image-3266" /></p>
<p>Next we need to put Login button and text message in separate div so that it looks nice in mobile display. Also if you see our login button is not responsive, we need to make it responsive so that on pressing, it take user to home page.</p>
<p><img src="{{ site.baseurl }}/assets/2020/04/30.7.png" alt="" width="854" height="479" class="alignnone size-full wp-image-3265" /></p>
<p>Similar changes we need to make in Register page, especially on its Register button, text message design and its responsiveness.</p>
<p><img src="{{ site.baseurl }}/assets/2020/04/30.8.png" alt="" width="853" height="479" class="alignnone size-full wp-image-3264" /></p>
<p><img src="{{ site.baseurl }}/assets/2020/04/30.9.png" alt="" width="854" height="480" class="alignnone size-full wp-image-3263" /></p>
<p>Since our Login &amp; register pages are now properly aligned and made responsive, next in our upcoming video <a href="https://www.youtube.com/watch?v=HIF-qFKQsOk&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=68&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Pagination And Filter e-Commerce Angular App | mat-table </strong></a>we will focus on products page.</p>
<p><iframe width="790" height="350" src="https://www.youtube.com/embed/-sZAlN5sSI0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
