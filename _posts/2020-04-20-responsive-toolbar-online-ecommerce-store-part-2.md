---
title: Responsive Toolbar - Online ecommerce Store Part 2
date: 2020-04-20T10:00:04.000Z
published: true
comments: true
social-share: true
categories:
  - angular
  - express.JS
  - Full Stack Master
tags:
  - angular
  - express
  - javascript
  - beginners
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In continuity to our previous demo session <strong><a href="https://www.youtube.com/watch?v=1gEjZavI6Rc&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=65&amp;t=0s" target="_blank" rel="noopener noreferrer">Responsive Toolbar Online eCommerce Store Part 1</a> </strong>where we made required changes to our ecommerce store to make its toolbar responsive, in this demo session <a href="https://www.youtube.com/watch?v=wsux8G3L-rQ&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=66&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Responsive Toolbar Online eCommerce Store Part 2 </strong></a>we will take care of UI changes to make our web app toolbar look better as well as responsive.</p>
<p>After making required code changes in header.component.html, when we tried to see its output it ended up in error.</p>
<p><img class="alignnone size-full wp-image-3260" src="{{ site.baseurl }}/assets/2020/04/29.1.png" alt="" width="855" height="484" /></p>
<p><img class="alignnone size-full wp-image-3259" src="{{ site.baseurl }}/assets/2020/04/29.2.png" alt="" width="853" height="483" /></p>
<p>This error says it’s trying to pull some of the symbols, class names from wrong namespace. In this case simply we need to go to that component here its header component and make sure we are mentioning correct path there.</p>
<p><img class="alignnone size-full wp-image-3258" src="{{ site.baseurl }}/assets/2020/04/29.3.png" alt="" width="853" height="481" /></p>
<p>After rectifying this error we can see most of the things from design perspective are aligned, still lot more to do on this. Captured screenshot from our session shown below:</p>
<p><img class="alignnone size-full wp-image-3257" src="{{ site.baseurl }}/assets/2020/04/29.4.png" alt="" width="852" height="480" /></p>
<p>In order to look our app store more realistic, we need to put some meaningful icons. For this any time we can go to angular material site<strong> <a href="https://material.io/">https://material.io</a></strong> and check required code to use like here we used menu bar.</p>
<p><img class="alignnone size-full wp-image-3256" src="{{ site.baseurl }}/assets/2020/04/29.5.png" alt="" width="857" height="479" /></p>
<p><img class="alignnone size-full wp-image-3255" src="{{ site.baseurl }}/assets/2020/04/29.6.png" alt="" width="855" height="481" /></p>
<p>Next we will make other important changes like</p>
<ul>
<li>To show our app name after logo.</li>
<li>Remove product menu as its coming twice.</li>
<li>Show log-in, log-out properly through fx layout.</li>
</ul>
<p>This fx layout is very cool feature as we do not need to write any media query that we used to write initially.</p>
<p><img class="alignnone size-full wp-image-3254" src="{{ site.baseurl }}/assets/2020/04/29.7.png" alt="" width="855" height="481" /></p>
<p>Also we should show these log-in/out icons on the right side and adjust margins on either side of logo and brand name.</p>
<p><img class="alignnone size-full wp-image-3253" src="{{ site.baseurl }}/assets/2020/04/29.8.png" alt="" width="853" height="482" /></p>
<p>As we can see now our toolbar is looking quite realistic, next in our upcoming video session <a href="https://www.youtube.com/watch?v=-sZAlN5sSI0&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=67&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Creating Responsive Login And Register Page | Mobile Compatible</strong> </a>we can fix the products UI as well and make it responsive.</p>
<p><iframe src="https://www.youtube.com/embed/-sZAlN5sSI0" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
