---
title: Types of Providers -UseExisting Provider
date: 2019-07-01T07:07:16.000Z
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

<p>UseExisting provider configures the Injector to return a value of another UseExisting token. Through this provider, we can use already existing instance or object.</p>
<p>Let’s understand UseExisting provider with help of real world example through <strong><a href="https://www.youtube.com/watch?v=ySXxNhHIlVw" target="_blank" rel="noopener noreferrer">Use Existing Provider | Angular | Tutorial</a><em> </em></strong>video. This tutorial explains why and where to use UseExisting provider type. Suppose we have a Logger instance which has multiple methods like log, log-debug, log-info etc., then there comes the requirement where we need only one method let say log-info method only and it’s named as mini-Logger.</p>
<p>In this scenario there are two options, one is to create mini-logger as a separate class but with this we will end up in doing lot of coding when requirement changes, second is we can use existing Logger class. When resource is common and you want to open two or more interfaces, then in such scenarios we can use UseExisting provider type. This concept is also known as Interface segregation concept.</p>
<p><img class="alignnone size-full wp-image-2387" src="{{ site.baseurl }}/assets/2019/07/UseExisting-Provider.png" alt="" width="790" height="421" /></p>
<p>So when we ask for mini-Logger, it delegates to Logger, Logger goes to instance and in this way instance comes into picture. This is applicable at each and every node and this power can be applied to component/module/directive etc. everywhere or we can say injector can be configured anywhere using this provider type.</p>
<p><iframe src="https://www.youtube.com/embed/ySXxNhHIlVw" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
