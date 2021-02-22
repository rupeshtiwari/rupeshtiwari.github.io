---
title: What is the Scope of Dependency in Angular?
date: 2019-05-27T09:38:46.000Z
published: true
comments: true
social-share: true
categories:
  - AngularJS
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

<p>Scope of Dependency in Angular is very important concept to understand for a full stack developer. This is primarily asked question by interviewer in many different forms.</p>
<p>Let’s understand the basics of this concept through our video tutorial <a href="https://www.youtube.com/watch?v=JhiadEW3Sdo" target="_blank" rel="noopener noreferrer"><strong>0008-17- angular: Injector and Provider Relationship 3/4.</strong></a> It explains how scope of dependency is defined at each component or module and how it serves the purpose in real world projects.</p>
<p>Modules, components or directives use injectors and Injector use provider to finally get the dependency. At the root node of a module if we define a provider, then its scope is entire module where it is defined. Whichever node a provider is defined, it is scoped to that node and its hierarchy. We know that component or module get Injectors at bootstrapping time. Injectors uses provider to find out any dependency. If it’s not available at its provider, it will go to its parent component and ask the dependency there with same DI token. If it gets there it will give or its goes to above hierarchy until it gets the dependency.</p>
<p><img class="alignnone size-full wp-image-2149" src="{{ site.baseurl }}/assets/2019/05/IP-3.png" alt="" width="749" height="421" /></p>
<p>At any time at any node if you define another provider for the same DI token you will get new independent instance there. This makes it a very powerful concept in angular as for a list of items we can define independent instance of same service for each item. In AngularJS if we define a service it was singleton or global throughout the app, and this shortcoming was overcome through this concept in Angular 2.</p>
