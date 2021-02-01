---
layout: post
title: Working of Dependency Injector or Container
date: 2019-05-09 07:52:41.000000000 -04:00
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
  _edit_last: '1'
  _thumbnail_id: '2015'
  _snap_forceSURL: '2'
  snap_MYURL: ''
  snapEdIT: '1'
  snapFB: 'a:1:{i:0;a:24:{s:2:"do";s:1:"1";s:5:"nName";s:11:"Facebook #0";s:9:"msgFormat";s:51:"New
    post (%TITLE%) has been published on %SITENAME%";s:6:"appKey";s:35:"x5g9ar2e4x27484r2r2c4c48424r284x2v2";s:6:"appSec";s:69:"d3h0ax2k5y2j5k5r2p274642454w2b4y2c4v294c4t2l5d41354u2u2d494v2s234l594";s:8:"postType";s:1:"A";s:8:"apiToUse";s:4:"nxv2";s:7:"fltrsOn";i:0;s:5:"fltrs";a:2:{s:23:"nxs_count_meta_compares";s:1:"1";s:23:"nxs_count_term_compares";s:1:"1";}s:7:"proxyOn";i:0;s:7:"useSURL";i:0;s:1:"v";i:350;s:3:"tpt";s:0:"";s:4:"pgID";s:0:"";s:15:"pageAccessToken";s:0:"";s:6:"imgUpl";s:1:"T";s:10:"riComments";i:0;s:12:"riCommentsAA";i:0;s:5:"nDays";s:1:"0";s:4:"nHrs";s:1:"0";s:4:"nMin";s:1:"0";s:5:"proxy";a:2:{s:5:"proxy";s:0:"";s:2:"up";s:0:"";}s:9:"wpImgSize";s:4:"full";s:5:"glpid";s:0:"";}}'
  snap_isAutoPosted: '1557388361'
  wpmm_postgrid_views: '320'
  _b2s_post_meta: a:6:{s:8:"og_title";s:43:"Working of Dependency Injector or Container";s:7:"og_desc";s:160:"Dependency
    Injection Container or Injector is basically a static or global thing which is
    being used throughout the app to inject dependencies or objects. It kn";s:8:"og_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png";s:10:"card_title";s:43:"Working
    of Dependency Injector or Container";s:9:"card_desc";s:160:"Dependency Injection
    Container or Injector is basically a static or global thing which is being used
    throughout the app to inject dependencies or objects. It kn";s:10:"card_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png";}
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
  _qode-like: '0'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609209634;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:295;}i:1;a:1:{s:2:"id";i:2394;}i:2;a:1:{s:2:"id";i:918;}}}}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/working-of-dependency-injector-or-container/"
---
<p>Dependency Injection Container or Injector is basically a static or global thing which is being used throughout the app to inject dependencies or objects. It knows how to incorporate and configure dependencies. To do this, it needs information about the constructor arguments and the relationships between the objects. In simple words, A Dependency Injection Container manages objects right from their instantiation to their configuration. Its main responsibilities are classified as:</p>
<ul>
<li>Owning map or container which stores info about token &amp; dependencies.</li>
<li>Creating the objects or dependencies.</li>
<li>To identify which classes require those objects – Maintaining the scope.</li>
<li>Provide all those objects to required classes – Injecting</li>
</ul>
<p>If there is any change in objects, then Dependency Container looks into it without disturbing or affecting the concerned class using those objects. In this way in case of any future change also, Dependency Injector takes responsibility to provide the appropriate objects to the class.</p>
<p>To know more on DI Container working and its responsibilities, visit our tutorial video <a href="https://www.youtube.com/watch?v=nf-4vmqcYYY" target="_blank" rel="noopener noreferrer"><strong>0008-4- What is Dependency Injection Container or Injector?</strong></a></p>
<p><iframe width="790" height="350" src="https://www.youtube.com/embed/nf-4vmqcYYY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
