---
layout: post
title: How to redirect api call to server in Webpack project?
date:
type: post

published: false
password: ''
status: draft
categories:
- JavaScript
tags: []
meta:
  _edit_last: '1'
  _publicize_twitter_user: "@roopkt"
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/"
excerpt: "How to redirect api call to server in Webpack project?"
---
<p>
				Have you ever thought can I create my angular app and run it in dev mode, however make web API call to some existing server via angular app? Yes that is the problem we talking in this article.</p>
<p>Now a day's all app need some data to show and generally we use some server web api. To fetch or post data. However it is painful if a client side developer has to setup server to just get the project running. For client side developer it is nothing to do with server. He might be fixing some html, JavaScript or CSS bugs. This is a problem, if we ask client side developer to setup server locally first then only run app.</p>
<p>While writing Angular app or any client side app you may consider using some custom mocked API server hosted via <code>nodejs</code> and call to that web API server.</p>
<h2>Webpack Dev Server</h2>
<p>webpack has dev server that can launch your app in memory mode.</p>
<p>If you have webapi ready at somewhere you can do that how ?</p>
<h2>Wepack Dev Server Proxy Settings</h2>
<div>
<div></div>
</div>
<pre class="EnlighterJSRAW" data-enlighter-language="null">let cookie;
const onProxyReq = (proxyReq) =&gt; {
  if (cookie) {
    proxyReq.setHeader('Cookie', cookie);
  }
};
const onProxyRes = (proxyRes) =&gt; {
  Object.keys(proxyRes.headers).forEach((key) =&gt; {
    if (key === 'set-cookie' &amp;&amp; proxyRes.headers[key]) {
      const header = proxyRes.headers[key];
      cookie = typeof(header) === "array" ? header[0] : header;
     }
  });
};
</pre>
<pre class="EnlighterJSRAW" data-enlighter-language="null">/** Webpack Dev Server  */
const DEVSERVER = {
  contentBase: './',
  port: 4403,
  proxy: {
    '/api/**': {
      target: 'http://localhost/Driver.Web.V4',
      logLevel: 'debug',
      onProxyReq,
      onProxyRes,
    },
  },
};
</pre>
<pre class="EnlighterJSRAW" data-enlighter-language="null">module.exports = (env = 'dev', argv) =&gt;
  merge(base(env, argv), {
    context: path.resolve(ROOT),
    mode: 'development',
    module: MODULE,
    plugins: PLUGINS,
    devtool: 'source-map',
    devServer: DEVSERVER,
    entry: webpackConfigEntryPoints,
    watch: true,
  });
</pre>