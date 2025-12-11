---
title: Introduction to Multi Cloud and Strategy
date: 2012-12-10 00:00 +0000
description: Cloud itself is complex so why are customers bothering about multi-cloud at all? Why not just take google cloud and deploy all of your workload and be happy? Well it's just like you should not put all eggs in one basket.Let's explore Multi-Cloud in this article. According to a VMWare Customer survey 2 out of 3 customers are using multi-cloud so it is very important for you to be aware of the challenges and strategies of multi-cloud.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/2su9F0K.png
header:
  image: https://i.imgur.com/2su9F0K.png
  teaser: https://i.imgur.com/2su9F0K.png
  og_image: https://i.imgur.com/2su9F0K.png
tags:
  - webdev
  - tutorial
  - beginners
  - cloud
---

> Cloud itself is complex so why are customers bothering about multi-cloud at all? Why not just take google cloud and deploy all of your workload and be happy? Well it's just like you should not put all eggs in one basket.Let's explore Multi-Cloud in this article. According to a VMWare Customer survey 2 out of 3 customers are using multi-cloud so it is very important for you to be aware of the challenges and strategies of multi-cloud.

Doing Multi-Cloud is possible but not easy and comes with some tradeoffs. While we are going towards microservices architecture each microservice can use any kind of technology stack. Example one service can use raven db then another service can use Microsoft SQL server. So if you have that kind of workload in your architecture that means you are already investing in multiple database vendors in your technology portfolio. Similarly you may create your workloads in multiple cloud providers such as Microsoft, Google or Amazon and create multi-cloud situations. In this article you will learn what is multi-cloud, why you do multi-cloud and what is the multi-cloud strategy? So stay tuned and keep scrolling.

## Who is the cloud provider?

Cloud Provider is a company who provides online delivery of IT services via internet on an on-demand basis and pay as you go model. Example of cloud providers are:

- Google Cloud
- Amazon AWS
- Microsoft Azure
- IBM Cloud etc.

## What is Multi-Cloud?

If in your technology portfolio you are using multiple cloud providers then you are in a multi-cloud scenario. If you extend the multiple database vendor idea to the cloud  and suppose you have one service already running in AWS Amazon. Additionally, you are exploring using devops and web app development in Microsoft Azure. Also you are planning to use the Kubernetes service that you want to host on Google Kubernete Services. Then you become multi-cloud. Or you want to set up your workload in AWS Amazon and create a Disaster recovery site in Microsoft Azure. Then you are in a multi-cloud scenario.

## Why are companies doing Multi-Cloud?

Sometimes by accident you endup in a multi-cloud scenario. Example you had some old service running in Amazon AWS and for your new requirement you somehow got better deal cost saving while you chose Microsoft Azure. Sometimes you plan and go multi-cloud intentionally by applying proper strategy.

Below are reasons your company want to go for Multi-Cloud:

- Highly Available: You want to hit the big five 9’s SLA 99.999% and make highly available architecture
- Business Continuity and Disaster Recovery: You want to create very stable disaster recovery (DR) by using different cloud providers to set up DR sites.
- Lower Latency & High Performance: Enabling better user experience, deploy your application to different cloud providers in different locations to provide lower latency and better performance.
- Vendor-lock in: No company wants to lock down with one service provider in case if that is down or increased price then you should have some backup or different cloud provider to continue.
- Pricing benefits: To save cost for some services if Microsoft is giving a huge discount then you will tend to use it.
- Acquisition: Suppose your company is using Microsoft Azure and your company buys another new company  which is using Google Cloud. So now you are in a Multi-Cloud situation.
- Best Service: Suppose if some cloud provider is giving better AI/ML service compared to other clouds then  your CTO will decide to go for it. Some other cloud provider is giving a wider range to select virtual machines then you will choose that cloud provider. Good Data Services like Big Data in Google Cloud then you choose that. Better sharepoint support in Microsoft you choose Azure. Nice support of virtual machines in Amazon AWS you choose EC2 instances from AWS.

## What are the Challenges in Multi-Cloud?

You have to find the talent of your team for multi-cloud. You can’t leverage the existing skills,tools and utilities as-is when you go multi-cloud. You have to think of which cloud provider will be the primary for authentication/authorization, how will you secure and govern workloads across the cloud.

The other major areas of challenges are:

- Workload Portability: You write you app once and run anywhere that is very difficult to achieve  like if you are using low level services like functions, logging
- Workflow Portability: Deployment, security, networking these are doable. When you standardise on tools like terraform you can provision workloads across multiple clouds pretty easily.
- Data Portability: Data is being able to move from one cloud provider to other providers. If you want to move 1 GB data it's okay but if you want to move 100TB then it will take much time and cost a lot of money.
- Traffic Portability: If you have geographically dispersed users then you can route them to the nearest cloud provider that could service them and that’s pretty reasonable.

In practice workflow and traffic portability is mostly easily achievable compared to Workload and Data probabilities. However, you must acknowledge that data and workload portability is a myth and it needs special care and engineering.

