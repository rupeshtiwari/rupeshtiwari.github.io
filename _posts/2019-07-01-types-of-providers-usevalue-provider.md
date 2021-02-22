---
title: Types of Providers -UseValue Provider
date: 2019-07-01T07:15:19.000Z
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

<p>UseValue provider configures the Injector to return a value for a token. It comes in that category of providers where we do not have unique thing to identify them at run time.</p>
<p>In our video session <strong><a href="https://www.youtube.com/watch?v=BQoPlIOPCho" target="_blank" rel="noopener noreferrer">Use Value Provider | useValue | Tutorial</a><em> </em></strong>we will explain</p>
<ul>
<li>What UseValue providers are?</li>
<li>What is their significance in web programming?</li>
</ul>
<p>There are certain scenarios where we want to insert certain set of values/constants into our code base like components/modules etc. Rather than hard coding them inside the component/module, we can set them as a service. Let’s go through one real time example to understand this.</p>
<p>Suppose we prepared a web application for one of our client and want to sell same app to other customer. Here if we hardcode values/constants like logos, names, formatting as per the requirement of client1, then in order to reuse same codebase for client2 it will take lot of effort to prepare exactly same app for other client. But instead of hard coding if we keep all these values/constants in a Config file then we can deliver same app to client2 with minimal effort. This Config file can be injected into required codebase as many times as per the requirement. How to inject this Config file into our code? Answer is UseValue provider.</p>
<p>As we know there is no runtime existence for this, so to make it possible we use Injection Token as a class and use it as a DI token in provider. Snapshot from our video tutorial:</p>
<p><img class="alignnone size-full wp-image-2391" src="{{ site.baseurl }}/assets/2019/07/useVale-Provider.png" alt="" width="790" height="421" /></p>
<p><iframe src="https://www.youtube.com/embed/BQoPlIOPCho" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
