---
title: Definitions that you should know
date: 2022-10-01 00:00 +0000
description: 'IMPORTANT: REMOVE LAYOUT: POST'
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

## ROI

Return on Investment

## ISV

independent software vendor

## SAN

SAN: [storage area network (SAN) ](httpss://docs.microsoft.com/en-US/azure/migrate/prepare-for-migration#configure-san-policy)
By default, Azure VMs are assigned drive D to use as temporary storage

- This drive assignment causes all other attached storage drive assignments to increment by one letter.
- For example, if your on-premises installation uses a data disk that is assigned to drive D for application installations, the assignment for this drive increments to drive E after you migrate the VM to Azure.
- To prevent this automatic assignment, and to ensure that Azure assigns the next free drive letter to its temporary volume, set the storage area network (SAN) policy to **OnlineAll**:

## ARR

**Application Request Routing (ARR)** is a feature where when a client (or browser) request to any Azure based website, a cookie will be created and stick to the first time request received web site instance.

## PIP

A virtual machine running in Azure can now be associated with a direct and publicly accessible IP address that sticks to the VM for its lifetime.

## NSG

A **network security group (NSG)** contains a list of security rules that allow or deny network traffic to resources connected to Azure Virtual Networks (VNet). NSGs can be associated to subnets or individual network interfaces (NIC) attached to VMs.

## NIC

A [Network Interface (NIC)](httpss://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface) enables an Azure Virtual Machine to communicate with internet, Azure, and on-premises resources. When creating a virtual machine using the Azure portal, the portal creates one network interface with default settings for you.

## RBAC

**Role-based access control (RBAC)** is a policy-neutral access-control mechanism defined around roles and privileges. The components of RBAC such as role-permissions, user-role and role-role relationships make it simple to perform user assignments.

## CMDB

Configuration Management Database

## Rack

A Rack has servers (Virtual Machines) in a data-center.

## SKU

Stock Keeping Unit (SKU) Learn more about [SKU types in Azure](httpss://docs.microsoft.com/en-us/rest/api/compute/resourceskus/list)

## HPC

[High performance Computing](https://docs.microsoft.com/en-us/azure/architecture/topics/high-performance-computing)

## BeeGFS

(formerly FhGFS) is a parallel file system, developed and optimized for [high-performance computing](https://en.wikipedia.org/wiki/BeeGFS).
![](https://en.wikipedia.org/wiki/File:Beegfs-architecture-overview.png){: .full}

## PBS

[Portable Batch System ](https://en.wikipedia.org/wiki/Portable_Batch_System) (or simply PBS) is the name of computer software that performs job scheduling.

## SPARK

[Apache Spark is a fast and general](https://rcc.uchicago.edu/docs/software/environments/spark/index.html) engine for large-scale data processing. It has a Scala, Java, and Python API and can be run either on either a single node or multi-node configuration. For both cases, it is recommended to have exclusive access of the node in Slurm.

## SLURM

Simple Linux Utility for Resource Management ([SLURM](https://en.wikipedia.org/wiki/Slurm_Workload_Manager)) is a free and open-source job scheduler for Linux and Unix-like kernels, used by many of the world's supercomputers and computer clusters.

In order to run an application using a spark context it is first necessary to run a Slurm job which starts a master and some workers.

## VPN

Virtual Private Network (VPN). In Azure VPN is a type of Virtual Network Gateway.

## ER

[ExpressRoute](https://docs.microsoft.com/en-au/azure/expressroute/expressroute-introduction) (ER) lets you extend your on-premises network into the Microsoft cloud over a private connection with the help of connectivity provider.
![](https://docs.microsoft.com/en-au/azure/expressroute/media/expressroute-introduction/expressroute-connection-overview.png){: .full}

## DMZ

A demilitarized zone (DMZ) is a perimeter network that protects an organization’s internal local-area network (LAN) from untrusted traffic.

## VIP

Virtual IP address aka front-end. VIP is an IP address that doesn't correspond to an actual physical network interface.

## DIP

A dynamic IP (DIP) pool is a range of IP addresses.

## BGP

“Border Gateway Protocol (BGP)" is a standardized exterior gateway protocol designed to exchange routing and reachability information between autonomous systems (AS) on the Internet.

![](https://i.imgur.com/r7EG6nf.png){: .full}

## LSN

Local Site Network (LSN)

## IKE

Internet Key Exchange

## IPSec

Internet Protocol Security (IPSec)

## IPV

Internet Protocol Version (IPV). **IPv6** is more advanced and has better features compared to **IPv4**.

## OSI Layers

Open System Interconnection (OSI)

- **Software Layer**
  - Application Layer
  - Presentation Layer
  - Session Layer
- **Heart of OSI**
  - Transport Layer
- **Hardware Layer**
  - Network Layer
  - Data Link Layer
  - Physical Layer

Note: **All People Seems To Need Data Processing**.

## LNG

The Local Network Gateway (LNG) typically refers to your on-premises location. [Learn...](httpss://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-create-site-to-site-rm-powershell)

## CIDR

Classless Inter-Domain Routing (CIDR). It is an IP address assigning method that improves the efficiency of address distribution. It is also known as supernetting that replaces the older system based on classes A, B, and C networks. By using a single CIDR IP address many unique IP addresses can be designated.

## NFS

Network File System (NFS)

## VMFS

Virtual Machine File System (VMFS)

## SMB

Server Message Block (SMB)

![](https://imgur.com/eOrGZls.png){: .full}

## SFTP

Secure File Transfer Protocol

## FQDN

Fully Qualified Domain Name (FQDN)

## DMS

Azure Database Migration Service

## CSR

Certificate Signing Request

## CA

Certificate Authority (CA) like Entrust, Thwate, Verisign

## DNS

Domain Name System (DNS) is the [phonebook of the Internet](https://www.cloudflare.com/learning/dns/what-is-dns/).

## UDR

User Defined Routing (UDR)

## NAT

Network Address Translation (NAT)

## SSH

Secure Shell (SSH) protocol used to communicate machines. It encrypts the data while sending data to other machine. It works on applciation layer (layer-7) of OSI model.

## Telnet

Teletype Network (Telnet) developed in 1969. Plain text communication between machines. Good for LAN since data in not encrypted. Not good for sensitive data. It works on applciation layer (layer-7) of OSI model.

## SNAT

Source Network Address Translation (SNAT) allows traffic from a private network to go out to the internet. Virtual machines launched on a private network can get to the internet by going through a gateway capable of performing SNAT. The device performing NAT changes the private IP address of the source host to public IP address.

![](https://i.imgur.com/OnazkyD.png){: .full}

## DNAT

Destination Network Address Translation (DNAT) : Destination NAT changes the destination address in the IP header of a packet.

## NVA

Network Virtual Appliances (NVAs): [An NVA(Network Virtual Appliance)](https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/dmz/nva-ha?tabs=cli) is typically used to control the flow of network traffic from a perimeter network, also known as a DMZ, to other networks or subnets.

## ILB

Internal Load Balancer(ILB) is a security enhancement over the current public load balancing that is offered in Azure.

## HA Ports

High Available Ports: [High availability (HA) ports](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-ha-ports-overview) is a type of load balancing rule that provides an easy way to load-balance all flows that arrive on all ports of an internal Standard Load Balancer.

## NAS

Network Attached Storage (NAS)

## RAID

Redundant Array of Inexpensive/independent Disks(RAID). [It was created in 1988 as a means](https://www.imore.com/whats-raid-array-and-why-should-i-get-one) to combat the rising cost of disk drives. You'll often hear RAID as it relates to network attached storage or "NAS". You know in movies when you see the "mainframe" and it's rows and rows of hard drives backing up all of the evil corporation's information? That's NAS, and that's RAID in action. [RAID Wikipedia](https://en.wikipedia.org/wiki/RAID)

## WAF

web application firewall (WAF)

## FQDNs

fully qualified domain names (FQDNs)

## DNAT

Destination Network Address Translation (DNAT)

## DDoS

Distributed denial of service (DDoS) [Learn More](https://docs.microsoft.com/en-us/azure/ddos-protection/ddos-protection-overview)

## Workgroups

A workgroup is a collection of computers that each maintain their own security information. Here the security is distributed, not centralized.

## Domains

A domain is a collection of computers where security is handled centrally.Each domain has one or more domain controllers.

## ICMP

**Internet Control Message Protocol (ICMP)** is a control protocol, meaning that it designed to not carry application data, but rather information about the status of the network itself. The best known example of ICMP in practice is the ping utility, that uses ICMP to probe remote hosts for responsiveness and overall round-trip time of the probe messages.

## URL

Universal Resource Locator (URL)

## UDP

**User Datagram Protocol (UDP)** is a connection-less transportation protocol. UDP is used to pass the actual user data. Communication is datagram oriented, so the integrity is guaranteed only on the single datagram. Datagrams reach destination and can arrive out of order or don't arrive at all. It's generally used for real time communication, where a little percentage of packet loss rate is preferable to the overhead of a TCP connection. It is an Transport layer (layer-4) protocol.

## TCP

**Transmission Control Protocol (TCP)** TCP is a connection oriented transportation protocol. TCP is used to pass the actual user data. It guarantees that all sent packets will reach the destination in the correct order.

## SSL

Secure Sockets Layer (SSL) now it is deprecated. It is session layer protocol. It is presentation and session layer protocol. It lies between Transport and application layer.

![](https://i.imgur.com/hlsEVeJ.png){: .full}

## TLS

Transport Layer Security (TLS) provides communications security over a computer network. It is presentation and session layer protocol. It lies between Transport and application layer.

![](https://i.imgur.com/hlsEVeJ.png){: .full}

## TDS

The Tabular Data Stream (TDS) Protocol is an application-level protocol used for the transfer of requests and responses between clients and database server systems. a TDS session is established when the transport-level connection is established and the server receives a request to establish a TDS connection. It persists until the transport-level connection is terminated (for example, when a TCP socket is closed).

![](https://i.imgur.com/56mVctV.png){: .full}

## OLTP

OLTP (Online Transactional Processing)

## SMTP

Simple Mail Transfer Protocol (SMTP) to send emails.

## DDL

Data Definition Language (DDL)

## K-ISMS

Korea-Information Security Management System (K-ISMS)

## B2C

Business-To-Consumer (B2C)

## ISV

Independent Software Vendor (ISV) - also known as a software publisher, is an organization specializing in making and selling software, as opposed to computer hardware, designed for mass or niche markets.

## LOB

line-of-business (LOB) - used only for your company or your employees.

## ITSM

IT Service Management (ITSM) Few ITSM tools are ServiceNow, System Center Service Manager, Provance, Cherwell. You can use [IT Service Management Connector](https://docs.microsoft.com/en-us/azure/azure-monitor/alerts/itsmc-overview) in Azure to connect your own ITSM tools.

## SIEM

Security Incident and Event Monitoring (SIEM) - Microsoft Azure Sentinel is a scalable, cloud-native, security information event management (SIEM) and security orchestration automated response (SOAR) solution.

## VNet

Virtual Network: This is Private network on Azure Cloud.

## VPC

Virtual Private Cloud (VPC) this is similar to VNet in Azure.

## EC2

Elastic Compute Cloud (EC2) Instance: This is a Virtual Machine on Amazon.

## UPN

user principal name (UPN)

## SPN

security principal name (SPN)

## MSAL

Microsoft Authentication Library (MSAL)

## ADAL

Active Directory Authentication Library (ADAL)

Active Directory Authentication Library (ADAL) integrates with the Azure AD for developers (v1.0) endpoint, where MSAL integrates with the Microsoft identity platform. [Learn More...](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-overview#differences-between-adal-and-msal)

## OIDC

OpenID Connect (OIDC) - authentication and authorization protocol

## MSRP

[Managed Identity Resource Provider (MSRP)](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/how-managed-identities-work-vm#how-it-works)

## ATP

Azure Advanced Threat Protection ( ATP ) - Now it is known as "Microsoft Defender for Identity"

## SSPR

Self-Service Password Reset

##

## DHCP

Dynamic Host Configuration Protocol (DHCP) : related to IP Addressing.

DHCP helps ensure that devices ultimately correctly configured to join networks. DHCP does this by assigning IP addresses and other information to each host (or device) connecting to a network.

## Delta Query

Delta query enables applications to discover newly created, updated, or deleted entities without performing a full read of the target resource with every request.

## Workbook Playbook Notebook Runbook

- **Workbook** : Visualize data by Kusto query. Azure Workbooks is a great tool for operations and `DevOps` teams because they can combine metrics and queries.
- **Playbook**: Playbooks are collections of procedures that can be run from Azure Sentinel in response to an alert or incident.
- **Notebook**: Azure Notebooks is an implementation of the widely used open-source `Jupyter Notebook`.
- **Runbooks**: are used to create automation in Azure. Like in the evening shut down all of the DEV Virtual machines.

## Front Door vs Traffic Manager

| FrontDoor                                                | Traffic Manager                                                                                  |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Http and Https protocol                                  | Used for File and Image                                                                          |
| Used for multi region **app**, agnostic of PIP public IP | Used for sharing and accessing multi-region deployed Files and Images, agnostic of PIP public IP |

## How many VNets allowed in Azure?

500 VNets, You can only have one VPN Gateway with 1 VNet.
