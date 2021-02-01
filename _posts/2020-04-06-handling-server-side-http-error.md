---
layout: post
title: Handling Server Side HTTP Error
date: 2020-04-06 06:00:15.000000000 -04:00
type: post

published: true
password: ''
status: publish
categories:
- Angular
- Express.JS
- JavaScript
tags:
- Angular
- Express
- fullstackmaster
- JavaScript
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609847816;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:3241;}i:1;a:1:{s:2:"id";i:3011;}i:2;a:1:{s:2:"id";i:2965;}}}}
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
  wpmm_postgrid_views: '165'
  _qode-like: '0'
  _thumbnail_id: '3238'
  _b2s_post_meta: a:6:{s:8:"og_title";s:31:"Handling Server Side HTTP Error";s:7:"og_desc";s:213:"As
    we discussed in our previous video session Designing Shopping Page Using Angular
    Material Grid And Card | 0009-26, our web app is now growing as we are adding
    more features into it and making its design better.";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/03/RUPESH-115.png";s:10:"card_title";s:31:"Handling
    Server Side HTTP Error";s:9:"card_desc";s:160:"As we discussed in our previous
    video session Designing Shopping Page Using Angular Material Grid And Card | 0009-26,
    our web app is now growing as we are addin";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/03/RUPESH-115.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/handling-server-side-http-error/"
---
<p>As we discussed in our previous video session <a href="https://www.youtube.com/watch?v=hrYlnQCBLrE&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=29&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Designing Shopping Page Using Angular Material Grid And Card | 0009-26</strong></a>, our web app is now growing as we are adding more features into it and making its design better. Since our application is growing, now the most important challenge is to handle the server side errors properly and sending adequate information to client side. We will see in this demo session <strong><a href="https://www.youtube.com/watch?v=Zq_MT6Hc--U&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=59&amp;t=0s" target="_blank" rel="noopener noreferrer">Handling Server Side HTTP Error | 0009-27</a> </strong>what are all the problems we have in our code and how to rectify them through proper error handling.</p>
<p>Let’s consider a scenario where we have entered wrong email id while log in. Now on pressing F12 we can see the error message; however this message is html which is not something that we should show to client. Our goal is to return the error object from the server with informative message inside it. In order to do that we need to handle all API related errors properly in express.js file inside server folder.</p>
<p>For this first we need to install http-errors package, it will give us a call back where we can intercept all kind of errors and return proper message to client.</p>
<p><img class="alignnone size-full wp-image-3237" src="{{ site.baseurl }}/assets/2020/04/27.1.png" alt="" width="856" height="478" /></p>
<p>After installation we need to import it inside express.js, so that we can use it as middle ware. Also we will do required coding in express.js file to handle errors as shown below:</p>
<p><img class="alignnone size-full wp-image-3236" src="{{ site.baseurl }}/assets/2020/04/27.2.png" alt="" width="854" height="483" /></p>
<p>Let’s go back again to same scenario where we entered wrong email id while login and check what error message we are getting now.</p>
<p><img class="alignnone size-full wp-image-3235" src="{{ site.baseurl }}/assets/2020/04/27.3.png" alt="" width="851" height="481" /></p>
<p>Now we can see a meaningful error on pressing F12 and same error we can log into console logger or http logger. Also in order to show business message or user friendly message, we can use authservice. This message will go to UI, generally known as business exception. In auth service we can inject the log service to catch and log the server error.</p>
<p><img class="alignnone size-full wp-image-3234" src="{{ site.baseurl }}/assets/2020/04/27.4.png" alt="" width="851" height="482" /></p>
<p><img class="alignnone size-full wp-image-3233" src="{{ site.baseurl }}/assets/2020/04/27.5.png" alt="" width="853" height="477" /></p>
<p>Next in our upcoming video session <a href="https://www.youtube.com/watch?v=1gEjZavI6Rc&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=65&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Responsive Toolbar Online eCommerce Store Part 1 </strong></a>we will learn how to get responsive toolbar in our e-commerce app.</p>
<p><iframe src="https://www.youtube.com/embed/Zq_MT6Hc--U" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
