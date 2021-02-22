---
title: Understanding JavaScript Scope
date: 2018-11-10T00:50:53.000Z
published: true
comments: true
social-share: true
categories:
  - JavaScript
tags:
  - JavaScript
  - scope
description:
  "\n\t\t\t\tJavaScript has 4 types of scopes. Global scope, Local scope,
  Closure scope, Lexical scope.  Imagine Scope as a boundary within that things
  can be isolated. Like in your colony there are certain areas which has stuffs
  that are accessible to everyone in your colony.\t\t"
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<h2>What is Scope in JavaScript</h2>
<blockquote><p>Imagine Scope as a boundary within that things can be isolated. Like in your colony there are certain areas which has stuffs that are accessible to everyone in your colony. In contrast to that stuffs which are inside your room is not accessible to other apartment people. Scope defines the boundary.</p></blockquote>
<p>In JavaScript there are broadly 4 types of scopes</p>
<ol>
<li>Global scope</li>
<li>Local scope</li>
<li>Closure scope</li>
<li>Lexical scope</li>
</ol>
<p>In <code>ES6</code> only <code>Lexical Scope</code> is introduced all browsers do not support Lexical Scope feature. Therefore, we will talk related to lexical scope in our next article. :) stay tuned.</p>
<h2>What is Global Scope</h2>
<blockquote><p>Global scope is available for everyone. The variables inside the global scope are accessible from everywhere.</p></blockquote>
<p>https://gist.github.com/roopkt/5b84facf27db555d512c01a0c8f64564</p>
<p>In our above example <code>x</code> is declared and instantiated with <code>20</code> globally. That is why we can access this value from <code>add</code> function. <code>window</code> Object is a Global Object and it is within global scope.</p>
<h3>When should I create Global Variable</h3>
<p>Global Variables are useful to declare something which is very stable and never changes. For example: For your website if you have settings which are needed everywhere then you can create <code>APP_SETTINGS</code> as a global variable.</p>
<h2>What is Local Scope</h2>
<blockquote><p>JavaScript has only one local scope which is within a <code>function</code> only. JavaScript function creates a scope called as <code>Local Scope.</code></p></blockquote>
<h3>How to create local scope</h3>
<blockquote><p>When you write a function and declare some variables then Local Scope gets created and function variables are placed inside the local scope. Function arguments are also part of local scope.</p></blockquote>
<p>https://gist.github.com/roopkt/a9d4ddc6e0838a148e62e119458c0947</p>
<p>In our above example variable <code>a</code> which a function argument belongs to local scope only. Since local scope is not accessible outside the function therefore, I can not access variable <code>a</code> from global scope. In <code>add20</code> function <code>local scope</code> there are 2 variables one is <code>a</code> and the other variable is <code>this</code> which is a reference to the <code>window</code> Global Object. I will explain <code>this</code> keyword in my next article :)</p>
<p><img class="alignnone size-full wp-image-696" src="{{ site.baseurl }}/assets/2018/11/lcoalscope.png" alt="lcoalscope.PNG" width="254" height="140" /></p>
<h3>When should I create Local Variable</h3>
<p>When you want to isolate the variables within a defined set of boundaries and you do not want them to be accessible from outer world then you should consider creating local scope. In JavaScript whenever you write function local scope is created free for you.</p>
<h3>Can I access local scope Globally</h3>
<blockquote><p>No, local scope is only accessible within the function.</p></blockquote>
<h2>What is Closure Scope</h2>
<p>It is the local scope of a function which is accessible to its children functions. Any variable declared in a function or any arguments in a function is accessible to its children functions and this accessiblity comes from <code>Closure Scope</code> only. :)</p>
<p>https://gist.github.com/roopkt/299a0f5e76a03a4113ae4002545693d4</p>
<p>In my above eample function <code>add</code> has one local scope which has variable <code>a</code> inside the local scope. The child function of <code>add</code> function has one local scope which has variable <code>b</code> inside that additionally, it has access to <code>Closure Scope</code> also.</p>
<blockquote><p>Closure Scope gets created within child function and it contains varibles from its parent function.</p></blockquote>
<h1>Scope Challenge</h1>
<p>Well lots of theory ! Now its time for practical problem. I have given a challenge question to you. Please read this problem below and reply your answer and give reason why do you think your answer is correct.</p>
<p>https://gist.github.com/roopkt/69905659512ce17e40763aadf8f3e6b5</p>
<p>Above <code>addButtons</code> function is adding 10 buttons in the <code>list-problem div</code> . Question is what will be the alert message when I click on 9th Button ?</p>
<h2>Video on Scope</h2>
<p>I always prefer video to learn new stuff. I hope you will enjoy this video and learn JavaScript Scope better.</p>
<p>https://www.youtube.com/watch?v=Kv37h5aReq4&amp;list=PLZed_adPqIJoGpa6R2QdJy9RnqmOIy1Qd&amp;index=1</p>
<p>&nbsp;</p>
