---
title: Angular Service as PubSub Message Handler
date: 2021-03-21 00:00 +0000
description: Create Message Handlers like N-Service Bus Handlers in Angular Project
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/9QQQAkB.png
header:
  image: https://i.imgur.com/heVpxuU.png
  teaser: https://i.imgur.com/9QQQAkB.png
  og_image: https://i.imgur.com/9QQQAkB.png
category:
  - soa
tags:
  - angular
  - soa
  - pubsub
  - beginners
---

> Convert **Angular** service to a **Message Handler**. Do you want to organize your **Angular** code base as [Service Oriented Architecture (SOA)](https://udidahan.com/2010/11/15/the-known-unknowns-of-soa/) way. And you want to create an **Angular Service** that can listen to a Message and react on them just like a [N-ServiceBus Message Handlers](https://docs.particular.net/nservicebus/handlers/)? Read this article.

## What is PUB/SUB?

In software architecture **Pub/Sub** is **publish-subscribe** that is a messaging pattern. **Message** is a Plain JavaScript Object with type and optional payload. Where senders of the messages, called **publishers**. Receiver of the messages are called **subscribers**. [Learn more...](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)

## What are Angular Component's Responsibilities?

**Angular Component** must take below responsibilities:

1. **Send messages** to perform any business logic
2. Have **view model** to display UI
3. Subscribe to message and **update view model** and reflect changes in UI.

## What is Angular Service Responsibilities?

**Angular Services** must take below responsibilities:

1. Perform **complex business rules**
2. Communicate to **server**
3. **Publish messages** once task is performed (optional)

## What is Message Handler in Angular?

**Message handler** in angular project is nothing but an **angular service** that can listens/subscribes to one or more messages and perform business logic. Message Handler can also publish after handling incoming messages.

Message handler helps us to write **loosely coupled** code and **separating concerns** between component and services.

## Example of Message Handler in Angular app

Below is the example of Angular Service as Message Handler called as `ShipOrderService` which listens to `OrderReady` message and process shipping then publishes `OrderShipped` message.

![](https://i.imgur.com/r60vyT4.png)

## Installing @fsms/angular-pubsub Node Package

I have created one angular library which will help us to create stand alone message service in your angular app. Let's Install [@fsms/angular-pubsub](https://www.npmjs.com/package/@fsms/angular-pubsub) so that we can create message handlers in our angular app.

Run Below script:
`npm i -S @fsms/angular-pubsub`

## Creating OrderReady Message

Lets create a message class that will have order ready information call it `OrderReady`

```ts
import { DefineMessage, IMessageSchema, IMessage } from '@fsms/angular-pubsub';

@DefineMessage<IMessageSchema>()
export class OrderReady implements IMessage {
  static messageType = '[Inventory] Order Ready';
  messageType = OrderReady.messageType;
  constructor(public payload?: any) {}
}
```

## Creating ShipOrderService as Message Handler

```ts
import { Injectable } from '@angular/core';
import {
  CallbackOptions,
  IHandleMessage,
  RegisterHandler,
} from '@fsms/angular-pubsub';
import { OrderReady } from '../messages/order-ready-message';
import { OrderShipped } from '../messages/order-shipped-message';

@Injectable({ providedIn: 'root' }) // Angular Service
@RegisterHandler({ 👈
  messages: [OrderReady],👈 // You can listen to many messages
})
export class ShipOrderService implements IHandleMessage<OrderReady> {
  handle({ message, context }: CallbackOptions<OrderReady>): void {
    console.log('[Shipping] Order Shipped', message);

    context.publish(new OrderShipped(message.payload));
    👆 // context will have publish method to publish any message from message handler.
  }
}
```

## Registering your Message Handler in Root Module

Register your message handler in Root (App) Module.
Use `PubsubModule.forRoot([])` to register your app message handlers.

Example: Registering `ShipOrderService`

```ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PubsubModule } from '@fsms/angular-pubsub';
import { AppComponent } from './app.component';
import { ShipOrderService } from './services/ship-order.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    PubsubModule.forRoot([ // Register App Module level Message Handlers
      ShipOrderService, 👈
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Publishing message from the Angular Component

So we have created our `ShipOrderService` and registered it. So when our app starts then `ShipOrderService` will automatically subscribe to `OrederReady` message.

Now if we publish `OrderReady` message from angular component then service `handle` method will be called.

Let's go to `AppComponent` and publish `OrderReady` message.

```ts
  orderPaid($event: KeyboardEvent) {
    $event.preventDefault();
    this.pubsubService.publish(new OrderReady('20 USD'));
  }
```

## Demo of the Application

![](https://i.imgur.com/2245gEu.png)

## Conclusion

I really liked the message handler idea to create stand alone message services. [Udi Dahan](https://udidahan.com/) call them Autonomous Components. So I thought lets leverage the idea and do something on front-end framework to create **Autonomous Components** in **Angular Framework**.

---

_If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
