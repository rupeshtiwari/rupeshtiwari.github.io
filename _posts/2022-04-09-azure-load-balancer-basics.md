---
title: Azure Load Balancer Basics
date: 2022-04-09 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/jOGk4Bn.png
header:
  image: https://i.imgur.com/HNnREUJ.png
  teaser: https://i.imgur.com/jOGk4Bn.png
  og_image: https://i.imgur.com/jOGk4Bn.png
tags:
  - webdev
  - tutorial
  - beginners
  - azure
---

> Azure Load Balancer evenly distributes incoming network traffic load among backend resources or servers. It works at layer 4 (Transport Layer) of OSI (Open Systems Interconnection) Model. Inbound load flows from frontend to backend instances of load balancer.

![](https://imgur.com/LgrTV0m.png){: .full}

## Load Balancer Types

There are Basic and Standard Azure Load Balancers.

## Scope of Load Balancers

Public Load Balancer and Private Load Balancer.

## Load Balancer Components

- Frontend IP configuration - Public and Private IP Address.
- Backend Pool
- Health Probes
- Load-Balancing Rules
- High Availability Ports
- Inbound NAT rules
- Outbound Rules

### Frontend IP Configuration

It is the IP address for Load Balancer where clients can connect.

![](https://imgur.com/hHZDVTs.png){: .full}

There are 2 types:

- **Public IP Address** is public IP & Port for incoming traffic from the internet.
- **Private IP Address** is the IP and Port never exposed to the internet & only exposed to the VMs internal to the VNet (Virtual Network)

### Backend Pool

Backend pool is all of the groups of VMs or VM scale set inside the VNet serving the incoming request.

### Health Probes

Health Probes explains the health status of the instances in the given backend pool. It supports TCP, HTTP and HTTPs. Basic Load Balancer can't support HTTPS probes and only support TCP health probes.

### Load Balancing Rules

Load Balancing rules define the rule for a port to route the traffic from frontend IP to port of your backend instances of VNet.

![](https://imgur.com/pFUEwjM.png){: .full}

For example, you can create a rule to route all traffic from frontend IP port 80 to route to backend pool instances port 80.

### High Available Ports

This is only available for Standard load balancer to manage large number of request and having large set of VMs. Here you define a rule `protocol -all and port -0`.

![](https://imgur.com/mBhdukf.png){: .full}

This single rule to load balance all TCP & UDP flows that arrives to all ports of an internal standard load balancer.

### Inbound NAT rules

![](https://imgur.com/FTVE47y.png){: .full}

This is a rule to forward any incoming traffic sent to frontend IP address and port combination to a specific backend pool instances or VMs within a VNet.

### Outbound rules

![](https://imgur.com/iEgMAz8.png){: .full}

It configures outbound Network Address Mapping for all VMs or instances in a backend pool within a VNet.

## Limitations

In order to understand any concept concretely you must know its limitations.

Below are the limitations of Azure Load Balancers:

- Forwarding rules are only for TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) no support for ICMP (Internet Control Message Protocol).
- Outbound flow from a backend VM to a frontend IP of internal load balancer will fail.
- You can only have 1 public and internal load balancer for single Availability Set.
- Both frontends and backend's instances must be within the same Virtual Network (VNet). Since, load balancer rules can't span across 3 VNets.

  ![](https://imgur.com/aTyuJ9D.png){: .full}

  You can use Standard Load Balancer to be zonal redundant for high availability however they must be within single VNet.

## Knowledge Check 👨‍🏫

How many Virtual Networks can a load balancer connect? \
**Correct Answer:** only 1

At which OSI Layer does an Azure load balancer operate? \
**Correct Answer:** Layer 4 (Transport Layer) of OSI (Open Systems Interconnection) Model.

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
