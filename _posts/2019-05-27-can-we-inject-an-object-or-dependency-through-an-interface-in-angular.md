---
title: Can we inject an object or dependency through an Interface in Angular?
date: 2019-05-27T09:08:30.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
  - Dependency Injection
tags:
  - Dependency Injection
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>No, we cannot do dependency injection through Interface in Typescript Angular; it can be done in C# or Java. This is very important concept need to know for a single full stack developer as they are doing server side coding &amp; JavaScript coding both. That is the reason interface use is generally avoided in front end or typescript framework, use classes instead for making it DI (Dependency Injection) capable.</p>
<p><strong><a href="https://www.youtube.com/watch?v=c9LxdfuMhNo" target="_blank" rel="noopener noreferrer">0008-13- angular: Dependency Injection (DI) Token part 2</a></strong> neatly explains</p>
<ul>
<li>Why Interface cannot be used as DI Token.</li>
<li>It describes How Class can be used as a DI token and Interface cannot.</li>
</ul>
<p>In angular, class name can be used as DI Token because it finally converts class name into function and function is uniquely defined that can be used to find out the dependency. But for Interface there is no existence at run time, once you compile your typescript into java script there is no existence of interface. That’s why we cannot use Interface as DI token in Typescript Angular. Snapshot of our video session below:</p>
<p><img class="alignnone size-full wp-image-2133" src="{{ site.baseurl }}/assets/2019/05/DI-2.png" alt="" width="750" height="473" /></p>
