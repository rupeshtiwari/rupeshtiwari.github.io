---
title: Handling Server Side HTTP Error
date: 2020-04-06T10:00:15.000Z
published: true
comments: true
social-share: true
categories:
  - angular
  - express.JS
  - javascript
tags:
  - angular
  - express
  - beginners
  - javascript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>As we discussed in our previous video session <a href="https://www.youtube.com/watch?v=hrYlnQCBLrE&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=29&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Designing Shopping Page Using Angular Material Grid And Card | 0009-26</strong></a>, our web app is now growing as we are adding more features into it and making its design better. Since our application is growing, now the most important challenge is to handle the server side errors properly and sending adequate information to client side. We will see in this demo session <strong><a href="https://www.youtube.com/watch?v=Zq_MT6Hc--U&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=59&amp;t=0s" target="_blank" rel="noopener noreferrer">Handling Server Side HTTP Error | 0009-27</a> </strong>what are all the problems we have in our code and how to rectify them through proper error handling.</p>
<p>Let’s consider a scenario where we have entered wrong email id while log in. Now on pressing F12 we can see the error message; however this message is html which is not something that we should show to client. Our goal is to return the error object from the server with informative message inside it. In order to do that we need to handle all API related errors properly in express.js file inside server folder.</p>
<p>For this first we need to install http-errors package, it will give us a call back where we can intercept all kind of errors and return proper message to client.</p>
<p><img class="alignnone size-full wp-image-3237" src="{{ site.baseurl }}/assets/2020/04/27.1.png" alt="" width="856" height="478" /></p>
<p>After installation we need to import it inside express.js, so that we can use it as middle ware. Also we will do required coding in express.js file to handle errors as shown below:</p>
<p><img class="alignnone size-full wp-image-3236" src="{{ site.baseurl }}/assets/2020/04/27.2.png" alt="" width="854" height="483" /></p>
<p>Let’s go back again to same scenario where we entered wrong email id while login and check what error message we are getting now.</p>
<p><img class="alignnone size-full wp-image-3235" src="{{ site.baseurl }}/assets/2020/04/27.3.png" alt="" width="851" height="481" /></p>
<p>Now we can see a meaningful error on pressing F12 and same error we can log into console logger or http logger. Also in order to show business message or user friendly message, we can use authservice. This message will go to UI, generally known as business exception. In auth service we can inject the log service to catch and log the server error.</p>
<p><img class="alignnone size-full wp-image-3234" src="{{ site.baseurl }}/assets/2020/04/27.4.png" alt="" width="851" height="482" /></p>
<p><img class="alignnone size-full wp-image-3233" src="{{ site.baseurl }}/assets/2020/04/27.5.png" alt="" width="853" height="477" /></p>
<p>Next in our upcoming video session <a href="https://www.youtube.com/watch?v=1gEjZavI6Rc&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=65&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Responsive Toolbar Online eCommerce Store Part 1 </strong></a>we will learn how to get responsive toolbar in our e-commerce app.</p>
<p><iframe src="https://www.youtube.com/embed/Zq_MT6Hc--U" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
