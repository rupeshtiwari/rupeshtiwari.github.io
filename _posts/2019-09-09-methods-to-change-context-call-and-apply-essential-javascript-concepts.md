---
title:
  "Methods to change Context – CALL and APPLY: Essential JavaScript Concepts"
date: 2019-09-09T10:00:10.000Z
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

<p>In our previous article <a href="https://www.youtube.com/watch?v=3JFm7DS6SG8" target="_blank" rel="noopener noreferrer"><strong>JavaScript Concepts: What Is this Keyword | 0004-08</strong></a> We read about ‘This’ concept of JavaScript which refers to calling context of the function. Now we will see, what are the available possible ways to call the context we have.</p>
<p>In our video tutorial <strong><a href="https://www.youtube.com/watch?v=TZ8hrRZs9hM" target="_blank" rel="noopener noreferrer">JavaScript Concepts: what Is this Keyword | part 2 | 0004-09</a><em> </em></strong>We have explained two different ways of calling context, one is CALL and other one is APPLY. One very common thing that strikes our mind while writing JavaScript is when to use Call and when to use Apply. This question is very nicely explained in our video session with some practical examples.</p>
<p>Both methods Call() and Apply() serve the exact same purpose. The only difference between how they work is that Call() expects all parameters to be passed in individually, whereas Apply() expects an array of all of our parameters. Apply lets you invoke the function with arguments as an array; Call requires the parameters be listed explicitly. A useful mnemonic is <strong><em>"</em>A<em> for </em>a<em>rray and </em>C<em> for </em>c<em>omma."</em></strong></p>
<p><strong>Pseudo syntax:</strong></p>
<p>theFunction.apply(valueForThis, arrayOfArgs)</p>
<p>theFunction.call(valueForThis, arg1, arg2, ...)</p>
<p><img class="alignnone size-full wp-image-2583" src="{{ site.baseurl }}/assets/2019/09/JS-This1.png" alt="" width="790" height="350" /></p>
<p><iframe src="https://www.youtube.com/embed/TZ8hrRZs9hM" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
