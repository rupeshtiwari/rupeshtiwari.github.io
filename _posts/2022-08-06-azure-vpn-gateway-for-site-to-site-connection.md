---
title: Azure VPN Gateway for Site to Site Connection
date: 2022-08-06 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
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

> A virtual private network (VPN) is a type of private interconnected network. VPNs use an encrypted tunnel within another network. I will explain what is VPN Gateway and how to deploy in Azure.

## Azure VPN gateways

Virtual Network Gateway is of 2 types:

- VPN Gateway
- ExpressRoute

![](https://i.imgur.com/LXoNdle.png){: .full}

`ExpressRoute` is another gateway type which is most efficient and costly.If your organization uses Office 365. It wants to reduce traffic over the internet and send this traffic over a dedicated connection to Azure. Then ExpressRoute is the best choice. It's a service that provides a direct connection from your on-premises datacenter to the Microsoft cloud. One disadvantage is it has no encrypted network communication.

![](https://i.imgur.com/17uFd0u.png){: .full}

I will focus VPN gateway only in this article.

If you want to setup below connections then you need VPN Gateway:

- Connect on-premises data centers to Azure virtual networks through a _site-to-site_ connection.
- Connect individual devices to Azure virtual networks through a _point-to-site_ connection.
- Connect Azure virtual networks to other Azure virtual networks through a _network-to-network_ connection.

![](https://i.imgur.com/5ChrRwG.png){: .full}

{: .notice--success}
🏆 **Pro Tip** \
\
You can deploy only one VPN gateway in each virtual network, but you can use one gateway to connect to multiple locations.

## VPN Types

The main difference of these two types of `VPNs` is how traffic to be encrypted is specified.

![](https://i.imgur.com/9gsqcHn.png){: .full}

- policy-based
- route-based

## Policy-based `VPNs`

Policy-based VPN gateways specify statically the IP address of packets that should be encrypted through each tunnel.
![](https://i.imgur.com/veC2bks.png){: .full}

- Support for `IKEv1` only.
- Used for compatibility with legacy on-premises VPN devices.
- The source and destination of the tunneled networks are declared in the policy and don't need to be declared in routing tables.

## Rout Based VPN

With route-based gateways, `IPSec` tunnels are modeled as a network interface or VTI (virtual tunnel interface). IP routing (static routes or dynamic routing protocols) decide across which one of these tunnel interfaces to send each packet.

Both types of VPN gateways (route-based and policy-based) in Azure use pre-shared key as the only method of authentication. Both types also rely on Internet Key Exchange (IKE) in either version 1 or version 2 and Internet Protocol Security (`IPSec`). IKE is used to set up a security association (an agreement of the encryption) between two endpoints. This association is then passed to the `IPSec` suite, which encrypts and decrypts data packets encapsulated in the VPN tunnel.

## Components of VPN Gateway in Azure

You need below 6 resources to be created and configured in order to setup site-to-site connection with VPN Gateway:
![](https://i.imgur.com/40PIjPB.png){: .full}

- **VNet**: Only one VPN Gateway can be deployed in a Single VNet. While creating VNet give enough address space to accommodate future subnets.
- **GatewaySubnet**: You need a dedicated subnet for VPN Gateway. You have to call this as `GatewaySubnet`. You can not use this subnet for other service. Make sure you give `/27` address mask to make sure you have enough IP addresses for future growth. Also remember sometime you want to put 2 VPN Gateways in `Active/Standby` or `Active/Active` mode within this subnet in order for redundancy.
- **Virtual Network Gateway**: Create Virtual Network Gateway of `VPN` type. This will route the traffic from on-premise to Azure VNet and vice-versa.
- **Public IP address**: Create `Dynamic Public IP Address` resource. This address will only change if you delete and recreate the VPN. This IP will be internet facing and your on-premise VPN Device can point to this IP Address.
- **Local Network Gateway**: This is created to represent on-premise network's configurations. This configuration includes the on-premises VPN device's public `IPv4` address and the on-premises routable networks. This information is used by the VPN gateway to route packets that are destined for on-premises networks through the `IPSec` tunnel.
  ![](https://i.imgur.com/6oqv3B7.png){: .full}
- **Connection**: Create a `connection` resource. Connect VPN Gateway with on-premise VPN Device IPv4 address. Connect VPN Gateway with it's Public IP Address.

![](https://i.imgur.com/mV537mU.png){: .full}

## On-Premise resources

You need Physical VPN Device and a Public-Facing IPv4 address in your data center to connect to Azure resources.

## High Availability

Since all traffic has to go from VPN Gateway. You must think of what will happen in case of any issues. We have to work on fault tolerance.

You can use 2 VPN Gateways one in `Active/Standby` and other is in `Active/Active` mode.

### Active / Standby

On any planned maintenance or un-planned interruption affects active instance then within `90` seconds the standby gateway will become active `automatically` without any human involvement. This is excellent feature.

![](https://i.imgur.com/fYtUs8W.png){: .full}

### Active/ Active

In this mode you have to deploy `2 VPN gateways` with 2 `distinct IP Addresses`. Then on-premise will have `2 VPN devices` to connect with them. With this you see how much traffic can be distributed among these 2 gateways.

![](https://i.imgur.com/Uc42Bje.png){: .full}

## Site to Site VPN Gateway Deployment

Our goal is to create these 2 sites and connect them using vpn.

![](https://i.imgur.com/ygx7RHO.png){: .full}

### The first step is to create both sites in Azure.

Let's create HQ-Network and Azure-VNet1 sites in Azure.

#### Create Azure VNet

While create `VNet`, we also create a `services` subnet. You need `Address-Prefixes` and `Subnet-Prefixes`.

```powershell
az network vnet create \
    --resource-group learn-a6e8a4cb-44d7-4c35-b40c-9a61faff22e0 \
    --name Azure-VNet-1 \
    --address-prefixes 10.0.0.0/16 \
    --subnet-name Services \
    --subnet-prefixes 10.0.0.0/24
```

![](https://i.imgur.com/4umnnbA.png){: .full}

#### Create GatewaySubnet

We need Gateway subnet to be created and for that we need `address-prefixes`. `GatewaySubnet` will remain under `Azure-VNet1`.

```powershell
az network vnet subnet create \
    --resource-group learn-a6e8a4cb-44d7-4c35-b40c-9a61faff22e0 \
    --vnet-name Azure-VNet-1 \
    --address-prefixes 10.0.255.0/27 \
    --name GatewaySubnet
```

![](https://i.imgur.com/MeuR0jg.png){: .full}

#### Local Network Gateway representing Head Quarter VNet

The Local Network Gateway(LNG) is a specific object that represents your on-premises location (the site) for routing purposes. You give the site a name by which Azure can refer to it, then specify the IP address of the on-premises VPN device to which you will create a connection.

Local Network Gateway will point to gateway ip address which is the Public IP(PIP) Address of the Head Quarter Network. I will assign this ip address later once I create PIP of HQ-Network.

```powershell
az network local-gateway create \
    --resource-group learn-a6e8a4cb-44d7-4c35-b40c-9a61faff22e0 \
    --gateway-ip-address 94.0.252.160 \
    --name LNG-HQ-Network \
    --local-address-prefixes 172.16.0.0/16

```

![](https://i.imgur.com/YDeLkLE.png){: .full}

Similarly, you go ahead and create Site for Head Quarter Network also.

#### Verify Network Topology

![](https://i.imgur.com/huDWqOx.png){: .full}

### 2nd Step Create a site-to-site VPN gateway by using Azure CLI commands

We will create:

- VNet for gateway
- VPN gateways
- Public IP Address
- Create connection

![](https://i.imgur.com/lKamVzY.png){: .full}

Here is the [hands on lab link](https://docs.microsoft.com/en-us/learn/modules/connect-on-premises-network-with-vpn-gateway/3-exercise-prepare-azure-and-on-premises-vnets-using-azure-cli-commands)

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
