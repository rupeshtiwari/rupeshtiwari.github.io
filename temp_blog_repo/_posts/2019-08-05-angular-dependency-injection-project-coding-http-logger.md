---
title: Angular Dependency Injection Project coding – http Logger
date: 2019-08-05T10:00:03.000Z
published: true
comments: true
social-share: true
categories:
  - angular
  - dependencyinjection
tags:
  - angular
  - dependencyinjection
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In our third angular coding session <a href="https://www.youtube.com/watch?v=QzgnkJmIhyU&amp;list=PLZed_adPqIJrQ5uFoaQg8P_fDNGjpeSRH&amp;index=30" target="_blank" rel="noopener noreferrer"><strong>Angular Coding Session Learn Dependency Injection | Practical | 3/8 </strong></a>we will see how to use http logger as a service in our project. Here we will learn very interesting principle of Object Oriented Programming.</p>
<p>Till now we have done coding for Hierarchical DI, Console Logger as a service in our project. Now suppose our requirement changed and we are asked to use http logger instead of Console logger. While doing impact analysis for this change we came to know a very big designing flaw that we introduced while coding our application. I.e. we should not have specifically used Console logger, rather than we should have used abstract of it named as logger that can behave as any type like console, http, and web-socket logger during implementation time. So here we should use open-close concept in our designing i.e. application should be open for extension and closed for changes. It is nothing but polymorphism principle of OOPs that gives us this open-closed concept in designing. As per this principle, we should have a base class and from this base class we will derive our specialized classes.</p>
<p>For example here we can create base class Logger as an abstraction and then it could be any logger like console, http etc. during implementation time. Hence whenever we want to protect our code against new type, we will use polymorphism principle. We will create base class as an abstract and will use this base class everywhere.</p>
<p>All this is explained in detail with coding in our demo session, snapshot below:</p>
<p><img class="alignnone size-full wp-image-2503" src="{{ site.baseurl }}/assets/2019/08/DI_Coding_3.png" alt="" width="790" height="415" /></p>
<p><iframe src="https://www.youtube.com/embed/QzgnkJmIhyU" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
