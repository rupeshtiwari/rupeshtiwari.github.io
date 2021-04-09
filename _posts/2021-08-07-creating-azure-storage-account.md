---
title: Creating Azure Storage Account
date: 2021-08-07 00:00 +0000
description: Microsoft Azure Solutions Architect AZ 303 material for creating Azure Storage Account.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
image: https://i.imgur.com/qyTdaCD.png
header:
  image: https://i.imgur.com/3TIgwIE.png
  teaser: https://i.imgur.com/qyTdaCD.png
  og_image: https://i.imgur.com/qyTdaCD.png
tags:
  - azure
  - beginners
  - tutorial
  - webdev
---

> **Azure Storage account** is a **resource** in Azure. Storage Account will give your group of services like **Blob** Service, **File** Service, **Table** Service, **Queue** Service.

## Introduction

![](https://imgur.com/dMLZ7o2.png)

![](https://imgur.com/0UoZ9OD.gif)

## Basics 🧮

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

Performance tiers are of **Standard** or **Premium** type. With premium only **locally-redundant storage** is supported.
![](https://imgur.com/pL5m18r.png)

### Account Kind

#### standard

- **GPV2** (👈 recommended) v2 has all latest features is the default.
- **GPV1** v1 is when u want to integrate with **VMs** or **older network** using classic Azure Model
- **Blob Storage**: only has the **blob services** this is the **legacy account** type.

#### premium

![](https://imgur.com/LArPndF.png)

- **GPV2** : stored in SSD drive
- **GPV1**: stored in SSD drive
- **Block Blob Storage**: has** lower latency and high transaction** rates. It can only store blob and has **no hot cold tiers** so no support for blob access tiers.
- **File Storage**: only for files + SSD and additional performance.

### Replication

![](https://imgur.com/0L3hpH3.png)

Replication will make sure the data redundancy is happening. The default one is `Read-access geo-redundant storage (RA-GRS)`.

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
