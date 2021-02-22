---
title: How Injectors are inherited in angular?
date: 2019-05-27T09:31:47.000Z
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

<p>As we know, one must configure an injector with a provider, or it won't know how to create the dependency. The most obvious way for an injector to create an instance of a service class is with the class itself. If you specify the service class itself as the provider token, the default behavior is for the injector to instantiate that class with new.</p>
<p><a href="https://www.youtube.com/watch?v=aIqkRraCUiw" target="_blank" rel="noopener noreferrer"><strong>0008-16- angular: Injector and Provider Relationship 2/4 </strong></a>video describes</p>
<ul>
<li>How Injectors are inherited in angular?</li>
<li>How angular Dependency Injection is hierarchical in nature?</li>
</ul>
<p>Each component has its own Injector &amp; provider. If it needs any service first it will go to its own Injector &amp; provider. If required service is not available at that node, it will go to injector of its parent node &amp; corresponding provider. This process goes until it gets the node with provider which will provide the required service.</p>
<p>This is how Injectors are inherited in angular. Below snapshot shows Angular Dependency Injection hierarchy through Log service example.</p>
<p><img class="alignnone size-full wp-image-2145" src="{{ site.baseurl }}/assets/2019/05/IP-2.png" alt="" width="751" height="471" /></p>
