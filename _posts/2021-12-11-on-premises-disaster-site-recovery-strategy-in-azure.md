---
title: On-Premises Disaster Site Recovery Strategy with Azure VM
date: 2021-12-11 00:00 +0000
description: Learn the failover and failback stages in Site Recovery on Azure to on-premises machines.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/7I0NoBe.png
header:
  image: https://i.imgur.com/vce9zzl.png
  teaser: https://i.imgur.com/7I0NoBe.png
  og_image: https://i.imgur.com/7I0NoBe.png
tags:
  - azure
  - webdev
  - beginners
  - tutorial
---

> Site Recovery is very critical now a days. In your own Data-center or Server disasters can happen and you must secure your site to recover from them. Use Microsoft Azure to secure you on-premises machine today. Learn the failover and failback stages in Site Recovery on Azure. Learn **Business Continuity and Disaster Recovery** (BCDR) strategy in Azure.

## Setup On-Premises Replication to Azure VM

Before even failover to Azure VM from on-premises machine make sure you have setup your replication to Azure VM.

{% include video id="KQJCOCWLGeU" provider="youtube" %}

![](https://imgur.com/CEHLtIe.png){: .full}

## Workflow for Site Recovery

![](https://imgur.com/TO8eYHW.png){: .full}

After replication is setup to Azure VM follow this workflow to accomplish Site Recovery in 4 steps.

{% include video id="jDKthSwRqR4" provider="youtube" %}

## Failover and failback in Site Recovery has four stages

Let's learn all the 4 steps required for site recovery.

### Stage 1: Fail over from on-premises

![](https://imgur.com/AdzMjJk.png){: .full}

After setting up replication to Azure for on-premises machines, when your on-premises site goes down, you fail those machines over to Azure. After failover, Azure VMs are created from replicated data.

{% include video id="Mf9nCXxzfG8" provider="youtube" %}

{: .notice--danger}
🛎️ **Important** action checklist table below to be followed **before & after failover**. Read them carefully.

| Target Failover OS                                       | Stage               | Location to perform Actions      | Actions                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------- | ------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://imgur.com/Odr4cGss.png) **Windows** Azure VM | **Before Failover** | On the **On-Premise Machine**    | **For Internet Access**: make sure **RDP is allowed** for **All Profiles**, For **site-to-site VPN access**: make sure **RDP is allowed** for **Domain and Private** network. Make sure **SAN** [ ( Storage Area Network) ](https://docs.microsoft.com/en-US/azure/migrate/prepare-for-migration#configure-san-policy) policy is set to **Online** and There is no windows update pending on the VM. |
| ![](https://imgur.com/Odr4cGss.png) **Windows** Azure VM | **After Failover**  | On the **Azure Virtual Machine** | **Add a public IP** address, must allow incoming connections to the RDP port.                                                                                                                                                                                                                                                                                                                        |
| ![](https://imgur.com/XnSh8DPs.png) **Linux** Azure VM   | **Before Failover** | On the **On-Premise Machine**    | Ensure that the Secure Shell Service on the VM is set to start automatically on system boot. Check that firewall rules allow an SSH connection to it.                                                                                                                                                                                                                                                |
| ![](https://imgur.com/XnSh8DPs.png) **Linux** Azure VM   | **After Failover**  | On the **Azure Virtual Machine** | **Add a public IP** address, Need to allow incoming connections to the SSH port.                                                                                                                                                                                                                                                                                                                     |

### Stage 2: Reprotect Azure VMs

![](https://imgur.com/gvHDxgL.png){: .full}

In Azure, you reprotect the Azure VMs so that they start replicating back to the on-premises site. The on-premises VM (if available) is turned off during reprotection, to help ensure data consistency.

{% include video id="vDxt3ojD2Wo" provider="youtube" %}

### Stage 3: Fail over from Azure

![](https://imgur.com/3jBsHvL.png){: .full}

When your on-premises site is running as normal again, you run another failover, this time to fail back Azure VMs to your on-premises site. You can fail back to the original location from which you failed over, or to an alternate location.

{% include video id="uw3T0oUIlr4" provider="youtube" %}

### Stage 4: Reprotect on-premises machines

After failing back, again enable replication of the on-premises machines to Azure.

{% include video id="LBZvxJ_39_Y" provider="youtube" %}

![](https://imgur.com/XXAYraF.png)

### Overall Replication Steps Model Diagram

![](https://imgur.com/Zuy3Ijz.png)

{: .notice--success}
Learn more about [BCDR strategy in Azure here](https://docs.microsoft.com/en-us/azure/site-recovery/failover-failback-overview#recovery-stages).

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
