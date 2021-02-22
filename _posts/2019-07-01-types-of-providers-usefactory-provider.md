---
title: Types of Providers -UseFactory Provider
date: 2019-07-01T07:39:24.000Z
published: true
comments: true
social-share: true
categories:
  - angular
tags:
  - angular
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>UseFactory provider configures the Injector to return a value by invoking a UseFactory function. It is basically a function which follows factory design pattern, and factory design is nothing but a pattern that just encapsulates the creation part of particular project. It follows polymorphism concept with same base class or same family. In this we owns the responsibility to create required class where we need all of the dependencies to pass. That’s why we should avoid using this factory provider everywhere and use it at minimum places.</p>
<p>Generally we keep this code in main part of project like where we bootstrap our project. UseFactory provider is not that simple as all other provider types, but at the same time it’s very powerful one. We can solve many complex scenarios if we use this provider intelligently. One such example is explained in detail in our video tutorial <a href="https://www.youtube.com/watch?v=rGwsw5KsL78" target="_blank" rel="noopener noreferrer"><strong>Use Factory Provider | useFactory | Tutorial | Angular</strong></a>. It describes how we can implement requirement of using different logger services in different environments, with minimal code change by using UseFactory provider.</p>
<p>Suppose in dev we need http logger, in QA we need socket logger and in prod we need in-memory logger. So in such scenarios UseFactory provider does the needful very wisely by keeping responsibility of creating classes and passing dependencies with the developer.</p>
<p><img class="alignnone size-full wp-image-2395" src="{{ site.baseurl }}/assets/2019/07/UseFactory-Provider.png" alt="" width="790" height="419" /></p>
<p>With UseFactory we can use a factory design at runtime to decide which kind of service we want to return if it got requested by any other class in our application. Sometimes we have to add some dependencies to the factory because we need it to decide whether to return service A or service B. However, we can add the dependencies with the deps property on the configuration object.</p>
<p><iframe src="https://www.youtube.com/embed/rGwsw5KsL78" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
