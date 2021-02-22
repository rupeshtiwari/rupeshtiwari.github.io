---
title: Responsive Products Page – online ecommerce store part 2
date: 2020-05-18T10:00:30.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
  - Express.JS
  - JavaScript
tags:
  - Angular
  - Express
  - beginners
  - JavaScript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In our previous demo session <a href="https://www.youtube.com/watch?v=ID3sxo7NchA&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=70&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Responsive Products Page | e-Commerce | Angular Material | 1</strong></a> we discussed how to use mat-table rather mat-cards or mat-grids in products page to properly align our products. Now in this demo session <a href="https://www.youtube.com/watch?v=tijsesStWGI&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=71&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Responsive Products Page | e-Commerce | Angular Material | 2 </strong></a>we will see how to make this products page responsive.</p>
<p>First we will start with making required code changes for loading of products page. We will take the spinner code from angular material site <a href="https://material.angular.io/">https://material.angular.io</a> and put it in products component html file to show spinner while loading this page.</p>
<p><img class="alignnone size-full wp-image-3306" src="{{ site.baseurl }}/assets/2020/05/R2-1.png" alt="" width="852" height="484" /></p>
<p>Next we will try to apply sorting on Image, price and Name of products. For this first we will apply matSort directive in products component html file, then we will get the element reference in products component ts file.</p>
<p><img class="alignnone size-full wp-image-3306" src="{{ site.baseurl }}/assets/2020/05/R2-1.png" alt="" width="852" height="484" /></p>
<p><img class="alignnone size-full wp-image-3305" src="{{ site.baseurl }}/assets/2020/05/R2-3.png" alt="" width="852" height="480" /></p>
<p><img class="alignnone size-full wp-image-3304" src="{{ site.baseurl }}/assets/2020/05/R2-4.png" alt="" width="854" height="481" /></p>
<p>Now we will again go to html file to put mat-sort-header everywhere, wherever we wants to do sorting.</p>
<p><img class="alignnone size-full wp-image-3303" src="{{ site.baseurl }}/assets/2020/05/R2-5.png" alt="" width="854" height="478" /></p>
<p>So till now in this demo session we have done loading of products with spinner, applied sorting to products name, image and price. Next in upcoming video sessions we will learn how to create cart store to save the state of the cart and make it reactive so that whenever we do change in products page it shows it in cart store icon.</p>
<p><iframe src="https://www.youtube.com/embed/tijsesStWGI" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
