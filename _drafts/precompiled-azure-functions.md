---
title: Precompiled Azure Functions
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true 
toc_sticky: true
image: https://i.imgur.com/mkCLSR0.png
header: 
  image: https://i.imgur.com/kmKqnxR.png
  teaser: https://i.imgur.com/mkCLSR0.png
  og_image: https://i.imgur.com/mkCLSR0.png
tags:
   - azure
   - csharp
   - dotnet
   - beginners
---

## Precompiled Azure Functions Basics
> Are you still using **.csx** scripts for your Azure Functions? Then switch to **Precompiled Azure Function.** Read this article to learn from scratch about writing, testing and deploying Precompiled Azure Functions. 

![](https://imgur.com/6LhaRQb.gif)
### Why Azure Functions?

1. **Event Driven** architecture & follows Single Responsibility Principle. 
2. **Fully managed** compute environment
3. High **reliability**
4. **Security** is taken care by Microsoft
5. **Auto-Scaling** for large or low incoming volumes
6. **Pay-per-use** ( use consumption pricing plan )
7. Less **boilerplate** code
8. **Integrate easily** with many Azure Cloud Services


### Benefits Precompiled Azure Functions

1. Normal **c# classes** but precompiled. ( it used to be **.csx**)
2. **Precompiled** Azure Functions works with **Visual Studio** so you get all tooling supports like debugging, intellisense, NuGet package manager etc. 
3. **Local** Azure Function **runtime environment**. Write, debug and unit test locally.
4. You get excellent **cold-start** performance. In old days `.csx` files are getting compiled when first request hits it. However, with pre-compiled Azure Functions you get this performance benefit. 

### Azure Function Overview 

![](https://i.imgur.com/t7QZRPA.png)

1. Azure function triggers when one of the event occurs like 
Http request or new blob created. 
2. It has input and output bindings. Input binding allows to define additional data. Output bindings allows to connect to storage or other 3rd party service. 
3. Azur Function contains the business code. 
4. We can combine many Azure Functions and deploy them as one unit which is called as **Azure Function App**. It is a deployment unit. 

### Azure Function's Attributes 

It is a **C# Attributes** used for: 
1. Communicate to **Azure Runtime** like tell the name of the function. 
   ```csharp
   [FunctionName("ASBTriggerApp")] 
      👆
   /* specify that this function will 
   be called as **ASBTriggerQueue
   */
   ```
2. How the function will be triggered.
   ```csharp
   [ServiceBusTrigger("ASBTriggerQueue")]
      👆
   /* Trigger whenever new message 
   arrives to Azure Service Bus Queue.
   */
   ```
3. To setup output bindings like bind to Queue, Blob, Tables Service Bus, EventHub

## Development Environment Setup

 I will use **Visual Studio** to do below things. 
1. Create **New Azure Function app** 
2. Create New **Function** 
3. Write **Unit Test** for Azure Function
4. **Debug and Compile** Function
5. Publish functions to Azure

### Create Microsoft Account 

I will assume you have your Microsoft account. Go to https://azure.microsoft.com/free to get your own azure free account.

### Visual Studio Setup

1. Make sure you have visual studio.
2. Make sure you update your Visual Studio Installer First.  
![](https://i.imgur.com/k9KuTnB.png)
3. Install **Azure Development Workload** from **Visual Studio Installer**. 

![](https://imgur.com/rj5i3dF.png)

### Visual Studio Extensions for Azure
Make sure to install **Cloud Explorer** VS Extension.
![](https://imgur.com/kSrsoI9.gif)


### Creating New Empty Function App Project.

Select Azure Function Template from Create new project. 

![](https://imgur.com/6LhaRQb.gif)

![](https://imgur.com/D9xeOzX.png)





### HttpTrigger Event

HttpTrigger has 3 parameters. 

#### Authorization Level

How HttpTrigger should be Authorized. 

```csharp
public enum AuthorizationLevel
{
    Anonymous,
    /*
    👆 Anybody has http URL can call
     this azure function
    */
    User,
    Function,
    /*
    👆 Each Http Function must have
    individual Function key. Anyone has to
    pass function key in the URL query
    param or request header. 
    */
    System,
    Admin
    /*
    👆 Each Http URL must have admin key
    for the entire function app it works for
    all functions. 
    */
}
```

#### Http Methods

"get" or "post" or array of methods. If correct method is not invoked it will return 404 error. 

#### Route

URL can be changed by using route template.

Example: if `Route="MyFn"` then  the URL will be `http://localhost:7071/api/MyFn`.

Dynamic parameter at route using template. 

`Route="MyFn/{id}"` Then the URL will be: `http://localhost:7071/api/MyFn/23`


## Creating New Function & Publishing to Azure
Here is the workflow of creating new Azure Functions Project and deploying to Azure. 

![](https://imgur.com/NONr5ny.png)

### Admission Form Approval System Example 

We are going to work on college admission form approval system.

![](https://imgur.com/Rz25ANj.png)

You will learn below Triggers
- ✅Azure Storage 
- ✅Azure Blog 
- ✅Http 

Here is the [source-code](https://dev.azure.com/rupesh-opensource/RupeshOpenSource/_git/azure-functions-admission-application) 

### Debugging Locally Azure Functions

In **Visual Studio** click on **Run in debug** mode and you would see your app is up and running. Then You can even query your api with URL http://localhost:7071/api/Function1 

![](https://imgur.com/ybiaFfi.gif)



---
🖖 Thanks for reading my article till end. I hope you learned something special today. 

---
 
*If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box.*

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access *current* and *future* **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask ***doubts/questions*** and get more help, tips and tricks.

> You bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!** 
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:fullstackmaster1@gmail.com?subject=Hi">fullstackmaster1@gmail.com</a> 
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)

