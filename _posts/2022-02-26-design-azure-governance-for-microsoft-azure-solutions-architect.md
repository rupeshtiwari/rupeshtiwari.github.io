---
layout: post
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

> Are you wondering how to enforce business compliance to the deployed resources over Azure? Did you know you can write configuration file to deploy resources and enforce the policies in your organization? Read this article to learn about the core Azure Governance that enables all of these out of the box for you.

## Resource Structure in Azure

![](https://i.imgur.com/IDGlkTH.png)

## Azure Policy

Azure Policy is defined in JSON. Azure policy uses attributes of the resources to define the rules and effects.

## Azure Policy Examples

- Audit rules
- Stop the creation of the resource to restricted region
- Deploy the agent missing from configuration
- You can not create a resource unless you have tag added.
- Copy tag from resource group to resource.

### Prod

- Make sure I have Geo Replication
- Make sure we dont have shut down or dealocate VM due to budget constraints for mission critical business.

### Dev/Test

- dont let me use to expensive vm
- based on budget shut down vm or dealocate

### Azure Policy Structure

Policy Overview:

![](https://i.imgur.com/Ycvb2If.png)

## Naming and Tagging Best Practice

![](https://i.imgur.com/LdZ3hXK.png)

https://docs.microsoft.com/en-us/system-center/scsm/sm-parts?view=sc-sm-2019

## Azure Tag

You can **not** tag to Management Groups. You can tag these Resource, Resource Group , Subscriptions

![](https://i.imgur.com/XrRsJWS.png)

Search by Tag in Azure Portal for Cost Management

![](https://i.imgur.com/r7hYgXT.png)

You can see all of the policies related to Tag.

![](https://i.imgur.com/QCT6Rv0.png)

Copy Tag from Resource group to Resource Policy

## Policies vs Initiative

Policy is one rule.
Group of Policies are called Initiatives.

## Azure Policy Definition JSON

### Restrict creating resource if not have certain SKU name Rule.

Policy Name & Description

![](https://i.imgur.com/kXKPbjF.png)

Parameters of Policy

![](https://i.imgur.com/YWJmvxa.png)

Rules of Policy

![](https://i.imgur.com/BpkjpjL.png)

![](https://i.imgur.com/4I6lo5i.png)

![](https://i.imgur.com/kRQyuEr.png)

### Inherit a tag from the resource Group

![](https://i.imgur.com/AuilEvT.png)

![](https://i.imgur.com/1KgH1Vv.png)

### Azure Security Center Initiative for Audit

Azure security center uses initiative to audit resource compliances.

![](https://i.imgur.com/Od1smH3.png)

Azure security center initiative policies

![](https://i.imgur.com/w1Eyc8C.png)

Policy Definition for Audit
![](https://i.imgur.com/fZS2Cuq.png)
![](https://i.imgur.com/BHa7sLC.png)

### Policy to deny resource if not in allowed location

![](https://i.imgur.com/s0ao40y.png)

![](https://i.imgur.com/DVrRyiI.png)

![](https://i.imgur.com/1xiA0uB.png)

![](https://i.imgur.com/QHMIqkp.png)

## Create new custom Azure Policy

![](https://i.imgur.com/RsMNXIC.png)

![](https://i.imgur.com/ULi4FBJ.gif)

## Creating new custom Azure Initiative

Group together multiple policy to track the compliance and also easier to assign.

![](https://i.imgur.com/0fvYDQK.gif)

## How Assigned Policy Looks Like?

What is the end effect of the user once Initiative or Policies are assigned to him.

![](https://i.imgur.com/puDGBV7.png)

### Policy assignments

![](https://i.imgur.com/G84x0oo.png)

### Scope of policy

scope is subscritpion in below example

![](https://i.imgur.com/75EVIjd.png)

scope is resource group

![](https://i.imgur.com/88uHutV.png)

### Enforced policy

![](https://i.imgur.com/OEOYRBt.png)

### Passing parameters to Policy

![](https://i.imgur.com/2lhQlA0.png)

## How to assign new policy?

Step 1: Select the scope where to assing policy
![](https://i.imgur.com/6qLn6JR.png)

Step 2: Exclude scope: Since we selected Policy Scope to Subscription Level you can exclude some Resource Groups or a particular Resource.

![](https://i.imgur.com/shHPuxk.png)

Step 3: Select Policy Definition: search and pick policy definition to assign

![](https://i.imgur.com/A5cMej7.png)

Step 4 : select parameters

![](https://i.imgur.com/StdIn8J.png)

Step 5 Define remediation steps.

![](https://i.imgur.com/FabBdKi.gif)

{: .notice--success}
[**Remediation**](https://docs.microsoft.com/en-us/azure/governance/policy/how-to/remediate-resources) is accomplished by instructing **Azure Policy** to run the deployIfNotExists effect or the modify operations of the assigned **policy** on your existing resources and subscriptions, whether that assignment is to a management group, a subscription, a resource group, or an individual resource.

## Test Policy by doing wrong

If you have below 2 policies and violet them then what is end user experience.

- Allowed Locaitons at **Resource group** Level
- Allowed SKU at **Subscription** level
  Rule says do not allow ZRS redundancy
  ![](https://i.imgur.com/mBqztW4.png)

Lets create a storage account on the policy resource group and pick location which is not allowed.
2 policy violations: wrong location, wrong SKU. Adding in resource group that has policy enabled for location. Using restricted location. Using restricted SKU ZRS zone redundancy not allowed.

![](https://i.imgur.com/pAJ5kuC.png)

Error by Azure Policy

![](https://i.imgur.com/AErSXLY.png)

## Viewing Policy Compliance

Policy audit reports goes to Azure Security Center where it will check the compliant, not compliant and display.

Suppose you have a policy to deny creating a resource for some rules. If policy is created after the resource then resource already exist even if you have a policy to deny, it won't go and delete the resource. These non-compliance you will notice in **Azure Security Center** or in **Azure Policy Compliance**.

![](https://i.imgur.com/mZ8oBbl.png)

Check this non-compliance view

![](https://i.imgur.com/fqGgLaz.png)

You can exemption saying Security Center to not report this issue.

![](https://i.imgur.com/C777L0O.png)

## Applying Base Configuration with Azure Blueprints

### ARM Template

Everythign in Azure is defined by JSOn. Best way to define a resource is to by template. You define End state to be you don't need to know how to create them. Then ARM (Azure REsource Manager) will create the resource. If the storage account already existed and wrong SKU then it will correct it. If it is not exist then ARM will create it. When u deploy resource use ARM template because it is declarative and configurable, easy to integrate in devops pipeline to CI/CD first deploy the template to create the resource and then deploy my appllication.
![](https://i.imgur.com/nudE9V8.png)

### RBAC (Resource Based Access Control)

RBAC helps you to grant actions, permissions to secrurity principles. RBAC can be applied to Management Groups, Subscriptions and Resource Groups. You should not apply at Resource Level not a good practice. RBAC is built around **Roles** only.

Access Control

![](https://i.imgur.com/BE4HSgs.png)

![](https://i.imgur.com/le2NTjY.png)

Role uses Resource Providers to get available permissions and combine them to crate a role.
In this example it is using Compute Resource and Network Resource.

![](https://i.imgur.com/sPMZg0b.png)

Role is combinations of approved actions that can be performed.

![](https://i.imgur.com/kij3LyE.png)

## Azure Blueprints

I can have ARM template, role assignment, i.e. RBAC and policy all as artifacts within a blueprint and all assigned at diferrent level in the various resource groups, I create or may be already exists as part of blueprint. I can assign the blueprint at subscription level. And blueprint is going to stamp down that configuration. Once blueprint is published then only it can be assigned. Blueprint are saved in subscription or management group.

### Blueprint are locked in three types

Blueprint can be assigned in 3 different flavors:
**Don't Lock**: Subscription owner can modify or delete the resources that are stamped down.
**Read Only**: I can not modify or delete the resources that are stamped down.
**Do Not Delete**: I can modify but can't delete various resources.
