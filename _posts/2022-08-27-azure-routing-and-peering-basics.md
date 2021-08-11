---
title: Azure Routing and Peering Basics
date: 2022-08-27 00:00 +0000
description:
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

> Azure architects must aware of fundamentals of routing and peering. In this article we will see fundamentals as well as we will see some examples of routing and peering of networks in Azure.

Well before directly jumping in peering you must have your routing components fundamental cleared. Lets talk the very basic thing first Subnet then we will tackle routing and peering.

## What is Subnet in Azure?

We know VNet gives isolation or a private network boundary in Azure for the resources within your VNet. Similarly within the VNet if you want further boundary among resources then you can create subnets and put required resources within subnets.

![](https://i.imgur.com/9eTyLgw.png){: .full}

A subnet is **a range of IP addresses in the VNet.** You can divide a VNet into multiple subnets for organization and security. You can create subnets to create a logical boundary within VNet. You can think of creating subnets for Web Tier, Business Tier, Data Tier services and VMs.

By default resources among subnets can communicate without any extra configuration for a given VNet. If you want to restrict some traffic to a specific subnet within VNet then you can add NSG.

## How VMs in subnet communicate with other Subnet VMs?

Each NIC in a VM is connected to one subnet in one VNet. `NICs` connected to subnets (same or different) within a VNet can communicate with each other without any extra configuration.

## System Routes in Subnet

System routes are created by Azure when you create subnet. You can not create, modify or delete system routes. You can only overwrite them by creating [custom routes](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview#custom-routes) (BGP policy routes or User defined routes).

Every subnet has a route table that contains the following minimum routes:

| Route         | Description                                                                               |
| ------------- | ----------------------------------------------------------------------------------------- |
| `LocalVNet`   | Route for local addresses (no next-hop value)                                             |
| `On-Premises` | Route for defined on-premises address space (VNet gateway is next hop address)            |
| `Internet`    | Route for all traffic destined to the Internet (Internet Gateway is the next-hop address) |

![](https://i.imgur.com/Z9At7eO.png){: .full}

### LocalVNet

- If address is within the VNet address prefix – route to `localVNet`

  ![](https://i.imgur.com/X6i92nm.png){: .full}

### On-Premises

- If the address is within the on-premises address prefixes or BGP published routes (BGP or Local Site Network (LSN) for S2S) – route to gateway
- If destination is an Azure datacenter address and ER (ExpressRoute) public peering is enabled – it is routed to the gateway.

  ![](https://i.imgur.com/jkHzFHW.png){: .full}

### Internet

- If the address is not part of the VNet or the BGP or LSN (Local Site Network) routes – route to internet via NAT
  If the destination is an Azure datacenter with S2S or an ER without public peering enabled, it is routed to the Host NAT for internet path, but it never leaves the datacenter.

  ![](https://i.imgur.com/AKIZDSc.png){: .full}

## User Defined Route ( UDR )

You can create custom, or user-defined(static), routes in Azure to override Azure's default system routes, or to add additional routes to a subnet's route table.

Each route contains an address prefix and next hop type. When traffic leaving a subnet is sent to an IP address within the address prefix of a route, the route that contains the prefix is the route Azure uses.

![](https://i.imgur.com/r0SvwBG.png){: .full}

Whenever a virtual network is created, Azure automatically creates the following default system routes for each subnet within the virtual network:

| Source  | Address prefixes              | Next hop type   |
| ------- | ----------------------------- | --------------- |
| Default | Unique to the virtual network | Virtual network |
| Default | 0.0.0.0/0                     | Internet        |
| Default | 10.0.0.0/8                    | None            |
| Default | 192.168.0.0/16                | None            |
| Default | 100.64.0.0/10                 | None            |

Possible Next hop from subnets are:

- Virtual Network
- Internet
- None : Traffic routed to the None next hop type is dropped, rather than routed outside the subnet.

## VNet Peering

Virtual network peering enables you to seamlessly connect two or more Virtual Networks in Azure.
Azure supports the following types of peering:

- **Virtual network peering**: Connect virtual networks within the same Azure region.
- **Global virtual network peering**: Connecting virtual networks across Azure regions.

**Below is the example for [Gateways and on-premises connectivity](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview#gateways-and-on-premises-connectivity)**

![](https://i.imgur.com/Aru17rt.png){: .full}

## NIC

A [Network Interface (NIC)](httpss://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface) enables an Azure Virtual Machine to communicate with internet, Azure, and on-premises resources. When creating a virtual machine using the Azure portal, the portal creates one network interface with default settings for you.
