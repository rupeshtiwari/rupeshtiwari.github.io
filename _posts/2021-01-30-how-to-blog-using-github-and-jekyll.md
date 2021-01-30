---
layout: post
title: How to Blog using GitHub and Jekyll
date: 2021-01-30 12:22
category: jekyll update
author: Rupesh Tiwari
tags: [blogs, jekyll, github]
summary: How to Blog using GitHub and Jekyll
image: /assets/images/image-default.jpg
signature: /assets/images/fullstackmaster.png
---

![]({{ page.image | relative_url }})

Learn how can you write & host your own blog FREE. With high performance and SEO enabled using **Jekyll**. I will use windows machine to demonstrate you please read this article till end.

## Install Ruby with Devkit

https://rubyinstaller.org/downloads/

![](https://i.imgur.com/ldk9724.png)

## Install Jekyll bundler

`gem install jekyll bundler`

## Create Jekyll Project

open cmd `c:/windows/sytem32>`

Then Run below to create project:

`jekyll new "C:\Full Stack Master\Fullstackmaster COURSES\Blogs\jekyll-blogs"`

![](https://i.imgur.com/EJW62B1.png)

## Install Webrick

go to the root of project

![](https://i.imgur.com/P6DonCd.png)

and run `bundle add webrick`

![](https://i.imgur.com/MYOmUVx.png)

![](https://i.imgur.com/tZsN6vu.png)

## Serve Project

Run

`jekyll serve --trace --incremental`

![](https://i.imgur.com/EoWhKK5.png)

![](https://i.imgur.com/UVBr3YH.png)

## Create Github Repo

Create own repo

![](https://i.imgur.com/usS9Z85.png)

Push the code to this repo:

```shell=
git remote add origin https://github.com/rupeshtiwari/rupeshtiwari.github.io.git
git branch -M main
git push -u origin main
```

## Push the code to Github

GitHub pages can change the domain name you can use your own domain rupeshtiwari.com/blogs etc [learn more](https://docs.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site)

I push my code to github.

## Visit your blow on github pages

Now visit https://rupeshtiwari.github.io/ you can see my site is up and running.

## Reference

https://www.kiltandcode.com/2020/04/30/how-to-create-a-blog-using-jekyll-and-github-pages-on-windows/

---

## Do You Want to become full stack developer? 💻

If you want to become full stack developer and grow your carrier as Lead Developer/Architect. Consider subscribing to our full stack development training programs. We have monthly membership plans and you will get unlimited access to all of our video courses, slides, source code & Monthly video calls.

- Please visit www.fullstackmaster.net/pro to subscribe to All Access PRO membership.
- Please visit www.fullstackmaster.net/elite to subscribe to All Access ELITE membership. You will get everything from PRO plan. Additionally you will get access to monthly live Q&A video call with Rupesh and ask doubts and get more tips and tricks.

> You bright future is waiting for you so visit today www.fullstackmaster.net and allow me to help you to board on your dream software architect/lead role.

---



Rupesh Tiwari\
www.rupeshtiwari.com \
✉️ <fullstackmaster1@gmail.com> \
Founder of www.fullstackmaster.net 🎓 \
<img src="{{page.signature}}" width="276">
