---
layout: post
title: Integrating Toolbar Component from Angular CLI - Demo
date: 2020-01-06T11:00:12.000Z
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
  _edit_last: "1"
  _wpcom_is_markdown: "1"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609380000;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2850;}i:1;a:1:{s:2:"id";i:2770;}i:2;a:1:{s:2:"id";i:3252;}}}}
  _thumbnail_id: "2870"
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
  wpmm_postgrid_views: "260"
  _qode-like: "0"
  _b2s_post_meta: >-
    a:6:{s:8:"og_title";s:126:"Integrating Toolbar Component from Angular CLI -
    Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack
    Training";s:7:"og_desc";s:128:"In this demo session Integrating Toolbar |
    Angular CLI | Demo | 0009-13 we will see how to integrate toolbar in our
    angular
    app.";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/12/RUPESH-104.png";s:10:"card_title";s:53:"Integrating
    Toolbar Component from Angular CLI - Demo";s:9:"card_desc";s:160:"In this
    demo session Integrating Toolbar | Angular CLI | Demo | 0009-13 we will see
    how to integrate toolbar in our angular app. In order to put toolbar in our
    ";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/12/RUPESH-104.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /integrating-toolbar-component-from-angular-cli-demo/

---

<p>In this demo session <a href="https://www.youtube.com/watch?v=G-b1rJI9RWA&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=14&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Integrating Toolbar | Angular CLI | Demo | 0009-13 </strong></a>we will see how to integrate toolbar in our angular app. In order to put toolbar in our app component <strong>app.component.html</strong> we need angular material component. As we already imported material module earlier in our <strong>app.module.ts</strong>, now we can directly pull toolbar code from angular material site. We will go to toolbar under Navigation heading and take its basic source code.</p>
<p><img class="alignnone size-full wp-image-2877" src="{{ site.baseurl }}/assets/2020/01/TC1.png" alt="" width="856" height="482" /></p>
<p>This source code we will put in app component and rename it to Product Mart as our brand name.</p>
<p><img class="alignnone size-full wp-image-2876" src="{{ site.baseurl }}/assets/2020/01/TC2.png" alt="" width="854" height="481" /></p>
<p>Finally we can see it reflecting in our app once we refresh it. It will be shown as a header in our tool bar.</p>
<p><img class="alignnone size-full wp-image-2875" src="{{ site.baseurl }}/assets/2020/01/TC3.png" alt="" width="854" height="481" /></p>
<p>Next we will focus on putting navigation in our toolbar like <strong>Home</strong> button &amp; <strong>Product</strong> button. So that when we click on Home button, it redirects us to Home page and on clicking Product button, we will be redirected to products page.</p>
<p>Like we did earlier, this time also we will take basic code snippet for navigation from angular material site itself. And then we will modify that basic code as per our requirement. To do this first we will have code for putting buttons in a row in our tool bar.</p>
<p><img class="alignnone size-full wp-image-2874" src="{{ site.baseurl }}/assets/2020/01/TC4.png" alt="" width="855" height="481" /></p>
<p>Next we will try to get some code for doing navigation using anchor. For this we have code snippets in angular material site under ‘Routing &amp; Navigation’ heading.</p>
<p><img class="alignnone size-full wp-image-2873" src="{{ site.baseurl }}/assets/2020/01/TC5.png" alt="" width="851" height="480" /></p>
<p>Let’s do some design modification to fit it into our product Mart app and organize code for two buttons Home &amp; Products.</p>
<p><img class="alignnone size-full wp-image-2872" src="{{ site.baseurl }}/assets/2020/01/TC6.png" alt="" width="852" height="480" /></p>
<p>After making all changes and checking in our code, let’s see final outcome from this session on output window.</p>
<p><img class="alignnone size-full wp-image-2871" src="{{ site.baseurl }}/assets/2020/01/TC7.png" alt="" width="853" height="477" /></p>
<p><iframe width="790" height="350" src="https://www.youtube.com/embed/G-b1rJI9RWA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
