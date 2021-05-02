---
title: Azure Storage - The big picture
date: 2021-09-25 06:18 -0400
description: Understand the use case of Azure storage account
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
  image: https://i.imgur.com/po7VJxp.png
  teaser: https://i.imgur.com/h4QI62f.png
  og_image: https://i.imgur.com/h4QI62f.png
tags:
  - azure
  - webdev
  - beginners
  - certification
---

## Azure Core Storage Services

![](https://imgur.com/0uXKnai.png)

1. Blobs
2. Files
3. Queues
4. Tables
5. Disks

### Azure Blobs Storage

![](https://imgur.com/OmyjBKy.png)

- It is an **object storage** solution
- **Unstructured data** can be stored
- 3 types of blobs: block,append and page
- files, documents, binary data like image, video, audio files, databases and disks can be stored in blob storage.

### Azure Files

- Similar to Azure Blob it can store **unstructured data**.
- **Any type** of file
- Support **SMB protocol**
- **Attach** file share **to VM** just like network share
- Application which can not talk to blob api and need Network file share then you can use Azure files to access files on network.
- File share can be connect to on-premise computer

### Azure Tables

- **Structured** data only
- Data broke down into Fields
- NoSQL database for fast read and write
- You could use SQL database also

#### Cosmos DB

**Cosmos DB** is another **service** for Azure Table. - NoSQL database - built-in feature to distributing your app globally. - However, storage account specific to region and region pair. So cosmos DB is more reliable. - built-in strategy to migrate Azure Table to cosmos db.

### Azure Queues

- Store & retrieve **messages**
- Asynchronous reliable
- good for **microservices**

#### Azure Service Bus

There is another **service** for **Azure Queues** called **Azure Service Bus**

### Azure Disks

- It is used by VMs
- They are stored as type of Page Blob
- You can upload your own VMs disk using PowerShell or Portal.

## Accessible

Azure CLI, Azure storage Explorer, Azure portal, AZ copy, Powershell and program everyone can use **REST API** to access all data. All of the data are exposed to REST endpoint.

## Security

You can limit who can access your data. You can encrypt by your own encryption keys for **blobs and files** services by uploading on Azure Key Vault. By default Microsoft put all data encrypted at rest.

## Durable and highly available

Azure stores 3 copies of data in the data-center that you will choose. You can failover to other redundant data storage at anytime.

## Storage Capacity

Per Azure Storage Account you can store 5 PiB of data including blob, files, queues, disk, tables etc. You can create multiple accounts.

### Pricing

![](https://imgur.com/le3lzyz.png)

Block Blobs are cheaper than Files. Blob storage is cheaper than File storage.

### Scalable

Azure storage is highly scalable.

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
