---
title: Difference between NAT vs Firewall for Software Developers
date: 2022-08-13 00:00 +0000
description: What is NAT, SNAT, DNAT etc. Why do we need them? What is the role of firewall in a Network and how firewall works with NAT, DNAT? Are you also seeking answers for these type of questions like I did? Read the article to get your answers!
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/qxXxmBa.png
header:
  image: https://i.imgur.com/zipiW93.png
  teaser: https://i.imgur.com/qxXxmBa.png
  og_image: https://i.imgur.com/qxXxmBa.png
tags:
  - webdev
  - tutorial
  - beginners
  - azure
---

> What is NAT, SNAT, DNAT etc. Why do we need them? What is the role of firewall in a Network and how firewall works with NAT, DNAT? Are you also seeking answers for these type of questions like I did? Read the article to get your answers!

While learning Azure the main hurdle is the terms that are used in Azure Concepts. Even though you have given the Azure Fundamental Exam you will find many terms that you are not aware of. And that is the big hurdle in learning Azure Cloud Concepts. Therefore, I would advise you must first concrete all these terms before or while you learn Azure.

If you are software developer and want to become cloud architect. Then you must aware of networking terminologies. I am not expert on networking as well. However, I am trying to explain whatever I understood about these concepts. Feel free to correct me and write your comments in the comment box.

## Local Network Devices Communication

If you want to connect to some device over the internet then you need a unique IP address assigned to your device as well as the device that you want to connect. In this world there are so many devices that it is almost impossible to put all devices on the internet with their unique IP addresses. It could be rupeshtiwari.com. You will use DNS to resolve the IP Address for your domain name.

Therefore, in your company or your home when you take internet connection mostly you will be given one IP address (200.0.0.1) that is internet facing. However, you may have 10 laptops, 10 mobiles, and 5 desktops and they can have have unique internal IP addresses which are unique within your local network.

So then question arrises how can a person having mobile phone with local unique IP Address (192.168.0.1) can browse google.com? Also how google will respond to your local IP Address? Since your local IP Address is not internet facing.

![](https://i.imgur.com/RVr1NVk.png){: .full}

In order to solve this problem you need a device that will translate the IP address of the mobile device (192.168.0.1) to the internet facing IP address (200.0.0.1) while you browse Google.com. Similarly when google will respond back then you again need to translate the IP address of the respond data to the local IP Address of your mobile phone (192.168.0.1). This is the solution. This way the devices within local network can easily communicate to the outer world. This is exactly **NAT** does.

## Basics of NAT

NAT stands for Network Address Translation. In networking world there is NAT Device which is responsible for changing the IP address. It can either change destination or source address depending on how data has to flow.

![](https://i.imgur.com/sRmvRJ0.png){: .full}

In above example, we are using NAT to convert all traffic going towards internet or coming from internet. In above example NAT Device is changing change IP address to 200.0.0.1 for the data coming from local network. Similallary, NAT is used to convert all inbound traffic ( from internet to your local network ) to convert destination address to your local network's common IP address which is 192.168.0.1 in above example.

## What is the role of Firewall

When your device within your local network (company) wants to open a site that could be malicious for your company. How can you control that? Similarly from the outside world (internet) someone wants to connect to your company device and steal data or important private information. How would you control them?

![](https://i.imgur.com/pl8yP8t.png){: .full}

You can create a whitelist where you allow a few IP addresses to communicate with your local network. Similarly for outbound traffic you can create black list of websites that you are not allowed to visit. All of this work is done by FIREWALL. In your network you can install a single firewall that can guard all devices, subnets within your network.

Think firewall as a security checkup for all traffic going out and into your local network.

## NAT and Firewall

As of now you understand that NAT has a separate role and Firewall has separate. They can not substitute each other. However, you need both of them if you want to communicate between 2 networks or the internet from a local network.

![](https://i.imgur.com/xSAkv7j.png){: .full}

Therefore, in the diagram below I drew Firewall and NAT together to give you a hint that at the door of your network you must put firewall and NAT together to manage outbound and inbound traffic.

## SNAT

![](https://i.imgur.com/yUcQaSv.png){: .full}

Source Network Address Translation (SNAT) allows traffic from a private network to go out to the internet. Virtual machines launched on a private network can get to the internet by going through a gateway capable of performing SNAT. The device performing NAT changes the private IP address of the source host to public IP address.

![](https://i.imgur.com/DHXK4EI.png){: .full}

An employee sitting inside your company LAN and behind the firewall wants to browse google.com that time first routing decision will trigger once it is allowed to route to the internet then SNAT process will kick off.

![](https://i.imgur.com/4KHKRui.png){: .full}

During **SNAT** process only source address of the data packet is changed while passing through the **NAT Device**. SNAT can be done for the traffic going outside from your local network. SNAT is possible from many hosts within your local network to many hosts outside network.

## DNAT

Destination Network Address Translation (DNAT) changes the destination address in the IP header of a packet coming towards your local network from the internet. DNAT is used when we need to redirect incoming packets with a destination of a public address/port to a private IP address/port inside your network.

![](https://i.imgur.com/ONg85Fu.png){: .full}

Your company’s website is hosted inside your local Data Center or in the Azure cloud behind the Firewall and needs to be accessible to users over the Internet. In this citation you will use **DNAT**.

DNAT changes the _destination_ address of packets passing through the Router. Therefore, before routing, the off destination address of data is changed to the local network IP Device Address.

![](https://i.imgur.com/YcAOpQ6.png){: .full}

DNAT can be done for the traffic coming from outside your local network. DNAT is possible from many hosts from outside network to only host within your local network.

## DNS

The Domain Name System (DNS) is the phonebook of the Internet. Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).

## Reference

https://ipwithease.com/snat-vs-dnat/

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/5fBatz9.png)
