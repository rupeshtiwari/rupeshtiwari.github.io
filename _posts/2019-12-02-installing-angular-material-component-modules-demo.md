---
layout: post
title: Installing Angular Material component modules - Demo
date: 2019-12-02 06:00:05.000000000 -05:00
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
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609212503;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2778;}i:1;a:1:{s:2:"id";i:2869;}i:2;a:1:{s:2:"id";i:2895;}}}}
  _edit_last: '1'
  _thumbnail_id: '2789'
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
  wpmm_postgrid_views: '492'
  _qode-like: '0'
  _b2s_post_meta: a:6:{s:8:"og_title";s:125:"Installing Angular Material component
    modules - Rupesh Tiwari - Author Developer & Trainer | Professional Full Stack
    Training";s:7:"og_desc";s:136:"As we discussed in our last demo session Installing
    Angular Material Using Angular CLI | Tutorial | 0009-07 we are missing out component";s:8:"og_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/11/RUPESH-99.png";s:10:"card_title";s:52:"Installing
    Angular Material component modules - Demo";s:9:"card_desc";s:160:"As we discussed
    in our last demo session Installing Angular Material Using Angular CLI | Tutorial
    | 0009-07 we are missing out component module installation thr";s:10:"card_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/11/RUPESH-99.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/installing-angular-material-component-modules-demo/"
---
<p>As we discussed in our last demo session <a href="https://www.youtube.com/watch?v=ek63pA4rqvA&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=7" target="_blank" rel="noopener noreferrer"><strong>Installing Angular Material Using Angular CLI | Tutorial | 0009-07 </strong></a>we are missing out component module installation through single command angular material installation process. We need to install component module manually from angular material site. But the issue is:</p>
<ul>
<li>Which module we need to install, how to decide this?</li>
</ul>
<p>This is very common problem most of the developers face. They do not know which of the component module they need to install. So the good idea is to create one dedicated module and put some of the imported common material modules there. This way we can put some common things like buttons/Icons/checkbox/dropdown etc in one place. In this demo session  <strong><a href="https://www.youtube.com/watch?v=NH4U0_PCTAk&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=8" target="_blank" rel="noopener noreferrer">Angular Material Components | Demo | 0009-08</a><em>. </em></strong>to demonstrate this we have created a <strong>material-module.ts </strong>and imported it in main file <strong>app.module.ts</strong>.</p>
<p><img class="alignnone size-full wp-image-2793" src="{{ site.baseurl }}/assets/2019/12/AMCD1.png" alt="" width="696" height="391" /></p>
<p><img class="alignnone size-full wp-image-2792" src="{{ site.baseurl }}/assets/2019/12/AMCD2.png" alt="" width="700" height="394" /></p>
<p>Now let’s try to put one raised button and see its outcome in our project. For that first we need to add required code in our app module.</p>
<p><img class="alignnone size-full wp-image-2791" src="{{ site.baseurl }}/assets/2019/12/AMCD3.png" alt="" width="699" height="393" /></p>
<p>Then we can compile and see its output in our newly developed angular app project like below:</p>
<p><img class="alignnone size-full wp-image-2790" src="{{ site.baseurl }}/assets/2019/12/AMCD4.png" alt="" width="699" height="394" /></p>
<p>In this way we can try other things like lists/cards/dropdowns to show our products in our angular app project.</p>
<p><iframe src="https://www.youtube.com/embed/NH4U0_PCTAk" width="700" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
