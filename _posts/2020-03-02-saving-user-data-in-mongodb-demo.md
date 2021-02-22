---
title: Saving User data in MongoDB - Demo
date: 2020-03-02T11:00:22.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
  - JavaScript
tags:
  - Angular
  - JavaScript
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>In this video session <a href="https://www.youtube.com/watch?v=miZ3NF8ea00&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=23&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Saving User To MongoDB | Mongoose | Demo | 0009-22 </strong></a>we will explain how to save user data in mongo db and how to validate user at server using Mongoose User Schema.</p>
<p>First we will begin with password encryption, if we keep password in plain text it will be exposed to all. Good practice is to store password in database in encrypted manner. To do this we will install one more npm package bcrypt. For this we will run command <strong>npm i –S bcrypt</strong>.</p>
<p>Next important thing to take care is while saving any entity in DB, we should create schema for it. For this we will create models folder and declare all schema related things inside it in <strong>user.model.js</strong> file. Also to validate email id we can put regular expression (available on net) in this file.</p>
<p><img class="alignnone size-full wp-image-3008" src="{{ site.baseurl }}/assets/2020/03/22_1.png" alt="" width="853" height="478" /></p>
<p>Also we will define hashed password, created date and roles as well while putting validations in our schema.</p>
<p><img class="alignnone size-full wp-image-3007" src="{{ site.baseurl }}/assets/2020/03/22_2.png" alt="" width="853" height="478" /></p>
<p>Next in controller file, we will do hashing of password. This will delete actual password and push hashed version of password to save in database.</p>
<p><img class="alignnone size-full wp-image-3006" src="{{ site.baseurl }}/assets/2020/03/22_3.png" alt="" width="853" height="482" /></p>
<p>Now we can finally enter the user details in registration page of our product mart app and, on click of register button, User data will saved to db.</p>
<p><img class="alignnone size-full wp-image-3005" src="{{ site.baseurl }}/assets/2020/03/22_4.png" alt="" width="851" height="478" /></p>
<p>We can simply go to MongoDB user interface and check the entry of user in database.</p>
<p><img class="alignnone size-full wp-image-3004" src="{{ site.baseurl }}/assets/2020/03/22_5.png" alt="" width="853" height="479" /></p>
<p>In this way, we can save any data from our project application into our database. Here we have just focused on saving data of new user. In our next session <a href="https://www.youtube.com/watch?v=n0Pim_tHB9s&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=24&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>User Login In Angular With MongoDB | Demo | 0009-23 </strong></a>we will try to validate already registered user data in db while logging in.</p>
<p><iframe src="https://www.youtube.com/embed/miZ3NF8ea00" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
