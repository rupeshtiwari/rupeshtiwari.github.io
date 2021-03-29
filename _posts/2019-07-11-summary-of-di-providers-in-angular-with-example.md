---
title: Summary of DI providers in angular with example
date: 2019-07-11T14:53:23.000Z
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

<p>A provider is an instruction to the DI system on how to obtain a value for a dependency. It is the provider that determines which instance or value should be injected at the runtime in components, pipes, or directives. Various types of provider are involved in angular DI, so to understand the purpose of provider types please visit our video tutorial <a href="https://www.youtube.com/watch?v=J1PrGf1ADrE" target="_blank" rel="noopener noreferrer"><strong>All Providers Summary With Example | Angular | Tutorial</strong></a></p>
<p>This tutorial summarizes entire Dependency Injection (DI) provider’s usage through fun exercise, also known as Jack &amp; Jill restroom example. Suppose Jack and Jill two people want to set up their home. They have their personal preferences on few household things and few things they want to share. Both have some individual household stuff like tables, fans, tube lights etc. and have shared restroom. Now we will see how we can fulfill their household stuff requirements considering different types of angular DI providers, like where we should use which kind of provider in app development (home setup).</p>
<p>At the end of this exercise we will be capable of identifying in which scenario which provider type is suitable. Like here as Jack &amp; Jill both need independent fan, so we should use UseClass provider in both Jack &amp; Jill components (rooms). Similarly for shared restroom, we can use UseExisting provider type by defining it in Appmodule (entire Home) with two different interfaces (doors).</p>
<p>Similarly we have explained usage of other provider types through this Jack n Jill restroom example in our video. Snapshot from video session below:</p>
<p><img class="alignnone size-full wp-image-2411" src="{{ site.baseurl }}/assets/2019/07/86.png" alt="" width="790" height="386" /></p>
<p><iframe src="https://www.youtube.com/embed/J1PrGf1ADrE" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
