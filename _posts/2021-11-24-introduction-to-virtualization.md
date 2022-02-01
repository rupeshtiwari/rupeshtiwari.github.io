---
title: Virtualization Basics with VMware
date: 2021-11-24 00:00 +0000
description: 'Hyper-V is a type-1, native hypervisor designed by Microsoft, which allows creating and managing multiple virtualized versions of a computer, called virtual machines (VMs). Are you using Virtual Machines and wanted to know how they are created?'
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
image: https://i.imgur.com/qxXxmBa.png
header:
  image: https://i.imgur.com/zipiW93.png
  teaser: https://i.imgur.com/qxXxmBa.png
  og_image: https://i.imgur.com/qxXxmBa.png
tags:
  - networking
  - tutorial
  - beginners
  - devops
---

> Virtualization is the single concept that now-a-days cloud service providers are using at massive scale and delivering IT technologies such as storage, compute, networking, database, analysis and much more as a service via internet and on-demand basis as pay-as-you-go pricing model. Therefore, it is very important that you must understand what is virtualization.

## What is Virtualization

Virtualization is a technology that lets you create a logical boundary around physical hardware and capabilities such as compute, storage and network.

Suppose you got one bare machine that has 64 GB RAM, 2 TB storage and 32 Core CPU. Then using hypervisor or virtualization techniques you can create 10 virtual machines on this hypervisor each having 4 GB RAM, 100GB disk storage and 2 Core CPU. Each Virtual Machine is a literal isolated machine, they can not talk to each other unless you provision so it gives data center level infrastructure.

