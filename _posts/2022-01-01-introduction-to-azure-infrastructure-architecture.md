---
title: Introduction to Azure Infrastructure Architecture
date: 2022-01-01 00:00 +0000
description:
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

> Understanding Azure architecture gives you power to learn lots of higher level concepts on Azure like Virtual Machine scale sets etc. Therefore, in this article you will learn what is Azure overall architecture and its individual components like region, zones, data-centers etc.

## Azure Infrastructure Architecture

![](https://imgur.com/TVclQ1g.png){: .full}

- [Geography](#azure-geography) consists of many regions
- Each [Region](#azure-regions) must have minimum 3 Availability Zones.
- Each [Availability Zone](#availability-zone) can have one or more Data Centers equipped with independent power, cooling, and networking.
- No two zones can share a data center.
- Each [Data-Center](#azure-data-center) has Availability Sets
- Each [Availability Set](#what-is-availability-set) can have 3 Fault Domains & up to 20 Update Domain
- [Fault Domain](#what-is-azure-fault-domain) is grouping of virtual machines, independent network switch and power supply provides hardware fault tolerance.
- [Update Domain](#what-is-update-domain-in-azure) is logical grouping of virtual machine and included hardware that can be updated and rebooted at one time.

## Azure Geography

![](https://imgur.com/GgiCKUh.png){: .full}

![](https://i.imgur.com/IMF6Uxn.png){: .full}

[Azure Geography](https://azure.microsoft.com/en-us/global-infrastructure/geographies/#geographies) contains most of the countries in the world.

## What is Azure Regions?

![](https://imgur.com/EP9XhI7.png){: .full}

Each Geography has multiple Regions. Example The United States has regions like Center US, East US, East US2, East US3, North Central US, South Central US, West Central US, West US, West US 2, West US 3.

## What is Availability Zone in Azure?

![](https://imgur.com/edLLp4S.png){: .full}

Azure Availability Zones are **physically and logically separated datacenters** with their own **independent power source, network, and cooling**. Connected with an extremely low-latency network, they become a building block to delivering high availability applications. Availability Zones ensure that if there's an event impacting a datacenter site—for example, if someone cuts the power, or there are issues with cooling—your data will be protected.

Running a VM with one or more replicated copies on different **Availability Zones**, providing resiliency against data center failure.

## Azure Data-Center

![](https://imgur.com/ZQGt48j.png){: .full}

In the Data Center the servers are divided into multiple physical and logical groups.

## What is Availability Set?

![](https://imgur.com/FmgxQu5.png){: .full}

An [availability set](https://docs.microsoft.com/en-us/azure/virtual-machines/availability-set-overview) is a logical grouping of VMs that allows Azure to understand how your application is built to provide for redundancy and availability.

## What is azure fault domain?
![](https://imgur.com/8nolkCg.png){: .full}


The physical grouping of servers (virtual machines) is called Fault Domain. It is Each server share a common power source and network switch within a Fault Domain. A fault domain is a set of hardware components that share a single point of failure.

## What is update domain in Azure?

![](https://imgur.com/go8fjZ9.png){: .full}

![](https://imgur.com/IhbZ0o1.png){: .full}

An **update domain** is a logical group of underlying hardware that can undergo maintenance or be rebooted at the same time. As you create VMs within an availability set, the Azure platform automatically distributes your VMs across these **update domains**.

## Azure SLA

Azure Availability Zone give maximum industry best 99.99% of availability.

| scenario                         | Manage VMs manually                                                                    |                                                                      Use VM Scale Set |
| :------------------------------- | :------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------: |
| Adding extra VM                  | Manually create, configure and ensure compliance                                       |                                       Automatically create from central configuration |
| Traffic Balancing & distribution | Manually                                                                               |         Automatically create and integrate Azure load balancer or Application Gateway |
| High availability and redundancy | Manually create Availability set or distribute and track VMs across Availability Zones | Automatic distribution of VM instances across Availability Zones or Availability Sets |
| Scaling of VMs                   | Manual monitoring and Azure Automation                                                 | Auto scale based on host metrics, in-guest metrics, Application Insights, or schedule |

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
![](https://imgur.com/a32nUcu.png)
