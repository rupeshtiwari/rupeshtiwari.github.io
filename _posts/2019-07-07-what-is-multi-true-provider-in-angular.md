---
title: What is multi True provider in angular?
date: 2019-07-07T14:12:00.000Z
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

<p>Multi: true means that one provider token provides an array of elements. Using multi: true we tell Angular that the provider is a multi provider. This is used mostly in those scenarios where we use primitives or chunk of values.</p>
<p>Generally we do not use it in injecting the array of classes, but there are some use cases in framework where we do. Let’s understand with one real world example. Suppose we are using two services pricing service and sales service. In sales we are doing order and in pricing we are charging for that order. Both of them have their own configs and at one place we want to put all configs together, this is the place where we use multi: true. So when we need multiple strings to be passed as a single array, then we use multi: true.</p>
<p>To get more details, please visit our video <a href="https://www.youtube.com/watch?v=DNKGUymAC_Q" target="_blank" rel="noopener noreferrer"><strong>Multi True Provider | mulTitrue | Angular DI Tutorial</strong></a></p>
<p><img class="alignnone size-full wp-image-2399" src="{{ site.baseurl }}/assets/2019/07/84.png" alt="" width="790" height="394" /></p>
<p>As we mentioned earlier with multi providers, we can provide multiple values for a single token in DI. Usually, when we register multiple providers with the same token the last one wins.<br />For example all directives for router support routerLink, routerOutlet are provided by ROUTER_DIRECTIVES. If a new provider is registered with the token ROUTER_DIRECTIVES, then it overrides the previously registered directives. If multi: true (on the first registered and the new provider) is set, the new directives are added to the previously registered directives instead of overriding.</p>
<p><iframe src="https://www.youtube.com/embed/DNKGUymAC_Q" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
<p><!-- wp:html --></p>
<div class="gumroad-product-embed" data-gumroad-product-id="UJClm"><a href="https://gumroad.com/l/UJClm">Loading...</a></div>
<p><!-- /wp:html --></p>
