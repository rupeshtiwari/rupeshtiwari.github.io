---
layout: post
title: What's new in Angular 8.0?
date: 2019-06-08 09:45:23.000000000 -04:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Angular
tags:
- angular 8
meta:
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609207467;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2643;}i:1;a:1:{s:2:"id";i:2778;}i:2;a:1:{s:2:"id";i:3465;}}}}
  _qode-like: '0'
  wpmm_postgrid_views: '602'
  _wpcom_is_markdown: '1'
  _wpas_done_all: '1'
  _publicize_twitter_user: "@rupeshtiwari_co"
  _thumbnail_id: '2194'
  _wpas_mess: |-
    What's new in Angular 8.0?
    Now when you will build your Angular app using angular CLI then it will produce two builds for your application one is for es5 and for es2015.
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/whats-new-in-angular-8-0/"
---
<pre><span style="font-weight: 400;">Angular 8.0.0 is here!</span></pre>
<h2><span style="font-weight: 400;">Is there any breaking changes in Angular 8?</span></h2>
<p><b>No</b><span style="font-weight: 400;">, Angular 8 is released now! As Angular team had promised they have not introduced breaking changes. </span></p>
<h2><span style="font-weight: 400;">Should I update to Angular 8? </span></h2>
<p><b>Yes</b></p>
<h2><span style="font-weight: 400;">Is there an easy way to Upgrade Angular 8?</span></h2>
<p><b>Yes, </b><span style="font-weight: 400;">Just run below script and your project will be automatically upgraded to Angular 8.</span></p>
<p><b>ng update @angular/cli</b></p>
<p><b>ng update @angular/core</b></p>
<p>&nbsp;</p>
<h2><span style="font-weight: 400;">What are the New Features of Angular 8?</span></h2>
<h3><span style="font-weight: 400;">Differential Loading &amp; Performance Improvement</span></h3>
<p><span style="font-weight: 400;">Now when you will build your Angular app using angular CLI then it will produce two builds for your application one is for </span><a href="https://johnpapa.net/es5-es2015-typescript/"><span style="font-weight: 400;">es5 and for es2015</span></a><span style="font-weight: 400;">. </span></p>
<p><span style="font-weight: 400;">Since modern browsers has many E2015 features already implemented we no more need all of the polyfills that by default Angular build produces. You will get around 40kb of improvement on final productionize bundle size. Which is great performance improvement!</span></p>
<p><span style="font-weight: 400;">You will be deploying both bundles in production and the browser will choose the right one at launch time.This means that for newer browsers, you get a smaller bundle size.</span></p>
<h2><span style="font-weight: 400;">Lazy Loading on Import</span></h2>
<p><span style="font-weight: 400;">Now you can use import lazy loading and hence you can do all conditional loading and logic within your angular app. Its great! So you can change your loadChildren declarations in routing modules from:</span></p>
<p><span style="font-weight: 400;">loadChildren: './products/product.module#ProductModule’</span></p>
<p><span style="font-weight: 400;">to:</span></p>
<p><span style="font-weight: 400;">loadChildren: () =&gt; import('./products/product.module').then(m =&gt; m.ProductModule)</span></p>
<p><b>This has one great benefits on code refractory:</b></p>
<p><span style="font-weight: 400;">Now you can rename your module names and use VsCode renaming tool to get replaced with your new module name everywhere. I used to forget to update the string names in loadChildren while renaming module name. </span></p>
<h2><span style="font-weight: 400;">Bazel Support </span></h2>
<p><span style="font-weight: 400;">Angular 8 has inbuilt support for Bazel! </span></p>
<p><span style="font-weight: 400;">Bazel is a tool that can compile any language server side or client side. Google had developed Bazel and Google made Bazel an open source software. </span></p>
<p><span style="font-weight: 400;">Angular Cli can help you to add Bazel configurations to your existing app or create new Bazel app. You can install Angular Bazel globally like this.</span></p>
<p><strong> npm i -g @angular/bazel</strong></p>
<p><span style="font-weight: 400;">Learn more about </span><a href="https://angular.io/guide/bazel"><span style="font-weight: 400;">Bazel from Angular official guide</span></a><span style="font-weight: 400;">. </span></p>
<h2><span style="font-weight: 400;">AngularJs Migration Made Easy</span></h2>
<p><span style="font-weight: 400;">You will be glad to know that Angular Team has official Library in Angular called as </span><a href="https://angular.io/guide/upgrade"><span style="font-weight: 400;">NgUpgrade</span></a><span style="font-weight: 400;"> that has </span><a href="https://angular.io/api/upgrade/static/UpgradeModule"><span style="font-weight: 400;">UpgradeModule</span></a><span style="font-weight: 400;"> which can help you to run both AngularJS legacy code and new Angular Code simultaneously in a same application. You will get below stuff running without any issues:</span></p>
<ol>
<li style="font-weight: 400; text-align: left;"><a href="https://angular.io/guide/upgrade#dependency-injection"><span style="font-weight: 400;">Dependency Injection</span></a></li>
<li style="font-weight: 400; text-align: left;">
<h4><a href="https://angular.io/guide/upgrade#components-and-the-dom"><span style="font-weight: 400;">Components and the DOM</span></a></h4>
</li>
<li style="font-weight: 400; text-align: left;"><a href="https://angular.io/guide/upgrade#change-detection"><span style="font-weight: 400;">Change Detection</span></a></li>
</ol>
<p><span style="font-weight: 400;">Here is the detail information about </span><a href="https://angular.io/guide/upgrade#upgrading-with-ngupgrade"><span style="font-weight: 400;">how to use  ngUpgrade </span></a></p>
<p><span style="font-weight: 400;">If you are using ngUpgrade then good news for you. Now you can access below things from PlatformLocation service: </span></p>
<ol>
<li style="font-weight: 400;"><span style="font-weight: 400;">hostName</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">port</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">protocol</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">history.state from getState method.</span></li>
</ol>
<h2></h2>
<h2><span style="font-weight: 400;">Angular CLI Support for Creating Web Workers</span></h2>
<p><span style="font-weight: 400;">One more good news now angular schematic has been updated to create new web worker from angular cli. </span><span style="font-weight: 400;">Now you can run below script to create web worker file in your project.</span><br />
<b>ng generate web</b><b>-</b><b>worker picture</b><b>/</b><b>picture</b></p>
