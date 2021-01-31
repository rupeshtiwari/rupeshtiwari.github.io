---
layout: post
title: Dependency Constraints in Nx Monorepo Projects
date: '2021-01-30 19:32 -0500'
subtitle: Learn how to enforce dependency constraints in your monorepo
description: Learn how to enforce dependency constraints in your monorepo
cover-img: 'https://i.imgur.com/hiQZ0BG.png'
cover_image: 'https://i.imgur.com/NLPsgZR.jpg'
thumbnail-img: 'https://i.imgur.com/NLPsgZR.jpg'
share-img: 'https://i.imgur.com/NLPsgZR.jpg'
last_modified_at: '2021-01-30 19:32 -0500'
published: true
sitemap: true
excerpt_separator: <!--more-->
tags:
  - nx
  - nrwl
  - monorepo
id: 587932
---

In [Nx Monorepo workspace](https://nx.dev/) you can have applications(apps) and libraries(libs).
Apps mostly have projects that are front-end applications hosted on the server.

However, Libs should have the projects which should supporting your applications.Inside the Libs folder you can have your service projects. Within the Libs folder you can end up creating lots of projects and it is very confusing when every project can depend on every other project.

However, If you want to partition service code into well-defined cohesive blocks. Especially if you are following Service Oriented Architecture [Advanced Distributed Systems Design by Udi Dahan](https://particular.net/adsd). Then you might be aware that one service code should not depend on another service code. Therefore, you want to impose constraints on how projects can depend on each other in JavaScript Projects. Then it is very difficult if you don't use any framework. I would highly recommend using [Nx Monorepo](https://nx.dev/) `tag` and `scope`.

Read this article till the end to learn more!

## I have a project where I have Libraries

`Branding` folder that has couple of projects like `logger`, `layout`, `angular material`
`Sales` folder that has couple of projects `product-editor` and `products`
`Customers` folder that has couple of projects `user-editor` and `users`
![](https://i.imgur.com/i1YhcvR.png)

## I want to enforce below rules by Nx Monorepo Framework

- Sales projects can depend on Branding projects
- Sales projects should not depend on Customers projects
- Customers projects can depend on Branding projects
- Customers projects should not depend on Sales projects
- Branding projects can not depend on Sales projects
- Branding projects can not depend on Customers projects

![](https://i.imgur.com/XAnomcU.png)

## Step1: Add Project's Tags in Nx.json

Go to `nx.json` and add projects tags.

```json
"projects": {
    "sales-product-editor": {
      "tags": [
        "scope:sales"
      ]
    },
    "sales-products": {
      "tags": [
        "scope:sales"
      ]
    },
    "customers-user-editor": {
      "tags": [
        "scope:customers"
      ]
    },
    "customers-users": {
      "tags": [
        "scope:customers"
      ]
    },
    "shared-ng-material": {
      "tags": [
        "scope:branding"
      ]
    },
    "shared-layout": {
      "tags": [
        "scope:branding"
      ]
    },
    "shared-logger": {
      "tags": [
        "scope:branding"
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
    },
       "onlinestore-client": {
      "tags": [
        "type:app",
        "scope:client"
      ]
    },
    "onlinestore-admin": {
      "tags": [
        "type:app",
        "scope:admin"
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

## Step2: Add Enforcements in tslint.json file

Add below `nx-enforce-module-boundaries` array in `tslint.json` file.

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
            "sourceTag": "scope:customers",
            "onlyDependOnLibsWithTags": [
              "scope:customers",
              "scope:branding"
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

## Test the boundary constraint

Now if you go to `sales-products.module.ts` and perform below imports.

Remember the Rule for Sales Service: :+1:

- Sales projects can depend on Branding projects
- Sales projects can depend on other Sales projects
- Sales projects should not depend on Customers projects

### Lets Test the Sales Service boundary.

- 1.  Try to import `SharedLoggerModule` from branding scope and run `npm run affected:lint` you will _not_ see any error.

```ts
// sales project
import { SharedLoggerModule } from '@myorg/shared/logger';
```

- 2.  Try to import `CustomersUserEditorModule` from Customers scope and run `npm run affected:lint` you _will_ see any error.

```ts
// Sales project can not depend on Customers project
import { CustomersUserEditorModule } from '@myorg/customers-user-editor';
```

You will see below error:

```error
> ng run sales-products:lint
Linting "sales-products"...
C:/Projects/GitHub/nx-repo/myorg/myorg/libs/sales/products/src/lib/sales-products.module.ts:9:1
ERROR: 9:1  nx-enforce-module-boundaries  A project tagged
with "scope:sales" can only depend on libs tagged with "scope:sales", "scope:branding"
```

![](https://i.imgur.com/ZhCEiaq.png)

- 3.  Try to import `SalesProductEditorModule` Project from sales service only and and run `npm run affected:lint` you will _not_ see any error.

```ts
// Sales project can depend on other sales project
import { SalesProductEditorModule } from '@myorg/sales-product-editor';
```

## Conclusion

So I loved the way Nx Monorepo framework gives the boundary constraints out of the box.

## Become full stack developer 💻

If you want to become full stack developer and grow your carrier as new software developer or Lead Developer/Architect. Consider subscribing to our full stack development training programs. We have All-Access Monthly membership plans and you will get unlimited access to all of our video courses, slides, source code & Monthly video calls.

- Please subscribe to [All-Access Membership PRO plan](www.fullstackmaster.net/pro) to access current and future angular, node.js and related courses.
- Please subscribe to [All-Access Membership ELITE plan](www.fullstackmaster.net/elite) to get everything from PRO plan. Additionally, you will get access to monthly live Q&A video call with Rupesh and you can ask doubts/questions and get more help, tips and tricks.

> You bright future is waiting for you so visit today [Fullstackmaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a Developer,Architect or Lead Engineer role.
