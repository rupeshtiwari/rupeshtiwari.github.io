---
title: How to manage DEV, QA and PROD in Azure Cloud
date: 2022-07-23 00:00 +0000
description: How to manage DEV, QA and PROD environments in Azure Cloud? You end-up creating many resources and now how would you organize them for QA, DEV, UAT environments? Let's talk about the same in this article.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/qxXxmBa.png
header:
  image: https://i.imgur.com/zipiW93.png
  teaser: https://i.imgur.com/qxXxmBa.png
  og_image: https://i.imgur.com/qxXxmBa.png
tags:
  - webdev
  - tutorial
  - beginners
  - azure
---

> How to manage DEV, QA and PROD environments in Azure Cloud? You end-up creating many resources and now how would you organize them for QA, DEV, UAT environments? Let's talk about the same in this article.

In Azure we create resource like web app, azure functions. Then we group them in resource groups. In order to manage pricing and bill we create azure subscriptions. We put Azure resource groups under subscription. So before I keep on going let me explain few concepts.

## What is Azure Resource?

An Azure Service instance is called a resource. If you create a `VNet` then it is called a resource.

## What is Azure Resource Group?

Suppose you want to create a Web App, Cosmos DB, Azure Function and a Queue in Azure Storage that will serve one website that you have made for your company. You should create a resource group that is a logical container for all of the resources that I listed above. You can give the name as RG-DEV. So you may create DEV, QA, UAT, PROD resource groups.

## Azure Subscription

Subscription in Azure is for billing purposes. Per subscription you will have one Billing Administrator who is responsible for paying monthly bills of Azure resource usages.

Under subscription you can create Resource Groups.

## Why do you want to manage subscriptions?

If you are working in a large company then you will have lots of resources then in a single tenant. Then you can use resource groups to organize your resources. Similarly you will create many subscriptions to control billing or resources. Like you may create DEV, QA, UAT and PROD subscriptions. However, how would you apply governance and compliances to these subscriptions? Azure Management Group helps us to improve governance and compliance for organizations with many subscriptions.

## Management Groups

Microsoft has announced the general availability of Azure management groups in 2021, which provide the ability to organize and apply governance to all subscriptions in a management group. You can use Policies, `RBAC` are the tools that you will use when you create Management Groups.

Amazon has [AWS Organizations](https://aws.amazon.com/about-aws/whats-new/2017/02/aws-organizations-now-generally-available/) , Google has the [Resource Manager hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy) which is the same as Azure Management Groups.

Organizations can now apply governance and compliance rules at all levels within the management group, which consequently get inherited by all subscriptions in the hierarchy under the specific group. One of these is setting [Azure policies](https://docs.microsoft.com/en-us/azure/azure-policy/azure-policy-introduction), which enforce [rules and effects](https://docs.microsoft.com/en-us/azure/azure-policy/json-samples) on Azure resources, like permitting only a subset of `SKUs` for virtual machines or conforming to a naming standard. Another option of Azure management groups is implementing access management over multiple subscriptions using [role-based access control (RBAC)](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview).

Policies and rules defined in a management group cannot be overridden at a lower level in the hierarchy, therefore giving strict guidance over the subscriptions. Some essential restrictions should be adhered to when working with Azure management groups:

- A single directory supports a maximum of 10000 management groups.
- The management group tree can support up to eight levels of depth, which includes the root level and subscriptions level.
- A management group can have multiple children; however, subscriptions and management groups can only have a single parent.
- The subscriptions and management groups are all part of a single hierarchy in each directory.
- Custom RBAC roles are [currently](https://feedback.azure.com/forums/911473-azure-management-groups) not supported by management groups.

![](https://i.imgur.com/6Nlr47u.png){: .full}

Implementation of Azure management groups starts with [creating a management group](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management-groups-create), for which Benoit Hamet created a [step-by-step overview](http://blog.hametbenoit.info/2018/08/01/azure-azure-management-groups-is-now-available/). The implementation process will construct the root management group and then move all existing subscriptions here. After creation of a management group, the directory administrator must [elevate](https://docs.microsoft.com/en-us/azure/role-based-access-control/elevate-access-global-admin) themselves as the owner of the group. Subsequently, additional management groups can be added to build up the complete hierarchy tree. To place a group on [another level in the hierarchy](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management-groups-manage#move-management-groups-in-the-hierarchy) it needs to be made a child of another management group. The same goes for [subscriptions](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management-groups-manage#move-subscriptions-in-the-hierarchy), by moving these between the groups. Accordingly, repositioning subscriptions or management groups within the hierarchy allows the re-use of governance controls, as these will then inherit rules and policies of the parent management group.

Management groups helps us to improve:
Access control among various subscriptions
Improve security
Implement governance
Improve compliance by applying company department wise policies
Better visibility and maintainability of cloud consumptions

## Account to Subscription Relationships

![](https://i.imgur.com/sMc60NX.png){: .full}

## Enterprise Hierarchy Examples: Creating DEV QA and PROD in Azure Cloud

Suppose you have a company where you develop websites and LOB applications for your finance service.

You will create 2 Management groups: one for Finance and another for the IT department. I would call them as departments. I will then create some high level policies at this level which will be inherited by all subscriptions and resources under them.

Next for the finance department I will create 1 Account owner and administrator.

![](https://i.imgur.com/L4iDMBR.png){: .full}

Next, I will create 2 Subscriptions one for DEV and other for TEST. All the resources that we will deploy for development I would put them in DEV subscription. Next all the resources that QA will test I will put them under TEST subscription.

For production, I will create a separate department called IT department to put in some extra governance and compliances. Create a new subscription for PROD resources. Then I will create a PROD subscription to manage its billing separately. Finally, I will create a resource group for PROD and put resources under them.

Let me know what you think about this diagram in the comment box.




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
