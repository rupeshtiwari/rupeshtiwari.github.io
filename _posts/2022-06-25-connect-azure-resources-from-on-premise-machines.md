---
title: Connect Azure Resources from  On-Premise Machines
date: 2022-06-25 00:00 +0000
description: How to connect Azure resources from on-premise machines
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

> You want to connect your Azure resources from your on-premise office machine or home laptop right? So how would you do that? Read this article. In order to connect machine/servers residing over your on-premise office from home you need internet. You know anything over internet is not secure. So how would you secure your connection?

## How can I connect machine or server residing in my on-premise office?

Well you need internet and route your connection to you office machine. For that you have to expose your office server or machine IP addresses over internet so that you can connect them. However, this will put your official data at risk. Now anyone over internet can connect your machine and stole data. Or hacker can trap your communication over internet and hack your data or machine.

![](https://i.imgur.com/QS10v0g.png){: .full}

## How would I secure my data while connecting to on-premise Office servers?

**VPN** is the secure way to connect to other machines over internet. If you want to connect machine which is in your office building from your home. You need internet and the data that you will transfer from your office to your home is exposed to internet. Any malicious user can access/read/manipulate that data. In order to secure your traffic data over internet. You must need `VPN` connection. `VPN` creates a encrypted tunnel from your home laptop to the office machine. All data is isolated/encrypted using `different IPSec tunnels` created by VPN. Now your data over internet is secure in-transit.

![](https://i.imgur.com/wf42pox.png){: .full}

## How do I connect Azure Resources from my Home PC or office PC?

If you have on-premise office or home laptop to connect Azure VNet. You need `VPN` setup with physical device in on-premise location. And you need `VPN Gateway` on Azure `VNet`. A `VPN Gateway` is used when creating a VPN connection from your on-premises network.

![](https://i.imgur.com/NMq78SM.png){: .full}

If you want to put your azure resources in private network over cloud. You must create `VNet` and assign all resource to that VNet in a same region. All resources within VNet must be in one region. So you must create VNet in Azure cloud.

![](https://docs.microsoft.com/en-us/azure/vpn-gateway/media/design/point-to-site.png){: .full}

If you have your own on-premise office or home laptop to connect to your Azure resources. Which is in VNet you must use VPN technology to connect to your Azure resources inside VNet.
You could use other options like Express Route circuit which is costly and fast option. In this article I will discuss VPN option. VPN uses internet to flow your data. However Express Route uses dedicated connection that doesn't uses internet.

## What do I need in Azure Cloud to allow VPN connection?

In order to configure and allow connection of on-premise VPN to VNet in Azure ( also called as site to site or point to site ). In Azure cloud you must create `Virtual Network Gateway` or `VPN Gateway`. This VPN Gateway allows VPN traffic to flow in your Azure VNet.

In order to create Azure `Virtual Network Gateway`, you have to first create `GatewaySubnet`. Because VPN Gateway needs dedicated subnet.

![](https://i.imgur.com/SHuiEd0.png){: .full}

{: .notice--success}
🏆 **ProTip** \
\
Only one `VPN Gateway` is allowed in `Azure Virtual Network (VNet)`

## How do I secure my Azure resources within VNet?

Now in order to restrict which traffic can flow to your Azure VNet resources. You must configure `Azure Firewall` or `Network Security Group`. To restrict outside IP address traffic in VNet you must configure `Azure Firewall`.

If you want to restrict traffic within VNet then you must configure `Network Security Group` in subnet. Suppose within your VNet you created 2 Subnet. One subnet called as `subnet-web` for Web Apps. Which are exposed to public IP address. So that people can access your app. Then in this subnet you need different rule.

![](https://i.imgur.com/hjLbP0i.png){: .full}

You created another `subnet-business` where you deploy resources containing your business rules.

You created another `subnet-data` where you deploy resources containing your databases.

Now you want to restrict that any resources in `subnet-web` can not communicate directly to `subnet-data` resources. You need to create `Network Security Group (NSG)` in order to achieve this security.

However, you want to restrict both `subnet-data` and `subnet-business` resources from outside world even from VPN clients. You have to setup `Azure Firewall` which works at VNet level. There you can create rule that outside traffic can not directly go to `subnet-data` or `subnet-business`.

## References

- [Connect an on-premise network to Azure](https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/)
- https://docs.microsoft.com/en-us/azure/vpn-gateway/tutorial-site-to-site-portal
- https://docs.microsoft.com/en-us/azure/vpn-gateway/design

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)
