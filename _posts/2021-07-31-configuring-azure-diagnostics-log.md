---
title: Configuring Azure Diagnostics Log
date: 2021-07-31 00:00 +0000
description: Demo configuring azure diagnostics log for azure functions.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
image: https://i.imgur.com/nbHefDR.png
header:
  image: https://i.imgur.com/po7VJxp.png
  teaser: https://i.imgur.com/nbHefDR.png
  og_image: https://i.imgur.com/nbHefDR.png
tags:
  - azure
  - webdev
  - beginners
  - certification
---

> ​This article will teach you t​he how to configure and implement **diagnostics log** for Azure resources. This article will help you to prepare for [az-303: Microsoft Azure Architect Technologies](https://docs.microsoft.com/en-us/learn/certifications/exams/az-303).

## Introduction

**Implement and Monitor an Azure Infrastructure** is 50-55% in Az-303. Under **Implement cloud infrastructure monitoring** we have below topics to cover:

| az-303                                                                              | azure                           |
| :---------------------------------------------------------------------------------- | :------------------------------ |
| monitor security                                                                    | Azure Security Center           |
| monitor performance                                                                 | Azure Monitor Metrics           |
| monitor health and availability                                                     | Azure Monitor                   |
| monitor cost                                                                        | Cost Management & Azure Adviser |
| configure advanced logging                                                          | App Insights & Log Analytics    |
| configure logging for workloads Initiate automated responses by using Action Groups |                                 |
| configure and manage advanced alerts                                                |                                 |

## Implementing Infrastructure Monitoring with Azure Monitor 🐒

We will use **Azure Platform Logs** to get the detail logs of the Azure resources.

### Azure Platform Logs

Provides detailed **diagnostics** and **auditing** information for Azure resources and the Azure platform they depend on.

### Types of Platform Logs

Azure platform logs are of 2 types:

1. **Activity Logs**: This works on **subscription** level. Who did what and when can be seen here. Example who deleted Azure blob container or Azure Key Vault etc. You can check all of the write operations here.
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

----------------temporary--------------

# AZ-304

## References

1. https://techcommunity.microsoft.com/t5/itops-talk-blog/what-s-the-difference-between-azure-security-center-azure/ba-p/2155188

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:fullstackmaster1@gmail.com?subject=Hi">fullstackmaster1@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