If you don’t optimize workflow portability upfront or at the beginning stage then it can become very difficult to manage multi-cloud.

Lots of startup companies who are cloud native they get great offer free services from one cloud provider and they completely develop the entire workload and business in that cloud provider. Once companies grow and start buying new small companies, let say they are using different cloud providers then it becomes very difficult to manage security, devOps, app development to manage and therefore, nowadays multi-cloud strategy is very important. Your company should be prepared to be multi-cloud ready and follow some guidelines and principles even though you do not want to do multi-cloud, still follow guidelines like optimize workflow using standard tools like terraform, use kubernetes that can run in any cloud providers etc. So there are many guidelines that we will discuss in this article.

## What is a private cloud?

If you have your  data-center and you have virtualized your own data-center using some software like VMWare or Microsoft Hypervisor then it is called a private cloud. The recommended way to create a private cloud is to virtualize computers, storage and network and create your own Software Defined Data Center (SDDC). With this foundational setup you can simplify  automation, unify management and achieve the agility required to drive the innovation.

![](https://i.imgur.com/9R3kh0n.png){: .full}

## How to Create a Multi-Cloud Strategy using VMware? 

If you have created a private cloud using VmWare or any vendor SDDC then it is easily portable to any cloud provider. Let’s assume you have Vmware private cloud on-premises. Then In Amazon AWS the VmWare Cloud SDDC support is there which is running on AWS hardware delivered as a service. That means you will have true cross cloud portability between your private cloud to the AWS public cloud and you will also leverage the existing team’s skills and tools.

Suppose you already have workloads in Azure or Google Cloud then to connect and protect workload and data. Vmware Networking and security platform is a foundational cross-cloud platform that enables security and complaints to protect your data and workload.

In order to discover, provision and monitor workload in a cross-cloud environment can be done by Cloud Management Platform provided by Vmware.

The combination of Cloud Management and Networking & Security platform treat all the clouds as a single virtual cloud. 
![](https://i.imgur.com/PifKobk.png){: .full}

Using this single virtual cloud what are the things you can do? Well you will be able to create IAAS workloads up and running immediately. You can also create an entire environment-as-service like creating VMs, required networking and security. You can create PaaS like un-structured solutions by creating containers using kubernetes stacks. Or you can create structured PaaS workloads by using Cloud Foundry Service where all the necessary cloud native dependencies are packaged into a single solution.

So with this strategy you get a self-service portal which can be used to provision IAAS workloads and also provides API support for any kind of PAAS workload use. By building this one virtual cloud stack you can host both 2nd platform apps using traditional n-tier architecture and 3rd platform apps like cloud native applications. You can support all development models like water-fall, Agile and use your devops.

VMWare has 5 core building blocks to support cross-cloud services for all applications

- App Platform to build and deploy cloud native apps
- Cloud Infrastructure to operate and run your cross-cloud apps
- Cloud Management for monitoring and managing cost across different clouds
- Security & Networking to connect and secure all of the apps
- Digital Workspace & Edge to empower your edge related applications

Which supports below cloud providers including private cloud

- AWS
- Azure
- Google Cloud
- IBM Cloud
- Oracle Cloud
- Alibaba Cloud
- Sovereign Cloud
- Telco Cloud and
- Edge

## What is Cloud Foundry?

Over cloud if you are building your application on Amazon AWS by using lambda function then you are in vendor lock in situation. You will not be able to run that same lambda function in Google Cloud or Microsoft Azure cloud. Therefore, nowadays cloud platform agnostic solutions are being discovered. Cloud Foundry is one of them. So you can write your next application in one place and run it in any cloud provider using Cloud Foundry.

“[Cloud Foundry](https://www.cloudfoundry.org/) is an [open source](https://susedefines.suse.com/definition/open-source/) cloud Platform-as-a-Service ([PaaS](https://susedefines.suse.com/definition/platform-as-a-service/)) on which developers can build, deploy, run and scale applications.”

You can build your next application on cloud foundry and run it in any cloud providers such as Amazon, Google or Microsoft). Cloud Foundry is available as a stand-alone software package. You can deploy Cloud Foundry on AWS, AZure or Google Cloud or even on Vmware’s vSphere.

Cloud Foundry is a structured Platform-as-Service that provides necessary cloud native apps capabilities that are already packaged into a single solution.

Cloud Foundry includes:

- Authentication
- Routing
- Application Lifecycle
- Application Storage and execution
- Service Brokers
- Messaging
- Metrics and Logging

Cloud Foundry is licensed under Apache 2.0 and supports Java, Node.js, Go, PHP, Python, Ruby, .NET Core and Staticfile. If you are using Cloud Foundry then you are out of vendor lock-in. Developers can code their applications, then command Cloud Foundry to push it into the production environment. Its container-based architecture runs your applications in any programming language over a variety of cloud service providers, allowing developers to use the cloud service that suits the workload, or to move workloads as needed without changing the application code.

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/5fBatz9.png){: .full}
