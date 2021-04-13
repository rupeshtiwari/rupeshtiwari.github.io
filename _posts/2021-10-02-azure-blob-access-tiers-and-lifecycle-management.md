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

> Azure Storage has no upfront cost, no termination fees and pay only for what you use.

## Azure Service Pricing

![](https://imgur.com/q1d8jqJ.png)
Below are Azure storage solutions and there prices are different and they support Access Tier pricing plans.

- Managed Disks (Most expensive)
- Files
- Block Blobs
- Azure Data Lake Storage

However, **Tables storage, Queues and Page Blobs** they do not support access tier pricing plans.

## Factors impacting Azure Blob storage price

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

## Blob Access Tier

There are 2 types of storage accounts **Premium storage account type** and **GPv2 storage account type**.

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

## Data storage pricing

![](https://imgur.com/rFFDCSg.png)
Premium is most expensive.
Hot is expensive than cool and archive.

## Reading data pricing

Hot is cheaper and Cool is medium and Archive is more expensive.

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
