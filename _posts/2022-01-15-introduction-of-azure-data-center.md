---
title: Introduction of Azure Data Center
date: 2022-01-15 00:00 +0000
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

> Did you know how your servers are placed in Azure Data-Center? Do you understand how Azure Data Center protects your servers against software or hardware disasters? Read this article to understand Azure Data Center in-depth.

## What is Azure Data Center?

![](https://i.imgur.com/VLOm3Gl.png){: .full}

Azure Data Center has **Servers**, Networks Switch, Power Supply & Hardware's. Servers are placed on a **Server Rack**. Each Server Rack with it's own Power Supply and Network Switch is called as [**Fault Domain**](#why-do-we-separate-servers-in-different-racks). Each Server Rack has multiple [Update Domains](#why-group-servers-in-update-domains). Data-center normally comprises of lots of Fault Domains.

![](https://imgur.com/m79b5dF.png){: .full}

In the Data Center the servers are divided into multiple physical and logical groups. The physical grouping is called [Fault Domain](#why-do-we-separate-servers-in-different-racks) and logical grouping is called [Update Domain](#why-group-servers-in-update-domains). Each Rack of servers with its own power supply and network switch as one fault domain. If there are 10 Racks in the Data Center means you have 10 different Fault Domains.

## What is Planned Maintenance?

A planned maintenance event is when the underlying Azure fabric that hosts VMs is updated by Microsoft.

- Security Patch, Performance patch, add and update features are called as planed maintenance.
- After planned maintenance you must reboot your VMs.

## What is Unplanned Maintenance?

Unplanned maintenance events involve a hardware failure in the data center, such as:

- power outage
- disk failure

## Why do we separate servers in different Racks?

In order to provide single point of failures like you spread your money in different banks and mutual funds 😃.
![](https://i.imgur.com/UOB76UE.png){: .full}

Example lets say you have 100 servers in data center and they are all connected by single power supply and network switch.

![](https://i.imgur.com/DTQaHad.png){: .full}

What if the single power supply or network will fail it will bring down to all of the servers in the data-center.

![](https://i.imgur.com/vmfzt7W.png){: .full}

Therefore, in a data-center we spread the servers in the different Racks with their own Power and Network Switch called as Fault Domain.

![](https://i.imgur.com/RPs6DUa.png){: .full}

So if one Rack with 10 servers are affected then rest of the other Racks means remaining 90 servers are still up and running.

By grouping servers in multiple Racks or Fault domains we are eliminating single point of failure.

## Why group servers in Update Domains?

Similar to Fault Domain your servers will be also grouped logically to an Update Domain. Very often planned maintenance requires server patches and software updates need to be applied on the Azure Hypervisor which is actually hosting your VMs. So your VM on that Azure Hypervisor can go down while patch is being applied. And we don't all the servers to be rebooted at the same time.
Therefore, all the servers within same update domain gets rebooted at one time and they take 30 minutes time to recover back. Meanwhile the machines which are in different update domain can serve the client requests. Therefore, update domain is a group of servers that can be updated and rebooted at the same time.

## What is Availability Set in Data-Center?

![](https://i.imgur.com/DvS3Egk.png){: .full}

Availability Set is a concept within a data-center. The servers in a data center are divided into multiple physical groups called Fault Domains and logical groups called Update Domains.

![](https://i.imgur.com/WbB1nfl.png){: .full}

**Availability Set** in data-center is made up of multiple Fault Domains and Update Domains.

![](https://i.imgur.com/6LXoZsL.png){: .full}

When you create an Availability Set you can decide how many Fault Domains and Update domains you want. A group of servers physically grouped are called Fault Domain and a logical group of server is called as Update Domain.

## What is Availability Zones?

![](https://i.imgur.com/nUp33NS.png){: .full}

**Availability Zones** also has multiple Fault Domains and Update Domains. So in case Availability Zones, each Availability Zone is consider as a single Fault Domain and Update Domain.

![](https://i.imgur.com/HcY2l6z.png){: .full}

Availability Zone is a unique physical location within an Azure Region. Each Availability Zone has multiple data-centers with independent Power supply, Network switch and Cooling system. All Region has Availability Zone.

![](https://i.imgur.com/mCvNCTS.png){: .full}

Each Region has minimum 3 Availability Zones. At the Region level you can think of Availability Zone as 3 Fault Domains and 3 Update Domains.
![](https://i.imgur.com/M9JL273.png){: .full}

Suppose if you keep 3 VMs in 3 different Availability Zones. Then if 1st Availability Zone is down then your 1st VM will be not working. However, your business will not be affected since other 2 Availability Zones are still up and running. Azure will route your client request to next available Availability Zone.

## Azure Availability SLA

With Availability Zone Microsoft offers industries best SLA 99.99% up time.

| Single VM                                    | Availability Sets                                                            | Availability Zones                     | Region Pairs                       |
| -------------------------------------------- | :--------------------------------------------------------------------------- | :------------------------------------- | :--------------------------------- |
| 99.9% with Premium Storage only              | 99.95% up time( 4:50 down time)                                              | 99.99% up time (0:53 down time)        | -                                  |
| Single VM easier for lift and shift scenario | Protecting against hardware failures, network outages or power interruptions | Protecting against Data Center Failure | Protecting against region disaster |
| Single VM                                    | 2 or More VMs                                                                | 2 or more VMs                          | 2 or more VMs                      |
| ![](https://imgur.com/vKlJkWt.png)           | ![](https://imgur.com/YS2YNDx.png)                                           | ![](https://imgur.com/qPsYLLC.png)     | ![](https://imgur.com/bJlTzJr.png) |

## Reference

- https://www.youtube.com/watch?v=On3cjV4VaKU

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

{: .notice--info}
I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

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
