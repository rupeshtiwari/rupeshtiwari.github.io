---
title: Design Azure Governance for Microsoft Azure Solutions Architect
date: 2022-02-26 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
image: https://i.imgur.com/zZYQYQA.png
header:
  image: https://i.imgur.com/3PR1wRa.png
  teaser: https://i.imgur.com/zZYQYQA.png
  og_image: https://i.imgur.com/zZYQYQA.png
tags:
  - azure
  - webdev
  - beginners
  - az304
---

> Are you wondering how to enforce business compliance to the deployed resources over Azure? Did you know you can write configuration file to deploy resources and enforce the policies in your organization? Read this article to learn about the core Azure Governance with [Azure Policy Microsoft Documentation](https://docs.microsoft.com/en-us/azure/governance/policy/) that enables all of these out of the box for you.

## Resource Structure in Azure

Azure provides four levels of scope: [management groups](https://docs.microsoft.com/en-us/azure/governance/management-groups/overview), subscriptions, [resource groups](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview#resource-groups), and resources. The following image shows an example of these layers.

![](https://imgur.com/fisyo54.png){: .full}

Standard Enterprise Governance Example:
![](https://imgur.com/b368NAc.png){: .full}

## Azure Policy

Azure Policy is defined in JSON. Azure policy uses attributes of the resources to define the rules and effects. Azure policy has Rule, Rule has condition and Effect. The effect could be to modify resource, deny creation of resource, audit resource metadata, delete resource etc. While creating policy make sure you make the policy name and description good so that user can understand what exactly is this Policy. When Policy fails it show the name and description. Therefore, follow[ Microsoft naming conventions](https://docs.microsoft.com/en-us/system-center/scsm/sm-parts?view=sc-sm-2019) also recommended.

{: .notice--info}
<i class="fa fa-info-circle"></i> **Note** \
\
Policy has one **Rule** & Rule has **Combination of Conditions** and **Single Effect**. When conditions are met the effect will be executed.

Below are some examples of Azure Policy

- Audit resources
- Stop the creation of the resource to restricted region
- Deploy the agent missing from configuration
- You can not create a resource unless you have tag added.
- Copy tag from resource group to resource.
- In prod, make sure I have Geo Replication
- In prod, make sure we don't have shut down or deallocate VM due to budget constraints for mission critical business.
- In dev/test, don't let me use to expensive VM
- In dev/test, based on budget shut down VM or deallocate them.

{: .notice--info}
<i class="fa fa-info-circle"></i> **Note** \
\
Policy can help you to control the **costs** 💰 and easily manage your resources. For example, in dev policy can deny creating high configuration VMs.

### Policy Rule

The policy rule consists of **If** and **Then** blocks. In the If block, you define one or more conditions that specify when the policy is enforced.

```json
{
    "if": {
        <condition> | <logical operator>
    },
    "then": {
        "effect": "deny | audit | modify | append | auditIfNotExists | deployIfNotExists | disabled"
    }
}
```

### Policy Effect

Each policy definition in Azure Policy has a single effect. That effect determines what happens when the policy rule is evaluated to match.

These effects are currently supported in a policy definition:

- [Append](https://docs.microsoft.com/en-us/azure/governance/policy/concepts/effects#append)
- [Audit](https://docs.microsoft.com/en-us/azure/governance/policy/concepts/effects#audit)
- [AuditIfNotExists](https://docs.microsoft.com/en-us/azure/governance/policy/concepts/effects#auditifnotexists)
- [Deny](https://docs.microsoft.com/en-us/azure/governance/policy/concepts/effects#deny)
- [DeployIfNotExists](https://docs.microsoft.com/en-us/azure/governance/policy/concepts/effects#deployifnotexists)
- [Disabled](https://docs.microsoft.com/en-us/azure/governance/policy/concepts/effects#disabled)
- [Modify](https://docs.microsoft.com/en-us/azure/governance/policy/concepts/effects#modify)

### Azure Policy Extension for Visual Studio Code

![](https://imgur.com/GNjsxrn.png){: .full}

Use the [Azure Policy extension for Visual Studio Code](https://docs.microsoft.com/en-us/azure/governance/policy/how-to/extension-for-vscode) to view and discover aliases for resource properties.
![](https://i.imgur.com/eUE8CD0.png)

### Azure Policy Example

Example **inherit a tag from the resource group if missing** in this if a resource has no tag applied and if it is created within a resource group that has a tag then copy the tag key value pair to the added resource.

Step 1: Defining parameters in the Policy
![](https://imgur.com/kGwmnFY.png){: .full}

Step 2: Defining Rule
In rule first we need a condition: Tag Name does not exist on Resource and Resource group has the Tag Name

![](https://imgur.com/9IK7AM8.png){: .full}

Then write effect to append tag on Resource.
![](https://imgur.com/gIK5ETW.png){: .full}

### Azure Policy Structure

Policy Overview:

![](https://i.imgur.com/Ycvb2If.png){: .full}

## Search Policies by Searching with Azure Tags

You can **not** tag to Management Groups. You can tag these Resource, Resource Group , Subscriptions

![](https://i.imgur.com/XrRsJWS.png){: .full}

Search by Tag in Azure Portal for Cost Management

![](https://i.imgur.com/r7hYgXT.png){: .full}

You can see all of the policies related to Tag.

![](https://i.imgur.com/QCT6Rv0.png){: .full}

Copy Tag from Resource group to Resource Policy

## Policies vs Initiatives

Policy is one rule. However, Group of Policies are called Initiatives.

{: .notice--info}
<i class="fa fa-info-circle"></i> **Note** \
\
Initiatives help us to group related policies together to make easier for tracking compliances and for assignments.

## Azure Policy Definition in JSON

Azure policy JSON contains below elements

- display name
- description
- mode
- metadata
- parameters
- policy rule
  - logical evaluation
  - effect

{: .notice--success}
🏆 **ProTip** \
\
Check [Microsoft Built-In Policies](https://docs.microsoft.com/en-us/azure/governance/policy/samples/)

### Restrict creating resource if not have certain SKU name Rule.

Policy Name & Description

![](https://i.imgur.com/kXKPbjF.png){: .full}

Parameters of Policy

![](https://i.imgur.com/YWJmvxa.png){: .full}

Rules of Policy

![](https://i.imgur.com/BpkjpjL.png){: .full}

![](https://i.imgur.com/4I6lo5i.png){: .full}

![](https://i.imgur.com/kRQyuEr.png){: .full}

### Inherit a tag from the resource Group

![](https://i.imgur.com/AuilEvT.png){: .full}

![](https://i.imgur.com/1KgH1Vv.png){: .full}

### Azure Security Center Initiative for Audit

Azure security center uses initiative to audit resource compliances.

![](https://i.imgur.com/Od1smH3.png){: .full}

Azure security center initiative policies

![](https://i.imgur.com/w1Eyc8C.png){: .full}

Policy Definition for Audit
![](https://i.imgur.com/fZS2Cuq.png){: .full}
![](https://i.imgur.com/BHa7sLC.png){: .full}

### Policy to deny resource if not in allowed location

![](https://i.imgur.com/s0ao40y.png){: .full}

![](https://i.imgur.com/DVrRyiI.png){: .full}

![](https://i.imgur.com/1xiA0uB.png){: .full}

![](https://i.imgur.com/QHMIqkp.png){: .full}

## Creating Azure Policy

{: .notice--info}
<i class="fa fa-info-circle"></i> **Note** \
\
The Policy Definition location must be a **management group** or a **subscription**.

![](https://i.imgur.com/RsMNXIC.png){: .full}

![](https://i.imgur.com/ULi4FBJ.gif){: .full}

## Creating Azure Initiative

Group together multiple policy to track the compliance and also easier to assign.

![](https://i.imgur.com/0fvYDQK.gif){: .full}

## Viewing an Assigned Policy to User

What is the end effect of the user once Initiative or Policies are assigned to him.

![](https://i.imgur.com/puDGBV7.png){: .full}

### Policy assignments

![](https://i.imgur.com/G84x0oo.png){: .full}

### Scope of policy

scope is subscription in below example

![](https://i.imgur.com/75EVIjd.png){: .full}

scope is resource group

![](https://i.imgur.com/88uHutV.png){: .full}

### Enforced policy

![](https://i.imgur.com/OEOYRBt.png){: .full}

### Passing parameters to Policy

![](https://i.imgur.com/2lhQlA0.png){: .full}

## Assigning Azure Policy

{: .notice--info}
<i class="fa fa-info-circle"></i> **Note** \
\
Policy assignments are inherited by child resources. If you assign Policy at Subscription level then all of the resource groups will inherit the same policy and so on. If you want to assign policy in different subscription then put the definition location to management group level.

Step 1: Select the scope where to assign policy. I will select at subscription
![](https://i.imgur.com/6qLn6JR.png){: .full}

Step 2: Exclude scope: Since we selected Policy Scope to Subscription Level you can exclude some Resource Groups or a particular Resource.

![](https://i.imgur.com/shHPuxk.png){: .full}

Step 3: Select Policy Definition: search and pick policy definition to assign

![](https://i.imgur.com/A5cMej7.png){: .full}

Step 4 : select parameters

![](https://i.imgur.com/StdIn8J.png){: .full}

Step 5 Define remediation steps.

![](https://i.imgur.com/FabBdKi.gif){: .full}

Next give permission and location of the policy

![](https://imgur.com/7EzFxLW.png){: .full}

{: .notice--success}
🏆 **ProTip** \
\
[**Remediation**](https://docs.microsoft.com/en-us/azure/governance/policy/how-to/remediate-resources) is accomplished by instructing **Azure Policy** to run the deployIfNotExists effect or the modify operations of the assigned **policy** on your existing resources and subscriptions, whether that assignment is to a management group, a subscription, a resource group, or an individual resource.

## Testing Policy

If you have below 2 policies and violet them then what is end user experience.

- Allowed Locations at **Resource group** Level
- Allowed SKU at **Subscription** level
  Rule says do not allow ZRS redundancy
  ![](https://i.imgur.com/mBqztW4.png){: .full}

Lets create a storage account on the policy resource group and pick location which is not allowed.
2 policy violations: wrong location, wrong SKU. Adding in resource group that has policy enabled for location. Using restricted location. Using restricted SKU ZRS zone redundancy not allowed.

![](https://i.imgur.com/pAJ5kuC.png){: .full}

Error by Azure Policy

![](https://i.imgur.com/AErSXLY.png){: .full}

{: .notice--warning}
<i class="fas fa-exclamation-triangle"></i> **Warning** \
\
A failed evaluation of Policy is an implicit **deny**.

## Viewing Policy Compliance

Policy audit reports goes to Azure Security Center where it will check the compliant, not compliant and display.

Suppose you have a policy to deny creating a resource for some rules. If policy is created after the resource then resource already exist even if you have a policy to deny, it won't go and delete the resource. These non-compliance you will notice in **Azure Security Center** or in **Azure Policy Compliance**.

![](https://i.imgur.com/mZ8oBbl.png){: .full}

Check this non-compliance view

![](https://i.imgur.com/fqGgLaz.png){: .full}

You can exemption saying Security Center to not report this issue.

![](https://i.imgur.com/C777L0O.png){: .full}

## Applying Base Configuration with Azure Blueprints

### ARM Template

Everything in Azure is defined by JSOn. Best way to define a resource is to by template. You define End state to be you don't need to know how to create them. Then ARM (Azure RResource Manager) will create the resource. If the storage account already existed and wrong SKU then it will correct it. If it is not exist then ARM will create it. When u deploy resource use ARM template because it is declarative and configurable, easy to integrate in devops pipeline to CI/CD first deploy the template to create the resource and then deploy my application.
![](https://i.imgur.com/nudE9V8.png){: .full}

{: .notice--success}
🏆 **ProTip** \
\
You must follow [Microsoft Naming and Tagging Resources Best Practice](https://docs.microsoft.com/en-us/system-center/scsm/sm-parts?view=sc-sm-2019) \
\
![](https://i.imgur.com/LdZ3hXK.png){: .full}

### RBAC (Resource Based Access Control)

RBAC helps you to grant actions, permissions to the Security Principles. RBAC can be applied to Management Groups, Subscriptions and Resource Groups. You should not apply at Resource Level not a good practice. RBAC is built around **Roles** only.

{: .notice--info}
<i class="fa fa-info-circle"></i> **Note** \
\
Both Policy and RBAC can be applied to various Azure Resources Levels.

Access Control

![](https://i.imgur.com/BE4HSgs.png){: .full}

![](https://i.imgur.com/le2NTjY.png){: .full}

Role uses Resource Providers to get available permissions and combine them to crate a role.
In this example it is using Compute Resource and Network Resource.

![](https://i.imgur.com/sPMZg0b.png){: .full}

Role is combinations of approved actions that can be performed.

![](https://i.imgur.com/kij3LyE.png){: .full}

## Azure Blueprints

I can have ARM template, role assignment, i.e. RBAC and policy all as artifacts within a blueprint and all assigned at different level in the various resource groups, I create or may be already exists as part of blueprint. I can assign the blueprint at subscription level. And blueprint is going to stamp down that configuration. Once blueprint is published then only it can be assigned. Blueprint are saved in subscription or management group.

### Azure Blueprint can lock resources in three types

Blueprint can be assigned in 3 different flavors:

**Don't Lock**: Subscription owner can modify or delete the resources that are stamped down.

**Read Only**: I can not modify or delete the resources that are stamped down.

**Do Not Delete**: I can modify but can't delete various resources.

## Viewing & Creating Azure Blueprint

### Viewing Built-In Azure Blueprint

There is ready made blueprint for `ISO 27001:ASE/SQL workload` that deploys resource groups for azure app service and SQL DB and extends ISO standard.

![](https://imgur.com/2cwf9dX.png){: .full}

![](https://imgur.com/pNHkGrN.gif){: .full}

This is only using ARM template and Resource Group only.

`FedRAMP High` built-in template is for Assigning Policies.

### Creating Azure Blueprint

In Azure blueprint you can add Policy, Role, ARM Template and Resource group.

![](https://imgur.com/qfWCyfB.png){: .full}

#### Step 1: Add Resource Group

![](https://imgur.com/1IKoh7L.png){: .full}

You can add Resource Group put name `rg-networking`

Location is hardcoded.

#### Step 2: Next add Artifacts

You can not nest resource group you can choose only ARM Template, Role and Policy

![](https://imgur.com/IzV71SJ.png){: .full}

#### Step 3: Assign Role

![](https://imgur.com/rnF3u2W.png){: .full}

![](https://imgur.com/0tzWK8p.png){: .full}

Virtual Machine Contributor Role
And Assign to Some Admin Group

In this example, I will go ahead and create brand new blueprint which will have one Policy at subscription level. Next I will create a Resource Group for networking. Inside Resource group I will add Role as contributer to resource group and finally I will add ARM Template to create New Network.

![](https://imgur.com/BOGk4E6.gif){: .full}

### Assigning Azure Blueprint

When you publish your blueprint you have to give some version like `v1.0`. Next you can assign blueprint. Once you assign it will execute steps and create resources, add policies, deploy network etc. You can deploy as many 5000 resources through one Azure blueprint.

![](https://imgur.com/9aabgj4.gif){: .full}

{: .notice--success}
🏆 **ProTip** \
\
When you **delete** Azure Blueprint it does **not delete the resources** that it deployed. when you want to assign a blueprint across the subscriptions under your enterprise then Assign it at Management Group level.

## References

1. [Azure Policy Microsoft Documentation](https://docs.microsoft.com/en-us/azure/governance/policy/)
2. [Microsoft Policy Concepts & Definition Structure](https://docs.microsoft.com/en-us/azure/governance/policy/concepts/definition-structure)

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

{: .notice--info}
I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

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
