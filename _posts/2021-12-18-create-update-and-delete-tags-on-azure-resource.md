---
title: Create Update and Delete Tags on Azure Resource
date: 2021-12-18 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/7I0NoBe.png
header:
  image: https://i.imgur.com/vce9zzl.png
  teaser: https://i.imgur.com/7I0NoBe.png
  og_image: https://i.imgur.com/7I0NoBe.png
tags:
  - azure
  - webdev
  - beginners
  - tutorial
---

> Learn more about how to use tags to organize your Azure resources and management hierarchy. Also learn the `cmdlet` used to fetch tags from Azure resources.

## What is Tag in Azure Resources?

- You apply tags to your **Azure resources, resource groups, and subscriptions** to `logically` organize them into a `taxonomy`.
- Each tag consists of a **name and a value pair**. For example, you can create tag and apply the name "Environment" and the value "Stage" to all the resources in stage. Learn more about [Tagging ideas](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources)
- **Tag names are case-insensitive**: Example: "Environment" or "environment" they are same tag names.
- **Tag values are case-sensitive**: Example: "Stage" or "stage" they are different tag values.

{: .notice-success}
Learn more about [how to use tags to organize your Azure resources and management hierarchy](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources)

```powershell
Get-AzResource # To fetch  all resources
```

## Apply tags to Azure Resource

{% include video id="QTDDL8_0N3c" provider="youtube" %}

Use `New-AzTag` to apply tag on resource in **Azure**.

```powershell
# Create Tag variable
$tags = @{"Dept"="Finance"; "Status"="Normal"}
# Get the resource that you want to appply tag on.
$resource = Get-AzResource -Name "Application Insights Smart Detection" -ResourceGroup AdmissionApplication
# Apply Tag
New-AzTag -ResourceId $resource.id -Tag $tags
```

## View Tag on Azure Resource

{% include video id="QTDDL8_0N3c" provider="youtube" %}
Use `Get-AzTag` cmdlet to view tag on Azure resource. You have to pass the resource Id though. You can also use `Get-AzResource` cmdlet to view the tags directly under a perticular resource.

```powershell
# Get the resource that you want to view tag on.
$resource = Get-AzResource -Name "Application Insights Smart Detection" -ResourceGroup AdmissionApplicationGet-AzTag -ResourceId   $resource.id
# View tags
Get-AzTag -ResourceId   $resource.id
```

## Delete Tag on a Azure Resource

{% include video id="2211KACFlmw" provider="youtube" %}
To remove specific tags, use **Update-AzTag** and set **-Operation** to **Delete**. Pass in the tags you want to delete.

```powershell
# Get the resource that you want to view tag on.
$resource = Get-AzResource -Name "Application Insights Smart Detection" -ResourceGroup AdmissionApplication
# View tags
Get-AzTag -ResourceId $resource.id
# Decide which tags to remove
$removeTags = @{"Dept"="Finance"; "Status"="Normal"}
# Delete the tags
Update-AzTag -ResourceId $resource.id -Tag $removeTags -Operation Delete
# Confirm Tags are deleted by fetching them again
Get-AzTag -ResourceId $resource.id
```

## Delete Tag on a Azure Subscription

{% include video id="2211KACFlmw" provider="youtube" %}
To remove all tags from your Azure subscription, use the [Remove-AzTag](https://docs.microsoft.com/en-us/powershell/module/az.resources/remove-aztag) command.

```powershell
# Get subscription by it's name
$subscription = (Get-AzSubscription -SubscriptionName   "Example Subscription").Id
# Remove the tags
Remove-AzTag -ResourceId "/subscriptions/$subscription"

```

## Merge Tag

{% include video id="8vtnn1ZacNg" provider="youtube" %}

```powershell
$tags = @{"Location"="Canada"}
# Merge Tag
Update-AzTag -ResourceId $resource.id -Tag $tags -Operation Merge
```

## Replace Tag

{% include video id="0GJ27K3CWXA" provider="youtube" %}

```powershell
$tags = @{"Dept"="Sales"; "Status"="High"}
# Replace tags
Update-AzTag -ResourceId $resource.id -Tag $tags -Operation Replace
```

{: .notice--info}
<i class="fab fa-youtube" color="primary"></i> \
Watch the entire videos on [**Full Stack Master YouTube Channel** related to Managing Tags in Azure Resources](https://www.youtube.com/playlist?list=PLZed_adPqIJrUamBBcr9rYC6GFqbWK1mG)

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

{: .notice--info}
I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

{: .notice--warning}
Your bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)
