---
title: Creating Registration Component in angular app - Demo
date: 2020-01-27T11:00:35.000Z
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

<p>In this demo session <strong><a href="https://www.youtube.com/watch?v=LsZeU7uBSkY&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=18&amp;t=0s" target="_blank" rel="noopener noreferrer">Creating Registration Component | Angular | Demo | 0009-17</a> </strong>we will first create registration component which will allow us to save user information in database. This will also begin our journey towards mongo DB. In our video session we will see how to make all required coding changes step by step in detail. To make this article more understanding we have placed snapshots to check output side by side for each step.</p>
<p>Let’s first create register component through <strong>ng g c register</strong> command in powershell.</p>
<p><img class="alignnone size-full wp-image-2942" src="{{ site.baseurl }}/assets/2020/01/CR1.png" alt="" width="854" height="481" /></p>
<p>In case of new user he should be redirected to registration page with proper info message.</p>
<p><img class="alignnone size-full wp-image-2941" src="{{ site.baseurl }}/assets/2020/01/CR2.png" alt="" width="854" height="483" /></p>
<p>On registration page, user should input his required details like Name/Email/Password etc, for this we need to add all required properties in register component.</p>
<p><img class="alignnone size-full wp-image-2940" src="{{ site.baseurl }}/assets/2020/01/CR3.png" alt="" width="852" height="480" /></p>
<p>Also we can put some validations for these fields in User forms, so that users do not enter any invalid characters in registration form.</p>
<p><img class="alignnone size-full wp-image-2939" src="{{ site.baseurl }}/assets/2020/01/CR4.png" alt="" width="852" height="481" /></p>
<p>After making all these coding changes, let’s see how our User form looks like now.</p>
<p><img class="alignnone size-full wp-image-2938" src="{{ site.baseurl }}/assets/2020/01/CR5.png" alt="" width="853" height="480" /></p>
<p><iframe src="https://www.youtube.com/embed/LsZeU7uBSkY" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
