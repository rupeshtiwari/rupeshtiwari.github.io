---
title:
  How JWT Authentication overcomes shortcomings of other authentication types
date: 2020-07-27T10:00:51.000Z
published: true
comments: true
social-share: true
categories:
  - angular
  - Full Stack Master
  - javascript
tags:
  - angular
  - javascript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In this video tutorial <a href="https://www.youtube.com/watch?v=2VDclXVUeZo&amp;list=PLZed_adPqIJp9M8sXttDmlCzWzat44GRi&amp;index=6&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>0010-4 JWT authentication for distrubuted system</strong></a> we will learn what makes JWT authentication world’s most popular authentication type. We will see how it overcomes shortcomings of other authentication types. Our main focus will be on understanding its process which makes it unique from others.</p>
<p>First thing we will discuss is how it handles distributed systems. Once again we will take same example of distributed server system with load balancer in large scale applications. Here when client sends JWT, it may or may not be received by the same server by which it was created. If it goes to other server then also, there will be no issue as irrespective of server, process of retrieving your information from JWT and authentication is uniform. Your JWT contains header that has hashing algorithm, payload that has authentication data and digital signature. This information will be verified and utilized by using secret key and this secret key is common per environment. So these secret keys will vary from environment to environment and for each environment there will be one defined secret key.</p>
<p>In this way JWT authentication type is providing out of the box support to distributed server systems without any need of adding external packages. This feature makes JWT authentication type more scalable and reliable.</p>
<p><img class="alignnone size-full wp-image-3447" src="{{ site.baseurl }}/assets/2020/07/JWT1.png" alt="" width="855" height="481" /></p>
<p>It also overcomes most the issues we see in cookie based authentication as it does not store data in cookie. Also there is no case of cross request scripting as authentication information will not be verified and utilized without secret key.</p>
<p><iframe src="https://www.youtube.com/embed/2VDclXVUeZo" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
