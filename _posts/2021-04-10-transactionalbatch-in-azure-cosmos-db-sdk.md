---
title: Bulk Operations in Azure Cosmos DB using TransactionalBatch of .net SDK
date: 2021-04-10 00:00 +0000
description: Learn how to combine multiple database operations in one transaction
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/krOyDg2.png
header:
  image: https://i.imgur.com/99dc9TK.png
  teaser: https://i.imgur.com/krOyDg2.png
  og_image: https://i.imgur.com/krOyDg2.png
category:
tags:
  - csharp
  - azure
  - cosmos
  - beginners
---

> Are you using **repository pattern**? And want to commit multiple repository operations as a **single logical transaction in Azure Cosmos DB**? Read this article to learn how can you combine all of your operations as single unit of work using **TransactionalBatch** .net class.

## What is Transaction?

**Transaction** is the execution scope in the context of transaction processing. A transaction **groups more than one database operations** as a **single commit**. Therefore, you will notice single common outcome of your transaction. Either all operations passes or they all fail. They **act as one** thing. This is why **atomicity** is maintained.

## Why to Combine operations as Single Transaction?

Imagine if you have repositories one for User and one for Address. And in a particular use case you want to update User Entity and Address Entity together. Suppose if Address update is failed you must fail User Entity update also. This is common use-case that every project needs that. In this article I will explain you how can you achieve this the bulk update in **Cosmos Db**.

Suppose you want to dynamically update some framework related database entity. Whenever some entity is updated. That time you can let repositories to just AddItem, DeleteItem or ReplaceItem or patchOperations. However, finally from the framework when you want to commit the transaction you have facility to add some other entities update and execute every thing together

## Cosmos Db Bulk Operation Demo in C#

