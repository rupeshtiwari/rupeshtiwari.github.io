---
title: how to create mock object in jasmine
date: 2020-03-12T15:03:00.000Z
published: true
comments: true
social-share: true
categories:
  - jasmine
  - javascript
tags:
  - beginners
  - javascript
  - tutorial
  - testing
description: >-
  Jasmine createSpyObj allows you to create an object only with methods. However
  suppose you object has some properties as well. Then how will you create a
  complete mocked object in jasmine such that both of it's properties and
  methods are spied ?
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p><!-- wp:paragraph --></p>
<p>While writing test in jasmine you will encounter a situation where you want to create a mock object &amp; also you want to spy it's property. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Jasmine <code>createSpyObj</code> allows you to create an object only with methods. However suppose you object has some properties as well. Then how will you create a complete mocked object in jasmine such that both of it's properties and methods are spied ? </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:block {"ref":3197} /--></p>
<p><!-- wp:paragraph --></p>
<p>Lets see below example You want to create a complete mock object of Person. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:enlighter/codeblock {"language":"js"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">function Person(name) {
  this.name = name;
  greet() {
    return `Hello ${this.name}`;
  }
}</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:paragraph --></p>
<p>In Jasmine there is nothing readymade for this. However here is the trick. First create an person object and copy all of its methods by using <code>jasmin.createSpyObj</code> next one by one you can create spy on it's property using <code>createSpy</code> method. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:enlighter/codeblock {"language":"js"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">const person = {
  ...jasmine.createSpyObj('person', [
      'greet',
    ]),
  name :jasmine.createSpy();
}</pre>
<p><!-- /wp:enlighter/codeblock --></p>
