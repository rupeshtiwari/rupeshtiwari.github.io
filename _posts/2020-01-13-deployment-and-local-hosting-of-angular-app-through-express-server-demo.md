---
layout: post
title: Deployment and local hosting of angular app through Express server - Demo
date: 2020-01-13 06:00:43.000000000 -05:00
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
- rupeshtiwari
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1610275031;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2840;}i:1;a:1:{s:2:"id";i:2953;}i:2;a:1:{s:2:"id";i:2643;}}}}
  _edit_last: '1'
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
  wpmm_postgrid_views: '276'
  _qode-like: '0'
  _thumbnail_id: '2891'
  _b2s_post_meta: a:6:{s:8:"og_title";s:119:"Deployment and local hosting of angular
    - Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack Training";s:7:"og_desc";s:148:"In
    our previous demo sessions we successfully created our Product Mart app. Now we
    are ready to deploy our code to so called production environment.";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/12/RUPESH-105.png";s:10:"card_title";s:73:"Deployment
    and local hosting of angular app through Express server - Demo";s:9:"card_desc";s:160:"In
    our previous demo sessions we successfully created our Product Mart app. Now we
    are ready to deploy our code to so called production environment. For this we";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/12/RUPESH-105.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/deployment-and-local-hosting-of-angular-app-through-express-server-demo/"
---
<p>In our previous demo sessions we successfully created our Product Mart app. Now we are ready to deploy our code to so called production environment. For this we need to follow below steps and all these steps are also explained in our demo session <a href="https://www.youtube.com/watch?v=T_tu5Yw-rKQ&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=15&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Running Local Server | Express | Angular | Demo | 0009-14 </strong></a>in detail.</p>
<p>First thing we need to do is to prepare production deployment strategy. It includes:</p>
<p>Compiling our code in production environment. For this we need to create prod build script.</p>
<p><img class="alignnone size-full wp-image-2890" src="{{ site.baseurl }}/assets/2020/01/RL1.png" alt="" width="852" height="481" /></p>
<p>Best practice here is to re-use existing command, so that if we change one, all of the dependencies automatically change. That’s the reason we have not written <strong>ng build</strong> command twice, we simply called existing <strong>ng build</strong> through <strong>npm run build</strong> command and then passed the <strong>prod</strong> (production) parameter.</p>
<p>Next is putting all single HTML, assets and other artifacts in dist folder.</p>
<p><img class="alignnone size-full wp-image-2889" src="{{ site.baseurl }}/assets/2020/01/RL2.png" alt="" width="852" height="481" /></p>
<p>Second, we need to create a server to host our project. Here in MEAN stack, we are going to use express as our production server. Will install express first.</p>
<p><img class="alignnone size-full wp-image-2888" src="{{ site.baseurl }}/assets/2020/01/RL3.png" alt="" width="854" height="480" /></p>
<p>Now let’s create server folder and then index file. Inside this we will write code to use express as a server.</p>
<p><img class="alignnone size-full wp-image-2887" src="{{ site.baseurl }}/assets/2020/01/RL4.png" alt="" width="853" height="479" /></p>
<p>In above step, important thing to notice is we are using <strong>env.PORT </strong>(environment property) instead of hard coding. This is to pull all environment variables from hosting server, so that we can deploy our code to any environment without any need of making code changes. This is one of the 12 best practices from Twelve-Factor theory.</p>
<p><img class="alignnone size-full wp-image-2886" src="{{ site.baseurl }}/assets/2020/01/RL5.png" alt="" width="846" height="474" /></p>
<p>Next we will define destination path and other hosting related stuff in our <strong>js</strong> file of server folder.</p>
<p><img class="alignnone size-full wp-image-2885" src="{{ site.baseurl }}/assets/2020/01/RL6.png" alt="" width="853" height="482" /></p>
<p>In order to run JavaScript written in index file, we need to write another script in <strong>json</strong> file.</p>
<p><img class="alignnone size-full wp-image-2884" src="{{ site.baseurl }}/assets/2020/01/RL7.png" alt="" width="852" height="482" /></p>
<p>Finally we can see our Product-Mart app running on express server by writing <strong>npm run strat:server</strong> command in powershell.</p>
<p><img class="alignnone size-full wp-image-2883" src="{{ site.baseurl }}/assets/2020/01/RL8.png" alt="" width="852" height="480" /></p>
<p><img class="alignnone size-full wp-image-2882" src="{{ site.baseurl }}/assets/2020/01/RL9.png" alt="" width="851" height="483" /></p>
<p>All this code is also checked-in into our GitHub repository. You can visit our code base <a href="https://github.com/rupeshtiwari/product-mart/tree/workshop-session-4-12" target="_blank" rel="noopener noreferrer"><strong>https://github.com/rupeshtiwari/product-mart/tree/workshop-session-4-12</strong></a> to get more insight of it anytime.</p>
<p>In our upcoming demo sessions we will focus on:</p>
<ul>
<li>Login/Registration</li>
<li>Integrating app with Mongo DB</li>
<li>Deploying prod code to cloud platform like Heroku</li>
</ul>
<p><iframe src="https://www.youtube.com/embed/T_tu5Yw-rKQ" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