![](https://i.imgur.com/yClGm4N.png)

## What is a Host?

Host is a hardware where a hypervisor is installed. Guest is a virtual machine created on a hypervisor. Virtual Machine operating systems are also called Guest Operating Systems.

## What is a Hypervisor?

Hypervisor is a software or firmware that creates and runs virtual machines. A hypervisor is also called as Virtual Machine Manager (VMM)

![](https://i.imgur.com/fSWfhNW.png)

There are 2 types of hypervisor:

1.  Type-1
2.  Type-2

![](https://i.imgur.com/581Jh8v.png)

### What are the attributes of Type-1 Hypervisor?  

- They come with bare metal machine on top of we install hypervisor firmware
- Type-1 Hypervisor is used for enterprise data center
- VMWare has ESXi software for hypervisor
- Microsoft has Hyper-V
- Citrix has Xenserver

![](https://i.imgur.com/NugWBgI.png)

### What are the attributes of Type-2 Hypervisor?  

- These types of hypervisors are softwares that you install on top of the Operating System of a computer. They are hosted hypervisors.
- Type-2 Hypervisor is used for Testing, Learning purpose
- VMWare has Workstation software for hypervisor
- Microsoft has Virtual PC
- Oracle has Virtual Box

![](https://i.imgur.com/kUsDd8n.png)

## What is VMWare VSphere?

VMWare is an American cloud computing & virtualization company. Vsphere is the brand name of vmware suite of virtualization products.

VSphere has got:

1.  Vmware ESXi (Hypervisor)
2.  Vcenter Server
3.  Vsphere client
4.  Vsphere web client

### Vsphere Client

VSphere client is an User Interface to access & configure ESXi Host.

![](https://i.imgur.com/lGU4gRX.png)

### Vcenter Server

VCenter Server provides features like:

- Distributed Resource scheduler (DRS)
- High Availability (HA)
- VMotion ( replication technique )
- Fault Tolerance
- VM Migrations

![](https://i.imgur.com/3pQBmuQ.png)

## What is a data store in VMWare Hypervisor? 

All files related to a virtual machine like log file, virtual disk file, iso files, configuration files are stored in the Data Store only. It can have 2 types of filesystems like Virtual Machine File System (VMFS) and NFS (Network File System).

![](https://i.imgur.com/w0lx1WD.png)

## What is Migration and their types?

Migration is the technique of moving a virtual machine from one host to another host or from one data store to another data store.

There are `5 Migration` strategies:

1.  Cold Migration
2.  Suspended Migration
3.  VMotion
4.  P2V (Physical to Virtual)
5.  V2V (Virtual to Virtual)
6.  From Microsoft hyper-v to vmware
7.  From vmware to xenserver etc.

## What are the states of a virtual machine?

1.  **Hot** State means virtual machine is **ON**
2.  **Cold** State means virtual machine is **OFF**
3.  **Suspended** State means virtual machine is **ON** _and_ **PAUSED**

## What is Cold Migration Technique?

In the cold migration technique we transfer a VM while it is Cold State to another host. If 2 data centers are in the same Vcenter server instance then only cold migration is possible.

## What is Suspended Migration Technique?

When you migrate your virtual machine (VM) in suspended state. Here power is on and running so it is a HOT migration category. Suspended state means your vm is in paused state and you resume from the same point at a later time. This migration is used to troubleshoot your virtual machine technical issues.

## What is vMotion?

vMotion is a live migration technique where you migrate your virtual machine at power on state or Hot State.

2 types of vMotion

1.  Host level: Where VM is migrated to another ESXi host
2.  Data Store: Where VM is migrated from one datastore to another datastore.

## What is Physical to Virtual P2V Migration?

P2V migration converts a physical computer to a virtual machine. You run vmware vcenter converter and copy the physical server to VM in ESXi host.

In Microsoft Azure you use Azure Migration Service and agents to migrate your physical machine to the Azure cloud.

In AWS you also use a migration service to migrate your physical machine to AWS cloud.

## What is Physical to Virtual V2V Migration?

V2V migration is like P2V except the source machine is already a virtual machine. Different company Virtual machine migrated to another new company. Like Hyper-V migrated to ESXi and Xenserver migrated to Hyper-V.

Microsoft Azure gives this facility to migrate Hyper-V or ESXi migration to the cloud. Most of the cloud service providers are giving this opportunity nowadays.

## What is Fault Tolerance (FT), How FT works, What are FT benefits?

Fault Tolerance is a Virtual Machine level concept where you protect your Virtual Machine from stop working. Suppose some operating system level corruption happened and your virtual machine is not working so you want to protect your VM from that and you create a redundant VM to make it more fault tolerant.

In VMWare you can enable/disable FT at VM level. FT makes system high availability give 0% downtime since VM will always be in running mode & no restart required in case of VM crash. Because you keep the VM in backup as a redundant VM. so billing will be for 2 VMs this is a costly solution.

FT must be used for Mission critical applications and servers like

1.  Auto Pilot system
2.  Spacecraft mission

The secondary VM is created by DRS ( Distributed Resource Scheduler ) in a different HOST than the primary VM host. VMware [lockstep technolog](<https://en.wikipedia.org/wiki/Lockstep_(computing)>)y is used in FT where current state & events on primary VM is replicated on secondary VM. When primary goes down the secondary VM takes over and continues operating.

![](https://i.imgur.com/6j97d3H.png)

![](https://i.imgur.com/xDIjbIO.png)

FT avoids [Split Brain](https://en.wikipedia.org/wiki/Split-brain) situation when primary fails then if 2 secondary VMs created and works is a problem called split brain. Primary and secondary continuously check each other's heart-beat.

In Azure cloud you get Fault Domain where if you have more than 1 Virtual Machine then Azure will put your VM in 2 different fault domains therefore, if one VM is out of order then another VM will automatically start responding. This gives you any kind of hardware protection such as network or power on rack etc.

In Microsoft Azure cloud you also have a virtual machine scale set that gives you managed service internal it composed of load balancer, and more than 1 virtual machine. You can put them in different fault domains and update domains.

In Amazon AWS you get an availability group that is this same as the Azure availability set.

## What is High Availability?

You want your Virtual Machine to keep running regardless of the situation occurring in your data center. If you bought a 3rd party service like fastcomet or any other provider then it's their responsibility to take care of High Availability (HA).

Therefore companies create Service Level Agreement (SLA) with customers to provide guaranteed service.

| Level of Agreement | Down Time Per Hours |
| ------------------ | ------------------- |
| 99%                | 87 hours            |
| 99.9%              | 8.76 hours          |
| 99.99%             | 52 mins             |
| 99.999%            | 5 mins              |

If SLA is not achieved then the company will give you compensation as per the level of agreement. Like Microsoft Azure will credit the money back to your monthly bill if they are not able to meet SLA.  Similarly Amazon AWS also will compensate if they could not meet committed SLA.

## How High Availability (HA) works in VMWare? 

If your hardware or ESXi host has any issues then all VMs will become down. It is just like your entire data center is down. HA works on HOST level and Fault Tolerance (FT) works on VM level.

If you create a backup virtual machine then it is a very costly solution. In the past VM backup  used to be the only solution therefore, companies used to avoid going on virtualization.

However, in VMWare High Availability meaning, if the host crashes or fails then all the VMs on that host get restarted from another new host and hence you get business continuity and high availability.

HA is an automated process that does not need any admin/human interference. In HA you do not need any standby ESXi hosts or extra VMs as redundant. It can restart VM on any runnin ghosts. HA doesn ot use VMotion and can be enabled on cluster settings.

![](https://i.imgur.com/HOFLW0n.png)

For HA you need below things in your VMWare

1.  Cluster
2.  Shared Storage
3.  VCenter Server configured for the environment.

### Prerequisites for VMWare Vsphere HA

All hosts must be licensed and the same version. You need a minimum of 2 hosts. All hosts must have a static IP address after restart of VM IP should persist. VM must be located in shared data storage and they should not have their own local data storage. All hosts in VMware HA Cluster must have DNS configured. HA works on [Master and Slave Architecture.](https://en.wikipedia.org/wiki/Primary/replica_architecture)

![](https://i.imgur.com/zKqBVY0.png)

### What is VMWare High Availability (HA) Cluster?

When HA is enabled on the cluster then the election process occurs among all hosts. One host that has a maximum number of data stores mounted becomes master  & rest become slaves.If Master host is down then again election will start.

![](https://i.imgur.com/luhBFUQ.png)

## What is a Resource check in VMware HA? 

Resource check is a feature of HA which ensures that capacity is available to restart VMs in a crash scenario. Also it reserves some capacity that you can not use when HA is enabled. Suppose you have 64 GB ram and you have 5 VMs each 4 GB ram then it may reserve extra 20 GB ram for crash scenarios.

## What is HA Failover Time?

```

HA Failover time = Vsphere web client started responding time - Vcenter server VM stopped responding time. 

```

`64` hosts and `6000` VMs will take approximately `7 minutes` to failover.

![](https://i.imgur.com/9HFdcT3.png)

## What is Virtual Machine Template in VMWare?

Convert fully configured custom personalized VM into VM Template. Use a VM template to deploy a large number of the same VMS.

Nowadays every cloud service provider including (Azure, AWS) supports VM templates in various forms.

## Summary

Make sure you learn more about all the points that I mentioned in this article. I may be incorrect so feel free to suggest your opinions. Share some of your experience if you have used VMware or Hypervisor-V etc in your day-to-day work.

## Reference

- [VMWare Virtualization Tutorial](https://www.youtube.com/watch?v=-VxzIIsFXFY&list=PLBGx66SQNZ8aiuWzEFavDMpQ1RRWsZLZV&ab_channel=TechnicalGuftgu)

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/5fBatz9.png){: .full}
