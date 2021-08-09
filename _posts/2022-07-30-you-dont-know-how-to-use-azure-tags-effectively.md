---
title: You Dont Know How to Use Azure Tags Effectively
date: 2022-07-30 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
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

> Are you wondering how can you separately track the billing of your resources allocated in same subscription? Did you think you could save money by turning off your DEV Virtual Machines over weekends, holidays or everyday evening? In this article I will discuss with you how can you achieve all of these by using Azure tags effectively.

## Azure Tags

Azure has tags that can be applied to some resource. Tag has key and value. Key can is `case-insensitive` however, the value of the tag is `case-sensitive`. You can use `JSON` object to store as the value of the tag as well.

Example of tag is `ProductOwner` is the tag and it's value could be `Arun` or `Yogesh` depending on the team.

## Question arises why do I create tag and how Tags are helpful?

Well you can use tags in below scenarios to improve your cloud experiences:

1. Use an `Environment` Tag to rack deployment
2. Use Environment tag in Automation Runbooks`
3. Use a `CostCenter` tag to track osts.
4. Use `Azure Policy` to enforce ag usage
5. Don't clobber your tags in the zure CLI

## Create `Environment` tag to Track Deployment

| Key              | Value                     |
| ---------------- | ------------------------- |
| **Environment**: | `DEV , QA , UAT, PRO etc` |
| ---------------- | ------------------------- |

Suppose, now if you want to share DEV, QA, UAT environments in the same subscriptions then you can quickly identify resources per environment.

![](https://i.imgur.com/rzRYlVB.png){: .full}

## Use Tags in `Automation Runbooks`

You can use environment tag to set up Runbook to automatically shut off all DEV Virtual Machines in the weekend and the evenings. That will reduce the monthly bill.

## Use `CostCenter` Tag to track Cost

Apply `CostCenter` tag to the allocated resources to the team or department that are responsible for the cost of those resources. Then you can go to Azure Cost Management search cost for the tags by `CostCenter` tag.

**Example:**

| Key          | Value                  |
| ------------ | ---------------------- |
| `CostCenter` | Finance or IT or Sales |

![](https://i.imgur.com/1MDqvzm.png){: .full}

## Use Azure Policies to enforce tag Usages

Azure policy can be applied from management group. MS has built-in policy to enforce tag on resource. Once you apply the policy then after 24 hours you will go to the compliance report and notice how many resources are not applied tags.

## Don’t Clobber your tags in the Azure CLI

Before add/delete/update a tag on the resource using Azure CLI. Pull all the tags in the resource and then perform the action.

## Reference

https://www.youtube.com/watch?v=yUEbKxsqr7Q

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
