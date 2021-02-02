---
layout: post
title: Enforcing Dependency Constraints in Nx Monorepo Projects
date: '2021-01-25 00:00 +0000'
subtitle: null
description: null
cover-img: 'https://i.imgur.com/hiQZ0BG.png'
cover_image: 'https://i.imgur.com/hiQZ0BG.png'
thumbnail-img: 'https://i.imgur.com/hiQZ0BG.png'
share-img: 'https://i.imgur.com/hiQZ0BG.png'
tags: 'nx,monorepo,tooling,angular'
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 590311
---

> Are you using [NRWL/NX monorepo](https://nx.dev/) in your company? and you are worried how to configure dependencies so that you can better control your projects? I use `nx dependency constraints` to restrict which project can depend on whom just like you do in `.net` or `java` or any typed language. Read this article to understand how you can configure dependency constraint and visualize your monorepo workspace dependency graph.

## Why do you need dependency enforcement?
In Nx Monorepo workspace we can have applications (apps) and libraries (libs). Apps will have projects that are hosted on the server. Libs should have the projects which are supporting Apps. Inside the Libs folder you can have your service projects. Within the Libs we end up creating lots of projects and it is very confusing when every project can depend on every other project. 

However, If you want to partition service code into well-defined cohesive blocks. Especially if you are following Service Oriented Architecture [Advanced Distributed Systems Design by Udi Dahan](https://particular.net/adsd). Then you might be aware that one service code should not depend on another service code. Therefore, you want to impose constraints on how projects can depend on each other in JavaScript Projects. Then it is very difficult if you don't use any framework. I would highly recommend using [Nx Monorepo](https://nx.dev/) `tag` and `scope`.

Read this article till the end to learn more! 

## Understanding Monorepo workspace projects

In my monorepo you can notice I have 3 folders:
1. **`Branding`** folder that has 3 projects like `logger`, `layout`, `angular material`
2. **`Sales`** folder that has 2 projects like `product-editor` and `products` 
4. **`Customers`** folder that has 2 projects like `user-editor` and `users`

![](https://i.imgur.com/i1YhcvR.png)



## Defining which project can depend on whom 

Below are the dependency rules I want to enforce in my monorepo.

- **Sales** projects:
    - Can depend on Branding projects
    - Can not depend on Customers projects
- **Customers** projects:
    - Can depend on Branding projects
    - Can not depend on Sales projects
- **Branding** projects: 
    - Can not depend on Sales projects
    - Can not depend on Customers projects
  

![](https://i.imgur.com/XAnomcU.png)

Good news is you can do dependency enforcement free in Nx Monorepo using configuration. So follow the steps below.

## Step 1: Adding Project's Tags in Nx.json

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

## Step 2: Adding Dependency Enforcement in tslint.json file

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

## Testing the boundary constraint

Now if you go to `sales-products.module.ts` and perform below imports. 

Remember the Rule for Sales Service: 👍

- **Sales** projects 
    - can depend on **Branding** projects
    - can depend on other **Sales** projects
    - can not depend on **Customers** projects
 
### Testing Sales projects dependency rules live

 1. Try to import `SharedLoggerModule`  from branding scope and run `npm run affected:lint` you will _not_ see any error. 
 
 ```ts
 // sales project
import {SharedLoggerModule} from '@myorg/shared/logger';
 ```
 
 2. Try to import `CustomersUserEditorModule` from Customers scope and run `npm run affected:lint` you _will_ see any error. 
 
 ```ts
 // Sales project can not depend on Customers project
import {CustomersUserEditorModule} from '@myorg/customers-user-editor';

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
 
 3. Try to import `SalesProductEditorModule` Project from sales service only and  and run `npm run affected:lint` you will _not_ see any error. 
 
 ```ts
 // Sales project can depend on other sales project
import {SalesProductEditorModule} from '@myorg/sales-product-editor';
 ```

## Conclusion

So I loved the way Nx Monorepo framework gives the boundary constraints out of the box.


<br/>

## Become full stack developer 💻

If you want to become full stack developer and grow your carrier as new software developer or Lead Developer/Architect. Consider subscribing to our full stack development training programs. We have All-Access Monthly membership plans and you will get unlimited access to all of our video courses, slides, source code & Monthly video calls.

- Please subscribe to [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to access current and future angular, node.js and related courses.
- Please subscribe to [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to get everything from PRO plan. Additionally, you will get access to monthly live Q&A video call with Rupesh and you can ask doubts/questions and get more help, tips and tricks.

> You bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a Developer,Architect or Lead Engineer role.
<a href="https://www.fullstackmaster.net">
    <img height="65" src="https://i.imgur.com/9OCLciM.png" width="270">
</a>
 

<br/>

### 💖 Say 👋 to me! 

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:fullstackmaster1@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>
