---
title: Monitoring Options for Applications in Azure
date: 2021-11-06 00:00 +0000
description: Learn how many types of monitoring services available in Azure to monitor your applications.
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
  - beginners
  - certification
  - webdev
---

> Learn how many types of **monitoring services** available in **Azure** to monitor your **applications**.

## Design a Logging and Monitoring Solution in Azure

Below are the topics you should know:

- Determine levels and storage location for logs.
- Plan for integration with monitoring tools including Azure Monitoring tool and Azure Sentinel.
- Recommend appropriate monitoring tool(s) for a solution.
- Choose a mechanism for event routing and escalation.
- Recommend a logging solution for compliance requirements.

In this article we are focusing on 

## Options for Monitoring Applications in Azure

![](https://imgur.com/RRBB8Ya.png)
Below are the **services** to Monitor your applications:

You can monitor at **Application-level** using below services.

1. Application Insights
2. App Center

You can monitor at **Subscription / resource group / virtual network level** using below services: 3. Network Watcher 4. Monitor 5. Security Center 6. Advisor 7. Sentinel
These services can provide more of an overview than just status of application.

## Application Insight

![](https://imgur.com/z6Hsa09.png){: .align-center}

- use to monitor web app, API and desktop app.
- is a service and part of Azure Monitor.
- from marketing standpoint, it is feature for Azure Monitor.
- in reality it is a Standalone feature.

## Visual Studio App Center

![](https://imgur.com/34J9bDe.png){: .align-center}

- use to monitor mobile app
- also used to deploy and test mobile app

## Network Watcher

![](https://imgur.com/tdsC3xy.png){: .align-center}

- use to monitor and inspect network traffic.

## Azure Monitor

![](https://imgur.com/RcfzQj7.png){: .align-center}

- is a main monitoring service in Azure.
- can see overview of other monitoring services like App Insights.
- analyze and query logs and metrics from other monitoring services.

## Azure Security Center

![](https://imgur.com/IXm0u3e.png){: .align-center}

- provides an overview of security status & recommendations of your services
- helps prevent security incidents

## Azure Advisor

![](https://imgur.com/8Ykd5S9.png){: .align-center}

- monitors all of the recommendations within the azure subscriptions
- provides overview to take actions.
- it's not strictly monitoring service.

### Sentinel

![](https://imgur.com/GMOLpT8.png){: .align-center}

- security focused service like security center.
- works with security center to analyze and hunt for threats and security incidents and fix them.
