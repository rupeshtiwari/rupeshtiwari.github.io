---
title: CRUD with Cosmos DB using Dotnet Core SDK
date: 2021-05-08 00:00 +0000
description: Learn Create, read, update, and delete NoSQL data in Azure Cosmos DB using dotnet core.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/rVvfIEV.png
header:
  image: https://i.imgur.com/5BA76KS.png
  teaser: https://i.imgur.com/rVvfIEV.png
  og_image: https://i.imgur.com/rVvfIEV.png
category:
tags:
  - cosmos
  - azure
  - csharp
  - dotnet
---

> Do you want to create **dotnet csharp console app** and write **CRUD ( Create, Read, Update and Delete ) operations** over **Azure Cosmos DB** noSQL data? Read this article to start from scratch and learn hands on coding on cosmos DB.

## Introduction

If you have not yet setup your **azure development environment** then please read my below articles to start.

1. [Get Free Sandbox Azure account for learning Azure](http://www.rupeshtiwari.com/blog/azure-sandbox-free-account-for-learning/)
2. [Creating Cosmos DB from DotNet Core Project](http://www.rupeshtiwari.com/blog/creating-cosmos-db-from-dotnet-core-project/)

## Creating Documents in Cosmos DB

Now we will create documents in our cosmos DB using dotnet core SDK.
We will use [DocumentClient Class](https://docs.microsoft.com/en-us/dotnet/api/microsoft.azure.documents.client.documentclient?view=azure-dotnet) to create document using [CreateDocumentAsync](https://docs.microsoft.com/en-us/dotnet/api/microsoft.azure.documents.client.documentclient.createdocumentasync?view=azure-dotnet) method. We will read the document from Cosmos DB using [ReadDocumentAsync](https://docs.microsoft.com/en-us/dotnet/api/microsoft.azure.documents.client.documentclient.readdocumentasync?view=azure-dotnet).

![](https://imgur.com/vqOnl0i.gif)

### Defining CSharp Models

Lets create models that we want to create in the server.

Create below classes in your models folder.

![](https://imgur.com/6OXpnVN.png)

```csharp
namespace azure_cosmos_db_example {
    public class CouponsUsed {
        public string CouponCode { get; set; }

    }
}

namespace azure_cosmos_db_example {
    public class OrderHistory {
        public string OrderId { get; set; }
        public string DateShipped { get; set; }
        public string Total { get; set; }
    }
}

namespace azure_cosmos_db_example {
    public class ShippingPreference {
        public int Priority { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public string Country { get; set; }
    }
}

using Newtonsoft.Json;
namespace azure_cosmos_db_example {
    public class User {
        [JsonProperty ("id")]
        public string Id { get; set; }

        [JsonProperty ("userId")]
        public string UserId { get; set; }

        [JsonProperty ("lastName")]
        public string LastName { get; set; }

        [JsonProperty ("firstName")]
        public string FirstName { get; set; }

        [JsonProperty ("email")]
        public string Email { get; set; }

        [JsonProperty ("dividend")]
        public string Dividend { get; set; }

        [JsonProperty ("OrderHistory")]
        public OrderHistory[] OrderHistory { get; set; }

        [JsonProperty ("ShippingPreference")]
        public ShippingPreference[] ShippingPreference { get; set; }

        [JsonProperty ("CouponsUsed")]
        public CouponsUsed[] Coupons { get; set; }
        public override string ToString () {
            return JsonConvert.SerializeObject (this);
        }
    }
}
```

### Creating Document if Not Exist

Next let's create these documents in cosmos db.

First we will check if document doesn't exist then throw exception. And in the catch method we will create new document.

Add below code in **program.cs** file.

```csharp
private async Task CreateUserDocumentIfNotExists (string databaseName, string collectionName, User user) {
    try {
        await this.client.ReadDocumentAsync (UriFactory.CreateDocumentUri (databaseName, collectionName, user.Id), new RequestOptions { PartitionKey = new PartitionKey (user.UserId) });

        this.WriteToConsoleAndPromptToContinue ("User {0} already exists in the database", user.Id);
    } catch (DocumentClientException de) {
        if (de.StatusCode == HttpStatusCode.NotFound) {
            await this.client.CreateDocumentAsync (UriFactory.CreateDocumentCollectionUri (databaseName, collectionName), user);
            this.WriteToConsoleAndPromptToContinue ("Created User {0}", user.Id);
        } else {
            throw;
        }
    }
}

private void WriteToConsoleAndPromptToContinue (string format, params object[] args) {
    Console.WriteLine (format, args);
    Console.WriteLine ("Press any key to continue ...");
    Console.ReadKey ();
}
```

### Creating User Data to Seed in Cosmos DB

Let's create the user data class where will create some instances that we want to insert in cosmos DB.

**UserData.cs** file

```csharp
namespace azure_cosmos_db_example {

    public class UserData {
       public User yanhe = new User {
            Id = "1",
            UserId = "yanhe",
            LastName = "He",
            FirstName = "Yan",
            Email = "yanhe@contoso.com",
            OrderHistory = new OrderHistory[] {
            new OrderHistory {
            OrderId = "1000",
            DateShipped = "08/17/2018",
            Total = "52.49"
            }
            },
            ShippingPreference = new ShippingPreference[] {
            new ShippingPreference {
            Priority = 1,
            AddressLine1 = "90 W 8th St",
            City = "New York",
            State = "NY",
            ZipCode = "10001",
            Country = "USA"
            }
            },
        };

     public   User nelapin = new User {
            Id = "2",
            UserId = "nelapin",
            LastName = "Pindakova",
            FirstName = "Nela",
            Email = "nelapin@contoso.com",
            Dividend = "8.50",
            OrderHistory = new OrderHistory[] {
            new OrderHistory {
            OrderId = "1001",
            DateShipped = "08/17/2018",
            Total = "105.89"
            }
            },
            ShippingPreference = new ShippingPreference[] {
            new ShippingPreference {
            Priority = 1,
            AddressLine1 = "505 NW 5th St",
            City = "New York",
            State = "NY",
            ZipCode = "10001",
            Country = "USA"
            },
            new ShippingPreference {
            Priority = 2,
            AddressLine1 = "505 NW 5th St",
            City = "New York",
            State = "NY",
            ZipCode = "10001",
            Country = "USA"
            }
            },
            Coupons = new CouponsUsed[] {
            new CouponsUsed {
            CouponCode = "Fall2018"
            }
            }
        };
    }
}
```

### Seeding Data during DB initialize

Now we will create some User data that we will seed during DB initialize.

```csharp
 private async Task InitializeDB () {
    this.client = new DocumentClient (new Uri (ConfigurationManager.AppSettings["accountEndpoint"]), ConfigurationManager.AppSettings["accountKey"]);

    await this.client.CreateDatabaseIfNotExistsAsync (new Database { Id = "customers" });

    await this.client.CreateDocumentCollectionIfNotExistsAsync (UriFactory.CreateDatabaseUri ("customers"), new DocumentCollection {
        Id = "users", PartitionKey = new PartitionKeyDefinition () { Paths = new System.Collections.ObjectModel.Collection<string> () { "/userId" } }
    });

    Console.WriteLine ("Database and collection creation/validation is complete");

    👇 // Creating Document //
    await this.CreateUserDocumentIfNotExists ("customers", "users", new UserData ().nelapin);
    await this.CreateUserDocumentIfNotExists ("customers", "users", new UserData ().yanhe);
}
```

### Running Program to Create Documents

Next run your project `dotnet run`

![](https://imgur.com/DrWfShT.png)

Notice our user documents are created already.

![](https://imgur.com/heKXWOr.png)

[Get the Source Code](https://github.com/rupeshtiwari/dotnet-azure-cosmos-db-example/commit/401020da2941750a01de94c8d49673cbd9ff9f32)

## Reading Collections from Cosmos DB

By this time we have created documents in the **Cosmos DB**. This is the time to read those documents.

### Reading User Document

Next I will show how can you read the document from Cosmos DB. [Source Code](https://github.com/rupeshtiwari/dotnet-azure-cosmos-db-example/commit/fa6fae9a658290fe3823a83e4c67dd516d5c47ab). We will use [ReadDocumentAsync](https://docs.microsoft.com/en-us/dotnet/api/microsoft.azure.documents.client.documentclient.readdocumentasync?view=azure-dotnet) method.

```csharp
 var userResource = await this.client.
 👉 ReadDocumentAsync (
   UriFactory.CreateDocumentUri (
     databaseName,
     collectionName,
     user.Id),
 new RequestOptions {
   PartitionKey = new PartitionKey (user.UserId)
   });
```

![](https://imgur.com/jeuaawG.gif)

### Use ReadDocumentAsync Method

In below code I will wait till I get the resource from Cosmos DB after making `ReadDocumentAsync` method call. Next I will read the document and display on console after serializing it in `json`.

```csharp

        private async Task ReadUserDocument (string databaseName, string collectionName, User user) {
            try {
                var userResource = await this.client.ReadDocumentAsync (UriFactory.CreateDocumentUri (databaseName, collectionName, user.Id), new RequestOptions { PartitionKey = new PartitionKey (user.UserId) });
                var userFromDb = userResource.Resource;
                this.WriteToConsoleAndPromptToContinue ("Read user {0}", user.Id);
                this.WriteToConsoleAndPromptToContinue ("Read user {0}", Newtonsoft.Json.JsonConvert.SerializeObject (userFromDb, Formatting.Indented));
            } catch (DocumentClientException de) {
                if (de.StatusCode == HttpStatusCode.NotFound) {
                    this.WriteToConsoleAndPromptToContinue ("User {0} not read", user.Id);
                } else {
                    throw;
                }
            }
        }

```

### Calling Read Document from InitializeDB

Next we will call the read document method from our `initializeDb` method.

```csharp
 private async Task InitializeDB () {
            this.client = new DocumentClient (new Uri (ConfigurationManager.AppSettings["accountEndpoint"]), ConfigurationManager.AppSettings["accountKey"]);

            await this.client.CreateDatabaseIfNotExistsAsync (new Database { Id = "customers" });

            await this.client.CreateDocumentCollectionIfNotExistsAsync (UriFactory.CreateDatabaseUri ("customers"), new DocumentCollection {
                Id = "users", PartitionKey = new PartitionKeyDefinition () { Paths = new System.Collections.ObjectModel.Collection<string> () { "/userId" } }
            });

            Console.WriteLine ("Database and collection creation/validation is complete");

            await this.CreateUserDocumentIfNotExists ("customers", "users", new UserData ().nelapin);
            await this.CreateUserDocumentIfNotExists ("customers", "users", new UserData ().yanhe);
            👇 // reading document code invokation
            await this.ReadUserDocument ("customers", "users", new UserData ().yanhe);
        }
```

Next run `dotnet run` to see the output.

![](https://imgur.com/DI056u5.png)

## Update Documents in Cosmos DB

Azure Cosmos DB supports **replacing JSON documents**. The fun part is even you can update the document right from the Visual Studio Code. Let's replace user's last name from dotnet core app.

![](https://imgur.com/gyXhCWg.gif)

I will use [ReplaceDocumentAsync](https://docs.microsoft.com/en-us/dotnet/api/microsoft.azure.documents.client.documentclient.replacedocumentasync?view=azure-dotnet) method to update the existing document.

### Use ReplaceDocumentAsync method

Let's write code to replace a user document using `ReplaceDocumentAsync` method.

```csharp
        private async Task ReplaceUserDocument (string databaseName, string collectionName, User updatedUser) {
            try {
                await this.client.ReplaceDocumentAsync (UriFactory.CreateDocumentUri (databaseName, collectionName, updatedUser.Id), updatedUser, new RequestOptions { PartitionKey = new PartitionKey (updatedUser.UserId) });
                this.WriteToConsoleAndPromptToContinue ("Replaced last name for {0}", updatedUser.LastName);
            } catch (DocumentClientException de) {
                if (de.StatusCode == HttpStatusCode.NotFound) {
                    this.WriteToConsoleAndPromptToContinue ("User {0} not found for replacement", updatedUser.Id);
                } else {
                    throw;
                }
            }
        }
```

### Run Code for Updating Document

Next I will call the `ReplaceUserDocument` method from `initializeDb` method.

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

    👇 // Update User
    var userToUpdate = new UserData ().yanhe;
    userToUpdate.LastName = "Ruk";
    await this.ReplaceUserDocument ("customers", "users", userToUpdate);
}
```

Next run `dotnet run` & notice document updated successfully.

![](https://imgur.com/tfejDxD.png)

![](https://imgur.com/U32rZKi.png)

## Delete Document in Cosmos DB

You can delete a document using [`DeleteDocumentAsync`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.azure.documents.client.documentclient.deletedocumentasync?view=azure-dotnet) method. In this section I will show how can we delete our first user.

![](https://imgur.com/K0gCaMb.gif)

### Using DeleteUserDocument Method

Let's write code to delete a user using `DeleteUserDocument` method.

```csharp
private async Task DeleteUserDocument (string databaseName, string collectionName, User deletedUser) {
    try {
        await this.client.DeleteDocumentAsync (UriFactory.CreateDocumentUri (databaseName, collectionName, deletedUser.Id), new RequestOptions { PartitionKey = new PartitionKey (deletedUser.UserId) });

        Console.WriteLine ("Deleted user {0}", deletedUser.Id);

    } catch (DocumentClientException de) {
        if (de.StatusCode == HttpStatusCode.NotFound) {
            this.WriteToConsoleAndPromptToContinue ("User {0} not found for deletion", deletedUser.Id);
        } else {
            throw;
        }
    }
}
```

### Deleting User Document

Let's call `DeleteUserDocument` in `InitializeDB` method.

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

        👇 // Delete User
        await this.DeleteUserDocument ("customers", "users", new UserData ().yanhe);
    }

```

Finally lets run `dotnet run` to execute program & Notice user got deleted.

![](https://imgur.com/uOvCmyR.png)

I hope you enjoyed this coding session with me. Finally you learned how to to CRUD operation on Cosmos noSQL Data right from Visual Studio Code.

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
