---
layout: post
title: Type of Authentication - Session Based Authentication
date: 2020-07-06T10:00:18.000Z
type: post
published: true
comments: true
social-share: true
categories:
  - Angular
  - Full Stack Master
  - JavaScript
tags:
  - Angular
  - fullstackmaster
  - JavaScript
  - rupeshtiwari
meta:
  _wpcom_is_markdown: "1"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1611407887;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:3439;}i:1;a:1:{s:2:"id";i:3435;}i:2;a:1:{s:2:"id";i:3445;}}}}
  _edit_last: "1"
  _thumbnail_id: "3432"
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
  wpmm_postgrid_views: "66"
  _qode-like: "0"
  _b2s_post_meta: >-
    a:6:{s:8:"og_title";s:53:"Type of Authentication - Session Based
    Authentication";s:7:"og_desc";s:14:"Authentication";s:8:"og_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/06/RUPESH-2.png";s:10:"card_title";s:53:"Type
    of Authentication - Session Based
    Authentication";s:9:"card_desc";s:160:"Authentication is vital to most of
    the applications and the way it is achieved has evolved substantially in
    recent years. Basically there are three types of
    aut";s:10:"card_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/06/RUPESH-2.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /type-of-authentication-session-based-authentication/
toc: true
---

<p>Authentication is vital to most of the applications and the way it is achieved has evolved substantially in recent years. Basically there are three types of authentication:</p>
<ul>
<li>Session Based Authentication</li>
<li>Cookie Based Authentication</li>
<li>JWT(JSON Web Tokens) Authentication</li>
</ul>
<p>JWT Authentication is one of the most popular types in today’s world. Will discuss each type in detail in our subsequent video sessions. In this video tutorial <strong><a href="https://www.youtube.com/watch?v=lrqE4_P8_0A&amp;list=PLZed_adPqIJp9M8sXttDmlCzWzat44GRi&amp;index=3&amp;t=0s" target="_blank" rel="noopener noreferrer">Session Based Authentication</a><em>, </em></strong>we will explain session based authentication with real world examples. Will also discuss its advantages &amp; disadvantages.</p>
<p>Let’s say you are trying to login into your app with your user credentials. As soon as you will submit your details, request will be sent to server. Server will authenticate and create session key that it will pass to client. Now next time whenever you will try to retrieve your session, server will expect that the client will pass the session key to it to recognize you.</p>
<p><img class="alignnone size-full wp-image-3433" src="{{ site.baseurl }}/assets/2020/07/SB1.png" alt="" width="855" height="481" /></p>
<p>Now the problem comes when we use distributed server system with load balancer in large scale applications. Here when client sends your session key, it may or may not be received by the same server by which it was created. If it goes to other server then that will not be able to recognize you as all the servers create their independent session keys. This is one of the major problems in session based authentication. To overcome this there are certain packages available like out of the process sessions storage, distributed sessions software, or use SQL server exclusively to store sessions. So whenever we have large servers with distributed architecture and we are using session authentication then we must consider any of these extra packages as well, to overcome session authentication shortcomings.</p>
<p><iframe src="https://www.youtube.com/embed/lrqE4_P8_0A" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
