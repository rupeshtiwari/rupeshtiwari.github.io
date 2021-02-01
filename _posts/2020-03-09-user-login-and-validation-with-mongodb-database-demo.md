---
layout: post
title: User Login and validation with MongoDB database - Demo
date: 2020-03-09 06:00:44.000000000 -04:00
type: post
parent_id: '0'
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
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1611940704;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:3003;}i:1;a:1:{s:2:"id";i:2995;}i:2;a:1:{s:2:"id";i:3023;}}}}
  _edit_last: '1'
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
  wpmm_postgrid_views: '329'
  _qode-like: '0'
  _thumbnail_id: '3021'
  _b2s_post_meta: a:6:{s:8:"og_title";s:54:"User Login and validation with MongoDB
    database - Demo";s:7:"og_desc";s:191:"In this video session User Login In Angular
    With MongoDB | Demo | 0009-23 we will login into our product Mart app through
    MongoDB database and we will see how to validate the logging in user.";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/02/RUPESH-116.png";s:10:"card_title";s:54:"User
    Login and validation with MongoDB database - Demo";s:9:"card_desc";s:160:"In this
    video session User Login In Angular With MongoDB | Demo | 0009-23 we will login
    into our product Mart app through MongoDB database and we will see how t";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/02/RUPESH-116.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/user-login-and-validation-with-mongodb-database-demo/"
---
<p>In this video session <a href="https://www.youtube.com/watch?v=n0Pim_tHB9s&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=24&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>User Login In Angular With MongoDB | Demo | 0009-23 </strong></a>we will login into our product Mart app through MongoDB database and we will see how to validate the logging in user. Also we will learn how to show proper messages on successful and unsuccessful validation of user credentials. All this is explained with proper snapshots in below steps and code snippets are also available in our GitHub repository. Please visit <a href="https://github.com/rupeshtiwari/product-mart/tree/workshop-session-4-30" target="_blank" rel="noopener noreferrer">https://github.com/rupeshtiwari/product-mart/tree/workshop-session-4-30</a> to check our code base.</p>
<p>First we will make required changes in our <strong>auth.service.ts</strong> file.</p>
<p><img class="alignnone size-full wp-image-3019" src="{{ site.baseurl }}/assets/2020/03/23_1.png" alt="" width="696" height="395" /></p>
<p>Next we will make changes in <strong>auth.route.js</strong> file. Earlier we have not declared route for logging in routing, so now we need to create login function as well similar to register function.</p>
<p><img class="alignnone size-full wp-image-3018" src="{{ site.baseurl }}/assets/2020/03/23_2.png" alt="" width="696" height="392" /></p>
<p>Then we need to pass user info and validate it with data available in database. All this coding will be done in <strong>user.controller.js</strong> file and user controller will be called again in auth service.</p>
<p><img class="alignnone size-full wp-image-3017" src="{{ site.baseurl }}/assets/2020/03/23_3.png" alt="" width="697" height="393" /></p>
<p><img class="alignnone size-full wp-image-3016" src="{{ site.baseurl }}/assets/2020/03/23_4.png" alt="" width="699" height="391" /></p>
<p>Finally we will verify our coding in our login page whether it is working fine in both success and unsuccessful login scenarios.</p>
<p>Case1: Logging in with correct user credentials.</p>
<p><img class="alignnone size-full wp-image-3015" src="{{ site.baseurl }}/assets/2020/03/23_5.png" alt="" width="695" height="392" /></p>
<p>You can see below, user “Rupesh” is logged in and redirected to home page. Even we can verify on server side, that login search and validation is successful or not.</p>
<p><img class="alignnone size-full wp-image-3014" src="{{ site.baseurl }}/assets/2020/03/23_6.png" alt="" width="698" height="390" /></p>
<p><img class="alignnone size-full wp-image-3013" src="{{ site.baseurl }}/assets/2020/03/23_7.png" alt="" width="697" height="392" /></p>
<p>Case 2: Tying to login with incorrect user credentials.</p>
<p><img class="alignnone size-full wp-image-3012" src="{{ site.baseurl }}/assets/2020/03/23_8.png" alt="" width="698" height="394" /></p>
<p>Catch you in our next demo session <a href="https://www.youtube.com/watch?v=Mzm-ikcEMeE&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=25&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Debugging Server Side Code on Visual Studio Code | 0009-24</strong></a> to learn how to debug server side coding in VS Code. We will discuss all important debugging concepts in our upcoming sessions.</p>
<p><iframe src="https://www.youtube.com/embed/n0Pim_tHB9s" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
