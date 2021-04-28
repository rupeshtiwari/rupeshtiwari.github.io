---
title: What to use to Run applications in Azure
date: 2021-11-27 00:00 +0000
description: Learn what should you use when you want to run your applications on Azure cloud.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/rFW3EiY.png
header:
  image: https://i.imgur.com/3PR1wRa.png
  teaser: https://i.imgur.com/rFW3EiY.png
  og_image: https://i.imgur.com/rFW3EiY.png
tags:
  - azure
  - webdev
  - beginners
  - tutorial
---

> Learn what service from Azure you should use while creating your application in Azure. This article has quick short answer for when to use what in Azure service? Get [free e-book on Design Distributed Systems](https://azure.microsoft.com/en-us/resources/designing-distributed-systems/).
> It is difficult to compare options available in Azure. The comparison with the features of the options provides you tools to choose the right service with your requirements.

## Running Application in Azure Options

You can use various services from Azure to run your applications. It depends what exactly is your requirements. Below are the services available from Azure.

1. ![](https://imgur.com/YPcnULJ.png) Azure Virtual Machines. (VMs)
2. ![](https://imgur.com/ukowMIs.png) Azure Kubernetes Services (AKS)
3. ![](https://imgur.com/5IrDqJM.png) Container instances
4. ![](https://imgur.com/qwLOnPT.png)Azure Web App for Containers
5. ![](https://imgur.com/3HK1rtT.png)Azure Batch
6. ![](https://imgur.com/cdq4W3I.png)Azure Service Fabric (Mesh)
7. ![](https://imgur.com/eIRJkJj.png)Cloud ServicesX
8. ![](https://imgur.com/iH0hVvs.png)Azure App Services Web Apps
9. ![](https://imgur.com/OcHd8Qi.png) Azure App Services WebJobs
10. ![](https://imgur.com/SRk7YqX.png)Azure App Services Mobile Apps
11. ![](https://imgur.com/j1Y4A4B.png) Function Apps
12. ![](https://imgur.com/z0fI8LX.png) Azure Logic Apps

### Virtual Machines (VMs)

![](https://imgur.com/lVMTAlR.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Azure Virtual Machines` is under **Infrastructure as a Service (IaaS)** offering from Microsoft Azure.

- Managed Virtual Machine Service in Cloud
- Starts and Stops in `minutes`
- Many OS images are available.
  - You can choose your own OS image (Linux Windows). Explore the full list of [Azure VM types](https://azure.microsoft.com/en-us/pricing/details/virtual-machines/series/)
  - You can bring your own OS /Software License ( same money )
- Many Sizes to choose from (CPU, Memory, Disk Type)
  - `General purpose`
  - `GPU` (for Intense work like video rendering etc.)
- Configuration options
  - Auto shutdown, Adding Disks, Adding VM to Networking
- SLA `99.95%` (Only if you run multiple instances)

{: .notice--success}
Learn [Getting Started with Azure Virtual Machine](https://docs.microsoft.com/en-us/azure/virtual-machines/). To get guarantied 99.95% SLA you must need 2 or more VMs.

### Azure Kubernetes Services (AKS)

![](https://imgur.com/H50OFsZ.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Azure Kubernetes Service` is under **Infrastructure as a Service (IaaS)** offering from Microsoft Azure.

- Run `multiple` containers that makeup your applications
- Starts and stops in `seconds`
- Managed version of the Kubernetes container `orchestrator`. It takes care of provisioning or de-provisioning the containers. It scales up and down and monitor containers.
- Runs `Linux` and `Windows` Containers
- You instantiate the container with images from
  - `Docker Hub` or
  - `Azure Container Registry`, here you can host your own images or upload from somewhere.
- AKS runs in Azure on a cluster of VM so the availability is same as Azure VM.

{: .notice--success}
Containers are `light weight` compare to VM. They starts and stops in `Seconds` however VMs in `Minutes`. Learn more about [AKS](https://azure.microsoft.com/en-us/services/kubernetes-service/).

### Container Instances

![](https://imgur.com/9aKMeiF.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Container Instances` is under **Infrastructure as a Service (IaaS)** offering from Microsoft Azure.

- Run `single` containers that makeup your applications
- Starts and stops in `seconds`
- `No` container `orchestrator` needed
  - Can work with orchestrators
- Runs `Linux` and `Windows` Containers
- You instantiate the container with images from
  - `Docker Hub` or
  - `Azure Container Registry`, here you can host your own images or upload from somewhere.
- AKS runs in Azure on a cluster of VM so the availability is same as Azure VM.

{: .notice--success}
Learn more about [Azure Container Instances](https://azure.microsoft.com/en-us/services/container-instances/).

### Azure Web App for Containers

![](https://imgur.com/ciwt04O.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Azure Web App for Containers` is under **Infrastructure as a Service (IaaS)** offering from Microsoft Azure.

- You can run container in Azure Web App for Container as Service. This allows you to run container on App Services.
- Starts and stops in `seconds`
- `No` container `orchestrator` needed
- Runs `Linux` and `Windows` Containers
- Use App Service Features
  - Easy to setup `Continuous Deployments` from source control
  - Use `Deployment Slots` which allows you deployment with no `downtime`
  - `Scale` and automatic Scale by adding rules.
- You instantiate the container with images from
  - `Docker Hub` or
  - `Azure Container Registry`, here you can host your own images or upload from somewhere.

### Azure Batch

![](https://imgur.com/q3vIFLU.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Azure Batch` is under **Infrastructure as a Service (IaaS)** offering from Microsoft Azure.

- Allows you to run your job across many `Virtual Machines` at `massive` scale (thousands of VMs). You can use it to run a calculating job that needs lots of compute power or rendering video files.
- Orchestrates running your job in parallel
  - `Scaling` across machines
  - `Stages data` for your job so you can insert data into your job.
  - Create `job pipelines` with tasks so you can determine what steps need to be done with the output.
- Runs your job on `Linux` and `Windows` based VMs
- Can `run containers`. So you can run your application in container in Azure Batch. It will run it on as many VMs as needed.

{: .notice--success}
Learn more about [Azure Batch](https://azure.microsoft.com/en-us/services/batch/)

### Azure Service Fabric (Mesh)

![](https://imgur.com/EDhiF4b.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Azure Service Fabric (Mesh)` is under **Infrastructure as a Service (IaaS)** as well as **Platform as a Service (PaaS)** offering from Microsoft Azure.

- Run your applications reliably and resilient.
- Orchestrates running your app over multiple nodes
  - Keeps it available
  - Keeps it performant by scaling
  - Performs rolling upgrades
- Can run
  - Any executable (type of apps)
  - Reliable services (that persist state)
  - Actor-based applications (that shares the state)
  - And orchestrate containers
- Runs in the `cloud` and `on-premises`
- In production you must need minimum 5 VMs to run it reliably.
- Can run `serverless` as **Service Fabric** **Mesh** service. You can spin up Service Fabric without using 5 VMs.

{: .notice--success}
Did you know Azure Service Fabrics is a technology that Microsoft uses itself to run many of their own Azure Services, like `Azur e SQL Databases`? Learn more about [Azure Service Fabrics](https://azure.microsoft.com/en-us/services/service-fabric/)

### Cloud Services

![](https://imgur.com/6cIWhPK.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Cloud Services` is under **Platform as a Service (PaaS)** offering from Microsoft Azure.

- Run your applications in VMs and manages in the form of Web worker or Worker roles.
- Abstracts the VM so that you don't have to deal with OS or network.
  - It provides scaling
- You package your app and deploy it using VS template
  - To run as an HTTP-based application as web worker role, or
  - To run as a background job as worker role.
- Enable you to have some control over the VM
  - RDP into the VMs you can create task to install things in VMs.

{: .notice--success}
Did you know **Azure Cloud Services** was one of the first `Platform-as-a-Service` offering from Azure and takes care the management of VMs for you? Learn more about [Azure Cloud Services](https://azure.microsoft.com/en-us/services/cloud-services/)

### Azure App Services Web Apps

![](https://imgur.com/rsLK6zD.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Azure App Services Web Apps` is under **Platform as a Service (PaaS)** offering from Microsoft Azure.

- Runs your app in a Webserver-as-a-service like `IIS` or `Tomcat`
- .Net, Java, PHP, Node.js and Python
- App Service features
  - Continuous Deployment
  - Custom Domains
  - Deployment Slots no downtime
  - (automatic) scaling
  - Authentication/ Authorization
  - WebJobs
  - Hybrid connections to on-premise resources ( like connect your own data-center database)
- SLA 99.95% even you run only one instance.

{: .notice--success}
Learn more about [Azure Web Apps](https://azure.microsoft.com/en-us/services/app-service/web/)

### Azure App Services WebJobs

![](https://imgur.com/gGrP5wI.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Azure App Services WebJobs` is under **Platform as a Service (PaaS)** offering from Microsoft Azure.

- Runs your background task in App Services
- Runs inside your App Service
  - Consumes resources
  - Is dependent on your App Services ( If WebJob as a part of a Web App the WebJob will stop if Web App is stopped )
- Can be triggered
  - Continuously
  - On a schedule ( like every 10 mins)
  - By outsider resources
    - New message on a queue (WebJob SDK has in-build code to connect to Queues)

{: .notice--success}
Learn more about [Azure App Services WebJob](https://docs.microsoft.com/en-us/azure/app-service/webjobs-create)

### Azure App Services Mobile Apps

![](https://imgur.com/ntXbHFU.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Azure App Services Mobile Apps` is under **Platform as a Service (PaaS)** offering from Microsoft Azure.
{: .notice--success}

- Run your app as a backend for mobile clients
- You can create backend app using `.Net or Node.js`
- Mobile clients connect with the SDK
  - iOS, Android, Windows, Xamarin Forms
- Unique features offered by Mobile Apps that is not in Web Apps
  - **Offline sync** which enables the mobile app to loose connection to backend still continue working and sync back when connected to backend eventually )
  - **Push notifications** which enables you to send notifications to your mobile app like you get when you receive new email.
- All of the App Service features
  - Deployment Slots
  - (Automatic) scaling
- SLA 99.95%

{: .notice--success}
Learn more about [Azure App Services Mobile Apps](https://azure.microsoft.com/en-us/services/app-service/mobile/)

### Function Apps

![](https://imgur.com/Q7lOW1P.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Function Apps` is under **Serverless or Logic as a Service** offering from Microsoft Azure.
{: .notice--success}

- This is also part of `Azure App Services`
- Executes small pieces of code like execute whenever file get uploaded.
- Can be triggered
  - Continuously
  - On a schedule ( like every 10 mins)
  - By outsider resources
    - Web Hooks
    - New messages in a queue
- Have bindings
  - **Incoming** Azure Blob value
  - **Outgoing** Azure Storage Queue Message
- All of the App Service features
  - Deployment Slots
  - Continuous Deployment
  - (Automatic) scaling
- Can run in consumption mode (serverless)
  - Pay only for their execution
  - Scale automatically

{: .notice--success}
In consumption mode Azure Functions become ideal after 5 mins of non-running. Learn more about [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview)

### Azure Logic Apps

![](https://imgur.com/6ocXvSn.png){: .full}

{: .notice--info}
💁 **Important** \
\
`Azure Logic Apps` is under **Serverless or Logic as a Service** offering from Microsoft Azure.

- Execute a pipeline of tasks in a process
- Replaces for BizTalk Services
- Can be triggered
  - Continuously
  - On a schedule ( like every 10 mins)
  - By outsider resources
    - Web Hooks
    - New messages in a queue
- After being triggered Azure Logic app goes on to execute a process by calling connectors which are basically APIs.
  - Many connectors to resources
    - Like connectors to Office 365, Twitter, SendGrid, or your own APIs.
- Only run in **consumption mode** (serverless)
  - Scales automatically

{: .notice--success}
Learn more about [Azure Logic Apps](https://azure.microsoft.com/en-us/services/logic-apps/)

## When to use What?

### Based on high level application requirement

| When                                                                                   | Use these Azure Service                                                                                      |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Full control** & responsibility, Stay vendor agnostic (run anywhere vendor agnostic) | **VMs, Container Instances, Kubernetes Service, Web App for Containers, Azure Batch, Service Fabric (Mesh)** |
| **Azure manages** your app, You manage scaling and configuration                       | **Batch, Cloud Services, Mobile App, Web App, Service Fabric**                                               |
| Be able to **RDP** in VMs                                                              | **Batch, Cloud Services, Service Fabric(Mesh)**                                                              |
| **Azure manage** your app, **including** **scaling**, You manage configuration         | **Azure Function App, Logic App**                                                                            |

### Comparing Container Options and VMs

| Scenarios                                          | ![](https://imgur.com/YPcnULJ.png) VM | ![](https://imgur.com/5IrDqJM.png) Container Instances | ![](https://imgur.com/ukowMIs.png) Kubernetes Services | ![](https://imgur.com/qwLOnPT.png) WebApp for Containers | ![](https://imgur.com/3HK1rtT.png) Batch | ![](https://imgur.com/cdq4W3I.png) Service Fabric |
| -------------------------------------------------- | ------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------ | -------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------- |
| **Lift-and shift your app to the cloud**           | ✔️                                    |                                                        |                                                        |                                                          |                                          |                                                   |
| **Simple apps (without orchestrator)**             | ✔️                                    | ✔️                                                     |                                                        |                                                          |                                          |                                                   |
| **Complex apps (with orchestrator)**               |                                       |                                                        | ✔️                                                     |                                                          |                                          | ✔️                                                |
| **Run orchestrated microservices**                 |                                       |                                                        |                                                        |                                                          |                                          | ✔️                                                |
| **Run anywhere**                                   |                                       |                                                        |                                                        |                                                          |                                          | ✔️                                                |
| **Run web app on Linux with App Service features** |                                       |                                                        |                                                        | ✔️                                                       |                                          |                                                   |
| **Repetitive jobs (on massive scale)**             |                                       |                                                        |                                                        |                                                          | ✔️                                       |                                                   |

### Where to Run your Background Tasks?

| Scenarios                                     | ![](https://imgur.com/eIRJkJj.png) Cloud Services | ![](https://imgur.com/OcHd8Qi.png) Web Jobs | ![](https://imgur.com/ZWWXH9G.png) Functions | ![](https://imgur.com/0nJeR1T.png)Batch |
| --------------------------------------------- | ------------------------------------------------- | ------------------------------------------- | -------------------------------------------- | --------------------------------------- |
| **Short-running tasks**                       | ✔️                                                | ✔️                                          | ✔️                                           | ✔️                                      |
| **Long-running tasks**                        | ✔️                                                | ✔️                                          | ✔️                                           | ✔️                                      |
| **Resource intensive tasks**                  |                                                   |                                             |                                              | ✔️                                      |
| **Pay all month**                             | ✔️                                                | ✔️                                          |                                              |                                         |
| **Pay only for what and when you run**        |                                                   |                                             | ✔️                                           |                                         |
| **Need to deploy a complete app to run**      | ✔️                                                |                                             |                                              | ✔️                                      |
| **Can deploy only the code necessary to run** |                                                   | ✔️                                          | ✔️                                           |                                         |

### Where to Run your Applications?

| Scenarios                                                          | ![](https://imgur.com/iH0hVvs.png) Web App | ![](https://imgur.com/SRk7YqX.png) Mobile App | ![](https://imgur.com/eIRJkJj.png)Cloud Services | ![](https://imgur.com/cdq4W3I.png) Service Fabric | ![](https://imgur.com/j1Y4A4B.png)Functions | ![](https://imgur.com/z0fI8LX.png) Logic App |
| ------------------------------------------------------------------ | ------------------------------------------ | --------------------------------------------- | ------------------------------------------------ | ------------------------------------------------- | ------------------------------------------- | -------------------------------------------- |
| **Host web applications**                                          | ✔️                                         |                                               | ✔️                                               | ✔️                                                |                                             |                                              |
| **Host your own APIs**                                             | ✔️                                         |                                               | ✔️                                               | ✔️                                                | ✔️                                          |                                              |
| **Host backend for mobile apps** (push notification, offline sync) |                                            | ✔️                                            |                                                  |                                                   |                                             |                                              |
| **Automate one step of a process**                                 |                                            |                                               |                                                  |                                                   | ✔️                                          |                                              |
| **Automate a complete process**                                    |                                            |                                               |                                                  |                                                   |                                             | ✔️                                           |
| **Feature deployment slots, Auth**                                 | ✔️                                         | ✔️                                            | ✔️                                               |                                                   | ✔️                                          |                                              |
| **Run (micro) services at massive scale**                          |                                            |                                               |                                                  | ✔️                                                | ✔️                                          |

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

{: .notice--info}
I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

{: .notice--warning}
Your bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)
