---
title: Cloud Security Defense In-Depth Azure Approach
date: 2023-03-04 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/WQWdzrb.png
header:
  image: https://i.imgur.com/WQWdzrb.png
  teaser: https://i.imgur.com/WQWdzrb.png
  og_image: https://i.imgur.com/WQWdzrb.png
tags:
  - azure
  - tutorial
  - beginners
  - cloud
---

> In a traditional data center you create one perimeter, secure them by installing firewall, WAF, SIEMS etc. and have 100% confidence that the data center is secure. However, when you migrate to cloud then your VPC or Virtual Network is not 100% secure you have to not only secure your perimeter however, inside of perimeter you have to take care of security. Since it's a public cloud you have to be more cautious and make sure whatever workload or source code you are moving to is cloud aware. There are various best practices at each level you have to take care of in order to secure your cloud.

## What is Defense in-depth? 

There is a concept of Defense in-depth which makes sure that at each level there is security in-place which makes your cloud data center almost 100% secure. However, it needs continuous awareness, assessments and audits. In this article let’s explore how Azure helps us to secure data centers in the cloud.

Defense in-depth design of azure services and capabilities to help you secure, manage and monitor your cloud data, infrastructure, compute Azure offers unified security management and advanced threat protection for your cloud, on-premise data centers or both.

