---
layout: post
title: Chapter 59 Mastering mean js (persisting logged in user in angular app )
date:
type: post

published: false
password: ''
status: future
categories:
- Angular
- MEAN
- MEAN.js
- Node.js
tags:
- Express
- Node.js
meta:
  slide_template: default
  _wpb_vc_js_status: 'false'
  wpmm_postgrid_views: '3'
  _qode-like: '0'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  gallery_type: slider
  qode_show-sidebar: default
  qode_post_style_masonry_gallery: default
  _edit_last: '1'
  qode_page_background_image_fixed: 'yes'
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:2:{s:32:"37550b67d263a3ce789993dc25046c5f";a:2:{s:7:"expires";i:1590975673;s:7:"payload";a:2:{i:0;a:1:{s:2:"id";i:344;}i:1;a:1:{s:2:"id";i:2302;}}}s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1590975864;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:3011;}i:1;a:1:{s:2:"id";i:3345;}i:2;a:1:{s:2:"id";i:2895;}}}}
  _yoast_wpseo_content_score: '30'
  video_format_choose: youtube
  _b2s_post_meta: a:6:{s:8:"og_title";s:72:"Chapter 59 Mastering mean js (persisting
    logged in user in angular app )";s:7:"og_desc";s:71:"Persistent Login Session
    using Angular and Passport in Express Node.js.";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/05/CHAPTER-59.png";s:10:"card_title";s:72:"Chapter
    59 Mastering mean js (persisting logged in user in angular app )";s:9:"card_desc";s:71:"Persistent
    Login Session using Angular and Passport in Express Node.js.";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/05/CHAPTER-59.png";}
  _yoast_wpseo_primary_category: '241'
  _thumbnail_id: '3382'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/"
excerpt: Persistent Login Session using Angular and Passport in Express Node.js.
---
<p><!-- wp:heading --></p>
<h2>Introduction</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Hello viewers and welcome back to Mastering MEAN.js course. <br /> In our previous video we did update and delete cart items. <br /> In today's video we will fix a bug that we have so far in our project. <br /> In today's video we will retain the user once he or she is logged in or registered to product mart. <br /> Therefore, once a user is logged in and he or she refreshes the page it should be logged in only. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Agenda</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>So in our today session we have below requirements to meet <br /> Users should be able to login to our application only If they have already registered and entered correct credentials. <br /> Once a user is logged in and refreshes the page then the user should remain logged in and the system should identify them. Next we will also make sure once a user is logged out then it should be navigated to the login page.  We also have a requirement to handle any http errors happening in Angular and show the error to the user.  Finally we want to show http errors in some toaster format and the requirement is to use angular material snacks module. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Learning Checklist</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>With that being said, let's see after finishing this session what you are going to learn. <br />
First thing you will learn is How in angular you can create an HTTP interceptor to handle global angular http errors. <br />
Next you will learn how we can use angular material snacks modules to popup and show messages and auto close them. <br />
Next on the server side you will learn how passport local is used in express js as middleware for first time user authentication.  Next on the server side you will learn how passport jwt can be used in express as middleware for authentication of re-visitors. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>While we do server side coding You will also learn how you can debug both server side and client side code. <br />
This is very helpful when you are doing full stack  development therefore, you should never miss this trick and watch it completely. <br />
Finally we will protect server side REST api such that un authenticated users should not be able to login to our system. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>What you will gain after watching this session?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Lets see what is the bug we have today When you go to the app and login after that if you refresh the app then notice.There is an error showing up in console log.  Error says Your login details could not be verified please try again. This is the bug that we will fix in this video.  Let’s quickly see what you are going to achieve after finishing this session. <br />
First when you already logged in and you did logout then notice you are navigated to the login page again. <br />
Next if you login then you will be navigated back to the products page. <br />
After that if you refresh the page then you will notice that the user is still logged in. <br />
You will verify that the user is found on the server and also it is logged in successfully automatically. <br />
So there is a lot to learn from this video. Get ready and bring your laptop open VS code and let jump into coding directly. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:core-embed/youtube {"url":"https://youtu.be/r3P6UoyhLcA"} --></p>
<figure class="wp-block-embed-youtube wp-block-embed">
<div class="wp-block-embed__wrapper">
https://youtu.be/r3P6UoyhLcA
</div>
</figure>
<p><!-- /wp:core-embed/youtube --></p>
<p><!-- wp:heading --></p>
<h2>Want to learn more Subscribe to Full Stack Master</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong>❤️ Hey Viewers! show your support &amp; subscribe to full stack master school to see full HD course videos, download source code, slides and step by step guide. Learn more at https://blog.rupeshtiwari.com/subscribe 💥 I am super excited to teach you at Full Stack Master!</strong></p>
<p><!-- /wp:paragraph --></p>