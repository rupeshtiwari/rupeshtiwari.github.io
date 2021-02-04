---
layout: post
title: Saving User data in MongoDB - Demo
date: 2020-03-02T11:00:22.000Z
type: post
published: true
comments: true
social-share: true
categories:
  - Angular
  - JavaScript
tags:
  - Angular
  - fullstackmaster
  - JavaScript
meta:
  _wpcom_is_markdown: "1"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609959470;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2995;}i:1;a:1:{s:2:"id";i:3011;}i:2;a:1:{s:2:"id";i:3023;}}}}
  _edit_last: "1"
  _thumbnail_id: "3009"
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
  wpmm_postgrid_views: "303"
  _qode-like: "0"
  _b2s_post_meta: >-
    a:6:{s:8:"og_title";s:34:"Saving User data in MongoDB -
    Demo";s:7:"og_desc";s:185:"In this video session Saving User To MongoDB |
    Mongoose | Demo | 0009-22 we will explain how to save user data in mongo db
    and how to validate user at server using Mongoose User
    Schema.";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/02/RUPESH-113.png";s:10:"card_title";s:34:"Saving
    User data in MongoDB - Demo";s:9:"card_desc";s:160:"In this video session
    Saving User To MongoDB | Mongoose | Demo | 0009-22 we will explain how to
    save user data in mongo db and how to validate user at server
    us";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/02/RUPESH-113.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /saving-user-data-in-mongodb-demo/
toc: true
---

<p>In this video session <a href="https://www.youtube.com/watch?v=miZ3NF8ea00&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=23&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Saving User To MongoDB | Mongoose | Demo | 0009-22 </strong></a>we will explain how to save user data in mongo db and how to validate user at server using Mongoose User Schema.</p>
<p>First we will begin with password encryption, if we keep password in plain text it will be exposed to all. Good practice is to store password in database in encrypted manner. To do this we will install one more npm package bcrypt. For this we will run command <strong>npm i –S bcrypt</strong>.</p>
<p>Next important thing to take care is while saving any entity in DB, we should create schema for it. For this we will create models folder and declare all schema related things inside it in <strong>user.model.js</strong> file. Also to validate email id we can put regular expression (available on net) in this file.</p>
<p><img class="alignnone size-full wp-image-3008" src="{{ site.baseurl }}/assets/2020/03/22_1.png" alt="" width="853" height="478" /></p>
<p>Also we will define hashed password, created date and roles as well while putting validations in our schema.</p>
<p><img class="alignnone size-full wp-image-3007" src="{{ site.baseurl }}/assets/2020/03/22_2.png" alt="" width="853" height="478" /></p>
<p>Next in controller file, we will do hashing of password. This will delete actual password and push hashed version of password to save in database.</p>
<p><img class="alignnone size-full wp-image-3006" src="{{ site.baseurl }}/assets/2020/03/22_3.png" alt="" width="853" height="482" /></p>
<p>Now we can finally enter the user details in registration page of our product mart app and, on click of register button, User data will saved to db.</p>
<p><img class="alignnone size-full wp-image-3005" src="{{ site.baseurl }}/assets/2020/03/22_4.png" alt="" width="851" height="478" /></p>
<p>We can simply go to MongoDB user interface and check the entry of user in database.</p>
<p><img class="alignnone size-full wp-image-3004" src="{{ site.baseurl }}/assets/2020/03/22_5.png" alt="" width="853" height="479" /></p>
<p>In this way, we can save any data from our project application into our database. Here we have just focused on saving data of new user. In our next session <a href="https://www.youtube.com/watch?v=n0Pim_tHB9s&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=24&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>User Login In Angular With MongoDB | Demo | 0009-23 </strong></a>we will try to validate already registered user data in db while logging in.</p>
<p><iframe src="https://www.youtube.com/embed/miZ3NF8ea00" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
