---
title: Configuring Azure Blob Storage in the Storage Account AZ-303
date: 2021-10-30 00:00 +0000
description: Microsoft Azure Solutions Architect AZ 303 material for creating Azure Blob Storage within a Storage account.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
image: https://i.imgur.com/KghTIqI.png
header:
  image: https://i.imgur.com/JG4JIOS.png
  teaser: https://i.imgur.com/KghTIqI.png
  og_image: https://i.imgur.com/KghTIqI.png
tags:
  - azure
  - beginners
  - certification
  - webdev
---

> **Blob Storage** is helpful to upload images, videos, documents, pdfs etc. over the Azure cloud. In order to create new **Azure Blob Storage**. You must need to [create Azure Storage Account](https://rupeshtiwari.com/creating-azure-storage-account/). Because Azure **Blob Storage** is one of the **services** of the Azure** Storage Account**.

## Prerequisite 👍

{: .notice--warning}
You must have below things ready before creating Azure Blob storage.

- Azure Account
- Azure Storage Account: [Learn how to create Azure Storage account here](https://rupeshtiwari.com/creating-azure-storage-account/).

## Introduction 💁

### Settings

![](https://imgur.com/gF3vlzs.png)

Storage Account has lots of settings related to implementing **security and network access**.

### Blob Service

![](https://imgur.com/obyeeF0.png)

## New Container 🥃

![](https://imgur.com/o9iFCPL.png)

You need to create **at-least one container** for uploading a file. While Creating Container you must give **name** and setup **public access level**.

### Public Access Level

![](https://imgur.com/nPq95hH.png)
**Weather** the blobs are **accessible** by **anonymous** or not. While [creating storage account](https://rupeshtiwari.com/creating-azure-storage-account/) if you turn off the public access at **account** level then that settings will **override** the **container public access** level.

#### Private

Default settings is private. That means **authentication** is **required** either accessing via **browsers** or **REST APIs**.

#### Blob

This is anonymous read access for blobs

#### Container

This is anonymous read access for both containers and blobs

### Advanced

![](https://imgur.com/tcH2EAS.png)

You can choose to **encrypt** the **data** using the **default** which is the **encryption key** for the **storage account**.

#### Encryption Scope

Or use the encryption scope just for **this container data** that encryption key can be managed by **Microsoft** or you can use **your own key** stored in the **Azure Key Vault**.

## Uploading blobs 🥙

![](https://imgur.com/mKrL90l.png)

Any type of the files can be uploaded from your computer.

### Advanced

#### Authentication type

![](https://imgur.com/VJ39N4H.png)

Should authenticate using an **Account key** or using **role in Azure AD user account**. The recommended one is Azure AD account key.

#### Blob type

![](https://imgur.com/ck7W2jk.png)

##### Block blob

Block blob is the default blob type. While uploading blobs are **broken down** in to **smaller unit** that are called **blocks**. Since blocks are smaller units you get some benefits listed below:

- upload **speed** can become faster
- upload works on **low bandwidth** internet connection
- **parallelly** blocks can be **uploaded** while uploading blob from user machine to Azure.

Once upload is done then Azure will **assemble** them to make a **final blob**.

##### Page blob

- page blob is a **collection** of **512 byte** pages.
- good for **random read or write** operations.
- **add** or **update** content happens by **writing** page blobs.
- Azure infrastructure **VMs disk** are using **page file** as the foundation.
- Example: **large** `video` files, or `.vhd` (disk for virtual machines) files should be uploaded as page blob.

![](https://imgur.com/HY8KqkF.png)

##### Append blob

- Append blob is also **composed** of **blocks**.
- However, these blocks are optimized to only **append(add) at the end of the blob** while assembling.
- **Update** and **Delete** existing **blocks** is **not** supported when you choose append blob.
- Example: **Log files** must be stored as append blob.

#### Block size

you can choose the block size from **64 KB to 100 MB**.

#### Access tier

![](https://imgur.com/49K6BaF.png)

You can select your blob access tier while uploading blob. **Hot** tier is the **default** one.

#### Upload to a folder

It will put the folder name on the path of the blob path. It will be the real folder if you select [hierarchical namespace while creating your azure account](https://rupeshtiwari.com/creating-azure-storage-account/#hierarchical-namespace).

#### Encryption scope

![](https://imgur.com/ZKC3yBP.png)

## Blob properties 🦜

![](https://imgur.com/sfrJLv6.png)
After uploading blob you can see the properties.

### Overview

Here you can overview the details of the blob and check all metadata keys and add more metadata keys.

### Versions

If you turned on versioning then you can see the versions here.

### Edit

Some of the files like `.txt` can be edited right in the azure portal.

### Snapshots

You can create a **copy** of the current version and mark them as snapshot which can be downloaded or promoted as the current version or deleted if not required.

### Generating SAS

Shared Access Signature (SAS) is a **string** appended at the **end of the URL** for **accessing** a blob file.

## Actions at Container Level 🕵️‍♂️

From the container list you can select the action per container level.

![](https://imgur.com/4MHcSkh.png)

- **Acquire lease** : No one can delete this container
- **Change access level** : You can change the public access level at container level.



---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:fullstackmaster1@gmail.com?subject=Hi">fullstackmaster1@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
