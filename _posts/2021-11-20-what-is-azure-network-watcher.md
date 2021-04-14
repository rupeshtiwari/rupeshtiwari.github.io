---
title: What is Azure Network Watcher
date: 2021-11-20 00:00 +0000
description: This is a monitoring service with lots of other important services for network
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

> Azure Network Watcher is a **monitoring service** with lots of other important services for network. **Most network diagnostics issues can be detected and analyzed with Azure Network Watcher**. Learn everything about Network Watcher in this article.

## What Network Watcher Does?

![](https://imgur.com/H2mtWg4.png){: .align-center}

- You use Network Watcher to monitor and repair the network health of IaaS (Infrastructure as Service) resources.
- It can capture network packets by sniffing the network
- It can analyze and display the network topology
- It can audit the security rules of network and VMs.
- It is a regional service
- It is automatically enabled in a region when you create or update a virtual network (vNet) in it.

## Capabilities of Network Watcher

### Monitoring

- Network Watcher can monitor communication between a VM and another endpoint (could be VM).
- Network Watcher can view resources in a virtual network.

### Diagnostics

- It can diagnose network traffic filtering problems to or from a VM.
- It can diagnose network routing problems from a VM.
- It can diagnose outbound connections from a VM.
- It can capture packets to and from VM.
- It can determine relative latencies between Azure regions and Internet Service Providers (ISPs).
- It can show security rules for an interface like network interface for a VM.

### Metrics and Logs

- It can analyze network security groups traffic.
- It can show diagnostics logs for network resources.

## Network Watcher in Azure Portal

### Topology

![](https://imgur.com/aMuidSb.png){: .align-center}
You can monitor the topology of your virtual network and you can click on any component to view them.

### Connection Monitor

![](https://imgur.com/1XfzXrM.png){: .align-center}
Connection Monitor monitors the health of the connections between 2 endpoints could be 2 virtual networks or 2 VMs.

### Next hop

This will give you the next network hop from a given source IP address to a destination IP address. You can use this to troubleshoot the issues.

![](https://imgur.com/dvmPfCr.png){: .align-center}
Example: Source IP address could be your VM in azure and destination IP address could be your local home machine IP address.

![](https://imgur.com/eYveirr.png){: .align-left}
So in this example the next hop is Internet.

### Effective Security Rules

![](https://imgur.com/vr6xfiR.gif){: .align-center}

Check security settings of your IaaS. Example: Check the security settings for your VM in Azure.

### Packet capture

![](https://imgur.com/ChIOGIv.gif){: .align-center}

Investigate network by capturing the network packets. You can choose the Remote or local IP and port addresses.

{: .notice--info}
👨‍🏫 In Exam remember: **Most network diagnostics issues can be detected and analyzed with Azure Network Watcher**

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
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)

## Working with **Events** to your application in Azure options:

2. Storage Queues
3. Service Bus Queues
4. Service Bus Topics
5. Event Grid
6. Event Hubs
7. IoT Hub
8. Notification Hubs
9. SignalR Services
10. Logic Apps

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
1. Azure Virtual Machine (VM)
2. Kubernetes Service (AKS)
3. Container Instances
4. Web App for Containers
5. Azure Batch
6. Service Fabric (Mesh)