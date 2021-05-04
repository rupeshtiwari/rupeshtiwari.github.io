---
title: Design Security for Application for Microsoft Azure Solutions Architect
date: 2022-03-12 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
toc_sticky: true
image: https://i.imgur.com/zZYQYQA.png
header:
  image: https://i.imgur.com/3PR1wRa.png
  teaser: https://i.imgur.com/zZYQYQA.png
  og_image: https://i.imgur.com/zZYQYQA.png
tags:
  - azure
  - webdev
  - beginners
  - az304
---

> Are you wondering how your function app authenticate & authorize to read or write to Azure SQL table? Do you think how your web application will get programmatically permission to write to storage queue? How would you mange the secrets and credentials used by resourced in your Azure cloud? Are you tired managing credentials? Well in this article, I will explain everything about designing your Azure enterprise resources. Such that all of the applications & azure resources authenticate using credentials and other secretes. And they can communicate to each other seamlessly without you to do any extra work.

## Don't Do below with passwords

- Hard code in source code
- Place in config file
- Use environment variables.

## Do below to authenticate

- Resource-based authentication
- Use Azure Key Vault to store secretes

## Manually Managing Identities

- You create Service Principle in Azure AD
- Your application authenticate using certificate, secrete or password
- Your Resources under process has to store the certificate, secrete or password

However, this is also not advisable. Let's explore what else you can do?

## What are the options for managing identities for applications?

### Option 1: Using Azure Managed Identity as Role Based Access Control (RBAC)

Azure has many resources that supports `Role Based Access Controls (RBAC)` like: `Key Vault`, `Storage Accounts`. Azure also has resources that supports `Managed Identity` like `Function App`, `Virtual Machines`.
Therefore, you can enable managed identity for a desired application. And go to the desired target resource which you want to access from application and assign role for that application managed identity.

For example, enable managed identity Function App. Next you can create Key Vault with `Azure Role Based Access Control` permission model. In the key vault, `Access control (IAM)`, assign Role to this function app for GET, SET etc. permissions. With this setup your Function App can read and write secretes to your newly created Key Vault.

{: .notice--warning}
<i class="fas fa-exclamation-triangle"></i> **Warning** \
\
Not every resources in Azure supports Role Based Access Control. So this above solution may not work for all resources in Azure.

### Option 2: Using Azure Key Vault to store Secretes and Certificates

Like I said, not all resources in Azure supports RBAC Managed Identity authentication & authorization. Since these resources don't support Azure AD. For those resources you must need a secrete or certificates.

Suppose you have an application to encrypt a file and you need a secrete to encrypt. Where do you store the secrete? How you application read the secrete at run time? Well the answer for all these questions is **Key Vault**.

Since Key Vault supports Azure AD authentication. It can easily connect with resources with their Managed Identities as RBAC. I can also integrate Key Vault with Azure Policies and adhere to compliances.

For example, you can grant permission to a Function App with their Managed Identity. Now your function app can read the secrete and do the business like encrypt a file etc.

## Using Azure Managed Identities

Managed identities provide an `identity` for `applications` to use when `connecting` to `resources` that support `Azure Active Directory (Azure AD) authentication`. Applications may use the managed identity to obtain Azure AD tokens from a special Azure endpoint `http://169.254.169.254/metadata/`.

{: .notice--success}
🏆 **ProTip** \
\
Only resources that support **Azure Active Directory (Azure AD) authentication** & has a authorization form can allow to connect themselves to other resources using `Managed Identities`.

For example, an application may use a managed identity to access resources like [Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/general/overview) where developers can store credentials in a secure manner. You can request different token for Azure Storage Accounts. Or you can read secrete from Azure Key Vault and access to Azure blob storage if you have read permission.

{: .notice--success}
🏆 **ProTip** \
\
Managed Identities is **free of cost** 💰 no additional charges to use. Microsoft will create a **Security Principle in Azure AD** when you create Managed Identity.

![](https://imgur.com/6kH5Py7.png){: .full}

There are two types of managed Identities:

### 1. System-Assigned Identity

System-Assigned Identity is **one-to-one** relationship between identity and resource. When you enable a system-assigned managed identity an identity is created in Azure AD that is tied to the **lifecycle** of that service instance. So when the resource is deleted, Azure automatically deletes the identity for you. For example, an application that runs on a single virtual machine. You can not use or share system-assigned identity with different resources than it created. You can always create the

{: .notice--success}
🏆 **ProTip** \
\
When you have VM you give **system-assigned** when you delete the VM your identity from Azure AD gets deleted. It **shares the lifecycle of the resource**. You **can not share** identity with different resources.

### 2. User-assigned Identity

User-assigned is **one-to-many** relationship between identity and resources. It has standalone its own lifecycle. You can [create a user-assigned managed identity](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/how-to-manage-ua-identity-portal) and assign it to one or more instances of an Azure service. For example, a workload where multiple virtual machines need to access the same resource

{: .notice--success}
🏆 **ProTip** \
\
When you create **user-assigned identity** then you can use them in many Function Apps, many Virtual Machines, and as many resources as you want. It is **sharable** identity across resources.
If you delete the resource then user-assigned identity never deletes automatically. You must manually delete them explicitly.

#### Creating User Assigned Managed Identity at Resource Group Level

![](https://imgur.com/ffGMlFQ.gif){: .full}

When you create Managed Identity behind the scene Microsoft will create a security principle in Azure AD.

![](https://imgur.com/Tq8p5sH.png){: .full}

#### Assigning Managed Identity to a Function App

![](https://imgur.com/9U5ay1w.png){: .full}

When you go to Function App or any resource then you will have `Identity` under `Settings` section. There you have choice to either assign System-Assigned Managed Identity or User-Assigned Managed Identity.

### Assigning System Managed Identity Roles

![](https://imgur.com/W6ULtIM.png){: .full}

## Demo: Managed Identity with VM

I have System-Managed Identity to my VM.

![](https://imgur.com/3aj0sm0.png){: .full}

Now I can go to Storage Account, Access Control (IAM) and select Role Assignments. I already added VM to Storage Blob data as contributer.

![](https://imgur.com/lBTXv3J.png){: .full}

### Copying Images using VM System Managed Identity

So with this VM Identity, I can access any container of this Blob Storage Account. Like using Powershell script I can copy images from blob storage to my VM directory.

![](https://imgur.com/5DzxE66.png){: .full}

![](https://imgur.com/zhJedxl.png){: .full}

### Reading Secretes from KeyVault using Azure Token from VM

I can get Azure Token from special endpoint Azure REST API. Next using token as managed identity I can integrate with Key Vault and read the secretes.

Before you read the key vault secrete from VM. You must go to Key Vault and assign VM managed identity to give access.

![](https://imgur.com/PgT8Qrc.png){: .full}

Settings group Access Policies and confirm the VM has permissions.

![](https://imgur.com/sCI19fS.png){: .full}

I can get Azure Token from special endpoint Azure REST API.

![](https://imgur.com/PO3S3TL.png){: .full}

Next I can read the secrets from my key vault by making REST API call to key vault and passing `Authorization="Bearer $AzureToken"` as request header.

![](https://imgur.com/ayhdVUD.png){: .full}

## References

1. [Managed Identities Azure Resource](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview)

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
