---
layout: post
title: "Prototype Pattern: Essential JavaScript Concepts"
date: 2019-09-30T10:00:15.000Z
type: post
published: true
comments: true
social-share: true
categories:
  - JavaScript
tags:
  - fullstackmaster
  - JavaScript
  - rupeshtiwari
meta:
  _wpcom_is_markdown: "1"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609993538;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2595;}i:1;a:1:{s:2:"id";i:2586;}i:2;a:1:{s:2:"id";i:118;}}}}
  _edit_last: "1"
  _thumbnail_id: "2605"
  slide_template: default
  _wpb_vc_js_status: "false"
  _yoast_wpseo_content_score: "30"
  qode_page_background_image_fixed: "yes"
  qode_hide-featured-image: "no"
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _yoast_wpseo_primary_category: "195"
  wpmm_postgrid_views: "431"
  _qode-like: "0"
  _b2s_post_meta: >-
    a:6:{s:8:"og_title";s:48:"Prototype Pattern: Essential JavaScript
    Concepts";s:7:"og_desc";s:160:"The Prototype Pattern creates new objects,
    but rather than creating non-initialized objects it returns objects that are
    initialized with values it copied from
    a";s:8:"og_image";s:81:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/09/RUPESH-55-javascript.png";s:10:"card_title";s:48:"Prototype
    Pattern: Essential JavaScript Concepts";s:9:"card_desc";s:160:"The Prototype
    Pattern creates new objects, but rather than creating non-initialized
    objects it returns objects that are initialized with values it copied from
    a";s:10:"card_image";s:81:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/09/RUPESH-55-javascript.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /prototype-pattern-essential-javascript-concepts/
toc: true
---

<p>The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype or sample object. The Prototype pattern is also known as the Properties pattern. In our video tutorial <strong><a href="https://www.youtube.com/watch?v=nrZE5dHXMXI" target="_blank" rel="noopener noreferrer">JavaScript Concepts- Prototype Pattern | 0004-14</a> </strong>we will see</p>
<ul>
<li>What is Prototype Pattern?</li>
<li>When do we need it?</li>
<li>How to create class using Prototype Pattern?</li>
</ul>
<p>There are many different paradigms available to explain this pattern. However we are not choosing a regular one as its bit difficult to understand. Let’s understand it with easy one, say we have requirement where we want to have multiple instances and want to save memory as well. In this scenario developer can use prototype pattern. Whereas module pattern is also memory efficient but it has single instance only. So whenever we want to have class and also want to save memory we go with prototype pattern.</p>
<p>In this, each and every constructor function it has property called as prototype associated with it. Whenever an object is created, by default it points to some prototypes. Thus, every object has a prototype linked to it. Benefit to use this prototype is each instance of constructor function is by default linked to <em>function.prototype</em> object.</p>
<p>JavaScript also uses this prototype pattern to achieve inheritance. When an object gets attached to prototype chain of another object then its properties and methods are available in that object. In our next videos we will see how prototype is helpful to do inheritance. Basically we can say people use prototype pattern for two things, first is to create any class by default in prototype pattern to save memory &amp; to do less maintenance and second to do inheritance.</p>
<p>Please visit our GitHub code base<strong> <a href="https://github.com/rupeshtiwari/javascript-concepts" target="_blank" rel="noopener noreferrer">https://github.com/rupeshtiwari/javascript-concepts</a> </strong>to get the code snippet for this article. Snapshot below:</p>
<p><img class="alignnone size-full wp-image-2596" src="{{ site.baseurl }}/assets/2019/09/JS-Md.png" alt="" width="623" height="551" /></p>
<p><iframe src="https://www.youtube.com/embed/nrZE5dHXMXI" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
