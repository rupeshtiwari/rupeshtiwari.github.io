---
title: Scope in Detail with example- Essential JavaScript Concepts
date: 2019-08-26T10:00:16.000Z
published: true
comments: true
social-share: true
categories:
  - javascript
tags:
  - javascript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>Though the concept of scope is not that easy to understand for beginners, yet we have tried to explain it in easiest way in our video tutorial <a href="https://www.youtube.com/watch?v=0n7XEO6qmeg&amp;list=PLZed_adPqIJoGpa6R2QdJy9RnqmOIy1Qd&amp;index=2" target="_blank" rel="noopener noreferrer"><strong>JavaScript Concepts: Scope Example | 0004-02</strong></a>. Understanding of this JS feature will make your code stand out, reduce errors and help you make powerful design patterns with it. Let us deep dive into this through one practical example.</p>
<p>Suppose we have a requirement to add ten buttons and on click of each button we want to show the number of that button i.e. its iteration number. In our video tutorial we will learn how we can avoid the issue faced by using simple for loop if we understand the concept of Scope. We will see how in JavaScript scope works or why JS scope does not honors the curly braces.</p>
<p>In JavaScript block statements like <strong>if</strong> and <strong>switch</strong> conditions or <strong>for</strong> and <strong>while</strong> loops, unlike functions, don't create a new scope. Variables defined inside of a block statement will remain in the scope they were already in. ECMAScript 6 introduced the <strong>let</strong> and <strong>const</strong> keywords. These keywords can be used in place of the <strong>var</strong> keyword. JavaScript has lexical scoping with function scope. In other words, even though JavaScript looks like it should have block scope because it uses curly braces { }, a new scope is created only when you create a new function. So within each iteration if I want my own scope, the way to do it is create a function and call. That’s the reason it’s a good practice to have functions to do small-small tasks as in these functions we can define our own scope or boundaries.</p>
<p>Please check out our GitHub repository here <strong><a href="https://github.com/rupeshtiwari/javascript-concepts" target="_blank" rel="noopener noreferrer">https://github.com/rupeshtiwari/javascript-concepts</a>,</strong> to understand Scope in detail with practical example.</p>
<p><iframe src="https://www.youtube.com/embed/0n7XEO6qmeg" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
