---
title: Site Recovery Strategy in Azure
date: 2021-12-11 00:00 +0000
description: Learn the failover and failback stages in Site Recovery on Azure
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/7I0NoBe.png
header:
  image: https://i.imgur.com/vce9zzl.png
  teaser: https://i.imgur.com/7I0NoBe.png
  og_image: https://i.imgur.com/7I0NoBe.png
tags:
  - azure
  - webdev
  - beginners
  - tutorial
---

> Learn the failover and failback stages in Site Recovery on Azure. Learn **Business Continuity and Disaster Recovery** (BCDR) strategy in Azure.

## Failover and failback in Site Recovery has four stages

![](https://imgur.com/TO8eYHW.png)

**Stage 1: Fail over from on-premises:** After setting up replication to Azure for on-premises machines, when your on-premises site goes down, you fail those machines over to Azure. After failover, Azure VMs are created from replicated data.

**Stage 2: Reprotect Azure VMs:** In Azure, you reprotect the Azure VMs so that they start replicating back to the on-premises site. The on-premises VM (if available) is turned off during reprotection, to help ensure data consistency.

**Stage 3: Fail over from Azure:** When your on-premises site is running as normal again, you run another failover, this time to fail back Azure VMs to your on-premises site. You can fail back to the original location from which you failed over, or to an alternate location.

**Stage 4: Reprotect on-premises machines:** After failing back, again enable replication of the on-premises machines to Azure.

![](https://imgur.com/Zuy3Ijz.png)

{: .notice--success}
Learn more about [BCDR strategy in Azure here](https://docs.microsoft.com/en-us/azure/site-recovery/failover-failback-overview#recovery-stages).

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

{: .notice--info}
I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

{: .notice--warning}
Your bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/5fBatz9.png)
