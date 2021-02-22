---
title: Types of Providers -UseClass Provider
date: 2019-07-01T06:56:48.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
tags:
  - Angular
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>Class Provider configures the Injector to return an instance of useClass for a token. It is similar to type provider but it has different way of providing corresponding dependency.</p>
<p>There is a typical example to explain useClass provider. Let’s understand this with logger example. We have a function named Log; it takes a message and does in-memory logging i.e. console.log. Suppose this is implemented in thousand components in this way. Now if requirement changes and we are asked to use http logger in place of in-memory logger. If we go and change individual components then we may end up in breaking software programming basic engineering principle that says, when we are changing something we should not change many things. So here we will use polymorphism concept that says once you have class defined and most of the components are using that class, and then tomorrow if you just want to change the behavior of that object then as per object oriented principle, create a new class rather than modifying that class. Means we can create separate class and inherit it from base class. Now we will be having two classes and we can switch anytime between them as per requirement. Tomorrow they can ask us to change it to another thing may be file log.</p>
<p>This can be achieved through useClass provider as it enables us to modify code as per changing requirements. Our tutorial video <strong><a href="https://www.youtube.com/watch?v=VB3HAIv5BvQ" target="_blank" rel="noopener noreferrer">Use Class Provider | Angular</a><em> </em></strong>explains how without changing any component, by just adding a new class with useClass provider we resolved the issue in this example.</p>
<p><img class="alignnone size-full wp-image-2382" src="{{ site.baseurl }}/assets/2019/07/Useclass_Provider.png" alt="" width="790" height="420" /></p>
<p><iframe src="https://www.youtube.com/embed/VB3HAIv5BvQ" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
