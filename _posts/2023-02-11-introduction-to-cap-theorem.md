---
title: Introduction to CAP Theorem
date: 2023-02-11 00:00 +0000
description: The CAP theorem states that a distributed system cannot simultaneously be consistent, available, and partition tolerant. CAP Theorem is very important in the Distributed systems, Microservices architecture, Big Data world, especially when we need to make trade offs between the three, based on our unique customer’s use case.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/ZsKhnfj.png
header:
  image: https://i.imgur.com/ZsKhnfj.png
  teaser: https://i.imgur.com/ZsKhnfj.png
  og_image: https://i.imgur.com/ZsKhnfj.png
tags:
  - architecture
  - tutorial
  - beginners
  - cloud
---

> Are you planning to design your next advanced distributed architecture? Make sure you are aware of the concepts such as high availability, consistency and partition tolerance. The CAP theorem states that a distributed system cannot simultaneously be consistent, available, and partition tolerant. CAP Theorem is very important in the Distributed systems, Microservices architecture, Big Data world, especially when we need to make trade offs between the three, based on our unique customer’s use case.

CAP stands for C - Consistency, A - Availability, P - Partition tolerance.

While building a distributed system you will get 2 things up and running at a time and the 3rd thing you will have to sacrifice. CAP theorem helps system architects to make better decisions to trade off to design distributed systems based on requirement and customer priorities.

AP - If you make the system Highly Available and Partition Tolerance then you will not get immediate consistency. It has to be eventually consistent.

CA - Consistent and Highly available system will  be not partition tolerant at all times

CP - Consistent and Partition Tolerant system are not highly available

Even though you try to make all 3 features to be available in a distributed system you will have to trade off on any one feature. 
![](https://i.imgur.com/5ApKUNW.png)

## Availability & Partition over Consistency Example 

The application Twitter is highly available and has good partition tolerance. System has to be shared in a very smart way. So it has to be highly available. Here you can sacrifice Availability. It doesn't matter if I get the tweet from someone immediately. It's okay to get after 5 min to receive notifications. However, you should be available and partition tolerant

## Availability & Consistency over Partition Tolerance Example 

Payment service you can not comproosed with consistency where you withdraw the amount and the bank backend when they query and they see a different amount is not acceptable. You can compromise with partition tolerance however, the payment system has to be highly available.

## What is consistency?

Consistency in a distributed system is regardless of the node you pick, data you will get for a query will always be the same. Either you get the latest information or you do not get any information.

If service 1 updated N1 and service 2 query N2 it should get the latest info updated by service 1 at N2. 
![](https://i.imgur.com/wLesuWU.png)

## What is availability?

Every request that comes to the data store should get a response and it should not timeout. It can fail for authentication authorization but not for timeout.

If you have 4 nodes out of that N3 went down. Any application that is connected should not be directed to N3 and routed to a healthy node. So that your system is highly available. In case your request goes to N3 and the application shows 500 server errors your system is not highly Available. Your system should automatically route the request to the healthy available nodes hence make your system highly available. ![](https://lh5.googleusercontent.com/s-Vx-ep2gasLiH_MSzV8muqDD5t6t-3SqUrULQ-kjQGNFQb8Z9NGGWNsnB2IIMvwmi-wlXnp-kos2ajGdfx5IAZZ_V3cp6z9D7_ynkE_VxILn091s0xXITMo1ui3jQfmdGyVKsj8)

## What is Partition Tolerance?  

Even though the connection between some nodes break, still every request coming to your server should serve and respond.

![](https://i.imgur.com/ZHFtnBf.png)

Suppose service updated the user address in N3 and to make the system partition tolerant the new data has to be replicated in all of the nodes. If N4 is disconnected or down so if the same service query the updated latest info of the user from N4 it will not get the latest information. In this scenario your application is still available and partition tolerant however it is not consistent. So whenever the connection is resumed then N4 will be updated.

## Can we achieve all 3 features in a distributed system?

### Scenario where you want Availability and Partition Tolerance

At a given moment a system can't be consistent if it is highly available and partition tolerant.

Suppose if you have 4 nodes. One node gets updated with the latest data. In order to keep our system partition tolerant we have to replicate the data in all of the nodes. In the case of a larger system there could be 100, 000 of nodes and while it is replicating data. If someone query to the node where replication is pending at that time your system will return stale data and is not consistent.

Eventually all of the nodes will be synced up and you will get the latest info that is called eventual consistency. However, there is a certain period of time when the system will not be consistent. In Twitter You must tradeoff consistency however, you must invest on availability and partition tolerance.

### Scenario where you want Availability & Consistency as high priority

For RDBMS suppose you have a Master Slave kind of scenario where you read and write in the primary instance of the database and continuous replication is happening in the secondary database you can use Amazon AWS RDS service. You will have consistency and availability. You do not have partition tolerance. Since you are not sharing your data. When you are making your system like payment, security situation.

### Scenario where you want Consistent and Partition Tolerant 

Suppose you make changes to N1 and update user info. IF you want to keep it consistent and partition tolerant to then in order for a service to read the consistent data from N3. You have to wait for sometime to allow your data to be replicated fully to N3 till then almost your system is unavailable so in order for it to be consistent your system has to be unavailable means sacrificing the availability part of it.

## Summary

For the brief period of time you are losing either Consistency, Availability and Partition tolerance. That is how eventual consistency is now popular: you are making a highly available and partition tolerant system and make your system consistent eventually. After knowing the pillars of CAP theorem you will be now able to design distributed systems exactly by knowing your customer requirements and concerns.

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png){: .full}
