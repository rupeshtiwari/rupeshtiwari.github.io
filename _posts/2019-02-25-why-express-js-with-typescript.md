---
title: Why Express.JS with Typescript
date: 2019-02-26T01:23:52.000Z
published: true
comments: true
social-share: true
categories:
  - Express.JS
  - javascript
  - MEAN
  - NodeJS
  - Typescript
  - Webpack
tags:
  - express
  - beginner
  - typescript
  - tutorial
description:
  "\n\t\t\t\tI love Typescript the way it helps development speed and accuracy.
  I wanted to work with Typescript, Webpack and Express.JS finally came up with
  a project where we can use webpack, typescript, karma, jasmien and express.js.
  All together and do nice development. Please read this article to get more
  details.\t\t"
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p><!-- wp:paragraph --></p>
<p>I love Typescript the way it helps development speed and accuracy. I wanted to work with Typescript, Webpack and Express.JS finally came up with a project where we can use <code>webpack, typescript, karma, jasmien and express.js</code>. All together and do nice development. Please read this article to get more details.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Why ExpressJS?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>ExpressJS is a web framework for node.js server. It is backend component for node.js environment. I helps to host your server side capability in HTTP web Apis. ExpressJS is used in MEAN stack where M is for Mongo Db, E is for ExpressJs , A is for Angular and N is for Node.js</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=9a1KL9wrREg\u0026t=2s","type":"video","providerNameSlug":"youtube","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} --></p>
<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
<div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=9a1KL9wrREg&amp;t=2s
</div>
</figure>
<p><!-- /wp:core-embed/youtube --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/roopkt/337d5c701d9c86716057c3ff336e8fb3#how-to-use-expressjs"></a>How to Use ExpressJS?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Create app by calling express next you can configure routes and start listening at some port number.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>import * as express from 'express';
const app = express();
const PORT = 3432;
app
.get('/', (req,res)=>res.send(`your server is running`))
.listen(PORT, ()=> console.log(`your server is running at port ${PORT});

// now you can navigate to http://localhost:3432/ </code></pre>

<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/roopkt/337d5c701d9c86716057c3ff336e8fb3#example-of-expressjs-with-typescript"></a>Example of ExpressJS with Typescript</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Good example is to see the live sample app. Here is the live sample project&nbsp;<a href="https://github.com/roopkt/Training-Typescript-ExpressJS-Sample-App">https://github.com/roopkt/Training-Typescript-ExpressJS-Sample-App</a>&nbsp;This project is runing with typescript and webpack. In this app we have client and server projects. Server project has expressjs in it.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Here are few snippets for scripts that we can add for runing expressjs.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code> "build:server": "tsc --project server/tsconfig.json -w",
 "watch:server": "nodemon -w dist/server --exec \"node dist/server/index.js\"",
 "start:server": "concurrently npm:build:server npm:watch:server"
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:embed {"url":"https://github.com/roopkt/Training-Typescript-ExpressJS-Sample-App","type":"rich","providerNameSlug":""} --></p>
<figure class="wp-block-embed is-type-rich">
<div class="wp-block-embed__wrapper">
https://github.com/roopkt/Training-Typescript-ExpressJS-Sample-App
</div>
</figure>
<p><!-- /wp:embed --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/roopkt/337d5c701d9c86716057c3ff336e8fb3#what-is-middleware-why-we-need-it-example-of-midleware"></a>What is middleware why we need it example of midleware?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>In express.JS Middleware is a function that has access to both request and response object. It can perform some operation before even returning response to client. In Express.JS middleware function we get 3 parameters&nbsp;<code>request, response and next</code><code>next</code>&nbsp;is function that must be called becuase it enables the Express.JS to call next middleware or next function in the HTTP pipeline.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Here is one example of middleware where we want to add access-allow-origin in header</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  // allow access for Delete and other verbs
  response.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  next();
});
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/roopkt/337d5c701d9c86716057c3ff336e8fb3#what-is-body-parser-why-we-need-it"></a>What is body parser why we need it?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Body Parser is usefull to read the body data from the HTTP message and put it into the epressjs Request object. In order for installing body parser in your project you need to run below script</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>npm i -S body-parser
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Once it is installed please add this into expressjs app. Body Parser will work like a middleware and it will intercept each http request.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>// body parser will help to read the body from request message and put it in express request body object.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/roopkt/337d5c701d9c86716057c3ff336e8fb3#how-to-allow-cross-origin-access-in-expressjs-apis"></a>How to allow Cross Origin Access in ExpressJS API's?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/roopkt/337d5c701d9c86716057c3ff336e8fb3#why-jquery-post-is-not-working-with-expressjs"></a>Why jQuery POST is not working with ExpressJS?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>You need to add body parser install by running&nbsp;<code>npm i body-parser</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>import * as express from 'express';
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/roopkt/337d5c701d9c86716057c3ff336e8fb3#example-of-jquery-post-that-works-with-expressjs"></a>Example of jQuery POST that works with ExpressJS</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>const product = { id : 23, name : 'orange' };
$.post('http://localhost:3244/api/products', product).done(onSuccess).fail(onFail);</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2>Example of jQuery Delete and ExpressJS</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code> $.ajax({
  url:`http://localhost:3244/api/products/23`,
  type:`DELETE`
 }).done(onSuccess).fail(onFail);
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>In your ExpressJS route you will have below code</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>app.route('/api/products/:productId`,(req,res)=>{
 const productId = req.params.productId;
 // delete product from db.
 res.send(`product deleted successfully ${productId}`);
 
});</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><!-- /wp:paragraph --></p>
