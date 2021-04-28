---
title: What is Azure Resource Manager or ARM?
date: 2022-03-03 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/rFW3EiY.png
header:
  image: https://i.imgur.com/3PR1wRa.png
  teaser: https://i.imgur.com/rFW3EiY.png
  og_image: https://i.imgur.com/rFW3EiY.png
tags:
  - azure
  - webdev
  - beginners
  - az304
---

> Did you know you can create and deploy Azure resources using JSON template? Did you also know that you can enforce business compliances on your resources? All of this can be done using Azure Resource Manager (ARM). Read this article to learn everything important about ARM. You can write code to deploy infrastructure using ARM template called Infrastructure-as-Code.

## What is ARM?

Azure Resource Manager(ARM) is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure account. You use management features, like access control, locks, and tags, to secure and organize your resources after deployment.

## ARM is central API for Azure resources

When a user sends a request from any of the Azure tools, APIs, or SDKs, Resource Manager receives the request. It authenticates and authorizes the request. Resource Manager sends the request to the Azure service, which takes the requested action. Because all requests are handled through the same API, you see consistent results and capabilities in all the different tools.

The following image shows the role Azure Resource Manager plays in handling Azure requests.

![](https://imgur.com/H2jU5kP.png){: .full}

{: .notice--success}
🏆 **ProTip** \
\
 ARM new functionality initially released through **APIs** will be represented in the **portal** within **180** days of initial release.

## What is Resource in Azure?

A manageable item that is available through Azure. `Virtual machines, storage accounts, web apps, databases, and virtual networks` are examples of resources. `Resource groups, subscriptions, management groups, and tags` are also examples of resources.

{: .notice--info}
<i class="fa fa-info-circle"></i> **Note** \
\
**What do you mean by Azure Management and when we say Azure manages resources etc.?**
You use Azure Management Features, like **access control**, **locks**, and **tags**, to secure and organize your resources after deployment. If you create Resource group then you can manage all of the resources that shares the same compliances.
Check my [Azure Governance article](https://rupeshtiwari.com/design-azure-governance-for-microsoft-azure-solutions-architect/) to learn more about it.

## What is Resource Group in Azure?

A `container` that holds related `resources` for an Azure solution. The resource group includes those resources that you want to manage as a group. You decide which resources belong in a resource group based on what makes the most sense for your organization.
Important factors to put resource in Resource Group:

### Group resources by lifecycle

All the resources in your resource group should share the same **lifecycle**. You deploy, update, and delete them together.

{: .notice--info}
<i class="fa fa-info-circle"></i> **Note** \
\
 If one resource, such as a server, needs to exist on a different deployment cycle it should be in another resource group.

### Resource can exist in only one group.

Each resource can exist in only one resource group. Same resource instance can not belong to multiple resource groups.

### Resource locations can be different

However, the resources in a resource group can be located in different regions than the resource group.

### Resource can change groups

You can move a resource from one resource group to another group.

### Resource group must have location

When creating a resource group, you need to provide a location.

{: .notice--success}
🏆 **ProTip** \
\
**"Why does a resource group need a location?"** And, if the resources can have different locations than the resource group, why does the resource group location matter at all?" The resource group stores metadata about the resources. When you specify a location for the resource group, you're specifying where that metadata is stored. For compliance reasons, you may need to ensure that your data is stored in a particular region.
See [Resource groups](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview#resource-groups).

{: .notice--warning}
<i class="fas fa-exclamation-triangle"></i> **Warning** \
\
 If the resource group's region is temporarily unavailable, you can't update resources in the resource group because the metadata is unavailable. The resources in other regions will still function as expected, but you can't update them.

### Resource group is good boundary for security and compliances

A resource group can be used to scope access control for administrative actions. To manage a resource group, you can assign [Azure Policies](https://docs.microsoft.com/en-us/azure/governance/policy/overview), [Azure roles](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal), or [resource locks](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources). 7. You can [apply tags](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources) to a resource group. The resources in the resource group don't inherit those tags.

### Resource group can be Tagged

You can [apply tags](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources) to a resource group.

{: .notice--info}
<i class="fa fa-info-circle"></i> **Note** \
\
 The resources in the resource group don't inherit those tags.

### Resources can communication across groups

A resource can connect to resources in other resource groups.

{: .notice--success}
🏆 **ProTip** \
\
 You can have a web app that connects to a database in a different resource group. These two resources are related but don't share the same lifecycle however they can connect to each other.

### Resource is composed in group

When you delete a resource group, all resources in the resource group are also deleted.

### 800 Resources in a group

You can deploy up to 800 instances of a resource type in each resource group.

### Resource can exist outside of group

Some resources can exist outside of a resource group. These resources are deployed to the [subscription](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/deploy-to-subscription), [management group](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/deploy-to-management-group), or [tenant](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/deploy-to-tenant). Only specific resource types are supported at these scopes.

{: .notice--success}
🏆 **ProTip** \
\
ARM **Never taken down for maintenance** activities. ARM REST API are distributed across region and Availability Zones/regions.

## References

1. Microsoft ARM [Learn More](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview#understand-scope)
2. ARM Template [Infrastructure-as-Code Demo](https://azure.microsoft.com/en-us/resources/videos/build-2019-what-s-new-with-azure-resource-manager-arm/)

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

{: .notice--info}
I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

{: .notice--warning}
Your bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)
