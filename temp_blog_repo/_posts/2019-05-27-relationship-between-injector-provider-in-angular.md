---
title: Relationship between Injector & Provider in Angular
date: 2019-05-27T09:26:03.000Z
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

<p>A Dependency Provider configures an Injector with a DI Token, which that injector uses to provide the concrete, runtime version of a dependency value. The injector relies on the provider configuration to create instances of the dependencies that it injects into components, directives, pipes, and other services.</p>
<p>Let’s try to understand this relationship with help of real world example. Suppose a customer goes to walmart to buy a computer table (C-Table), here Customer is nothing but a Component and Walmart where customer is searching for C-Table (DI-Token) is an Injector. Now if Computer Table is not available at walmart then it will ask manufacturing industry (Provider) to provide that Computer table.</p>
<p>This example is more precisely explained in video <strong><a href="https://www.youtube.com/watch?v=YYlWE30ydz4" target="_blank" rel="noopener noreferrer">0008-15- angular: Injector and Provider Relationship 1/4. </a></strong>Snapshot below:</p>
<p><img class="wp-image-2141 alignnone" src="{{ site.baseurl }}/assets/2019/05/IP-1.png" alt="" width="564" height="353" /></p>
<p>In simple words, Injector has key-value pair and If value is not available for any key (DI token) in injector then it will ask provider to provide the value for that key. So basically provider knows how to create or get that value like Computer Table in above example, here Walmart is Injector and warehouse is Provider.</p>
<p>An Injector &amp; provider has one-to-one relationship, Injector uses the provider. Whenever any component or module asks for any service then an injector associated with that particular component or module will go to provider to get the required service.</p>
