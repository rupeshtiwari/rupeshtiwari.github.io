---
title: Azure Information Protection Strategy
date: 2021-06-02 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/zztiaiA.png
header:
  image: https://i.imgur.com/TDnKShl.png
  teaser: https://i.imgur.com/zztiaiA.png
  og_image: https://i.imgur.com/zztiaiA.png
tags:
  - webdev
  - tutorial
  - beginners
  - azure
---

> **Azure Information Protection (AIP)** is a cloud-based solution that enables organizations to **classify** and **protect** documents and emails by applying **labels**.

## How labels apply classification with AIP

Labeling your content with AIP includes:

- **Classification** that can be detected regardless of where the data is stored or with whom it's shared.
- **Visual markings**, such as headers, footers, or watermarks.
- **Metadata**, added to files and email headers in clear text. The clear text metadata ensures that other services can identify the classification and take appropriate action

For example, in the image below, labeling has classified an email message as _General_:

![Sample email footer and headers showing Azure Information Protection classification](https://docs.microsoft.com/en-us/azure/information-protection/media/example-email-footerv2.png)

## How AIP protects your data

Azure Information Protection uses the [_Azure Rights Management service_ (Azure RMS)](https://docs.microsoft.com/en-us/azure/information-protection/what-is-azure-rms) to protect your data. Azure RMS uses encryption, identity, and authorization policies.

As soon as the Azure Rights Management service is activated, two default rights management templates are available for you to restrict data access to users within your organization.

The following image shows an example from the Exchange admin center, where you can configure Exchange Online mail flow rules to use RMS templates:

![Example of selecting templates for Exchange Online](https://docs.microsoft.com/en-us/azure/information-protection/media/templates-exchangeonline-callouts.png)

Additionally, the AIP client enables users to classify and protect additional file types, or multiple files at once, using the right-click menu from Windows File Explorer. For example:

![](https://i.imgur.com/8EUqnl7.png)

**Do Not Forward** functionality can be integrated into a label that users can select to apply both classification and protection to that email. For example:

![Selecting a label configured for Do Not Forward](https://docs.microsoft.com/en-us/azure/information-protection/media/recipients-only-label2.png)

Use one of the following methods to classify and protect existing content:

- **On-premises storage**: Use the [Azure Information Protection scanner](https://docs.microsoft.com/en-us/azure/information-protection/deploy-aip-scanner) to discover, classify, and protect documents on network shares and Microsoft SharePoint Server sites and libraries.

- **Cloud data storage**: Use [Microsoft Cloud App Security](https://docs.microsoft.com/en-us/cloud-app-security/azip-integration) to apply your labels to documents in Box, SharePoint, and OneDrive.

{: .notice--success}
🏆 **Pro Tip** \
\
**What are the default labels for classification in Azure Information Protection?**
Personal, Public, General, Confidential, and Highly Confidential

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
![](https://imgur.com/5fBatz9.png)
