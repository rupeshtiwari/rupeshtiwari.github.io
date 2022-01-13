---
title: What is Subnet and Why Subnet is Required?
date: 2022-03-17 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/k9KdVXu.png
header:
  image: https://i.imgur.com/m0x9mIW.png
  teaser: https://i.imgur.com/k9KdVXu.png
  og_image: https://i.imgur.com/k9KdVXu.png
tags:
  - webdev
  - azure
  - tutorial
  - beginners
---

> When I was learning Azure Infrastructure, I had big question in my mind what is subnet and why do I need Subnet in my network? If you share my question then here is the article for you! Everything you must know about subnet as a beginner.

## What is Subnetting?

**Sub + Network** = **Subnet**.

You company has one Network that runs your company. You want to break the Network in to small pieces called as Sub Network which is Subnet.

![](https://i.imgur.com/kPADsyV.png){: .align-left}

You buy whole one pizza. However, you eat them in slices, so it is easier to you eat. So you divide you pizza into slices.

You have one whole network you divide them in smaller network. So that you can manage them easily and organize them better.

## Why do we need to Subnet a Network?

There are 3 main reasons, why you want to subnet a network:

1. Security 👮
2. Organization 🏛️
3. Performance 🏃

### 👮 Security

You have secure, high confidential data in network that you don't want them to be shared to anyone. It could be your top secrete company project. Your company employees personal records etc. Therefore, your network security is very important. And Subnetting to your network brings security to your Network.

### 🏛️ Organization

You can take each subnet and assign to different department of your company. For example, you distribute your subnet among IT department, HR department, Sales team etc.

### 🏃 Performance

Since Subnet is small therefore, it give better performance.

How do we connect multiple subnets to each other? Answer is via [router](#router).

## Router

![](https://imgur.com/EkPubq2.png){: .full}

A router is a network device that connects different networks together. Each network is signified by it's network id or area code. You can use router to connect your subnets as well.<mark> Each subnet want to communicate to other subnet must go through the Router. </mark>. Router acts as a gateway and it has default gateway number for each subnet. So each [host](#host) within the subnet must send packet to the default gateway in order to communicate to other subnet or the internet. 

You can enforce policies and rules to restrict some subnet to communicate to other subnet in Router. For example, suppose you want Infrastructure Team subnet to restrict to communicate to Human Resource subnet you can do in your Router. So Router is a Single point of administration.

![](https://i.imgur.com/lg2JEKe.png){: .full}

In this diagram, `Ken` & `Jim` can communicate to each other since they are in same subnet. `Ken`, `Jim` are also called as [host](#host). However, If `Ken` in left side subnet wants to send some data to `Ora` who is in right side subnet. Then Ken has to go through his default gateway which is the router. Router defines the default gateway for Ken and Jim is `192.0.2.1`. Similarly for `Ora`, the default gateway is `198.51.100.1`. So the packet will go from Ken to default Gateway then it will flow to the Ora device via her default gateway. Therefore, all communication across the subnet is happening via the router. Which is also connect to the Internet with the public facing IP address `203.0.113.42`.

Some time Router also has its own default gateway see below diagram.

![](https://i.imgur.com/kvpwGXO.png){: .full}

ISP (Internet Service Provider) or Data Center has big router with lots of cable.

### Host

Host is a device with specified IP address within the network. It could be your smart phone with IP (192.0.2.104). Or your family member's iPad or laptop with unique IP address.

## References

1. https://www.youtube.com/watch?v=-yz3FV8WliU
2. https://www.youtube.com/watch?v=JOomC1wFrbU

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
