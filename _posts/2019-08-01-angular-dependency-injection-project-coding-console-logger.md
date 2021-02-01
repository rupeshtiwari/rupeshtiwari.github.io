---
layout: post
title: Angular Dependency Injection Project coding – Console Logger
date: 2019-08-01 06:00:41.000000000 -04:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Angular
- Dependency Injection
tags:
- Angular
- Dependency Injection
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1594766783;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2514;}i:1;a:1:{s:2:"id";i:2505;}i:2;a:1:{s:2:"id";i:2511;}}}}
  _edit_last: '1'
  _thumbnail_id: '2491'
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
  wpmm_postgrid_views: '374'
  _qode-like: '0'
  _b2s_post_meta: a:6:{s:8:"og_title";s:127:"Angular Dependency Injection Project
    coding – - Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack
    Training";s:7:"og_desc";s:148:"In our second angular coding session Angular Coding
    Session Learn Dependency Injection | Practical | 2/8, we will see how to use console
    logger as a";s:8:"og_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-89.png";s:10:"card_title";s:127:"Angular
    Dependency Injection Project coding – - Rupesh Tiwari - Author Developer & Trainer
    | Professional Full Stack Training";s:9:"card_desc";s:148:"In our second angular
    coding session Angular Coding Session Learn Dependency Injection | Practical |
    2/8, we will see how to use console logger as a";s:10:"card_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-89.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/angular-dependency-injection-project-coding-console-logger/"
---
<p>In our second angular coding session <strong><a href="https://www.youtube.com/watch?v=AIFbohEG1xs&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=29" target="_blank" rel="noopener noreferrer">Angular Coding Session Learn Dependency Injection | Practical | 2/8</a><em>, </em></strong>we will see how to use console logger as a service in our project. We will see how to differentiate between various types of modules:</p>
<ul>
<li>Shared module</li>
<li>Feature module</li>
<li>Core module.</li>
</ul>
<p>In Feature module we want to share multiple features, for example here we have sales module, pricing module as they have separate business use cases in them. Similarly we have shared module which we want to share on multiple features for example star rating as its two different instances being shared in both pricing &amp; sales modules.  In core module we will keep all of the core services which should be singleton throughout the app like logger, home page.</p>
<p>We will see why it is a good practice to keep some services which are common and has to be a single instance throughout the application in the core module. Also this session explains best practices in angular coding like how we should try to use shortcuts provided by angular to reduce redundant coding. For example, we can use angular shortcut in console logger by using injectables decorator and writing {providedIn: ‘root’} to ask angular to provide consolelogger service in the root. Now we need not to go to Appmodule and register consolelogger service there. These angular shortcuts help us in writing minimum required code.</p>
<p>Below is snapshot of our coding session:</p>
<p><img class="alignnone size-full wp-image-2500" src="{{ site.baseurl }}/assets/2019/08/DI_Coding_2.png" alt="" width="790" height="419" /></p>
<p><iframe src="https://www.youtube.com/embed/AIFbohEG1xs" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
