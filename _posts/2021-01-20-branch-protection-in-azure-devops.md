---
title: Branch protection in Azure DevOps
date: '2021-01-20 00:00 +0000'
subtitle: Learn how to protect Master branch of git repository in azure devops
description: Learn how to protect Master branch of git repository in azure devops
header:
  image: 'https://i.imgur.com/S8uujlY.jpg'
  teaser: https://i.imgur.com/fN6F867.jpg
image: 'https://i.imgur.com/S8uujlY.jpg'
cover_image: 'https://i.imgur.com/S8uujlY.jpg'
thumbnail-img: 'https://i.imgur.com/fN6F867.jpg'
share-img: 'https://i.imgur.com/S8uujlY.jpg'
tags:
  - azure
  - devops
  - tutorial
  - beginners
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 589360
toc: true
related: true
share: true
read_time: true
author_profile: true
---

**Protecting Master Branch from Bad Pull Requests** is big challenge now a days
while working in a team. You are working on git with distributed architecture.
Where many team members are creating pull request and adding their code to
MASTER/MAIN branch. It is important to protect our master branch such that if
some wrong code or failing build code or failing test code is pushed by some
team member. Then you do not want to get that code pulled or merged in MASTER
branch.

In this article I will explain you how can you protect git master branch from
accidental merge of failing code from some pull request in your Azure Repos.

## Issue: Creating Pull Request with Failing Build

### Work on New Feature Branch

