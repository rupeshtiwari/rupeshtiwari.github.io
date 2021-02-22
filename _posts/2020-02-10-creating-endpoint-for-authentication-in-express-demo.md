---
title: Creating Endpoint For Authentication in Express - Demo
date: 2020-02-10T11:00:55.000Z
published: true
comments: true
social-share: true
categories:
  - angular
tags:
  - angular
  - javascript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In this demo session <a href="https://www.youtube.com/watch?v=VCE3KIsv26o&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=20&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Creating Endpoint For Authentication | Express | Demo | 0009-19 </strong></a>we will create a restful API and will host it in Node.js using express. Also we will make a post to register a user so that it can create a post call where we will send user data and will see whether server is receiving or not.</p>
<p>Before we begin server side coding, first we need to install few npm packages server side using command <strong> npm i -S dotenv body-parser cors helmet morgan express-async-handler</strong></p>
<ul>
<li><strong>Express </strong>– used to build webapplication in Node.js. Here we have already installed it in our previous demo sessions.</li>
<li><strong>dotenv </strong>– it reads all of the process env variables and then aggregate and give it as one thing in process.env</li>
<li><strong>Body-parser</strong> –if we have express we need body-parser as it is useful to grab the body part of request object and make it json readable so that express server side code able to read it. It’s a middleware from express.</li>
<li><strong>Cors</strong> – It allows some cross origin request &amp; response.</li>
<li><strong>Helmet</strong> - It will take care of all security stuff. It will secure our http.</li>
<li><strong>Morgan</strong> – it takes care of our logging in server side.</li>
<li><strong>Express-async-handler</strong> – It’s a package which gives facility to wrap our async functions and supply it as a call back for our router.</li>
</ul>
<p>Similarly we need to install few development npm packages by using command <strong>npm package i –D concurrently nodemon</strong></p>
<ul>
<li><strong>Concurrently </strong>– To run two things in parallel such as run sever as well as npm build.</li>
<li><strong>Nodemon</strong> – Node monitor watching some file changes and kicking up any npm script whenever change is happened.</li>
</ul>
<p>Now let’s create the server which will host our API. All steps for creating API and host it on sever are explained in detail in our demo session. Few snapshots from our session are pasted below with high level description:</p>
<ul>
<li>We will begin with below declaration of constants in the functions scope</li>
</ul>
<p><img class="alignnone size-full wp-image-2960" src="{{ site.baseurl }}/assets/2020/02/CA1.png" alt="" width="856" height="481" /></p>
<ul>
<li>Configuration of logger, dist folder, Parsing API, security and router etc.</li>
</ul>
<p><img class="alignnone size-full wp-image-2959" src="{{ site.baseurl }}/assets/2020/02/CA2.png" alt="" width="852" height="480" /></p>
<p><img class="alignnone size-full wp-image-2958" src="{{ site.baseurl }}/assets/2020/02/CA3.png" alt="" width="855" height="481" /></p>
<ul>
<li>In this way our app is configured and ready. Now in auth.route.js we will create our Restful API to which we will make a call from client side.</li>
</ul>
<p><img class="alignnone size-full wp-image-2957" src="{{ site.baseurl }}/assets/2020/02/CA4.png" alt="" width="851" height="483" /></p>
<ul>
<li>Next we will configure our index file also.</li>
</ul>
<p><img class="alignnone size-full wp-image-2956" src="{{ site.baseurl }}/assets/2020/02/CA5.png" alt="" width="856" height="478" /></p>
<ul>
<li>Similarly we will configure few more files to make our server running. Then finally completing all our setup we will check our postman whether it is sending data to server or not.</li>
</ul>
<p>Let’s make some entry in postman and send registered user data in to server.</p>
<p><img class="alignnone size-full wp-image-2955" src="{{ site.baseurl }}/assets/2020/02/CA6.png" alt="" width="851" height="480" /></p>
<p><img class="alignnone size-full wp-image-2954" src="{{ site.baseurl }}/assets/2020/02/CA7.png" alt="" width="854" height="480" /></p>
<p>To get the code snippets and revisit this code, you can visit our GitHub code base anytime <strong><a href="https://github.com/rupeshtiwari/product-mart/tree/workshop-session-4-30" target="_blank" rel="noopener noreferrer">https://github.com/rupeshtiwari/product-mart/tree/workshop-session-4-30</a></strong></p>
<p><iframe src="https://www.youtube.com/embed/VCE3KIsv26o" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></p>
