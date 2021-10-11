---
title: Azure Storage Account Basics
date: 2022-09-10 00:00 +0000
description: When you want to move your business to cloud the major thing to consider is storage. What kind of data you can store? What is the pricing? How can you optimize cost and performance? As a cloud architect its your responsibility to get this answers and propose a design. I will try to help to get the basics of Azure storage account in this article.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
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

> When you want to move your business to cloud the major thing to consider is storage. What kind of data you can store? What is the pricing? How can you optimize cost and performance? As a cloud architect its your responsibility to get this answers and propose a design. I will try to help to get the basics of Azure storage account in this article.

## What kind of data you want to store in Cloud?

- Images, Videos, Text Files, binary data
- Tables
- Files
- Queue
- Do you need Hard Disk in cloud to mount for your VM ? Disk storage you need.

To store above kind of data in Azure you need to [create Azure Storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal).

## Custom Domain for Azure Storage Account

Normally Azure storage account creates default endpoint given to you by Azure like: `pricing.blob.core.windows.net`. Azure Storage account is unique per domain. If you have 2 custom domains then you need 2 storage accounts.

**Example**: If you want to create sales.storage.com, pricing.storage.com then for each host name you need 2 new storage accounts.

![](https://i.imgur.com/PlTif5w.png){: .full}

## How many types of Azure Storage Accounts are there?

There are 2 types of Azure storage accounts: **Standard** and **[Premium](https://azure.microsoft.com/en-us/blog/introducing-premium-storage-high-performance-storage-for-azure-virtual-machine-workloads/)** based on the performance requirement.

![](https://i.imgur.com/dNZFT12.png){: .full}

Notice: while creating storage account you have to choose `standard or premium` as per your performance need. Premium accounts are highly performance account with SSD disk and super fast accessible but costly option though.

![](https://i.imgur.com/D6lDVaH.png){: .full}

## Standard Storage Account

This is the recommended azure storage account. Azure Standard Account in old days used to be of 3 types (this is legacy now a days)

- General Purpose V1
- General Purpose V2 and
- Blob account

![](https://i.imgur.com/jzlsAH1.png){: .full}

Now a days,in Standard Storage Account we have only one type **General Purpose V2**.

![](https://i.imgur.com/QJnAGdy.png){: .full}

### General Purpose v2 (GPv2) Storage Account

This is the newest storage account. This supports all of the storage services: **Blob, Azure Files, Queue, Page Blob and Disk, and Table**. It also supports blob tiering. You can select a default hot or cool tier. It supports all kind of redundancy.

## Premium Storage Account

Premium accounts are meant for very high performance use case. It has SSD disk and fast random access to file, data etc. Data in premium account can not be automatically transferred to standard account. You have to write backup and upload task to transfer data to other account.

Premium account are of **3** types: **Block Blobs, File Shares and Page Blobs**.

![](https://i.imgur.com/XzwSANB.png){: .full}

Premium account data has 2 types of redundancy strategies: **LRS and [ZRS](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy#zone-redundant-storage)**.

![](https://i.imgur.com/rQJtqCn.png){: .full}

{: .notice--danger}
🛎️ **Important**
\
Azure Storage Premium account for **Page blobs** only supports **[LRS](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy#locally-redundant-storage)** Redundancy as on now.

This is all about storage accounts. Next lets learn how data is stored in these storage accounts.

## How data is stored in Azure Storage?

Most of the data is stored as blobs only.

![](https://i.imgur.com/AkpEFeB.png){: .full}

- SQL Data stored in Azure SQL Service
- Azure Virtual Disk ( vhd files )
- Image, video, media files
- log, metrics data
- Documents, pdf, text file
- any unstructured data or binary data

  ![](https://i.imgur.com/SSkSAc4.png){: .full}

They all are stored in Azure as blob only. Therefore, we must understand what is blob and how can we create categories of blobs to optimize for certain use cases.

## Types of Blobs

Broadly there are 2 types of blobs:

- Block Blobs and
- Page Blobs

![](https://i.imgur.com/zG2dD8m.png){: .full}

{: .notice--success}
🏆 **Pro Tip** \
\
**Append Blobs** are basically block blobs optimized for append operations are heavily used for storing Log data.

## Block Blobs

Image, Video file, Text file, binary data any kind of unstructured data is good for block blobs. Log data must be stored as append blobs only.

- Ideal for storing Text and Binary Data.

  ![](https://i.imgur.com/gIebE45.png){: .full}

- A single block blob can contain up to **50,000** blocks of up to **100 MB** each, for a total size of **4.75 TB**

  ![](https://i.imgur.com/zg0lrp4.png){: .full}

- Append blobs are optimized for append operations (e.g. **logging**)

  ![](https://i.imgur.com/pCax9mp.png){: .full}

## Page Blobs

- Efficient for read/write operations
- Used by Azure VMs
- Up to **8 TB** in size

![](https://i.imgur.com/7XPMHwi.png){: .full}

### Where Azure Page Blobs are used in real world?

- **[Azure Disks Storage](https://docs.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview)** are persisted in Hyper-V VHD format and stored as a **page blob** in Azure Storage.
- **Azure SQL DB service** which currently uses page blobs for storing SQL data, enabling fast random read-write operations for the database.
- **PaaS service** for shared media access for collaborative video editing applications, page blobs enable fast access to random locations in the media.
- Microsoft services like **Azure Site Recovery, Azure Backup**

![](https://i.imgur.com/5swhULh.png){: .full}

## Storage Access Tiers

In order to access data you have to pay money. In order to store data also you have to pay money. So if you want to not use some data and just keep for longer time then you must store them as archive in azure storage account. So lets learn what are the access tiers of storage account.

There are 3 tiers that you can store your data in storage account.

- Hot
- cold
- Archive

{: .notice--danger}
\
🛎️ **Important**
\
Azure premium account doesn't have access tiers.

![](https://i.imgur.com/joqRVMs.png){: .full}

### Hot Tier

- Higher storage costs
- Lower access costs

### Cold Tier

- Lower storage costs
- Higher access costs
- Intended for data that will remain cool for 30 days or more
- If you try to access data earlier than 30 days you will have to pay the charges for that.

### Archive Tier

- Lowest storage costs
- Highest retrieval costs
- When a blob is in archive storage it is offline and cannot be read

## When to use Blob, Files and Disk Storage?

Now we have many choice let me help you to understand when to use disk, files or blob storage account.

### When to use Blobs Storage Account?

- When your application wants to access data from anywhere.
- Large amount of objects, images, videos etc.

  ![](https://i.imgur.com/uE6eFPd.png){: .full}

### When to use Files Storage Account?

- When you want to access files from multiple instances of VMs.
- Jumpbox for shared development scenarios.

  ![](https://i.imgur.com/DeaflLN.png){: .full}

### When to use Disk Storage Account?

- Do not need to access outside of VMs.
- Lift-and-shift of machines from **on-premises**
- Disk expansions for application installations.

  ![](https://i.imgur.com/5swhULh.png){: .full}

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)
