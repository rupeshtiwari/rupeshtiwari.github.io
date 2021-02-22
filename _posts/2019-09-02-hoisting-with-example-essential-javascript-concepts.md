---
title: Hoisting with Example - Essential JavaScript Concepts
date: 2019-09-02T10:00:07.000Z
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

<p>Hoisting is another important JavaScript concept. It defines that in JS every variable gets declared at the beginning of the function. It literally means as its name, which says raising something to top like hoisting a flag. It is JavaScript's default behavior of moving declarations to the top.</p>
<p>So basically Hoisting is a JavaScript concept where variables and function declarations are moved to the top of their scope before code execution. When JavaScript compiles our code, all variable declarations using <em>var</em> are hoisted/lifted to the top of their functional/local scope (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made.</p>
<p>In core JS generally we should not declare and assign variable together at some point, it is considered as one the golden rules of JS. We should decide upfront our variables requirement for any function and declare them in the beginning itself. It means if we know Hoisting concept then before JS declare variables for us at the top, we should do it on our own in order to create bug free code.</p>
<p>Have a look into our video tutorial <strong><a href="https://www.youtube.com/watch?v=Wm3X_BvsdZE&amp;list=PLZed_adPqIJoGpa6R2QdJy9RnqmOIy1Qd&amp;index=6" target="_blank" rel="noopener noreferrer">JavaScript Concepts: Hoisting Example | 0004-06</a><em>, </em></strong>to understand Hoisting concept in simplest way. It also explains one practical example in detail from our GitHub repository <strong><a href="https://github.com/rupeshtiwari/javascript-concepts" target="_blank" rel="noopener noreferrer">https://github.com/rupeshtiwari/javascript-concepts</a></strong>. Snapshot of example with detailed description is shown below for better understanding. Same you can check out anytime from our GitHub code base.</p>
<p><img class="alignnone size-full wp-image-2552" src="{{ site.baseurl }}/assets/2019/09/JS-Hoisting.png" alt="" width="632" height="558" /></p>
<p><iframe src="https://www.youtube.com/embed/Wm3X_BvsdZE" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
