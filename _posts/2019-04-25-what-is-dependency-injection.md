---
title: What is Dependency Injection?
date: 2019-04-25T11:30:23.000Z
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

<p>Wikipedia Definition: Dependency injection is a technique whereby one object (or static method) supplies the dependencies of another object. A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it. The service is made part of the client's state. Passing the service to the client, rather than allowing a client to build or find the service, is the fundamental requirement of the pattern. Now let’s decode this definition with help of real world example:<br />
Let’s say we have a ‘Room’ class which contains various objects such as TV – LG brand, AC- Voltas etc. Here the ‘Room’ class is responsible for creating all the dependency objects. Now, what if we decide to change TV brand from LG to Samsung in future? If we do not use DI then we need to recreate the Room class with object having a new Samsung dependency. But by using dependency injection (DI), we can change the TV brand on the fly because dependencies can be injected at runtime.</p>
<p><img class="alignnone size-full wp-image-2008" src="{{ site.baseurl }}/assets/2019/04/DI.png" alt="" width="2000" height="598" /><br />
DI concept behaves as an intermediary in our code who does all the work of creating the preferred objects and providing it to the class. It makes our class independent from creating the objects.<br />
To get more insight into it, follow our Video tutorial <strong><a href="https://www.youtube.com/watch?v=Uo4TTIVWB_I" target="_blank" rel="noopener noreferrer">0008-2- What is Dependency Injection?</a></strong></p>
<p><iframe src="https://www.youtube.com/embed/Uo4TTIVWB_I" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
