---
layout: post
title: Environment setup & Installation- Angular app development
date: 2019-10-28 06:00:55.000000000 -04:00
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
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1606705555;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2643;}i:1;a:1:{s:2:"id";i:775;}i:2;a:1:{s:2:"id";i:2995;}}}}
  _edit_last: '1'
  _thumbnail_id: '2639'
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
  _yoast_wpseo_primary_category: '178'
  wpmm_postgrid_views: '370'
  _qode-like: '0'
  _b2s_post_meta: a:6:{s:8:"og_title";s:125:"Environment setup & Installation- Angular
    app - Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack Training";s:7:"og_desc";s:149:"Let’s
    begin our Angular app development project from scratch. This article explains
    each step very minutely, so that you do not feel lost anywhere.";s:8:"og_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/10/RUPESH-6.png";s:10:"card_title";s:57:"Environment
    setup & Installation- Angular app development";s:9:"card_desc";s:160:"Let’s begin
    our Angular app development project from scratch. This article explains each step
    very minutely, so that you do not feel lost anywhere. It also sh";s:10:"card_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/10/RUPESH-6.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/environment-setup-installation-angular-app-development/"
---
<p>Let’s begin our Angular app development project from scratch. This article explains each step very minutely, so that you do not feel lost anywhere. It also showcases screenshots from our classroom video tutorial to make it more practical. You can visit our video session <a href="https://www.youtube.com/watch?v=t_cLb4OyAsA&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=4&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Creating Angular App using Angular CLI | 0009-03 </strong></a>anytime to get an insight into it.</p>
<p>The very first step is to set up our environment to work on. Step by step process is explained below:<br />
Download Node.js for your windows/MAC system. It can be 32 bit /64 bit depending on your requirement.<br />
<img class="alignnone size-full wp-image-2631" src="{{ site.baseurl }}/assets/2019/10/OE-4.png" alt="" width="790" height="400" /></p>
<p>After installation we can check in PowerShell which version is installed or if it’s already there in our system we can check which version we have by using command node -v. Along with this we can check which npm version node.js has installed by using npm –v.<br />
<img class="alignnone size-full wp-image-2638" src="{{ site.baseurl }}/assets/2019/10/OE-5.png" alt="" width="790" height="450" /></p>
<p>Next is we need some editor, here we have used visual studio editor VScode. We can download &amp; install it from their official site.<br />
<img class="alignnone size-full wp-image-2637" src="{{ site.baseurl }}/assets/2019/10/OE-6.png" alt="" width="790" height="400" /></p>
<p>With above three steps we are done with environmental setup and now we will install Angular CLI. This is something we want to install globally throughout our project. However while installing it globally, angular team also put angular CLI version locally. To install angular CLI we use command npm i –g @angular/cli<br />
<img class="alignnone size-full wp-image-2636" src="{{ site.baseurl }}/assets/2019/10/OE-7.png" alt="" width="790" height="450" /></p>
<p>To check version we can use command ng –version<br />
<img class="alignnone size-full wp-image-2635" src="{{ site.baseurl }}/assets/2019/10/OE-8.png" alt="" width="790" height="450" /></p>
<p>In above steps we completed all prerequisite to kick start our app development. Further we need to understand an important command to create angular app.<br />
<img class="alignnone size-full wp-image-2634" src="{{ site.baseurl }}/assets/2019/10/OE-9.png" alt="" width="790" height="400" /></p>
<p>Now we are all set to create our first angular project, we name it as PRODUCT MART. This is an Angular App where we are using Angular Material to develop pages and we are making this app from the scratch to learn angular.<br />
<img class="alignnone size-full wp-image-2633" src="{{ site.baseurl }}/assets/2019/10/OE-10.png" alt="" width="790" height="450" /></p>
<p>In our video session we have explained all created project files in detail in visual studio. Also it explains the importance of each file like Karma.config.js, polyfills.ts, angular.json etc. Sometimes people do ask like why my angular project does not work in IE? So for that answer lies in polyfill files, where we need to uncomment few codes so that our project become compatible with all required browsers.<br />
<img class="alignnone size-full wp-image-2632" src="{{ site.baseurl }}/assets/2019/10/OE-11.png" alt="" width="790" height="400" /></p>
<p>Also all our code is checked in into GitHub repository. Please visit our GitHub code base <strong><a href="https://github.com/rupeshtiwari/product-mart/tree/master" target="_blank" rel="noopener noreferrer">https://github.com/rupeshtiwari/product-mart/tree/master</a></strong> to get the code snippet for this project.</p>
<p><iframe src="https://www.youtube.com/embed/t_cLb4OyAsA" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
