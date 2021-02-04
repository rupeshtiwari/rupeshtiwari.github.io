---
layout: post
title: Integrating Restful API in Angular App - Demo
date: 2020-02-17T11:00:16.000Z
type: post
published: true
comments: true
social-share: true
categories:
  - Angular
tags:
  - Angular
  - fullstackmaster
  - JavaScript
  - rupeshtiwari
meta:
  _wpcom_is_markdown: "1"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1605791275;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2895;}i:1;a:1:{s:2:"id";i:2953;}i:2;a:1:{s:2:"id";i:2840;}}}}
  _edit_last: "1"
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
  wpmm_postgrid_views: "278"
  _qode-like: "0"
  _thumbnail_id: "2970"
  _b2s_post_meta: >-
    a:6:{s:8:"og_title";s:125:"Integrating Restful API in Angular App - Demo -
    Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack
    Training";s:7:"og_desc";s:106:"In our previous demos session we have created
    our server and restful API and tested API with postman
    also.";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/01/RUPESH-111.png";s:10:"card_title";s:45:"Integrating
    Restful API in Angular App - Demo";s:9:"card_desc";s:160:"In our previous
    demos session we have created our server and restful API and tested API with
    postman also. Next we will try to integrate this Restful API in
    our";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/01/RUPESH-111.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /integrating-restful-api-in-angular-app-demo/

---

<p>In our previous demos session we have created our server and restful API and tested API with postman also. Next we will try to integrate this Restful API in our angular app so that when we try to register from our angular project, it should send the data to the server via http. In this demo session <a href="https://www.youtube.com/watch?v=2v2lMmcapmQ&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=21&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Integrating Restful API In Angular App | Practical Demo | 0009-20</strong></a> we will see in detail</p>
<ul>
<li>How to integrate Restful Web API in Angular app?</li>
<li>How to avoid CORS error?</li>
<li>How to create proxy configuration for webpack to locally access remote webapi?</li>
</ul>
<p>Let’s begin with making required changes in <strong>auth.service.ts</strong> file.</p>
<p><img class="alignnone size-full wp-image-2969" src="{{ site.baseurl }}/assets/2020/02/IR1.png" alt="" width="853" height="482" /></p>
<p>Also will add code to pop-up proper messages on success and failure in registration process.</p>
<p><img class="alignnone size-full wp-image-2968" src="{{ site.baseurl }}/assets/2020/02/IR2.png" alt="" width="853" height="482" /></p>
<p>Next, in <strong>angular.Json</strong> we will put proxy location through <strong>proxy.config.json</strong> and that location will redirect us to required URL.</p>
<p><img class="alignnone size-full wp-image-2967" src="{{ site.baseurl }}/assets/2020/02/IR3.png" alt="" width="854" height="480" /></p>
<p>Now we will create json file with same name <strong>proxy.config.json</strong> in root location. Then after entering data in our registration page, we can confirm that data on server log.</p>
<p><img class="alignnone size-full wp-image-2966" src="{{ site.baseurl }}/assets/2020/02/IR4.png" alt="" width="853" height="480" /></p>
<p>Still our server is in-memory i.e. storing data in-memory, but in our subsequent demo sessions we will install &amp; use MongoDB and store data in database.</p>
<p><iframe src="https://www.youtube.com/embed/2v2lMmcapmQ" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
