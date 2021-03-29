---
title: Building Blog with Jekyll and GitHub Pages on Windows
date: 2021-03-14 00:00 +0000
description: Create you new blog with Jekyll and host free
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/mYFTPtF.png
header:
  image: https://i.imgur.com/Ye71QIp.png
  teaser: https://i.imgur.com/mYFTPtF.png
  og_image: https://i.imgur.com/mYFTPtF.png
category:
  - writing
tags: 
  - blog
  - jekyll
  - github
  - beginners
---

>Learn how can you can create & host your own new **Blog site** for **FREE**. With high performance and `SEO` enabled using **[Jekyll](https://jekyllrb.com/)** and host them in **GitHub Pages**. I will use windows machine to demonstrate you please read this article till end. 

## Installing Ruby with Devkit on Windows

https://rubyinstaller.org/downloads/ 

![](https://i.imgur.com/ldk9724.png)

## Installing Jekyll bundler on Windows

`gem install jekyll bundler`

`gem install tzinfo-data` (is necessary when developing on Windows)

**gem** is just like **npm** that helps to install dependencies. 

## Creating Your First Jekyll Project on Windows

Open `cmd` `c:/windows/sytem32>`

Then Run below to create project: 

`jekyll new "C:\Full Stack Master\Fullstackmaster COURSES\Blogs\jekyll-blogs"`

![](https://i.imgur.com/EJW62B1.png)

Which components shall be installed? Press 1 and enter

## Install required Packages for windows on Jekyll site

You have to add many other dependencies for windows. Add below dependencies in your `gemfile`

```yaml=
# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]


gem "webrick", "~> 1.7"
```

Go to the root of project 

![](https://i.imgur.com/P6DonCd.png)

Then run `bundle` to install of them. 

![](https://i.imgur.com/MYOmUVx.png)

![](https://i.imgur.com/tZsN6vu.png)


## Serve Your first Jekyll Project in Windows

Run

`bundle exec jekyll serve --trace --incremental`

![](https://i.imgur.com/EoWhKK5.png)


![](https://i.imgur.com/UVBr3YH.png)


## Creating GitHub Repo

Create your own repository on GitHub to host your blog free on GitHub pages. 

![](https://i.imgur.com/usS9Z85.png)

Push the code to this repo: 
```shell=
git remote add origin https://github.com/rupeshtiwari/rupeshtiwari.github.io.git
git branch -M main
git push -u origin main
```

## Pushing the code to GitHub

GitHub pages can change the domain name you can use your own domain https://www.rupeshtiwari.com/blog etc [learn more](https://docs.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site)

I push my code to GitHub. 

## Visiting your blog site on GitHub pages

Now visit https://rupeshtiwari.github.io/ you can see my site is up and running. 


## Reference 

https://www.kiltandcode.com/2020/04/30/how-to-create-a-blog-using-jekyll-and-github-pages-on-windows/ 


---

*If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box.*

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access *current* and *future* **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask ***doubts/questions*** and get more help, tips and tricks.

> You bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!** 
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:fullstackmaster1@gmail.com?subject=Hi">fullstackmaster1@gmail.com</a> 
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)