Create new feature branch and write some bad code so that build failed.
![](https://i.imgur.com/FfCMbOK.png)

### Build is failing in New Feature Branch

Notice your build is failing in local machine.
![](https://i.imgur.com/CgeO5Lf.png) Go ahead and push your code in your feature
branch.

### Creating Pull Request to merge bad code

Follow steps to create pull request to merge this breaking code in master
branch.

1. Go to git repository and click on `Pull Requests` tab.
2. Select `Compare & Pull Request` button.

![](https://i.imgur.com/ukdSenz.png)

3. Add comment and create pull request

![](https://i.imgur.com/SZbaBXC.png)

![](https://i.imgur.com/Ic6rLJZ.png)

Notice wrong code is merged in master branch even though its build is failing it
got merged.

![](https://i.imgur.com/CJCxea3.png)

See build failed still code got merged. This is not desirable.
![](https://i.imgur.com/t3DrwbI.png)

We want to not merge the code until its build is passing.

## Protecting Master Branch in Azure Repos

In this example I will setup some policy assuming the code writer is admin. In
real world you may have different group of people who are the code reviewers and
code approvers.

## Configure branch policies

Select Repos > Branches to open the Branches page in the web portal.
![](https://i.imgur.com/9v4HWEo.png)

Locate your branch in the page.

![](https://i.imgur.com/meKo9fX.png)

Select the ... button. Select Branch policies from the context menu.
![](https://i.imgur.com/shguSAM.png)

### Require a minimum number of reviewers

The basic policy requires that a code writer can review & approve the code with
no rejections. ![](https://i.imgur.com/R8XdSKQ.png)

### Check for linked work items

Require associations between pull requests and a work item to ensure that
changes to your branch have work item management tracking.

![](https://i.imgur.com/HaU4TCU.png)

## Build Validation

Set a policy requiring changes in a pull request to build successfully with the
protected branch before the pull request can be completed. Build policies reduce
breaks and keep your test results passing.

If a build validation policy is enabled, a new build is queued when either a new
pull request is created, or if changes are pushed to an existing pull request
targeting the branch. The build policy then evaluates the results of the build
to determine whether the pull request can be completed.

Choose the + button next to Build validation.
![](https://i.imgur.com/AvUBkiR.png)

![](https://i.imgur.com/WqgRGi5.png)

1. Select the Build pipeline.
2. Choose the type of Trigger. Select Automatic (whenever the source branch is
   updated)
3. Select the Policy requirement. If you choose Required, builds must complete
   successfully to complete pull requests
4. After 12 hours if master has been updated. This choice is excellent for
   reducing the number of builds when your protected branch has frequent
   updates.
5. Enter an optional Display name for this build policy. This name identifies
   the policy on the Branch policies page. If you don't specify a display name,
   the policy uses the build pipeline name. Select Save.

Finally you will see the badge in the master branch which denotes that your
branch has policy setup done. ![](https://i.imgur.com/IzM4ja1.png)

## Create Failing Build Pull Request After Branch Policy Applied

Now lets create a pull request with the code base where build is failing.
![](https://i.imgur.com/bQeAxj2.png)

Notice build is failing locally ![](https://i.imgur.com/nbN4K9n.png)

Now let me create a pull request and see if this code can be merged to master
branch.

![](https://i.imgur.com/Z0vzaYg.png)

While creating pull request notice it automatically triggered the pull request
build.

1. Assign some reviewer I will put my self
2. Don't link any task and notice build process started as soon as I create pull
   request.
3. ![](https://i.imgur.com/jetNhyb.png)
4. Since I did not link task it is saying Work items must be linked since this
   was in the branch policy. After waiting some time notice our build failed
   which was expected ![](https://i.imgur.com/og6PAez.png) Notice master branch
   is un-changed since the build failed. ![](https://i.imgur.com/T1bTgZy.png)

Even though we link some task this build is failing so one of the rule is not
satisfied and hence code will never merge to master branch. We successfully,
protected our MASTER branch.

## Lets create pull request with working code

1. First I will assign work item to at-least pass that rule.
2. ![](https://i.imgur.com/6n1aw2a.png) ![](https://i.imgur.com/C8EVCbc.png)

Next it is asking that "Rupesh Tiwari" must approve

![](https://i.imgur.com/hGryjww.png)

So lets approve this pull request as well.

![](https://i.imgur.com/LV8eQXY.png)

Notice now only policy is failing is the build. Our build is failing.
![](https://i.imgur.com/kvyZQ7j.png)

Lets go to the source code and fix the code and check-in to the feature branch.
![](https://i.imgur.com/j5J1EjA.png)

Notice Automatically, our build will be triggered on the same pull request.
![](https://i.imgur.com/AxAjZNe.png)

Notice build succeed this time. ![](https://i.imgur.com/t7RFNPz.png)

Complete the pull request I will select `Squash commit`

![](https://i.imgur.com/p63SNYp.png)

Once you complete merge then again it will trigger a build which will run in
master branch.

![](https://i.imgur.com/fbyAstv.png)

Finally code will be submitted to master branch.

![](https://i.imgur.com/SvykIPT.png)

## Can I push changes directly to a branch after a branch policy is configured?

No, If you try to directly change the master branch it will show error saying u
must create pull request. Which is good protection.

![](https://i.imgur.com/LnCenbi.png)

## Git Repo Tags

Notice for each successful merge to master we see tags are created.
![](https://i.imgur.com/n0iwkpd.png)

## Why do we see 2 build for one Pull Request

If we create/update a PR, it will create a Pull request build, this build will
only trigger the release stage which enable the Pull request trigger. If we
complete a PR, it will create a CI build, and this build will trigger the
release stage which enable CD. That's how it is designed, because if

your PR is not finished, every time you update the code (assuming the code is
incorrect), your deployment will be triggered by this PR build, then this
deployment must be meaningless(because your code has not been modified to
complete), it will bring extra trouble to your deployment. The logic we designed
is that only when you complete this PR (all error codes are modified) will a CI
build be generated in the merge phase, which will trigger the CD.

## Reference

[Improve code quality with branch policies](https://docs.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops)

[Why 2 Builds while protecting master branch](https://developercommunity.visualstudio.com/content/problem/569286/pull-request-trigger-runs-stage-deployment-for-pr.html)

## Conclusion

We successfully protected our master branch in the repo. However, the
dis-advantage is now our builds are running 2 times for each pull request and
merge to master. This is the sacrifice that you have to do in order to protect
your branch.

## Become full stack developer 💻

If you want to become full stack developer and grow your carrier as new software
developer or Lead Developer/Architect. Consider subscribing to our full stack
development training programs. We have All-Access Monthly membership plans and
you will get unlimited access to all of our video courses, slides, source code &
Monthly video calls.

- Please subscribe to
  [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to
  access current and future angular, node.js and related courses.
- Please subscribe to
  [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to
  get everything from PRO plan. Additionally, you will get access to monthly
  live Q&A video call with Rupesh and you can ask doubts/questions and get more
  help, tips and tricks.

> Your future is waiting for you so visit today
> [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board
> on your dream software company as a Developer,Architect or Lead Engineer role.

**💖 Say 👋 to me!**

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:fullstackmaster1@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>
