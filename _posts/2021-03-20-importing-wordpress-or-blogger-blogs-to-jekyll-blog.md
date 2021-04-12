---
title: Importing WordPress or Blogger Blogs to Jekyll Blog
date: 2021-03-20 00:00 +0000
description: Import your posts from a WordPress.com or Blogger.com blog to Jekyll
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: 'https://i.imgur.com/sUADwrL.png'
header:
  image: 'https://i.imgur.com/uZMKtNa.png'
  teaser: 'https://i.imgur.com/sUADwrL.png'
  og_image: 'https://i.imgur.com/sUADwrL.png'
category:
  - writing
tags:
  - blog
  - jekyll
  - github
  - beginners
---

> I have **WordPress** or **Blogger** blog and I decided to move away from **WordPress** and switch to **Jekyll**. I loved the way Jekyll is working. You can deploy Jekyll blog to **GitHub pages** for free. Only thing you need is domain. If you want otherwise custom domain is optional. In this article, I will show you how you can export **WordPress** blogs to your new Jekyll Project. Same technique can be used for **Blogger** Blogs import and migration to **Jekyll** project.

## Step 1: Downloading WordPress content

Download the WordPress blog Content as xml.

1.  Navigate to `https://YOUR-USER-NAME.wordpress.com/wp-admin/export.php` Then download you all content in your local box.

![](https://i.imgur.com/IG4sMlg.png)

For downloading Blogger Blog Content follow the instruction below:

![](https://i.imgur.com/nlA62eH.png)

## Step 2: Creating Jekyll Project

You need a Jekyll Site and I will use [Minimal Mistake Jekyll Theme](https://github.com/mmistakes/mm-github-pages-starter) for my demo.

## Step 3: Copy Blog Content XML in Jekyll Project

Copy the **wordpress.xml** file at root of your **Jekyll** project `wordpress.xml`

![](https://i.imgur.com/5quirEO.png)

## Step 4: Installing new Gem packages to import WordPress blogs to your Jekyll.

Run `gem install hpricot`
Run `gem install open_uri_redirections`
Run `gem install jekyll-import`

## Step 5: Converting WordPress.org Blogs to Jekyll Blogs

Then run below script at the root location of your **Jekyll** project to import posts from **wordpress.xml**

Run below Ruby script:

`ruby -r rubygems -e 'require "jekyll-import";JekyllImport::Importers::WordpressDotCom.run({"source" => "wordpress.xml","no_fetch_images" => false, "assets_folder" => "assets" })'`

It will create the folders and files in your Jekyll project form **WordPress** content xml. There will be couple of errors you can ignore them.

![](https://i.imgur.com/Lx15B7J.png)

All **WordPress** post already imported.

![](https://i.imgur.com/qMpw6yb.png)

You will see some new folders like `_attachments, _site_reviews, _restimonialss etc.`

![](https://i.imgur.com/FOUitDH.png)

I am only interested on blogs so I will not use them.
We are done importing WordPress blogs to Jekyll below 2 steps are optional.

## Converting Blogger.com Blog to Jekyll Blog

Follow the instructions to migrate your blogger.com blogs to Jekyll.

1. In your Jekyll project install below packages.

`gem install feedjira` and `gem install httparty`

2. Create `migrate.rb` file at the root of your Jekyll site.
3. Copy the [script from my Gist](https://gist.github.com/rupeshtiwari/80f2203fee697a94e4b11b75b856aa56) to `migrate.rb` ( in my gist fork I fixed the issues for `Feedjira` latest version)
   {% gist 80f2203fee697a94e4b11b75b856aa56 %}
4. Open PoserShell on windows from Jekyll site root location and run `ruby migrate.rb http://{user}.blogspot.com/feeds/posts/default`. Change the user to your blog user name.

![](https://i.imgur.com/N9NZTUA.png)

5. Finally your site is migrated successfully.
6. Run `bundle exec jekyll serve --port=4250` to see your site live at http://127.0.0.1:4250/

![](https://i.imgur.com/0Z2GnwE.png)

## Renaming html files to `md` file. (optional)

Notice the \_posts folder will get files as `html` However, the content will be in markdown format. So I am going to rename it to `md` file. And the reason is I have my **GitHub** Action to publish all of my markdown post to `dev.to`.

Renaming blog to `md` extension

![](https://i.imgur.com/6yj1XmR.png)

You can use node.js program to rename all of your files in one go. [Learn more](https://flaviocopes.com/node-mass-rename-files/)

```javascript
const fs = require('fs');
const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file.endsWith('.html')) {
    console.log(file);
    fs.renameSync(file, file.replace('.html', '.md'), (err) => {
      console.log(err);
    });
  }
}
```

When I run the script I could rename all of my 400 imported blogs successfully.

![](https://i.imgur.com/5HNLrvf.png)

Still blog are working and showing okay!

![](https://i.imgur.com/vcsojJ7.png)

## Deleting not required folders

You can also go ahead and delete other folders if you are not planning to use them. Like In my case I am not going to use my WordPress home page or other pages so I will be deleting them.

- Assets I will keep since it is used in my blogs.

  ![](https://i.imgur.com/f6s0E3z.png)

- However I will delete rest extra folders listed below.

  ![](https://i.imgur.com/NgL9wUy.png)

- Also I will review my draft folder and delete not required blogs.

  ![](https://i.imgur.com/a5T2oEF.png)

## Site deployed to GitHub Pages and all blogs are showing

[Rupesh Tiwari's Blogs](https://rupeshtiwari.github.io/)

## Github Actions triggered to auto post blog to dev.to account

![](https://i.imgur.com/A4UweXf.png)

I had to delete below front matters to publish dev.to successfully. [Learn More here... Dev.to Editor Guideline](https://dev.to/p/editor_guide)

```
password: ''
parent_id: '0'
type: post
status: publish
```

I had to rename `excerpt: to description:`

That's it you are all set now!

## References:

- https://import.jekyllrb.com/docs/wordpressdotcom/
- https://import.jekyllrb.com/docs/blogger/

_If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:fullstackmaster1@gmail.com?subject=Hi">fullstackmaster1@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
