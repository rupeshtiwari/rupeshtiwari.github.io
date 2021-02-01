---
layout: post
title: Start & Build Command - Angular app development
date: 2019-11-04 06:00:16.000000000 -05:00
type: post

published: true
comments: true
social-share: true
categories:
- Angular
tags:
- Angular
- fullstackmaster
- rupeshtiwari
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"9f37a613e2d1e5411bb71cfbb231e1d2";a:2:{s:7:"expires";i:1608053663;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2630;}i:1;a:1:{s:2:"id";i:2618;}i:2;a:1:{s:2:"id";i:2881;}}}}
  _edit_last: '1'
  _thumbnail_id: '2648'
  slide_template: default
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '90'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _yoast_wpseo_primary_category: '178'
  wpmm_postgrid_views: '303'
  _qode-like: '0'
  _b2s_post_meta: a:6:{s:8:"og_title";s:127:"Start & Build Command - Angular app development
    - Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack Training";s:7:"og_desc";s:141:"We
    saw in our previous session Creating Angular App using Angular CLI | 0009-03 how
    to do environmental set up and installation for our first";s:8:"og_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/10/RUPESH-7.png";s:10:"card_title";s:47:"Start
    & Build Command - Angular app development";s:9:"card_desc";s:160:"We saw in our
    previous session Creating Angular App using Angular CLI | 0009-03 how to do environmental
    set up and installation for our first angular project. I";s:10:"card_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/10/RUPESH-7.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/start-build-command-angular-app-development/"
---
<p>We saw in our previous session <a href="https://www.youtube.com/watch?v=t_cLb4OyAsA&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=4&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Creating Angular App using Angular CLI | 0009-03 </strong></a>how to do environmental set up and installation for our first angular project. In this video session <a href="https://www.youtube.com/watch?v=KN7Svhp9-IE&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=5&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Explaining angular project with start and build command | 0009-04</strong></a> we will see</p>
<ul>
<li>How angular works with start &amp; build commands?</li>
<li>How angular delegate npm start to ng serve?</li>
</ul>
<p>This article describes in detail, significance of each command with proper coding snapshots from our video tutorial.</p>
<p>When we give npm start command in visual studio, angular creates ng serve. This is not dependent on your ng, angular redirect it to local ng and local ng is nothing but locally installed angular CLI.</p>
<p><img class="alignnone size-full wp-image-2644" src="{{ site.baseurl }}/assets/2019/11/OE-12.png" alt="" width="790" height="400" /></p>
<p>Now when we do npm Run Build, angular will redirect it to ng build i.e. nothing but local angular CLI. And on compilation it will create dist folder.</p>
<p><img class="alignnone size-full wp-image-2645" src="{{ site.baseurl }}/assets/2019/11/OE-13.png" alt="" width="790" height="400" /></p>
<p>Inside this dist folder you will see all primitive files likeIndex.html file which refers to important files like</p>
<ul>
<li>js that takes care of IE related settings</li>
<li>Style bundle takes care of styles</li>
<li>Vendor bundle having angular related code</li>
<li>Main bundle where we have source related code</li>
</ul>
<p>With each bundle we have map file also that loads their actual typescript file and debug it.</p>
<p><img class="alignnone size-full wp-image-2646" src="{{ site.baseurl }}/assets/2019/11/OE-14.png" alt="" width="790" height="400" /></p>
<p>You can notice we have our project named folder “Product-mart”also being created inside dist folder. If you do not want to create this subfolder inside dist folder you can remove it by deleting it from architect build.</p>
<p><img class="alignnone size-full wp-image-2647" src="{{ site.baseurl }}/assets/2019/11/OE-15.png" alt="" width="790" height="400" /></p>
<p>This dist folder you can easily put anywhere either in your java server or python server or in any of your hosting server. With this we are now familiar with app development in angular CLI, in our subsequent sessions we will see how to host our angular project locally.</p>
<p><iframe src="https://www.youtube.com/embed/KN7Svhp9-IE" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
