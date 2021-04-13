---
title: Azure Monitor and Application Insights Introduction
date: 2021-11-13 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/7I0NoBe.png
header:
  image: https://i.imgur.com/vce9zzl.png
  teaser: https://i.imgur.com/7I0NoBe.png
  og_image: https://i.imgur.com/7I0NoBe.png
tags:
  - azure
  - webdev
  - beginners
  - certification
---

> What are Azure Monitor and Application Insights? How exactly Azure Monitor work? How can you visualize Application Map with Application Insights? Learn all of this in this article. Helpful article for AZ-304 Exam.

## Azure Monitor

![](https://imgur.com/Qej8BE6.png){: .align-center}

- Azure Monitor is an overview of all the monitoring data available
- It is a center monitoring hub for all of the services
- You can monitor blow things:
  - **Activity Logs**: who created the service
  - **Metrics**: CPU usages of VMs
  - **Azure Services**: which queries executed on **Cosmos DB** or how many users visited to **App Service web app**.

**You can drill down the specific data:**

- You can search data using SQL like query called **Kusto Query Language (KQL)**
- **Workbooks** templates to visualize data as reports or create custom **Workbooks**.
- **Insights** to trace web apps
  **Automate alert responses**: react on a specific data with an alert and take some actions. Example: if 10 HTTP exceptions occurs on web app then create a bug automatically.

## Azure Application Insights

![](https://imgur.com/z6Hsa09.png){: .align-center}

- Use it to monitor web and desktop application
- Monitor and alerts on below things:
  - Availability
  - Performance
  - Failures
  - Usages: By whom application is used and how it is used.
- **Ping and multi-step test**: ping your website from multiple locations and test if your application is available to all locations. It alerts if your app is offline.
- It sends data to Log Analytics Workspace which is a Data Lake that Azure Monitor uses.
- Export Azure Application Insight data to storage account in JSON format to keep for long time. For compliance requirement u can keep it.
- Application Insights provides your Application Map. It also provides the performance, errors and availability of each components of your application map. You can use this to know which component of your application is un-healthy.

  ![](https://imgur.com/GzTbKy7.png){: .align-center}

## How Azure Monitor Works

![](https://imgur.com/13aJy9q.png){: .align-center}

Logs are created by below things:

1. Azure Resources
2. Applications
3. Virtual Machines Agents
4. Data Collector APIs

### Logs in Data Stores

Above data is stored in one or more datastores. Example: In **Log Analytics Workspace**, this is a **data lake** that stores data in raw format and translate it into table-like structure that you can query using **Kusto Query Language** (KQL).

{: .notice--info}
The data in the Log Analytics Workspace is called **Azure Monitor Logs**.

The other data store is **time series** datastore. This is optimized to store time based data like **performance counter** and other metrics that comes in granularity of every second, minute or other granularities.

## Analyzing Logs

- **Log Analytics** is a **feature** of Azure Monitor. Logs can be queried by **Log Analytics** where Azure Monitor can analyze log data with the Kusto Query Language.

- **Metrics Explorer** is a different **feature** of Azure Monitor. Azure Monitor analyzes metrics with the **Metrics Analyzer**.

- The data can be analyzed and used by **Dashboards, Workbooks , Insights, Alerts**.

## Data Retention


![](https://imgur.com/z6Hsa09.png) {: .align-center}
- Application Insights send its data to **Log Analytics Workspace**.
- Application Insights can store its **raw data** for up to **730 days (2 Years)**

















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
