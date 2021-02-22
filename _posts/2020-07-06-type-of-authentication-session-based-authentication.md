---
title: Type of Authentication - Session Based Authentication
date: 2020-07-06T10:00:18.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
  - Full Stack Master
  - JavaScript
tags:
  - Angular
  - fullstackmaster
  - JavaScript
  - rupeshtiwari
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>Authentication is vital to most of the applications and the way it is achieved has evolved substantially in recent years. Basically there are three types of authentication:</p>
<ul>
<li>Session Based Authentication</li>
<li>Cookie Based Authentication</li>
<li>JWT(JSON Web Tokens) Authentication</li>
</ul>
<p>JWT Authentication is one of the most popular types in today’s world. Will discuss each type in detail in our subsequent video sessions. In this video tutorial <strong><a href="https://www.youtube.com/watch?v=lrqE4_P8_0A&amp;list=PLZed_adPqIJp9M8sXttDmlCzWzat44GRi&amp;index=3&amp;t=0s" target="_blank" rel="noopener noreferrer">Session Based Authentication</a><em>, </em></strong>we will explain session based authentication with real world examples. Will also discuss its advantages &amp; disadvantages.</p>
<p>Let’s say you are trying to login into your app with your user credentials. As soon as you will submit your details, request will be sent to server. Server will authenticate and create session key that it will pass to client. Now next time whenever you will try to retrieve your session, server will expect that the client will pass the session key to it to recognize you.</p>
<p><img class="alignnone size-full wp-image-3433" src="{{ site.baseurl }}/assets/2020/07/SB1.png" alt="" width="855" height="481" /></p>
<p>Now the problem comes when we use distributed server system with load balancer in large scale applications. Here when client sends your session key, it may or may not be received by the same server by which it was created. If it goes to other server then that will not be able to recognize you as all the servers create their independent session keys. This is one of the major problems in session based authentication. To overcome this there are certain packages available like out of the process sessions storage, distributed sessions software, or use SQL server exclusively to store sessions. So whenever we have large servers with distributed architecture and we are using session authentication then we must consider any of these extra packages as well, to overcome session authentication shortcomings.</p>
<p><iframe src="https://www.youtube.com/embed/lrqE4_P8_0A" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
