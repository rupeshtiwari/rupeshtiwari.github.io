---
layout: post
title:
  How JWT Authentication overcomes shortcomings of other authentication types
date: 2020-07-27T10:00:51.000Z
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
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1610274809;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:3439;}i:1;a:1:{s:2:"id";i:3431;}i:2;a:1:{s:2:"id";i:3435;}}}}
  _edit_last: "1"
  _thumbnail_id: "3446"
  slide_template: default
  _wpb_vc_js_status: "false"
  _yoast_wpseo_content_score: "60"
  qode_page_background_image_fixed: "yes"
  qode_hide-featured-image: "no"
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _yoast_wpseo_primary_category: "178"
  wpmm_postgrid_views: "51"
  _qode-like: "0"
  _b2s_post_meta: >-
    a:6:{s:8:"og_title";s:75:"How JWT Authentication overcomes shortcomings of
    other authentication types";s:7:"og_desc";s:13:"In this
    video";s:8:"og_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/06/RUPESH-21.png";s:10:"card_title";s:75:"How
    JWT Authentication overcomes shortcomings of other authentication
    types";s:9:"card_desc";s:160:"In this video tutorial 0010-4 JWT
    authentication for distrubuted system we will learn what makes JWT
    authentication world’s most popular authentication type.
    ";s:10:"card_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/06/RUPESH-21.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /how-jwt-authentication-overcomes-shortcomings-of-other-authentication-types/
toc: true
---

<p>In this video tutorial <a href="https://www.youtube.com/watch?v=2VDclXVUeZo&amp;list=PLZed_adPqIJp9M8sXttDmlCzWzat44GRi&amp;index=6&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>0010-4 JWT authentication for distrubuted system</strong></a> we will learn what makes JWT authentication world’s most popular authentication type. We will see how it overcomes shortcomings of other authentication types. Our main focus will be on understanding its process which makes it unique from others.</p>
<p>First thing we will discuss is how it handles distributed systems. Once again we will take same example of distributed server system with load balancer in large scale applications. Here when client sends JWT, it may or may not be received by the same server by which it was created. If it goes to other server then also, there will be no issue as irrespective of server, process of retrieving your information from JWT and authentication is uniform. Your JWT contains header that has hashing algorithm, payload that has authentication data and digital signature. This information will be verified and utilized by using secret key and this secret key is common per environment. So these secret keys will vary from environment to environment and for each environment there will be one defined secret key.</p>
<p>In this way JWT authentication type is providing out of the box support to distributed server systems without any need of adding external packages. This feature makes JWT authentication type more scalable and reliable.</p>
<p><img class="alignnone size-full wp-image-3447" src="{{ site.baseurl }}/assets/2020/07/JWT1.png" alt="" width="855" height="481" /></p>
<p>It also overcomes most the issues we see in cookie based authentication as it does not store data in cookie. Also there is no case of cross request scripting as authentication information will not be verified and utilized without secret key.</p>
<p><iframe src="https://www.youtube.com/embed/2VDclXVUeZo" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
