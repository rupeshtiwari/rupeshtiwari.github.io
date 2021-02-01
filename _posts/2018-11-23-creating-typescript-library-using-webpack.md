---
layout: post
title: Creating Typescript Library using Webpack
date: 2018-11-23 05:43:35.000000000 -05:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- JavaScript
- Typescript
- Webpack
tags:
- npm
- Typescript
- webpack
meta:
  _oembed_b6a2baaf56308d9ff824d94c7d48c311: "{{unknown}}"
  _oembed_87d6ec630ce0e87a35b8b5bebccc0e84: "{{unknown}}"
  _thumbnail_id: '1461'
  _wpas_mess: 'Creating Typescript Library using Webpack: In this article we will
    see how can you create your own typescript library that you can easily consume
    in your another `typescript` project. Also we will see how we can create typedefinition bundle
    file for our own library. Finally we will see which folder is required to publish
    to npm portal to have our own little library published and available for our friends.'
  advanced_seo_description: In this article we will see how can you create your own
    typescript library that you can easily consume in your another `typescript` project.
    Also we will see how we can create typedefinition bundle file for our own library.
    Finally we will see which folder is required to publish to npm portal to hav
  _edit_last: '1'
  _publicize_twitter_user: "@roopkt"
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1612065126;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:493;}i:1;a:1:{s:2:"id";i:2643;}i:2;a:1:{s:2:"id";i:1000;}}}}
  _wpas_done_all: '1'
  _qode-like: '0'
  _oembed_dfb1fb7e21fc796808a7d4c5a66cae29: "{{unknown}}"
  _oembed_989924688e24d4f07da4f3875ef093ce: "{{unknown}}"
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  slide_template: default
  wpmm_postgrid_views: '4747'
  _b2s_post_meta: a:6:{s:8:"og_title";s:41:"Creating Typescript Library using Webpack";s:7:"og_desc";s:368:"In
    this article we will see how can you create your own typescript library that you
    can easily consume in your another `typescript` project. Also we will see how
    we can create typedefinition bundle file for our own library. Finally we will
    see which folder is required to publish to npm portal to have our own little library
    published and available for our friends.";s:8:"og_image";s:110:"https://blog.rupeshtiwari.com/wp-content/uploads/2018/12/creating-typescript-webpack-library-rupesh-tiwari.jpg";s:10:"card_title";s:41:"Creating
    Typescript Library using Webpack";s:9:"card_desc";s:368:"In this article we will
    see how can you create your own typescript library that you can easily consume
    in your another `typescript` project. Also we will see how we can create typedefinition bundle
    file for our own library. Finally we will see which folder is required to publish
    to npm portal to have our own little library published and available for our friends.";s:10:"card_image";s:110:"https://blog.rupeshtiwari.com/wp-content/uploads/2018/12/creating-typescript-webpack-library-rupesh-tiwari.jpg";}
  _yoast_wpseo_primary_category: '195'
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '60'
  _inpost_head_script: a:1:{s:19:"synth_header_script";s:63:"<script src="https://gumroad.com/js/gumroad-embed.js"></script>";}
  _wpcom_is_markdown: '1'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/creating-typescript-library-using-webpack/"
excerpt: "\n\t\t\t\tIn this article we will see how can you create your own typescript
  library that you can easily consume in your another `typescript` project. Also we
  will see how we can create typedefinition bundle file for our own library. Finally
  we will see which folder is required to publish to npm portal to have our own little
  library published and available for our friends.\t\t"
---
<p><!-- wp:html --></p>
<div class="gumroad-product-embed" data-gumroad-product-id="UJClm"><a href="https://gumroad.com/l/UJClm">Loading...</a></div>
<p><!-- /wp:html --></p>
<p>In this article we will see how can you create your own <code>typescript library</code>&nbsp;that you can easily consume in your another <code>typescript</code> project. Also we will see how we can create <code>type definition</code>&nbsp;bundle file for our own library. Finally we will see which folder is required to publish to <code>npm</code>&nbsp;portal to have our own little library published and available for our friends.</p>
<h2><a id="user-content-introduction" class="anchor" href="https://github.com/roopkt/webpack-typesript-library-consumption-sample/blob/master/README.md#introduction" aria-hidden="true"></a>Introduction</h2>
<p>In you enterprise if you want to create shared JavaScript library then webpack and typescript comes first in mind. However, there is no sample project or example exist in google that demonstrates how to achieve it. In this sample project I tried to demonstrate how can you create a library project using typescript and webpack and then create your own <code>npm</code> packages both for JavaScript bundle and @types bundle. Also you will see how can you use them in your sample project. I hope you will enjoy this project and learn something!&nbsp;<a href="https://roopkt.github.io/webpack-typesript-library-consumption-sample/" rel="nofollow">docs</a></p>
<h2>&nbsp;</h2>
<h2><a id="user-content-goal" class="anchor" href="https://github.com/roopkt/webpack-typesript-library-consumption-sample/blob/master/README.md#goal" aria-hidden="true"></a>What are we going to solve ?</h2>
<p>This project is demonstrating how to create your own library using typescript and webpack. Then consume that library in another webpack project.</p>
<ul>
<li>create a library from typescript</li>
<li>create a bundle (<code>.js</code>) for JavaScript</li>
<li>create a bundle (<code>.d.ts</code>) for definition files for typescript</li>
<li>consume library in client project by&nbsp;<code>npm link script</code>.</li>
</ul>
<p>We have created 2 projects one is&nbsp;<code>lib-pj</code>&nbsp;which is library project and the other is&nbsp;<code>client-pj</code>&nbsp;which is client project that is going to consume&nbsp;<code>lib-pj</code></p>
<p>We are using</p>
<ul>
<li><code>webpack</code>&nbsp;for building, bundling etc.</li>
<li><code>ts-loader</code>&nbsp;for compiling typescript and</li>
<li><code>declaration-bundler-webpack-plugin</code>&nbsp;for bundling type definition files</li>
</ul>
<h2><a id="user-content-tools" class="anchor" href="https://github.com/roopkt/webpack-typesript-library-consumption-sample/blob/master/README.md#tools" aria-hidden="true"></a>Getting Tool Sets Ready</h2>
<p><img src="{{ site.baseurl }}/assets/2018/11/grunge-hipster-wooden-desktop-with-computer-digital-tablet-picture-id490243118?b=1&amp;k=6&amp;m=490243118&amp;s=612x612&amp;w=0&amp;h=giJ7069v29T8RUgODfzt0KkFFyWtA-kv0YfBlUs2ZWA=" alt="Grunge hipster wooden desktop with computer, digital tablet" /></p>
<p>We are using:</p>
<ul>
<li><strong>Webpack and</strong></li>
<li><strong>Typescript</strong></li>
</ul>
<p>of-course, I am using my favorite&nbsp;&nbsp;<code>VSCode</code> editor , you can use yours favorite.</p>
<h2>Solution</h2>
<p>Create 2 projects at your root folder <code>client-pj</code>&nbsp;and <code>lib-pj</code>. Client Project is where we will consume the output from Library project.</p>
<h3>Creating Library Project</h3>
<p><img src="{{ site.baseurl }}/assets/2018/11/library-books-1442528.jpg" alt="Library Books" /></p>
<p>Lets work on library project where you want to create your sharable code. We have added our model classes and services in this folder and now In order to compile typescript code you need <code>tsconfig.json</code>&nbsp;. please copy below code and put in <code>tsconfig.json</code>&nbsp;inside <code>lib-pj</code></p>
<p>https://gist.github.com/rupeshtiwari/39a4c9adb875169e1210eff6390e63ed</p>
<p>Lets create <code>webpack.config.js</code>&nbsp;file inside library project make sure you have <code>ts-loader</code>&nbsp;installed which is used to load typescript and compile them in <code>JavaScript</code></p>
<p>Here is the final <code>webpack.config.js</code>&nbsp;file</p>
<p>https://gist.github.com/rupeshtiwari/38498c95aa0d612bdafbc93500da4da1</p>
<p>Above setup will be enough to create our <code>index.js</code> file. However, the major challenge is to how to create the <code>typedefinition bundle file</code>&nbsp;for our library. For that I have used <a href="https://www.npmjs.com/package/declaration-bundler-webpack-plugin" target="_blank" rel="noopener noreferrer"><code>declaration-bundler-webpack-plugin</code>&nbsp;</a>&nbsp;and with this plugin it was very easy to generate my own <code>index.d.ts</code>&nbsp;file. Have a look in below code how to use <code>DeclarationBundlerPlugin</code> plugin to get your <code>index.d.ts</code>&nbsp;file created. This is magic. I loved the&nbsp;<a href="https://www.npmjs.com/package/declaration-bundler-webpack-plugin">DeclarationBundlerPlugin&nbsp;webpack plugin!</a></p>
<pre class="EnlighterJSRAW" data-enlighter-language="null">plugins: [
    
    new DeclarationBundlerPlugin({
      moduleName: '"@mycomp/mylib"',
      out: '../@types/index.d.ts',
    }),
     
  ],
};</pre>
<h3>Creating Client Project</h3>
<p>Now in client project we can easily consume <code>index.js&nbsp;</code>Create new <code>webpack.config</code> for your <code>client-pj</code>&nbsp;by pasting below code. Client project will refer to the Library project by leveraging tsconfig&nbsp;<code>path</code>&nbsp;feature. You need not build library project and consume in client project for local development because it will slow down your development speed. Therefore, the best practice is refer your client project via <code>path</code>&nbsp;feature of <code>tsconfig.json</code>. The same path configuration can be also put in webpack resolve property such that it compiles the typescript files from <code>library project</code></p>
<pre class="EnlighterJSRAW" data-enlighter-language="null">// tsconfig.json
...{
    path : {
        "@lib" : ["./lib-pj/src/index.ts"]
    }
    ... 
}

// webpack.config.js
... {
 resolve :{
  "@lib" : path.resolve("./lib-pj/src/index.ts")
  }
}</pre>
<p>Here is my final <code>webpack.config.json</code> file code:</p>
<pre class="EnlighterJSRAW" data-enlighter-language="null">const webpack = require('webpack');
const path = require('path');
const ROOT = __dirname;
const DESTINATION = path.join(ROOT, '/dist');
/** wepback resolve */
const RESOLVE = {
  extensions: ['.tsx', '.ts', '.js', '.html'],
};

/** webpack plugins */
const PLUGINS = [];
const MODULE = {
  rules: [
    // Scripts
    {
      test: /\.ts$/,
      exclude: [/node_modules/],
      loader: 'ts-loader',
      include: [ROOT],
    },
  ],
};
const OUTPUT = {
  filename: 'index.js',
  libraryTarget: 'umd',
  library: 'myclient',
  path: DESTINATION,
};

module.exports = {
  node: {
    fs: 'empty',
  },
  entry: {
    app: ROOT + '/src/index.ts',
  },
  context: ROOT,
  resolve: RESOLVE,
  mode: 'development',
  module: MODULE,
  plugins: PLUGINS,
  devtool: 'source-map',
  devServer: {},
  output: OUTPUT,
};</pre>
<p>Then you are all set!</p>
<h2>Running&nbsp; the Build</h2>
<p>Now it's time to build our library project and share it. We will first build <code>lib-pj</code>&nbsp;so that we can create output from this project and share it to npm portal.</p>
<pre><code> <code class="EnlighterJSRAW" data-enlighter-language="js"># go to lib-pj and run below scripts # 
npm run build</code></code></pre>
<pre><code></code></pre>
<p>After running above build script in&nbsp;<code>lib-pj</code>&nbsp;you will see below 2 folders:</p>
<ul>
<li><strong>dist Folder</strong>
<ul>
<li>index.js</li>
<li>index.js.map</li>
<li>package.json</li>
</ul>
</li>
<li><strong>@types Folder</strong>
<ul>
<li>index.d.ts</li>
<li>package.json</li>
</ul>
</li>
</ul>
<pre><code></code></pre>
<pre class="EnlighterJSRAW" data-enlighter-language="js"># go to client-pj and run below scripts #
npm run build</pre>
<pre><code></code></pre>
<pre><code></code></pre>
<h2>Publishing to NPM</h2>
<p>Now build&nbsp;<code>client-pj</code>&nbsp;by running build script, which will link to above 2 npm packages. You can now safely publish this <code>dist</code> folder in to npm library by running <code>npm publish</code> command and have fun :)</p>
<p>some times you want to publish your type definition files in a separate npm package that also you can do by publishing <code>@types</code> folder separately to npm.</p>
<h2><a id="user-content-how-get-this-project-at-your-machine" class="anchor" href="https://github.com/roopkt/webpack-typesript-library-consumption-sample/blob/master/README.md#how-get-this-project-at-your-machine" aria-hidden="true"></a>Getting this Source Code</h2>
<pre><code># in your machine open command prompt and run below script #
git clone https://github.com/roopkt/webpack-typesript-library-consumption-sample.git
</code></pre>
<h2><a id="user-content-how-to-install-npm-packages" class="anchor" href="https://github.com/roopkt/webpack-typesript-library-consumption-sample/blob/master/README.md#how-to-install-npm-packages" aria-hidden="true"></a>Installing node packages</h2>
<p><img src="{{ site.baseurl }}/assets/2018/11/windows-installation-workers-picture-id584858784?b=1&amp;k=6&amp;m=584858784&amp;s=612x612&amp;w=0&amp;h=wsn55eQu5Ls5ENJtf5maUG8jRTWusQfmv7gcbAwqWSk=" alt="windows installation workers" /></p>
<p>We want to install npm packages to both&nbsp;<code>client-pj</code>&nbsp;and&nbsp;<code>lib-pj</code>&nbsp;project. Please follow below instruction:</p>
<pre><code># run below scripts from lib-pj folder #
npm i

