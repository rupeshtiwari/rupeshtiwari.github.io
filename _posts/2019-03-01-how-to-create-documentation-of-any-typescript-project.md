---
layout: post
title: How to create API Documentation of any Typescript Project?
date: 2019-03-02T00:28:50.000Z
type: post
published: true
comments: true
social-share: true
categories:
  - JavaScript
  - NodeJS
  - Typescript
  - Webpack
tags:
  - automation
  - documentation
meta:
  _wpas_done_all: "1"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1611911602;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:775;}i:1;a:1:{s:2:"id";i:1000;}i:2;a:1:{s:2:"id";i:668;}}}}
  _publicize_twitter_user: "@roopkt"
  _edit_last: "1"
  _thumbnail_id: "1450"
  _qode-like: "0"
  wpmm_postgrid_views: "2351"
  qode_page_background_image_fixed: "yes"
  qode_hide-featured-image: "no"
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
permalink: /how-to-create-documentation-of-any-typescript-project/
description:
  "\n\t\t\t\tI love to create automatic API Documentation of my project.
  Regardless I work on Angular, React or VueJS as far as it uses Typescript. Did
  you know you could generate your project API Wikipedia kind of documentation
  within blink of eyes if you are using Typescript? Please read this blog to
  find out how easy it is.\t\t"
toc: true
---

<p><!-- wp:paragraph --></p>
<p>I love to create automatic API Documentation of my project. Regardless I work on Angular, React or VueJS as far as it uses Typescript. Did you know you could generate your project API Wikipedia kind of documentation within blink of eyes if you are using Typescript? Please read this blog to find out how easy it is.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Documentation for Any Typescript Node JS Project</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Install <code>typedoc</code>&nbsp;by running&nbsp;<code>npm i -D typedoc</code> then add below in your script of <code>package.json</code> file</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted"> "typedoc": "typedoc --out docs --mode modules --tsconfig tsconfig.json src/",</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading --></p>
<h2>Documentation for Webpack enabled Typescript Project</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Install <code>typedoc-webpack-plugin</code> by running below script in your project.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>npm i -D typedoc-webpack-plugin typedoc</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Next you can add this plugin to your production version of the webpack config file. I normally add in <code>webpack-prod.config.js</code> file</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>const TypedocWebpackPlugin = require('typedoc-webpack-plugin');

...

plugins: [ new TypedocWebpackPlugin({ out : 'dist/docs/api' }) ]</code></pre>

<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>
<p>The options for the plugin mirror the options that are passed to typedoc. Refer to&nbsp;<a href="https://github.com/TypeStrong/typedoc" rel="nofollow">https://github.com/TypeStrong/typedoc</a>&nbsp;for full options.</p>
<p>The default options that are set by the plugin are:</p>
<pre><code>{
    out: './docs',
    module: 'commonjs',
    target: 'es5',
    exclude: '**/node_modules/**/*.*',
    experimentalDecorators: true,
    excludeExternals: true
}
</code></pre>
<p>Here is an example of a more expanded configuration:</p>
<pre><code>plugins: [
    new TypedocWebpackPlugin({
        name: 'Contoso'
        mode: 'file',
        theme: './typedoc-theme/',
        includeDeclarations: false,
        ignoreCompilerErrors: true,
    })
]</code></pre></p>
<p><!-- /wp:paragraph --></p>
