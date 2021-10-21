---
title: Introduction of Managed Identities
date: 2022-12-31 00:00 +0000
description: Do you have situations where a process is trying to use your virtual machine in the cloud and you want to protect and control the access? Do you want to use cosmos db using your server layer deployed over azure cloud without managing your own identity and passwords? Use Microsoft Managed Identity. In this article I will describe Managed Identities concepts.
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
  - cloud
---

> Do you have situations where a process is trying to use your virtual machine in the cloud and you want to protect and control the access? Do you want to use cosmos db using your server layer deployed over azure cloud without managing your own identity and passwords? Use Microsoft Managed Identity. In this article I will describe Managed Identities concepts.

First let's remind ourselves of what service principals are. Below are called Service Principal:

1.  Application principal
2.  Managed Identity
3.  Legacy

## What is Managed Identity?

Managed Identity is part of the authentication process. Managed Identity is a service principal of a special type that may only be used with Azure resources. When Managed Identity is deleted, the corresponding service principal is automatically  removed. When Managed Identity is created the managed identity resource provider (MSRP) issues certificates to the identity internally. So Managed Identities are certificate based service principals.

![](https://i.imgur.com/bmKv6pn.png){: .full}

Managed Identities for Azure resources (formally known as MSI (Managed Service Identity) provide Azure services with an Identity in Azure Active Directory. Azure services use this identity to authenticate to services that support Azure AD authentication without needing credentials in your code.

![](https://i.imgur.com/MRY8iyy.png){: .full}

## Types of Managed Identities

In Microsoft Azure there are 2 types of managed identities:

1.  System assigned
2.  User assigned

## System Assigned Identity

![](https://i.imgur.com/BWz8lDS.png){: .full}

Figure:- User is enabling system-assigned managed identity to the instance of an azure resource.

An identity is created in the azure active directory that is tied to the lifecycle of the service instance. When the service instance or resource is deleted azure deletes the corresponding identity. Only Azure resources can use this identity to request a token from Azure Active Directory. You can not share this identity with multiple resources.

![](https://i.imgur.com/BHRAMhV.png){: .full}

You can only enable or disable managed identities at resource level. Workloads that are contained within a single Azure Resource workload for which you need independent identities. Example: Application that works on a single Virtual Machine.

![](https://i.imgur.com/aEPJ3sI.png){: .full}

## User Assigned Managed Identities

You create a managed identity as a stand-alone resource called a user-assigned managed identity. Assign it to one or more instances of an Azure service. Identity is managed separately from the resource that uses it and is not tied to the resource lifecycle. It can be shared across many azure resources. You can create, read, update, delete (CRUD) on user-assigned Managed Identity. 
![](https://i.imgur.com/a8gGbnJ.png){: .full}

For Example: Workloads that run on multiple resources and which can share a single identity. For example, workloads where resources are recycled frequently, but permissions should stay consistent like multiple virtual machines need to access the same resource. You have to assign 3 system-assigned identities in a shared azure resource.

![](https://i.imgur.com/A4O695X.png){: .full}

However, when you use system-assigned identity then you face 2 problemes:

1.  You have to assign multiple identities to the shared resource. Imagine if there are 100 Virtual Machines or so.
2.  Whenever VM is deallocated then the corresponding managed identity will be deleted as well. So you have to assign a new system assigned managed identity of the VM when it is again provisioned. So you have to manage your own self.
3.  Therefore, in this situation you should create one user-assigned managed identity that can remain always unless you delete the key.  Youjust assign that key to the azure virtual machines. And the shared resource will only allow that identity to authenticate.

You can perform CRUD operations on Managed Identity using below tools:

1.  ARM template
2.  Azure Portal
3.  Azure CLI
4.  Powershell
5.  REST API

Which operations are allowed with Managed Identity?

System Assigned Managed Identity: can enable disable at resource level. Use RBAC to grant permissions. CRUD on Azure Activity Logs view Sign-In activity in Azure AD sign-in logs.

UserAssigned Managed Identity: you can do CRUD on identities. Use RBAC to grant permissions. You can use one or more than 1 resources.CRUD on Azure Activity log view sign-in activity in Azure AD sign-in logs.

## References 

1.  [https://docs.microsoft.com/en-us/azure/active-directory/authentication/overview-authentication](https://docs.microsoft.com/en-us/azure/active-directory/authentication/overview-authentication)
2.  [https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals](https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals)

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png){: .full} 
