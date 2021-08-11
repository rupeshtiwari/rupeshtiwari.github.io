---
title: Describe core Azure architecture components
date: 2022-05-07 00:00 +0000
description: Can you explain concepts and terminology for the core Azure architecture components? Can you describe the benefits and usages of Azure subscriptions and management groups? Have you check the benefits of Azure resources, resource groups, and Azure Resource Manager(ARM)? Did you know how achieve high availability using Azure regions, region pairs, and availability zones? This is 3rd article on Azure Fundamentals part 1- Describe core Azure concepts.
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

> Can you explain concepts and terminology for the **core Azure architecture components**? Can you describe the benefits and usages of Azure **subscriptions** and **management groups**? Have you check the benefits of Azure **resources**, **resource groups**, and **Azure Resource Manager**(ARM)? Did you know how achieve high availability using Azure **regions, region pairs, and availability zones**? This is the 3rd article on "**Azure Fundamentals part 1: Describe core Azure concepts**".

![](https://i.imgur.com/bJhy0o9.png)

## Azure resources structure organization

![](https://i.imgur.com/13XFueb.png)

Azure organizes structure for resources in four levels: management groups, subscriptions, resource groups, and resources.

👇 The top-down hierarchy of organization for these levels.

![](https://imgur.com/jEoLDBr.png){: .full}

### Resources

**Resources**: Resources are `instances of services` that you create, like virtual machines(VMs), storage accounts, web apps, virtual networks or SQL databases. An Azure resource is a manageable item that's available through Azure.

### Resource groups

**Resource groups**: Resources are combined into resource groups, which act as a `logical container` into which Azure resources like web apps, databases, and storage accounts are deployed and managed.

### Subscriptions

**Subscriptions**: A subscription `groups together user accounts and the resources` that have been created by those user accounts. For each subscription, there are limits or quotas on the amount of resources that you can create and use. Organizations can use subscriptions to manage costs and the resources that are created by users, teams, or projects.

### Management groups

**Management groups**: These groups help you `manage access, policy, and compliance` for multiple subscriptions. All subscriptions in a management group automatically inherit the conditions applied to the management group.

## Azure subscriptions and management groups

In order to start with Azure you must create at-least one subscription with Azure.

### Azure subscriptions

Using Azure requires an Azure subscription. A subscription provides you with **authenticated and authorized** access to Azure products and services. It also allows you to **provision** resources. An Azure subscription is a **logical unit** of Azure services that links to an Azure account, which is an identity in Azure Active Directory (Azure AD) or in a directory that Azure AD trusts.

![](https://imgur.com/EfIRY0g.png){: .full}

There are two types of subscription boundaries that you can use:

- **Billing boundary**: You can create multiple subscriptions for different types of `billing requirements`. Azure generates separate billing reports and invoices for each subscription so that you can organize and manage costs.

- **Access control boundary**: Azure applies `access-management policies` at the subscription level, and you can create separate subscriptions to reflect different organizational structures. An example within a business, you have different departments to which you apply distinct Azure subscription `policies`.

#### Create additional Azure subscriptions

You might want to create additional subscriptions for **resource** or **billing** management purposes. For example, you might choose to create additional subscriptions to separate:

- **Environments:** Set up separate environments for `development` and `testing`, `security`, or to isolate data for `compliance` reasons. This design is particularly useful because resource `access control` occurs at the subscription level.

- **Organizational structures:** You could limit a team to `lower-cost` resources, while allowing the IT department a full range. This design allows you to `manage and control access` to the resources that users provision within each subscription.

- **Billing:** Because costs are first aggregated at the subscription level, you might want to create subscriptions to manage and track costs based on your needs. For instance, you might want to create one subscription for your `production` workloads and another subscription for your `development` and `testing` workloads.

- **Subscription limits:** Subscriptions are bound to some hard limitations. For example, the maximum number of Azure `ExpressRoute` circuits per subscription is `10`. If there's a need to go over those limits in particular scenarios, you might need additional subscriptions.

#### Customize billing to meet your needs

If you have multiple subscriptions, you can organize them into **invoice sections**. Each invoice section is a line item on the invoice that shows the charges incurred that month. For example, you might need a single invoice for your organization but want to organize charges by department, team, or project.

Depending on your needs, you can set up multiple invoices within the same billing account. To do this, create additional **billing profiles**. Each billing profile has its own monthly invoice and payment method.

The following diagram shows an overview of how billing is structured.

![](https://imgur.com/TceedRv.png){: .full}

### Azure management groups

You organize subscriptions into containers called management groups and apply your **governance conditions** to the management groups. All subscriptions within a management group automatically inherit the conditions applied to the management group and must trust the same Azure AD tenant.

For example, you can apply policies to a management group that limits the regions available for VM creation. This policy would be applied to all management groups, subscriptions, and resources under that management group by only allowing VMs to be created in that region.

#### Hierarchy of management groups and subscriptions

Create structure of management groups and subscriptions to organize your resources into a hierarchy for unified policy and access management. The following diagram shows an example of creating a hierarchy for governance by using management groups.

{: .notice--success}
🏆 **Pro Tip** \
\
☑️ You can create a hierarchy that **applies a policy**.
☑️ You can use management groups is to provide user **access to multiple subscriptions**.

![](https://imgur.com/8rz4kAp.png){: .full}

You can create a hierarchy that applies a policy. For example, you could limit VM locations to the US West Region in a group called Production. This policy will inherit onto all the Enterprise Agreement subscriptions that are descendants of that management group and will apply to all VMs under those subscriptions. This security policy can't be altered by the resource or subscription owner, which allows for improved governance.

Another scenario where you would use management groups is to provide user access to multiple subscriptions. By moving multiple subscriptions under that management group, you can create one role-based access control (RBAC) assignment on the management group, which will inherit that access to all the subscriptions. One assignment on the management group can enable users to have access to everything they need instead of scripting RBAC over different subscriptions.

#### Important facts about management groups

- **10,000** management groups can be supported in a single directory.
- A management group tree can support up to **six levels of depth**. This limit doesn't include the root level or the subscription level.
- Each management group and subscription can support only one parent.
- Each management group can have many children.
- All subscriptions and management groups are within a single hierarchy in each directory.

## Azure resources and Azure Resource Manager

After you've created a subscription for your company, you're ready to start creating resources and storing them in resource groups.

- **Resource**: A manageable item that's available through Azure. Virtual machines (VMs), storage accounts, web apps, databases, and virtual networks are examples of resources.
- **Resource group**: A container that holds related resources for an Azure solution. The resource group includes resources that you want to manage as a group. You decide which resources belong in a resource group based on what makes the most sense for your organization.

### Azure resource groups

Resource groups are a fundamental element of the Azure platform. A resource group is a logical container for resources deployed on Azure. These resources are anything you create in an Azure subscription like VMs, Azure Application Gateway instances, and Azure Cosmos DB instances. All resources must be in a resource group, and a resource can only be a member of a single resource group. Many resources can be moved between resource groups with some services having specific limitations or requirements to move. Resource groups can't be nested. Before any resource can be provisioned, you need a resource group for it to be placed in.

![resource group is a container for resources](https://i.imgur.com/AEfN0eC.png){: .full}

#### Logical grouping

Resource groups exist to help manage and organize your Azure resources. By placing resources of similar usage, type, or location in a resource group, you can provide order and organization to resources you create in Azure. Logical grouping is the aspect that you're most interested in here, because there's a lot of disorder among our resources.

![Conceptual image showing a resource group box with a function, VM, database, and app included.](https://i.imgur.com/ZRXeJOu.png)

#### Life cycle

If you delete a resource group, all resources contained within it are also deleted. Organizing resources by life cycle can be useful in nonproduction environments, where you might try an experiment and then dispose of it. Resource groups make it easy to remove a set of resources all at once.

#### Authorization

Resource groups are also a scope for applying role-based access control (RBAC) permissions. By applying RBAC permissions to a resource group, you can ease administration and limit access to allow only what's needed.

![using RBAC to give required access to specific users](https://i.imgur.com/T0UyegM.png){: .full}

### Azure Resource Manager

Azure Resource Manager is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure account. You use management features like access control, locks, and tags to secure and organize your resources after deployment.

When a user sends a request from any of the Azure tools, APIs, or SDKs, Resource Manager receives the request. It authenticates and authorizes the request. Resource Manager sends the request to the Azure service, which takes the requested action. Because all requests are handled through the same API, you see consistent results and capabilities in all the different tools.

The following image shows the role Resource Manager plays in handling Azure requests.

![Diagram showing a Resource Manager request model.](https://i.imgur.com/2Wjh42D.jpg){: .full}

{: .notice--success}
🏆 **Pro Tip** \
\
All capabilities that are available in the Azure portal are also available through **PowerShell, the Azure CLI, REST APIs, and client SDKs**. Functionality initially released through APIs will be represented in the portal **within 180 days** of initial release.

#### The benefits of using Resource Manager

With Resource Manager, you can:

- Manage your infrastructure through declarative templates rather than scripts. A Resource Manager template is a JSON file that defines what you want to deploy to Azure.
- Deploy, manage, and monitor all the resources for your solution as a group, rather than handling these resources individually.
- Redeploy your solution throughout the development life cycle and have confidence your resources are deployed in a consistent state.
- Define the dependencies between resources so they're deployed in the correct order.
- Apply access control to all services because RBAC is natively integrated into the management platform.
- Apply tags to resources to logically organize all the resources in your subscription.
- Clarify your organization's billing by viewing costs for a group of resources that share the same tag.

## Azure regions, availability zones, and region pairs

Resources are created in regions, which are different geographical locations around the globe that contain Azure datacenters.

Azure is made up of datacenters located around the globe. When you use a service or create a resource such as a SQL database or virtual machine (VM), you're using physical equipment in one or more of these locations. Some of these regions offer **availability zones**, which are _different Azure datacenters within that region_.

![](https://i.imgur.com/5yn9L3w.png){: .full}

### Azure Regions

A region is a geographical area on the planet that contains at least one but potentially multiple datacenters that are nearby and networked together with a low-latency network. A few examples of regions are West US, Canada Central, West Europe, Australia East, and Japan West.

{: .notice--info}
<i class="fa fa-info-circle"></i> **Important** \
\
Some services or VM features are only available in certain regions, such as specific VM sizes or storage types. There are also some global Azure services that don't require you to select a particular region, such as Azure Active Directory, Azure Traffic Manager, and Azure DNS.

Here's a view of all the available regions as of June 2020.

![](https://imgur.com/OSccfDf.png){: .full}

#### Why are regions important?

Azure has more global regions than any other cloud provider. These regions give you the flexibility to bring applications closer to your users no matter where they are. Global regions provide better scalability and redundancy. They also preserve data residency for your services.

{: .notice--success}
🏆 **Pro Tip** \
\
Regions are what you use to identify the location for your resources.

#### Special Azure regions

Azure has specialized regions that you might want to use when you build out your applications for compliance or legal purposes. A few examples include:

- **US DoD Central, US Gov Virginia, US Gov Iowa and more:** These regions are physical and logical network-isolated instances of Azure for U.S. government agencies and partners. These datacenters are operated by screened U.S. personnel and include additional compliance certifications.
- **China East, China North, and more:** These regions are available through a unique partnership between Microsoft and 21Vianet, whereby Microsoft doesn't directly maintain the datacenters.

### Azure availability zones

You want to ensure your services and data are redundant so you can protect your information in case of failure.

#### What is an availability zone?

Availability zones are physically separate datacenters within an Azure region. Each availability zone is made up of one or more datacenters equipped with independent power, cooling, and networking. An availability zone is set up to be an _isolation boundary_. If one zone goes down, the other continues working. Availability zones are connected through high-speed, private fiber-optic networks.

[![Diagram showing three datacenters connected within a single Azure region to represent an availability zone.](https://i.imgur.com/RGunblm.png)

{: .notice--info}
<i class="fa fa-info-circle"></i> **Important** \
\
Not every region has support for availability zones. For an updated list, see [Regions that support availability zones in Azure](https://docs.microsoft.com/en-us/azure/availability-zones/az-region).

#### Use availability zones in your apps

You can use availability zones to run mission-critical applications and build high-availability into your application architecture by co-locating your compute, storage, networking, and data resources within a zone and replicating in other zones.

Availability zones are primarily for VMs, managed disks, load balancers, and SQL databases. Azure services that support availability zones fall into two categories:

- **Zonal services**: You pin the resource to a specific zone (for example, VMs, managed disks, IP addresses).
- **Zone-redundant services**: The platform replicates automatically across zones (for example, zone-redundant storage, SQL Database)

{: .notice--success}
🏆 **Pro Tip** \
\
Availability zones are created by using one or more datacenters.

### Azure region pairs

There's a minimum of three zones within a single region. It's possible that a large disaster could cause an outage big enough to affect even two datacenters. That's why Azure also creates _region pairs_.

### What is a region pair?

Each Azure region is always paired with another region within the same geography (such as US, Europe, or Asia) at least 300 miles away. This approach allows for the replication of resources (such as VM storage) across a geography that helps reduce the likelihood of interruptions because of events such as natural disasters, civil unrest, power outages, or physical network outages that affect both regions at once. If a region in a pair was affected by a natural disaster, for instance, services would automatically failover to the other region in its region pair.

Examples of region pairs in Azure are West US paired with East US and SouthEast Asia paired with East Asia.

![Diagram showing the relationship between geography, region pair, region, and datacenter. The geography box contains two region pairs. Each region pair contains two Azure regions. Each region contains three availability zones.](https://i.imgur.com/lkZAC1H.jpg)

Because the pair of regions is directly connected and far enough apart to be isolated from regional disasters, you can use them to provide reliable services and data redundancy. Some services offer automatic geo-redundant storage by using region pairs.

- If an extensive Azure outage occurs, one region out of every pair is prioritized to make sure at least one is restored as quickly as possible for applications hosted in that region pair.
- Planned Azure updates are rolled out to paired regions one region at a time to minimize downtime and risk of application outage.
- Data continues to reside within the same geography as its pair (except for Brazil South) for tax- and law-enforcement jurisdiction purposes.

{: .notice--success}
🏆 **Pro Tip** \
\
Having a broadly distributed set of datacenters allows Azure to provide a high guarantee of availability.

## What you need to create website hosted in Azure?

You can use Azure market place to create ready made applications like WordPress application etc.

- Create free Azure account
- Subscription automatically created for you
- Create a Resource Group
  - services
  - disks
  - network interface
- Create Resource & choose location

![](https://imgur.com/jUXOLF1.gif){: .full}

Follow steps from this site to [create your first App in Azure](https://docs.microsoft.com/en-us/learn/modules/azure-architecture-fundamentals/exercise-create-website)

## Knowledge Check

- **Management groups** can be used to manage governance across multiple Azure subscriptions?
- **Azure Subscription** is a logical unit of Azure services that links to an Azure account?
- **Resource groups** can **NOT** be nested.
- An **Azure subscription** is a logical unit of Azure services.

![](https://imgur.com/gurEhKi.png){: .full}

![](https://imgur.com/eKUkafP.png){: .full}

![](https://imgur.com/dAbWIWx.png){: .full}

## References

- [Describe core Azure architectural components by Microsoft online free training](https://docs.microsoft.com/en-us/learn/modules/azure-architecture-fundamentals/)

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
