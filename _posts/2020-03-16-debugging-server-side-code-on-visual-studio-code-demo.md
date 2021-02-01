---
layout: post
title: Debugging Server Side Code on Visual Studio Code - Demo
date: 2020-03-16 06:00:03.000000000 -04:00
type: post

published: true
comments: true
social-share: true
categories:
- Angular
- JavaScript
tags:
- Angular
- fullstackmaster
- JavaScript
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1610971938;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:3033;}i:1;a:1:{s:2:"id";i:3011;}i:2;a:1:{s:2:"id";i:2643;}}}}
  _edit_last: '1'
  _thumbnail_id: '3031'
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
  wpmm_postgrid_views: '204'
  _qode-like: '0'
  _b2s_post_meta: a:6:{s:8:"og_title";s:55:"Debugging Server Side Code on Visual Studio
    Code - Demo";s:7:"og_desc";s:231:"Gradually, as our code base will grow it will
    become complex and we will face difficulties in debugging our code. In this session
    Debugging Server Side Code on Visual Studio Code | 0009-24 we will see How to
    debug server side code.";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/02/RUPESH-117.png";s:10:"card_title";s:55:"Debugging
    Server Side Code on Visual Studio Code - Demo";s:9:"card_desc";s:160:"Gradually,
    as our code base will grow it will become complex and we will face difficulties
    in debugging our code. In this session Debugging Server Side Code on ";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/02/RUPESH-117.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/debugging-server-side-code-on-visual-studio-code-demo/"
---
<p>Gradually, as our code base will grow it will become complex and we will face difficulties in debugging our code. In this session <a href="https://www.youtube.com/watch?v=Mzm-ikcEMeE&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=25&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Debugging Server Side Code on Visual Studio Code | 0009-24 </strong></a>we will see How to debug server side code.</p>
<p>First we will see how to enable our code base for server side debugging. For this in the VSCode, we have .vscode folder where we have <strong>task.json</strong> file which will define how task works. Similarly, we will create <strong>launch.json</strong> file for our debugging purpose. Here we will define all properties related to server which will help us in debugging. After adding all required properties, we can see our “Server Debug” configuration is added in Debugger tool on left top corner.</p>
<p><img class="alignnone size-full wp-image-3030" src="{{ site.baseurl }}/assets/2020/03/24.1.png" alt="" width="703" height="404" /></p>
<p>Once we click on green Debug button, it will run <strong>npm run debug</strong> command at the backend and we can observe all our process in Debug Console.</p>
<p><img class="alignnone size-full wp-image-3029" src="{{ site.baseurl }}/assets/2020/03/24.2.png" alt="" width="697" height="392" /></p>
<p>In above snapshot, it is showing error because in our package json debug script is missing. So now we will create a debug script in VSCode to stop the server process.</p>
<p><img class="alignnone size-full wp-image-3028" src="{{ site.baseurl }}/assets/2020/03/24.3.png" alt="" width="698" height="397" /></p>
<p>After adding this debug script, we will once again hit debug button and go back to debug Console to see what’s going on there.</p>
<p><img class="alignnone size-full wp-image-3027" src="{{ site.baseurl }}/assets/2020/03/24.4.png" alt="" width="699" height="398" /></p>
<p>On Debug console we can see our debugger has started listening, server is started on required port and database connection is setup.</p>
<p><img class="alignnone size-full wp-image-3026" src="{{ site.baseurl }}/assets/2020/03/24.5.png" alt="" width="700" height="394" /></p>
<p>Now let’s check what happens when user do login into our product mart app. We can check each detail step by step in debug mode.</p>
<p>First we will put the Debugger on route file and see what is coming in request object. We can validate the body part and see email &amp; password is coming.</p>
<p><img class="alignnone size-full wp-image-3025" src="{{ site.baseurl }}/assets/2020/03/24.6.png" alt="" width="698" height="392" /></p>
<p>Like this we can check details coming in other functions as well. Next we will go to controller file and check few functions there like validation function which will validate the user details passed by user while logging in, with the details present in database.</p>
<p><img class="alignnone size-full wp-image-3024" src="{{ site.baseurl }}/assets/2020/03/24.7.png" alt="" width="699" height="395" /></p>
<p>Similarly, in next session <a href="https://www.youtube.com/watch?v=8AUSRUYQxik&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=26&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>0009-25- Debugging Angular App in Visual Studio Code (VSCode) </strong></a>we will learn how to debug angular code base.</p>
<p><iframe src="https://www.youtube.com/embed/Mzm-ikcEMeE" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
