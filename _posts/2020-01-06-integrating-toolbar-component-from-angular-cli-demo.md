---
title: Integrating Toolbar Component from Angular CLI - Demo
date: 2020-01-06T11:00:12.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
tags:
  - Angular
  - fullstackmaster
  - rupeshtiwari
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In this demo session <a href="https://www.youtube.com/watch?v=G-b1rJI9RWA&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=14&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Integrating Toolbar | Angular CLI | Demo | 0009-13 </strong></a>we will see how to integrate toolbar in our angular app. In order to put toolbar in our app component <strong>app.component.html</strong> we need angular material component. As we already imported material module earlier in our <strong>app.module.ts</strong>, now we can directly pull toolbar code from angular material site. We will go to toolbar under Navigation heading and take its basic source code.</p>
<p><img class="alignnone size-full wp-image-2877" src="{{ site.baseurl }}/assets/2020/01/TC1.png" alt="" width="856" height="482" /></p>
<p>This source code we will put in app component and rename it to Product Mart as our brand name.</p>
<p><img class="alignnone size-full wp-image-2876" src="{{ site.baseurl }}/assets/2020/01/TC2.png" alt="" width="854" height="481" /></p>
<p>Finally we can see it reflecting in our app once we refresh it. It will be shown as a header in our tool bar.</p>
<p><img class="alignnone size-full wp-image-2875" src="{{ site.baseurl }}/assets/2020/01/TC3.png" alt="" width="854" height="481" /></p>
<p>Next we will focus on putting navigation in our toolbar like <strong>Home</strong> button &amp; <strong>Product</strong> button. So that when we click on Home button, it redirects us to Home page and on clicking Product button, we will be redirected to products page.</p>
<p>Like we did earlier, this time also we will take basic code snippet for navigation from angular material site itself. And then we will modify that basic code as per our requirement. To do this first we will have code for putting buttons in a row in our tool bar.</p>
<p><img class="alignnone size-full wp-image-2874" src="{{ site.baseurl }}/assets/2020/01/TC4.png" alt="" width="855" height="481" /></p>
<p>Next we will try to get some code for doing navigation using anchor. For this we have code snippets in angular material site under ‘Routing &amp; Navigation’ heading.</p>
<p><img class="alignnone size-full wp-image-2873" src="{{ site.baseurl }}/assets/2020/01/TC5.png" alt="" width="851" height="480" /></p>
<p>Let’s do some design modification to fit it into our product Mart app and organize code for two buttons Home &amp; Products.</p>
<p><img class="alignnone size-full wp-image-2872" src="{{ site.baseurl }}/assets/2020/01/TC6.png" alt="" width="852" height="480" /></p>
<p>After making all changes and checking in our code, let’s see final outcome from this session on output window.</p>
<p><img class="alignnone size-full wp-image-2871" src="{{ site.baseurl }}/assets/2020/01/TC7.png" alt="" width="853" height="477" /></p>
<p><iframe width="790" height="350" src="https://www.youtube.com/embed/G-b1rJI9RWA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
