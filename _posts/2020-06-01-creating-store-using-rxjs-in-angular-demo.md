---
title: Creating Store Using RxJS in Angular - Demo
date: 2020-06-01T10:00:37.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
  - Express.JS
  - Full Stack Master
  - JavaScript
tags:
  - Angular
  - Express
  - fullstackmaster
  - JavaScript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In this video session <a href="https://www.youtube.com/watch?v=mzBa4zJIzRc&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=74&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Creating Store Using RxJS | Angular | Demo </strong></a>we will create our Cart store and it is nothing but just a wrapper on top of state, so it becomes reactive state that way. In other words, reactive store is RxJS behavior Subject, wrapping over some initial state and then we will keep pushing the Next state. Here we will build reactive store and then we will create some selectors to see how they are helping components to get data.</p>
<p><img class="alignnone size-full wp-image-3357" src="{{ site.baseurl }}/assets/2020/06/CS.1.png" alt="" width="855" height="480" /></p>
<p>While creating data store we will go all of the used cases like Add Items to Cart, update items &amp; delete items use cases. All coding steps are explained in detailed manner in our demo session, few steps with screenshots shown below:</p>
<p>First we have written code for our Product.ts &amp; Store.ts files and checked-in into our GitHub project.</p>
<p><img class="alignnone size-full wp-image-3356" src="{{ site.baseurl }}/assets/2020/06/CS.2.png" alt="" width="855" height="480" /></p>
<p>Till now we have created our base store class, next we will create Cart Store. Basically this was our abstract store, now we will create our concrete store using angular CLI.</p>
<p><img class="alignnone size-full wp-image-3354" src="{{ site.baseurl }}/assets/2020/06/CS.3.png" alt="" width="860" height="483" /></p>
<p>After creation of all required files, in next step we will define our cart store, starting with declaration of cart items.</p>
<p><img class="alignnone size-full wp-image-3355" src="{{ site.baseurl }}/assets/2020/06/CS.4.png" alt="" width="854" height="480" /></p>
<p>Further in upcoming video sessions we will start declaring methods, first will go with Add Items Use case in next video session <a href="https://www.youtube.com/watch?v=wYwY3yxsWuM&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=74" target="_blank" rel="noopener noreferrer"><strong>Add Item To Cart | Test Driven | RxJS | Demo.</strong></a></p>
<p><iframe src="https://www.youtube.com/embed/mzBa4zJIzRc" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
