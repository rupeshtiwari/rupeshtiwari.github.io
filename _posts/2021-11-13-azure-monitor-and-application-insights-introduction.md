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

> What are **Azure Monitor** and **Application Insights**? How exactly Azure Monitor work? How can you visualize Application Map with Application Insights? Learn the log retentions and exports. Learn all of this in this article. Helpful article for **AZ-304** Exam.

## Types of Data to consider

1. **Log**: web application tracings and logs.
2. **time-series**: data sensitive to time like performance counter.
3. **raw data**: un-transformed data which is in raw format received from sources
4. **Aggregated data**: which has a lot less detail and consists counts, averages and other statistical data that you see in Metric Explorer.
5. **Debug Snapshots**: which contains debugging data

## Azure Monitor

![](https://imgur.com/Qej8BE6.png){: .align-center}

- Azure Monitor provides an overview of all the monitoring data available.
- It is a center monitoring hub for all of the services.
- You can monitor blow things:
  - **Activity Logs**: who created the service
  - **Metrics**: CPU usages of VMs
  - **Azure Services**: which queries executed on **Cosmos DB** or how many users visited to **App Service web app**.

**You can drill down the specific data:**

- You can search data using SQL like query called **Kusto Query Language (KQL)**
- **Workbooks** templates to visualize data as reports or create custom **Workbooks**.
- **Insights** to trace web apps
  **Automate alert responses**: react on a specific data with an alert and take some actions. Example: if 10 HTTP exceptions occurs on web app then create a bug automatically.

## Application Insights

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

### Storing Log data

Above data is stored in one or more datastores. Example: In **Log Analytics Workspace**, this is a **data lake** that stores data in raw format and translate it into table-like structure that you can query using **Kusto Query Language** (KQL).

{: .notice--info}
The data in the Log Analytics Workspace is called **Azure Monitor Logs**.

The other data store is **time series** datastore. This is optimized to store time based data like **performance counter** and other metrics that comes in granularity of every second, minute or other granularities.

### Analyzing Log data

- **Log Analytics** is a **feature** of Azure Monitor. Logs can be queried by **Log Analytics** where Azure Monitor can analyze log data with the Kusto Query Language.
- **Metrics Explorer** is a different **feature** of Azure Monitor. Azure Monitor analyzes metrics with the **Metrics Analyzer**.
- **Workbooks** allows you to:
  - Combine data from various Azure data sources and data types.
  - Enable at-scale views across multiple resources
  - Visualize related data in a single interactive report.
- The data can be analyzed and used by **Dashboards, Insights, Alerts**.

## Data Retention

[How long is the data kept](https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-retention-privacy#how-long-is-the-data-kept)? Data kept longer than 90 days will [incur addition charges](https://azure.microsoft.com/pricing/details/monitor/). Data retention for **0 days** means you want to save the data **forever**.

### Application Insights Data Retention

![](https://imgur.com/z6Hsa09.png){: .align-center}

- Application Insights send its data to **Log Analytics Workspace** which Azure Monitor can use.
- Application Insights can store its **raw data** for up to **730 days (2 Years)**.
- You can use [Continuous Export (deprecated)](https://docs.microsoft.com/en-us/azure/azure-monitor/app/export-telemetry) or **Diagnostics Settings** (current) to store log data in Azure Storage, Event Hub as soon as data arrives. You can export data to Azure storage account with vNet, firewalls and private links.
- **Aggregated data** is retained at a granularity of **1 minute for 90 days**.
- **Debug Snapshots** are kept for **15 days**.

### Azure Monitor Logs Retention

![](https://imgur.com/ZVAHwXf.png){: .align-center}

- The data which is present in the **Azure Analytics Workspace** can stay up to 730 days. You can choose lower days also.
- You can **export** this data to Azure **Storage** or Azure **Event Hubs** to be processed by another system.

### Azure Monitor Metrics Retention

![](https://imgur.com/LwjC4Kj.png){: .align-center}

- **Metrics** can be stored for max **93 days**.
- **Performance counters** collected by **Log Analytics Agents** which further can be sent to **Log Analytics Workspace** and because of that it can be stored for **31 days by default to 730 days**.

## Azure Monitor Agents

Virtual machines and other compute resources require an agent to collect monitoring data required to measure the performance and availability of their guest operating system and workloads.

### Windows Agents

Check the latest Windows agents updates [here.](https://docs.microsoft.com/en-us/azure/azure-monitor/agents/agents-overview#windows-agents)

![](https://imgur.com/2jUXY9q.png){: .align-center}

[Windows Agents](https://docs.microsoft.com/en-us/azure/azure-monitor/agents/agents-overview#windows-agents) are small application that collects data and sends to Azure Log Analytics workspace or Metrics Datastore. If you run windows based machine or VM you can install an Azure Monitor agent.

### Linux Agents

Check the latest Linux agents updates [here](https://docs.microsoft.com/en-us/azure/azure-monitor/agents/agents-overview#linux-agents).

![](https://imgur.com/XGMHugW.png){: .align-center}

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

{: .notice--info}
I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

{: .notice--warning}
Your bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)