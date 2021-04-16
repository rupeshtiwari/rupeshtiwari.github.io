---
title: Where to Store Application Data in Azure
date: 2021-12-04 00:00 +0000
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
  - azure
  - webdev
  - beginners
  - tutorial
---

## Storing Data in Azure options

1. ![](https://imgur.com/CY4p62V.png)Azure SQL Database
2. ![](https://imgur.com/7NE8XB7.png)Azure Databases for MySQL
3. ![](https://imgur.com/0JerP9s.png) Azure Databases for PostgresSQL
4. ![](https://imgur.com/viVzgo7.png) Azure Databases for MariaDB
5. ![](https://imgur.com/xr0vqr0.png) Azure Cosmos DB
6. ![](https://imgur.com/TPnk15t.png) Azure Storage
   1. ![](https://imgur.com/0FWw8PM.png) File Storage
   2. ![](https://imgur.com/Wjk68MS.png) Blog Storage
   3. ![](https://imgur.com/MNutzpz.png) Table Storage
   4. ![](https://imgur.com/HsvZyX0.png) Disk Storage
   5. ![](https://imgur.com/iN7LQq0.png) Queue Storage
7. ![](https://imgur.com/4WSrhP8.png) Azure Synapse Analytics
8. ![](https://imgur.com/G5KauUF.png) Azure Data Lake Store

### Azure SQL Database

![](https://imgur.com/CY4p62V.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Azure SQL Database` can store **Relational Data**.

- SQL Server in the cloud
- Managed and Scalable by Azure
- Highly available 99.99%
- Redundant, data is replicated 3 times in the local data-center and 3 times to another data-center. Data is backed up every 5 minutes and every hour a full backup is made.
- Relational data can be used as table rows and columns.
- Use it with Microsoft tools
  - SSMS (SQL Server Management Studio), Azure Portal, Visual Studio
- Advanced capabilities
  - **Geo-replication** (single writable node): which actively replicate data to other geographical region. Other geo replicable databases are read-only.
  - **Automatic tuning**: where Azure SQL analyzes which queries are slow and it will apply required indexes to improve speed.
  - **Threat detection**: it can detect malicious behavior on the database and alert you to take action.
  - **Dynamic Data Masking**: which can automatically mask sensitive data like password, credit card number etc. So un-authorized or un-wanted user can only see masked data only.

{: .notice--success}
Learn more about [Azure SQL Database](https://azure.microsoft.com/en-us/services/sql-database/)

### Azure Databases for MySQL

![](https://imgur.com/7NE8XB7.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Azure Databases for MySQL` can store **Relational Data**.

- MySQL database over the cloud
- Managed and Scalable by Azure
- Highly available 99.99%
- Redundant, data is replicated 3 times in the local data-center and 3 times to another data-center. Data is backed up every 5 minutes and every hour a full backup is made.
- Relational data can be used as table rows and columns.
- Works well in the LAMP stack
  - Linux, Apache server, MySQL and PHP
- Use it with tools for MySQL because most of the Azure tools are not supported for MySQL database.
  - `MySQL Workbench` and `SQLyog`, drivers for PHP, Java, Node.js and .NET.
  - Can integrate with[ Azure App Service](https://www.rupeshtiwari.com/what-should-you-use-for-running-applications-in-azure/#azure-app-services-web-apps)

{: .notice--success}
`MySQL` is `open-source` database. Learn more about [Azure Databases for MySQL](https://azure.microsoft.com/en-us/services/mysql/#features)

### Azure Databases for PostgreSQL

![](https://imgur.com/0JerP9s.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Azure Databases for PostgreSQL` can store **Relational Data**.

- PostgresSQL in the cloud
- Managed and Scalable by Azure
- Highly available 99.99%
- Redundant, data is replicated 3 times in the local data-center and 3 times to another data-center. Data is backed up every 5 minutes and every hour a full backup is made.
- Relational data can be used as table rows and columns.
  ![](https://imgur.com/EWnJywn.png)
- Flexibility
  - Write functions in several languages (Ruby on Rails, Python with Django, Java with Spring Boot, and Node.js)
  - Use PostgresSQL extensions (PLV8, and PostGIS)
- Use it with tools for PostgreSQL
  - `pgAdmin`
  - `Hyperscale (Citus)` extension to scale to hundreds of nodes with no application rewrites.

{: .notice--success}
`PostgreSQL` is `open-source` database. Learn more about [Azure Databases for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql)

### Azure Databases for MariaDB

![](https://imgur.com/viVzgo7.png)

{: .notice--info}
💁 **Important** \
\
`Azure Databases for PostgreSQL` can store **Relational Data**.

- MariaDB in the cloud
- Managed and Scalable by Azure
- Highly available 99.99%
- Redundant, data is replicated 3 times in the local data-center and 3 times to another data-center. Data is backed up every 5 minutes and every hour a full backup is made.
- Relational data can be used as table rows and columns.
- Supports different storage engines that allows to store data in other format like
  - `Apache Cassandra, CSV, ColumnStore`
- Use it with the tools for MariaDB
  - `Database Workbench` and `SQLyog`

{: .notice--success}
Did you know **MariaDB** is forked out from **MySQL** and `open source`? Learn more about [Azure Databases for MariaDB](https://docs.microsoft.com/en-us/azure/mariadb/#:~:text=Azure%20Database%20for%20MariaDB%20is,predictable%20performance%20and%20dynamic%20scalability.)

### Azure Cosmos DB

![](https://imgur.com/xr0vqr0.png)

{: .notice--info}
💁 **Important** \
\
`Azure Cosmos DB` can store **Document Data**.

- Distributed, massive scale database
- Use it with several APIs to work with your data in many different ways and they abstract the way that Azure Cosmos DB stores and handles the data.
  - DocumentDB API
  - MongoDB API
  - Table API
  - Graph API
  - Apache Cassandra API
- Since it is `noSQL` you do not need to predefine the schema
- **Automatic indexing**: Cosmos DB will automatically create and apply and manages indexes required on data. You can customize the indexing policy if you want.
- **Geo-replication** (single writable node): which actively replicate data to other geographical region. Other geo replicable databases are read-only.
- Unique SLA is offered by CosmosDB
  - SLA `99.99%` availability
  - SLA `99.99%` availability for `read` operation
  - Latency on `read` `< 10ms`, `writes < 15ms`
    This latency counts from the Cosmos DB to other Azure services.

{: .notice--success}
`Apache Cassandra `is a `free` and `open-source`, distributed, wide-column store, NoSQL database management system designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure. Learn more about [Azure Cosmos DB](https://azure.microsoft.com/en-us/services/cosmos-db/)

### Azure Storage

![](https://imgur.com/TPnk15t.png)

{: .notice--info}
💁 **Important** \
\
`Azure Storage` can store **Unstructured/Document Data**.

- Massive scale, multiple-purpose storage.
- Multiple models in a storage account
  - File Storage
  - Blob Storage
  - Queue Storage
  - Table Storage
  - Disk Storage

All storage come with overall features and capabilities that Azure Storage provides like

- **Shared Access Signatures**: provides temporary access to some operations on storage type like Blob storage. This is useful for implementing the `valet key` pattern.
- `Firewalls` and `Virtual Network` using this you can increase security to your Azure storage data.
- `Data encryption` at rest. Azure storage will encrypt and decrypt the data for you out of the box.
- Storage replication
  - **Locally-redundant** : 3 copies of the data stored in the local data-center
  - **Geo-redundant**: In addition to Locally-redundant, it will store 3 copies of data in the other geographical data-center
  - **Read-access-geo-redundant**: You can also create readable Geo-redundant also.

{: .notice--success}
Learn more about [Azure Storage](https://azure.microsoft.com/en-us/services/storage/)





### Azure File Storage

![](https://imgur.com/0FWw8PM.png)

{: .notice--info}
💁 **Important** \
\
`Azure File Storage` can store **Unstructured Data**.

- Really useful for `Lift and Shift` files to the cloud. Useful when you want to keep the file available across the applications. 
- File storage based on `SMB`, `NSF`
- Mount an `Azure File` share in 
  - Windows
  - MacOS
  - Linux
- You get all Azure Storage features
  - Shared Access Signatures

{: .notice--success}
Learn more about [Azure File Storage](https://azure.microsoft.com/en-us/services/storage/files/)



### Azure Blog Storage

![](https://imgur.com/Wjk68MS.png)

{: .notice--info}
💁 **Important** \
\
`Azure Blob Storage` can store **Unstructured Data**.
- Store `unstructured` data in the cloud like video, audio etc.
- Multiple types of blob can be stored
  - **Block**: blobs are optimized for `efficient upload of large file`.
  - **Page**: blobs are optimized for `random read and write access` like `VHD` files for virtual machine image.
  - **Append**: these blobs can only be added onto existing blob and the blob can't be changed. Like adding logs on log blog.
- Multiple storage tiers
  - **Premium**: access blobs anytime with `great SSD performance` and `very expensive`    
  - **Hot**: access blobs anytime with `great performance` and `expensive`
  - **Cool**: `cheaper` but take more time to fetch blob.
  - **Archive**: store offline data, `cheaper storage` and `costly retrieval` 

- You get all Azure Storage features
  - Firewalls and Virtual Network
  - Shared Access Signatures


{: .notice--success}
Learn more about [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/)



### Azure Table Storage

![](https://imgur.com/MNutzpz.png)

{: .notice--info}
💁 **Important** \
\
`Azure Table Storage` can store **Unstructured Data**.
- A `NoSQL`` key-value` store for rapid development using massive `semi-structured datasets`
- **Flexible data schema**: the table schema is flexible means one row might have 5 the other can have 23 columns.
- You get all Azure Storage features
  - Firewalls and Virtual Network
  - Shared Access Signatures


{: .notice--success}
Learn more about [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/tables/)



### Azure Disk Storage

![](https://imgur.com/HsvZyX0.png)

{: .notice--info}
💁 **Important** \
\
`Azure Disk Storage` can store **Unstructured Data**.
- A `NoSQL`` key-value` store for rapid development using massive `semi-structured datasets`
- **Flexible data schema**: the table schema is flexible means one row might have 5 the other can have 23 columns.
- You get all Azure Storage features
  - Firewalls and Virtual Network
  - Shared Access Signatures


{: .notice--success}
Learn more about [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/tables/)












---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

{: .notice--success}
I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

{: .notice--info}
Your future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
