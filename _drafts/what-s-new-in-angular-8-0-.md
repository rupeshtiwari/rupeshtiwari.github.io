---
layout: post
title: What's new in Angular 8.0?
date:
type: post

published: false
password: ''
status: draft
categories:
- Angular
tags:
- angular 8
meta:
  _thumbnail_id: '2194'
  _edit_last: '1'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _b2s_post_meta: "a:6:{s:8:\"og_title\";s:26:\"What's new in Angular 8.0?\";s:7:\"og_desc\";s:160:\"\nANGULAR
    8 IS RELEASED NOW!\n\n\n\nIs there any breaking changes in Angular 8?\n\n\n\n\n\n\n\nNo,
    \ as Angular team had promised they have not introduced breaking changes. \n\";s:8:\"og_image\";s:85:\"https://blog.rupeshtiwari.com/wp-content/uploads/2019/06/what-is-new-in-angular-8.png\";s:10:\"card_title\";s:26:\"What's
    new in Angular 8.0?\";s:9:\"card_desc\";s:160:\"\nANGULAR 8 IS RELEASED NOW!\n\n\n\nIs
    there any breaking changes in Angular 8?\n\n\n\n\n\n\n\nNo,  as Angular team had
    promised they have not introduced breaking changes. \n\";s:10:\"card_image\";s:85:\"https://blog.rupeshtiwari.com/wp-content/uploads/2019/06/what-is-new-in-angular-8.png\";}"
  slide_template: default
  _yoast_wpseo_primary_category: '178'
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '90'
  wpmm_postgrid_views: '15'
  _qode-like: '0'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/"
---
<p><!-- wp:quote --></p>
<blockquote class="wp-block-quote"><p>ANGULAR 8 IS RELEASED NOW!</p>
</blockquote>
<p><!-- /wp:quote --></p>
<p><!-- wp:heading --></p>
<h2>Is there any breaking changes in Angular 8?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:quote --></p>
<blockquote class="wp-block-quote">
</blockquote>
<p><!-- /wp:quote --></p>
<p><!-- wp:paragraph --></p>
<p><strong>No,  as Angular team had promised they have not introduced breaking changes. </strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><strong>Should I update to Angular 8? </strong></h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Yes</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Is there an easy way to Upgrade Angular 8?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong>Yes, Just run below script and your project will be automatically upgraded to Angular 8.</strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:enlighter/codeblock {"language":"js"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">ng update @angular/cli 
ng update @angular/core
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:heading --></p>
<h2>What are the New Features of Angular 8?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><strong>Differential Loading &amp; Performance Improvement</strong></h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Since modern browsers has many E2015 features already implemented we no more need all of the polyfills that by default Angular build produces. You will get around 40kb of improvement on final productionize bundle size. Which is great performance improvement!  You will be deploying both bundles in production and the browser will choose the right one at launch time.This means that for newer browsers, you get a smaller bundle size.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Now when you will build your Angular app using angular CLI then it will produce two builds for your application one is for <a href="https://johnpapa.net/es5-es2015-typescript/">es5 and for es2015</a>. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Since modern browsers has many E2015 features already implemented we no more need all of the polyfills that by default Angular build produces. You will get around 40kb of improvement on final productionize bundle size. Which is great performance improvement!</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>You will be deploying both bundles in production and the browser will choose the right one at launch time.This means that for newer browsers, you get a smaller bundle size.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Lazy Loading on Import</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Now you can use import lazy loading and hence you can do all conditional loading and logic within your angular app. Its great! So you can change your loadChildren declarations in routing modules from:</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:block {"ref":2198} /--></p>
<p><!-- wp:paragraph --></p>
<p>loadChildren: './products/product.module#ProductModule’</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>to:</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>loadChildren: () =&gt; import('./products/product.module').then(m =&gt; m.ProductModule)</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p></p>
<p><!-- /wp:paragraph --></p>