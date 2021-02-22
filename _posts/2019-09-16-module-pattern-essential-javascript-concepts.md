---
title: "Module Pattern: Essential JavaScript Concepts"
date: 2019-09-16T10:00:12.000Z
published: true
comments: true
social-share: true
categories:
  - JavaScript
tags:
  - JavaScript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>The Module Pattern is one of the most common design patterns used in JavaScript. It is easy to use and creates encapsulation of our code. Before we deep dive into this, first let’s see</p>
<ul>
<li>Where do we need this module pattern?</li>
<li>What is its significance?</li>
</ul>
<p>In singleton design pattern, let’s say we have requirement like we have very less sources and those sources we do not want to keep creating multiple times. We just want to have only one instance throughout the app, in those scenarios we do singleton design pattern on server side. We make sure whenever somebody ask for instance it has to call some method in the object.</p>
<p>For example on the server side if we have class called logger and whoever wants instance of this logger then they have to call get instance method in this class and it has to be a static method. This is exactly what we want in JavaScript and in this video tutorial <a href="https://www.youtube.com/watch?v=JBqr_jnwnrA" target="_blank" rel="noopener noreferrer"><strong>JavaScript Concepts- Module Pattern | 0004-11</strong></a> we will see how we achieve it in JS. When we do not have static concept and we cannot create a static function. This is where the concept of Module pattern comes.</p>
<p>When we need a single instance of an object throughout our app we do not need to create a class and then instantiate it, instead we can use Module pattern. It has many benefits over other pattern types like regular JS class and prototype Pattern. In our video tutorial we will see how we can create a class with private function. This video will answer most of the important question like</p>
<ul>
<li>Why module pattern is helpful for creating singleton objects in JavaScript?</li>
<li>Can we write static function in a class?</li>
<li>Can we get private function in JavaScript or not?</li>
</ul>
<p>Please visit our video tutorial to get your answers, snapshot of session below:</p>
<p><img class="alignnone size-full wp-image-2587" src="{{ site.baseurl }}/assets/2019/09/JS-Module.png" alt="" width="853" height="476" /></p>
<p><iframe src="https://www.youtube.com/embed/JBqr_jnwnrA" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
