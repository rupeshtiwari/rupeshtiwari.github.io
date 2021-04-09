---
title: Topologies Azure Service Bus 
date: 2021-07-31 00:00 +0000
description: Learn what is Topology in Azure service bus and how N-Service bus help us to build it.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/P7C5SR6.png
header:
  image: https://i.imgur.com/TJY2vwh.png
  teaser: https://i.imgur.com/P7C5SR6.png
  og_image: https://i.imgur.com/P7C5SR6.png
tags:
  - csharp
  - beginners
  - azure
  - cloud
---

> **Azure Service Bus** is a transport layer comprises of messaging entities. Learn what is **Topology** in messaging world and how N-Service bus makes life easy by giving built-in configurations for creating topologies.

## Messaging Entities

## Queue

Queues offer `First In, First Out (FIFO)` message delivery to one or more competing consumers. That is, receivers typically receive and process messages in the order in which they `were added to the queue`.

![](https://imgur.com/PfN2VDK.png)

You can create queues using the `Azure portal, PowerShell, CLI, or Resource Manager templates`. Then, send and receive messages using clients written in `C#, Java, Python, JavaScript, PHP, and Ruby`.

## Topic

Topic is just like a virtual queue where messages are pushed and get broad-casted to multiple receivers. 

## Subscription

Subscription has one virtual input queue via that it receives a specific message and executes the receivers. 

Topics and subscriptions provide a `one-to-many` form of communication in a publish and subscribe pattern. It's useful for scaling to large numbers of recipients.  

![](https://imgur.com/EqW5y1K.png)

## Messaging Patterns

## Consumer/Producer Pattern

Once you send a message to a `Queue` and if there is any `Function` listening to the queue gets triggered and they execute the function. 

You can treat these kind of messages as `command`.

## Pub/Sub Pattern

When you have an `event` that has to be consumed by `multiple systems`. Then we should consider using Pub/Sub pattern. It helps you to create loosely coupled, scalable architecture.

There is a `Topic` few subscribers are listening to that topic with some filter rule. Then if you publish an event to that `Topic`. Then subscribers will receive the event if the rules are satisfied.
![](https://imgur.com/5t4MGUZ.png)


## Request/Reply Pattern

`Request/Reply` pattern is also treated as `Producer/Consumer` pattern. If you are working with distributed architecture including cloud. Then it is difficult to do synchronous actions. However, using Request/Reply pattern you can work just like synchronous operation.
![](https://imgur.com/hCR7iki.png)
Example: Suppose you have UI says create order and once order is created you must show order-id in the UI. We will use Azure Function and Azure Service Bus in order to Achieve this.

You will create `Azure Function-1` to trigger by `Http` request. Then it will send a `message` to the `Queue` and you will write another `Azure Function-2` to get triggered by the Queue & execute the use case. However, once the `Function-2` is done it will `reply back` to the `Function-1`. Finally the result will be returned back to the UI/Client.

Below is the pseudo code for above example:

```csharp
[HttpGet("orders/create")]
public async Task<IActionResult> CreateOrder(Order order) {

  const result = await requestReplyService.Request();

  return Ok(result);
}
```

1. `Request/Reply` is not the same as `Request/Response`. Request/Reply is usually associated with `asynchronous` messages while Request/Response with the `web`.

2. For `Request/Reply` to work, both the sender and the receiver require a designated queue. There is a dedicated handler and receiver for a message Request/Reply.


## Topology

**Messaging topology** is a specific arrangement of the messaging entities, such as queues, topics, subscriptions, and rules. **Azure Service Bus transport** operates on a topology created on the **broker**. Topology handles exchanging **messages between endpoints**, by creating and configuring Azure Service Bus entities.

## Types of Topologies

Azure Service Bus Topology one has to create manually. If you are using N-Service Bus then you get 2 built-in topologies out of the box.

- EndpointOrientedTopology
- ForwardingTopology (recommended👍)

Both topologies create a **single input queue per endpoint** and implement **Publish-Subscribe mechanism**. No default topology is set by the Azure Service Bus transport. Topology has to be explicitly configured using [configuration API](https://docs.particular.net/transports/azure-service-bus/legacy/configuration/full).

Learn more about all [Topologies here.](https://docs.particular.net/transports/azure-service-bus/legacy/topologies#:~:text=Forwarding%20topology&text=Subscriptions%20are%20created%20under%20topic,decoupling%20between%20publishers%20and%20subscribers.). Pre-built topology is `ForwardingTopology`.

### Endpoint Oriented Topology

The `endpoint-oriented` topology defines a `queue` and a `topic` per `endpoint`.
![](https://imgur.com/i3VofMU.png)

When a publisher raises an event, it is published to the publisher topic. Then the subscription entities filter events using the associated rules. Finally, the subscriber endpoint pulls events for processing.

The example below demonstrates a `publisher` called `Publisher` and a `subscriber` called `Subscriber`. Publisher can raise two events, `EventA` and `EventB`. The Subscriber subscribes to both events and two subscription entities are created, one per event type. Each subscription entity filters out events using a rule associated with the subscription.

I don't prefer this topology because In order to subscribe to an event, the subscriber must know the publishing endpoint's name, causing coupling between publisher and subscriber.

### Forwarding Topology

The forwarding topology defines a `queue` per `endpoint` and a shared `topic` to do the `publishing`. The `ForwardingTopology` was introduced to take advantage of the **broker nature of the Azure Service Bus** and to leverage its native capabilities.

Azure Service Bus has facility to forward a event from a `Subscription` to the `Queue`. We will use this technique to setup this topology. 

![](https://imgur.com/638DjGm.png)

In above example `Subscriptions` are created under topic `bundle` with one subscription entity per subscribing endpoint. Each subscription contains multiple rules; there's one rule per event type that the subscribing endpoint is interested in. This enables a complete decoupling between publishers and subscribers. All messages received by subscription are forwarded to the input queue of the subscriber.

For N-Service Bus this is the recommended option for all new projects.

`bundle-1` is the topic created by N-Service Bus. ![](https://imgur.com/s8ilrE0.png)

`bundle-1` has `Subscriptions` across the endpoints and each Subscription has `Rules`. Rules are the filters defined by the subscribers and once the Rule satisfied then only message arrives to the subscriber. Whenever, receiver defines the filter in the source code then only the rules are created.

<pre>
📦Topics
 └ 📂bundle-1
 │ └ 📂Subscribers
 │ │ ├ 📂Subscriber.Endpoint1
 │ │ │ └ 📂Rules
 │ │ │ │ └ 📜$default 👈FalseFilter Rule 1=0
 │ │ └ 📂Subscriber.Endpoint2
 │ │ │ └ 📂Rules
 │ │ │ │ ├ 📜$default
 │ │ │ │ └ 📜only-prime 👈Custom Rule
</pre>

Whenever message will comes to a Topic that runs to the rules of each subscriber of the endpoint. And if the message has prime number then it will only go to `Endpoint2` `only-prime` subscriber.

So this arrangement of Topic, Subscription, Queue and Rules are called Forwarding Topology.

| Azure Concept  | N-Service Bus Concept |
| -------------- | --------------------- |
| Topic          | End Point             |
| Azure Function | Message Handler       |

## What N-Service Bus Did

N-Service bus has `enableInstaller` method once you call it. Then N-Service Bus creates topology and does below for a given endpoint:

1. Creates a `Topic` with name `bundle`.
2. Creates `Subscription` for that `topic`.
3. Creates default Rule in the message of the subscription with default condition `FalseFilter Rule` i.e. `1=0`. So that message will not satisfy this rule by default any all events will not arrive to this endpoint.
4. Creates a input queue for the endpoint. Subscription forwards the message to the `Input Queue` of the `endpoint` once Rules get satisfied.

`endpoint` is N-Service Bus concept that is coupled to Azure Service Bus `Queue`. Using `endpoint` you can either send or receive messages. 


📔 **N-Service Bus** is _not_ able to create the topology when it is hosted on the Azure Function _as of now_. Learn how you can do by [your own topology setup in Azure Function here](https://weblogs.asp.net/sfeldman/automatic-nservicebus-topology-creation-for-function)





## Creating Azure Service Bus Namespace
Let's create Azure service bus namespace from the Azure portal. ![](https://imgur.com/ZUdj70X.gif)

Get the connection string and open the connection string on the Azure Explorer. 



## Service Bus Explorer

You can download the [`Service Bus Explorer`](https://github.com/paolosalvatori/ServiceBusExplorer/releases) an open source windows UI that helps us to visualize the Topologies.

Connect to your Azure Service Bus Namespace by using connection string. 

![](https://imgur.com/PYOY7fj.png)


📓 N-Service bus helps us to retrieve the message and search for subscriber and invoke the handle method of the Handler. All of this code is already written in N-Service Bus. That helps a lot when you are working with Azure Service Bus Transport. I recommend using N-Service Bus.

## References

1. [Topologies](https://docs.particular.net/transports/azure-service-bus/topology#:~:text=Messaging%20topology%20is%20a%20specific,configuring%20Azure%20Service%20Bus%20entities)

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
