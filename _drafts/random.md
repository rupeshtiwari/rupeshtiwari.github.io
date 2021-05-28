---
title: Configuring Azure Storage Account
description: Big picture of Azure storage
---

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

## VPN

Virtual Private Network (VPN). In Azure VPN is a type of Virtual Network Gateway.

## VIP

Virtual IP address. VIP is an IP address that doesn't correspond to an actual physical network interface.

## BGP

“Border Gateway Protocol (BGP)" is a standardized exterior gateway protocol designed to exchange routing and reachability information between autonomous systems (AS) on the Internet.

## IKE

Internet Key Exchange

## IPSec

Internet Protocol Security (IPSec)

## IPV

Internet Protocol Version (IPV). **IPv6** is more advanced and has better features compared to **IPv4**.

## LNG

The Local Network Gateway (LNG) typically refers to your on-premises location. [Learn...](httpss://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-create-site-to-site-rm-powershell)

## CIDR

Classless Inter-Domain Routing (CIDR).

## NFS

Network File System (NFS)

## SMB

Server Message Block (SMB)

![](https://imgur.com/eOrGZls.png){: .full}

## FQDN

fully qualified domain name

## DMS

Azure Database Migration Service

## UDR

User Defined Routing (UDR)

## NAT

Network Address Translation (NAT)

## NVA

network virtual appliances (NVAs)

## HA Ports

High Available Ports

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

## UDP

**User Datagram Protocol (UDP)** is a connection-less transportation protocol. UDP is used to pass the actual user data. Communication is datagram oriented, so the integrity is guaranteed only on the single datagram. Datagrams reach destination and can arrive out of order or don't arrive at all. It's generally used for real time communication, where a little percentage of packet loss rate is preferable to the overhead of a TCP connection.

## TCP

**Transmission Control Protocol (TCP)** TCP is a connection oriented transportation protocol. UDP is used to pass the actual user data.It guarantees that all sent packets will reach the destination in the correct order.

## OWIN

Open Web Interface for .NET (OWIN)


## RPO
recovery point objective (RPO) 

## ERT
and estimated recovery time (ERT)



## What is Docker Swarm Cluster?
A Docker Swarm is a group of either physical or virtual machines that are running the Docker application and that have been configured to join together in a cluster.












# In Azure Storage Account

# Feature

Feature is capability of a service. Like **Metrics Explorer** is a feature of **Azure Monitor** Service.

# Service

File, Blob, Queues, Azure Monitor

# Resource

Container  
Service  
Object

# Log Analytics Workspace

Log Analytics Workspace is actually a **Azure Data Lake**.

# VM Scale Set

![](httpss://imgur.com/uGhua33.png)

- VM scale set is an Azure service allows you to run
- It contains multiple VMs with the same image and contents.
- It has instances, which are the VMs.
- You can create more VMs by scaling it up from Azure Portal or Enable auto scale.

## Azure Infrastructure and Management

1. Azure Data Center
2. Azure Regions and Availability Zones
3. Azure Resource Group
4. Azure Resource Manager (ARM)
5. Infrastructure as Code Using ARM Templates
6. Azure Service Health & Azure Monitor
7. Azure Mobile App
8. Azure Advisory for optimizing your Azure resources.

## Azure Core Products

1. Virtual Machines
2. Containers
3. Azure App Service
4. Serverless Compute in Azure
5. Core Networking Products in Azure
6. Windows Virtual Desktop
7. Azure Content Delivery Network (CDN)

## Azure Data Storage

1. Managed Databases
2. Azure Cosmos DB
3. Azure Storage Accounts
4. Azure Blob Storage
5. Data Migration Options

## DevOps Solutions in Azure

1. Pipelines
2. Azure DevTest Labs

### Azure Service Health

![](https://imgur.com/Nc5EvmZ.png){: .align--left}

[Azure Status](https://status.azure.com/en-us/status) generates all global Azure service status. Azure Service Health broadly check 4 different kind of health categories like:
[Planned Maintenance](#planned-maintenance), [Health Advisories](#health-advisories), [Security Advisories](#security-advisories), [Service Issues](#service-issues). Azure Health also allows you to configure health alerts based on above categories events. You can also add action groups to either email or SMS or phone call on desired health events.

{: .notice--success}
🏆 **ProTip** \
\
Azure Service Health is: **Planned, Health & Security, Service**.

<div class="mermaid">
graph TD;
    A(Azure Service Health)-->P(Planned Maintenance);
    A-->H(Health Advisories);
    A-->S2(Security Advisories);
    A-->S(Service Issues);
</div>

#### Planned Maintenance

You can find planned maintenance in Azure and notify your clients of an up coming events or reschedule an up coming release.

#### Health Advisories

Changes in Azure Service that require your attention. For example, if features in a service that you use are being deprecated or you need to upgrade your web application because a framework version in Azure App Service is updated.

#### Security Advisories

Notifications or violations that may affect availability of your Azure services.

#### Service Issues

In the Azure portal Azure Service Health list down all the service issues that may impact you based on your resources in use.

### Azure Monitor

Azure Monitor is a solution within Azure for collecting and analyzing telemetry from your Azure or on-premises resources.

<div class="mermaid">
graph TD;
    A(Azure Monitor)-->M(Metrics);
    A-->L(Logs);
    A-->W(Workbooks);
    A-->I(Insights);
</div>

### Azure Mobile App

Azure Mobile App gives an easy and secure way to manage your Azure resources, even when you are out of the office and not near computer.

## Azure Fundamentals Certification (AZ 900)

**Azure Fundamentals** certification needs 6 part to be finished.

1. Part 1: Describe core Azure concepts
2. Part 2: Describe core Azure services
3. Part 3: Describe core solutions and management tools on Azure
4. Part 4: Describe general security and network security features
5. Part 5: Describe identity, governance, privacy, and compliance features
6. Part 6: Describe Azure cost management and service level agreements

![](https://imgur.com/ulz9JTX.png){: .full}

### Part 3: Describe core solutions and management tools on Azure

- Choose the best AI service for your needs
- Choose the best tools to help organizations build better solutions
- Choose the best monitoring service for visibility, insight, and outage mitigation
- Choose the best tools for managing and configuring your Azure environment
- Choose the best Azure serverless technology for your business scenario
- Choose the best Azure IoT service for your application

## Part 1: Describe core Azure concepts

You will learn below things:

- Understand the **benefits of cloud computing** in Azure and how it can save you time and money
- Explain **cloud concepts** such as high availability, scalability, elasticity, agility, and disaster recovery
- Describe **core Azure architecture components** such as subscriptions, management groups, resources and resource groups
- Summarize **geographic distribution concepts** such as Azure regions, region pairs, and availability zones

### 1. Introduction to Azure fundamentals

![](https://imgur.com/N5UL5ZV.png){: .full}

Upon completion of this module, you'll be able to:

- What is **cloud computing**
- What is **Azure**, how it works.
- How to get started with Azure's subscriptions and **accounts**.

I have below 3 articles on Introduction to Azure fundamentals:

- [What is Azure](https://www.rupeshtiwari.com/what-is-microsoft-azure/)
- [Azure Services](https://www.rupeshtiwari.com/tour-of-azure-services/)
- [Azure accounts](https://www.rupeshtiwari.com/getting-started-with-azure-accounts/)

### 2. Discuss Azure fundamental concepts

![](https://imgur.com/71griXY.png){: .full}

Upon completion of this module, you'll be able to:

- Identify the **benefits**(Pay as you use, Scalability, Geo-distribution) and considerations of using **cloud services**.
- Describe the differences between **categories**(IaaS,PaaS,SaaS) of **cloud services**.
- Describe the differences between **types**(Public,Private,Hybrid) of cloud computing.

I have below 1 article on [Discuss Azure fundamentals Concepts](https://www.rupeshtiwari.com/discuss-azure-fundamental-concepts/):

### 3. Describe core Azure architectural components

![](https://imgur.com/pPJkgAN.png){: .full}

After completing this module, you'll be able to describe the benefits and usage of:

- Azure subscriptions and management groups.
- Azure resources, resource groups, and Azure Resource Manager.
- Azure regions, region pairs, and availability zones.
