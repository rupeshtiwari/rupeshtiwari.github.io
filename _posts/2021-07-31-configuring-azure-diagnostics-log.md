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
  image: https://i.imgur.com/vDLu5gY.png
  teaser: https://i.imgur.com/nbHefDR.png
  og_image: https://i.imgur.com/nbHefDR.png
tags:
  - azure
  - webdev
  - beginners
  - tutorial
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



## Azure Adviser 👨‍🏫

- Azure Adviser is an `Azure service`.
- Helps you to follow best practices to **optimize** Azure **deployments**.
- Deallocate/delete/downgrade resource based on its usages and reduce cost.

Azure Advisor has recommendations and monitoring.

### Overview

![](https://imgur.com/IgCObNA.png)
In overview you get advisory/recommendations for below stuffs:

- **Cost**
- **Security**: Also available in Azure Security Center
- **Reliability**: Like enable soft delete to protect your blob storage
- **Operational Excellence**
- **Performance**
- **All recommendations** 

### Cost Recommendations

- Optimize VM **costs** by **resizing** or **shutting down** underutilized instances.
- Downgrade or reduce size of DB engines like Maria DB, MySQL or PostgreSQL
- Buy **reserved capacities** for Azure SQL, Cosmos DB, Storage Account etc. Because reserved capacity resources are cheaper.
- Delete **unused public IP** addresses.

### Azure Adviser on Azure Portal

![](https://imgur.com/2sFY9nb.png)

- Go to all services
- Select advisor
- Under **settings/configuration** select all of the **resources** that you want get advise. You can also drill down up to resource group level.
  ![](https://imgur.com/gXgI8Mn.png)

## Cost Reports and Budget Setup 💲

**Azure Monitor** also helps us to:

- Monitor the resource cost
- Get cost reports
- Setup budget and alert

### Cost Management & Billing

![](https://imgur.com/vYFVU0q.png)
Cost Management & Billing is service in Azure.

In overview screen you will see:

- **History** of all the previous bills
- Which specific **resource** cost you **more price**

### Cost Management

#### Cost Analysis

![](https://imgur.com/ZCpkOQS.png)

#### Cost Alerts

You can setup your own alerts so that you will be notified once you cross your budget or about to reach your budget.

#### Budgets

You can create or delete the budges.

#### Advisor recommendations

This will redirect to the Azure Adviser page where you can see cost recommendations.

### Billing

Invoices and payments can be find here.

### Settings

![](https://imgur.com/NlKaFVr.png)
Configurations and you can even connect to AWS resources and check the cost recommendations on them.

## Visualize Azure Monitor Logs and Metrics 📈

You can use below services to visualize log data [Learn them in detail](https://docs.microsoft.com/en-us/azure/azure-monitor/visualizations)...

- Workbooks
- Power BI
- Azure Dashboards
- Grafana
- Azure Monitor Views (deprecated)
- Custom Applications.

### Metrics

- Specify the resource group and resource you want to see metrics for like VM or function app.
- Choose which metrics you want to see like VM CPU utilization etc.

### Workbooks

**Workbooks** are interactive documents that provide deep insights into your data.

- You can create empty or use template (like VM performance) to create your new workbook
- You must need specify log analytics workspace to workbooks
- Time Range last 4 hours data etc.

### Azure Dashboards

In Azure Portal you can have multiple dashboards.

You can create your own Dashboard for one VM resource and add below stuff like:

1. VMs performance Metrics
2. Clock
3. Multiple chart and diagrams.

## Configure Advanced Logging 🧑‍💻

Advance logging for Azure resources.

### Azure Monitor Insights

**Azure Monitor Insights** is **group of services** for getting **customized** monitoring reports for **applications and services**. They collect and analyze both **logs and metrics**.

Azure Monitor Insights for below resources are present:

1. Application Insights: Help you monitor live **web application** on any platform.
2. Containers: Helps you to monitor the **performance** of container workloads.
3. Networks: Provides a comprehensive view of network **health** and **metrics**.
4. Cosmos DB
5. Resource Group
6. Storage
7. VMs
8. Key Vault
9. Redis Cache

### Application Insights

Workspace-based Application insights (recommended) needs **Log Analytics Workspace** so make sure you create that first and then App Insights can help on below things:

- Tracing
- performance anomalies
- analytics tools to help you to find and resolve issues.

![](https://imgur.com/Xkm4foO.png)

1. Install **Instrumentation package SDK** in your web application.
2. Instrumentation instance **monitors** the **web app** and **logs the telemetry data** into the Application Insights Resource.
3. Each log entry must have `Instrumentation Key` GUID.

### What Data Application Insights Monitor

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

### Creating a MVC Web app with Application Insights

{% include video id="xoN1efAAEBg" provider="youtube" %}
We will create workspace-based App Insights so that logs can be sent to Azure Analytics Workspace further it can be used in Azure Sentinel. We will also use automatic approach to send telemetry data to the Azure.

- Create a web application .net framework
- Install the Application Insights Telemetry on this project
- Create Log Analytics Workspace on Azure portal
- Create Application Insights on Azure portal
- Get the instrumentation key from the overview of the App Insights.
- Update the MVC project web.config with the Key so that your app will send

Here is the [source code for implementing Azure App Insights](https://github.com/rupeshtiwari/app-insight-demo-mvc-net)

## Azure Monitor For Containers 🛢️

Monitors the performance of containers deployed to several platforms.
You can monitor below:

- Azure Kubernetes Service (AKS)
- Self-managed K8 cluster hosted on Azure using AKS Engine
- Azure Container Instances
- Self-managed K8 clusters hosted on Azure Stack or on-premises
- Azure Red Hat OpenShift
- Azure Arc enabled Kubernetes

### Implementing Azure Monitor for Kubernetes

![](https://imgur.com/vG39wgW.png)

Let's create and deploy a docker container to AKS. [Source code for azure app insight for docker container](https://github.com/rupeshtiwari/azure-app-container-insights-demo).

#### Creating MVC application with docker

{% include video id="5c2Ccdq_0xg" provider="youtube" %}

- First create MVC asp.net project select docker Linux support.
- Run project locally
- Package this app in container and deploy into container registry
- You can use Docker hub or Azure Container Registry

#### Creating Azure Container Registry

{% include video id="_G5I2JojkN0" provider="youtube" %}

- Next I am going to use **Azure Container Registry Service** to create new container registry.
- Under **repository** of my container registry My MVC application docker image will appear.
- Visual Studio will package my app into a **docker image** and deploy to my **azure docker container registry**.
- Once my docker image any docker host like **Azure Container Instances** or **Azure Kubernetes Service** (AKS).

#### Publishing Asp.net Docker Image to Azure

{% include video id="nklZHjzh2Z4" provider="youtube" %}

- Right click application and publish
- Select Docker Container Registry
- Next select azure container registry
- Select your resource group and azure container registry to publish then select publish. It will take some time to publish your image to Azure Container Registry.

#### Creating Kubernetes Cluster in Azure

![](https://imgur.com/Ov87oEs.png)
**Kubernetes Cluster concepts**

1. **Azure Container Registry** has Docker Image and in order to connect to your own docker container image you will get **container name** and **registry name** that will help you to host your docker image to any Azure container hosting services.

2. **Azure Kubernetes Cluster** host the docker container and exposes the container into public **8080** port using in-built high performance **load balancer**.
   1. You need **pod** workflow from Kubernetes Cluster which will connect to the container registry using container name and registry name and create internal 80 port for your app.
   2. Next you need **service** to expose internal port 80 to public 8080 over load balancer.

While creating Kubernetes Cluster remember 3 things.

1. **Authentication method**: required to connect Azure Container Registry to get the docker image.
2. **Integration**: Which Container Registry to select your own Container Registry that is we created where we have our docker image.
3. You can check the **performance** of your container by going to the Monitor Insights. Once our container will be deployed to the Kubernetes then we can observe performance.

Here is the YML for creating POD in k8 cluster.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: insights-demo01 # give any name
  labels:
    app: insights-demo01 # app name
    component: netcore-app
spec:
  containers: # which container u want to deploy
    - image: regdemo01.azurecr.io/appcontainerinsightsdemo:latest # <NameOfTheContainerRegistry>/<NAMEofTheDockerContainer>:latest
      name: webapi
      ports:
        - containerPort: 80
```

YML for creating service in K8 cluster.

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: insights-demo01 # give any name
  name: insights-demo01 # give any name
spec:
  ports:
    - port: 8080 # public port
      protocol: TCP
      targetPort: 80 # internal port
  selector:
    app: insights-demo01
    component: netcore-app
  type: LoadBalancer
```

Follow the video steps to create the Kubernetes Cluster including pod and service.

{% include video id="xoN1efAAEBg" provider="youtube" %}

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
