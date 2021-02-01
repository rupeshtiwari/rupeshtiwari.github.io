---
layout: post
title: Type of Authentication - Cookie Based Authentication
date: 2020-07-13 06:00:12.000000000 -04:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
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
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1611941245;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:3445;}i:1;a:1:{s:2:"id";i:3431;}i:2;a:1:{s:2:"id";i:3439;}}}}
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
  wpmm_postgrid_views: '47'
  _qode-like: '0'
  _thumbnail_id: '3437'
  _b2s_post_meta: a:6:{s:8:"og_title";s:52:"Type of Authentication - Cookie Based
    Authentication";s:7:"og_desc";s:13:"In this video";s:8:"og_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/06/RUPESH-3.png";s:10:"card_title";s:52:"Type
    of Authentication - Cookie Based Authentication";s:9:"card_desc";s:160:"In this
    video tutorial Cookie Based Authentication Advantage And Disadvantage | 0010-02
    we will discuss about cookie based authentication. In this type of authe";s:10:"card_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/06/RUPESH-3.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/type-of-authentication-cookie-based-authentication/"
---
<p>In this video tutorial <a href="https://www.youtube.com/watch?v=ZpF8CSR4rhE&amp;list=PLZed_adPqIJp9M8sXttDmlCzWzat44GRi&amp;index=4&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Cookie Based Authentication Advantage And Disadvantage | 0010-02 </strong></a>we will discuss about cookie based authentication. In this type of authentication, whenever client sends authentication details to server, server creates unique id for that client and put that in the cookie object of the response. Cookie is nothing but an object which stores data that goes to client. So next time when client try to authenticate itself, it will send the same cookie in header message to server. As far as that cookie is not expired, user will be authenticated.</p>
<p><img class="alignnone size-full wp-image-3436" src="{{ site.baseurl }}/assets/2020/07/CO1.png" alt="" width="852" height="481" /></p>
<p>Now there are mainly three issues that come up with cookie based authentication.</p>
<ul>
<li>First one is Cookie has to be stored in client machine, which is more vulnerable to miscreants.</li>
<li>Second one is Cross request scripting – by default cookies go through header of every message, so there is chance to send your cookie data to wrong server.</li>
<li>Third and important one is some of the mobile devices do not support saving of cookie data. So if you want to scale up your API’s for mobile devices like IOS etc. then they may or may not support cookie storage.</li>
</ul>
<p>So if we are okay with these three shortcomings then we can go for cookie based authentication. Next we will learn about JWT authentication in subsequent video session.</p>
<p><iframe src="https://www.youtube.com/embed/ZpF8CSR4rhE" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
