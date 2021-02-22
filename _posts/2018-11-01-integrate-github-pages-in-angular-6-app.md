---
title: Integrate GitHub-Pages in Angular 6 App
date: 2018-11-02T03:31:50.000Z
published: true
comments: true
social-share: true
categories:
  - angular
  - javascript
  - npm
tags:
  - angular
  - GhPages
  - GitHub
  - javascript
  - Typescript
description: Integrate GitHub-Pages in Angular 6 App
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<h2>What is GhPages</h2>
<p>Do you want to save time to create post or article while writing software code ? Or do you want to see your angular app live running in the internet without deploying it separably on azure or AWS ? Then <a href="https://www.npmjs.com/package/ghpages" target="_blank" rel="noopener noreferrer">GhPages</a>&nbsp;or Github Pages is the answer to that.</p>
<p>I have one github project written in angular and I run my app live in github itself by using <code>ghpages</code>&nbsp;In this article, I will walk you through the process of publishing your app into <code>ghpages.</code> ​</p>
<h2>What GhPages Can Do</h2>
<blockquote><p><em>GhPages host README.md file on github server and give you unique URL&nbsp;to view as website.&nbsp;</em></p></blockquote>
<p>When we create Angular project using Angular CLI, it creates project files along with the README.md file. We write description about the code and how to get the code from github, how to install node packages and how to run etc. All of this steps are well documented in README.md file. Sometimes I personally put some more examples about my shared directive or services. Github can host this README.md file in website with various themes and you can see your document live in website.</p>
<blockquote><p>GhPages can also host your Angular App and give you unique URL to view your live app running on github server</p></blockquote>
<p>Yes, you can see your angular app live running with the help of ghpages. Once you check-in your <code>dist</code>&nbsp;folder to your github repository then ghpages can host the entire dist folder and you can see your app running.</p>
<h2>How do I integrate in my Angular 6 app</h2>
<p>In order to integrate in ghpages in your angular app please follow the below steps</p>
<p>https://gist.github.com/roopkt/accf84d4c17703f1a5a09bb863f2c73a</p>
<p>Now you can run your publish script (<code>npm run publish</code>&nbsp;) whenever you want to deploy your README.md file to github pages.</p>
<p><code>build:prd</code> will build the project in prod mode so that it will create a <code>dist</code>&nbsp;folder where the bundle files and <code>README.md</code>&nbsp;file will be placed.</p>
<p><code>deploy:gh</code>&nbsp;will deploy the dist folder into github pages.</p>
<h2>Example hosting Angular App on GithubPages</h2>
<p>Please visit my <a href="https://github.com/roopkt/e-store" target="_blank" rel="noopener noreferrer">e-Store app</a> on GitHub and see how my project is live working on github server. Also don't forget to add some item in your cart on <a href="https://roopkt.github.io/e-store/#/products" target="_blank" rel="noopener noreferrer">my online website for e-store&nbsp;</a>hosted on ghpages.</p>
<p>https://github.com/roopkt/e-store</p>
<p>Here are the steps, to follow in order to host <code>dist</code>&nbsp;folder on ghpages.</p>
<ol>
<li>Go to github repositoy then</li>
<li>Select settings scroll to GitHub Pages section and</li>
<li>Select `​gh-pages branch` from the drop down list</li>
</ol>
<p><img class="alignnone size-full wp-image-496" src="{{ site.baseurl }}/assets/2018/11/ghpages-1-1.png" alt="GitHub Pages Settings to host dist folder" width="1448" height="604" /></p>
<h2>Example hosting README.md on GithubPages</h2>
<p>please checkout my <a href="https://github.com/roopkt/webpack-typesript-library-consumption-sample" target="_blank" rel="noopener noreferrer">Webpack Typescript Library Consumption Sample&nbsp;</a></p>
<p>In this repository I do not have any web application however I had my <code>README.md</code>&nbsp;file that I wanted to publish as website and you cant believe using ghpages themes it is just looking like a WordPress post. Please <a href="https://roopkt.github.io/webpack-typesript-library-consumption-sample/" target="_blank" rel="noopener noreferrer">check out my online ghpage website </a>for ​​&nbsp; &nbsp;`README.md`&nbsp; &nbsp;file.</p>
<p>https://github.com/roopkt/webpack-typesript-library-consumption-sample</p>
<p>Here are the steps you will do in order to setup ghpages so that it will host your readme.md file</p>
<ol>
<li>Go to github repositoy then</li>
<li>Select settings scroll to GitHub Pages section and</li>
<li>Select `​master branch` from the drop down list</li>
<li>Also You can select your favorite them. (optional)</li>
</ol>
<p>[caption id="attachment_495" align="alignnone" width="1576"]<img class="alignnone size-full wp-image-495" src="{{ site.baseurl }}/assets/2018/11/ghpages-1.png" alt="GitHub Pages Settings For Master Branch" width="1576" height="655" /> GitHub Pages Settings for hosting README.md file[/caption]</p>
