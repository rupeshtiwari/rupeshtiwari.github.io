---
title: What is Injection Token and Where to use it?
date: 2019-05-27T09:12:00.000Z
published: true
comments: true
social-share: true
categories:
  - angular
  - dependencyinjection
tags:
  - dependencyinjection
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>We cannot simply ignore the shortcomings like Interface, Array (bunch of objects) cannot be used as DI Token in angular. There can be possibility where we need to inject something which is not available at runtime in angular like Interface, callable type or Array.</p>
<ul>
<li>To solve this problem Angular introduced another type of DI Token known as Injection Token as a class. We can give unique name to this class as per our requirement.</li>
<li>We can use an Injection Token whenever the type we are injecting is not reified (does not have a runtime representation) such as when injecting an interface, callable type, array or parameterized type.</li>
</ul>
<p>Let’s understand this with help of an example:</p>
<p>Suppose, I want to inject a configuration into my project and for that configuration I have created an interface. Now I want to create dependency injection token for that interface. Here we can create Injection token to fulfill our requirement.</p>
<p>For more details, please follow our video <strong><a href="https://www.youtube.com/watch?v=F4JcAtqUQ2o" target="_blank" rel="noopener noreferrer">0008-14- angular: Dependency Injection (DI) Token 3/3</a></strong> to get the complete picture of Injection token concept. It nicely explains where to use Injection token and what standards need to be followed while using it.</p>
