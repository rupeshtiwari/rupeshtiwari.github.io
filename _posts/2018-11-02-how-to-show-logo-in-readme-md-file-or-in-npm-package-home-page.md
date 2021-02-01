---
layout: post
title: How to Show Logo in ReadMe.Md file or in npm Package Home Page
date: 2018-11-02 12:06:26.000000000 -04:00
type: post

published: true
password: ''
status: publish
categories:
- JavaScript
tags: [JavaScript, node.js]
meta:
  _publicize_twitter_user: "@roopkt"
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1611578741;s:7:"payload";a:0:{}}}
  _wpas_done_all: '1'
  _thumbnail_id: '1471'
  _qode-like: '0'
  _oembed_cb36ff011263559ff29cfe1fb8d91b51: "{{unknown}}"
  _oembed_dacdf14fed1c4bf3e6a6717a199884e5: "{{unknown}}"
  _edit_last: '1'
  qode_show-sidebar: default
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  gallery_type: slider
  video_format_choose: youtube
  slide_template: default
  wpmm_postgrid_views: '637'
  _oembed_e27710d47028b0a9cd91968d7459b92f: "{{unknown}}"
  _b2s_post_meta: "a:6:{s:8:\"og_title\";s:62:\"How to Show Logo in ReadMe.Md file
    or in npm Package Home Page\";s:7:\"og_desc\";s:7:\"\";s:8:\"og_image\";s:72:\"https://blog.rupeshtiwari.com/wp-content/uploads/2018/11/logo-readme.png\";s:10:\"card_title\";s:62:\"How
    to Show Logo in ReadMe.Md file or in npm Package Home Page\";s:9:\"card_desc\";s:7:\"\";s:10:\"card_image\";s:72:\"https://blog.rupeshtiwari.com/wp-content/uploads/2018/11/logo-readme.png\";}"
  _yoast_wpseo_primary_category: ''
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '90'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/how-to-show-logo-in-readme-md-file-or-in-npm-package-home-page/"
description: "How to Show Logo in ReadMe.Md file or in npm Package Home Page"
---

<h1>How to add your own logo on README.md file</h1>
<p>Here is a simple way to create your own logo for your npm package. I hope you will enjoy this.</p>
<h2><a id="user-content-where-to-go-and-get-logo" class="anchor" href="https://gist.github.com/rupeshtiwari/8558ca0d8ec1c15619e4492dcd6aa81a#where-to-go-and-get-logo" aria-hidden="true"></a>Where to go and get logo</h2>
<ul>
<li>Go to <a href="https://shields.io/#/" rel="nofollow">https://shields.io/#/</a> website</li>
<li>prepare your own logo and</li>
<li>have these logo references in your readme files.</li>
</ul>
<h2><a id="user-content-alternative-way-to-create-logo" class="anchor" href="https://gist.github.com/rupeshtiwari/8558ca0d8ec1c15619e4492dcd6aa81a#alternative-way-to-create-logo" aria-hidden="true"></a>Alternative way to create logo</h2>
<p>You can also follow this pattern <a href="https://img.shields.io/badge/%5BSUBJECT%5D-%5BSTATUS%5D-%5BCOLOR%5D.svg" rel="nofollow">https://img.shields.io/badge/[SUBJECT]-[STATUS]-[COLOR].svg</a> and Put something on below values:</p>
<ul>
<li>SUBJECT = npm</li>
<li>STATUS= 1.0.0</li>
<li>COLOR= green</li>
<li>Below is your logo url:
<ul>
<li><a href="https://img.shields.io/badge/npm-1.0.0-brightgreen.svg" rel="nofollow">https://img.shields.io/badge/npm-1.0.0-brightgreen.svg</a> Now you can use this logo any where you want. Below is example</li>
</ul>
</li>
<li><a href="https://camo.githubusercontent.com/1df9faeb31da22fbbf2ab6550ca9e07bc51fe9b7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e706d2d312e302e302d627269676874677265656e2e737667" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2018/11/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e706d2d312e302e302d627269676874677265656e2e737667" alt="node-v1" data-canonical-src="https://img.shields.io/badge/npm-1.0.0-brightgreen.svg" /></a></li>
</ul>
<h2><a id="user-content-how-to-show-images-in-readmemd-files" class="anchor" href="https://gist.github.com/rupeshtiwari/8558ca0d8ec1c15619e4492dcd6aa81a#how-to-show-images-in-readmemd-files" aria-hidden="true"></a>How to show images in Readme.MD files</h2>
<p>below are the ways to show images in md files.</p>
<pre><code>    ![npm package](https://img.shields.io/badge/npm%20package-v1-brightgreen.svg)

   ![build succeeded](https://img.shields.io/badge/build-succeeded-brightgreen.svg)

   ![Test passing](https://img.shields.io/badge/Tests-passing-brightgreen.svg)
</code></pre>
<p>see examples:</p>
<p><a href="https://camo.githubusercontent.com/a383d1b130ab39c29977c09781752d69eb7e4d05/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e706d2532307061636b6167652d76312d627269676874677265656e2e737667" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2018/11/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e706d2532307061636b6167652d76312d627269676874677265656e2e737667" alt="npm package" data-canonical-src="https://img.shields.io/badge/npm%20package-v1-brightgreen.svg" /></a></p>
<p><a href="https://camo.githubusercontent.com/668b40c270d7f3aff0d954a8bd533d17a4b7f66a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6275696c642d7375636365656465642d627269676874677265656e2e737667" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2018/11/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6275696c642d7375636365656465642d627269676874677265656e2e737667" alt="build succeeded" data-canonical-src="https://img.shields.io/badge/build-succeeded-brightgreen.svg" /></a></p>
<p><a href="https://camo.githubusercontent.com/34bcdbc6b16d00e2716a83715f1c345a8534b338/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f54657374732d70617373696e672d627269676874677265656e2e737667" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2018/11/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f54657374732d70617373696e672d627269676874677265656e2e737667" alt="Test passing" data-canonical-src="https://img.shields.io/badge/Tests-passing-brightgreen.svg" /></a></p>
