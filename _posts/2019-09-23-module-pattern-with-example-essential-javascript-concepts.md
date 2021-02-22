---
title: "Module Pattern with example: Essential JavaScript Concepts"
date: 2019-09-23T10:00:12.000Z
published: true
comments: true
social-share: true
categories:
  - javascript
tags:
  - javascript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In our previous video session <a href="https://www.youtube.com/watch?v=JBqr_jnwnrA" target="_blank" rel="noopener noreferrer"><strong>JavaScript Concepts- Module Pattern | 0004-11 </strong></a>we have learnt about basics of Module Pattern. Here in this video tutorial <a href="https://www.youtube.com/watch?v=ojdg4hGVF0k" target="_blank" rel="noopener noreferrer"><strong>JavaScript Concepts- Module Pattern example with Logger Object | 0004-12</strong></a> we will understand working of module pattern with help of practical examples. Basically there are three ways to create a class:</p>
<ul>
<li>Prototype pattern</li>
<li>Regular Class</li>
<li>Module pattern (Revealing Pattern).</li>
</ul>
<p>We will discuss Prototype pattern in our subsequent video sessions, let’s discuss other two types here. In Regular Class we can write constructor function (Any function who gives us instance is known as constructor function), with this we can create Private function rather than exposing small functions, instead can expose API’s. But issue here is we end up creating new instances. What if we want to stop people from creating multiple instances?</p>
<p>So here comes the concept of Module Pattern which restricts people to create instances. Through module pattern we get many benefits like we can create private function, public function, it also guarantees we have one instance only and it is memory efficient as well.</p>
<p>Let’s understand this with Logger example. Here in JS, in order to create a class or Object we will use function as it is the first class citizen in JS. It is explained in detail in our video session <strong><a href="https://www.youtube.com/watch?v=ojdg4hGVF0k" target="_blank" rel="noopener noreferrer">JavaScript Concepts- Module Pattern example with Logger Object | 0004-12</a><em>. </em></strong>It also demonstrates Closure concept of JavaScript.</p>
<p>Module pattern is heavily designed on closure principle; whoever is familiar with Closure concept can design this. This is very important designing pattern as it fulfills any kind of requirement which needs single instance. We can design very complicated objects like we can have private variables; private functions and has flexibility to expose whatever we want to. It is good for services and testing/TDD as well.</p>
<p>Our next video tutorial <a href="https://www.youtube.com/watch?v=PjWWkLSOS3k" target="_blank" rel="noopener noreferrer"><strong>JavaScript Concepts- Module Pattern &amp; How to use It in App | 0004-13 </strong></a>Explains how to use Module pattern in App. Please find code snippet from our GitHub code base below:</p>
<p><img class="alignnone size-full wp-image-2600" src="{{ site.baseurl }}/assets/2019/09/JS-Md-1.png" alt="" width="620" height="553" /></p>
<p><iframe src="https://www.youtube.com/embed/PjWWkLSOS3k" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
<p><!-- wp:heading --></p>
<h2>Hiring Guide For Node.js developers</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:html --><br />
<a href="https://www.toptal.com/nodejs#hiring-guide" class="btn">Hiring Guide for Node.JS Developer</a><br />
<!-- /wp:html --></p>
<p><!-- wp:heading --></p>
<h2>Subscribe to Full Stack Master</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:image {"id":3386,"sizeSlug":"large","linkDestination":"custom"} --></p>
<figure class="wp-block-image size-large"><a href="https://blog.rupeshtiwari.com/subscribe"><img src="{{ site.baseurl }}/assets/2019/09/plan-subscription.jpg?fit=605%2C1024&amp;ssl=1" alt="" class="wp-image-3386" /></a><br />
<figcaption><a href="https://blog.rupeshtiwari.com/subscribe">https://blog.rupeshtiwari.com/subscribe</a></figcaption>
</figure>
<p><!-- /wp:image --></p>
<p><!-- wp:html /--></p>
