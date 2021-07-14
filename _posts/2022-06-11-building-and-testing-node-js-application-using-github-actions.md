---
title: Building and Testing Node.js Application using GitHub Actions
date: 2022-06-11 00:00 +0000
description: Building and Testing Node.js Application using GitHub Actions
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/qxXxmBa.png
header:
  image: https://i.imgur.com/zipiW93.png
  teaser: https://i.imgur.com/qxXxmBa.png
  og_image: https://i.imgur.com/qxXxmBa.png
tags:
  - github
  - tutorial
  - beginners
  - javascript
---

> Do you have node.js project that has specs and you want to make sure these specs run when you push your code to GitHub repo? Well you must setup CI in your project to avoid failing specs to be pushed to remote origin. Read this article to learn how can you setup CI for node.js project using GitHub Actions.

## Node.js Template to run specs

GitHub provides Node.js workflow template to run your specs and install dependencies whenever you push to your main or master branch. Learn more about [the node.js GitHub template here](https://docs.github.com/en/actions/guides/building-and-testing-nodejs).

### My Node.js Workflow template file steps

- I want to run my specs only in one node.js version `12.x`.
- I created a `main.yaml` file in `.github/workflows` folder.

Here is the workflow that I created for my node.js project:

## Main.yaml complete node.js template for GitHub

```yaml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '12.x'
          registry-url: https://registry.npmjs.org
          scope: '@octocat'
      - run: npm ci
      - run: npm run build --if-present
      - run: npm run test:once
```

## Running GitHub workflow to test node.js specs

When I push my code in GitHub actions I see my CI build is passing. I am happy now 😄

![](https://i.imgur.com/EqzRNv2.png){: .full}

## Running GitHub workflow for failing tests

Lets fail specs and push our code.

![](https://i.imgur.com/62uxSSG.png){: .full}

Lets go over GitHub actions and check if our build is passing?

![](https://i.imgur.com/vkhha97.png){: .full}

No, In my repo I see failing symbol.

Let me check actions there I see my build failed.

![](https://i.imgur.com/LenaHeo.png){: .full}

Here is the detailed error

![](https://i.imgur.com/uPZ1UDw.png){: .full}

How do you feel, did you setup differently let me know what improvement I can do?

## How can I reject push from repository members using GitHub Actions?

You can't use GitHub Actions to prevent a push; you would need a pre-receive hook to do that. GitHub's cloud version doesn't currently support that, although GitHub Enterprise Server (the on-premises version) does.

Read the [stack-overflow answer here](https://stackoverflow.com/questions/57741805/how-can-i-reject-push-from-repository-members-using-github-actions).

## What I did to reject push if build failed in GitHub actions?

So basically the rules that I follow in my project:

- for each work always create Feature branch.
- If you feature branch build is passing.
- Then only merge your code to main/master branch.

You can always setup branch policy that no one directly push to your main/master branch. Everyone has to create pull request.

That way you can secure your code base in master/main branch.

I hope this is helpful.

## How to skip GitHub actions CI to run on push

Sometime if you want to just update the project documents like readme file etc. and push your code and you do not want to run the entire CI to build, test and deploy etc. Then use the trick use `[skip CI]` in your commit comments. Also add the filter in your workflow template to not run build when `[skip CI]` text present in commit comments. 

Add below expression in your workflow template:

```yaml
if: "!contains(github.event.head_commit.message, '[skip CI]')"
```

[Check my template file](https://github.com/rupeshtiwari/coding-examples-final-450-by-love-babbar/blob/main/.github/workflows/main.yaml).

Here is example to skip ci build in GitHub actions:

`chore: updating readme [skip CI]`

See my CI build did not run 

![](https://i.imgur.com/4SixDmE.png){: .full}

![](https://i.imgur.com/XT4wwvh.png){: .full}



Hope this article is helpful for all beginners for GitHub actions and node.js like me! 



---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

{: .notice--info}
I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

{: .notice--warning}
Your bright future is awaiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)
