---
layout: post
title: Creating Angular Component & Lazy Loaded Module - Demo
date: 2019-12-09 06:00:48.000000000 -05:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Angular
tags:
- Angular
- fullstackmaster
- rupeshtiwari
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1594762208;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2833;}i:1;a:1:{s:2:"id";i:2248;}i:2;a:1:{s:2:"id";i:2895;}}}}
  _edit_last: '1'
  _thumbnail_id: '2831'
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
  wpmm_postgrid_views: '271'
  _qode-like: '0'
  _b2s_post_meta: a:6:{s:8:"og_title";s:120:"Creating Angular Component & Lazy Loaded
    - Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack Training";s:7:"og_desc";s:127:"Let’s
    begin this demo session Creating Products Module | Lazy loaded module | Angular
    | 0009-09 by creating a home component.";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/11/RUPESH-100.png";s:10:"card_title";s:54:"Creating
    Angular Component & Lazy Loaded Module - Demo";s:9:"card_desc";s:160:"Let’s begin
    this demo session Creating Products Module | Lazy loaded module | Angular | 0009-09
    by creating a home component. Command used to generate home co";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/11/RUPESH-100.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/creating-angular-component-lazy-loaded-module-demo/"
---
<p>Let’s begin this demo session <a href="https://www.youtube.com/watch?v=emlJbYT7MbY&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=10&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Creating Products Module | Lazy loaded module | Angular | 0009-09 </strong></a>by creating a home component. Command used to generate home component is <strong>ng generate component home </strong>and shortcut is <strong>ng g c home. </strong>This command will automatically update our app module and put home folder inside our app folder.</p>
<p><img class="alignnone size-full wp-image-2830" src="{{ site.baseurl }}/assets/2019/12/LM1.png" alt="" width="852" height="481" /></p>
<p>It’s just a first step in our app creation process. Before getting deeper into its coding lets understand some dos &amp; don’ts regarding landing page:</p>
<ul>
<li>Landing/Home page should be very lite and it should not load entire application.</li>
<li>It should be very snappy and rest you can load on demand or under the hood. It is also known as lazy loading.</li>
<li>When you built features, try to build them lazy. It means build feature module in such a way that once you load your app it does not load whole application. This is also called as Lazy load module concept.</li>
</ul>
<p>Let’s create a simple landing page by executing home page creation command and see how our page looks in application window. Keeping in mind Lazy Load concept, we will also try to make our landing page lite keeping only required info like Welcome message and introduction kind of stuff.</p>
<p><img class="alignnone size-full wp-image-2829" src="{{ site.baseurl }}/assets/2019/12/LM2.png" alt="" width="855" height="481" /></p>
<p><iframe src="https://www.youtube.com/embed/emlJbYT7MbY" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
