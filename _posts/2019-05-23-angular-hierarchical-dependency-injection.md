---
title: Angular Hierarchical Dependency Injection
date: 2019-05-23T10:54:01.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
  - Dependency Injection
tags:
  - Angular
  - Dependency Injection
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In <a href="https://www.youtube.com/watch?v=vJ8OvXgzMBo" target="_blank" rel="noopener noreferrer"><strong>0008-7- angular: Hierarchical Dependency Injection </strong></a>video session<strong><em>,</em></strong> you will see how Angular hierarchical dependency injection system works. You will discover how same service can be scoped by component rather than the entire app.</p>
<p>As we know Angular dependency injection system is <em>hierarchical </em>in nature. There is a tree of injectors that parallels an app's component tree. We can reconfigure the injectors at any level of that component tree. If a component requests an instance, dependency Injector looks upwards in the component tree starting from node towards the root and takes the first provider it finds. If an instance for this provider was already created previously, that instance is used, otherwise a new instance is created.</p>
<p>We can configure providers for different injectors in the injector hierarchy. An internal platform-level injector is shared by all running apps. The AppModule injector is the root of an app-wide injector hierarchy, and within an NgModule, directive-level injectors follow the structure of the component hierarchy. The choices you make about where to configure providers lead to differences in the final bundle size, service scope, and service lifetime.<img class="alignnone size-full wp-image-2109" src="{{ site.baseurl }}/assets/2019/05/providers.png" alt="" width="1500" height="448" /></p>
<p><iframe src="https://www.youtube.com/embed/vJ8OvXgzMBo" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
