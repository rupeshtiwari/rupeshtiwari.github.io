---
title: Angular app development and deployment environments
date: 2019-10-07T10:00:44.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
tags:
  - Angular
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>When we talk about angular app development, most of the people get confused about its build &amp; deployment activities. Our video tutorial <a href="https://www.youtube.com/watch?v=4b9xjzjY38c&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=2&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Angular app Development and Deployment Environment | 0009-01 </strong></a>explains the basic difference between them and also discuss about end to end angular app development activities. Mainly there are two different environments involved; one is for its build/development and other one for its deployment/run. Build environment consist of four components:</p>
<ol>
<li><strong>JS</strong> which is basic requirement to build/run any angular app.</li>
<li><strong>Angular CLI</strong>, it is nothing but a local package within angular itself to do compilation activities.</li>
<li>Next requirement is presence of some editor, mostly <strong>VS code</strong> is recommended open source editor.</li>
<li>Last but not least requirement is <strong>NPM package</strong>.</li>
</ol>
<p>These are the minimum set of requirements we need, to develop any angular project. But this does not mean our project/app is in working state. After creating our app we will do NPM RUN BUILD, and then the final output will come in disk folder as a file, totally agnostic to any other world. It is purely a JavaScript/HTML/CSS code. Files are generated in primitive languages that any browser knows. It will basically compile all our code including our node packages and put them in a web technology like JavaScript.</p>
<p>Now to see the final output we need to deploy our code to hosting server and run it there. We need a hosting machine/server like IIS/Apache/Tomcat to host our code. These activities come under deployment/Run environment. In our <a href="https://www.youtube.com/watch?v=4b9xjzjY38c&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=2&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>video </strong></a>tutorial different environment activities and their components are explained in detail with “To Do List” app example. Snapshot of session below:</p>
<p><img class="alignnone size-full wp-image-2619" src="{{ site.baseurl }}/assets/2019/10/OE-1.png" alt="" width="790" height="400" /></p>
<p><iframe src="https://www.youtube.com/embed/4b9xjzjY38c" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
