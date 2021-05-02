---
title: Monitoring your Virtual Machines with Azure Monitor
date: 2021-08-14 00:00 +0000
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
  image: https://i.imgur.com/po7VJxp.png
  teaser: https://i.imgur.com/h4QI62f.png
  og_image: https://i.imgur.com/h4QI62f.png
tags:
  - azure
  - webdev
  - beginners
  - certification
---

> You can monitor **performance** and **health** of Virtual Machines and Virtual Machines scale sets, running processors and other resources dependencies with **Azure Monitoring**. This article will help you to prepare for [az-303: Microsoft Azure Architect Technologies](https://docs.microsoft.com/en-us/learn/certifications/exams/az-303).

## Introduction

**Azure Monitoring** is a product that helps you to:

- Deliver **predictable performance and availability**
- Identify **performance bottlenecks** and existing **network issues**
- Identify other dependencies issues and external storage.

## What kind of VMs supported?

- Azure **VMs**
- Azure **VMs scale sets**
- **Hybrid VMs** connected with **Azure Arc**
- **On-premises** virtual machines
- Virtual machines hosted in **another cloud** environment like AWS

## How to configure VMs for Azure Monitoring

1. [Create a Log Analytics Workspace](#creating-log-analytics-workspace)
2. Add **VMInsights solutions** to the Workspace.
3. **Install** **agents** on virtual machine and virtual machine scale sets.

## Limitations on Linux VMs

1. VMs **Red Hat Linux (RHEL)6** does not support "**Available Memory**" feature from Azure Monitoring.
2. **Metrics** are only available for data disks on Linux VMs using **XFS filesystems or EXT filesystem** family (EXT2,EXT3,EXT4)

## Monitoring

![](https://imgur.com/W5ZpfLv.png)

Once you have created VM in azure then you can see **insights** under Monitoring group of VMs. You can **enable** monitoring for the virtual machine which will **install** the **agent** on VM to work with Azure Monitor.
![](https://imgur.com/14Xqb1v.png)
You must connect to Log Analytics Workspace also. Then after 5-10 mins VM will start sending data to the Azure Monitoring. All the data goes to Azure Analytics Workspace.
You see 3 kinds of data in Azure monitoring.

### Map

![](https://imgur.com/ZniCark.png)

List of processes running on virtual machine, which port, IP address, VM properties

### Performance

![](https://imgur.com/7YXyLX6.png)
Logical disk, size, percentage of use, CPU utilization.

### Health

Health of the VM

### Log Analytics Workspace

![](https://imgur.com/pRUjhup.png)

Log Analytics workspace helps us to:

- Creates alerts when CPU goes high etc.
- Use `Kusto Queries(KQ)` Language to search and analyze logs
- Connect with other Azure services like `Azure Sentinel` for security analytics for entire enterprise.

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
