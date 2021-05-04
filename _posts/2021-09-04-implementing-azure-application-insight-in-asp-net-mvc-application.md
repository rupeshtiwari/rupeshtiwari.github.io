---
title: Implementing Azure Application Insight in Asp.Net MVC Application
date: 2021-09-04 00:00 +0000
description: Learn how to create and asp.net MVC application and use azure application insight logging.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/h4QI62f.png
header:
  image: https://i.imgur.com/po7VJxp.png
  teaser: https://i.imgur.com/h4QI62f.png
  og_image: https://i.imgur.com/h4QI62f.png
tags:
  - azure
  - webdev
  - beginners
  - certification
---

> Did you know you can enable web application tracing, performance check, request response time trace and exception tracing all free using Azure Application Insight. Learn how to implement and configure app insight in your .net application. This article will help you to prepare for [az-303: Microsoft Azure Architect Technologies](https://docs.microsoft.com/en-us/learn/certifications/exams/az-303).

## Azure Monitor Insights

**Azure Monitor Insights** is **group of services** for getting **customized** monitoring reports for **applications and services**. They collect and analyze both **logs and metrics**.

Azure Monitor Insights for below resources are available:

1. Application Insights: Help you monitor live **web application** on any platform.
2. Containers: Helps you to monitor the **performance** of container workloads.
3. Networks: Provides a comprehensive view of network **health** and **metrics**.
4. Cosmos DB
5. Resource Group
6. Storage
7. VMs
8. Key Vault
9. Redis Cache

## Application Insights

Workspace-based Application insights (recommended) needs **Log Analytics Workspace** so make sure you create that first and then App Insights can help on below things:

- Tracing
- performance anomalies
- analytics tools to help you to find and resolve issues.

![](https://imgur.com/Xkm4foO.png)

1. Install **Instrumentation package SDK** in your web application.
2. Instrumentation instance **monitors** the **web app** and **logs the telemetry data** into the Application Insights Resource.
3. Each log entry must have `Instrumentation Key` GUID.

## What Data Application Insights Monitor

- Request rates
- Response time
- Failure rate
- Exceptions
- Page views and load performance
- AJAX calls
- User session count
- Performance counters
- Host diagnostics from Azure or Docker
- Diagnostic trace logs
- Custom events and metrics

You can use these data to visualize using:

- Application Map
- Profiler
- Usage Analysis
- Diagnostic Search for instance data
- Visual Studio

## Creating a MVC Web app with Application Insights

{% include video id="xoN1efAAEBg" provider="youtube" %}
We will create workspace-based App Insights so that logs can be sent to Azure Analytics Workspace further it can be used in Azure Sentinel. We will also use automatic approach to send telemetry data to the Azure.

- Create a web application .net framework
- Install the Application Insights Telemetry on this project
- Create Log Analytics Workspace on Azure portal
- Create Application Insights on Azure portal
- Get the instrumentation key from the overview of the App Insights.
- Update the MVC project web.config with the Key so that your app will send

Here is the [source code for implementing Azure App Insights](https://github.com/rupeshtiwari/app-insight-demo-mvc-net)

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your bright future is awaiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

---

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
