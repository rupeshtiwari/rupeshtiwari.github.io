---
title: Isolated Process Models for Workers
date: 2021-04-08 00:00 +0000
description: Azure Functions are becoming more isolated no more .net runtime dependencies.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/LbmMBDv.png
header:
  image: https://i.imgur.com/62zzw70.png
  teaser: https://i.imgur.com/LbmMBDv.png
  og_image: https://i.imgur.com/LbmMBDv.png
tags:
  - azure
  - functions
  - beginners
  - dotnet
---

> .Net running on-process till .Net Core 3.1 & .Net **isolated workers** are coming on .Net 6 onwards & you can deploy Azure Function Apps in production.

## Isolated Models for Workers

In future all Azure Functions will be running in Isolated Models only.

- New way of building .Net Application called as Isolated Models that decouples the Azure Functions from .Net Function Runtime.
- This gives full control of the process & it's dependency graph.
- This will be the future of all Azure Functions
- Durable Functions are in the process only.

### No more WebJobs Dependency

For each extension you need different set of packages. For Http, Worker and Worker SDK.
![](https://imgur.com/hbobPof.png)

Azure Functions in Isolated models will no more extending WebJobs dependencies.
Therefore, you must get all features of WebJobs by adding different set of packages.

### Benefits of Isolated Models

- You can debug the host process before even debugger is attached to your functions.
- `--dotnet-isolated-deub` will help you to debug very early. It helps to remove race conditions while debugger attaching and the process executing the entry code.
  ![](https://imgur.com/jfPtJKM.png)

## Middleware on Azure Functions

In Azure out of proc Functions you can inject custom code in to the execution/dispatch pipeline. Middleware is a code that you can run before your Azure Functions are executed just like Express Middleware in JavaScript.

- You can modify the response from Middleware
- You can do authentication/ authorizations on Middleware
- Any cross-cutting concerns you can do in Middleware.
![](https://imgur.com/omYQfeC.png)

## What is next in Azure Functions

![](https://imgur.com/LbmMBDv.png)

## References

1.  https://www.youtube.com/watch?v=4n0QbG0wYEI
