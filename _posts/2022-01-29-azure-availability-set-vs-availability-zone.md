---
title: Azure Availability Set Vs Availability Zone
date: 2022-01-29 00:00 +0000
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

> Did you know how can you protect your business against software or hardware disaster within Azure data-center? Did you also know how can you protect your services against data-center disasters? Azure guaranty to provide 99.99% SLA while using virtual machines within Availability Set and Zones. Read this article to understand the concept of Availability Set and Availability Zones. When you want to create VMs and manage them in Azure then you must know this concepts.

## Availability Set

An availability set is a logical grouping of 2 or more than 2 VMs that help keep your application available during planned or unplanned maintenance. You can not put only 1 VM in Availability Set. You must need 2 or more VMs. There is no cost for the Availability Set itself, you only pay for each VM instance that you create.
![](https://imgur.com/hnmcfGV.png)
Running a VM with one or more replicated copies on separate hardware within the same **Availability Set**, providing resiliency against machine failure.
![](https://imgur.com/Xgq1UgZ.png)

{: .notice--warning}
**Note:** No Infrastructure redundancy required means: If this machine fails then no other machine will serve user request.

**Creating 1st VM**
Lets create 1st VM and create new Availability Set.

Step 1: Create New Virtual Machine

![](https://imgur.com/yqGEUAC.png)

Step2: Select your Availability & Update domains.
![](https://imgur.com/3u1Qgbl.png)

**Create 2nd VM**
Create 2nd VM in the same Resource Group & same Availability Set.
![](https://i.imgur.com/E9TtkWY.png)

Both virtual machines under same Availability Set. The first VM is in Fault Domain-0 & Update Domain-0. The 2nd VM is in Fault Domain-1 & Update Domain-1

**How VMs are spread**
![](https://i.imgur.com/x1heVqQ.png)
Notice our 2 VMs are in 2 different Fault domains and 2 different Update domains. Which gives Hardware fault tolerance.

![](https://imgur.com/FmgxQu5.png)

So when Planned update is going on Update Domain 0 all the request to application will be navigated to the Update domain 1 this way you get 99.95% SLA.

How many update domains are assigned to an availability set?

Each **availability set** can be configured with up to three fault **domains** and twenty **update domains**. **Update domains** indicate groups of virtual machines and underlying physical hardware that can be rebooted at the same time.

**Key Points to remember**

- You need to create virtual machines in the same resource group as the availability set.
- One virtual machine can only be in one availability set.
- You can assign virtual machines to the availability set only during the creation of virtual machines.
- You should create Azure storage account per VM to get the diagnostic logs and Metrics per VM.

## What is Availability Zones?

![](https://i.imgur.com/nUp33NS.png)

**Availability Zones** also has multiple Fault Domains and Update Domains. So in case Availability Zones, each Availability Zone is consider as a single Fault Domain and Update Domain.

![](https://i.imgur.com/HcY2l6z.png)

Availability Zone is a unique physical location within an Azure Region. Each Availability Zone has multiple data-centers with independent Power supply, Network switch and Cooling system. All Region has Availability Zone.

![](https://i.imgur.com/mCvNCTS.png)

Each Region has minimum 3 Availability Zones. At the Region level you can think of Availability Zone as 3 Fault Domains and 3 Update Domains.
![](https://i.imgur.com/M9JL273.png)
Suppose if you keep 3 VMs in 3 different Availability Zones. Then if 1st Availability Zone is down then your 1st VM will be not working. However, your business will not be affected since other 2 Availability Zones are still up and running. Azure will route your client request to next available Availability Zone.

### Creating VMs in Availability Zone Steps

**Location plays major role for Availability Zone**

![](https://imgur.com/d0xEETa.png)
Availability Zones are available on selected region only.

![](https://i.imgur.com/yV0V4wv.png)

Like for South India you don't get any Availability Zone.

![](https://i.imgur.com/Afc28fF.png)

But for East USA you get Availability Zone.

![](https://i.imgur.com/P2QDFHy.png)

While creating 1st Virtual Machine You select Availability zone as 1. When you create 2nd VM then give 2 for availability zone.

![](https://i.imgur.com/ydfA67F.png)
Always click on create new IP in Networking tab.

![](https://i.imgur.com/eUDNYd2.png)

Make your IP address **Zone-redundant**

![](https://i.imgur.com/rwkuRg5.png)

For creating 2nd VM you must select same resource group, same region and give 2 as Availability Zone.

Availability Zone gives 99.99% SLA.

You get more than > 99.99% of SLA in below services:

- Azure Container
- Service Fabrics
- Azure Web Apps
- Azure Batch

## Azure Availability SLA

{: .notice--danger} \

🔔 **IMPORTANT**: The Availability set requires at least 2 running virtual machine instances to get the actual SLA.

If I create single VM you get 99.9% up time with premium storage.

If you create 2 machine with different Availability Set means they are in different Fault Domains then you get 99.95%. This provides resiliency against hardware failure within Data Center.

If you create 2 machine inside 2 different Availability Zones that is they are across different data centers inside different zones then you will get 99.99% up time. This protects from Data Center failure.

If you want to protect your Virtual Machines for disaster recovery across the region then place them in across different regions.

| Single VM                                    | Availability Sets                                                            | Availability Zones                     | Region Pairs                       |
| -------------------------------------------- | :--------------------------------------------------------------------------- | :------------------------------------- | :--------------------------------- |
| 99.9% with Premium Storage only              | 99.95% up time( 4:50 down time)                                              | 99.99% up time (0:53 down time)        | -                                  |
| Single VM easier for lift and shift scenario | Protecting against hardware failures, network outages or power interruptions | Protecting against Data Center Failure | Protecting against region disaster |
| Single VM                                    | 2 or More VMs                                                                | 2 or more VMs                          | 2 or more VMs                      |
| ![](https://imgur.com/vKlJkWt.png)           | ![](https://imgur.com/YS2YNDx.png)                                           | ![](https://imgur.com/qPsYLLC.png)     | ![](https://imgur.com/bJlTzJr.png) |

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
