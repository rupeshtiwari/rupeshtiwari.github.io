---
title: How to Maintain Well-Architected-Framework on Cloud
date: 2021-12-10 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/aPeeiUM.png
header:
  image: https://i.imgur.com/aPeeiUM.png
  teaser: https://i.imgur.com/aPeeiUM.png
  og_image: https://i.imgur.com/aPeeiUM.png
tags:
  - webdev
  - tutorial
  - beginners
  - cloud
---

How to make sure our workload in the cloud is secure, reliable. How to monitor the cost of your cloud resources consumption? Is there any automation you can do to remind you of your cloud budget expenses, future expected cost? Is there any on-click quick fix to terminate underutilized virtual machines. Well the answer to all of these questions is **Microsoft Azure Advisor**. Yes, you guessed it I will talk about azure advisor in this article. This is an important topic so stay tuned.

## Azure Well-Architected Framework & Review

[Azure well-architected framework](https://docs.microsoft.com/en-gb/assessments/?mode=pre-assessment&session=local) provides architectural best practices across the five pillars for designing and operating systems in the cloud.  Those 5 pillars are as follows:

- Operational Excellence
- Performance
- Cost
- Reliable
- Secure

Microsoft has a [well architected review](https://docs.microsoft.com/en-gb/assessments/?mode=questionnaire&session=d5ecfe19-a58f-497d-9df4-0b176437c610&question=threat&category=Security) that will give you recommendations that customers can focus on. It will include existing workload and recommend things to learn and implement to improve.
![](https://i.imgur.com/xYMTMmS.png){: .full}

## Azure Advisor

Azure advisor gives recommendations to all cloud resources based on a well architected framework. You can access Azure Advisor recommendations as an owner, contributor, or reader of a subscription. Once moving workload on the cloud. Azure advisor is your personal advisor to keep you workload standout on 5 pillars of a well architected framework.

![](https://i.imgur.com/kCqwu9D.png){: .full}

## Overall Advisor Score for C-Level Executives

Azure Advisor shows overall score this is the high level view for your entire resources present within the subscription. The higher the score the healthier your technical portfolio is. This is the number that is more likely you will show to your CTO.

![](https://i.imgur.com/4ktlepW.png){: .full}

## Creating Advisory Automatic Alerts

Checking these recommendations given by Azure Advisor manually is not a great idea. Therefore, you must create automatic alerts in Azure Advisor. These alerts can do various actions including sending sms, emails to core team or even calling webhook to create tickets in zendesk.

![](https://i.imgur.com/HKw9O7g.png){: .full}

You can even create a digest for a given subscription and select the desired 5 pillars and weekly you will get a summary of Azure advisor recommendations.

![](https://i.imgur.com/pJWFzP2.png){: .full}

## How do you know Advisor score is good?

You can check the score history by monthly/weekly or days and understand if the score is increasing or decreasing by benchmarking it.

![](https://i.imgur.com/0vGPqKw.png){: .full}

![](https://i.imgur.com/Y7KjbnJ.png){: .full}

The best way to increase score is by:

- Split your workload that is business critical and make it more reliable by following all recommendations and tradeoff on cost.
- Split your workload by environment for production/non-production subscriptions. For a development/test environment, cut your cost and trade off on reliability.

## How to improve Cloud Advisor Score?

You must go to the Azure Advisor and check all of the 5 tabs related to the 5 pillars of a well architected framework and follow the quick fix and recommendations to improve your score.

![](https://i.imgur.com/WBYLnMb.png){: .full}

Here are the proposed recommendations that you should follow in order to make your system adhere to a well architected framework.

### Operational Excellence

Operational excellence recommendations in Azure Advisor can help you with:

- Process and workflow efficiency.
- Resource manageability.
- Deployment best practices.

Below are the recommendations that you can see in the Operational Excellence tab of the Advisor dashboard.

- Azure Policy recommendations like add tags, restrict creating resources to certain regions etc.
- Design your storage account to prevent reaching the maximum subscription limit.
- Enable traffic analytics to view insights into traffic patterns across azure resources.
- Increase vCPU limits for your deployments for Pay-As-You-Go subscription.

### Performance

The performance recommendations in Azure Advisor can help improve the speed and responsiveness of your business-critical applications.

- Reduce DNS TTL (time-to-live) on your traffic manager profile to fail over to healthy endpoints faster.
- Improve database performance based on usage history
- Upgrade library to latest versions for better reliability and performance example storage client library version.
- Use managed disks to prevent disk I/O throttling
- Improved VM performance and reliability using premium storage that gives SSD I/o-intensive disk for low-latency high IOPS.
- Improve MySQL connection management by reducing the number of short-lived connections and eliminating unnecessary idle connections.
- Use ARM template for template deployment, security

### Cost

Here are some examples of the recommendations given by Azure advisor to save your cloud cost.

<table>
  <tr>
   <td><strong>Potential Yearly Savings</strong>
   </td>
   <td><strong>What to do?</strong>
   </td>
   <td><strong>Impacted Resources</strong>
   </td>
  </tr>
  <tr>
   <td>1864 USD
   </td>
   <td>Right Size or Shutdown underutilized virtual machines. CPU utilization &lt; 5%
   </td>
   <td>2 Virtual Machine
   </td>
  </tr>
  <tr>
   <td>80 USD
   </td>
   <td>Delete Public IP address not associated to a running Azure resource
   </td>
   <td>2 Public IP Address
   </td>
  </tr>
</table>

### Reliability / High Availability Recommendations

<table>
  <tr>
   <td><strong>Potential Benefits</strong>
   </td>
   <td><strong>What to do?</strong>
   </td>
   <td><strong>Impacted Resources</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Ensure Business Continuity</strong> through VM resilience
   </td>
   <td>Add more VM for improved Fault Tolerant
   </td>
   <td>Availability Set
   </td>
  </tr>
  <tr>
   <td>Improved <strong>Data Resilience and Performance</strong>
   </td>
   <td>Enable VM backup to protect your data from corruption and accidental deletion
   </td>
   <td>Virtual Machine
   </td>
  </tr>
  <tr>
   <td><strong>Ensure Business Continuity</strong>
   </td>
   <td>Use Multiple AZ for data center level disaster
   </td>
   <td>Availability Zone
   </td>
  </tr>
  <tr>
   <td><strong>Save and Recover </strong>your data when blobs or blob snapshots are accidentally overwritten or deleted
   </td>
   <td>Enable soft delete to protect your blob data
   </td>
   <td>Storage Account
   </td>
  </tr>
</table>

### Security

<table>
  <tr>
   <td><strong>Potential Benefits</strong>
   </td>
   <td><strong>What to do?</strong>
   </td>
   <td><strong>Impacted Resources</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Prevent </strong>potential security breaches
   </td>
   <td>Web apps should request an SSL certificate for all incoming requests
   </td>
   <td>8 App Services
   </td>
  </tr>
  <tr>
   <td><strong>Prevent </strong>potential security breaches
   </td>
   <td>Private endpoint should be configured for key vault
   </td>
   <td>3 Key Vaults
   </td>
  </tr>
  <tr>
   <td><strong>Prevent </strong>potential security breaches
   </td>
   <td>Azure Cosmos DB accounts should have firewall rules
   </td>
   <td>1 Cosmos DB account
   </td>
  </tr>
  <tr>
   <td><strong>Prevent </strong>potential security breaches
   </td>
   <td>Storage account public access should be disallowed
   </td>
   <td>2 Storage Accounts
   </td>
  </tr>
  <tr>
   <td><strong>Prevent </strong>potential security breaches
   </td>
   <td>Storage accounts should restrict network access using Virtual Network Rules
   </td>
   <td>2 Storage Accounts
   </td>
  </tr>
  <tr>
   <td><strong>Prevent </strong>potential security breaches
   </td>
   <td>Virtual Network should be protected by Azure Firewall
   </td>
   <td>1 Virtual Network
   </td>
  </tr>
  <tr>
   <td><strong>Prevent </strong>potential security breaches
   </td>
   <td>Diagnostic logs in Search Services should be enabled
   </td>
   <td>1 Search Service
   </td>
  </tr>
</table>

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/5fBatz9.png){: .full}
