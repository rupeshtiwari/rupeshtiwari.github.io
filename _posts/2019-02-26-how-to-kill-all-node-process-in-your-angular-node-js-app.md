---
layout: post
title: How to kill all node process in your Angular/Node.JS App?
date: 2019-02-26 20:02:04.000000000 -05:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- JavaScript
- NodeJS
tags:
- npm
meta:
  _publicize_twitter_user: "@roopkt"
  _wpas_done_all: '1'
  _edit_last: '1'
  _wp_old_date: '2019-02-27'
  _thumbnail_id: '1452'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1611832277;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2254;}i:1;a:1:{s:2:"id";i:2630;}i:2;a:1:{s:2:"id";i:1000;}}}}
  wpmm_postgrid_views: '1562'
  _qode-like: '0'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  slide_template: default
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/how-to-kill-all-node-process-in-your-angular-node-js-app/"
excerpt: "\n\t\t\t\tYou might be aware of EADDRINUSE  node error in node.js application.
  Where it says address is in use. This is very annoying. It happenes if some of the
  ports are still being in used even though you think they are not. What I do is I
  create a stop script in my node application and I call stop to stop all of the existing
  node processes.\t\t"
---
<p><!-- wp:paragraph --></p>
<p>You might be aware of <code>EADDRINUSE </code> node error in node.js application. Where it says address is in use. This is very annoying. It happenes if some of the ports are still being in used even though you think they are not. What I do is I create a stop script in my node application and I call stop to stop all of the existing node processes.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>Error: listen EADDRINUSE 127.0.0.1:8888
    at Object._errnoException (util.js:992:11)
    at _exceptionWithHostPort (util.js:1014:20)
    at Server.setupListenHandle [as _listen2] (net.js:1355:14)
    at listenInCluster (net.js:1396:12)
    at doListen (net.js:1505:7)
    at _combinedTickCallback (internal/process/next_tick.js:141:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/roopkt/2c6b56692081077dbce664eb16104813#kill-all-node-process"></a>Kill all Node Process</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>One option that I prefer to kill all node processes. Be aware that when you do this all of the existing node processes will stop.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/roopkt/2c6b56692081077dbce664eb16104813#how-to-stop-node-process-in-windows"></a>How to stop node process in windows?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>  "stop": "taskkill /f /im node.exe",
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/roopkt/2c6b56692081077dbce664eb16104813#how-to-stop-node-process-in-mac"></a>How to stop node process in Mac?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>  "stop": "killall node",</code></pre>
<p><!-- /wp:code --></p>
