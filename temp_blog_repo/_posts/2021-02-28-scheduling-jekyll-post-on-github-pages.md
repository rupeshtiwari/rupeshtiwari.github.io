---
title: Scheduling Jekyll Post on GitHub Pages
date: '2021-02-28 00:00 +0000'
subtitle: Writing GitHub action to schedule Jekyll blog post publish
description: Writing GitHub action to schedule Jekyll blog post publish
header:
  image: 'https://i.imgur.com/5nUUsN1.jpg'
  teaser: https://i.imgur.com/RrLzSEP.jpg
  og_image: https://i.imgur.com/RrLzSEP.jpg
image: 'https://i.imgur.com/RrLzSEP.png'
tags:
  - jekyll
  - github
  - devops
  - webdev
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
toc: true
excerpt_separator: <!--more-->
related: true
share: true
read_time: true
author_profile: true
---

> Do you want to schedule your `Jekyll` blog post to be published on GitHub
> Pages on future date time? Then read this article.

## Introduction

Jekyll static site hosted on GitHub Pages doesn't come with schedule blog post
for future feature.

In this article, I will write a job to automatically post future blog posts and
send email after successful post.

## Creating GitHub workflow for publishing future post

We will create one workflow that will run every day and it will publish the post
for future dates.

1. Create your one
   [GitHub Secrete key call it GH_TOKEN](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository).
2. Add `future:false` in `_config.yml` ![](https://i.imgur.com/7iQYpRf.png)
3. Create `schedule-posts.yml` in `.github\workflows` folder. Add below script.
   [Learn more about cron event](https://jasonet.co/posts/scheduled-actions/)
   ![](https://i.imgur.com/V5kHyHe.png)

```yml
name: Build every hour

on:
  schedule:
    - cron: '0 0 * * *' # Run at the end of every day.
jobs:
  curl:
    runs-on: ubuntu-latest
    steps:
      - name: curl
        uses: wei/curl@master
        with:
          args:
            "-X POST -H 'Authorization: token ${{ secrets.PAGES_ACCESS_TOKEN }}'
            -H 'Accept: application/vnd.github.ant-man-preview+json'
            https://api.github.com/repos/YourUserName/YourRepository/pages/builds"
```

4. See how I wrote mine workflow.
5. You are all set now you can create a post for future date and your post will
   be published on that date. ![](https://i.imgur.com/7OXjxpa.png)

6. If you run the Jekyll at local machine you will notice that your new post is
   not getting published immediately. It will skip those posts to publish.

![](https://i.imgur.com/FIL72GR.png)

7. This post will be published only when the date will come.

## Sending e-mail on successful blog publish

I will use Gmail user id and password to send automatic email once blog publish
is done.

1. Create `MAIL_USERNAME` and `MAIL_PASSWORD` GitHub secretes
   ![](https://i.imgur.com/R6opFJb.png)

2. Add below script to send email.

```yaml
- name: Send email
  uses: dawidd6/action-send-mail@v2.4.0
  with:
    server_address: smtp.googlemail.com
    server_port: 465
    username: ${{secrets.MAIL_USERNAME}}
    password: ${{secrets.MAIL_PASSWORD}}
    subject: Publishing Blog
    # Literal body:
    body: Build job of ${{github.repository}} completed successfully!
    to: rupesh.tiwari.info@gmail.com
    from: GitHub Blog Repo
```

Change email Id and names.

3. Here is my
   [schedule-post file from master branch.](https://github.com/rupeshtiwari/rupeshtiwari.github.io/blob/master/.github/workflows/schedule-posts.yml)

You are all set now!

## Reference

1. https://seankilleen.com/2020/02/how-to-deploy-github-pages-on-a-schedule-to-publish-future-posts/
2. https://github.com/dawidd6/action-send-mail

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to
become full stack developer and grow your carrier as new software developer or
Lead Developer/Architect. Consider subscribing to our full stack development
training programs. You can enroll to All-Access Monthly membership plans to get
unlimited access to all of our video courses, slides, source code & monthly
video calls.

- Please subscribe to
  [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to
  access current and future angular, node.js and related courses.
- Please subscribe to
  [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to
  get everything from PRO plan. Additionally, you will get access to monthly
  live Q&A video call with Rupesh and you can ask doubts/questions and get more
  help, tips and tricks.

> Your bright future is awaiting for you so visit today
> [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board
> on your dream software company as a Developer,Architect or Lead Engineer role.

**💖 Say 👋 to me!** Rupesh Tiwari <a href="https://www.rupeshtiwari.com">
www.rupeshtiwari.com</a> ✉️
<a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi"> Email Rupesh</a> Founder
of <a href="https://www.fullstackmaster.net"> Fullstack Master</a>
