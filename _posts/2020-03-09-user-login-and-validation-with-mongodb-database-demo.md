---
title: User Login and validation with MongoDB database - Demo
date: 2020-03-09T10:00:44.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
  - JavaScript
tags:
  - Angular
  - fullstackmaster
  - JavaScript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In this video session <a href="https://www.youtube.com/watch?v=n0Pim_tHB9s&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=24&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>User Login In Angular With MongoDB | Demo | 0009-23 </strong></a>we will login into our product Mart app through MongoDB database and we will see how to validate the logging in user. Also we will learn how to show proper messages on successful and unsuccessful validation of user credentials. All this is explained with proper snapshots in below steps and code snippets are also available in our GitHub repository. Please visit <a href="https://github.com/rupeshtiwari/product-mart/tree/workshop-session-4-30" target="_blank" rel="noopener noreferrer">https://github.com/rupeshtiwari/product-mart/tree/workshop-session-4-30</a> to check our code base.</p>
<p>First we will make required changes in our <strong>auth.service.ts</strong> file.</p>
<p><img class="alignnone size-full wp-image-3019" src="{{ site.baseurl }}/assets/2020/03/23_1.png" alt="" width="696" height="395" /></p>
<p>Next we will make changes in <strong>auth.route.js</strong> file. Earlier we have not declared route for logging in routing, so now we need to create login function as well similar to register function.</p>
<p><img class="alignnone size-full wp-image-3018" src="{{ site.baseurl }}/assets/2020/03/23_2.png" alt="" width="696" height="392" /></p>
<p>Then we need to pass user info and validate it with data available in database. All this coding will be done in <strong>user.controller.js</strong> file and user controller will be called again in auth service.</p>
<p><img class="alignnone size-full wp-image-3017" src="{{ site.baseurl }}/assets/2020/03/23_3.png" alt="" width="697" height="393" /></p>
<p><img class="alignnone size-full wp-image-3016" src="{{ site.baseurl }}/assets/2020/03/23_4.png" alt="" width="699" height="391" /></p>
<p>Finally we will verify our coding in our login page whether it is working fine in both success and unsuccessful login scenarios.</p>
<p>Case1: Logging in with correct user credentials.</p>
<p><img class="alignnone size-full wp-image-3015" src="{{ site.baseurl }}/assets/2020/03/23_5.png" alt="" width="695" height="392" /></p>
<p>You can see below, user “Rupesh” is logged in and redirected to home page. Even we can verify on server side, that login search and validation is successful or not.</p>
<p><img class="alignnone size-full wp-image-3014" src="{{ site.baseurl }}/assets/2020/03/23_6.png" alt="" width="698" height="390" /></p>
<p><img class="alignnone size-full wp-image-3013" src="{{ site.baseurl }}/assets/2020/03/23_7.png" alt="" width="697" height="392" /></p>
<p>Case 2: Tying to login with incorrect user credentials.</p>
<p><img class="alignnone size-full wp-image-3012" src="{{ site.baseurl }}/assets/2020/03/23_8.png" alt="" width="698" height="394" /></p>
<p>Catch you in our next demo session <a href="https://www.youtube.com/watch?v=Mzm-ikcEMeE&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=25&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Debugging Server Side Code on Visual Studio Code | 0009-24</strong></a> to learn how to debug server side coding in VS Code. We will discuss all important debugging concepts in our upcoming sessions.</p>
<p><iframe src="https://www.youtube.com/embed/n0Pim_tHB9s" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
