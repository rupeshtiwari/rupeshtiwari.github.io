---
title: How to do Html Form Validation using RxJS
date: 2019-03-05T00:09:44.000Z
published: true
comments: true
social-share: true
categories:
  - rxjs
tags:
  - validation
description:
  "\n\t\tDid you know you can use RxJS simple operators and do html form
  validation re-actively? Well I learn RxJS operators by implementing them in
  real world project. In this post I will explain combineLatest operator and its
  use in real problem solving. \t\t\t\t"
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p><!-- wp:paragraph --></p>
<p>Did you know you can use RxJS simple operators and do html form validation re-actively? Well I learn RxJS operators by implementing them in real world project. In this post I will explain <code>combineLatest</code>&nbsp;operator and its use in real problem solving.&nbsp;</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Sample HTML Form</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>This is a very simple html form however once you understand the concept you can build any complex form. For now I am sticking with this simple form. Feel free to add more fields on this.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:enlighter/codeblock {"language":"html"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;form action="#">
   First Name: &lt;input type="text" id="firstName">
    &lt;br>
   Last Name: &lt;input type="text" id="lastName">
  &lt;/form>
  &lt;div id="message">&lt;/div></pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:block {"ref":3197} /--></p>
<p><!-- wp:heading --></p>
<h2>Validation Code</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>I use <code>fromEvent </code> operator to create observable out of input events of text boxes in the form. Next I will use <strong>RxJS </strong><code>startWith</code> operator to initialize my observables with empty data. Next I am using <strong>RxJS </strong><code>combineLatest</code> operator to create a combination of all of the entries of the form as a single stream of data and doing validation over there to find out is form valid or not.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Finally based on the result I will display form valid true or false in the UI</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:enlighter/codeblock {"language":"js"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">import { fromEvent, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

const messageElement = document.querySelector('#message'); const
firstNameElement = document.querySelector('#firstName'); const lastNameElement =
document.querySelector('#lastName');

const setMessage = (m) => messageElement.textContent = m;

const firstName$ = fromEvent(firstNameElement, 'input') .pipe( map(e =>
(e.target as any).value), startWith('') );

const lastName$ = fromEvent(lastNameElement, 'input') .pipe( map(e => (e.target
as any).value), startWith('') );

const isFormValid$ = combineLatest(firstName$, lastName$, (firstName: string,
lastName: string) => { return firstName !== '' &amp;&amp; lastName !== '' });

isFormValid$.subscribe((isValid) => { setMessage(isValid); })

</pre>
<p><!-- /wp:enlighter/codeblock --></p>
