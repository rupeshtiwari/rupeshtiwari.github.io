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

> Learn what service from Azure you should use while creating your application in Azure. This article has quick short answer for when to use what in Azure service? Get [free e-book on Design Distributed Systems](https://azure.microsoft.com/en-us/resources/designing-distributed-systems/).

## Running Application in Azure Options

### Virtual Machines (VMs)

![](https://imgur.com/lVMTAlR.png){: .full}

{: .notice--info}
💁 **Note** \
\
`Azure Virtual Machines` is under **Infrastructure as a Service (IaaS)** offering from Microsoft Azure.

- Managed Virtual Machine Service in Cloud
- Starts and Stops in `minutes`
- Many OS images are available.
  - You can choose your own OS image (Linux Windows). Explore the full list of [Azure VM types](https://azure.microsoft.com/en-us/pricing/details/virtual-machines/series/)
  - You can bring your own OS /Software License ( same money )
- Many Sizes to choose from (CPU, Memory, Disk Type)
  - `General purpose`
  - `GPU` (for Intense work like video rendering etc.)
- Configuration options
  - Auto shutdown, Adding Disks, Adding VM to Networking
- SLA `99.95%` (Only if you run multiple instances)

{: .notice--success}
Link for [Getting Started with Azure Virtual Machine](https://docs.microsoft.com/en-us/azure/virtual-machines/). To get guarantied 99.95% SLA you must need 2 or more VMs.

### Azure Kubernetes Service (AKS)

![](https://imgur.com/H50OFsZ.png){: .full}

{: .notice--info}
💁 **Note** \
\
`Azure Kubernetes Service` is under **Infrastructure as a Service (IaaS)** offering from Microsoft Azure.

- Run `multiple` containers that makeup your applications
- Starts and stops in `seconds`
- Managed version of the Kubernetes container `orchestrator`. It takes care of provisioning or de-provisioning the containers. It scales up and down and monitor containers.
- Runs `Linux` and `Windows` Containers
- You instantiate the container with images from
  - `Docker Hub` or
  - `Azure Container Registry`, here you can host your own images or upload from somewhere.
- AKS runs in Azure on a cluster of VM so the availability is same as Azure VM.

{: .notice--success}
Containers are `light weight` compare to VM. They starts and stops in `Seconds` however VMs in `Minutes`. Link to learn more about [AKS](https://azure.microsoft.com/en-us/services/kubernetes-service/).

### Container Instances

![](https://imgur.com/9aKMeiF.png){: .full}

{: .notice--info}
💁 **Note** \
\
`Container Instances` is under **Infrastructure as a Service (IaaS)** offering from Microsoft Azure.

- Run `single` containers that makeup your applications
- Starts and stops in `seconds`
- `No` container `orchestrator` needed
  - Can work with orchestrators
- Runs `Linux` and `Windows` Containers
- You instantiate the container with images from
  - `Docker Hub` or
  - `Azure Container Registry`, here you can host your own images or upload from somewhere.
- AKS runs in Azure on a cluster of VM so the availability is same as Azure VM.

{: .notice--success}
Link to learn more about [Azure Container Instances](https://azure.microsoft.com/en-us/services/container-instances/).

### Azure Web App for Containers

![](https://imgur.com/ciwt04O.png){: .full}

{: .notice--info}
💁 **Note** \
\
`Azure Web App for Containers` is under **Infrastructure as a Service (IaaS)** offering from Microsoft Azure.

- You can run container in Azure Web App for Container as Service. This allows you to run container on App Services.
- Starts and stops in `seconds`
- `No` container `orchestrator` needed
- Runs `Linux` and `Windows` Containers
- Use App Service Features
  - Easy to setup `Continuous Deployments` from source control
  - Use `Deployment Slots` which allows you deployment with no `downtime`
  - `Scale` and automatic Scale by adding rules.
- You instantiate the container with images from
  - `Docker Hub` or
  - `Azure Container Registry`, here you can host your own images or upload from somewhere.

### Azure Batch

![](https://imgur.com/q3vIFLU.png){: .full}

{: .notice--info}
💁 **Note** \
\
This is under **Infrastructure as a Service (IaaS)** offering from Microsoft Azure.

- Allows you to run your job across many `Virtual Machines` at `massive` scale (thousands of VMs). You can use it to run a calculating job that needs lots of compute power or rendering video files.
- Orchestrates running your job in parallel
  - `Scaling` across machines
  - `Stages data` for your job so you can insert data into your job.
  - Create `job pipelines` with tasks so you can determine what steps need to be done with the output.
- Runs your job on `Linux` and `Windows` based VMs
- Can `run containers`. So you can run your application in container in Azure Batch. It will run it on as many VMs as needed.

{: .notice--success}
Link to learn more about [Azure Batch](https://azure.microsoft.com/en-us/services/batch/)

### Azure Service Fabric (Mesh)

{: .notice--info}
💁 **Note** \
\
This is under **Infrastructure as a Service (IaaS)** offering from Microsoft Azure.

![](https://imgur.com/q3vIFLU.png){: .full}

{: .notice--success}
Did you know Azure Service Fabrics is a technology that Microsoft uses itself to run many of their own Azure Services, like `Azur e SQL Databases`? Link to learn more about [Azure Service Fabrics](https://azure.microsoft.com/en-us/services/service-fabric/)

### Platform as a Service (PaaS)

7. Cloud Services
8. Web App
9. Mobile App

### Logic as a Service LaaS/Serverless

10. Function App
11. Logic App

## High level Separation

{: .my-table} 
| When | Use these Azure Service |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Full control** & responsibility, Stay vendor agnostic (run anywhere vendor agnostic) | **VMs, Container Instances, Kubernetes Service, Web App for Containers, Azure Batch, Service Fabric (Mesh)** |
| **Azure manages** your app, You manage scaling and configuration | **Batch, Cloud Services, Mobile App, Web App, Service Fabric** |
| Be able to **RDP** in VMs | **Batch, Cloud Services, Service Fabric(Mesh)** |
| **Azure manage** your app, **including** **scaling**, You manage configuration | **Azure Function App, Logic App** |

## Comparing Container Options and VMs

| Scenarios                                | ![](https://imgur.com/YPcnULJ.png) VM | ![](https://imgur.com/5IrDqJM.png) Container Instances | ![](https://imgur.com/ukowMIs.png) Kubernetes Services | ![](https://imgur.com/qwLOnPT.png) WebApp for Containers | ![](https://imgur.com/3HK1rtT.png) Batch | ![](https://imgur.com/cdq4W3I.png) Service Fabric |
| ---------------------------------------- | ------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------ | -------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------- |
| **Lift-and shift your app to the cloud** | ✔️                                    |                                                        |                                                        |                                                          |                                          |                                                   |
| **Simple apps (without orchestrator)**   | ✔️                                    | ✔️                                                     |                                                        |                                                          |                                          |                                                   |
| **Complex apps (with orchestrator)**     |                                       |                                                        | ✔️                                                     |                                                          |                                          |                                         ✔️          |
| **Run orchestrated microservices**     |                                       |                                                        |                                                     |                                                          |                                          |                                         ✔️          |
| **Run anywhere**     |                                       |                                                        |                                                     |                                                          |                                          |                                         ✔️          |

## Where to Run your Background Tasks?

 
| Scenarios | ![](https://imgur.com/eIRJkJj.png) Cloud Services | ![](https://imgur.com/OcHd8Qi.png) Web Jobs | ![](https://imgur.com/ZWWXH9G.png) Functions | ![](https://imgur.com/0nJeR1T.png)Batch |
| --------------------------------------------- | ------------------------------------------------- | ------------------------------------------- | -------------------------------------------- | --------------------------------------- |
| **Short-running tasks** | ✔️ | ✔️ | ✔️ | ✔️ |
| **Long-running tasks** | ✔️ | ✔️ | ✔️ | ✔️ |
| **Resource intensive tasks** | | | | ✔️ |
| **Pay all month** | ✔️ | ✔️ | | |
| **Pay only for what and when you run** | | | ✔️ | |
| **Need to deploy a complete app to run** | ✔️ | | | ✔️ |
| **Can deploy only the code necessary to run** | | ✔️ | ✔️ | |

## Where to Run your Applications?

 
| Scenarios | ![](https://imgur.com/iH0hVvs.png) Web App | ![](https://imgur.com/SRk7YqX.png) Mobile App | ![](https://imgur.com/eIRJkJj.png)Cloud Services | ![](https://imgur.com/cdq4W3I.png) Service Fabric | ![](https://imgur.com/j1Y4A4B.png)Functions | ![](https://imgur.com/z0fI8LX.png) Logic App |
| ------------------------------------------------------------------ | ------------------------------------------ | --------------------------------------------- | ------------------------------------------------ | ------------------------------------------------- | ------------------------------------------- | -------------------------------------------- |
| **Host web applications** | ✔️ | | ✔️ | ✔️ | | |
| **Host your own APIs** | ✔️ | | ✔️ | ✔️ | ✔️ | |
| **Host backend for mobile apps** (push notification, offline sync) | | ✔️ | | | | |
| **Automate one step of a process** | | | | | ✔️ | |
| **Automate a complete process** | | | ✔️ | | | ✔️ |
| **Feature deployment slots, Auth** | ✔️ | ✔️ | ✔️ | | ✔️ | |
| **Run (micro) services at massive scale** | | ✔️ | ✔️ | ✔️ | ✔️ | |

---

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

![](https://imgur.com/sugyXgH.png){: .align-left}
Use this if you need **simple queueing mechanism**. Sender and receiver are decoupled. Each message is processed by **one receiver only**. However, **many sender can put the message** on queue. Message must be **string** only. You can convert complex message into `JSON`. The Maximum size of message **64KB**. Azure Storage will provide the **transaction logs** for each message. All of the Azure Storage features will be available here.

### Service Bus Queues

![](https://imgur.com/Zy7AlUJ.png){: .align-left}
Use this as `advance queueing mechanism`. One `ore more applications can put the message` on the queue but still `only one` application can recive the message from queue. Message consists `key/value` properties. Like `customer="Microsoft"` and `id="23"`. Message contains `body` that is `binary data` so it can contain any data like `image, json, text`. Message size `256KB -1MB`. `Dead-letter sub-queue` is there where timed-out or poisoned messages can be placed. It gives duplicate message detection feature out of the box.

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
