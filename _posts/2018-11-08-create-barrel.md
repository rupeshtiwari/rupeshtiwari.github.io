---
layout: post
title: Create Barrel for Typescript Project
date: 2018-11-08T22:34:49.000Z
type: post
published: true
comments: true
social-share: true
categories:
  - JavaScript
tags:
  - JavaScript
  - npm
meta:
  _wpas_mess:
    "What is a Barrel, Why Should I use Barrel, How to Create a Barrel, What
    Problem Barrel is solving ? I have a big typescript project that I bundle
    via webpack exposing  public module. I will show you how I did this. \_"
  _wpas_done_all: "1"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1611963353;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:775;}i:1;a:1:{s:2:"id";i:2643;}i:2;a:1:{s:2:"id";i:493;}}}}
  _thumbnail_id: "1468"
  advanced_seo_description: >-
    What is a Barrel, Why Should I use Barrel, How to Create a Barrel, What
    Problem Barrel is solving ? I have a big typescript project that I bundle
    via webpack exposing  public module. I will show you how I did this.
  _publicize_twitter_user: "@roopkt"
  _qode-like: "0"
  _oembed_2370e197fe93839ba6cfff84407aa8b9: "{{unknown}}"
  _oembed_728ba10bb6a6762aaa9246e927dc979b: "{{unknown}}"
  _oembed_803ee764dfbc878fca7db4a3fd2d0a88: "{{unknown}}"
  _oembed_351002f1ac23a479b1455ffd5419a42a: "{{unknown}}"
  _oembed_1511e9dade0f87db3a9c5be2652cab24: "{{unknown}}"
  _oembed_0ac8f4cdc2d8c600af3abde6578fe343: "{{unknown}}"
  _oembed_f784a784242cdf6e751cbe8ace2fb722: "{{unknown}}"
  _oembed_8e3e0a5889fac1aba4f72ecda30c0a0e: "{{unknown}}"
  _oembed_2c653dea928a11cc5228b059bc9e6608: "{{unknown}}"
  _oembed_31c9c9ec342b8d7a858db73886b81f3a: "{{unknown}}"
  _edit_last: "1"
  qode_page_background_image_fixed: "yes"
  qode_hide-featured-image: "no"
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  slide_template: default
  wpmm_postgrid_views: "1267"
  _oembed_18842c6b9cfb75b458affb7336c1eb75: "{{unknown}}"
  _b2s_post_meta:
    "a:6:{s:8:\"og_title\";s:36:\"Create Barrel for Typescript
    Project\";s:7:\"og_desc\";s:216:\"What is a Barrel, Why Should I use Barrel,
    How to Create a Barrel, What Problem Barrel is solving ? I have a big
    typescript project that I bundle via webpack exposing public module. I will
    show you how I did this.
    \_\";s:8:\"og_image\";s:74:\"https://blog.rupeshtiwari.com/wp-content/uploads/2018/11/create-barrel.jpg\";s:10:\"card_title\";s:36:\"Create
    Barrel for Typescript Project\";s:9:\"card_desc\";s:216:\"What is a Barrel,
    Why Should I use Barrel, How to Create a Barrel, What Problem Barrel is
    solving ? I have a big typescript project that I bundle via webpack exposing
    public module. I will show you how I did this.
    \_\";s:10:\"card_image\";s:74:\"https://blog.rupeshtiwari.com/wp-content/uploads/2018/11/create-barrel.jpg\";}"
  _yoast_wpseo_primary_category: ""
  _wpb_vc_js_status: "false"
  _yoast_wpseo_content_score: "60"
  _oembed_6ec7e0038da3da49044965935508c32b: "{{unknown}}"
  _oembed_cd2b90ba2b43cd0b85c95d531f97a93f: "{{unknown}}"
  _oembed_b26cbbc5204763e7b3cf58d63fc44a47: "{{unknown}}"
  _oembed_3ac389c8771b60e52d7942516b9bebb8: "{{unknown}}"
  _wpcom_is_markdown: "1"
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /create-barrel/
description:
  "\n\t\t\t\tWhat is a Barrel, Why Should I use Barrel, How to Create a Barrel,
  What Problem Barrel is solving ? I have a big typescript project that I bundle
  via webpack exposing  public module. I will show you how I did this. \_\t\t"

---

