---
title: Creating Azure Storage Account
date: 2021-10-23 00:00 +0000
description: Microsoft Azure Solutions Architect AZ 303 material for creating Azure Storage Account.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
image: https://i.imgur.com/h4QI62f.png
header:
  image: https://i.imgur.com/po7VJxp.png
  teaser: https://i.imgur.com/h4QI62f.png
  og_image: https://i.imgur.com/h4QI62f.png
tags:
  - azure
  - beginners
  - certification
  - webdev
---

> **Azure Storage account** is a **resource** in Azure. Storage Account will give your group of services like **Blob** Service, **File** Service, **Table** Service, **Queue** Service. In this article I will walk you through the steps of creating your first Azure storage account.

![](https://imgur.com/0UoZ9OD.gif)

## Introduction

![](https://imgur.com/dMLZ7o2.png)

1. Azure Storage Account provides a **unique namespace** through which the contained storage objects are accessed.
2. It is located in a **specific region**
3. Have a certain [**replication** types](https://rupeshtiwari.com/azure-storage-replications-basics/).
4. Different account types and performance tiers.

## Creating Azure Storage Account Basics 🧮

Login to https://portal.azure.com/ and create resource and search for **Storage Account** and then create new storage account for you.

![](https://imgur.com/jTJmWoP.png)

### Name

Name of the storage account should be **unique** in Azure.

- For each of the services will be like below.
  Pattern: **`<YourName><Service>.core.windows.net`**
  Examples:
  - https://rupesh.blob.core.windows.net
  - https://rupesh.file.core.windows.net

### Location

**Location** of the data center is important like USA data centers may have large numbers of **replication** data centers. However, Brazil datacenter location will have 2-3 **replication** datacenter locations.

### Performance

![](https://imgur.com/pL5m18r.png)

- Performance tiers are of **Standard** or **Premium** type.
- With premium only **locally-redundant storage** is supported.
- Files or Blobs or any resource **can not automatically move** between **Standard and Premium** Accounts.
- You must do file copy in order to move them between **Standard and Premium** Accounts.
- This setting **can't be changed after the storage account is created**. It is just like a type of account. Either you create standard or premium performance account.

### Account Kinds

Normally you should select the **general-purpose v2 (GPv2)** storage kind. Because this is the recommended type from Microsoft which has both blob storage and other features.

#### In Standard Performance Account

You have **3 options** to choose your account kinds:
![](https://imgur.com/LArPndF.png)

1. **general-purpose v2** (StorageV2)
2. **general-purpose v1** (Storage)
3. **BlobStorage**

- A **general-purpose v2 (GPv2)** (👈 recommended) has all latest features is the default.
- A **general-purpose v2 (GPv2)** storage account provides access to all of the Azure Storage services: **blobs, files, queues, tables, and disks**.
- **GPV1** v1 is when u want to integrate with **VMs** or **older network** using classic Azure Model
- **Blob Storage**: only has the **blob services** this is the **legacy account** type.

#### In Premium Performance Account

![](https://imgur.com/nIK1GQL.png)
You have **4 options** to choose your account kinds:

1. **general-purpose v2** (StorageV2)
2. **general-purpose v2** (Storage)
3. **BlockBlobStorage**
4. **FileStorage**

- **general-purpose v2** : stored in SSD drive
- **general-purpose v2**: stored in SSD drive
- **Block Blob Storage**: has **lower latency and high transaction** rates. It can only store blob and has **no hot cold tiers** so no support for blob access tiers.
- **File Storage**: only for files + SSD and additional performance.

### Replication

Replication will make sure the data redundancy is happening. The default one is **`Read-access geo-redundant storage (RA-GRS)`**.

Replication options depends on:

1. **location** of the storage account
2. **performance type** of the storage account.

**Example**: If you select **(Asia Pacific) Korea South** location & Standard performance account then you will only get **LRS, GRS and RA-GRS**.

![](https://imgur.com/vy02TLS.png)

#### In Standard Performance Account

![](https://imgur.com/ma70t5Z.png)
In standard performance account, If you select the location which has all replication options available then generally you will see **6 replications** strategy options.

Example: for **(Canada) Canada Central** you get all 6 replication strategies: **LRS, ZRS, GRS, RA-GRS, GZRS,RA-GZRS**.

#### In Premium Performance Account

![](https://imgur.com/CPaWzRY.png)
In **Premium performance** account, regardless of location you select. At this time **only LRS** replication strategy is supported.

## Networking 🥅

### Connectivity method

![](https://imgur.com/fTD49eo.png)

#### Public endpoint

Your endpoint will be visible over the internet. So you can publicly access your account. You can enforce security.

#### Selected Network Public endpoint

Restrict access to only selected network. Like only **Certain vNet** or **Subnets** can only access like **VMs**. It will not allow over the internet access. You can also **white list certain IP addresses** that allows them to connect to the storage account.

#### Private endpoint

This creates the **private IP address** for the **storage account** on your own **Azure vNet** which **blocks** all connection to the **public internet**. Only allows **accessing storage account from On-Premises** if you connected your on-premise network to Azure using **VPN** or **ExpressRoute**.

### Network Routing

![](https://imgur.com/8OqH0Vr.png)

{: .notice--info}
You can decide how **traffic** will be **routed to the azure endpoint** by default.

#### Microsoft network routing (default 👍recommended)

Client should enter the **Microsoft Network** at the point **closest** to the **user location** called **point of present**.

#### Internet Routing

Client should enter the **Microsoft Network** at the point **closest** to the **storage account**.

## Data Protection 👮

![](https://imgur.com/JKZtcMJ.png)

### Recovery

#### Turn on point-in-time restore for containers

Let's you to restore the blob container into previous state.

{: .notice--warning}
⚠️When point-in-time restore is enabled, **versioning**, **blob change feed** and **blob soft delete** are also enabled. The retention periods for each of these features must be greater than that of point-in-time restore.

#### Turn on soft delete for blobs

It creates a sort of **recycle bin** ♻️ for your **blobs**. In case if you deleted some blob you can restore them within the time limit that you set.

#### Turn on soft delete for containers

It creates a sort of **recycle bin** ♻️ for your storage **container**. In case if you deleted container you can restore them within the time limit that you set.

{: .notice--warning}
⚠️Sign up is required on a per-subscription basis to use container soft delete.

#### Turn on soft delete for File Shares

It creates a sort of **recycle bin** ♻️ for your **file** shares. In case if you deleted some files you can restore them within the time limit that you set.

### Tracking

Tracking changes of the blobs.

#### Turn on versioning for blobs

Auto **maintain previous versions** when they **modified** or **deleted**.

#### Turn on blob change feed

It stores all the **transactional logs** for all of the changes happened to the **blob** **in** the **storage account**.

## Advanced 🅰️

![](https://imgur.com/mfj3fW1.png)

### Security

#### Secure transfer required

Enabled: Accessing endpoint over **https** 👍 recommended.

#### Allow shared key access

If **disabled** then client can only use **roles in Azure AD** to authenticate in to the **storage account**. And any request with shared key access will be denied.

#### Minimal TLS version

Set the TLS for all the apps under this storage account

#### Infrastructure encryption

By default at rest all data is encrypted in azure storage account. However, you can add one more layer of encryption. ⚠️Signup is required.

### Blob storage

#### Allow Blob public access

if you **disabled** public access at the storage account level you can still **allow at container** level. If you **enabled** at storage account level then still you can **restrict public access** at the container level.

#### Blob access tier

**Archive** tier is not available for Blob storage. Only hot and cold is available.

#### NFS v3

Network File System(NFS) enables **Windows or Linux clients** to **mount a container** in **Blob Storage** from a **Azure Virtual Machine**(VM) . This is in preview and only available for few region as of now. ⚠️Signup is required.

### Data Lake Storage Gen2

#### Hierarchical namespace

If **disabled** then Blob storage uses **virtual file system** by default that creates URL for a blob with no real folder structures. Each blob can be located by this URL format:
https://rupesh.blob.core.windows.net/**container2**/**myimages**/**image.png**
That contains container name and sub folders name and file name. However they **are not** really **folders** they are just **part of the URL\*\*.

If **enabled** then below benefits will happen:

- Blob storage will use **actual file systems**. So you get actual folder structures and that helps to setup **security** and other **atomic operations** at folder level.

- **Data Lake Storage Gen2** is built on top of the Blob Storage Service. So it can be used by other Azure services like Azure HDInsight, Azure DataBricks and Azure Synapse Analytics

### Azure Files

#### Large file shares

It is for Azure Files Services so that you can allow file share upto **100TB of size**. Only **Local** and **Zone** redundant storage and it can **not be turned off** when enabled.

### Tables and Queues

You can add your own encryption keys for Tables and Queues and it can **not be turned off** when enabled.

## Tags 🏳️

This is common feature for all Azure resources where you can create tags.

## Demo

Finally you can review your account and create them. Enjoy your Azure Storage Account 😄

![](https://imgur.com/0UoZ9OD.gif)

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your bright future is awaiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
