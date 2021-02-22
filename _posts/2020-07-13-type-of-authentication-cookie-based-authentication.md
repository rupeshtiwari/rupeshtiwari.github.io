---
title: Type of Authentication - Cookie Based Authentication
date: 2020-07-13T10:00:12.000Z
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

<p>In this video tutorial <a href="https://www.youtube.com/watch?v=ZpF8CSR4rhE&amp;list=PLZed_adPqIJp9M8sXttDmlCzWzat44GRi&amp;index=4&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Cookie Based Authentication Advantage And Disadvantage | 0010-02 </strong></a>we will discuss about cookie based authentication. In this type of authentication, whenever client sends authentication details to server, server creates unique id for that client and put that in the cookie object of the response. Cookie is nothing but an object which stores data that goes to client. So next time when client try to authenticate itself, it will send the same cookie in header message to server. As far as that cookie is not expired, user will be authenticated.</p>
<p><img class="alignnone size-full wp-image-3436" src="{{ site.baseurl }}/assets/2020/07/CO1.png" alt="" width="852" height="481" /></p>
<p>Now there are mainly three issues that come up with cookie based authentication.</p>
<ul>
<li>First one is Cookie has to be stored in client machine, which is more vulnerable to miscreants.</li>
<li>Second one is Cross request scripting – by default cookies go through header of every message, so there is chance to send your cookie data to wrong server.</li>
<li>Third and important one is some of the mobile devices do not support saving of cookie data. So if you want to scale up your API’s for mobile devices like IOS etc. then they may or may not support cookie storage.</li>
</ul>
<p>So if we are okay with these three shortcomings then we can go for cookie based authentication. Next we will learn about JWT authentication in subsequent video session.</p>
<p><iframe src="https://www.youtube.com/embed/ZpF8CSR4rhE" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
