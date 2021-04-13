---
title: Azure Security Center Basics
date: 2021-08-07 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/h4QI62f.png
header:
  image: https://i.imgur.com/lSrPIvO.png
  teaser: https://i.imgur.com/h4QI62f.png
  og_image: https://i.imgur.com/h4QI62f.png
tags:
  - azure
  - beginners
  - certification
  - webdev
---

> **Azure Security Center** is the base infrastructure service to collect logs analyze them and generate tailored recommendations. Learn how can you review and fix **general**, **cloud** securities and manage security concerns of your resources in Azure. This article will help you to prepare for [az-303: Microsoft Azure Architect Technologies](https://docs.microsoft.com/en-us/learn/certifications/exams/az-303).

![](https://imgur.com/HzMy9LY.png)

**Azure Security center** is a unified infrastructure security management system.

This is your "**base layer**" for monitoring the **security** configuration and **health** of your workloads. Azure Security Center collects events from **Azure** or **log analytics agents** and correlates them in a **security analytics engine**, to provide you with tailored recommendations (hardening tasks). Strengthening your security posture can be achieved by implementing these **recommendations**.

The Azure Security Center uses a built-in Azure Policy initiative in audit-only mode (the Azure Security Benchmark) as well as Azure Monitor logs and other Azure security solutions like Microsoft Cloud App Security. [Learn more here...](https://techcommunity.microsoft.com/t5/itops-talk-blog/what-s-the-difference-between-azure-security-center-azure/ba-p/2155188)

### Security Challenges

1. In cloud **workloads are changing quickly** and we must make sure the developers/devops are following the security best practices while provisioning the resources.
2. Internet **Security attacks** risk is always there if your resources are internet facing.
3. Also Security **skills are less** with developers.

### Solving Security Challenges

1. **Strengthen Security Posture**: Using Azure Security Monitor you can examine your resources and give you security reports.
2. **Protect against threats**: Azure security monitor can generate security alerts and raises threat prevention suggestions on your Azure resources.
3. **Auto Secure**: You can give auto-provisioning to resolve security issues faster.

### Resources Protected by Azure Security Center

There are lots of resources which are automatically **protected and monitor** by security center.

1. All **Azure PaaS resources** like DB engine and Storage accounts.
2. **Non-Azure** **Virtual Machines** on cloud or on premises. You must install Log Analytics Agents on them ( both windows and Linux ) supported.
3. **Azure VMs**
4. **Security alerts** are created when threat is found on the **azure workloads**. One has to investigate the security alerts.

### Security Center on Azure Portal

![](https://imgur.com/CMFvhUJ.png)

#### Overview screen

![](https://imgur.com/Ck6y2fp.gif)

1. **Secure Score**- over all health score
2. **Regulatory compliance** - how compliant you are for the resources.
3. **Azure Defender** - protects resources against security threats.
4. **Firewall Manager**
5. **Insights**

#### Recommendations screen

![](https://imgur.com/UJit8lQ.gif)
Displays the Secure Score, security improvement for all resources & their **recommendation** and **Quick fixes**.

#### Security alerts

![](https://imgur.com/UJit8lQ.gif)

If there is any security threats found on your resources then you will see alerts here.

#### Cloud security

![](https://imgur.com/UJit8lQ.gif)
Here you can see secure score and check your overall health score plus you can visit the recommendations.

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

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
