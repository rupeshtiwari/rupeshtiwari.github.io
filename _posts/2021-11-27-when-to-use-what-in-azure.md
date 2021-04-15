---
title: When to use what in Azure
date: 2021-11-27 00:00 +0000
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
  - tutorial
---

> Learn what service from Azure you should use while creating your application in Azure. This article has quick short answer for when to use what in Azure service?

## Working with **Events** to your application in Azure options:

1. Storage Queues
2. Service Bus Queues
3. Service Bus Topics
4. Event Grid
5. Event Hubs
6. IoT Hub
7. Notification Hubs
8. SignalR Services
9. Logic Apps

### Storage Queues

Use this if you need simple queueing mechanism. Sender and receiver are decoupled. Each message is processed by one receiver only. However, many sender can put the message on queue. Message must be string. The Maximum size of message 64KB. Azure Storage will provide the transaction logs for each message. All of the Azure Storage features will be available here.

### Service Bus Queues

Use this as advance queueing mechanism. One ore more applications can put the message on the queue but still only one application can recive the message from queue. Message consists key/value properties. Like customer="Microsoft" and id="23". Message contains body that is binary so it can contain any data like image, json, text. Message size 256KB -1MB. Dead-letter sub-queue is there where timed-out or poisoned messages can be placed. It gives duplicate message detection feature out of the box.

## Monitoring you applications in Azure Options:

1. Application Insights
2. Visual Studio App Center
3. Log Analytics
4. Network Watcher
5. Azure Monitor
6. Security Center
7. Advisor
8. Sentinel

## Adding **Intelligence** to your applications in Azure Options:

1. Azure Machine Learning Studio
   1. Use ML Web Services
2. Azure Machine Learning Service
3. Azure Cognitive Services
   1. Speech API
   2. Computer Vision API
   3. LUIS (Language Understanding Intelligence Service) API
   4. Text Analytics API
4. Azure Bot Service

## Speeding up you Applications in Azure Options:

1. Azure CDN (Content Delivery Network) service
2. Azure Redis Cache
3. Azure Traffic Manager

## Storing Data for your Application in Azure Options:

### Relational Data storage options

1. Azure SQL Database
2. Azure Databases for
   1. MySQL
   2. PostgreSQL
   3. MariaDB

### Unstructured / Document data storage options

3. Azure Cosmos DB
4. Azure Storage
   1. File
   2. Blob
   3. Table
   4. Disk
   5. Queue

### Data Analytics data storage options

5. Azure Synapse Analytics
6. Azure Data Lake Store

## Securing Applications in Azure Options

1. Azure Active Directory
2. Azure Key Vault
3. Azure App Service Certificate
4. Data store encryption features

## Working with Media in Azure Options

1. Azure Media Services
   1. Encoding
   2. Content Protection
   3. Streaming
   4. Media player
   5. Media Analytics
2. Azure CDN ( Content Delivery Network )

## Deploying and Testing in Azure Options

1. Visual Studio Team Services
2. Visual Studio App Center
3. Azure DevOps Projects

## Data Analytics options in Azure:

1. Azure Data Factory
2. Azure Analysis Services
3. Azure Data Lake Analytics
4. Azure Stream Analytics
5. Azure Time Series Insights
6. Azure Databricks
7. Azure HDInsight
   1. Microsoft Machine Learning Server (in R language)
   2. Apache Spark cluster
   3. Apache Storm cluster
   4. Apache HBASE cluster
   5. Apache Kafka cluster

## Running Application in Azure Options

**Infrastructure as a Service (IaaS)**

1. Azure Virtual Machine (VM)
2. Kubernetes Service (AKS)
3. Container Instances
4. Web App for Containers
5. Azure Batch
6. Service Fabric (Mesh)
   **Platform as a Service (PaaS)**
7. Cloud Services
8. Web App
9. Mobile App
   **Logic as a Service LaaS/Serverless**
10. Function App
11. Logic App

| When                                                                       | Use these Azure Service                                                                                 |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Full control & responsibility, Stay vendor agnostic (run anywhere)         | VM, Container Instances, Kubernetes Service, Web App for Containers, Azure Batch, Service Fabric (Mesh) |
| Azure manages your app, You manage scaling and configuration               | Batch, Cloud Service, Mobile App, Web App, Service Fabric                                               |
| Azure manage your app, **including** **scaling**, You manage configuration | Azure Function App, Logic App                                                                           |
