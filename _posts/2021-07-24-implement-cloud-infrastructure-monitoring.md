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
image: https://i.imgur.com/thumbnail.png
header:
  image: https://i.imgur.com/FEATUREIMAGE.png
  teaser: https://i.imgur.com/thumbnail.png
  og_image: https://i.imgur.com/thumbnail.png
tags:
  - azure
  - certification
  - architect
  - tutorial
---

> Are you preparing for the Microsoft exam **AZ-303**? ​This article will teach you t​he cloud **monitoring skills** needed for this exam.

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
We will create Analytics Workspace, Azure Storage Account and Event Hub for logging our Azure Function Resource. Next we will configure the Diagnostics Settings to write logs to all of the above destinations.

#### Creating Log Storage Account
First create Azure storage for logging at the same region as your Azure resource exist. Sign in to the Azure portal at https://portal.azure.com and follow steps: 
![](https://imgur.com/mjyQ79X.png)
![](https://imgur.com/qnL9pT0.gif)

#### Creating Log Analytics Workspace

A Log Analytics workspace provides:

- A geographic location for data storage.
- Data isolation by granting different users access rights following one of our recommended design strategies.
- Scope for configuration of settings like pricing tier, retention, and data capping.

When you create workspace in the same region as the Azure resources it manages then there is no outbound data transfer charges. 

Next lets [create a workspace for Analytics Workspace logs](https://docs.microsoft.com/en-us/azure/azure-monitor/logs/quick-create-workspace). Sign in to the Azure portal at https://portal.azure.com and follow steps: 

![](https://imgur.com/Uma4T5m.gif)

#### Configure to send logs To Analytics Workspace and Azure storage

Next let's find our azure function and create diagnostic settings to send the log to Analytics Workspace and Storage Account together. 

![](https://imgur.com/gqzGN86.png)


#### Creating Event Hub for Logging

Sign in to the Azure portal at https://portal.azure.com and follow steps: 
![](https://imgur.com/wMdGcUo.gif)

📓 Make sure you give Shared access policy as **Manage, Send and Listen** to the Event Hub. 

#### Configure to send logs to Event Hub

Sign in to the Azure portal at https://portal.azure.com and follow steps:

![](https://imgur.com/DnfeA4b.gif)


## Monitor Security

### Azure Security Center

Is a unified infrastructure security management system. 

#### Security Challenges

1. In cloud workloads are changing quickly and we must make sure the developers/devops are following the security best practices while provisioning the resources. 
2. Internet Security attacks risk is always there if your resources are internet facing. 
3. Also Security skills are less with developers. 


#### Solving Security Challenges 

1. Strengthen Security Posture: Using Azure Security Monitor you can examine your resources and give you security reports.
2. Protect against threats: Azure security monitor can generate security alerts and raises threat prevention suggestions on your Azure resources.
3. Auto Secure: You can give auto-provisioning to resolve security issues faster. 


### Resources Protected by Azure Security Center

There are lots of resources which are automatically **protected and monitor** by security center.

1. All Azure PaaS resources like DB engine and Storage accounts.
2. Non-Azure Virtual Machines on cloud. You must install Log Analytics Agents on them ( both windows and Linux ) supported. 



---
 
*Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box.*

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access *current* and *future* **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask ***doubts/questions*** and get more help, tips and tricks.

> You bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!** 
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:fullstackmaster1@gmail.com?subject=Hi">fullstackmaster1@gmail.com</a> 
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
