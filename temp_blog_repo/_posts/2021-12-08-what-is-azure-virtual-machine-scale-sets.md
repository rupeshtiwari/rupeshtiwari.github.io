---
title: What is Azure Virtual Machine Scale Sets
date: 2021-12-08 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/zZYQYQA.png
header:
  image: https://i.imgur.com/3PR1wRa.png
  teaser: https://i.imgur.com/zZYQYQA.png
  og_image: https://i.imgur.com/zZYQYQA.png
tags:
  - azure
  - webdev
  - beginners
  - tutorial
---

> Now a days distributed architecture is common. We deploy our services into many different servers to scale them up and meet our demand. However, managing all servers for **load-balancing, scaling, make application highly available** is super challenging on cloud. **Azure Virtual Machine Scale sets** is the great tool which does all of these automatically with **no extra cost** for you. Lets learn more about Scale sets in this article.

For Black Friday sell you want your services to be running in 50 instances and on regular day you want 5 instances. So in cloud Virtual machine scale set you get automatic scale up and down of your VM instances.

## Scalability vs Elasticity

Scalability means to increase from 5 to 50 instances. Elasticity is to reduce 50 instances to 5. With VMSS scalability and elasticity is possible automatically.

## Vertical vs Horizontal Scaling

![](https://imgur.com/EkHkAX3.png){: .full}

Two types of scaling vertical and horizontal.

### Vertical Scaling or Scale Up/Down

In Vertical scaling if you have 1 core CPU and 4GB memory and if you can upgrade this configuration to 2 core CPU and 8 GB memory. This is called as Scale UP. You can reduce the configuration back to baseline which is called as Scale Down.

### Horizontal Scaling or Scale Out/In

Horizontal Scaling is you start with one VM and you keep adding more VM with same configuration is also called as Scale Out. You can also reduce back to 1 VM once your Sale or Business demand is over this process is called as Scale In.

## Distributed Architecture with Scale Sets

You must need **Distributed Architecture** to provide **redundancy and improved performance**, applications are typically **distributed across multiple instances**. In order to give your customer faster speed and low latency you may need **load balancer** that **distributes requests** to one of the application **instances**.

## What is Azure Virtual Machine Scale Sets?

![](https://imgur.com/3qqKpF8.png){: .full}

Virtual Machine Scale Set (VMSS) let you **Create** and **Manage** a **group of load balanced VMs**. The number of VM instances can **automatically increase or decrease** in response to demand or a defined schedule.

- With virtual machine scale sets, you can build **large-scale services for areas such as compute, big data, and container workloads**.
- Scale sets provide **high availability to your applications**, and allow you to **centrally manage**, **configure**, and **update** a large number of VMs.
- **Consistent Configuration**: Virtual Machine scale sets are the objects that are used to run multiple instances of your application and maintain a consistent configuration across your environment.

{: .notice--info}
VMs in a scale set are identical, so you can create them from the same base operating system image.

## How Virtual Machine Scale Set (VMSS) works

VMSS uses [minimum instance](#minimum-instance) to start with and you can set the [maximum instance](#maximum-instance) of your virtual machine. You can setup rules based on [Time](#time-based-scaling), [Metrics](#metrics) based to increase or decrease VM instances. VMSS has in build [load balancers](#load-balancer-in-scale-set). Public load balancer works with internet traffic to your VMs. Which looks upon the CPU metrics and if CPU utilization is more than 75% then wait for some time and add another VM instance without any manual steps required.

### Minimum Instance

This defines how much instance of VM minimum you need. You can set it to 1.

### Maximum Instance

You can go up to 1000 VM instances. For example for your business you can start with 1 VM and scale out up to 3 instances. Therefore, you set Maximum instance value to 3. Therefore, even though the demand is high Azure will not spin up 4th instance. It will stay up to 3 instance only and you save budget.

### Metrics Based Scaling

If you don't know where you are going to get the maximum business, it may be today, next day or any 5 continuous days then you must go for Metrics based scaling. You can set rule like If my VM CPU utilization is > 75% then add one more VM if it is less than ( < ) 25% then remove the VM.

**Manually increasing instances**: If you know tomorrow only you want to increase your VM instance to 4 instances. So you do that manually and revert it on the day after tomorrow.

### Time Based Scaling

**Custom** : You can do **Time Based** increment or decrement Here you can schedule your VMs to scale out and scale in. For example every Saturday increase the VM instance to 4 and on Sunday reduce it back to 1. You can schedule these rules.

### Load Balancer in Scale Set

![](https://imgur.com/8H6dwMy.png){: .full}

An **Azure load balancer** is a Layer-4 (TCP, UDP) **load balancer** that provides high availability by distributing incoming traffic among healthy VMs. A **[public load balancer](https://docs.microsoft.com/en-us/azure/load-balancer/components#frontend-ip-configurations)** can provide outbound connections for virtual machines (VMs) inside your virtual network. Public Load Balancers are used to load balance internet traffic to your VMs. An **[internal (or private) load balancer](https://docs.microsoft.com/en-us/azure/load-balancer/components#frontend-ip-configurations)** is used where private IPs are needed at the frontend only. Internal load balancers are used to load balance traffic inside a virtual network.

## Virtual Machine Scale Set Architecture

Virtual Machine Scale Set (VMSS) deploys Virtual Machines in a single subnet of a Virtual Network. Figure below shows Architecture of Virtual Machine Scale Set (VMSS) deployed in single subnet with Single Placement group.

![](https://imgur.com/XUk0AFB.png){: .full}

**Virtual Network** with Single Subnet is automatically created during VMSS deployment. All virtual machines specified in create VMSS blade are deployed in the Single Subnet.

**Azure Load Balancer** is automatically created during VMSS deployment.

**Placement group** is availability set with five fault domains and five update domains and support up to 100 VMs. Placement group is automatically created by VMSS. Additional Placement groups will be automatically created by VMSS if you are deploying more than 100 instances.

**Storage**: VMSS can use managed disks or unmanaged disks for Virtual Machine storage. Managed disks are required to create more than 100 Virtual Machines. Unmanaged disks are limited to 100 VMs and single Placement Group.

**VM Diagnostic Logs** are guest OS performance counters and are streamed to Azure storage Account. VMSS uses this data for making Auto-scaling decisions.

## Why use Virtual Machine Scale Sets?

- **Maintenance Mode Support**: If you need to perform maintenance or update an application instance, your customers must be distributed to another available application instance.
- **Automatically increase VM instances**: To keep up with additional customer demand, you may need to increase the number of application instances that run your application.
  - Auto scale based on metrics.
  - Auto scale based on a defined schedule. Suppose starting next week you are going to have a heavy peak, for next 3 days. You can define a set schedule. For example, at 9 am on Jan 2nd 2021, increase the VM instance count to 50. And at 9PM on Jan 5th when your peak ends, bring the instance count back to your baseline configuration.
- **Easy to create and manage multiple VMs** : It maintains a consistent configuration (VM size, disk configuration) across your environment. All VM instances are created from the same base OS image and configuration. This approach lets you easily manage hundreds of VMs without additional configuration tasks or network management. For basic layer-4 traffic distribution it uses Azure Load Balancer. And for advanced layer-7 it uses Azure Application Gateway.
- **Provides high availability and application resiliency**: If one of these VM instances has a problem, customers continue to access your application through one of the other VM instances with minimal interruption.
- **Allows your application to automatically scale as resource demand changes**: Like it auto increase VM instances. It can also minimizes the number of unnecessary VM instances that run your application when demand is low, while customers continue to receive an acceptable level of performance
- **Works at large-scale** : Up to **1000** Azure VM, and custom VM images up to **600** VM.

### Scale set saves money 💰

The **management** and **automation** features, such as auto-scale and redundancy, incur **no additional charges** over the use of VMs. You only pay for the underlying compute resources such as the VM instances, load balancer, or Managed Disk storage.

### Benefits of Scale Set

| scenario                         | Manage VMs manually                                                                    |                                                                      Use VM Scale Set |
| :------------------------------- | :------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------: |
| Adding extra VM                  | Manually create, configure and ensure compliance                                       |                                       Automatically create from central configuration |
| Traffic Balancing & distribution | Manually                                                                               |         Automatically create and integrate Azure load balancer or Application Gateway |
| High availability and redundancy | Manually create Availability set or distribute and track VMs across Availability Zones | Automatic distribution of VM instances across Availability Zones or Availability Sets |
| Scaling of VMs                   | Manual monitoring and Azure Automation                                                 | Auto scale based on host metrics, in-guest metrics, Application Insights, or schedule |

Using scale set is a wiser decision with zero additional cost!

## Building Azure VM using Azure VM Image Builder

![](https://imgur.com/Ut26mIt.png){: .full}

Using [AZURE VM IMAGE BUILDER SERVICE](https://docs.microsoft.com/azure/virtual-machines/linux/image-builder-overview), you can quickly start building standardized images without needing to set up your own imaging pipeline. Just provide a simple configuration describing your image, submit it to the Image Builder service, and the image is built and distributed. You will incur some compute, networking and storage costs when creating, building and storing images with Azure Image Builder. These costs are similar to the costs incurred in manually creating custom images.

## Distribute your VM images

![](https://imgur.com/2diOKki.png){: .full}

[SHARED IMAGE GALLERY](https://docs.microsoft.com/en-us/azure/virtual-machines/shared-image-galleries) enables image distribution to different users, service principals, or AD groups, across multiple subscriptions within your organization and regions through a centralized image management platform.

Run below command for creating shared image gallery:

```powershell
`New-AzGallery -GalleryName “azdemoGallery” -ResourceGroupName “Azure-demo” -Location “West US”`
```

Next, we need to create Gallery definition for storing windows images:

```powershell
New-AzGalleryImageDefinition -GalleryName “azdemogallery” -ResourceGroupName “Azure-demo” -location “West US” -Name “winserverimages” -OsState generalized -Ostype windows -Publisher demo -offer windows -sku ‘win2016’
```

## How to monitor scale sets

- Use [Azure Monitor for VMs](https://docs.microsoft.com/en-us/azure/azure-monitor/vm/vminsights-overview), to see metrics about VM CPU, memory, disk and network performance
- Enable monitoring [virtual machine scale set application](https://docs.microsoft.com/en-us/azure/azure-monitor/app/azure-vm-vmss-apps) with Application Insights to collect detailed information about your application including page views, application requests, and exceptions.
- Configure [availability test](https://docs.microsoft.com/en-us/azure/azure-monitor/app/monitor-web-app-availability) to check application availability to simulate user traffic.

{: .notice--success}
Learn more about [Azure Virtual Machine Scale Set](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview?context=/azure/virtual-machines/context/context)

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
