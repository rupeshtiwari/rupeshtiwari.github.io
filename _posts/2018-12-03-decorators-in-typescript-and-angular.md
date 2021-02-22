---
title: Decorators in Typescript and Angular
date: 2018-12-03T18:57:46.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
  - Decorator Design Pattern
  - JavaScript
  - Typescript
tags:
  - Angular
  - Decorator
  - Typescript
description:
  "\n\t\t\t\tDecorators in Typescript and Angular. Decorator is a concept in
  Typescript that can be used to annotate a class or it's members. Decorator
  also enables meta programming where one can collect as many meta data as
  required during run time.\t\t"
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<h2><img class="alignnone size-full wp-image-921" src="{{ site.baseurl }}/assets/2018/12/decorator-in-typescript-and-Angular.jpg" alt="Decorator in Typescript and Angular" width="750" height="501" /></h2>
<blockquote><p><strong>Decorator</strong> is a concept in Typescript that can be used to annotate a class or it's members. Decorator also enables meta programming where one can collect as many meta data as required during run time.</p></blockquote>
<p>If you are coming from Asp.Net background like I do then you might be aware of Action Filters. Action filters in Asp.Net MVC Framework are also example of decorators.</p>
<p>Decorator in Typescript is nothing but a function and I will explain more about decorator below.</p>
<h2>Decorator Philosophy</h2>
<p>Decorator is an Aspect Oriented Programming paradigm. Where we modularize and define cross-cutting functionalities and hence achieve a strong Separation of Concerns. cross-cutting concerns are like logging, applying transactions, validations etc. It is a good design practice to keep our business logic code separate from other infrastructure or cross-cutting related code. And decorators are great tool to separate them in independent reusable libraries.</p>
<p>Decorators are inspired by <a href="https://en.wikipedia.org/wiki/Decorator_pattern" target="_blank" rel="noopener noreferrer">Decorator Design Pattern</a>. Decorator is also used to collect metadata at run-time and hence enables meta-programming.</p>
<h2>Why should I use Decorator</h2>
<p><img src="{{ site.baseurl }}/assets/2018/12/photo-1458419948946-19fb2cc296af?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb" alt="forest trees marked with question marks" /></p>
<p>Even though <code>Decorators</code> are experimental feature in Typescript. It is wisely and widely used in many JavaScript frameworks like Angular and NgRX. I believe below are the main motivation behind Decorators and you should also start thinking to use Typescript <code>Decorator&nbsp;</code>in your code.</p>
<ul>
<li>Collect meta data about class or class members.</li>
<li>Separate cross cutting concerns like logging</li>
<li>Remove code duplicate, repetition and redundancy anti pattern from code.</li>
</ul>
<p>In <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">Angular Framework </a>there are predefined decorators like <code>Component, Directive, Input, Output, HostListener</code>&nbsp;etc. Angular has created these decorators to keep the redundant and boring task done separately by the Angular Team itself. Therefore, the consumer or Angular Framework does not need to worry about these implementations and&nbsp; they just focus on business logic. Like <span style="color: #2e4453; font-family: Monaco, Consolas, Andale Mono, DejaVu Sans Mono, Courier 10 Pitch, Courier, monospace;"><span style="background-color: #c8d7e1;">Component&nbsp;</span></span>decorator collects the metadata about selector name, html file path, CSS path and many more information. Under the hood <code>Component</code>&nbsp;decorator does few important tasks that is required for each component in your project, that is very repetitive work like getting HTML file applying CSS on it, Creating custom element with the selector name and rendering it on DOM. All of these tasks are not rocket science however, it is needed for every component and something can be done very easily by decorator function.</p>
<h2>Decorator Real World Example</h2>
<p><img src="{{ site.baseurl }}/assets/2018/12/photo-1512373374262-e0f6da31389f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb" alt="girl decorating the Christmas tree" /></p>
<p>I want to explain decorator work by giving practical example. Many of us might have worked with personal Advocates. How advocate works ? When you assign advocate for your case then this how coordination between you and your advocate happens:</p>
<ul>
<li>Any call or request coming from Court for you first goes to your advocate.</li>
<li>Advocate does preliminary work on your court request and then he asks you to do the work just needed for you like putting your signatures, handing over personal docs etc.</li>
<li>Once you are done with your work then advocate sends the respond back court and does further required work for court request on behalf of you and be prepared for next request.</li>
</ul>
<p>There are many specialized Advocates who are famous for their special works like marriage certificate, crime, insurance etc. These Advocates keep doing some redundant and repetitive works for their clients. So that their clients remain happy and they just do their specific needed job only. Lots of ceremonial work and preparations are done by Advocates.</p>
<p>I know I have given long story :) some of you might think I am Advocate? By the way I am not an advocate! However, this example comes in my mind whenever, I think about Decorators.</p>
<h2>Decorator Function in Typescript and its Explanation</h2>
<p>In typescript Decorator function is typically written by just simple function which receives 3 parameters like <code>target, propertykey and descriptor</code></p>
<pre class="EnlighterJSRAW" data-enlighter-language="javascript"> 
function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
}
</pre>
<p>https://gist.github.com/roopkt/ff673512f854e77a7dab6231d528438a</p>
<h2>Decorator Example in Typescript</h2>
<p>Decorators work very similar to Advocates like I explained above. Decorators can be applied on class and it's class members only. As of now in Typescript you can not apply decorator on any function, it has to be class or its members. Decorator is a function in Typescript and while applying decorator we have to pre·pend decorator by `@` symbol. Take below example depicted in picture, <code>LogMethod</code>&nbsp;is a decorator which you have applied on <code>Calculator</code>'s <code>add</code>&nbsp;method.</p>
<p><img class="alignnone size-full wp-image-924" src="{{ site.baseurl }}/assets/2018/12/logmethod-decorator-typescript-and-angular.png" alt="logmethod-decorator-typescript and angular" width="821" height="416" /></p>
<p>Suppose we created a decorator to log before and after class method called. Then we can create `LogMethod` decorator and apply on each method of class where we desire to log. In above diagram whenever `add` method of the calculator class will be called then first `LogMethod` function will be called. `LogMethod` will first do logging before calling actual function. Then decorator will call actual function and get the result. Also decorator will log the result of execution and then will return the result. So you can see how decorator can do logging task very simply. You just need to apply <code>@LogMethod</code>&nbsp;decorator on <code>add</code>&nbsp;function of the <code>Calculator</code>&nbsp;class.&nbsp; Here is the code for <code>LogMethod</code>&nbsp;decorator.&nbsp; This is an example of method decorator.</p>
<p>https://gist.github.com/roopkt/91bf8284407bc9289810de61da57cf20</p>
<p>Here is the code how you can apply <code>LogMethod</code>&nbsp;decorator on <code>add</code>&nbsp;method of&nbsp;<code>Calculator</code>&nbsp;Service in your <code>Angular App</code>&nbsp;.</p>
<p>https://gist.github.com/roopkt/a4f5eaf7a2192ebc3009ce099809931c</p>
<h2>Decorator Example in Angular App</h2>
<p>As I already mentioned decorators are widely and wisely used in Angular. There are many built in decorators. Like in <code>NgRx</code>&nbsp;Library very famous decorator is <code>@effect</code>&nbsp;.</p>
<p>I already explained you how you can create <code>method decorator</code>&nbsp;and apply either in vanilla Typescript class or it could be a <code>service class</code>&nbsp;of Angular App. Now I will explain you how you can create and <code>constructor decorator</code>&nbsp;that you can use in your Angular App.</p>
<p>Imagine you want to aromatically unsubscribe all of your <code>RxJS</code>&nbsp;subscriptions in your component.&nbsp; Sometimes we forget to unsubscribe RxJS subscriptions and hence our angular app becomes very slow because of memory leak issues. Therefore, in order to help ourselves we will create custom decorator and use it on component class. There are various ways to unsubscribe RxJS subscriptions. However for the sake of understanding decorator we will try to achieve this functionality by creating our own custom <code>constructor</code>. I personally love constructor decorators because, it is very powerful such that it can intercept any public method of the target class and apply decoration on it. Here is my code for <code>autoClearSubscriptions</code>&nbsp;decorator.</p>
<p>https://gist.github.com/roopkt/cd1d6798d60a7253e1242e66bf4fdc95</p>
<p>Now its time to apply our custom decorator on our angular component. Here is the code for that.</p>
<p>https://gist.github.com/roopkt/6710d618ff1b0ac033c30570d37490ac</p>
<h2>Conclusion</h2>
<p>I did not go more deep on decorator function and its parameters passed by Typescript. Because, it will become boring to you. However, if you really think I should explain my code as well then please feel free to write in comment box. I will be happy to see your comments and I might write explanation to my code as well till than Happy Coding and Bye Bye!</p>
<h2>References</h2>
<p><a href="https://www.typescriptlang.org/docs/handbook/decorators.html" target="_blank" rel="noopener noreferrer">Decorators Typescript Documentations</a></p>
