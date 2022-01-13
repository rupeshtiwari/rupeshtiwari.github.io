---
title: Server Deployment Strategies and Storage Spaces Direct Fault Tolerance in Azure
date: 2022-01-08 00:00 +0000
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

> Learn how Storage Spaces Direct provides you a Data fault tolerance at verity of levels. You don't loose data at any stage. You get Data resiliency out of the box in Azure.to

You can deploy servers in below types:

1. Node
2. Chassis for Blade Servers
3. Rack Server

## What is Planned Maintenance?

A planned maintenance event is when the underlying Azure fabric that hosts VMs is updated by Microsoft.

- Security Patch, Performance patch, add and update features are called as planed maintenance.
- After planned maintenance you must reboot your VMs.

## What is Unplanned Maintenance?

Unplanned maintenance events involve a hardware failure in the data center, such as:

- power outage
- disk failure

## What is Node?

![](https://imgur.com/qMarBwn.png)

Node is nothing but a server. It could be Server Virtual Machine. Or Database Virtual Machine.

## What is Rack?

![](https://imgur.com/c5LTPCp.png)

One Rack has servers, data disks and it's own Network Switch and Power Supply.

## Fault Tolerance in Azure

You can arrange your servers in all different types of deployment to manage fault tolerance at Drive, Node or Rack level.

{: notice--info}
Learn More about [Failover Clustering Fault Domains](https://docs.microsoft.com/en-us/windows-server/failover-clustering/fault-domains)

### Node Fault Tolerance

In Windows Server 2016 clustering allows multiple servers called nodes to work together for High availability is called as Node Tolerance.

### Chassis Fault Tolerance

Chassis is a hardware where you put servers.
![](https://imgur.com/tWLfhXN.png)
This is a Chassis, it has 4 servers they share common components like power supply and switch network. They are less expensive.

![](https://imgur.com/OFDJlEp.png)
If 3rd number Chassis common components fails then all nodes within the Chassis will go down.

`Windows Server 2016` Clustering has Chassis Fault Tolerance.

### Rack Fault Tolerance

![](https://imgur.com/uvETq93.png)

If network switch for one Rack is out of order then in this photo 2nd Rack is out of order then all of the servers (Nodes) are down within the Rack only. Rest Rack will be still working. This is called Rack Fault Tolerance.

## Storage Spaces Direct Fault Tolerance Support

Spaces are the set of disks to store data. Spaces provides Data resiliency by copying the data in several redundant drives.

### Data resiliency

![](https://imgur.com/duOKei3.png)
Spaces provides Data resiliency by keeping multiple copy of every thing in on different drives.

![](https://imgur.com/z0VoMVn.png)
So if one fails then all data is safe and accessible.

![](https://imgur.com/NqeOrRb.png)
The remaining copy will be used automatically as the failed drive to restore it. This feature is already in Windows 2010.

### Node Fault Tolerance

![](https://imgur.com/ZOjpD3B.png)
Spaces also stores every copy of data not only to different drive but also in different nodes.

![](https://imgur.com/uL7Wq3m.png)
So that if one node is out of order then other node will automatically start and working.

### Rack Fault Tolerance Storage

![](https://imgur.com/G3N7nGN.png)

Storage Space Direct can guaranty that it will place every copy not on every Drive, different Node but in different Rack. To provide data even at Rack level outage.

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
