---
title: Shopping Cart- Update Delete And Restore – Demo
date: 2020-06-15T10:00:47.000Z
published: true
comments: true
social-share: true
categories:
  - angular
  - Express.JS
  - Full Stack Master
  - javascript
tags:
  - angular
  - Express
  - beginners
  - javascript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In our previous video session <a href="https://www.youtube.com/watch?v=wYwY3yxsWuM&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=74" target="_blank" rel="noopener noreferrer"><strong>Add Item To Cart | Test Driven | RxJS | Demo</strong></a> we have already discussed Add item use case in our shopping cart project. Next in this video session <a href="https://www.youtube.com/watch?v=yoIoBLZ8gpU&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=75" target="_blank" rel="noopener noreferrer"><strong>Shopping Cart- Update Delete And Restore | Demo | Practical</strong> </a>we will discuss rest of the test cases with Update, Delete &amp; Restore Cart use cases.</p>
<p>First is Clear Cart use case, best way to clear our cart is to reset the state to the initial state.</p>
<p><img class="alignnone size-full wp-image-3373" src="{{ site.baseurl }}/assets/2020/06/SC.1.png" alt="" width="852" height="477" /></p>
<p><img class="alignnone size-full wp-image-3372" src="{{ site.baseurl }}/assets/2020/06/SC.2.png" alt="" width="855" height="483" /></p>
<p>Next is Restore cart use case, Restore means suppose we have selected two product items and added to our cart through laptop. So when we will again login to our account from Mobile device then our shopping cart app should restore our selected two items there as well and show it in our cart.</p>
<p><img class="alignnone size-full wp-image-3371" src="{{ site.baseurl }}/assets/2020/06/SC.3.png" alt="" width="853" height="479" /></p>
<p>Next we will do another use case ‘Remove Cart Item’ from cart. In order to test it, first we need to create a state in the store and then proceed with other required coding part. All this is explained in detail in this video session, snapshot below with test case results:</p>
<p><img class="alignnone size-full wp-image-3370" src="{{ site.baseurl }}/assets/2020/06/SC.4.png" alt="" width="853" height="479" /></p>
<p>Similarly we have update cart item use case. Here in this shopping cart sample project, we will be updating quantity of selected items in our cart.</p>
<p><img class="alignnone size-full wp-image-3369" src="{{ site.baseurl }}/assets/2020/06/SC.5.png" alt="" width="852" height="481" /></p>
<p>With this all of our test cases are passing and we successfully created our cart store with all of the use cases. These test cases we will soon use in our components. Next in <a href="https://www.youtube.com/watch?v=M0A3mR5SYnc&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=76" target="_blank" rel="noopener noreferrer"><strong>Given When Then | Angular | BDD</strong></a> video session we will first create selectors, then components and finally we will hook them with each other.</p>
<p><iframe src="https://www.youtube.com/embed/yoIoBLZ8gpU" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
