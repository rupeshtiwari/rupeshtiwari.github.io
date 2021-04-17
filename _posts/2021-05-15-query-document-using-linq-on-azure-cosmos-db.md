---
title: Query Document using LINQ on Azure Cosmos DB
date: 2021-05-15 00:00 +0000
description: Learn running SQL queries and LINQ queries from your application on Azure Cosmos DB.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/D4GPKNE.png
header:
  image: https://i.imgur.com/UAs7Hf2.png
  teaser: https://i.imgur.com/D4GPKNE.png
  og_image: https://i.imgur.com/D4GPKNE.png
category:
tags:
  - cosmos
  - azure
  - csharp
  - dotnet
---

> Do you prefer **LINQ queries**? I do because they provide a single **consistent programming model** across how they work with objects in application code and how they express **query logic** running in the **database**. In this article I will teach you how can you make **LINQ queries** as well as **SQL queries** to fetch documents from **Cosmos DB**.

## Pre-requisite

If you have not yet setup your **azure development environment** then please read my below articles to start.

1. [Get Free Sandbox Azure account for learning Azure](http://www.rupeshtiwari.com/blog/azure-sandbox-free-account-for-learning/)
2. [Creating Cosmos DB from DotNet Core Project](http://www.rupeshtiwari.com/blog/creating-cosmos-db-from-dotnet-core-project/)
3. [CRUD with Cosmos DB using Dotnet Core](http://www.rupeshtiwari.com/blog/crud-with-cosmos-db-and-dotnet-core/)

## How LINQ work in Cosmos DB

**LINQ** is a .Net Programming model that gives us an **abstraction** over querying data. Either you query XML or File or Object you always write a same program.

You can create an **`IQueryable`** object that directly queries **Azure Cosmos DB**, which translates the **LINQ query** into an **Azure Cosmos DB** query. The query is then passed to the Azure Cosmos DB server to retrieve a set of results in JSON format. The returned results are **de-serialized into a stream of .NET objects** on the client side.

## Executing LINQ on Cosmos DB

Now we will fetch the user by their last name. This time I will write LINQ.

![](https://imgur.com/5XcsfJY.gif)

### Using CreateDocumentQuery Method

`CreateDocumentQuery` will help us to run LINQ on cosmos DB. While querying we will enable the cross partition query.

```csharp
private void ExecuteLinqQuery (string databaseName, string collectionName) {
    // Set some common query options
    FeedOptions queryOptions = new FeedOptions { MaxItemCount = -1, EnableCrossPartitionQuery = true };

    // Here we find nelapin via their LastName
    IQueryable<User> userQuery = this.client.CreateDocumentQuery<User> (
            UriFactory.CreateDocumentCollectionUri (databaseName, collectionName), queryOptions)
        .Where (u => u.LastName == "Pindakova");

    // The query is executed synchronously here, but can also be executed asynchronously via the IDocumentQuery<T> interface
    Console.WriteLine ("Running LINQ query...");
    foreach (User user in userQuery) {
        Console.WriteLine ("\tRead {0}",
            JsonConvert.SerializeObject (user, Formatting.Indented));
    }

    Console.WriteLine ("Press any key to continue ...");
    Console.ReadKey ();
}

```

### Fetch User By LastName using LINQ Query

```csharp
private async Task InitializeDB () {
    this.client = new DocumentClient (new Uri (ConfigurationManager.AppSettings["accountEndpoint"]), ConfigurationManager.AppSettings["accountKey"]);

    await this.client.CreateDatabaseIfNotExistsAsync (new Database { Id = "customers" });

    await this.client.CreateDocumentCollectionIfNotExistsAsync (UriFactory.CreateDatabaseUri ("customers"), new DocumentCollection {
        Id = "users", PartitionKey = new PartitionKeyDefinition () { Paths = new System.Collections.ObjectModel.Collection<string> () { "/userId" } }
    });

    Console.WriteLine ("Database and collection creation/validation is complete");

    // Create User
    await this.CreateUserDocumentIfNotExists ("customers", "users", new UserData ().nelapin);
    await this.CreateUserDocumentIfNotExists ("customers", "users", new UserData ().yanhe);

    // Read User
    await this.ReadUserDocument ("customers", "users", new UserData ().yanhe);

    // Update User
    var userToUpdate = new UserData ().yanhe;
    userToUpdate.LastName = "Ruk";
    await this.ReplaceUserDocument ("customers", "users", userToUpdate);

    // Delete User
    await this.DeleteUserDocument ("customers", "users", new UserData ().yanhe);

    👇 // Run LINQ
    this.ExecuteLinqQuery ("customers", "users");
}
```

Run `dotnet run` & notice we fetched the user. [Source Code](https://github.com/rupeshtiwari/dotnet-azure-cosmos-db-example/commit/e4bac7e8cc7c6b8e468f72c14d0db554440e759e)

![](https://imgur.com/kAaBKok.png)

## Executing SQL Query on Cosmos DB

You may surprise that Cosmos DB also support running SQL querries to search an item.
Let's write code to select user by last name using SQL.

```sql
SELECT * FROM User WHERE User.lastName = 'Pindakova'"
```

![](https://imgur.com/Zr0I2rX.gif)

### Using CreateDocumentQuery Method

Let's create new method where I will write SQL query to fetch user by his last name.

```csharp
private void ExecuteSQLQuery (string databaseName, string collectionName) {
    // Set some common query options
    FeedOptions queryOptions = new FeedOptions { MaxItemCount = -1, EnableCrossPartitionQuery = true };

    /// Now execute the same query via direct SQL
    IQueryable<User> userQueryInSql = this.client.CreateDocumentQuery<User> (
        UriFactory.CreateDocumentCollectionUri (databaseName, collectionName),
        "SELECT * FROM User WHERE User.lastName = 'Pindakova'", queryOptions);

    Console.WriteLine ("Running direct SQL query...");
    foreach (User user in userQueryInSql) {
        Console.WriteLine ("\tRead {0}",
          JsonConvert.SerializeObject (user, Formatting.Indented));
    }

    Console.WriteLine ("Press any key to continue ...");
    Console.ReadKey ();
}
```

### Fetch User By LastName using SQL Query

Lets call `ExecuteSQLQuery` from **InitializeDB** method.

```csharp
private async Task InitializeDB () {
    this.client = new DocumentClient (new Uri (ConfigurationManager.AppSettings["accountEndpoint"]), ConfigurationManager.AppSettings["accountKey"]);

    await this.client.CreateDatabaseIfNotExistsAsync (new Database { Id = "customers" });

    await this.client.CreateDocumentCollectionIfNotExistsAsync (UriFactory.CreateDatabaseUri ("customers"), new DocumentCollection {
        Id = "users", PartitionKey = new PartitionKeyDefinition () { Paths = new System.Collections.ObjectModel.Collection<string> () { "/userId" } }
    });

    Console.WriteLine ("Database and collection creation/validation is complete");

    // Create User
    await this.CreateUserDocumentIfNotExists ("customers", "users", new UserData ().nelapin);
    await this.CreateUserDocumentIfNotExists ("customers", "users", new UserData ().yanhe);

    // Read User
    await this.ReadUserDocument ("customers", "users", new UserData ().yanhe);

    // Update User
    var userToUpdate = new UserData ().yanhe;
    userToUpdate.LastName = "Ruk";
    await this.ReplaceUserDocument ("customers", "users", userToUpdate);

    // Delete User
    await this.DeleteUserDocument ("customers", "users", new UserData ().yanhe);

    // Run LINQ
    this.ExecuteLinqQuery ("customers", "users");

    👇 // Run SQL
    this.ExecuteSQLQuery("customers", "users");
}
```

Next run `dotnet run`

Notice the output by running SQL query only. The console displays the output of the SQL queries.

![](https://imgur.com/bjhHDzT.png)

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
