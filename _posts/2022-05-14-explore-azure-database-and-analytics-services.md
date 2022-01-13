---
title: Explore Azure Database and Analytics Services
date: 2022-05-14 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
image: https://i.imgur.com/OTHb1vM.png
header:
  image: https://i.imgur.com/XMFI6bl.png
  teaser: https://i.imgur.com/OTHb1vM.png
  og_image: https://i.imgur.com/OTHb1vM.png
tags:
  - webdev
  - azure
  - tutorial
  - az-900
---

> Learn how to help your company to migrate its database workload to Microsoft Azure. How can you use Azure Cosmos DB to migrate your data to cloud and retain or enhance your developers' skillsets. Lear how you can use big data and analysis services like Azure Synapse Analytics, Azure HDInsight, Azure Databricks, and Azure Data Lake Analytics to analyze large volumes of data. This is the 1st article on "**Azure Fundamentals Part 2: Describe core Azure services**".

![](https://i.imgur.com/PkGHO9t.png){: .full}

Do you want to migrate to Azure and are you using variety of databases technologies? Then you must read this article to learn all the different types data workloads in Azure. Understand the different database options that are available in Azure.

Azure database services are globally distributed, and Azure supports many of the industry standard databases and APIs.

## Learning objectives

![](https://i.imgur.com/6VSKg4J.png){: .full}

After completing this module, you'll be able to describe the benefits and usage of:

- Azure Cosmos DB
- Azure SQL Database
- Azure SQL Managed Instance
- Azure Database for MySQL
- Azure Database for PostgreSQL
- Azure Synapse Analytics
- Azure HDInsight
- Azure Databricks
- Azure Data Lake Analytics

## Prerequisites

- You should be familiar with basic computing concepts and terminology.
- You should be familiar with basic database concepts and terminology.

## Azure Cosmos DB

If you want your data to be accessed via many API's and you have developers with different skill sets. Then I would recommend using Azure Cosmos DB.

![](https://i.imgur.com/UC5N0r6.png){: .full}

Azure Cosmos DB is a globally distributed, multi-model database service. You can take advantage of fast, single-digit-millisecond data access by using any one of several popular APIs. Azure Cosmos DB provides comprehensive service level agreements for throughput, latency, availability, and consistency guarantees.

Azure Cosmos DB supports schema-less data, which lets you build highly responsive and "Always On" applications to support constantly changing data. You can use this feature to store data that's updated and maintained by users around the world.

![](https://i.imgur.com/LzWLt9M.png){: .full}

Azure Cosmos DB is flexible. At the lowest level, Azure Cosmos DB stores data in atom-record-sequence (ARS) format. The data is then abstracted and projected as an API, which you specify when you're creating your database. Your choices include SQL, MongoDB, Cassandra, Tables, and Gremlin. This level of flexibility means that as you migrate your company's databases to Azure Cosmos DB, your developers can stick with the API that they're the most comfortable with.

## Azure SQL Database

Azure SQL Database is a relational database based on the latest stable version of the Microsoft SQL Server database engine.

![](https://i.imgur.com/7se8XDr.png){: .full}

Azure SQL Database is a platform as a service (PaaS) database engine. It handles most of the database management functions, such as upgrading, patching, backups, and monitoring, without user involvement. SQL Database provides 99.99 percent availability. SQL Database is a fully managed service that has built-in high availability, backups, and other common maintenance operations.

You can use both relational data and non-relational structures, such as graphs, JSON, spatial, and XML.

{: .notice--success}
🏆 **Pro Tip** \
\
The newest capabilities of SQL Server are released first to **SQL Database**, and then to SQL Server itself.

### Migration

You can migrate your existing SQL Server databases with minimal downtime by using the Azure Database Migration Service. The Microsoft Data Migration Assistant can generate assessment reports that provide recommendations to help guide you through required changes prior to performing a migration.

### Exercise - Create a SQL database

In your company suppose you want Azure SQL Database for part of your migration.

#### Task 1: Create the database

Learn here [how to create Azure SQL DB in Azure](https://docs.microsoft.com/en-us/learn/modules/azure-database-fundamentals/exercise-create-sql-database)

![](https://imgur.com/rjno2oM.gif){: .full}

#### Task 2: Test the database

In this task, you configure the server and run a SQL query.

![](https://imgur.com/VpgneZv.gif){: .full}

## Azure SQL Managed Instance

Azure SQL Managed Instance is a scalable cloud data service that provides the broadest **SQL Server database engine** compatibility with all the benefits of a fully managed platform as a service (PaaS).

![](https://i.imgur.com/TUMxq9e.png)

| **Feature**       | **Azure SQL Database** | **Azure SQL Managed Instance** |
| ----------------- | ---------------------- | ------------------------------ |
| Always Encrypted  | Yes                    | Yes                            |
| Always On         | 99.99-99.995%          | 99.99%                         |
| Attach a database | No                     | No                             |
| Auditing          | Yes                    | Yes                            |

{: .notice--warning}
<i class="fa fa-info-circle"></i> **Note** \
\
See the complete [difference between SQL Database and SQL Managed Instance here.](https://docs.microsoft.com/en-us/azure/azure-sql/database/features-comparison).

If several of your databases use `Cyrillic` characters for collation. In this scenario, You should migrate your databases to an Azure SQL Managed Instance, since Azure SQL Database only uses the default `SQL_Latin1_General_CP1_CI_AS` server collation.

### Migration

Azure SQL Managed Instance makes it easy to migrate your on-premises data on SQL Server to the cloud using the Azure Database Migration Service (DMS) or native backup and restore.

![](https://i.imgur.com/VuBdy3W.png){: .full}

{: .notice--warning}
<i class="fa fa-info-circle"></i> **Note** \
\
For a detailed description of the migration process, see [Migration guide: SQL Server to SQL Managed Instance](https://docs.microsoft.com/en-us/azure/azure-sql/migration-guides/managed-instance/sql-server-to-managed-instance-guide)

## Azure database for MySQL

If your company currently manages several websites on-premises that use the LAMP stack (Linux, Apache, MySQL, PHP). Good news is LAMP is possible in Azure. Azure Database for **MySQL is a relational database service** in the cloud, you have a 99.99 percent availability service level agreement from Azure, powered by a global network of Microsoft-managed datacenters. With Azure Database for MySQL, you can use point-in-time restore to recover a server to an earlier state, as far back as 35 days.

![](https://i.imgur.com/zqS4DPF.jpg){: .full}

Azure Database for MySQL delivers:

- Built-in high availability with no additional cost.
- Predictable performance and inclusive, pay-as-you-go pricing.
- Scale as needed, within seconds.
- Ability to protect sensitive data at-rest and in-motion.
- Automatic backups.
- Enterprise-grade security and compliance.

You can migrate your existing MySQL databases with minimal downtime by using the Azure Database Migration Service.

## Azure Database for PostgreSQL

Azure Database for **PostgreSQL is a relational database** service in the cloud. T

![](https://i.imgur.com/jgVSNYa.png){: .full}

Moreover, Azure Database for PostgreSQL delivers the following benefits:

- Built-in high availability compared to on-premises resources. There's no additional configuration, replication, or cost required to make sure your applications are always available.
- Simple and flexible pricing.
- Scale up or down as needed, within seconds.
- Adjustable automatic backups and point-in-time-restore for up to 35 days.
- Enterprise-grade security and compliance to protect sensitive data at-rest and in-motion.

Azure Database for PostgreSQL is available in two deployment options: **Single Server** and **Hyperscale (Citus)**.

### Single Server

The Single Server deployment option delivers:

- Built-in high availability with no additional cost (99.99 percent SLA).
- Predictable performance and inclusive, pay-as-you-go pricing.
- Vertical scale as needed, within seconds.
- Monitoring and alerting to assess your server.
- Enterprise-grade security and compliance.
- Ability to protect sensitive data at-rest and in-motion.
- Automatic backups and point-in-time-restore for up to 35 days.

All those capabilities require almost no administration, and all are provided at no additional cost.

The Single Server deployment option offers three pricing tiers: Basic, General Purpose, and Memory Optimized.
You only pay for the resources you need, and only when you need them.

### Hyperscale (Citus)

The Hyperscale (Citus) option horizontally scales queries across multiple machines by using sharding. Its query engine parallelizes incoming SQL queries across these servers for faster responses on large datasets. It serves applications that require greater scale and performance, generally workloads that are approaching, or already exceed, 100 GB of data.

The Hyperscale (Citus) deployment option supports multi-tenant applications, real-time operational analytics, and high throughput transactional workloads. Applications built for PostgreSQL can run distributed queries on Hyperscale (Citus) with standard connection libraries and minimal changes.

## Big data and analytics

If your company sales GPS tracking system for all of your delivery vehicles. And GPS system provides real-time tracking data to your primary datacenter. You want to look at several years of tracking data in order to determine trends. For example, an important trend might be a spike in deliveries around the holidays that would require hiring additional staff.

Data comes in all types of forms and formats. When we talk about big data, we're referring to large volumes of data. This amount of data becomes increasingly hard to make sense of and to base decisions on. The volumes are so large that traditional forms of processing and analysis are no longer appropriate.

Open-source cluster technologies have been developed, over time, to try to deal with these large datasets. Microsoft Azure has Azure Synapse Analytics, Azure HDInsight, Azure Databricks, and Azure Data Lake Analytics to provide big data and analytic solutions.

### Azure Synapse Analytics

[Azure Synapse Analytics](https://docs.microsoft.com/en-us/azure/sql-data-warehouse/) (formerly Azure SQL Data Warehouse) is a limitless **analytics service** that brings together enterprise data warehousing and big data analytics.

![](https://i.imgur.com/1qaunRN.png){: .full}

You can query data on your terms by using either serverless or provisioned resources at scale. You have a unified experience to **ingest, prepare, manage, and serve** data for immediate BI and machine learning needs.

### Azure HDInsight

[Azure HDInsight](https://azure.microsoft.com/services/hdinsight/) is a fully managed, open-source analytics service for enterprises.

![](https://i.imgur.com/1gRQDNl.png){: .full}

You can run popular **open-source frameworks** and create cluster types such as [Apache Spark](https://docs.microsoft.com/en-us/azure/hdinsight/spark/apache-spark-overview), [Apache Hadoop](https://docs.microsoft.com/en-us/azure/hdinsight/hadoop/apache-hadoop-introduction), [Apache Kafka](https://docs.microsoft.com/en-us/azure/hdinsight/kafka/apache-kafka-introduction), [Apache HBase](https://docs.microsoft.com/en-us/azure/hdinsight/hbase/apache-hbase-overview), [Apache Storm](https://docs.microsoft.com/en-us/azure/hdinsight/storm/apache-storm-overview), and [Machine Learning Services](https://docs.microsoft.com/en-us/azure/hdinsight/r-server/r-server-overview). HDInsight also supports extraction, transformation, and loading (ETL), data warehousing, machine learning, and IoT.

### Azure Databricks

[Azure Databricks](https://azure.microsoft.com/services/databricks/) helps you unlock insights from all your data and build artificial intelligence solutions.

![](https://i.imgur.com/HCMZa2F.png){: .full}

You can set up your Apache Spark environment in minutes, and then autoscale and collaborate on shared projects in an interactive workspace. Azure Databricks supports Python, Scala, R, Java, and SQL, as well as data science frameworks and libraries including TensorFlow, PyTorch, and scikit-learn.

### Azure Data Lake Analytics

[Azure Data Lake Analytics](https://azure.microsoft.com/services/data-lake-analytics/) is an on-demand analytics job service that simplifies big data. Instead of deploying, configuring, and tuning hardware, you write queries to transform your data and extract valuable insights.

![](https://i.imgur.com/7Sc8fH7.png){: .full}

The analytics service can handle jobs of any scale instantly by setting the dial for how much power you need. You only pay for your job when it's running, making it more cost-effective.

## Check your knowledge

- Your development team is interested in writing Graph-based applications that take advantage of the Gremlin API. Which option would be ideal for that scenario? - Azure Cosmos DB
- Tailwind Traders uses the LAMP stack for several of its websites. Which option would be ideal for migration? - Azure Database for MySQL
- Tailwind Traders has millions of log entries that it wants to analyze. Which option would be ideal for analysis? - Azure Synapse Analytics

![](https://i.imgur.com/TLKIqe9.png){: .full}

![](https://imgur.com/DACPhYB.png){: .full}

![](https://imgur.com/**gnJIvtM.png){: .full}

![]("https://github.com/rupeshtiwari/coding-examples-angular-monorepo-with-nx/blob/0cdc9a042b4d8cfc1604d39d43b5c5ca39d5f032/enterprise-angular-mono-repo-patterns.pdf")

![](https://imgur.com/ziGmUtD.png){: .full}

## References

- [Explore Azure database and analytics services](https://docs.microsoft.com/en-us/learn/modules/azure-database-fundamentals/)

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

{: .notice--info}
I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

{: .notice--warning}
Your bright future is awaiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/5fBatz9.png)
