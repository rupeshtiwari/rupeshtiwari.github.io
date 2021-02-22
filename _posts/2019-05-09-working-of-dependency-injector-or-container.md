---
title: Working of Dependency Injector or Container
date: 2019-05-09T11:52:41.000Z
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

<p>Dependency Injection Container or Injector is basically a static or global thing which is being used throughout the app to inject dependencies or objects. It knows how to incorporate and configure dependencies. To do this, it needs information about the constructor arguments and the relationships between the objects. In simple words, A Dependency Injection Container manages objects right from their instantiation to their configuration. Its main responsibilities are classified as:</p>
<ul>
<li>Owning map or container which stores info about token &amp; dependencies.</li>
<li>Creating the objects or dependencies.</li>
<li>To identify which classes require those objects – Maintaining the scope.</li>
<li>Provide all those objects to required classes – Injecting</li>
</ul>
<p>If there is any change in objects, then Dependency Container looks into it without disturbing or affecting the concerned class using those objects. In this way in case of any future change also, Dependency Injector takes responsibility to provide the appropriate objects to the class.</p>
<p>To know more on DI Container working and its responsibilities, visit our tutorial video <a href="https://www.youtube.com/watch?v=nf-4vmqcYYY" target="_blank" rel="noopener noreferrer"><strong>0008-4- What is Dependency Injection Container or Injector?</strong></a></p>
<p><iframe width="790" height="350" src="https://www.youtube.com/embed/nf-4vmqcYYY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