<blockquote>When you create your own Typescript  library then you need a barrel file where you put all of your files that you want to expose to the outside world kind of public API. Normally this is an <code>index.ts</code> file where you want to <code>export</code> all of your files which will become public API. The big question is how to automatically create this index file or barrel ? Especially if you are maintaining a huge project.</p></blockquote>
<h2>What is Barrel</h2>
<p>It is an index file where you export all of your files those you want to make them available publically.</p>
<h2>What Problem Barrel is solving</h2>
<p>Imagine you have a project where you got a <code>Fruits Folder.</code> you have <code>apple.ts, orange.ts, banana.ts, etc.</code> files in the fruit folder.</p>
<p><img class="alignnone size-full wp-image-2764" src="{{ site.baseurl }}/assets/2018/11/folder-files.png" alt="" width="511" height="239" /></p>
<p>Now imagine you have <code>kitchen.ts</code> file where you want to import all of your fruits then you end up writing below code. Where you want to import each fruit will become messy and you end up importing each file explicitly. If you have big numbers of fruits to import it will become lengthier.</p>
<p>https://gist.github.com/rupeshtiwari/fd9bdfb1f1e4b427b747678f6682fdbb</p>
<h2>How to Create a Barrel</h2>
<p>However if you have created a barrel file which is nothing but an <code>index.ts</code> file infruit folder. Which looks like below where you export your files that you want them to be available for other files from folder level.</p>
<p>https://gist.github.com/rupeshtiwari/dac4d57f2b6600486145d1de8b50bea5</p>
<p>your folder structure looks like below so now you have <code>index.ts</code> file inside your <code>fruit</code> folder which will help you to import any file just from <code>fruit</code> folder level.</p>
<p><img class="alignnone size-full wp-image-2766" src="{{ site.baseurl }}/assets/2018/11/folder-barrel.png" alt="" width="744" height="300" />Then now in <code>kitchen.ts</code> file you code looks like below. Is't it looks pretty ?  :)</p>
<p>https://gist.github.com/rupeshtiwari/3ea0193e8c87ca80d625bada8e468f0e</p>
<p>https://gist.github.com/rupeshtiwari/ac17707d560cbc7c7f1d34382d8b82e2#file-kitchen-without-fruits-barrel-js</p>
<p>https://gist.github.com/rupeshtiwari/ac17707d560cbc7c7f1d34382d8b82e2#file-kitchen-without-fruits-barrel-js</p>
<p>https://gist.github.com/rupeshtiwari/ac17707d560cbc7c7f1d34382d8b82e2#file-kitchen-without-fruits-barrel-js</p>
<h2>Barrelsby</h2>
<p>I have a huge typescript AngularJS project. I am using webpack to bundle them up. Every-time I bundle my app, I want to create an <code>index.ts</code> file which contains all of the files that I want to export as a public api. This is a huge manual task to put all of the file names and put it in one index file. I found  <a href="https://www.npmjs.com/package/barrelsby" target="_blank" rel="noopener noreferrer"><code>barrelsby</code>   npm package </a>very helpful, It helped me to create the barrel within blink of eyes !</p>
<h3>How to use Barrelsby</h3>
<p>It is very easy to use barrelsby in your project. Go to <code>package.json</code> file and inside the <code>script</code> object add below script.</p>
<p>https://gist.github.com/rupeshtiwari/ac17707d560cbc7c7f1d34382d8b82e2</p>
<p>In the above code I am calling <code>barrelsby</code> and saying go to <code>src/app</code> directory and create my barrel file. While creating barrel file it will exclude any file ending with <code>.spec.ts</code> or <code>.tests.ts</code> by default it will create a barrel file with the name of <code>index.ts</code> and this name was good for my project.</p>
<ol>
<li><code>-e</code> is used for exlcude, it takes the file names that you want to exclude.</li>
<li><code>-d</code> is used for giving the path / location for the directory where you want to create index file.</li>
<li><code>-q </code>is used to create your barrel file using single quotes. This feature is my favorite feature :)</li>
</ol>
<p>There are tons of configuration options that you can find <a href="https://www.npmjs.com/package/barrelsby#configuration-options" target="_blank" rel="noopener noreferrer">them here </a>.</p>
<h3>Restrictions</h3>
<p>Through out the entire app it just creates only one index file. It is a problem if you want to create multiple index files for multiple folders within a app. In order to solve this problem I create indipendent scripts for each folder.</p>
<p>Let me know how if you have explored <a href="https://www.npmjs.com/package/barrelsby" target="_blank" rel="noopener noreferrer">Barrelsby</a> ? and</p>
<p>what is your experience ?</p>
<p>Do you want me to create an video on this in <a href="https://www.youtube.com/channel/UCfjBZHutgAYon-T8sqt1rwg" target="_blank" rel="noopener noreferrer">my YouTube Channel RupTech </a></p>
