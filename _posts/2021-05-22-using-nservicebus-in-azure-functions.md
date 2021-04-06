---
title: Hosting NServiceBus in Azure Functions
date: 2021-05-22 00:00 +0000
description: Learn how to host NServiceBus within an Azure Function.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/BJxrBex.png
header:
  image: https://i.imgur.com/y1wIOLX.png
  teaser: https://i.imgur.com/BJxrBex.png
  og_image: https://i.imgur.com/BJxrBex.png
tags:
  - nservicebus
  - azure
  - beginners
  - csharp
---

> Have you tried to host **NServiceBus** within **Azure Functions**? In this article I will teach you how can you host your first NServiceBus project within Azure Functions.

In this example, I will use **.net core 3.1**

![](https://imgur.com/v3Swm7Q.gif)

## Pre-requisite

In order to follow this article and coding along with me you need to have below things ready.
You must have:

1. Visual Studio Installed, I am using VS2019 premium.
2. Make sure you installed Azure Development workload ( need machine restart after installing )
3. You must have your Azure Account.

## Why NService Bus in Azure if Azure Service Bus is there?

You might have this question why to use NService Bus in Azure Service Bus? Well the answer is simple

1. **NServiceBus (NSB)** gives an **abstraction** to create your handlers using **`IHandleMessages<T>`** interface.
2. **No boilerplate code required**. When a message comes to `Azure Function` then you must not write much code to invoke your NSB Message handlers. It's all taken care by NSB only.
3. **Extensible Message Processing Pipeline** You can take the advantages of this feature also.
4. **Tooling** NSB provides tooling like **AppInsight** , **Service Control** and **Service Pulse** to track your messages and retry failed one manually. Check health of your handlers etc.
5. **NSB** framework **enables to publish base messages once the child message is published**. Example if `AccountCreatedV2` Message inherits from `AccountCreatedV1` class. And if we publish `AccountCreatedV2` event then NSB will also publish the `AccountCreatedV1` event so that both message handlers will be invoked out of the box.

## Getting Started with NSB Sample code

Let's try to host the NService Bus in Azure Function and get the sample code from below URL.

### Download NSB Sample Code

Download code: https://docs.particular.net/samples/previews/azure-functions/service-bus/
Open the source code on Visual Studio. It look like below.
![](https://imgur.com/1iaoHyY.png)

### Getting NSB Dev License

You need license in order to run NSB Message Handlers on Azure. Get the NSB free trial development 90 days license from here https://particular.net/license/nservicebus?v=7.2.3&t=0&p=windows. You can always renew your development license. Once you have the license xml file then do below:

1. Escape all double quotes.
2. Make them single line string value.

Next go to the Visual Studio `local.settings.json` file and add the `NSERVICEBUS_LICENSE` in values.

```json
{
  "IsEncrypted": false,
  "Values": {
    ...
    "NSERVICEBUS_LICENSE": "<?xml version=\"1.0\" encoding=\"utf-8\"?><license id=\"1222e1d1-2222-4a46-b1c6-943c442ca710\" expiration=\"2113-11-30T00:00:00.0000000\" type=\"Standard\" LicenseType=\"Standard\" LicenseVersion=\"4.0\" MaxMessageThroughputPerSecond=\"Max\" WorkerThreads=\"Max\" AllowedNumberOfWorkerNodes=\"Max\">. . .</license>"
  }
}
```

## Creating Azure Queue

NSB will not create azure queue. You must create them manually. Either you can create them by going to your [Azure Portal](https://portal.azure.com) or using [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-windows?tabs=azure-cli). I will go to my azure portal and create it.

N-Service Bus creates Queue & setup Topology when you call below method. However, this works only for Website. However, when you host N-Service Bus in Azure Functions it will not create Queue. Which is going to be fixed soon.

```csharp
var endpointConfiguration = new EndpointConfiguration("connection");
endpointConfiguration.EnableInstaller()
```

### Create a Azure Service Bus Resource

We need Azure Service Bus Resource under that resource we will create Azure Queue. We will use the Queue to put the message and trigger Azure Functions on message arrival on queue.

![](https://imgur.com/Wibu8s0.png)

### Creating Azure Queue used by NSB

Next I will crate Azure Queue named as "**ASBTriggerQueue**". Whenever HTTP message will arrive we will trigger Azure Functions. That will add the message in to the Azure Queue. Therefore, we are creating our Azure Queue.

![](https://imgur.com/39sUcJY.png)

### Creating ASB Shared Access Policies

We need to create Azure Service Bus **Shared Access Policy** call it **devtest** under our Azure Service Bus resource to restrict only **Read** and **Listen** behavior of the queue. Next we can get the connection string of this queue from the SAS policy. Basically whichever Azure Function App will use this connection string they can Listen and Read the messages from this queue.
![](https://imgur.com/WZwE413.png)

### Azure Queue Connection String

Head on to the Azure Shared Access Policy for Azure Service Bus. Then copy the Primary Connection String.
![](https://imgur.com/N0d7PwE.png)

Then open Visual Studio project go to `local.settings.json` and paste the connection string at **`AzureWebJobsServiceBus`**

![](https://imgur.com/Mb8gnAH.png)

Now we are ready to Go! 🏃

## Running NSB Azure Function Locally

In Visual Studio select the First Project at debug and run project for debugging.

![](https://imgur.com/UIOcGiH.png)

![](https://imgur.com/v3Swm7Q.gif)

Next navigate to below URL so that our HttpSender Azure Function will be triggered.

http://localhost:7071/api/HttpSender

![](https://imgur.com/WVssCwa.png)

## Deploying NSB Functions to Azure

Now lets deploy our NSB functions to Azure. In My personal Account, I will deploy the Function app & update the app configuration.

### Publishing Function to Azure

Open Visual Studio and right click you project and publish the App to Azure. Go to your [Azure Portal](https://portal.azure.com/) and Confirm that you got your functions deployed.

![](https://imgur.com/rQ1Zoj4.png)

### Adding Configuration Settings

Next we must add the `AzureWebJobServiceBus` and `NSERVICEBUS_LICENSE` values in Azure portal.

![](https://imgur.com/TRwk8J1.png)

### Triggering NSB on Azure

In order to invoke the **HttpSender Function** you must need Invoking URL and **Function Key** since we are using **Function Authorization**. To get the Function Key:

1. Click on the HttpSender Azure function on the Azure portal.
2. Next Select Function Keys and copy the default function key.

Next append the **Function Key** on your azure invocation URL. https://azurefunctionsasbtriggerfunctionshostbuilder-rupesh.azurewebsites.net/api/httpsender?code=YOURFUNCTIONKEY

![](https://imgur.com/FBcOAIY.png)

Open the browser and navigate to the invocation URL.

### Monitoring Azure Functions Live

Next you can see all of your **Azure Functions logs** messages live in Azure portal.

1. Go to **Azure Function App** on Azure Portal.
2. Select **Log Stream**

![](https://imgur.com/fSfU5nh.png)

Now if you again invoke by navigating to URL you will see live log here.

![](https://imgur.com/muioplL.png)

## Azure Service Bus Topics

Events goes to the Topic and Subscription.

`bundle-1` is the topic created by N-Service Bus. ![](https://imgur.com/s8ilrE0.png)

`bundle-1` has `Subscriptions` across the endpoints and each Subscription has `Rules`. Rules are the filters defined by the subscribers and once the Rule satisfied then only message arrives to the subscriber.
Whenever, receiver defines the filter in the source code then only the rules are created.

<pre>
📦Topics
 └ 📂bundle-1
 │ └ 📂Subscribers
 │ │ ├ 📂Subscriber.Endpoint1
 │ │ │ └ 📂Rules
 │ │ │ │ └ 📜$default 👈Default Rule 1=0
 │ │ └ 📂Subscriber.Endpoint2
 │ │ │ └ 📂Rules
 │ │ │ │ ├ 📜$default
 │ │ │ │ └ 📜only-prime 👈Custom Rule
</pre>

Whenever message will comes to a Topic that runs to the rules of each subscriber of the endpoint. And if the message has prime number then it will only go to `Endpoint2` `only-prime` subscriber.

## NServiceBus Topology

[Topology](https://docs.particular.net/transports/azure-service-bus/topology#:~:text=Messaging%20topology%20is%20a%20specific,configuring%20Azure%20Service%20Bus%20entities) Messaging topology is a specific arrangement of the messaging entities, such as queues, topics, subscriptions, and rules. The following topologies are available:

- EndpointOrientedTopology
- ForwardingTopology

No default topology is set by the Azure Service Bus transport. Topology has to be explicitly configured using [configuration API](https://docs.particular.net/transports/azure-service-bus/legacy/configuration/full).

Learn more about all [Topologies here](https://docs.particular.net/transports/azure-service-bus/legacy/topologies#:~:text=Forwarding%20topology&text=Subscriptions%20are%20created%20under%20topic,decoupling%20between%20publishers%20and%20subscribers.).

Pre-built topology is `ForwardingTopology`.

### EndpointOrientedTopology

![](https://imgur.com/i3VofMU.png)
The `EndpointOrientedTopology` is backward compatible with the **Azure Service Bus transport Version 6** and below.

I don't prefer this topology because In order to subscribe to an event, the subscriber must know the publishing endpoint's name, causing coupling between publisher and subscriber.

### ForwardingTopology

![](https://imgur.com/638DjGm.png)
The `ForwardingTopology` was introduced to take advantage of the **broker nature of the Azure Service Bus** and to leverage its native capabilities.

N-Service Bus creates the Topic `bundle-1` for each endpoint. When you run `enableInstaller`. 

## Service Bus Explorer

You can download the [`Service Bus Explorer`](https://github.com/paolosalvatori/ServiceBusExplorer/releases) an open source windows UI that helps us to visualize the Topologies.

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> You bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:fullstackmaster1@gmail.com?subject=Hi">fullstackmaster1@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
