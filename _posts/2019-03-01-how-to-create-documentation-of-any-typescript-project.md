---
title: How to create API Documentation of any Typescript Project?
date: 2019-03-02T00:28:50.000Z
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
description:
  "\n\t\t\t\tI love to create automatic API Documentation of my project.
  Regardless I work on Angular, React or VueJS as far as it uses Typescript. Did
  you know you could generate your project API Wikipedia kind of documentation
  within blink of eyes if you are using Typescript? Please read this blog to
  find out how easy it is.\t\t"
toc: true
related: true
share: true
read_time: true
author_profile: true
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
