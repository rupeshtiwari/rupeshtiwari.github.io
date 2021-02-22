---
title: Integrating Restful API in Angular App - Demo
date: 2020-02-17T11:00:16.000Z
published: true
comments: true
social-share: true
categories:
  - angular
tags:
  - angular
  - javascript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In our previous demos session we have created our server and restful API and tested API with postman also. Next we will try to integrate this Restful API in our angular app so that when we try to register from our angular project, it should send the data to the server via http. In this demo session <a href="https://www.youtube.com/watch?v=2v2lMmcapmQ&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=21&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Integrating Restful API In Angular App | Practical Demo | 0009-20</strong></a> we will see in detail</p>
<ul>
<li>How to integrate Restful Web API in Angular app?</li>
<li>How to avoid CORS error?</li>
<li>How to create proxy configuration for webpack to locally access remote webapi?</li>
</ul>
<p>Let’s begin with making required changes in <strong>auth.service.ts</strong> file.</p>
<p><img class="alignnone size-full wp-image-2969" src="{{ site.baseurl }}/assets/2020/02/IR1.png" alt="" width="853" height="482" /></p>
<p>Also will add code to pop-up proper messages on success and failure in registration process.</p>
<p><img class="alignnone size-full wp-image-2968" src="{{ site.baseurl }}/assets/2020/02/IR2.png" alt="" width="853" height="482" /></p>
<p>Next, in <strong>angular.Json</strong> we will put proxy location through <strong>proxy.config.json</strong> and that location will redirect us to required URL.</p>
<p><img class="alignnone size-full wp-image-2967" src="{{ site.baseurl }}/assets/2020/02/IR3.png" alt="" width="854" height="480" /></p>
<p>Now we will create json file with same name <strong>proxy.config.json</strong> in root location. Then after entering data in our registration page, we can confirm that data on server log.</p>
<p><img class="alignnone size-full wp-image-2966" src="{{ site.baseurl }}/assets/2020/02/IR4.png" alt="" width="853" height="480" /></p>
<p>Still our server is in-memory i.e. storing data in-memory, but in our subsequent demo sessions we will install &amp; use MongoDB and store data in database.</p>
<p><iframe src="https://www.youtube.com/embed/2v2lMmcapmQ" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
