---
title: What are providers & its various types in Angular?
date: 2019-06-27T06:29:54.000Z
published: true
comments: true
social-share: true
categories:
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

<p>A provider is an instruction to the DI system on how to obtain a value for a dependency. Most of the time, these dependencies are services that you create and provide.<br />
Provider is the one who serves an Injector and provides dependencies for each DI-token. We can configure injectors with providers and a provider links a token to a dependency. The real configuration for a provider is an object which describes a token and configuration for how to create the associated dependency. Basically it gives the how part of dependency, means how that dependency is created.<br />
Based on different-different requirements, we create various types of providers. They are classified as:</p>
<p><img class="alignnone size-full wp-image-2358" src="{{ site.baseurl }}/assets/2019/06/ProviderTypes.png" alt="" width="783" height="194" /></p>
<p>Visit our tutorial video <a href="https://www.youtube.com/watch?v=p-11o8INGOA" target="_blank" rel="noopener noreferrer"><strong>0008-20- angular: types of providers and type provider </strong></a>to get more insight on this topic and find answers to questions like what are Providers and how they works in Angular.</p>
<p><strong>Type Provider: </strong>It configures the Injector to return an instance of Type when `Type' is used as the token. Whenever component asks for class name, Type provider provides dependency for that corresponding class. In <a href="https://www.youtube.com/watch?v=p-11o8INGOA" target="_blank" rel="noopener noreferrer"><strong>video</strong></a>, it’s nicely explained with help of Logger class, snapshot below:</p>
<p><img class="alignnone size-full wp-image-2355" src="{{ site.baseurl }}/assets/2019/06/ProviderTypes-1.png" alt="" width="790" height="350" /></p>
<p><iframe src="https://www.youtube.com/embed/p-11o8INGOA" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
