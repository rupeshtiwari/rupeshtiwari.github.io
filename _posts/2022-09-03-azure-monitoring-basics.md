---
title: Azure Monitoring Basics
date: 2022-09-03 00:00 +0000
description: Azure Monitor is the central service that can help you to improve performance of your application and dependencies. In this article I will go through the basic knowledge about Azure Monitor.
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
  image: https://i.imgur.com/hjB7F1Q.png
  teaser: https://i.imgur.com/qxXxmBa.png
  og_image: https://i.imgur.com/qxXxmBa.png
tags:
  - webdev
  - tutorial
  - beginners
  - azure
---

> Azure Monitor is the central service that can help you to improve performance of your application and dependencies. In this article I will go through the basic knowledge about Azure Monitor.

![](https://i.imgur.com/FOQXz3R.png){: .full}

## Azure Monitor Overview

**Azure Monitor** Is a **service** in the cloud and has **features** like **Application Insights**.

![](https://i.imgur.com/FFPq95S.png){: .full}

It helps you **maximize** the **availability and performance** of your **applications** and **services** by collecting, analyzing and acting on telemetry from cloud and on-premises environment.

![](https://i.imgur.com/HWvAQWK.png){: .full}

It collects log, telemetry, metrics data from cloud and on-premises resources.

![](https://i.imgur.com/fpoWLBp.png){: .full}

You already are using Azure Monitor when you create any **resource** in Azure.

**Example**: When you created a static site in your storage account. Azure monitor will automatically collect performance metrics information and start showing metrics to you. You can access and visualize it's metrics how many request and response your site is handling from the resource it self by going to the Azure portal.

![](https://i.imgur.com/njxry7F.png){: .full}

**Example**: Logs are collected by Azure Monitor to show the activity within your subscription.

![](https://i.imgur.com/fjy5UJE.png){: .full}

## Azure Monitor Data Gathering

Azure Monitor Collects Data from 3 places: Azure platform services, Infrastructure, Applications into Metrics or Log. Performance Metrics are stored in **Time Series Database (TSDB)** and Logs are stored in Azure **Log Analytics Workspace** inside a table called as **AzureActivity**. Log Analytics Workspace is nothing but a [Azure Data Lake](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction) built on Azure Blob Storage Account.

![](https://i.imgur.com/bRC0GHh.png){: .full}

### Azure Platform Services

![](https://i.imgur.com/EKVan5V.png){: .full}

- Sign On Information from **Azure AD Audit Logs**
- **Activity Logs** for service health and configuration changes of resources
- **Resource Log** and Platform metrics which provides details to the operations performance of each resource.

### Infrastructure

![](https://i.imgur.com/sZiz4yS.png){: .full}

**Compute Resources** like VMs requires an agent to collect log and performance data from Guest OS workloads.

These VMs can be in on-premise, Azure or in other cloud ( AWS , Google Cloud )

### Applications

![](https://i.imgur.com/sZiz4yS.png){: .full}

For application use **Application Insight** to collect detail Metrics and logs related to the performance of the applications written in any language and any environments.

### Custom Sources

Azure Monitor has also API to collect data from any places.

## Azure Monitor Features to Analyze and Act on Data

- **Visualize** the data using [Dashboards](https://docs.microsoft.com/en-us/azure/azure-portal/azure-portal-dashboards) and [Workbooks](https://docs.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview)
- **Analyze** the data using [Metrics Explorer](https://docs.microsoft.com/en-us/azure/azure-monitor/essentials/metrics-getting-started) and [Log Analytics](https://docs.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-tutorial)
- **Respond** Azure Monitor can pro-actively [alert](https://docs.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview) you when a metric value or the result of the log query indicate a problem or based on custom conditions and it can take some automated [actions](https://docs.microsoft.com/en-us/azure/azure-monitor/alerts/action-groups) like sending email or running some azure functions or Logic Apps. If metric values indicate load is increasing in VMs or any resource then you can use `[AutoScale](https://docs.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-overview)` feature to automatically add or remove compute resources.
- **Insights** [Application Insight](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview) identifies exceptions thorough all of the components of your applications. Insights are available for [Container](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-overview), [VM](https://docs.microsoft.com/en-us/azure/azure-monitor/vm/vminsights-overview), [Network](https://docs.microsoft.com/en-us/azure/azure-monitor/insights/network-insights-overview), [Storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-insights-overview) and [Additional Solutions](https://docs.microsoft.com/en-us/azure/azure-monitor/insights/solutions?tabs=portal).

  ![](https://i.imgur.com/VyETInr.png){: .full}

## Other Tool Integrations

You may have [SIEM](#siem) and [ITSM](#itsm) tools that require access to the data that it collects. How would you give Azure Monitor Data to other tools? You can send the log and metrics to **[Azure Event Hub](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-about)** to make it accessible outside of Azure.

![](https://i.imgur.com/GWDAQ5k.png){: .full}

### ITSM

IT Service Management (ITSM) Few ITSM tools are [ServiceNow](https://www.servicenow.com/), System Center Service Manager, [Provance](https://www.provance.com/), [Cherwell](https://www.cherwell.com/services/training/). You can use [IT Service Management Connector](https://docs.microsoft.com/en-us/azure/azure-monitor/alerts/itsmc-overview) in Azure to connect your own ITSM tools.

### SIEM

Security Incident and Event Monitoring (SIEM) - Microsoft Azure Sentinel is a scalable, cloud-native, security information event management (SIEM) and security orchestration automated response (SOAR) solution.

## References

- https://docs.microsoft.com/en-us/azure/azure-monitor/overview
- https://docs.microsoft.com/en-us/azure/azure-portal/azure-portal-dashboards
- https://docs.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview\

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/5fBatz9.png)
