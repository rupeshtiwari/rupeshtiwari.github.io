---
layout: post
title: What is the Scope of Dependency in Angular?
date: 2019-05-27 05:38:46.000000000 -04:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- AngularJS
- Dependency Injection
tags:
- Angular
- Dependency Injection
meta:
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609993629;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2514;}i:1;a:1:{s:2:"id";i:2140;}i:2;a:1:{s:2:"id";i:2353;}}}}
  _edit_last: '1'
  _thumbnail_id: '2015'
  wpmm_postgrid_views: '427'
  _b2s_post_meta: a:6:{s:8:"og_title";s:43:"What is the Scope of Dependency in Angular?";s:7:"og_desc";s:160:"Scope
    of Dependency in Angular is very important concept to understand for a full stack
    developer. This is primarily asked question by interviewer in many diffe";s:8:"og_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png";s:10:"card_title";s:43:"What
    is the Scope of Dependency in Angular?";s:9:"card_desc";s:160:"Scope of Dependency
    in Angular is very important concept to understand for a full stack developer.
    This is primarily asked question by interviewer in many diffe";s:10:"card_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png";}
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
  _yoast_wpseo_primary_category: '179'
  _qode-like: '0'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/what-is-the-scope-of-dependency-in-angular/"
---
<p>Scope of Dependency in Angular is very important concept to understand for a full stack developer. This is primarily asked question by interviewer in many different forms.</p>
<p>Let’s understand the basics of this concept through our video tutorial <a href="https://www.youtube.com/watch?v=JhiadEW3Sdo" target="_blank" rel="noopener noreferrer"><strong>0008-17- angular: Injector and Provider Relationship 3/4.</strong></a> It explains how scope of dependency is defined at each component or module and how it serves the purpose in real world projects.</p>
<p>Modules, components or directives use injectors and Injector use provider to finally get the dependency. At the root node of a module if we define a provider, then its scope is entire module where it is defined. Whichever node a provider is defined, it is scoped to that node and its hierarchy. We know that component or module get Injectors at bootstrapping time. Injectors uses provider to find out any dependency. If it’s not available at its provider, it will go to its parent component and ask the dependency there with same DI token. If it gets there it will give or its goes to above hierarchy until it gets the dependency.</p>
<p><img class="alignnone size-full wp-image-2149" src="{{ site.baseurl }}/assets/2019/05/IP-3.png" alt="" width="749" height="421" /></p>
<p>At any time at any node if you define another provider for the same DI token you will get new independent instance there. This makes it a very powerful concept in angular as for a list of items we can define independent instance of same service for each item. In AngularJS if we define a service it was singleton or global throughout the app, and this shortcoming was overcome through this concept in Angular 2.</p>
