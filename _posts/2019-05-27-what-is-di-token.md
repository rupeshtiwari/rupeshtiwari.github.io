---
title: What is DI Token
date: 2019-05-27T09:01:44.000Z
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

<p>When we think of learning Dependency Injection in Angular, couple of questions arises like</p>
<ul>
<li>How this DI concept works in Angular?</li>
<li>What are all the important components that make it work?</li>
</ul>
<p>This video <a href="https://www.youtube.com/watch?v=_4OXnYZCh18" target="_blank" rel="noopener noreferrer"><strong>0008-12- angular: Dependency Injection (DI) Token part 1/3 </strong></a>will help you to get answers for most of your queries. It makes you understand</p>
<ul>
<li>What that core component is?</li>
<li>Why it is required?</li>
<li>What exactly it does?</li>
</ul>
<p>This component is known as DI Token (Dependency Injection Token) which is nothing but a key part in key-value pair similar to a lookup key which does lookup in lookup table.</p>
<p>E.g. If there is class A needs class B as dependency, so in order to know where that B instance exist and to get that &amp; give it to Class A, angular need some identifier that name or key to find/identify the instance of B is known DI Token.</p>
<p>DI Token should be valid at run time (JavaScript) and compile time (Typescript) both. A token can be a String, a Class or a Type. Refer to <a href="https://www.youtube.com/watch?v=_4OXnYZCh18" target="_blank" rel="noopener noreferrer"><strong>video</strong></a> to understand various token types in detail with some real time examples. Snapshot below:</p>
<p><img class="alignnone size-full wp-image-2128" src="{{ site.baseurl }}/assets/2019/05/DI-1.png" alt="" width="750" height="472" /></p>
<p>So in simple words we can define DI Token as a key to lookup for instance of the dependencies and it has to be valid at run time.</p>
