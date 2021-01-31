---
layout: post
title: Change Jekyll Blog Theme
cover_image: /assets/img/image-default.jpg
last_modified_at: 2021-01-30 13:55
date: 2021-01-30 13:55
author: Rupesh Tiwari
tags: [blogs, jekyll]
description: Learn how to change the jekyll blog theme
summary: Learn how to change the jekyll blog theme
image: /assets/img/blog-default.jpg
signature: /assets/img/fsm.png
---

![]({{ page.image | relative_url }})

Check your themes here : https://rubygems.org/search?utf8=%E2%9C%93&query=jekyll-theme

## Use Hacker Theme

I will use https://rubygems.org/gems/jekyll-theme-hacker

## Add Hacker theme to Gem

![](https://i.imgur.com/I3yDS51.png)

Run `bundle install` To install Hacker Theme.

## Update \_config.yml

![](https://i.imgur.com/bbRuyfG.png)

```yaml=
# Build settings
theme: jekyll-theme-hacker
```

## Restart server

Run
`bundle exec jekyll serve`

![](https://i.imgur.com/phIBOcH.png)

## Layout of the Hacker Theme

Minima Theme had post, page layout.

Hacker Theme only support `post` and `default`

Go to each post and change the layout to default

![](https://i.imgur.com/hJ4qzRV.png)

So go to index.md and change the layout to `default`

![](https://i.imgur.com/W9O0OpL.png)

## Build your site and check theme updated

Run
`jekyll update`

![](https://i.imgur.com/gATaE3X.jpg)

## Do You Want to become full stack developer? 💻

If you want to become full stack developer and grow your carrier as Lead Developer/Architect. Consider subscribing to our full stack development training programs. We have monthly membership plans and you will get unlimited access to all of our video courses, slides, source code & Monthly video calls.

- Please visit www.fullstackmaster.net/pro to subscribe to All Access PRO membership.
- Please visit www.fullstackmaster.net/elite to subscribe to All Access ELITE membership. You will get everything from PRO plan. Additionally you will get access to monthly live Q&A video call with Rupesh and ask doubts and get more tips and tricks.

> You bright future is waiting for you so visit today www.fullstackmaster.net and allow me to help you to board on your dream software architect/lead role.



Rupesh Tiwari\
www.rupeshtiwari.com \
✉️ <fullstackmaster1@gmail.com> \
Founder of [www.fullstackmaster.net](https://www.fullstackmaster.net) 🎓 \
<img src="{{page.signature}}" width="276">