In Cosmos Db Service, you can do **bulk operations** as a single transaction within a **single container** using **[partitionkey](https://docs.microsoft.com/en-us/dotnet/api/microsoft.azure.cosmos.partitionkey?view=azure-dotnet)**

### TransactionalBatch Class in Cosmos DB

Using [TransactionalBatch](https://docs.microsoft.com/en-us/dotnet/api/microsoft.azure.cosmos.transactionalbatch?view=azure-dotnet) you can add **multiple entity operations**, batch them and perform operations across multiple entities (items) in the container. You must need a **partition key** to make it single transaction.

💡 Note: In order to keep multiple operations transactional you must be within a **single container** and having one **partition key**.

### Create Transactional Batch

You must first create a `TransactionalBatch` instance in a container by providing a **partitionkey**.

```csharp
string businessType = "sales";

using (TransactionalBatchResponse batchResponse = await container.
CreateTransactionalBatch(
    new Cosmos.PartitionKey(businessType)
){}
```

### Defining Entities

```csharp
public class User
{
    public string name { get; set; }
    public string id { get; set; }
    public number age { get; set; }
}
```

```csharp
public class Address
{
    public string street { get; set; }
    public string id { get; set; }
    public string city { get; set; }
}
```

### Creating Multiple Entities as One Transaction in Cosmos DB

Let's crate some entity that we want to save together using same partition key.

```csharp
string businessType = "sales";

User harry = new User() {
  id = "user-1",
  name = "Harry",
  age = 23
};

Address singapore = new Address() {
  id = "address-1",
  city = "singapore city",
  street = "singapore road"
};
```

Next we will create transaction batch and execute all operations asynchronously.

```csharp
using (TransactionalBatchResponse batchResponse = await container.CreateTransactionalBatch(new Cosmos.PartitionKey(activityType))
    .CreateItem<User>(harry)
     // 👆 at this point user is not
     // created in cosmos db.
    .CreateItem<Address>(singapore)
    // 👆 at this point address is not
     // created in cosmos db.
    .ExecuteAsync()) 👈
    /* once executeAsync is run all of
      the operations are committed to
      database as a one logical transation.
      Finally user and address is created.
    */
{
  // Read outcome values from **batchResponse**
}
```

### Reading Results of Batch Operation

Now you can read the outcome of bulk operation and retrieve each entity value from the **`batchResponse`**.

**Reading User after creating in Cosmos DB**

```csharp
   // 👇 Success Path
   // Look up harry via typed access on operation results
   TransactionalBatchOperationResult<User> harryResult = batchResponse.GetOperationResultAtIndex<User>(0);
   User harry = harryResult.Resource;
```

**Reading Address after creating in Cosmos DB**

```csharp
   // 👇 Success Path
   // Look up address via typed access on operation results
   TransactionalBatchOperationResult<Address> addressResult = batchResponse.GetOperationResultAtIndex<Address>(0);
   Address harryAddress = addressResult.Resource;
```

### Handling Error after Batch Operation

In case of a **failure**, entire operations are cancelled and not committed. You will get the individual results with some **status code** from **batchResponse**.

```csharp
// 👇 Check Errors
 if (!batchResponse.IsSuccessStatusCode)
   {
       // Handle and log exception
      TransactionalBatchOperationResult<User> harryResult = batchResponse.GetOperationResultAtIndex<User>(0);
      var statusCode = harryResult.StatusCode;
      // status code = 409 or 424 etc.
   }
```

### Final Source Code Creating Multiple Entities in Cosmos DB

```csharp
string businessType = "sales";

User harry = new User() {
  id = "user-1",
  name = "Harry",
  age = 23
};

Address singapore = new Address() {
  id = "address-1",
  city = "singapore city",
  street = "singapore road"
};

using (TransactionalBatchResponse batchResponse = await container.CreateTransactionalBatch(new Cosmos.PartitionKey(activityType))
    .CreateItem<User>(harry)
    .CreateItem<Address>(singapore)
    .ExecuteAsync()) 👈
    /* once executeAsync is run all of
      the operations are committed to
      database as a one logical transation.
    */
{
  if (!batchResponse.IsSuccessStatusCode)
   {
       // Handle and log exception
      TransactionalBatchOperationResult<User> harryResult = batchResponse.GetOperationResultAtIndex<User>(0);
      var statusCode = harryResult.StatusCode;
      // status code = 409 or 424 etc.
      return;
   }

  TransactionalBatchOperationResult<Address> addressResult = batchResponse.GetOperationResultAtIndex<Address>(0);
  Address harryAddress = addressResult.Resource;

  TransactionalBatchOperationResult<Address> addressResult = batchResponse.GetOperationResultAtIndex<Address>(0);
  Address harryAddress = addressResult.Resource;
}
```

## Patch Operations in Cosmos DB with Bulk Action

You can also use **`PatchOperation`** class to update the property values of your entities as a bulk operation.

### PatchOperation Class

**`PatchOperation`** class enables you to either **replace** a property or **add** dynamically new **property** in an entity.

### Adding Dynamically new Property in Cosmos DB

I will demonstrate how you can crate **zipCode** property in the **Address** class after creating the Address entity in **Cosmos Db**. I will use `PatchOperation.Add` method.

```csharp
List<PatchOperation> patchOperations = new List<PatchOperation>();
patchOperations.Add(PatchOperation.Add("/zipCode", 08452);

using (TransactionalBatchResponse batchResponse = await container.CreateTransactionalBatch(new Cosmos.PartitionKey(activityType))
    .CreateItem<User>(harry)
    .CreateItem<Address>(singapore)
    .PatchItem(singapore.id,patchOperations)👈
     👆
    /* once executeAsync is run User and Address
    Will be created first then We will dynamically
    create zipCode property in the address object.
    */
    .ExecuteAsync())
{
}
```

### Replace existing Property of Item in Cosmos DB

Let's say I want to change the `age` of Harry after creating in **cosmos db**. I will use `PatchOperation.Replace` method.

```csharp
List<PatchOperation> patchOperations = new List<PatchOperation>();
patchOperations.Add(PatchOperation.Replace("/age", 28);

using (TransactionalBatchResponse batchResponse = await container.CreateTransactionalBatch(new Cosmos.PartitionKey(activityType))
    .CreateItem<User>(harry)
    .CreateItem<Address>(singapore)
    .PatchItem(harry.id,patchOperations)👈
     👆
    /* once executeAsync is run User
    and Address will be created
    first then replace the age to 28
    */
    .ExecuteAsync())
{
}
```

## Reading multiple Entities as Single Transaction

Sometime you wan to pull all entities from various items of **cosmos database** and show in a UI. Remember still you are within your **partitionkey**.

### Fetching Multiple entities example

In this below example I am pulling all of the 4 users together.

```csharp

string activityType = "customers";
using (TransactionalBatchResponse batchResponse = await container.CreateTransactionalBatch(new Cosmos.PartitionKey(User))
   .ReadItem("user-1")
   .ReadItem("user-2")
   .ReadItem("user-3")
   .ReadItem("user-4")
   .ExecuteAsync())
{
    // Look up interested results - eg. via direct access to operation result stream
    List<string> resultItems = new List<string>();
    foreach (TransactionalBatchOperationResult operationResult in batchResponse)
    {
        using (StreamReader streamReader = new StreamReader(operationResult.ResourceStream))
        {
            resultItems.Add(await streamReader.ReadToEndAsync());
        }
    }

    // **resultItems** will have all of the users
}

```

---

_If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