![](https://lh5.googleusercontent.com/vnX_FyeIYoghC9nnzuhYRmZlfep0AaHXTY0VfyH8mr2zy-JD4PSrFGyqqOSfRUGBn7WciGid8T3nGQm4ZPMdM8Qv5XYkviRwTUJ1vKUIL971w5AyxavBM14DoCiWYTBLrIhG54C1)

When you want to secure your cloud you should think of securing from the physical layer till your data layer.

Defense In-depth security layers are as follows:

- Physical Security ( within your data-center )
- Policies and Access / Identity and Access Management
- Perimeter
- Networking
- Virtual Machines/Compute
- Applications
- Data

## Microsoft Azure Security Center

In Microsoft Azure all resources and services are designed to keep Defense in-depth in mind.

Azure Advisor in Azure helps us to maintain our workload to follow well-architected-framework guidelines by showing overall score. Similarly [Azure Security Center](https://docs.microsoft.com/en-us/azure/security-center/defender-for-cloud-introduction) helps us to do defense-in-depth and it shows the all score of your cloud security health.

![](https://lh5.googleusercontent.com/ruC9kWhf2WcpDIFBNy6ZpQ5KSDtnxxQbb7y4J0TYTo96YnACCHif8JFRdTReNj9ecwd-JNSmsYCKOZoBtaOa3KObRKrG6ADUVcZMEPYIWXuDXc3DgBywQtTnlSCwCEWL-plV2aNj)

Security center has a lot of practical recommendations and quick fixes to keep our workload protected.

Azure Security center provides unified visibility, control and adaptive threat protection to the resources. So if you add any new resource they will be automatically under threat protection and detection policies. So they are secured from all network attacks.

![](https://lh6.googleusercontent.com/eBAkNh4BM0mJ1f9vV2xSVDYjGY-vbxlEu3XOfTcSS6uijG4hpiTc4dwQ6UVndv6G_Tp_SmhwtzVg70LcsM-5JHki3kQGlgRUYLNrIuLjZ1C_OyswNjzrOOxtxFRA5Jhwx85pk7zR)

Additionally Azure Security Center has [Intelligent Threat Detection response](https://docs.microsoft.com/en-us/azure/security/fundamentals/threat-detection).

![](https://lh5.googleusercontent.com/RwFiOhDn3NJnVHZ1HKqeMX_k14lo5wfBzT0zqwx7vhDFGB0b3XkIrVbniuGC3K2qN0qJ6nLLz_m_gH5rdu7mKTiGqeJhOAvcmD_ze4CGShDp1uU4u8u4NAXWQqCEJB-VziQ_Dusg)

Let’s understand how we would set up defense in-depth in the cloud starting from physical layer security up to data layer security.

## Physical Security 

For physical security of cloud Infrastructure cloud providers are responsible. Therefore as a customer we should not be worried about securing physical data centers, racks, wire etc. Azure data center security is at high top priority. Cloud providers like Azure or AWS or Google Cloud are responsible for “Security of the Cloud” - Azure is responsible for protecting the infrastructure that runs all of the services offered in the Azure Cloud. This infrastructure is composed of the hardware, software, networking, and facilities that run Azure Cloud services.

![](https://lh3.googleusercontent.com/6x-PZcvjmkvzOCCDTOBMHaY1Hm5vvp0wO-qpFIObr-8gb6RWNZoAb8UaZgif-oP2SRjedOXH7O9o7awgq33aaQCsbbKIZUX080XkBvv1j_0n6VyBSkNwUtVV15jzu6BPlPuVDMvJ)

## Policies and Access

![](https://lh5.googleusercontent.com/W0s8GBrFCn3oGBplWL-3CkVdELjemy_kp65eoEk8whNqvQ6wmgll3IoKc4DyPrlt9t5AeKMER9Apn-nXYvwN9kFS6EPqLsPIkU5ZPkiW-YgLQP7oLseB-1TH61ZEY0lYg3_OPUuv)

In Azure everything starts with  Identity and Access. All Azure resources ( Network, Compute, Apps, Data etc.)  are governed by Azure Active Directory. You can also add policies and Role based access control for each individual resource in your cloud.

![](https://lh6.googleusercontent.com/zFLkL5WpWCEkrfmcCLg8mOsz2oQO4XZC8MbnpFEy_CxUE4Vg4zZqFpZDnMrShnkDws_ZtafiJIpS6eP6WjZIDjudAaPWbuyDNyEF2Ab3MIsiBjLaq4yxLECQR3fjctDn7Y_7aMVF)

Azure has a separate service to manage security policies and access to resources. Weather accessed by people or programs by REST API calls to your resources. This can control which processes can access your application files or data and granular access is delegated.

![](https://lh6.googleusercontent.com/xyukF8A8HBqNsFmjmu6ROYDSy_SJ_2qiJWTWXFmYl9PVo2yxBs8C1HR3pd1Nm1sn5L4Nf30AL8Ul48c-rbR4J-gkXBNJgExzROrnqTIyBf3ncykLwOIJp9BcvEB09993lVa5_KEi)

These controls are the front door of your environment. Your IT can make developers as contributors, marketing users as readers and so on by applying role based access control (RBAC). Role could be owner, contributor or reader and many other in-built roles are available.

![](https://lh5.googleusercontent.com/zwLWOxEd1TKSFbsPziMIAJdbmc3A-I-URI21AjebsNPezKWoCRrWB79ujtZD7UkD4pXFi_S7pIpnF_v6C1Bx5u0l1o5Cg7YiKv0z_L73DWbbTWcYDUydyKuxeFFVvL3wKKzAMyqI)

## Perimeter Security

![](https://lh6.googleusercontent.com/srZpu7GCTkioKhComoj0lB1qJ2kp8rqytWL614pZplxDGpCBhHZlfbJzcL1ya5t5JQtGHvapSG8vC4bGK44fpJfwKIierON8ZIMZNh8xmQbWg4-PYi9LQTqU46R_9yGHRjRSSQwl)

Perimeter networks in the cloud enable secure connectivity between your cloud networks and your on-premise or physical datacenter network. Perimeter network is also called a demilitarized zone or DMZ. The number of DDoS (Distributed Denial of Service Attacks) over 100 GB/s in [volume increased 776 percent in Q1 2020.](https://www.comparitech.com/blog/information-security/ddos-statistics-facts/) In a DDoS attack, a perpetrator intentionally floods the system, like a server, website, or other network resource, with fake traffic.

In order to secure your perimeter in the cloud you must set up a Firewall. You may want to also install IPS (Intrusion Prevention Systems) & IDS (Intrusion Detection Systems ) to detect and prevent unwanted traffic and block not requiring ports and IPs.

Also you must protect your perimeter from Distributed denial of service (DDoS) attacks. Every property in Azure is protected by Azure's infrastructure DDoS (Basic) Protection at no additional cost.

![](https://lh6.googleusercontent.com/HWtudjFgAQZSNr0Y2MhD_vqN5VyqBWJW-gXEeDzHCSW6qop7yKcIyRIxEtQFNMJ7j4_56fOOfUpMKPcUH9BcG9Glq5O00B8LJadQQTySCywK5gZEmae1xl_wtbMTRjiX1AIiPgoc)

![](https://lh6.googleusercontent.com/2jPvLCp15Ld7pEJXg-unikeb6NU1I7jfh6dTUGuM3ouohJZIfVDljvrbuhoLSAkHsPt7D7CL4p3zHA6UNtLBt-iXKRV_XBcc-lAgv08Bpx2C6-XrJWm8Vl9WeeX3MlcV-1cdRyq4)

Layer-7 DDoS protection can be achieved by using [Azure’s DDoS Protection](https://azure.microsoft.com/en-us/services/ddos-protection/#documentation) for protection against DDoS attacks.

Azure DDoS protection will save from protocol attack where the attackers tries to find and exploit weaknesses in layer 3 (Network) and 4(Transport) stacks.

![](https://lh4.googleusercontent.com/SgItOoTz0lqyUTFmYMGtBPiTPpzvpEggFDTAgEfS0M8rCVARiclWRimVrtCg5uqw7xYtEJDVBvZCO6fhyH7Lb92aYF5Lw2j4EmS9lFAKGI5TuWsAsgrbs5_3J0C_CMAns-NuC2kh)

Application attack where the application packets are used to disrupt transmission of data between hosts like cross-site scripting or HTTP protocol violation attacks.

![](https://lh5.googleusercontent.com/-TRCxfIU2zD1YXEYJ7FCUAjnPI2e1Z724VFNLNErsLzGBvE2FRtjShc8WKNUOY2k9tkbRP4m9T3OSM6KhcUI5vMt3pZalD7IemoPmdGIpbepYW-XoSAQFEwnvqQhTCTi5dUW8h4E)

## Network Protection

![](https://lh3.googleusercontent.com/oEyHwqk9JSt51qOeh47jEccKkAzOUgQ__XcK75rH-5qcAjvSUBUWZq2iZYgETe5oAmPH4WfaRJUwQJRu8ocIvsFmvQ1BqrB0sEHuaAjRCQp0a26zBICgb1e9MyDu5c7j_NwTfML6)

Azure Security center will report on potential network and security issues related to open ports and firewall settings and Network Security Groups (NSG). You can enforce logical network boundaries and limit permissions to NSG.

With enabled network watchers you can quickly go to the my network diagram page and check the diagram for the selected virtual network, select the desired subnet and open/close port or block IP addresses.

![](https://lh3.googleusercontent.com/b4ZBLVK9nJ5LQRfRKU8N7T9Jhu2dg_X-HDT4Hx8Q71JhVEqw8zM1pfZ0F-6vLeazZ4-M2PtSahZaezAqjm112TC2dBTtbiHEAUhyrdGO7N5ftgWrV8oeiWtbPOEamkD00v7CvoGK)

If I select the backend subnet and then I can see all of the network security group (NSG) and identify the desired NSG to analyze.

![](https://lh3.googleusercontent.com/QPZULg1mwiklJNjBrfkIaGKgl2m8rxJ2z4yOi9mBOa_jAuUGrmBjWLsTriGkWK0dPRTV-LZfRBhCuNR2m58bNXvny4rAxHJmx_i5Ro48g6G466De9QiYkPLcLEwBkxIhtO3xbB20)

Once I get into the NSG page for a desired subnet then I can manually enable/disable ports or range of IP addresses. You can also enable just in time port access for your virtual machine and manage open ports.

![](https://lh4.googleusercontent.com/ICawWtuXweQcUm3_8xxqRJ-I-Yb412SFbHSXsAQJaAMSHWI_mJwnaYAT3mnk2e_q13Ts0snemP7lgR8yyerxeUcpya-2NSgmRy4Tg8k6x54AwfbPVVYVXFS9grcA8mPYYPAXsKye)

With intelligent recommendations to reduce exposure to [brute force attacks](https://en.wikipedia.org/wiki/Brute-force_attack).

Additionally, your network in the cloud can be protected by enabling monitoring, encryption and network segmentations.

## Compute Protection

Compute means your Virtual Machines and such (IaaS) things in the cloud. Azure Security Center will also provide an actionable item list for your virtual machines. Tell you what the patches are pending with their severity using machine learning.

![](https://lh6.googleusercontent.com/7-QWjkor6rRvSqmvztq3MC8gQv5zRL1jOBCVL6a2qQVLupdkkorETOSYM9FAnKa0nsDDlVZK2gx2mu6AhZHsaJVfUyjVxw0JzHWyW3xEayD-2V0MagNj8ws_BPj576AZxAV1ydkV)

You should set up NSG on the Virtual machine NIC (Network Interface Card ) and secure it by disabling port or IP addresses if required. So that it will keep unwanted traffic out of the host.

Make sure you have installed proper antivirus in the Virtual Machines. [Microsoft Antimalware for Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/iaas-antimalware-windows) is free real-time protection capability that helps identify and remove viruses, spyware, and other malicious software, with configurable alerts when known malicious or unwanted software attempts to install itself or run on your Azure systems.

Single SignOn is another feature that prevents users from entering passwords and protects us from various security attacks. Use Azure Active Directory authentication and Managed identity that includes System or User Defined Identities to auto authenticate other processes trying to access your virtual machines.

Virtual Patching is another workaround that we should use to protect existing legacy applications installed on cloud virtual machines. Legacy applications are not cloud ready and they have various vulnerabilities. Most of the time we do not have permission/bandwidth/budget to modify them. At that time to protect them in the cloud we can use virtual patching. Many 3 party extensions are available from azure marketplace for that. Virtual patching works with WAS and WAF together. It uses WAS( Web Application Scanning) to scan installed applications in the virtual machine and whenever it finds a threat it creates an automatic rule in the Web Application Firewall (WAF). This security option is best for many lifts and shifts of legacy virtual machines or physical machines.

The Azure Security center uses machine learning to continuously assess security and vulnerability levels of your Virtual Machines, Networks and service configurations. It also gives you actionable recommendations to prevent exploits before they occur.

Example of Virtual Machine recommendations by Azure Security Center are as below:

- Apply a Just-In-Time network access control
- Enable NSG
- Apply Disk encryption
- Apply System updates
- Restrict access through internet facing endpoint

![](https://lh6.googleusercontent.com/LZyrRC0vuRzAIk-eGRYkB04C4kAbHctU3BqFOHR3E43GMxVuDJosv5I2yH7r9qhkSwNWWChrAgW30bG9-jjRxsdXHtmoQc-GkBx88Fg4UJUs0aqe8JWKCyobSA2zrBXElj65-7sC)

Azure  Security Center has Adaptive Application Control that dynamically applies both allow and block lists to keep unwanted traffic out of your virtual machines.

![](https://lh6.googleusercontent.com/jSIG8VJfAlHW8XMihUC2_-dDZJd6-yf0_YKqOS2gGFwhMViU6KskOMn16w0eaNWy1sV4TJkYZeM6T-YuPmG5TCfquu1NkrWNDCoc8O8s9k5rXzWFDhxOnMPXmSwH6HLmRhAvB9lp)

If you are using Hybrid Cloud still you can leverage the Azure Security Center features for your on-premise or  3rd party cloud resources. Because Azure Security Center gives many features for your VMs in other clouds and in your data center.

![](https://lh4.googleusercontent.com/w3nVZsAZMdIrNweOVxGjTDchCACkOZirqoOOo435qJZsHsChKypEJ_r0n-qSgVyweOjKCPxmQH5LGhFM1bOKyX0lWexWg8hh1nLWcAxlAxopAfvj9CM15_zg1iArsh58J6_PABVK)

You can implement Intelligent Threat Detection and Response.

![](https://lh4.googleusercontent.com/8ZQdTANFJN_8jsAy_u9uKs-yLy2YvfUb2UU48pUsfye2fCb3rsHU8gqJpglU7WGlFKoDt3ikdRaHar61BE3tvTJJekNxJuOvYS3bm6A-cdZFZ4A2TTXD_LPVcWjVVnia1hipbYQX)

The security center leverages the Microsoft Intelligent Security Graph to discover and take action against attacks. It combines cyberintelligence that Microsoft collects across all of its services and industry data to block known attack patterns. You can also prioritize alerts and incidents that are important to you.

![](https://lh4.googleusercontent.com/jvh9AeHoqP4CrjHG5yzc7rp9LoL7tQA0y5kZpEEPvNxjFsbhQX5KQ_rXOr83VNPKkrIl2GxZOC3-AFEIztNjb7boSz1J77wDUfQlzJ03lc82xot6aDUL3C1DJM3CKlBtlZRnJpws)

You also get a unified view for forensics analysis and the ability to search across all of your compute resources.

![](https://lh5.googleusercontent.com/8Cj9H6tZTO9V6tDB-K6kwlBLNYbyPZ3kJlHBB1tJJkzljzt1ynlasBJGPm6jciWNueT8lHRVadJ61hASdBnAfdg799S45NFFxcVOdVfIRlZTom_BXddFC_TnvryI-GAxjFZcv0Pm)

You can also configure the sys log, setting the advanced threat analytics.

![](https://lh6.googleusercontent.com/7z8yvlksVrU4vwYIUm_w9wSHrUOfrggbK2RXbBQJUWkXoxXc8GMTnLHBfIynzmZq2T7B_mGhZCiTgA-0IuJNx6z1g1xRL3dLEuPvhKboa-r2I36utECJFX6vjZ473O1EcaIFv_Ue)

You can even visualize threat intelligence

![](https://lh4.googleusercontent.com/7GV-Bl0qbpKnzUb0ncAW2wwHYUkMpYlxzNJCyHzPmyrN28xEDXZI_gWiTDeyGXP9VC7RUPVu21hiaHwo_oI73q3VaZqoMbRIcjFkZT_5DswNglQC4YLajfuP2303Pn-rND3qHYff)

Threat Intelligence Log Search will show you the tracing for even most trending attack techniques and the geographic regions affected.

![](https://lh4.googleusercontent.com/FsnxlZWavD8rtxz2JDVJx0Uh42Ye9YBmnpqqgopqgoa4uYc-DRqJAyp-P3E0hQWn-_kovdDPvi3Fg3Bw154cykOhtPmBsv2abPh9xNRKuoEbekSpFeuvzRFLb2bNfyTJUgpVYQrD)

## Application Protection

![](https://lh6.googleusercontent.com/WkCU8ENZvUKyrIsgeitfdkSoLKZ5sIIeXx-l-wG7GqdGNxfljmodVVC9tZe8nmf9TqFg-xD0_cMHwcnP-4-Xcxhk7c6WFpgRJuF1RvN6DPQ-ceesbLPA89UcYzdnuZyOVw3r0E-L)

Applications are right on top of the data. Therefore, securing applications is a high priority. Maximum attackers are looking to attack applications only.  We can do below things to protect our applications

1.  SSL/TLS, HTTPS
2.  Single Sign On
3.  Application integrity ( adhering to the policies like following NIST guidelines )
4.  Vulnerability Scans

Applications installed or used in Azure cloud for accessing and presenting data. Application securities are governed through data, Virtual Machines or compute (IaaS) and platform (PaaS) services in Azure. Web applications can use azure Managed Service Identities to streamline secure communications with other services in Azure connected to Azure Active Directory.

![](https://lh6.googleusercontent.com/B38z9MJiPn4TGje_O2Dw1ncenCsp80skbgp9w2x9Xh_LSHFNoBAo-MUeOA5oSruenzZeS5-Mal9vCxriDJZGIlauSmh6-4dxgdZ1XY36nP6K9XR2zC6Z9EP78r4kSZ9EehsMWusm)

For your applications to make your data-in-transit encrypted you must enable SSL/TLS. From Azure Web apps you can manage SSL certificates and your app can request a valid certificate for all incoming requests.

![](https://lh3.googleusercontent.com/aS6swqis8f0x9QVa1p45ptE-QoOkhyB2gAdPVZJAxRjsOH4tyKRDGQEqURxloaBZfDUcBY5HOyUNyfLsKHa4cmYzH-fMZphi2gAwQWCjJp8AdoRVJEmLvbCCvBiMWCfsB_7ZbK8x)

## Data Protection

Data protection is the most critical thing. Because it is at the core of your applications and services layer. You must secure your data at rest and in-transit. You can use encrypted volumes to get protected by underline infrastructure.

![](https://lh4.googleusercontent.com/KlnifAjbBE8FlnuLghwEA6Eg8s_bE5W5azVTnF3dNbXJWO5syNrAWy_HnCu6do7O6Z_QYD3-PHqC0gs-9XMP-8FGhxkD9BlktLOPbqZjrZsx7EXfWT0qo0WHGCj19Iw09nDVg1ZP)

Regardless of structured or unstructured data their protection is built-in out of the box over Azure cloud.

![](https://lh5.googleusercontent.com/x1sYgv-KmQFZPKEZUzbMz74paeiGL4RRjHO2aKCTqFoeSth8x6XrirHDyq4ZiFggV8W2-E7obGfuS1WXX_L90w2zhYmyCH1k3to8WYXg5e5i9r7UId0BgaHtRgsrIbdbJwphXIe2)

### Structured Data Protection

For structured data, all data is encrypted at rest.  And you can use machine learning already built-in Azure security center to proactively look for and alert you on potential security vulnerabilities.

- Enable Auditing & Threat detection on SQL databases
- Enable Transparent Data encryption

![](https://lh5.googleusercontent.com/lX7hSL70qigudG3PuWcttAMffG82QDrIMo1gUyAtqDCltHBe_Uxkugyz-ozw8uTewz2NBljLhdCcojqbt4uihJTAdpUt8JsS_LzH6CukkoSrN39Q9E7W1inIeZPt6QxoKamqFoYv)

In SQL server which stores structured relational data. You can enable threat detection on database level or entire server level. Threat detection can be related to data encryption,  enabling in-security telemetry.

![](https://lh3.googleusercontent.com/n4IyubCpQ_YTzCkULc5ZQ--Ca1hT6CQ5YGQUC3Zp7QtxwrbetwICZ5MQ2WJwsYiUIvY6f-8zAwVvi9Jn4cvJVJkC_PYAQ7ll6KBd1YPIFXi4zRy-WVnmo_6syD9lqT46cXjpuiUl)

In the SQL Database service itself there is vulnerability assessment where you can get extensive capabilities to recommend and enable sensitive information discovery and classification.

![](https://lh6.googleusercontent.com/n3OSbj9ATSvd62_1AjApmu08aAigVAwc0EzI4IvlT5_DJRP5B-5Kk1Yr3_7TEfdhuFRs7uQub-0-rhtuXwSA78QwImUBhMO0LP-X6_4Vb3KdvbYHaSQ72Tm1kEgg1s7DAAvfsmR8)

Azure SQL database service does dynamic data masks to obscure data fields and more.

![](https://lh6.googleusercontent.com/o6KpDoQ2H7o-ICfwTxu4gYAw9arevhDievkajDKCs58VCLRFzMONUQoAr05WiS2GBiLAEcufFmtL3BLB-5iKJ1tvwmJnolPZgXMb2XMIVaBGEFRux4THygOGA-pyATxp7xDDShLd)

Database service just needs to enable these threat protection then Azure security Center will alert you for any vulnerabilities found.

![](https://lh4.googleusercontent.com/YwiFtzKgXgP04_k09mqovNccFzWdC42wT-xNfMzweS5sb5AQ3WQhy7FTEOqhJtECvpzM4fO-HXyUUGdrqC7zTJgFa4V7gEMFwrE-nzb1rhsUgwEUrOZd1uuTAgV819eiYhw3aBN_)

### Non Structured Data Protection

Non structured data like blobs, files, tables and queues are also encrypted at rest in azure cloud and each account is geo-redundant.

![](https://lh4.googleusercontent.com/QuAOQ4RtCAIH3eZ5-WivrHKulS2iAe20rsKlwa5_5WtoXClu2B8LQ4nk3jtLaCQJIXVjOUIJdreH8lcEHbyeiAPqVr8EcPYD6hbRte4gColF7rIDbIVgQsBX2vJWa0jZbqzIQCTE)

You can use access keys to control authentication, Shared access signature for secure delegate access and granular firewall controls to restrict public network access.

![](https://lh6.googleusercontent.com/_K2uqutTalHQG0iCyLRzNkXZCUF9MtBpexeYRLw8TBX2i64QaYiTrYqstm_M9tg6soeZDeKsczQyZVWoSunhUAOaGb3QHa3prbwiW4-vZISyuIupnsjnw6wjKxRkdIOSvUUnjVIq)

Azure Security Center will report its findings whenever security at risk or protections are disabled by your admin.

![](https://lh5.googleusercontent.com/vDS4A324c7pmIBqMj5KofsEpSeyb9RtnsRk7XXcOjIv-fK_NUhkV2zVFUQ4wjYytTqRHEEw8zWqcsasTvl-ETP1IrJ64msos0R3f_3HK3udHeHu3WMl1fnLwRsXBWjrPHw8DT89J)

## Summary

The idea behind the defense in depth approach is to defend a system against any particular attack using several independent methods. Defense in depth is in-built in Azure cloud and it facilitates keeping the security in multiple layers of your architecture. I am also sure the same kind of facilities are available in other cloud environments like in Amazon AWS & Google Cloud. So it's a matter of awareness and making your cloud secure by properly utilizing the services given by you cloud provider.

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
