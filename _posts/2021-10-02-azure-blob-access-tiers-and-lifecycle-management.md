---
title: Azure Blob Access Tiers and Lifecycle Management
date: 2021-10-02 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/h4QI62f.png
header:
  image: https://i.imgur.com/lSrPIvO.png
  teaser: https://i.imgur.com/h4QI62f.png
  og_image: https://i.imgur.com/h4QI62f.png
tags:
  - azure
  - webdev
  - certification
  - beginners
---

> Azure Storage has no upfront cost, no termination fees and pay only for what you use. In this article you will learn about Azure storage access tiers and their pricing. It will help you to decide which file type to put in which access tier.




## Access Tiers

For **block blobs** in Blob and **General Purpose V2** storage accounts **tiers can be used** for block blobs.

![](https://imgur.com/lc46XGO.png)

Access tiers of **Hot or Cool** can be set at the **storage account level** as the default for blobs.

![](https://imgur.com/wvxHWSN.png)

If you upload a blob without selecting tier it will by default infer to the account level access tier configuration value.

![](https://imgur.com/HXSSXBc.png)

On a **per-blob basis** any of the tiers can be configured for **block blobs**.

There is a **premium tier**, but this is set for the **storage account type** and can't be changed.

Total amount of storage is at the storage account level and not at the tier level.

![](https://imgur.com/ZqMH62d.png)
For File Sharing we do not have **archive** tier only Premium, Transaction optimized, Hot and Cool is available.

## Block Blob Storage Access Tier Types

- **Premium** - Low latency, highly performant (separate account type)
- **Hot** - Data that is actively used
- **Cool** - Data that is less frequently used but needs to be immediately available.
- **Archive** - Data that must be kept for extended duration and can tolerate multiple hours to access the data.
- As move from **hot -> cool -> archive** the cost of storage goes down but the cost of transactions increases.

![](https://imgur.com/fpNa8in.png)
**Archived** data can not be downloaded it is not available live. Archive data must be first bring to either cool or hot then only you can download them.

## Blob Access Tier

There are 2 types of storage accounts **Premium storage account type** and **Standard GPv2 storage account type**.

Only below type of services can have these 2 types of storage accounts.

- **Managed Disks** (Most expensive)
- **Files**
- **Block Blobs**
- **Azure Data Lake Storage**

## GPv2 Storage Account

**GPv2 Storage account** and **Blob Storage Account** type has 3 access tiers (hot,cool and archive). These account types are also called as **Standard Performance Tiers**. You can move data in between Hot, cold and archive.

### Hot access tier

- **High** **storage** cost
- **Lowest** **data access** cost
- **Example**: application that actively read or write files or staging data that gets uploaded and needs to be processed.

### Cool access tier

- **High** **data access** cost
- **Lowest** **storage** cost
- Cost is in between Hot and Archive.
- **Example**: You don't plan to access as often but you can still get them quickly

### Archive access tier

- **High** **data access** cost
- **Lowest** **storage** cost
- Takes upto **15 hours** to fetch data
- Data is **offline** most of the time
- You can request to fetch early in case of **emergency** and get within **1 hour**.
- Supports LRS,GRS,RA-GRS
- **Example**: you want to keep for longer time backup, raw data, like uncut media files or source data gone through ETL process.

## Premium

**Premium** has one tier only no hot ,cool or archive here. Uses **SSD** to store your data so **performance** is high and price is also high. It is also called as **Block Blob Storage Account**.

**Disadvantage**:

- Not support page blob
- Not available everywhere
- LRS and ZRS only supported



## Azure Service Pricing

![](https://imgur.com/q1d8jqJ.png)
Below are Azure storage solutions and there prices are different and they support Access Tier pricing plans.

- Managed Disks (Most expensive)
- Files
- Block Blobs
- Azure Data Lake Storage

However, **Tables storage, Queues and Page Blobs** they do not support access tier pricing plans.

### Factors impacting Azure Blob storage price

Pricing **depends** on below **factors**:

1. **Redundancy**

   - LRS (locally redundant storage)
   - ZRS (zone redundant storage)
   - GRS (geographically redundant storage)
   - RA GRS (read-access geographically redundant storage)
   - GZRS (geographically zone redundant storage)
   - RA GZRS (read-access geographically zone redundant storage)

2. **Region** where data will be stored
   - United States
   - India etc.

### Cool and Archive early deletion charges.

**Archive deletion charges**

Minimum 180 days you must keep your file in archive tier. If you delete or move archive file earlier than **180 days** then pro-rated charges will be deducted. For example, if a blob is moved to archive and then deleted or moved to the hot tier after 45 days, you'll be charged an early deletion fee equivalent to 135 (180 minus 45) days of storing that blob in archive.

**Cool file deletion charges**

1. If a blob is inferred as cool based on the storage account's default access tier and the blob is moved to archive, there is no early deletion charge.
2. If a blob is explicitly moved to the cool tier and then moved to archive, the early deletion charge applies.

[Learn more here](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers#cool-and-archive-early-deletion)

### Data storage pricing

![](https://imgur.com/rFFDCSg.png)

I pay more to store it and less to interact for higher tier. **Premium** is most **expensive**. Hot is expensive than cool and archive.

![](https://imgur.com/lsTiuH6.png)

### Reading data pricing

Hot is cheaper and Cool is medium and Archive is more expensive.

## Azure Access Tier Summary

![](https://imgur.com/vUC4mXr.png)

## Lifecycle Management

![](https://imgur.com/Eh8UwYh.png)

You can modify the access tier of any data manually at anytime but this is very time consuming.

![](https://imgur.com/wqip57j.png)

Therefore, I would advise you to modify the access tier of any data automatically based on the certain static and dynamic rules. It can apply to all blobs.

You can define rules to delete files or change access tier.

![](https://imgur.com/PxLGpWn.png)

Based on the path or indexed tags you can filter. Based on the certain dates also you can filter and define action to change tier or delete files.

![](https://imgur.com/OZx80O5.png)

## References

1. https://azure.microsoft.com/en-us/pricing/details/storage/blobs/
