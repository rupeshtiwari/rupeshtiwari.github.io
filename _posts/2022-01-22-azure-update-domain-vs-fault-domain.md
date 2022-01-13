---
title: Azure Update Domain vs Fault Domain
date: 2022-01-22 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/zZYQYQA.png
header:
  image: https://i.imgur.com/3PR1wRa.png
  teaser: https://i.imgur.com/zZYQYQA.png
  og_image: https://i.imgur.com/zZYQYQA.png
tags:
  - azure
  - webdev
  - beginners
  - tutorial
---

> Do you know in Azure Data Center you can protect your server against regular server software maintenance outages? You can also protect your VMs on Azure against Network breakdown or power interruptions. Read this article to learn what is Update and Fault Domains in Data-Center and how they protect against software and hardware disasters.

In the Data Center the servers are divided into multiple physical and logical groups. The physical grouping is called [Fault Domain](#why-do-we-separate-servers-in-different-racks) and logical grouping is called [Update Domain](#why-group-servers-in-update-domains). Each Rack of servers with its own power supply and network switch as one fault domain. If there are 10 Racks in the Data Center means you have 10 different Fault Domains.

## Update Domain

![](https://imgur.com/go8fjZ9.png){: .full}

An **update domain** is a logical group of underlying hardware that can undergo maintenance or be rebooted at the same time. As you create VMs within an availability set, the Azure platform automatically distributes your VMs across these **update domains**.

- Update domains comprises of groups of VMs and underlying physical hardware that can be **rebooted at the same time**.
- Update domains are a logical part of each data center and are implemented with software and logic.
- The Update Domains tells us how it is going to be patched when Azure does update to those machines.

![](https://imgur.com/FmgxQu5.png){: .full}

**With Respect to IaaS Services**
Your VMs on Azure are called as Guest VMs. With IaaS Microsoft will not going to patch Guest VMs. So if you spin up an IaaS VM with Windows on it and you do not turn on automatic updates or any of those upgrade features. Microsoft Azure is not going to patch your Virtual Machine OS at any point. But Azure will be patching the Hyper Visor as planned maintenance work. The Virtual Machine is running through some Hypervisor in the Azure. And that HyperVisor must be patched regularly.

So if you think your virtual machine will never be updated and never be switched off. And you control your VM you know when it will be down. And you think you don't need multiple VMs. Then your are in-correct. You do need to have multiple VMs because Microsoft Azure is going to patch that Rack or that Hypervisor and it is going to bring your single VM down (or Azure Fabric will move it to other VM to give SLA) So you need to make sure that you have 2 VMs to get the defined SLA.

**With Respect to PaaS Services**
![](https://imgur.com/IhbZ0o1.png)
Suppose you spin up an application in the PaaS services. So PaaS does patch the guest operating system (OS). When you bring the CS Package to do update. Then Azure will patch Update Domain 0 first then Update Domain 1 next Update Domain 2. So it will walk the stack to do the updates. That way client does not know and does not get the downtime.

![](https://imgur.com/WSze6Do.png)

Suppose you have a Web App running in Azure VM as PaaS, then Microsoft Azure will turn off the VM and when the next request comes from the client then Azure will send that request to other available VM to maintain the SLA.

You start with 5 update domains and you can take up to **20** Update Domains. Suppose you had 7 instances, So it will distribute your instances in 5 update domains then once it hit those first 5 update domains. It will layer the other 2 instances.

## Fault Domain

![](https://imgur.com/8nolkCg.png){: .full}

It is kind of clustering like windows cluster. Its their to protect the physical assets. The Fault Domain primary use case is If the Rack went down, something bad happened in that Rack in Azure. Because, of the hardware broke, something broke in switch or something bad happened in the server of that Rack. This Rack can be repaired. However, Azure Fabric will detect that Rack went down and it will move the workloads to some other Rack as long as you have another virtual machine in another fault domain. On the top across the Racks Azure has VIPs or those virtual IPs across the top of our availability set so that it will continue to let the client write or read the servers. The servers are identical.

![](https://i.imgur.com/lSGq9iI.png){: .full}

You can have maximum of **3** Fault Domains

- It is a IaaS offering from the Azure
- A fault domain is essentially a rack of servers. It provides the physical separation of your workload across different power, cooling, and network hardware that support the physical servers in the data center server racks.
- The group of virtual machines that share common hardware are in the same fault domain.
- Set of hardware component that share the single point of failure.
- For fault tolerance, you need multiple Fault Domain
- fault Domain distributes the loads across the physical Racks.

{: .notice--success}
Learn More About [Fault and Update Domains](https://docs.microsoft.com/en-us/azure/virtual-machines/availability)

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
![](https://imgur.com/5fBatz9.png)
