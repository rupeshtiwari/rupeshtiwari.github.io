---
title: Azure solution for big-data transfer
date: 2021-11-29 00:00 +0000
description: All you should know about you on-premise Data migration to the cloud.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/f3yYgxg.png
header:
  image: https://i.imgur.com/zipiW93.png
  teaser: https://i.imgur.com/f3yYgxg.png
  og_image: https://i.imgur.com/f3yYgxg.png
tags:
  - azure
  - tutorial
  - beginners
  - cloud
---

> Are you planning to migrate your on-premise data to the cloud using Azure data transfer solutions?

At a high level there are only 2 solutions to transfer your on-premise data to the cloud.

1.  Offline Data Transfer
2.  Online Data Transfer

## Offline data transfer

Cloud providers will ship you a secure specialized device or disk based on the volume of data. You copy data to that device, apply a secret pin and then send it back to Azure where the data is uploaded and you can verify your Azure Storage account for the uploaded data. Sometimes if data is not that big then you can purchase a disk of your own and ship it to azure. Azure has a Databox family to help you transfer your data offline.  Data Box Disk, Data Box, Data Box Heavy, and import/export (use your own disk).

The data box is normally 8-TB BitLocker-encrypted SSD upto 35 TB capacity. If you need more data then you order more of them. Yes you can put 2 or 3 disks of 35TB each and copy parallels data on them using SMB protocol and tools like Robocopy. The disk will have predefined folders like PageBlob, BlockBlob, AzureFile, or ManagedDisk.

File/Folder restrictions while copying:

- Blob blocks file size must not exceed 4.75 tebibytes (1 TiB = 240 bytes )
- Page blocks file size must not exceed 8 tebibytes (TiB)
- Azure Files file size must not exceed 1 tebibytes (TiB)

- Subfolder names should be lowercase, from 3 to 63 characters, and consist only of letters, numbers, and hyphens. Consecutive hyphens aren't allowed.
- File names for Azure Files shouldn't exceed 255 characters.

What to copy where?

- ManagedDisk folder for VHD (Virtual Hard Disk) files.
- PageBlob folder to save VHDX (successor of Virtual Hard Disk) files.
- BlockBlob folder to save images, documents etc.
- AzureFile folder to save folder and files

The only bad part of this option is it takes time to do this way of data transfer. You have to create an order, wait around 10 days for the device to come, copy, ship it back to Azure, then upload data and finally erase the data as per the National Institute of Standard and Technology (NIST) guidelines.

