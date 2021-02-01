---
layout: post
title: Getting Started with Heroku Deploying Node.js App to Cloud
date: 2019-06-15 09:30:00.000000000 -04:00
type: post

published: true
comments: true
social-share: true
categories:
- Cloud
tags:
- heroku
- JavaScript
- Node.js
meta:
  _thumbnail_id: '2257'
  wpmm_postgrid_views: '456'
  _qode-like: '0'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1611888322;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:3049;}i:1;a:1:{s:2:"id";i:3465;}i:2;a:1:{s:2:"id";i:2881;}}}}
  _publicize_twitter_user: "@rupeshtiwari_co"
  _wpcom_is_markdown: '1'
  _wpas_done_all: '1'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/getting-started-with-heroku-deploying-node-js-app-to-cloud/"
description: Heroku is a cloud platform that lets you to build, deliver, monitor and scal
  application. Heroku is Platform as Service (PaaS) artitecture. In this article you
  will learn how to create, build, deploy and scale node.js application into heroku
  cloud within couple of minutes.
---
<h1>Heroku PaaS best Cloud Platform</h1>
<blockquote><p>Heroku is a cloud platform that lets you to build, deliver, monitor and scale application. Heroku is Platform as Service (PaaS) architecture. In this article you will learn how to create, build, deploy and scale<code>node.js</code> application into heroku cloud within couple of minutes.</p></blockquote>
<h2>Service Architecture</h2>
<p><a href="https://gist.githubusercontent.com/rupeshtiwari/8dd6fe36397bd40c0e2207e4c69d25fe/raw/2862c97251c9ffabccb94ce7c5105c6a14a89a33/z_services.png" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2019/06/z_services.png" alt="Service Architectures" /></a></p>
<h2>What is container in general</h2>
<p>It is a lightweight, isolated environments that provide compute, memory, an OS, and an ephemeral filesystem. Containers are typically run on a shared host, yet are completely isolated from each other.</p>
<h2>What is Dyno in Heroku</h2>
<p>The containers used at Heroku are called “dynos.” Dynos are isolated, virtualized Linux containers that are designed to execute code based on a user-specified command. Your app can scale to any specified number of dynos based on its resource demands. Heroku’s container management capabilities provide you with an easy way to scale and manage the number, size, and type of dynos your app may need at any given time.</p>
<h2>Environment Setup</h2>
<p>Prerequisite: Install node js and git. Confirm Node , Npm and Git installed and their versions.</p>
<p><code>Node -v</code> <code>npm -v</code></p>
<p><a href="https://gist.githubusercontent.com/rupeshtiwari/8dd6fe36397bd40c0e2207e4c69d25fe/raw/b4f12ba77faef89aa8f63e15f1bc61836bcc9009/z_npm-node-version-check.png" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2019/06/z_npm-node-version-check.png" alt="node and npm version check" /></a></p>
<p><code>git --version</code></p>
<p><a href="https://gist.githubusercontent.com/rupeshtiwari/8dd6fe36397bd40c0e2207e4c69d25fe/raw/b4f12ba77faef89aa8f63e15f1bc61836bcc9009/z_git-version-check.png" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2019/06/z_git-version-check.png" alt="git version check" /></a></p>
<h2>Heroku Guide</h2>
<p>Go to url <a href="https://devcenter.heroku.com/articles/heroku-cli#download-and-install" rel="nofollow">https://devcenter.heroku.com/articles/heroku-cli#download-and-install</a></p>
<h2>Download Heroku CLI</h2>
<p><a href="https://gist.githubusercontent.com/rupeshtiwari/8dd6fe36397bd40c0e2207e4c69d25fe/raw/b4f12ba77faef89aa8f63e15f1bc61836bcc9009/z_download-herokucli.png" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2019/06/z_download-herokucli.png" alt="Download Heroku CLI" /></a></p>
<h2>Install Heroku CLI</h2>
<p><a href="https://gist.githubusercontent.com/rupeshtiwari/8dd6fe36397bd40c0e2207e4c69d25fe/raw/b4f12ba77faef89aa8f63e15f1bc61836bcc9009/z_install-heroku-setup.png" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2019/06/z_install-heroku-setup.png" alt="Install Heroku CLI Setup" /></a></p>
<p><a href="https://gist.githubusercontent.com/rupeshtiwari/8dd6fe36397bd40c0e2207e4c69d25fe/raw/b4f12ba77faef89aa8f63e15f1bc61836bcc9009/z_install-heroku.png" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2019/06/z_install-heroku.png" alt="Install Heroku CLI Setup progress" /></a></p>
<h3>Confirm Heroku Installation</h3>
<p>Run below command in cmd <code>heroku --version</code> to confirm heroku installation.</p>
<p><a href="https://gist.githubusercontent.com/rupeshtiwari/8dd6fe36397bd40c0e2207e4c69d25fe/raw/b4f12ba77faef89aa8f63e15f1bc61836bcc9009/z_confirm-heroku-version.png" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2019/06/z_confirm-heroku-version.png" alt="Confirm Heroku Installation" /></a></p>
<h2>Login To Heroku</h2>
<p>Run below command in cmd</p>
<p><code>heroku login -i</code></p>
<p><a href="https://gist.githubusercontent.com/rupeshtiwari/8dd6fe36397bd40c0e2207e4c69d25fe/raw/b4f12ba77faef89aa8f63e15f1bc61836bcc9009/z_login-heroku-cli.png" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2019/06/z_login-heroku-cli.png" alt="Login To Heroku" /></a></p>
<h2>Create an App on Local</h2>
<p>Run below command to get the node project in your local machine.</p>
<p><code>git clone https://github.com/heroku/node-js-getting-started.git \$ cd node-js-getting-started</code></p>
<h2>Create the same App on Heroku Cloud</h2>
<p>Create an app in heroku with below command Go to the root folder of your local app and run below script on powershell so that Heroku will create the app and link it with the current project.</p>
<p><code>heroku create my-app</code></p>
<p>OR</p>
<p><code>heroku create</code> ( It will create an app with random name)</p>
<p>We will use <code>heroku create</code> script</p>
<p><a href="https://gist.githubusercontent.com/rupeshtiwari/8dd6fe36397bd40c0e2207e4c69d25fe/raw/b4f12ba77faef89aa8f63e15f1bc61836bcc9009/z_create-heroku-app-in-cloud.png" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2019/06/z_create-heroku-app-in-cloud.png" alt="heroku create" /></a></p>
<h2>Deploy the app on Heroku</h2>
<p>Run below script to push the current code in to the GitHub and also deploy from GitHub to heroku cloud location.</p>
<p><code>git push heroku master</code></p>
<p><a href="https://gist.githubusercontent.com/rupeshtiwari/8dd6fe36397bd40c0e2207e4c69d25fe/raw/b4f12ba77faef89aa8f63e15f1bc61836bcc9009/z_push-to-heroku-master.png" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2019/06/z_push-to-heroku-master.png" alt="heroku create" /></a></p>
<h2>Scale your deployed app</h2>
<p>Ensure that at least one instance of the app is running</p>
<p><code>heroku ps:scale web=1</code></p>
<p><a href="https://gist.githubusercontent.com/rupeshtiwari/8dd6fe36397bd40c0e2207e4c69d25fe/raw/2862c97251c9ffabccb94ce7c5105c6a14a89a33/z_scale-app-in-cloud.png" target="_blank" rel="noopener noreferrer"><img src="{{ site.baseurl }}/assets/2019/06/z_scale-app-in-cloud.png" alt="Scale app in cloud" /></a></p>
<h2>Open your app</h2>
<p>Write below command to open your application url live cloud based.</p>
<p><code>heroku open </code></p>
<h2>Conclusion</h2>
<p>I like the simplicity and easy steps to deploy an app on Heroku Cloud. Their documentations are excellent source of learning. I did deploy my first node.js app over Heroku as well  <a href="https://rocky-tor-59001.herokuapp.com/" target="_blank" rel="noopener noreferrer">See my app live here</a></p>
<p>Please subscribe my <a href="https://youtube.com/fullstackmaster" target="_blank" rel="noopener noreferrer">YouTube Channel Full Stack Master</a> (<strong>https://youtube.com/fullstackmaster</strong>)  to watch these steps live.</p>
