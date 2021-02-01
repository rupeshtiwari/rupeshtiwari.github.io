---
layout: post
title: Installing & Configuring Mongo DB in our angular app - Demo
date: 2020-02-24 06:00:47.000000000 -05:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- AngularJS
- JavaScript
tags:
- Angular
- fullstackmaster
- JavaScript
meta:
  _edit_last: '1'
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1610727679;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:3003;}i:1;a:1:{s:2:"id";i:3011;}i:2;a:1:{s:2:"id";i:2965;}}}}
  _thumbnail_id: '2996'
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
  _yoast_wpseo_primary_category: '179'
  wpmm_postgrid_views: '296'
  _qode-like: '0'
  _b2s_post_meta: a:6:{s:8:"og_title";s:59:"Installing & Configuring Mongo DB in our
    angular app - Demo";s:7:"og_desc";s:247:"Now in this demo session Installing And
    Configuring Mongodb & Mongoose | Demo | 0009-21 we will see how to install MongoDB
    in our machine and how to use it in our angular-NodeJS project. It’s a very flexible
    and very famous open source database.";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/02/RUPESH-112.png";s:10:"card_title";s:59:"Installing
    & Configuring Mongo DB in our angular app - Demo";s:9:"card_desc";s:160:"Now in
    this demo session Installing And Configuring Mongodb &amp; Mongoose | Demo | 0009-21
    we will see how to install MongoDB in our machine and how to use it ";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/02/RUPESH-112.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/installing-configuring-mongo-db-in-our-angular-app-demo/"
---
<p>Now in this demo session <a href="https://www.youtube.com/watch?v=MAJpsTGU470&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=22&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Installing And Configuring Mongodb &amp; Mongoose | Demo | 0009-21 </strong></a>we will see how to install MongoDB in our machine and how to use it in our angular-NodeJS project. It’s a very flexible and very famous open source database. With flexibility like we can save any kind of data in MongoDB as a positive point, it also brings some serious concerns. There is no type check or validations to store data inside it. It makes it vulnerable to data corruption. This is the reason we need a robust modeling way to create our entities. That means we should have some modeling tool which helps us in validation, defining schemas and query our database elegantly. Best solution for this is usage of Mongoose data modeling tool.</p>
<p>Let’s begin with MongoDB first, we can download MongoDB from their official site <a href="https://www.mongodb.com/download-center" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/download-center</a> and install it through command <strong>npm i –S mongoose</strong></p>
<p><img class="alignnone size-full wp-image-3001" src="{{ site.baseurl }}/assets/2020/02/21_1.png" alt="" width="851" height="476" /></p>
<p>Next we need some interface to interact with mongoDB like for SQL server we have SQL studio. For MongoDB we have MongoDB Compass but that is paid version. But as a free version we have Robo 3T we can download it from there official site <a href="https://robomongo.org/" target="_blank" rel="noopener noreferrer">https://robomongo.org/</a> and install it in our project.</p>
<p><img class="alignnone size-full wp-image-3000" src="{{ site.baseurl }}/assets/2020/02/21_2.png" alt="" width="853" height="482" /></p>
<p>After installing MongoDB, Mongoose and Robo 3T, next we will set some environment variables in our Config.js file.</p>
<p><img class="alignnone size-full wp-image-2999" src="{{ site.baseurl }}/assets/2020/02/21_3.png" alt="" width="851" height="480" /></p>
<p>Next we will create mongoose.js file inside Config folder to do configuration of our mongoose data modeling tool.</p>
<p><img class="alignnone size-full wp-image-2998" src="{{ site.baseurl }}/assets/2020/02/21_4.png" alt="" width="854" height="480" /></p>
<p>Finally, after completing our configuration settings in mongoose.js file we can run command <strong>npm run server:watch </strong>to check whether our project is connected to Database or not.</p>
<p><img class="alignnone size-full wp-image-2997" src="{{ site.baseurl }}/assets/2020/02/21_5.png" alt="" width="851" height="478" /></p>
<p>From above snapshot we can see our project is successfully connected to database. All above code is checked in to GitHub repository <a href="https://github.com/rupeshtiwari/product-mart/tree/workshop-session-4-30" target="_blank" rel="noopener noreferrer">https://github.com/rupeshtiwari/product-mart/tree/workshop-session-4-30</a> for your future reference.</p>
<p><iframe src="https://www.youtube.com/embed/MAJpsTGU470" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
