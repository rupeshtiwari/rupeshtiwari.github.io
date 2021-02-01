---
layout: post
title: What is multi True provider in angular?
date: 2019-07-07 10:12:00.000000000 -04:00
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
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1612239114;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2390;}i:1;a:1:{s:2:"id";i:2353;}i:2;a:1:{s:2:"id";i:2386;}}}}
  _b2s_post_meta: 'a:6:{s:8:"og_title";s:39:"What is multi True provider in angular?";s:7:"og_desc";s:160:"Multi:
    true means that one provider token provides an array of elements. Using multi:
    true we tell Angular that the provider is a multi provider. This is use";s:8:"og_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-84.png";s:10:"card_title";s:39:"What
    is multi True provider in angular?";s:9:"card_desc";s:160:"Multi: true means that
    one provider token provides an array of elements. Using multi: true we tell Angular
    that the provider is a multi provider. This is use";s:10:"card_image";s:70:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/07/RUPESH-84.png";}'
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
  wpmm_postgrid_views: '1228'
  _qode-like: '0'
  _thumbnail_id: '2400'
  _inpost_head_script: |-
    a:1:{s:19:"synth_header_script";s:66:"<script src="https://gumroad.com/js/gumroad-embed.js"></script>
     ";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/what-is-multi-true-provider-in-angular/"
---
<p>Multi: true means that one provider token provides an array of elements. Using multi: true we tell Angular that the provider is a multi provider. This is used mostly in those scenarios where we use primitives or chunk of values.</p>
<p>Generally we do not use it in injecting the array of classes, but there are some use cases in framework where we do. Let’s understand with one real world example. Suppose we are using two services pricing service and sales service. In sales we are doing order and in pricing we are charging for that order. Both of them have their own configs and at one place we want to put all configs together, this is the place where we use multi: true. So when we need multiple strings to be passed as a single array, then we use multi: true.</p>
<p>To get more details, please visit our video <a href="https://www.youtube.com/watch?v=DNKGUymAC_Q" target="_blank" rel="noopener noreferrer"><strong>Multi True Provider | mulTitrue | Angular DI Tutorial</strong></a></p>
<p><img class="alignnone size-full wp-image-2399" src="{{ site.baseurl }}/assets/2019/07/84.png" alt="" width="790" height="394" /></p>
<p>As we mentioned earlier with multi providers, we can provide multiple values for a single token in DI. Usually, when we register multiple providers with the same token the last one wins.<br />For example all directives for router support routerLink, routerOutlet are provided by ROUTER_DIRECTIVES. If a new provider is registered with the token ROUTER_DIRECTIVES, then it overrides the previously registered directives. If multi: true (on the first registered and the new provider) is set, the new directives are added to the previously registered directives instead of overriding.</p>
<p><iframe src="https://www.youtube.com/embed/DNKGUymAC_Q" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
<p><!-- wp:html --></p>
<div class="gumroad-product-embed" data-gumroad-product-id="UJClm"><a href="https://gumroad.com/l/UJClm">Loading...</a></div>
<p><!-- /wp:html --></p>
