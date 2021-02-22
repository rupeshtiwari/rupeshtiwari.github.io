---
title: Type of Authentication - JWT Authentication
date: 2020-07-20T10:00:40.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
  - Full Stack Master
  - JavaScript
tags:
  - Angular
  - JavaScript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>As we already discussed rest of the authentication types in our previous video tutorials, JWT based authentication is best among all. It is world famous and used in almost all modern web/distributed applications. In this video tutorial <a href="https://www.youtube.com/watch?v=mzU8vWsRkvE&amp;list=PLZed_adPqIJp9M8sXttDmlCzWzat44GRi&amp;index=5&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>0010-3 What is JWT Based Authentication </strong></a>we will discuss about JWT authentication in detail.</p>
<p>JWT lets you store encrypted information in verifiable tokens. These tokens are compact and self-contained encoded JSON objects that hold vital information which is transferred between client and server.  JWTs have three parts:</p>
<p><strong>Header:</strong> First part holds the hashing algorithm.</p>
<p><strong>Payload:</strong> The second part which is payload consists of authentication data.</p>
<p><strong>Signature: </strong>Third part is Signature which is created by signing the header and payload using the hashing algorithm and secret key. This signing process is what verifies the token.</p>
<p><img class="alignnone size-full wp-image-3442" src="{{ site.baseurl }}/assets/2020/07/JW1.png" alt="" width="723" height="499" /></p>
<p>Below snapshot from our video session shows diagrammatical explanation of JWT authentication process.</p>
<p><img class="alignnone size-full wp-image-3441" src="{{ site.baseurl }}/assets/2020/07/JW2.png" alt="" width="853" height="482" /></p>
<p>In our subsequent video sessions, we will deep dive into JWT working process and try to understand how it overcomes shortcomings of other authentication types and what makes it best among all.</p>
<p><iframe src="https://www.youtube.com/embed/mzU8vWsRkvE" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
