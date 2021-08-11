---
title: Introduction to Azure Fundamentals
date: 2022-03-26 00:00 +0000
description: Learn everything you should know about Azure Services and concepts as a beginner
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
image: https://i.imgur.com/OTHb1vM.png
header:
  image: https://i.imgur.com/XMFI6bl.png
  teaser: https://i.imgur.com/OTHb1vM.png
  og_image: https://i.imgur.com/OTHb1vM.png
tags:
  - webdev
  - azure
  - tutorial
  - az-900
---

> Can you describe **basic concepts** of cloud computing? Is Azure **right solution** for your business needs? How can you create your Azure **subscription** today? I will explain all in this article. This is the 1st article on "**Azure Fundamentals part 1: Describe core Azure concepts**".

![](https://i.imgur.com/bJhy0o9.png)

## Introduction

![](https://i.imgur.com/8j3pV71.png)

### What is Azure?

Azure is a continually expanding set of cloud services that help your organization meet your current and future business challenges. [Learn More about What is Microsoft Azure here...](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-fundamentals/what-is-microsoft-azure)

### What is Azure fundamentals?

Azure fundamentals is a series of [**six learning paths**](#exam-az-900) or six knowledge domain areas.

### Why should I take Azure fundamentals?

You boss or manager wants to use Azure in your company. So you must be prepare for it. Now a days there are many jobs available which requires Azure certifications.

Take Azure fundamentals if you:

- Have general interest in Azure or in the cloud.
- Want to earn official certification from Microsoft.

#### Exam AZ-900

| AZ-900 Domain Area                                              | Weight |
| :-------------------------------------------------------------- | :----- |
| Describe cloud concepts                                         | 20-25% |
| Describe core Azure services                                    | 15-20% |
| Describe core solutions and management tools on Azure           | 10-15% |
| Describe general security and network security features         | 10-15% |
| Describe identity, governance, privacy, and compliance features | 20-25% |
| Describe Azure cost management and Service Level Agreements     | 10-15% |

## What is cloud computing?

It's the **delivery of computing services over the internet**, which is otherwise known as the cloud. These services include servers, storage, databases, networking, software, analytics, and intelligence. Cloud computing offers faster innovation, flexible resources, and economies of scale.

{: .notice--success}
🏆 **Pro Tip** \
\
Save your company money 💰 "You'll only need to pay for **the resources and computing time that you use**".

### Why is cloud computing typically cheaper to use?

Cloud computing is the delivery of computing services over the internet by using a **pay-as-you-go** pricing model.

To put it another way, cloud computing is a way to **rent compute power and storage** from someone else's datacenter. You can treat cloud resources like you would your resources in your own datacenter. When you're done using them, you give them back. You're billed only for what you use.

Instead of maintaining CPUs and storage in your datacenter, you rent them for the time that you need them. The `cloud provider` takes care of **maintaining the underlying infrastructure** for you. The cloud enables you to quickly solve your toughest business challenges, and bring cutting-edge solutions to your users.

### Why should You move to the cloud?

In our ever-changing digital world, two trends emerge:

- Teams `deliver` new features to their users at `record speeds`.
- Users expect an increasingly `rich and immersive experience` with their devices and with software.

The cloud provides on-demand access to:

- A nearly limitless pool of raw compute, storage, and networking components.
- Speech recognition and other cognitive services that help make your application stand out from the crowd.
- Analytics services that deliver telemetry data from your software and devices.

### What are some cloud computing advantages?

{: .notice--success}
🏆 **Pro Tip** \
\
Remember the sentence [**GASHED**](https://dictionary.cambridge.org/us/dictionary/english/gashed).
**G** = **G**eo-distribution
**A** = **A**gility
**S** = **S**calability
**H** = **H**igh availability
**E** = **E**lasticity
**D** = **D**isaster recovery

👇 Below are also called as cloud concepts:

- **Geo-distribution**: You can deploy apps and data to regional datacenters around the globe, thereby ensuring that your customers always have the best performance in their region.

- **Agility**: Deploy and configure cloud-based resources quickly as your app requirements change.

- **Scalability**: Apps in the cloud can scale _vertically_ and _horizontally_:

  - Scale vertically to increase compute capacity by adding RAM or CPUs to a virtual machine.
  - Scaling horizontally increases compute capacity by adding instances of resources, such as adding VMs to the configuration.

- **High availability**: Depending on the service-level agreement (SLA) that you choose, your cloud-based apps can provide a continuous user experience with no apparent downtime, even when things go wrong. This is also called as **Reliability**.

- **Elasticity**: You can configure cloud-based apps to take advantage of autoscaling, so your apps always have the resources they need. It can decrease resource if they are underused or increase if demand is high.

- **Disaster recovery**: By taking advantage of cloud-based backup services, data replication, and geo-distribution, you can deploy your apps with the confidence that comes from knowing that your data is safe in the event of disaster.

### What are cloud service models?

There are 3 Cloud Service Models:

- **Infrastructure-as-a-Service (IaaS)** the cloud provider will keep the hardware up-to-date, but operating system maintenance and network configuration is up to you as the cloud tenant.

- **Platform-as-a-Service (PaaS)** the cloud provider manages the virtual machines and networking resources, and the cloud tenant deploys their applications into the managed hosting environment.

- **Software-as-a-Service(SaaS)** the cloud provider manages all aspects of the application environment, such as virtual machines, networking resources, data storage, and applications. The cloud tenant only needs to provide their data to the application managed by the cloud provider.

The following illustration demonstrates the services that might run in each of the cloud service models.

![](https://imgur.com/Ia6D7IM.png){: .full}

The following chart illustrates the various levels of responsibility between a cloud provider and a cloud tenant.

![](https://imgur.com/tCJ0p7V.png){: .full}

### What is serverless computing?

It is a PaaS model. Normally used by developers to build applications faster. With serverless applications, the cloud service provider automatically provisions, scales, and manages the infrastructure required to run the code. Serverless architectures are highly scalable and event-driven, only using resources when a specific function or trigger occurs.

{: .notice--success}
🏆 **Pro Tip** \
\
The "serverless" name comes from the fact that the tasks associated with infrastructure provisioning and management are invisible to the developer. This approach enables developers to increase their focus on the business logic, and deliver more value to the core of the business.

### What are public, private, and hybrid clouds?

There are three deployment models:

- **Public cloud** is cloud resources, such as servers and storage, are `owned and operated by a third-party cloud service provider`, and delivered over the internet.

- **Private cloud** consists of computing resources used exclusively by `users from one business or organization`. A private cloud can be physically located at your organization's on-site (on-premises) datacenter, or it can be hosted by a third-party service provider.

- **Hybrid cloud** is a computing environment that combines a `public cloud and a private cloud` by allowing data and applications to be shared between them.

![](https://imgur.com/6DirYOj.png){: .full}

## How Azure Works?

![](https://i.imgur.com/S2EB0iV.png){: .full}

Azure works with technology called **Virtualization**. Means separates the tight coupling between Hardware and its operating system.

![](https://i.imgur.com/n2HRQdJ.png){: .full}

It uses **Hypervisor** to abstract away the coupling between hardware & software using Virtualization technique.

![](https://i.imgur.com/xS7cXdH.png){: .full}

Azure has lots of Data Centers in many regions spread around the world. Azure uses virtualization in massive scale in all of its data-centers.

**Data-center** has **Rack** and Rack has servers. Each server includes Hypervisor.

There is **Network Switch** which allows connectivity to all of the servers.

![](https://i.imgur.com/2urDTsz.png){: .full}

**One server** in the rack runs special software called as **Fabric Controller**.

![](https://i.imgur.com/Y32nDX0.png){: .full}

Azure Fabric Controller is connected to **ORCHESTRATOR** software. An Orchestrator responds to user requests.

{: .notice--success}
🏆 **Pro Tip** \
\
In-fact **Azure Orchestrator** manages everything that happens in Azure. Like it can package the Virtual Machine request coming from user and send to Azure Fabric Controller to create it.

![](https://i.imgur.com/TfOkyJV.png){: .full}

The users can make requests using the **Orchestrators Web API**.

![](https://i.imgur.com/o3Ol9NR.png){: .full}

The **Web API** can be called using **Azure Portal** and many tools.

![](https://i.imgur.com/tDjFTKJ.png){: .full}

**For example**, when a user makes a request to create a Virtual Machine (VM) from Azure portal. The Orchestrator packages everything needed and chooses the best server Rack. And then sends the package and request to the Fabric Controller. Once the Fabric Controller has created the Virtual Machine, the user can connect to it.

![](https://i.imgur.com/E80cISJ.gif){: .full}

## Azure Portal

The Azure portal is a web-based, unified console that provides an alternative to command-line tools.

[Learn More ...](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-fundamentals/what-is-microsoft-azure)

![](https://i.imgur.com/pd9pVmS.png){: .full}

## What is Azure Marketplace?

[Azure Marketplace](https://azuremarketplace.microsoft.com/) helps connect users with Microsoft partners, independent software vendors, and startups that are offering their solutions and services, which are optimized to run on Azure.

![](https://i.imgur.com/3Vabs2f.png){: .full}

Azure Marketplace is an online store that hosts applications that are certified and optimized to run in Azure. Many types of applications are available, ranging from AI and machine learning to web applications.

## Azure Services

Let's take a quick tour of the high-level services Azure offers.

![](https://i.imgur.com/YsSaBXj.png){: .full}

{: .notice--success}
🏆 **Pro Tip** \
\
Remember this sentence "_I can_ **DISBAND [CWM](https://wordunscrambler.me/dictionary/cwm)**"
**D** = **D**atabases
**I** = **I**nternet of Thing
**S** = **S**torage
**B** = **B**ig Data
**A** = **A**rtificial Intelligence
**N** = **N**etworking
**D** = **D**evOps
**C** = **C**ompute
**W** = **W**eb
**M** = **M**obile

![](https://imgur.com/cq2wt45){: .full}

### Databases

Azure provides multiple database services to store a wide variety of data types and volumes.

- Cosmos DB
- MySQL
- MariaDB
- PostgreSQL
- SQL Database
- SQL Server on Azure Virtual Machines
- Redis (Azure Cache for Redis)
- Database Migration Service
- Synapse Analytics

![](https://i.imgur.com/8FUIKST.png){: .full}

![](https://i.imgur.com/MpyM48M.png){: .full}

![](https://i.imgur.com/JGCCorr.png){: .full}

[Learn Azure Databases Services Definitions from Microsoft Document...](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-fundamentals/tour-of-azure-services)

### Internet of Thing (IoT)

Connect to large set of your IOT assets to monitor and manage. Analyze their data as well when it arrives from sensors.

- IoT **Central** ( SaaS to connect, monitor and manage)
- Azure IoT **Hub** ( to connect and communication )
- IoT **Edge** ( built-in models to be pushed to IoT devices )

![](https://i.imgur.com/SOyLVnr.png)

[Learn IoT options definitions from Microsoft Document...](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-fundamentals/tour-of-azure-services)

### Storage

Azure provides four main types of storage services.

{: .notice--success}
🏆 **Pro Tip** \
\
Remember this sentence "**B**ig **Q**uality **T**ask **F**orce".
**B** = **B**lob storage
**Q** = **Q**ueue storage
**T** = **T**able storage
**F** = **F**ile storage

![](https://i.imgur.com/8PMKffl.png){: .full}

![](https://i.imgur.com/Of6L8Up.png){: .full}

{: .notice--info}
🏆 **Pro Tip** \
\
**Cosmos DB vs Table Storage** \
**Cosmos DB** has 99.999% SLA, supports **many NoSQL APIs**, variations of **NoSQL storage** – Document, Graph, Key-Value and Tabular. However, **Table Storage** is just for NoSQL documents and cheaper than Cosmos DB.

Azure Storage Benefits are:

- **D** = **D**urable
- **M** = **M**anaged
- **A** = **A**ccessible
- **S** = **S**ecure
- **S** = **S**calable

{: .notice--success}
🏆 **Pro Tip** \
\
Remember this sentence "**D**ouble **MASS**".

[Learn Azure Storage Services Definitions from Microsoft Document...](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-fundamentals/tour-of-azure-services)

### Big Data

![](https://i.imgur.com/bHD4dG7.png){: .full}

Run analytics on massive scale for Large volume of data using open source clusters. And make decision based on the complex queries.

![](https://i.imgur.com/NFOx4zv.png){: .full}

- **Synapse** Analytics (Azure Synapse Analytics)
- **HDInsight** (Azure HDInsight )
- **Databricks** (Azure Databricks)

{: .notice--success}
🏆 **Pro Tip** \
\
3 **V**'s of Big data is **variety, velocity, and volume**.

### Artificial Intelligence

![](https://i.imgur.com/ORIQHIA.png){: .full}

Use existing data to focus future behaviors using AI. Use Machine learning to build train and deploy model to cloud.

Artificial Intelligence **(AI)** 🅰️ \
For example, when you shop online, machine learning helps recommend other products you might like based on what you've purchased. Or when your credit card is swiped, machine learning compares the transaction to a database of transactions and helps detect fraud. And when your robot vacuum cleaner vacuums a room, machine learning helps it decide whether the job is done.

- Machine Learning **Service**
- Machine Learning **Studio**
- **Cognitive** Services
  - Vision
  - Speech
  - Knowledge mapping
  - Bing Search
  - Natural Language processing

### Networking

`Linking` compute resources and providing `access` to applications is the key function of Azure networking.

Here are some examples of networking services in Azure.

{: .notice--success}
🏆 **Pro Tip** \
\
Remember this sentence "3 **V**irus **LANDED** **C**apture **T**he **F**lag".
**V** = **V**irtual Network
**V** = **V**PN Gateway
**V** = **V**irtual WAN
**L** = **L**oad Balancer
**A** = **A**pplication Gateway
**N** = **N**etwork Watcher
**D** = **D**DoS Protection
**E** = **E**xpressRoute
**D** = **D**NS
**C** = **C**ontent Delivery Network (CDN)
**T** = **T**raffic Manager
**F** = **F**irewall

![](https://i.imgur.com/SUWVl2i.png){: .full}

[Learn Azure Networking Services Definitions from Microsoft Document...](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-fundamentals/tour-of-azure-services)

### DevOps

Create build and release pipe line for CI/CD

- DevOps
- DevTest Labs

![](https://i.imgur.com/I5oneaj.png){: .full}

### Compute Services

Here are some examples of compute services in Azure.

{: .notice--success}
🏆 **Pro Tip** \
\
Remember this sentence "**V**ery **S**pecial **K**ids **C**an join **B**order **S**ecurity **F**orce".
**V** = **V**irtual Machine
**S** = **S**cale Sets ( Virtual Machine Scale Sets)
**K** = **K**ubernetes Service
**C** = **C**ontainer Instances
**B** = **B**atch
**S** = **S**ervice Fabric
**F** = **F**unctions

![](https://i.imgur.com/fqNKbfg.png){: .full}

[Learn Azure Compute Services Definitions from Microsoft Document...](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-fundamentals/tour-of-azure-services)

### Web

Azure includes `first-class` support to build and host `web apps` and HTTP-based `web services`. The following Azure services are focused on web hosting.

{: .notice--success}
🏆 **Pro Tip** \
\
Remember this sentence "**C**alm **ASANA**".
**C** = **C**ognitive Search
**A** = **A**pp Service
**S** = **S**ignalR Service
**A** = **A**pps feature of Azure App Service
**N** = **N**otification Hubs
**A** = **A**PI Management

![](https://i.imgur.com/RNcyNzi.png){: .full}

![](https://i.imgur.com/EE22HsT.png){: .full}

[Learn Azure Web hosting options definitions from Microsoft Document...](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-fundamentals/tour-of-azure-services)

### Mobile

With Azure, developers can create mobile back-end services for iOS, Android, and Windows apps quickly and easily.

{: .notice--success}
🏆 **Pro Tip** \
\
Remember this sentence:
**ABCO** "**A**ssociation of **B**usiness **C**onsulting **O**rganizations".
**A** = **A**utoscaling to match business needs
**B** = **B**roadcasting push notifications.
**C** = **C**onnectivity to on-premises data.
**O** = **O**ffline data synchronization.

![](https://i.imgur.com/a1MNofY.png){: .full}

[Learn Azure Mobile Services Definitions from Microsoft Document...](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-fundamentals/tour-of-azure-services)

## Get started with Azure accounts

### What is the Azure account?

To create and use Azure services, you need an Azure subscription. When you create an **Azure account** then Azure subscription will be created automatically for you. You're free to create additional subscriptions. Next, you can start creating Azure resources within each subscription.

![](https://imgur.com/H2tQko7.png){: .full}

![](https://imgur.com/jEoLDBr.png){: .full}

{: .notice--success}
🏆 **Pro Tip** \
\
You **don't need to purchase an Azure account** before you can use any Azure resources. Because, You can use a free Azure account or a Microsoft Learn sandbox to create resources.

![](https://imgur.com/fV0lcsb.png){: .full}

### What is the Azure free account?

The Azure free account includes:

- Free access to popular Azure `products` for `12 months`.
- A `credit` to spend for the `first 30 days`.
- Access to more than `25 products` that are `always free`.

### What is the Learn sandbox?

Maximum **Learn** exercises use a technology called the **sandbox**, which creates a `temporary subscription` that's added to your Azure account. Learn automatically cleans up the temporary resources for you after you've completed the module. The sandbox is the preferred method to use though, because it allows you to create and test Azure resources at no cost to you.

## Azure fundamentals facts

- Three cloud computing deployment models are public cloud, private cloud, and hybrid cloud.
- Cloud computing typically decreases your operating expenses.
- IaaS, PaaS, and SaaS are examples of cloud computing service models.
- Cloud computing resources are **NOT** usually limited to specific geographic regions.

## References

- [Introduction to azure fundamentals by Microsoft online free training](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-fundamentals/)

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

{: .notice--info}
I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

{: .notice--warning}
Your bright future is awaiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)
