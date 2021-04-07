---
title: Azure Service Bus Send/Reply Sample
date: 2021-08-07 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/thumbnail.png
header:
  image: https://i.imgur.com/FEATUREIMAGE.png
  teaser: https://i.imgur.com/thumbnail.png
  og_image: https://i.imgur.com/thumbnail.png
tags:
  - csharp
  - beginners
  - azure
  - cloud
---

> If you want to send message from UI and get response back to UI in `Azure Service Bus`. Then you must consider learning **Request/Reply** pattern.


## Introduction

## Request/Reply Pattern

`Request/Reply` pattern is also treated as `Producer/Consumer` pattern. If you are working with distributed architecture including cloud. Then it is difficult to do synchronous actions. However, using Request/Reply pattern you can work just like synchronous operation. 

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
