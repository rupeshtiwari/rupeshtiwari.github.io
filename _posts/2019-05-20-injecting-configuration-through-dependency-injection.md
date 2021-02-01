---
layout: post
title: Injecting Configuration through Dependency Injection
date: 2019-05-20 05:23:52.000000000 -04:00
type: post

published: true
comments: true
social-share: true
categories:
- Angular
- Dependency Injection
tags:
- Angular
- Dependency Injection
meta:
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1606569434;s:7:"payload";a:0:{}}}
  _edit_last: '1'
  wpmm_postgrid_views: '429'
  _b2s_post_meta: a:6:{s:8:"og_title";s:52:"Injecting Configuration through Dependency
    Injection";s:7:"og_desc";s:160:"Most of the applications connect to multiple environments
    during their lifecycle. Environment which your application needs to connect can
    differ depending on th";s:8:"og_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png";s:10:"card_title";s:52:"Injecting
    Configuration through Dependency Injection";s:9:"card_desc";s:160:"Most of the
    applications connect to multiple environments during their lifecycle. Environment
    which your application needs to connect can differ depending on th";s:10:"card_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/04/AngularI.png";}
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
  _qode-like: '0'
  _thumbnail_id: '2015'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/injecting-configuration-through-dependency-injection/"
---
<p>Most of the applications connect to multiple environments during their lifecycle. Environment which your application needs to connect can differ depending on the current phase of the project. For example, you may be using a dev environment during development, a test environment during testing, Staging environment during UAT and a production environment for the final deployment of your App. Switching between these environments can be cumbersome and prone to errors. You can’t simply hardcode these environment specific values in your project and make your life difficult. Dependency Injection framework in angular, provide us a way to inject configuration as service to configure the environment and choose a configuration or environment based on the variable. To inject Configuration details in our app we can define Config files with values like Env, API, Mode, DB in a defined schema and these values differ from one environment to other.</p>
<p><img class="alignnone size-full wp-image-2095" src="{{ site.baseurl }}/assets/2019/05/Variables-1.png" alt="" width="2000" height="700" />This is how we can make our application so dynamic or configurable that we can inject our Config files/objects as a dependency. Have a look into our video <a href="https://www.youtube.com/watch?v=iUmjgYD8gfA" target="_blank" rel="noopener noreferrer"><strong>0008-6- angular: How to Inject Configs as Service? </strong></a>to get more details on this topic. In <a href="https://www.youtube.com/watch?v=iUmjgYD8gfA" target="_blank" rel="noopener noreferrer"><strong>video</strong></a>, we have described the scenario in detail where we have injected the Config as regular literal objects into your components or services using Angular Dependency Injection.</p>
<p><iframe src="https://www.youtube.com/embed/iUmjgYD8gfA" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
