---
layout: post
title: Webpack assets run time dependency injection
date: 2019-02-05 19:00:44.000000000 -05:00
type: post

published: true
password: ''
status: publish
categories:
- JavaScript
- Webpack
tags:
- JavaScript
- webpack
meta:
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1610723753;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:775;}i:1;a:1:{s:2:"id";i:668;}i:2;a:1:{s:2:"id";i:493;}}}}
  _wpas_done_all: '1'
  _publicize_twitter_user: "@roopkt"
  _thumbnail_id: '1456'
  advanced_seo_description: 'how to pass public path to webpack assets bundle. '
  _qode-like: '0'
  _edit_last: '1'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  slide_template: default
  wpmm_postgrid_views: '739'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/webpack-assets-run-time-dependency-injection/"
description: "\n\t\t\t\tHow to pass public path to webpack assets bundle. \t\t"
---
<h2>How to Inject Base Assets path URL dependency to webpack CSS bundle?</h2>
<p>In your JavaScript project build by webpack, if you have requirement where at the build time you do not know the URL for the assets. And you want to put the assets base url at run time. For that webpack has global variable that can be set at run-time. Then below is the example for achieving that in webpack..</p>
<h3>Create public-path.js file</h3>
<p>This is the file which takes <code>assetsBaseUrl</code>from the window object. This variable will be passed at run time from the web application.</p>
<pre class="EnlighterJSRAW" data-enlighter-language="null">__webpack_public_path__ = window.assetsBaseUrl || '/';
</pre>
<h3>Add public-path.js to bundle Index file</h3>
<p>Create css.index.js and import public path in the css index</p>
<pre class="EnlighterJSRAW" data-enlighter-language="null">import './public-path';
import './css/mystyle.css';
</pre>
<p>Create a css bundle using css.index.js file only.</p>
<h3>Define Desired Base Url in WebApp</h3>
<p>In the HTML page you do something like this<br />
In the Index.html file add below script tag where you set the required `assetsBaseUrl` before you add css.bundle.js script.</p>
<pre class="EnlighterJSRAW" data-enlighter-language="null"><code>&nbsp;var assetsBaseUrl = 'http://localhost:8002/dist/' 
</code></pre>
<h3>Conclusion</h3>
<p>Webpack has <a href="https://webpack.js.org/api/module-variables/" target="_blank" rel="noopener noreferrer">many global variables</a> that can be set during run-time and those are very helpful for complex JavaScript web apps.</p>
