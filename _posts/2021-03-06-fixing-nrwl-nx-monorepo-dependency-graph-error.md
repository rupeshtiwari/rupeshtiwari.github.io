---
title: Fixing Nrwl Nx Monorepo Workspace Dependency Graph Error
date: '2021-03-06 00:00 +0000'
subtitle: nx monorepo workspace tslint dependency error fix
description: nx monorepo workspace tslint dependency error fix
header:
  image: 'https://i.imgur.com/BOUqmSS.jpg'
  teaser: https://i.imgur.com/ymSlvgi.jpg
  og_image: https://i.imgur.com/ymSlvgi.jpg
image: 'https://i.imgur.com/ymSlvgi.png'
tags:
  - nx
  - monorepo
  - webdev
  - beginners
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
toc: true
excerpt_separator: <!--more-->
related: true
share: true
read_time: true
author_profile: true
---

> If you are working on `nx monorepo workspace` and if you have notice below
> error and want to fix it then read this article.
> <span style="color:red;">_"Error: A project without tags cannot depend on any
> libraries (nx-enforce-module-boundaries)"_</span>

![](https://i.imgur.com/beHSv09.png)

## How dependency graph works in Nx Monorepo Workspace?

- Nx will create an inventory of project tags.
- Next Nx will compare all of the enforcement rules defined inside the
  tslint.json file.
- If Nx could not find any rule against a project tag inside the tslint.json
  file then it will throw error "A project without tags cannot depend on any
  libraries (nx-enforce-module-boundaries)"

Therefore, Projects without any tags cannot depend on any other projects.

## Project Tag for Apps are defined in Nx.json

In our nx.json file we do have the project tags for my application
`onlinestore-admin`, `onlinestore-client`,`onlinestore-dashboard`

![](https://i.imgur.com/EaXyAVW.png)

```json
    "onlinestore-client": {
      "tags": ["scope:itops", "type:onlinestore-client"]
    },
    "onlinestore-admin": {
      "tags": ["scope:itops", "type:onlinestore-admin"]
    },
    "onlinestore-dashboard": {
      "tags": ["scope:itops", "type:onlinestore-dashboard"]
    },
```

## However, Dependency Constraints for App is Missing in Tslint.json

Inside the `tslint.json` file you can notice we do not have dependency
constraints for our applications. ![](https://i.imgur.com/6gveNgH.png)

```json
  "nx-enforce-module-boundaries": [
      true,
      {
        "enforceBuildableLibDependency": true,
        "allow": [],
        "depConstraints": [
          {
            "sourceTag": "scope:sales",
            "onlyDependOnLibsWithTags": ["scope:sales", "scope:branding"]
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
            "onlyDependOnLibsWithTags": ["scope:customers", "scope:branding"]
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
            "onlyDependOnLibsWithTags": ["scope:branding"]
          }
        ]
      }
    ],
```

So notice since nx is not able to find out any dependency constraints for the
projects therefore, it is throwing error.

## Solution to Nx Dependency Graph Error

There are 2 options.

1. Either you can allow everyone to access every other projects by using `[*]`
   If you add the following, projects without any tags will be able to depend on
   any other project.

```json
{
  "sourceTag": "*",
  "onlyDependOnLibsWithTags": ["*"]
}
```

However, I would never recommend allowing all project to access other projects.

2. Recommended option is to add the dependency constraints for the application
   as well. We will explicitly define `onlinestore-client` and its dependencies.

![](https://i.imgur.com/Asl9W4z.png)

```json
 {
   "sourceTag": "type:onlinestore-client",
   "onlyDependOnLibsWithTags": [
     "type:sales-products",
     "type:customers-users",
     "type:branding-logger",
     "type:branding-layout",
     "type:branding-ng-material"
   ]
 },
 {
   "sourceTag": "type:onlinestore-admin",
   "onlyDependOnLibsWithTags": [
     "type:sales-product-editor",
     "type:customers-user-editor",
     "type:branding-logger",
     "type:branding-layout",
     "type:branding-ng-material"
   ]
 },

```

I did option 2 and notice my errors went away.
![](https://i.imgur.com/OaPHQyy.png)

## Conclusion

Now you learned how to get rid of error "A project without tags cannot depend on
any libraries (`nx-enforce-module-boundaries`)". If you want to setup dependency
boundary within your nx monorepo workspace then consider reading this article:
[NX Monorepo: Imposing Constraints on Dependency Graph](https://fullstackmaster.net/detail/blog/9)
. Sometime you also want to restrict dependencies within your boundary or
service. Read this article to learn how can you achieve
[Enforcing Dependency Constraints Within a Service using Nx Monorepo](https://fullstackmaster.net/detail/blog/10)

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to
become full stack developer and grow your carrier as new software developer or
Lead Developer/Architect. Consider subscribing to our full stack development
training programs. You can enroll to All-Access Monthly membership plans to get
unlimited access to all of our video courses, slides, source code & monthly
video calls.

- Please subscribe to
  [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to
  access current and future angular, node.js and related courses.
- Please subscribe to
  [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to
  get everything from PRO plan. Additionally, you will get access to monthly
  live Q&A video call with Rupesh and you can ask doubts/questions and get more
  help, tips and tricks.

> Your bright future is waiting for you so visit today
> [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board
> on your dream software company as a Developer,Architect or Lead Engineer role.

**💖 Say 👋 to me!** Rupesh Tiwari <a href="https://www.rupeshtiwari.com">
www.rupeshtiwari.com</a> ✉️
<a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi"> Email Rupesh</a> Founder
of <a href="https://www.fullstackmaster.net"> Fullstack Master</a>
