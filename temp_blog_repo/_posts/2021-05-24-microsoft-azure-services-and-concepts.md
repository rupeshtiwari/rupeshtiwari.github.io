---
title: Microsoft Azure Services and Concepts
date: 2021-05-24 00:00 +0000
description: Learn everything you should know about Azure Services and concepts as a beginner
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/t9bDcJf.png
header:
  image: https://i.imgur.com/XMFI6bl.png
  teaser: https://i.imgur.com/t9bDcJf.png
  og_image: https://i.imgur.com/t9bDcJf.png
tags:
  - webdev
  - azure
  - tutorial
  - az900
---

> Learn everything you should know about Azure Services and their concepts as a beginner.

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