# run below scripts from client-pj folder #
npm i
</code></pre>
<h2>Should you have <a id="user-content-questions" class="anchor" href="https://github.com/roopkt/webpack-typesript-library-consumption-sample/blob/master/README.md#questions" aria-hidden="true"></a>Questions</h2>
<p>If you have any questions or issues or suggestions please feel free to communicate me or create issue in this git repository.</p>
<h2><a id="user-content-releases" class="anchor" href="https://github.com/roopkt/webpack-typesript-library-consumption-sample/blob/master/README.md#releases" aria-hidden="true"></a>Releases</h2>
<p>I have created few releases in my Github repository&nbsp;<a href="https://github.com/roopkt/webpack-typesript-library-consumption-sample/releases/">See all of the releases here.</a></p>
<p><!-- wp:heading --></p>
<h2>message from rupesh tiwari</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=gzqDoHYO_xk","type":"video","providerNameSlug":"youtube","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} --></p>
<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
<div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=gzqDoHYO_xk
</div>
</figure>
<p><!-- /wp:core-embed/youtube --></p>
<p><!-- wp:heading --></p>
<h2>Enroll to full stack  master</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong>❤️ Hey Viewers! show your support &amp; subscribe to full stack master school to watch full stack JavaScript HD course videos including node.js, angular, express, webpack and much more. Download source code, slides and step by step guide. Learn more at https://blog.rupeshtiwari.com/subscribe 💥 I am super excited to teach you at Full Stack Master!</strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"id":3388,"sizeSlug":"large","linkDestination":"custom"} --></p>
<figure class="wp-block-image size-large"><a href="https://blog.rupeshtiwari.com/subscribe"><img src="{{ site.baseurl }}/assets/2018/11/plan-subscription-1.jpg?fit=605%2C1024&amp;ssl=1" alt="" class="wp-image-3388" /></a></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:html /--></p>
