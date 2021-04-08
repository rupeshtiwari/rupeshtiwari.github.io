---
title: Implement Azure cloud infrastructure monitoring AZ-303
date: 2021-07-24 00:00 +0000
description: Microsoft Azure Solutions Architect - Implement a Cloud Infrastructure Monitoring Strategy
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/nbHefDR.png
header:
  image: https://i.imgur.com/vDLu5gY.png
  teaser: https://i.imgur.com/nbHefDR.png
  og_image: https://i.imgur.com/nbHefDR.png
tags:
  - azure
  - certification
  - architect
  - tutorial
---

> Are you preparing for the Microsoft exam **AZ-303**? ​This article will teach you t​he cloud **monitoring skills** needed for this exam.

## Introduction

**Implement and Monitor an Azure Infrastructure** is 50-55% in Az-303. Under **Implement cloud infrastructure monitoring** we have below topics to cover:

- monitor security
- monitor performance
- monitor health and availability
- monitor cost
- configure advanced logging
- configure logging for workloads Initiate automated responses by using Action Groups
- configure and manage advanced alerts

## Configure logging for workloads

We will use **Azure Platform Logs** to get the detail logs of the Azure resources.

### Azure Platform Logs

Provides detailed **diagnostics** and **auditing** information for Azure resources and the Azure platform they depend on.

### Types of Platform Logs

Azure platform logs are of 2 types:

1. **Activity Logs**: Who did what and when can be seen here. Example who deleted Azure blob container or Azure Key Vault etc. You can check all of the write operations here.
2. **Resource Logs**: **Created for each individual resource**. You can get logs like who was trying to fetch secretes from **Azure vault Instance**?

### Destinations of Logs

Use the **Diagnostic settings** to configure Azure Resources to write platform logs to different destinations. ![](https://imgur.com/31ZUgS4.png) ![](https://imgur.com/Bsl9lSA.png)
Logs can send to below places:
![](https://imgur.com/zVHJ9NF.png)

1. **Log Analytics Workspace**: Analyze logs using [**Kusto queries**](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/tutorial?pivots=azuredataexplorer) in Azure Data Explorer. Leverage **Alerts** and **Visualizations**.
2. **Archive to Storage Account**: Cheaper option so you can keep your log for long time.
3. **Stream to an event hub**: To stream logs to external systems. Example: security information & event management software.

### Destination Requirements

1. In order to log at **Analytics Workspace** make sure you put both workspace and resource instance at the **same region**. This gives performance also.
2. For streaming to **Event Hubs** you need **Send**, **Listen** and **Manage** permissions.
3. For **storage account log**. Create new storage account for log only don't put other data in this. So that you have good control over logs.

### Demo Configure Logging

We will create **Analytics Workspace, Azure Storage Account and Event Hub** for logging our **Azure Function Resource**. Next we will configure the Diagnostics Settings to write logs to all of the above destinations.

#### Creating Log Storage Account

![](https://imgur.com/qnL9pT0.gif)
First create Azure storage for logging at the same region as your Azure resource exist. Sign in to the Azure portal at https://portal.azure.com and follow steps.
![](https://imgur.com/mjyQ79X.png)

#### Creating Log Analytics Workspace

A Log Analytics workspace provides:

- A **Geographic Location** for the **data storage**.
- **Data isolation** by granting different users access rights following one of our recommended design strategies.
- **Scope for configuration** of settings like pricing tier, retention, and data capping.

![](https://imgur.com/Uma4T5m.gif)
Let's [create a workspace for Analytics Workspace logs](https://docs.microsoft.com/en-us/azure/azure-monitor/logs/quick-create-workspace). When you create workspace in the **same region** as the Azure resources it manages then there is **no** **outbound data transfer charges**.

#### Configure Diagnostic Setting to send logs To Analytics Workspace and Azure storage

Next let's find our azure function and create diagnostic settings to send the log to Analytics Workspace and Storage Account together.

![](https://imgur.com/gqzGN86.png)

#### Creating Event Hub for Logging

Sign in to the Azure portal at https://portal.azure.com and follow steps:
![](https://imgur.com/wMdGcUo.gif)

📓 Make sure you give Shared access policy as **Manage, Send and Listen** to the Event Hub.

#### Configure Diagnostic Setting to send logs to Event Hub

Sign in to the Azure portal at https://portal.azure.com and follow steps:

![](https://imgur.com/DnfeA4b.gif)

## Monitor Security

### Azure Security Center

Is a unified infrastructure security management system.

### Security Challenges

1. In cloud workloads are changing quickly and we must make sure the developers/devops are following the security best practices while provisioning the resources.
2. Internet Security attacks risk is always there if your resources are internet facing.
3. Also Security skills are less with developers.

### Solving Security Challenges

1. **Strengthen Security Posture**: Using Azure Security Monitor you can examine your resources and give you security reports.
2. **Protect against threats**: Azure security monitor can generate security alerts and raises threat prevention suggestions on your Azure resources.
3. **Auto Secure**: You can give auto-provisioning to resolve security issues faster.

### Resources Protected by Azure Security Center

There are lots of resources which are automatically **protected and monitor** by security center.

1. All **Azure PaaS resources** like DB engine and Storage accounts.
2. Non-Azure **Virtual Machines** on cloud or on premises. You must install Log Analytics Agents on them ( both windows and Linux ) supported.
3. **Azure VMs**
4. **Security alerts** are created when threat is found on the azure workloads. One has to investigate the security alerts.

### Security Center on Azure Portal

#### Overview screen

![](https://imgur.com/Ck6y2fp.gif)

1. **Secure Score**- over all health score
2. **Regulatory compliance** - how compliant you are for the resources.
3. **Azure Defender** - protects resources against security threats.
4. **Firewall Manager**
5. **Insights**

#### Recommendations screen

![](https://imgur.com/UJit8lQ.gif)
Displays the Secure Score, security improvement for all resources & their recommendation and Quick fixes.

#### Security alerts

![](https://imgur.com/UJit8lQ.gif)

If there is any security threats found on your resources then you will see alerts here.

#### Cloud security

![](https://imgur.com/UJit8lQ.gif)
Here you can see secure score and check your overall health score plus you can visit the recommendations.

## Azure Monitor for VMs

> You can monitor performance and health of VMs and VMs scale sets, running processors and other resources dependencies.

This is a product that helps you to:

- Deliver **predictable performance and availability**
- Identify **performance bottlenecks** and existing **network issues**
- Identify other dependencies issues and external storage.

### What kind of VMs supported?

- Azure **VMs**
- Azure **VMs scale sets**
- **Hybrid VMs** connected with **Azure Arc**
- **On-premises** virtual machines
- Virtual machines hosted in **another cloud** environment like AWS

### How to configure VMs for Azure Monitoring

1. [Create a Log Analytics Workspace](#creating-log-analytics-workspace)
2. Add **VMInsights solutions** to the Workspace.
3. **Install** **agents** on virtual machine and virtual machine scale sets.

### Limitations on Linux VMs

1. VMs **Red Hat Linux (RHEL)6** does not support "**Available Memory**" feature from Azure Monitoring.
2. **Metrics** are only available for data disks on Linux VMs using **XFS filesystems or EXT filesystem** family (EXT2,EXT3,EXT4)

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> You bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:fullstackmaster1@gmail.com?subject=Hi">fullstackmaster1@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
