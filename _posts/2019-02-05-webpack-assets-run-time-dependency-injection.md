---
title: Webpack assets run time dependency injection
date: 2019-02-06T00:00:44.000Z
published: true
comments: true
social-share: true
categories:
  - javascript
  - Webpack
tags:
  - javascript
  - webpack
description: "\n\t\t\t\tHow to pass public path to webpack assets bundle. \t\t"
toc: true
related: true
share: true
read_time: true
author_profile: true
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