![](https://lh4.googleusercontent.com/T28XMm5nJkyajL7-9MuUjDB7XejV9EglIxvcphhcwRmD2EVF5pzenuybNnfzB7HzTKv8aeJsTEDbRpmMwjlktCcTvhE8UAfj00R2Ya94IJNOZ-E-b3T7bU5EMtlWEttrxYNqw_NJ=s0)

Note: For Data Box Heavy, make sure that it will fit through the entrance of your premises, and that you have at least two people to handle it. It's a massive device that weighs around 500 lbs and arrives on wheels 😃

## Online data transfer 

You use your internet bandwidth to securely transfer data to azure cloud over the network. You can use Azure Applications to transfer data like Azure Storage Explorer or Azure web portal. You can even write your own powershell or node.js .net java etc. script to transfer data. You can use the Azure data factory to create a pipeline to set up dedicated data transfer. Finally if you have some analytics to be done before  you send data over cloud like filter PII data or any other custom filter, logic and want to optimise transfer by cache frequent data etc. then use Azure Stack Edge. You need a physical device, the Azure Stack Edge and virtual device the Data Box Gateway. Azure ships you Azure Stack Edge device, you install it on-premise permanently and connect to Azure over your network.

![](https://lh4.googleusercontent.com/f0erDWSp3rKqmhxokCTuDVageaobRC4ZRaCAKq2YHoDO2dRoZShLGocRjMTl4haB8e5bGO4rZX18Klgvn4RviYqn9BgPNOu4ddgbmXNK2GyGFT9a7D3oEKHbhxHeFnPXEDX0QHDF=s0)

## How to decide which data transfer solution to select?

You should answer below 3 questions to help yourself to decide which solution is good for your data transfer to the cloud.

- What is the size/volume of the data?
- How much network bandwidth is available in my on-premise environment?
- How often do I want to transfer data, is it one-time or continuous data transfer?

## General Cloud Data Transfer Scenarios 

Let’s discuss major scenarios of data transfer to the cloud.

- Do you want to transfer a large volume of data with low network bandwidth or is it expensive?
- Do you want to transfer a large volume of data with moderate to high network bandwidth?
- Do you want to transfer a small volume of data with moderate network bandwidth?
- Do you want to transfer a point-in-time data transfer at regular intervals?
- Do you want to transfer an on-going data transfer at regular intervals?

## Data transfer for large datasets with low or no network bandwidth

Large amounts of data means few TBs or PBs of data you may not want to send over wire because of low internet speed (100 Mbps - 1 Gbps)  or security policy which does not allow you to transfer data over wire. In this scenario, I prefer a physical device to do a one-time bulk data transfer. Choose from Data Box Disk, Data Box, Data Box Heavy devices which are supplied by Microsoft, or Import/Export using your own disks.

If you are still confused should you use physical device or not then use below table to decide

![](https://lh3.googleusercontent.com/DF7h0tCmu6MXxgjnPbwH_Yl89dcvQA9NPehjKzbk_1TS-eUkwMwfeJyh75wcXjVALZlDq7uBmIqA21bFXci3jZ3ZdUEBuM6CkgMU-lN_D96-3WH6yQEIaz75Azz_88LA_zEJJCtD=s0)

## Data transfer for large datasets with high network bandwidth

If you have high network bandwidth (1 Gbps - 50 Gbps) and you rely on cloud security setup then prefer data transfer via network bandwidth only.

Powershell AzCopy CLI is a good choice to spin-up parallel processes to transfer data over the network to the Azure cloud. It will resume transferring if the data transfer is interrupted. However, it needs technical knowledge.

Rest API exposed by Azure Storage is also a good choice if you have your development team to create UI for you to transfer data.

Azure Data Box family for online transfer: If you want to do live streaming of data to the cloud and also you want to pre-process your data then prefer using Azure Data Box Edge physical device with Data Box Gateway virtual device together.

Azure Data Factory:  Use Data Factory to regularly transfer files between several Azure services, on-premises, or a combination of the two. with Data Factory, you can create and schedule data-driven workflows (called pipelines) that ingest data from disparate data stores and automate data movement and data transformation.

[Refer this article](https://docs.microsoft.com/en-us/azure/storage/common/storage-solution-large-dataset-moderate-high-network) to learn more about comparisons on which tool you use.

## Data transfer for small datasets with low to moderate network bandwidth

If you have network speed around ( 50 Mbps - 1 Gbps ) and data is low then go for an online data transfer solution that I described in the above scenario.

## Solutions for periodic data transfer

If you want to transfer data at specific calendar time frequently like point-in-time once in a week/month then based on your internet speed, policies and data size you can choose either offline or online data transfer.

If you want to transfer data from on-premise to cloud on a regular basis like every day or continuous transfer then prefer online data transfer option only. You can use

- Object replication - In Azure you can use object replication to sync containers between multiple azure storage accounts.
- Azure data factory \- You can orchestrate data-driven workflows that can combine both on-prem and azure data and provide automatic data transmission to the cloud.
- Also try Azure Data Box Family for online transfer - this option is for excellent performance and data filtering.

## References

- Moderate Network Bandwidth is 100 Mbps - 1 Gbps
- High Network Bandwidth is 1 Gbps - 50 Gbps
- 1 GB = 109 Bytes
- 1 TB = 1012 Bytes
- 1 PB (Petabyte) = 1015 Bytes
- [https://docs.microsoft.com/en-us/azure/storage/common/storage-choose-data-transfer-solution](https://docs.microsoft.com/en-us/azure/storage/common/storage-choose-data-transfer-solution)

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/5fBatz9.png)
