---
title: Azure Storage Replications Basics
date: 2021-09-04 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/thumbnail.png
header:
  image: https://i.imgur.com/FEATUREIMAGE.png
  teaser: https://i.imgur.com/thumbnail.png
  og_image: https://i.imgur.com/thumbnail.png
tags:
  - azure
  - webdev
  - tutorial
  - beginners
---

Availability and Durability
Disaster recovery
Recovery time objectives (RTO)
Maximum acceptable time that an application can be un-available after an incident happen.
Read only access to a secondary region

Redundancy in primary region
Redundancy in secondary region
Read access to data in secondary region

## Local Redundant Storage

![](https://imgur.com/42eGmb4.png)
In the **same data center** and **same region** **3 copies** of your data is saved. Fire or flooding can impact the data center and your data is stored in a single data center only.

## Zone Redundant Storage (ZRS)

![](https://imgur.com/3QYNQt4.png)
Within the **same region** you can have **3 availability zones** where **3 copies** of data will be replicated. If your primary azure data center is **down** then azure **repoint** the DNS of the storage account to **other zone**. Each zone is **physically separate**.

**Disadvantages:**

- It is not available for every azure region
- It does not support
  - archived tier of blob
  - managed, un-managed disks.

## Geo Redundant Storage (GRS)

![](https://imgur.com/hBV2Udw.png)

## Geo Zone Redundant Storage (GZRS)

![](https://imgur.com/x9qKD0E.png)

