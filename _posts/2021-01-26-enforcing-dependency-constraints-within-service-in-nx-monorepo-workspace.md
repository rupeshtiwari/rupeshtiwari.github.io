---
layout: post
title: Enforcing Dependency Constraints Within Service in Nx Monorepo workspace
date: "2021-01-26 00:00 +0000"
subtitle: learn how to enforce dependency constraints on individual projects
description: learn how to enforce dependency constraints on individual projects
cover-img: "https://i.imgur.com/NRaQUA5.png"
cover_image: "https://i.imgur.com/H6AlL2d.png"
thumbnail-img: "https://i.imgur.com/GGaoewS.png"
share-img: "https://i.imgur.com/GGaoewS.png"
tags: nx,beginners,angular,monorepo
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 590426
toc: true
---

> In my previous article
> [“Imposing Constraints on Dependency Graph”](https://dev.to/rupeshtiwari/creating-new-app-with-nx-console-5blh)
> you did learn how to isolate all projects of a folder (service A) from all of
> the projects of another folder (service B). That is something called as
> 1-dimensional dependency graph. Now In this blog, I will teach you how to
> enforce dependency rules among the projects within the same folder (service A
> or B). This is called 2 dimensional dependency graph.

## Introduction

If you are following
[Udi Dahan's service oriented architecture](http://udidahan.com/) then you might
be aware that services should be autonomous and they should not depend on each
other. Service code, database, models should be isolated and they can not take
compile time dependency on other services and each other. I am very happy to say
that now you can achieve this in JavaScript also by using
[Nx Monorepo](https://nx.dev/) framework.

## Understanding project structure in Nx Monorepo

In my monorepo workspace, I have 3 service boundaries:

**Sales** that has **product editor** and **products** **Customers** that has
**user editor** and **users** **Branding** that has **logger**, **ng-material**
and **layout** projects.

![](https://i.imgur.com/oJc3QwJ.png)

Here is our complete dependency graph of workspace:
![](https://i.imgur.com/PVaLBqa.png)

## Defining Dependency Rule

1. Projects within Sales should not depend on each other
2. Projects within Customers should not depend on each other.
3. Projects within sales should not depend on the customer's projects and vice
   versa.
4. Each project can depend on all branding projects. 
   ![](https://i.imgur.com/FMGueRg.png)

## Configuring Nx Monorepo

If you are using Nx Monorepo then you might be aware of the Nx.json file. Where
you can define tags and scope to each project. Then you will add dependency
constraints in the `tslint` file at the root folder. This way you will configure
dependency graph constraints within your work-space. We can enforce dependency
rules by using **scope** and **type** lets understand them.

## What does scope mean in nx.json?

We will use **scope** to define the big boundary; it is our service.  Example
sales, customers.

## What does type mean in nx.json?

We will use **type** to define the project boundary within the service. Example
product-editor, products etc.

## Isolating project within a Sales Service: Step1 nx.json configuration

In order to isolate projects within a service, we have to add both scope and
type to a project configuration inside an nx.json file. So that it can be
isolated within the service projects.

Example: if sales has a product editor and products project. And we want to
isolate both projects from each other such that they do not depend on each
other. Then in this case, I have to add both scope:sales and
type:sales-product-editor to project editor project configuration. And I have to
add both scope:sales and type:sales-products to the product project
configuration in nx.json file. Here is the complete code for projects
configuration on nx.json.

```json
"sales-product-editor": {

      "tags": [

        "scope:sales",

        "type:sales-product-editor"

      ]

    },

    "sales-products": {

      "tags": [

        "scope:sales",

        "type:sales-products"

      ]

    },

```

## Isolating project within a Sales Service: Step2 tslint.json configuration

In the `tslint.json` notice, I am defining source tag for sales. Then I am also
defining a source tag per project. For example for a sales-product-editor
project I am defining its dependency on `type:sales-product-editor` and
`type:branding-logger`,`type:branding-ng-material`,`type:branding-layout`. This
way I am guaranteeing that the product editor within the Sales service will only
depend on branding projects and it will not depend on another project within the
sales service itself. Here is the complete code for
`nx-enforce-module-boundaries`.

```json
 "depConstraints": [
          {
            "sourceTag": "scope:sales",
            "onlyDependOnLibsWithTags": [
              "scope:sales",
              "scope:branding"
            ]
          },
          {
            "sourceTag": "type:sales-product-editor",
            "onlyDependOnLibsWithTags": [
              "type:sales-product-editor",
              "type:branding-logger",
              "type:branding-layout",
              "type:branding-ng-material"
            ]
          },
          {
            "sourceTag": "type:sales-products",
            "onlyDependOnLibsWithTags": [
              "type:sales-products",
              "type:branding-logger",
              "type:branding-layout",
              "type:branding-ng-material"
            ]
          },]
```

## Testing Dependency Boundary Constraints

**First**: we will import project dependency from branding service and it should
allow us to do so.

Go to sales sales-product-editor.module.ts and then import logger module.

Note: 👉 while importing don't use relative path otherwise `tslint` rule will
not work. Always import with a folder alias like I am doing below.

`import { BrandingLoggerModule } from '@myorg/branding/logger';`

Notice you did _not_ see any tslint errors.

**Second**: we will try to import products module and as per rule. Product
Editor should not depend on Products project. Let's test it.

```ts
import { Products } from "@myorg/sales-products";
```

Now you should notice the tslint error is showing as a squiggly line and it says
below error.

```error
A project tagged with "type:sales-product-editor" can only depend on libs tagged with "type:sales-product-editor", "type:branding-logger", "type:branding-layout", "type:branding-ng-material" (nx-enforce-module-boundaries)
```

![](https://i.imgur.com/JudxGKP.png)

Also if you will try to run npm run lint then also it will break and show this
as compile time error.

So now you see how Nx framework is establishing and enforcing dependency graphs
within a service boundary.

**Third**: Let's also confirm that I should not be able to take the dependency
from customer service.

If I import users from customers service within sales service

`import {Users} from '@myorg/customers-users'`

Then notice I see an error below.

A project tagged with "scope:sales" can only depend on libs tagged with
"scope:sales", "scope:branding" (`nx-enforce-module-boundaries`)tslint(1)
![](https://i.imgur.com/hEdlM5b.png)

## Complete source code: nx.json projects

```json
  "projects": {
    "sales-product-editor": {
      "tags": [
        "scope:sales",
        "type:sales-product-editor"
      ]
    },
    "sales-products": {
      "tags": [
        "scope:sales",
        "type:sales-products"
      ]
    },
    "customers-user-editor": {
      "tags": [
        "scope:customers",
        "type:customers-user-editor"
      ]
    },
    "customers-users": {
      "tags": [
        "scope:customers",
        "type:customers-users"
      ]
    },
    "branding-ng-material": {
      "tags": [
        "scope:branding",
        "type:branding-ng-material"
      ]
    },
    "branding-layout": {
      "tags": [
        "scope:branding",
        "type:branding-layout"
      ]
    },
    "branding-logger": {
      "tags": [
        "scope:branding",
        "type:branding-logger"
      ]
    },
    "onlinestore-client": {
      "tags": [
        "scope:itops",
        "type:app"
      ]
    },
    "onlinestore-admin": {
      "tags": [
        "scope:itops",
        "type:app"
      ]
    },
    "onlinestore-client-e2e": {
      "tags": [],
      "implicitDependencies": [
        "onlinestore-client"
      ]
    },
    "onlinestore-admin-e2e": {
      "tags": [],
      "implicitDependencies": [
        "onlinestore-admin"
      ]
    }
  }
```

## Complete source code: tslint.json

```json
 "nx-enforce-module-boundaries": [
      true,
      {
        "enforceBuildableLibDependency": true,
        "allow": [],
        "depConstraints": [
          {
            "sourceTag": "scope:sales",
            "onlyDependOnLibsWithTags": [
              "scope:sales",
              "scope:branding"
            ]
          },
          {
            "sourceTag": "type:sales-product-editor",
            "onlyDependOnLibsWithTags": [
              "type:sales-product-editor",
              "type:branding-logger",
              "type:branding-layout",
              "type:branding-ng-material"
            ]
          },
          {
            "sourceTag": "type:sales-products",
            "onlyDependOnLibsWithTags": [
              "type:sales-products",
              "type:branding-logger",
              "type:branding-layout",
              "type:branding-ng-material"
            ]
          },
          {
            "sourceTag": "scope:customers",
            "onlyDependOnLibsWithTags": [
              "scope:customers",
              "scope:branding"
            ]
          },
          {
            "sourceTag": "type:customers-user-editor",
            "onlyDependOnLibsWithTags": [
              "type:customers-user-editor",
              "type:branding-logger",
              "type:branding-layout",
              "type:branding-ng-material"
            ]
          },
          {
            "sourceTag": "type:customers-users",
            "onlyDependOnLibsWithTags": [
              "type:customers-users",
              "type:branding-logger",
              "type:branding-layout",
              "type:branding-ng-material"
            ]
          },
          {
            "sourceTag": "scope:branding",
            "onlyDependOnLibsWithTags": [
              "scope:branding"
            ]
          }
        ]
      }
    ],
```

## Conclusion

I highly recommend to use nx monorepo and enforce constraints on dependency
graph within your work-space.

## Become full stack developer 💻

If you want to become full stack developer and grow your carrier as new software
developer or Lead Developer/Architect. Consider subscribing to our full stack
development training programs. We have All-Access Monthly membership plans and
you will get unlimited access to all of our video courses, slides, source code &
Monthly video calls.

- Please subscribe to
  [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to
  access current and future angular, node.js and related courses.
- Please subscribe to
  [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to
  get everything from PRO plan. Additionally, you will get access to monthly
  live Q&A video call with Rupesh and you can ask doubts/questions and get more
  help, tips and tricks.

> You bright future is waiting for you so visit today
> [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board
> on your dream software company as a Developer,Architect or Lead Engineer role.
**💖 Say 👋 to me!**

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:fullstackmaster1@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>
