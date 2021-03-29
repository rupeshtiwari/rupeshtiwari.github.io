---
title: Installing & Configuring Mongo DB in our angular app - Demo
date: 2020-02-24T11:00:47.000Z
published: true
comments: true
social-share: true
categories:
  - angularJS
  - javascript
tags:
  - angular
  - javascript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>Now in this demo session <a href="https://www.youtube.com/watch?v=MAJpsTGU470&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=22&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Installing And Configuring Mongodb &amp; Mongoose | Demo | 0009-21 </strong></a>we will see how to install MongoDB in our machine and how to use it in our angular-NodeJS project. It’s a very flexible and very famous open source database. With flexibility like we can save any kind of data in MongoDB as a positive point, it also brings some serious concerns. There is no type check or validations to store data inside it. It makes it vulnerable to data corruption. This is the reason we need a robust modeling way to create our entities. That means we should have some modeling tool which helps us in validation, defining schemas and query our database elegantly. Best solution for this is usage of Mongoose data modeling tool.</p>
<p>Let’s begin with MongoDB first, we can download MongoDB from their official site <a href="https://www.mongodb.com/download-center" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/download-center</a> and install it through command <strong>npm i –S mongoose</strong></p>
<p><img class="alignnone size-full wp-image-3001" src="{{ site.baseurl }}/assets/2020/02/21_1.png" alt="" width="851" height="476" /></p>
<p>Next we need some interface to interact with mongoDB like for SQL server we have SQL studio. For MongoDB we have MongoDB Compass but that is paid version. But as a free version we have Robo 3T we can download it from there official site <a href="https://robomongo.org/" target="_blank" rel="noopener noreferrer">https://robomongo.org/</a> and install it in our project.</p>
<p><img class="alignnone size-full wp-image-3000" src="{{ site.baseurl }}/assets/2020/02/21_2.png" alt="" width="853" height="482" /></p>
<p>After installing MongoDB, Mongoose and Robo 3T, next we will set some environment variables in our Config.js file.</p>
<p><img class="alignnone size-full wp-image-2999" src="{{ site.baseurl }}/assets/2020/02/21_3.png" alt="" width="851" height="480" /></p>
<p>Next we will create mongoose.js file inside Config folder to do configuration of our mongoose data modeling tool.</p>
<p><img class="alignnone size-full wp-image-2998" src="{{ site.baseurl }}/assets/2020/02/21_4.png" alt="" width="854" height="480" /></p>
<p>Finally, after completing our configuration settings in mongoose.js file we can run command <strong>npm run server:watch </strong>to check whether our project is connected to Database or not.</p>
<p><img class="alignnone size-full wp-image-2997" src="{{ site.baseurl }}/assets/2020/02/21_5.png" alt="" width="851" height="478" /></p>
<p>From above snapshot we can see our project is successfully connected to database. All above code is checked in to GitHub repository <a href="https://github.com/rupeshtiwari/product-mart/tree/workshop-session-4-30" target="_blank" rel="noopener noreferrer">https://github.com/rupeshtiwari/product-mart/tree/workshop-session-4-30</a> for your future reference.</p>
<p><iframe src="https://www.youtube.com/embed/MAJpsTGU470" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
