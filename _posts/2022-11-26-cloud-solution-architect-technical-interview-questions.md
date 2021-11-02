---
title: Cloud Solution Architect Technical Interview Questions
date: 2022-11-26 00:00 +0000
description: Cloud solution architect technical interview questions. 
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
image: https://i.imgur.com/4EIcRWN.png
header:
  image: https://i.imgur.com/4EIcRWN.png
  teaser: https://i.imgur.com/4EIcRWN.png
  og_image: https://i.imgur.com/4EIcRWN.png
tags:
  - webdev
  - tutorial
  - beginners
  - cloud
---

> Are you willing to become cloud solution architect? I am going to add a few important technical questions that you must know for your next cloud solution architect interview. My answers would not be perfect so feel free to search for better answers. Important part from this article is what kind of technical questions you should know to become a good cloud solution architect. So focus on the questions that I am asking here and learn from anywhere about their answers.

Most of the time you will be asked various open-ended technical questions. The best strategy to answer them is think of below 4 things:

- What is technology?
- How does it work?
- Why would you use it?
- How do you architect them?

You must know what a software Architect does?

1.  Business strategist
2.  Advisor
3.  designer

They have to speak the languages of CEO, CIO, CFO and Engineers.

## What is Amazon EC2 (Elastic Compute Cloud) in AWS or Virtual Machine in Azure cloud?

It is virtualization of computers on cloud. Amazon EC2 is a virtualized machine where we can install applications and OS. It is an Infrastructure as a Service offering. We virtualize storage, network, CPU etc. using hypervisors.

## What is caching and how does it work?

Caching is to offload servers by storing high frequently added information in the cache. If the user tries to take information from DB. It goes to cache and it will return. If the cache has no data it will go to the server return and cache it. Next person asks if it will return from the cache. It can improve performance, it can reduce latency. If you set up time to live of data in cache to timeout to keep it refreshing.

## What is DNS? And what are the key record types?

Domain name System used to map IP addresses to a user friendly name. Phonebook of the internet. You can route traffic Based on geography, latency , weight etc. Key Record Types are as following:

1.  A Record that match name to IPV4 address
2.  AAAA Record that match name to IPV6 address
3.  CNAME record where u map one domain to another domain
4.  MX Record required for email.

##  What is the MiTM (Man in The Middle) attack?

“A Man-In-The-Middle attack is the type of attack where attackers intrude into an existing connection to intercept the exchanged data and inject false information. It involves eavesdropping on a connection and intercepting messages.” -Toolbox for IT.

![](https://i.imgur.com/k2ofMxA.png){: .full}

Hackers can use Packet sniffing software (WIRESHARK) to intrude the connection. Get the sender and receiver server information. He can get access to the website as Alice or Bob.

## Data encryption at rest and transit?

At rest encrypt the disk and hence you get data encryption at rest out of the box. At transit use VPN or SSL/TLS (HTTPS = 443) to secure your data by hashing it during transit.

## What is Symmetric and Asymmetric?

Asymmetric: Sender data is encrypted with key1 and the receiver side uses key2 to decrypt the data.

Symmetric: both sender and receiver use the same key to encrypt and decrypt data.

## What is NMap?

Used to scan a network, segment or host to find out the open ports. So that you can attack on those ports. Interviewer may ask if there is a linux machine and it has an application that is not working. What will you do. I will answer by saying I will first scan the network by using Nmap or wireshark to find out which ports are closed or opened etc.

## What is IAM?

Users are defined in IAM and they get assigned with roles and they have access based on the role to the protected resources. Also it does logging of each activity done by the user.  Authentication & Authorization also done by IAM. Who is the user and what he is allowed to do.

## What is Social Engineering?

Social Engineer is someone who is a master of asking seemingly non-invasive

or unimportant questions to gather information over time

- Gain trust
- Reduce defenses

Social Engineer use deception to get sensitive info from someone also s/he can combine number of techniques to gather sensitive information.

## How would you secure enterprise?

Follow Multi layer approach:

- Policy
- Look from User , Encryption, IAM and Tech perspective
- Create Firewall protect your network perimeter
- IDS and IPS system behind the firewall
- DDoS ( Aws shield, cloud flare )
- ACLS on the router and subnet
- On the VM you install WAF to protect (XSS, XSRF)
- Physical system secure ( like MAC address stop unused ports )
- Phishing attack secure

## How would you secure the cloud?

Follow Defence in Depth and secure physical to data layer.

Steps are as below:

- Physical security
- IAM (Identity and Access Management)
- DDos, Firewall (Perimeter), IDS/IPS or intelligent thread detection
- NSG (Network Security Group): Network protection
- WAF (Web Application Firewall): Compute, Patches, Malware protection etc.
- Application: design/code review of applications installed
- Data: User azure PaaS services which is by default data at rest.

![](https://i.imgur.com/HlQDoeU.png){: .full}

## What is DDoS ?

Distributed denial of service (DDOS) is when a server is exhausted by serving large numbers malicious requests and could not serve genuine requests is called DDoS. It loses CIA principle ( Confidentiality , Integrity and Availability ). Now it is not available for genuine users.  Azure DDoS protection , cloud flare , AWS shield can save you.

## What is IDS or IPS?

IDS (IIntrusion Detection System)

- Been around for quite awhile, fairly common and easier to set up. Logs alerts and events for later analysis
- Allows for reactive response / research

IPS ( Intrusion Prevention System)

- Newer platform over the last few years
- Enables prevention (such as blocking IP addresses, etc.)
- False positives could block legitimate traffic

## What is DHCP?

Dynamic host configuration protocol (DHCP) This is a server that assigns automatically/dynamically IP to connected hosts or servers. Suppose you have 300K systems then you use DHCP. How does it work? Whenever a new system comes up. It sends a broadcast ("Hey I am new in the network I need an address" ) called DHCP discover. All the DHCP servers will respond ( called as DHCP offer ). If there are 10 DHCP servers the client will receive 10 IPs then the client has to send a DHCP request to his favorite or desired DHCP server.  Then the server sends back a DHCP acknowledgement to the client.

## What is a VLAN? 

VLAN (virtual local area network) You have 100 computers in one switch and within one subnet. Limit the finance to access the things only they need. Finance, HR, Sales, ITOps team might need access to everything. You can virtualize your switch to chop into multiple virtual logical switches. This way you can enhance security for those logical groups of computers. [Cloud Architect Technical Interview (Master The Cloud Architect Interview Questions!)](https://www.youtube.com/watch?v=R-4K5aHg-iw&list=PL0azhNeBK66KfW04TZBQWkX62hhnFcb9E&index=3&ab_channel=GoCloudArchitects)

## What is VLAN Trunking?

4 VLAN in single switch and another 4 in other switch u run a single cable between them to establish connection. That is called VLAN Trunking? How do you do it in a private and secure manner? The trunk has a tag for a VLAN. Each VLAN will get its own IEEE 802.1Q tag.

![](https://i.imgur.com/qbywToj.png){: .full}

In a cloud computing environment. On-premise to Azure cloud when you do direct connection or express route. You send data over VLAN over a Trunk. Azure takes your information and your VLAN Tag and keeps it separate from other customers' traffic.

## What's the difference between a hybrid cloud and a full cloud environment ? And what are the advantages of each?

Hybrid Cloud architecturally speaking you have your datacenter that has servers, compute, storage, networking and security and you also have the cloud. And you have both connected to get the benefits  of your current infrastructure and connect the cloud to get the agility, scaling, and resilience.

Performance: You get lower latency from your datacenter compared to the cloud. Also you get control in case the cloud is down and you have your datacenter still running.

![](https://i.imgur.com/OY5bEW8.png){: .full}

Native Cloud has No maintenance switch, routing, cooling, heating, physical security etc. If you are a new company and you don’t have money for capex then you should use cloud. So you save money and only spend on OPEX. You get more speed and scaling, reliance.

## How can autoscaling help with DDoS protection?

Hackers control multiple computers and they send requests to your network and overwhelm your systems. If your system can handle 10K web requests and DDoS is giving 30K requests per system. Each of the systems had autoscaling enabled. Then automatically when the system will be over utilized (75% or more) cloud will add a new system and load balance them. So now you spawn up 10 diff systems and now you can handle 50K requests. So the DDoS attack was controlled by auto scaling.

## What is Classful IP Addressing and problems?

Classful IP addressing host counts:

- Class A - 16 million host identifiers
- Class B - 65535 host identifiers
- Class C - 254   host identifiers

Classful IP addressing IP ranges:

- Class A 1.0.0.0-127.255.255.255 with mask 255.0.0.0 or (/8 in CIDR), 16 millions (2^24-2) IPs and 2^7 Networks.
- Class B 128.0.0.0-191.255.255.255 with default subnet mask of 255.255.0.0 (/16 in CIDR) 65K (2^16-2) IPs and 2^14 Networks.
- Class C 192.0.0.0-223.255.255.255 with default subnet mask of 255.255.255.0 (/24in CIDR) 254 (2^8-2) IPS and 2^21 Networks.
- Class D and E are reserved for multicasts. 224.0.0.0 - 239.255.255.255

The problem would commonly occur when an organization required more than 254 host machines and therefore would no longer fall into class C but rather class B. This means that the organization would use a class B license even though they had far less than 65,535 hosts. Therefore if an organization only required 2,500 hosts, they would be wasting about 63,000 hosts by holding a class B license which would greatly decrease the availability of IPv4 addresses unnecessarily

From <[https://www.keycdn.com/support/what-is-cidr](https://www.keycdn.com/support/what-is-cidr)>

![](https://i.imgur.com/YxC6p45.png){: .full}

## What is CIDR?

Classless Inter-Domain Routing (CIDR) divides the IP address in network ID and host Id. CIDR is also known as supernetting. It is a method of allocating IP address and IP routing. It replaces the old school of classful IP addressing. CIDR is based on [variable-length subnet masking](http://searchnetworking.techtarget.com/definition/variable-length-subnet-mask) (VLSM). This allows it to define prefixes of arbitrary lengths making it much more efficient than the old system. CIDR IP addresses are composed of two sets of numbers. The network address is written as a prefix, like you would see a normal IP address (e.g. 192.255.255.255). The second part is the suffix which indicates how many bits are in the entire address (e.g. /12). Putting it together, a CIDR IP address would look like the following: 192.255.255.255/12. The network prefix is also specified as part of the IP address. This varies depending upon the number of bits required. Therefore, taking the example above, we can say that the first 12 bits are the network part of the address while the last 20 bits are for host addresses.

## What is SQS?

Simple Queueing System. Decouple A and B so you can scale both of them independently. It is used to decouple 2 independent components or microservices by giving reliable communication mechanisms.

## What is autoscaling?

Buy the biggest server to meet your busiest day. On Christmas they get 10M requests. They can buy VMs and put them in an auto scaling group to scale automatically.

However in the cloud you get an autoscaling group for EC2 instances in AWS and you have Virtual Machine Scale Set in Microsoft Azure cloud.

There you just need to define:

1.  Desired Capacity : 2
2.  Minimum Capacity : 2
3.  Maximum Size: 10 when 75% of both machine is reach

## What is a Load Balancer? Why do you use it?

It is a server or a hardware that will determine which server to send traffic. To share the traffic. What if a single server failed because of load. You don’t have redundancy. For designing High  Performance, High Available web applications, you need a load balancer. Load balancers increase the availability and performance of your system.

We can divide the load balancer in 2 parts: network and application load balancer.

Network Load Balancers are really fast because they work at layer -4. They are looking at TCP headers and they are pushing  at your servers. So if you want high performance you need a network load balancer. Cross-Region or global load balancing.

Application Load Balancers work at layer-7 so it is a web-traffic load balancer so they enable us to manage traffic to your web application. SSL termination, cookie-based session, round robin for load-balancing traffic. If you want application intelligence and routing then use this.

If you want to route between microservices then use it.

![How load balancing works](https://lh5.googleusercontent.com/KuonKIAH2IE99BhbpFE2Ry0vj3vhg3TFQ9TTpjm8UJc1WR8fS2BAm4gn1XcW90Dc_Y-VreU5_M2vqkkeAURU3dz76j16WcBiEkZqCRsYffYo6Ca4EA39ORPgGNxV7wmgoqBSV7oy=s0)

## What is API Gateway and its benefits?

[https://dashbird.io/blog/can-api-gateway-act-load-balancer/](https://dashbird.io/blog/can-api-gateway-act-load-balancer/)

API Gateway offers below which ALB does not:

- It integrates with IAM
- Authentication & Authorization
- API Tokens issuing and managing
- Throttling
- Caching

## What is Firewall?

- It blocks traffic at the edge of your network,
- it keeps your network secure
- It blocks all traffic denied by policies
- It lets your outbound traffic back if it's coming from you.

A firewall protects the perimeter of the edge of your network. It is a security appliance that’s basically standing guard saying you are not allowed in, you are allowed. It looks at traffic based on policy. By default it will block all the traffic from coming in. It will allow your internal traffic out on the internet and it will allow all your return traffic back through the firewall. Because Firewalls are Stateful therefore. Within perimeter if Mike wants to open google.com. Firewall is Stateful it will say okay Mike started the session, let his return traffic come back because, I know it's destined for mike and  I know it's related to the same session where Mike requested google.com. 
![](https://i.imgur.com/gpGJyXV.png){: .full}

![](https://i.imgur.com/WPD9IiY.png){: .full}

## How does cloud computing affect an organization's costs?

Saves capital cost. Costs like Workstation, firewall, load balancer, cooling, networking, power etc.

Operation cost also like : Electric bill, Network, staff

Move to the cloud, nothing to buy. You can do lift and shift and save capex. You only pay for what you use. Your Capex goes down and Opex goes up. Agility benefit, u can spawn up vms fastly.

## What are VPC flow Logs ? NSG flow log In Azure?

In networking we have Cisco NetFlow. It will examine the traffic, they would cross cisco routers and you could say, hm the traffic all going from here to end point B and check for security violation. You can find areas of congestion in your network. Check any issue on network traffic and troubleshoot.

Vpc flow log gives info about traffic flow. They are excellent for any network troubleshooting especially in security.

It will tell you below things:

- Source
- Destination
- Protocols
- Port number

Something accepted by ACL but rejected by security group. If this traffic was supposed to be a web app hosted in a VM and you want to know why it got rejected by SG. Check the VPC flow logs.

## What's needed for a simple lift and shift of a system to the cloud?

Define the configuration of the server like How many cores, RAM and Storage.

## What is the difference between Latency based Routing and Geolocation based routing?

Latency routing is for speed and performance, geo-location routing will also optimize the speed and performance however it will also send traffic to appropriate websites based on their locations.

Latency based routing determines the lowest latency and sends you to the web server with the lowest latency so you get the best experience

Latency based routing done by Traffic Manager/Front door

Geolocation routing looks at the source IP address and determines what is closest to you and sends them to a different destination. Example you can check IP and decide province and route to that website. For Finch province route to the French website. Route the English province to the English website. If you are dealing with a company having Multi Language websites there, use this.

## What is the difference between a region, an availability zone, an edge location and local zone?

### What is Region?

AWS has the concept of a Region, which is a physical location around the world where we cluster data centers. We call each group of logical data centers an Availability Zone. Each AWS Region consists of multiple, isolated, and physically separate AZs within a geographic area.

### What is Availability Zone?

From <[https://aws.amazon.com/about-aws/global-infrastructure/regions_az/](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)> An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region.

### What is Local Zones?

From <[https://aws.amazon.com/about-aws/global-infrastructure/regions_az/](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)\> [AWS Local Zones](https://aws.amazon.com/about-aws/global-infrastructure/localzones/) place compute, storage, database, and other select AWS services closer to end-users. This is for critical latency systems like Games.

### What is Edge Location?

From <[https://aws.amazon.com/about-aws/global-infrastructure/regions_az/](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)\> Edge location is Reliable, low latency and high throughput network connectivity. Amazon CloudFront peers with thousands of Tier 1/2/3 telecom carriers globally, is well connected with all major access networks for optimal performance, and has hundreds of terabits of deployed capacity. CloudFront Edge locations are connected to the AWS Regions through the AWS network backbone - fully redundant, multiple 100GbE parallel fiber that circles the globe and links with tens of thousands of networks for improved origin fetches and dynamic content acceleration.

To deliver content to end users with lower latency, Amazon CloudFront uses a global network of 225+ Points of Presence (215+ Edge locations and 13 regional mid-tier caches) in 90 cities across 47 countries. Amazon CloudFront Edge locations are located in: North America, Europe, Asia etc.

From <[https://aws.amazon.com/cloudfront/features/?whats-new-cloudfront.sort-by=item.additionalFields.postDateTime&whats-new-cloudfront.sort-order=desc](https://aws.amazon.com/cloudfront/features/?whats-new-cloudfront.sort-by=item.additionalFields.postDateTime&whats-new-cloudfront.sort-order=desc)>

## What is IAM?

AAA (authentication, authorization and accounting)

Who is allowed in the system, What they can do and Track what they do.

## What is an 802.1Q tag?

VLAN is a subnet in the cloud. Take a physical switch and virtualize them here are examples:

- Port 10-20 vlan -2
- Port 20-30 vlan -3
- Port 30-40 vlan-4

Take a single physical connection coming from on-premise to cloud vlan network using 802.1Q tag. With 802.1q tag aws separate your traffic from other customers for direct connection.

## What is CDN?

Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment.

From <[https://aws.amazon.com/cloudfront/](https://aws.amazon.com/cloudfront/)>

- Speed up content
- Reduce network bandwidth to aws network
- Closer to user
- Guaranteed performance

Instead of going to Amazon.com go to dns and data center. It goes to CDN and you are calling from Miami and serving the site from that location. If cdn has not site cached then it can go fastly to the datacenter and fetch the content since cdn is on aws edge location which is connected to the aws backbone network. Reducing load on web server and Transfer cost on AWS or any cloud network for other cloud service providers.

## What is the process to take a web server and make it publicly available on the internet if you are inside of the AWS cloud ?

You will take an external public IP from amazon pool and assign it to EC2 instance. From EC2 now you want the default router to be the internet router. Therefore, you need an internet gateway.

## What is the optimal subnet size for a point-to-point WAN link?

Answer is /30 So I got 4 IP 2 reserved and got 2 free.

- 192.168.0.0/30
- 192.168.0.1/30
- 192.168.0.2/30
- 192.168.0.3/30

`0.0.0.0` reserved for  internet and `255.255.255.255`  is for broadcast

## What is the difference between IOPS and throughput?

**IOPS** (input output per seconds) determines how frequently you can read and write to the disc and how  fast. IOPS is related to latency the higher the IOPS, meaning the more read/write operations per second, the lower the latency.

**NVME** (Non-Volatile Memory Express) is faster than SSD. Both NVME and SSD drives tend to have relatively low latency because the read/write operations are very fast or the IOPS are very fast. Magnetic drives have much higher latency and much lower IOPS. But if you put a bunch of Magnetic drives together in a RAID environment you can still get great THROUGHOUT. IOPS inversely proposal to Latency

The higher IOPS the lower latency and the latency on the network and vice versa. THROUGHPUT is the amount of stuff and data that can be moved at any one period of time.

Example: cars run 55 mph then its throughput would be whatever it could stuff in the trunk, or the boot, But if you had a Freight Train with 55 mph then you could carry a lot more  stuff. And the stuff is the THROUGHPUT.

```
IOPS = LATENCY
THROUGHPUT = The amount of STUFF
```

Use case of IOPS and Throughput:

Video editors need a drive that needs high throughput because they are working with large video files but they can tolerate the latency.

A database needs extreme speed in terms of read and write operation but it is not moving large amounts of data then it needs higher IOPS.

## What is the difference between ACL and NSG ?

Access Control Lists (ACL) is a Networking concept. It keeps traffic out of the subnet and Network Security Group (NSG) keeps traffic out of the Host. ACL protects the subnet and NSG protects the server. ACLs are stateless meaning it is not tracking the state of the connection. The traffic that is allowed in is not being monitored, so therefore, you don’t know a lot of return traffic. So rules in ACL have to be applied in both directions.

NSG is just like a firewall, it is stateful so you have to only enable the inbound direction. So if traffic is coming to the host then the return traffic is allowed from the same host back to the source.

ACL works at layer -3, NSG is stateful They are stateful, meaning that they allow return traffic to flow. In general allow everything in and out and block the specific one.

## Stateful vs Stateless?

Stateful services keep track of sessions or transactions and react differently to the same inputs based on that history. Stateless services rely on clients to maintain sessions and center around operations that manipulate resources, rather than the state.

1.  ACL is stateless
2.  Firewall is stateful
3.  NSG is stateful both in AWS and Azure

## What is RAID 0, 1, 5 , 10?

Redundant Array of Independent Disks (RAID) is a virtual disk technology that combines multiple physical drives into one unit.

- **Raid-0**: Stripping, high speed, no FT, 100% capacity, data can not be recovered
- **Raid-1**: Mirroring , normal speed, FT, 50% capacity, data can be recovered when 1 disk crash, during 1 disk crash performance remains same, minimum 2 disk required. If you have 2 , 10TB drives you get only 1TB of storage.
- **Raid-5**: Stripping with Parity, High Throughput and normal IOPS,  normal speed, FT, 1 disk capacity we lose, minimum 3 disk we need, 1 disk for parity bit, if any 1 disk failed data can be recovered, during disk failure performance become more down because it has to calculate the parity bit, capacity wise 1 disk capacity lost and used for parity saving
- **Raid-10**: Stripping and Mirroring together,  logical drive made of raid 0 and raid 1, first we create 2 raid 0 disks (4) then we combine them to a logical drive called raid 1. finally it becomes raid 10. This gives high performance, FT, and capacity is 50% when 2 disks are lost.

**Stripping** means distributing bits in different disk and hence faster write because per disk you write very less  bit and parallely you write so your write and read both are faster. Here you get speed however you don't get Fault Tolerance one disk fails then entire data is lost.

**Mirroring** means duplicating means while writing you write all bits simultaneously in 2 different disks to keep redundant disk and protect from data loss. Mirroring does not slow down read write since its writing parallely in 2 disks together. However, since you are writing all bits in one disk at a time, it is slower than the Stripping technique. Here you do not get stripping technology disk speed however you get fault tolerance so if one disk failed then you still can recover your data since you had other disk available as redundant. You have to pay more for mirroring since you want to store 1 TB then you need 2TB for redundancy.

## What is the AWS Shared Responsibility Model?

We take care of the cloud. You take care in the cloud.

AWS can manage below:

- Physical network
- Hardware
- Manage server for SERVERLESS

![](https://i.imgur.com/2RQxYa9.png){: .full}

[https://aws.amazon.com/compliance/shared-responsibility-model/](https://aws.amazon.com/compliance/shared-responsibility-model/)

## How do you secure VPC?

Follow Defense in Depth model and secure from physical to data layer.

### Physical

1- MAC are open for multiple unwanted ports then block them

### Perimeter

1.  Firewall
2.  IPS
3.  IDS
4.  DDOS

### IAM

1.  Single sign On and Identity Providers

### Network

1.  Monitoring
2.  Encryption
3.  Session protection (XSS, XSR, Session Fixation, Session Side Jacking)
4.  Network segmentation
5.  Inside VPC to keep unwanted traffic out of the subnet use ACL

### Compute

1.  NSG to secure host
2.  Anti-virus
3.  Single Sign On
4.  Managed Identity
5.  Virtual Patching (this is for legacy apps lift and shift with the bad code: WAS and WAF whenever web application scan finds a threat it creates a automatic rule in the web application firewall )

### Applications

1.  SSL/TLS, HTTPS
2.  Single Sign ON
3.  Application integrity ( adhering to policies )
4.  Vulnerability Scans

### DATA

Server less -> enable the threat detection -> SEIM , enable data encryption at rest and over network .

1.  Encryption at rest and transit
2.  Masking

## What are the options for using the cloud for disaster recovery?

| #   | Plan                                                                                                                                                                                                                                                                                                    | Cost            | Speed                                                           |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------------------------------------------------------- |
| 1   | Manual Backup and Restore, **Point in time backups into the DR region.**                                                                                                                                                                                                                                | **Cheap($)**    | **RPO = Hours, RTO = Days**. Long time to come back to service. |
| 2   | **Pilot Light (RPO 1min RTO 1hr)**. VMs are created on the DR site and turned off. However the database in the DR site is in active mode and you write your data in DR site live. WEB and Business VMs will have applications and configuration will be copied to DR sites however they are turned off. | **$$**          | **RPO=Minutes, RTO=Hours**.                                     |
| 3   | **WARM standby(RPO 1sec, RTO 1Min)**. Replicate your environment but use very small instances in the DR site but place them in an auto scaling group. When DR workloads are scaled up fully then it is called HOT standby. The more scale up the RTO you get in the DR site.                            | **$$$**         | **RPO = Seconds, RTO = Minutes**                                |
| 4   | **Multi Region (Multi Site) Active-Active (RPO and RTO are zero)** Your workload is deployed to, and actively serving traffic from, multiple AWS Regions. This strategy requires you to synchronize data across Regions. Use DNS to route the traffic                                                   | **Most Costly** | **RPO=0, RTO=0**                                                |

## When VPN and Direct connection?

If you need guaranty consistent  latency  and  guaranty bandwidth use Direct connection since it is connected with direct wire. Costly option. Use the VPN because it is cheaper, works with the internet, and is flexible since everyone has the internet. You can create connections on demand. It was easy to connect to multiple remote sites. The side is you depend on internet bandwidth.

## You have site where u have 10 remote campuses. The main site is hosted in the cloud. Everyone wants to talk to everyone. How can you set up your topology? 

| #   | Technique                   | Description                                                                                        | Speed  | Maintenance |
| --- | --------------------------- | -------------------------------------------------------------------------------------------------- | ------ | ----------- |
| 1   | **Full Mesh**               | Number of edges will be n x (n-1)/2                                                                | FAST   | High        |
| 2   | **VPN**                     | Connect on-premise with site2site VPN and connect each on-premise.                                 | Normal | Medium      |
| 3   | **Hub & Spoke (Cloud Hub)** | Hub and spoke topology on cloud                                                                    | Normal | Low         |
| 4   | **Transit Gateway**         | Managed service from cloud provider to provide transit connection among virtual networks in cloud. | FAST   | High        |

## What function is achieved with IPSEC?

IPSec provides the ability to authenticate each remote end to prevent man-in-the-middle attacks. And it ensures the integrity of the data because it uses a hashing algorithm to encrypt the payload. IPSec provides Non-Repudiation means Assurance that the sender of information is provided with proof of delivery and the recipient is provided with proof of the sender’s identity, so neither can later deny having processed the information. Also it provides the tunnel for private IP addresses and private traffic and private routing information over public networks.

From <[https://csrc.nist.gov/glossary/term/non_repudiation](https://csrc.nist.gov/glossary/term/non_repudiation)\> It is a replacement of internet protocol. IPsec is a suite of protocols. IP protocol and security protocol. It encrypts the payload and keeps the header un-encrypted. It is used in VPN to  create a tunnel of encryption from on-premise to cloud.

## How can you scale relational databases?

Ask the question what type of traffic is being used by your database?

- It's a combination of read and write traffic.

If you have read traffic more then create read replicas and offload the read work to read replicas. Which will free up resources on the master database. You can further reduce the load on read replicas by adding some caching. In order to reduce write load, so you don’t have peaks and valleys you can use queuing system.

## ACID vs BASE ?

Relational DB is ACID by nature:

1.  Atomicity
2.  Consistency
3.  Isolation
4.  Durability

NoSQL are BASE by nature:

1.  Basic Availability: Application must handle partial failures itself
2.  Soft State: DB state can change even without inputs
3.  Eventually Consistency: • DB will "eventually" become consistent

## What is virtualization, how does it work and why will you use it?

Take a bare metal server, add a hypervisor and create a virtual machine on the hypervisor.

![](https://i.imgur.com/GvUVlj3.png){: .full}

## Block Storage and Object Storage how they work, what are their advantages?

If you need storage on a VM that does not go away with reboot, you are going to use something like block storage. If you have a static website or you want to distribute software, you are going to use something like object storage. If you are going to create data-lake , use object storage. If you need high performance storage you will use block storage. Object storage is cheap and can store large volumes of data.

### Object Storage

Object in the object storage is consist of :

- Data
- Unique Id: 128 bit
- Expandable metadata: contextual data

![](https://i.imgur.com/uG9uip3.png){: .full}
![](https://i.imgur.com/chlbywt.png){: .full}

Objects can’t be modified—you have to write the object completely at once. Object storage also doesn’t work well with traditional databases, because writing objects is a slow process and writing an app to use an object storage API isn’t as simple as using file storage.

From <[https://www.redhat.com/en/topics/data-storage/file-block-object-storage](https://www.redhat.com/en/topics/data-storage/file-block-object-storage)>

### Block Storage

Block storage chops data into blocks—get it?—and stores them as separate pieces. Each block of data is given a unique identifier, which allows a storage system to place the smaller pieces of data wherever is most convenient. That means that some data can be stored in a [Linux®](https://www.redhat.com/en/topics/linux) environment and some can be stored in a Windows unit. It is usually deployed in storage-area network (SAN) environments and must be tied to a functioning server. Block storage can be expensive. It has limited capability to handle metadata, which means it needs to be dealt with at the application or database level—adding another thing for a developer or systems administrator to worry about. From <[https://www.redhat.com/en/topics/data-storage/file-block-object-storage](https://www.redhat.com/en/topics/data-storage/file-block-object-storage)>

![](https://i.imgur.com/xpB53D7.png){: .full}

## What Is NAT and Why would you use it?

Network address translation and its really about translating one IP address to another address.

Now they could be used to connect private addresses to the internet by translating it into a public address.

- [Enable a Server on the Inside Network to Reach the Internet Using a Public IP address](https://docs.defenseorchestrator.com/Configuration_Guides/Security_Policy_Management/Network_Address_Translation/0030_Enable_a_Server_on_the_Inside_Network_to_Reach_the_Internet_Using_a_Public_IP_address)
- [Enable Users on the Inside Network to Access the Internet Using the Outside Interface's Public IP Address](https://docs.defenseorchestrator.com/Configuration_Guides/Security_Policy_Management/Network_Address_Translation/0040_Enable_Users_on_the_Inside_Network_to_Access_the_Internet_Using_the_Outside_Interface's_Public_IP_Address)
- [Make a Server on the Inside Network Available on a Specific Port of a Public IP Address](https://docs.defenseorchestrator.com/Configuration_Guides/Security_Policy_Management/Network_Address_Translation/0050_Make_a_Server_on_the_Inside_Network_Available_on_a_Specific_Port_of_a_Public_IP_Address)
- [Translate a Range of Private IP Addresses to a Range of Public IP Addresses](https://docs.defenseorchestrator.com/Configuration_Guides/Security_Policy_Management/Network_Address_Translation/0060_Translate_a_Range_of_Private_IP_Addresses_to_a_Range_of_Public_IP_Addresses)

From <[https://docs.defenseorchestrator.com/Configuration\_Guides/Security\_Policy\_Management/Network\_Address\_Translation/Common\_Use\_Cases\_for_NAT](https://docs.defenseorchestrator.com/Configuration_Guides/Security_Policy_Management/Network_Address_Translation/Common_Use_Cases_for_NAT)>

## What is Stateful Firewall or AWS NSG?

Stateful means watching the state of the connection, they keep the context of the route and remember which request is initiated from which host. If you dis-allowed outbound to port 80 then automatically inbound flights are prohibited.

When you initiate a connection it goes through the firewall on the way out to the internet. The firewall looks at your connection and it tracks what you have done. Because when a response comes it will allow you to back in because it knows you initiated the connections.

## When connecting to AWS when would you use direct or VPN connection?

Direct connection is a wired connection from your on-premise  route to Cloud provider router. You can use either use your ISP or direct Microsoft to connect direct connections. If you want guaranty bandwidth, performance and latency use direct connect.

VPN is You connect to the internet on both side and then you create a tunnel and you encrypt your data over the internet. So the internet Is not private and that’s why you have to encrypt your data. When you use a VPN it is cheaper because you are not buying a direct connection. You are connecting to the internet. VPN are really simple to setup because you can basically you can create any connection to any place that has internet connectivity, which is wonderful.

### Advantages of VPN

- Econmical
- Flexible
- Easy to setup

### Disadvantages of VPN

- Internet bandwidth and performance is not guarantied. Your ISP may guarantee you access to them but when you are on their network and off their network and on the internet there are no guarantees.
- Internet is called best effort delivered if you try to reach webpage it does mean its going to get there. It should, it will try but it will not be guarantied.
- So internet speed is high you get good performance if low then you get bad performance.
- Latency is not guaranty in direct connect you get 3 ms to reach.  In VPN message1 can take 2 ms. Message2 takes 100 ms and then message3 takes 5 ms. So message2 can arrive after message3 and that may be a horrible situation. Message2 takes

![](https://i.imgur.com/uVEAiQQ.png){: .full}

![](https://i.imgur.com/hFY5zPj.png){: .full}

In reality, no physical tunnel exists, of course; the data has to travel through the same wires as any other data passing through the public network. Rather, VPN tunneling employs the concepts known as data encapsulation and encryption to safely carry data traffic through the non-secure environment. Encapsulation insulates the packet of data from other data traveling over the same network, while encryption makes the data “invisible” (unreadable) even to surveillance agents and criminals who recognize it as encrypted information. So it’s like the data is traveling inside a tunnel. Figure 1.0 below might help you visualize the process.

You can think of VPN tunneling as similar to the process of moving physical cash from one bank location to another using an armored transport van along public highways. The cash in this instance is your data, the public highway is the non-secure public network, and the armored van is analogous to a VPN tunnel (data encapsulation and encryption).

From <[https://www.vpnmentor.com/blog/ultimate-guide-to-vpn-tunneling/](https://www.vpnmentor.com/blog/ultimate-guide-to-vpn-tunneling/)>

## What is BGP and why is it used?

Border Gateway Protocol (BGP) is layer 4 protocol. It is an exterior gateway protocol and it works with a path vector routing protocol that operates on TCP port 179. When you connect an entity to an external entity, that's when you use an exterior gateway. That's why organization use BGP to connect to AWS or GCP as opposed to something like OSPF (Open Shortest Path First,  small routing within campus networks) or EIGRP (enhanced interior gateway routing protocol, used in networks of large commercial companies ) [https://networkjourney.com/difference-between-eigrp-ospf-vs-bgp-routing-protocols/](https://networkjourney.com/difference-between-eigrp-ospf-vs-bgp-routing-protocols/)

BGP is highly Tunable and highly scalable. For example if an internet routing table has basically 3 quarters of a million routes and BGP can easily handle that, whereas an interior gateway routing protocol could not. That's why organizations use BGP to connect to external entities like AWS.

BGP Routing preferences sequence:

1.  Largest weight
2.  Largest local preference
3.  Shortest number of autonomous system hops
4.  Lowest Med (metric)

In order to select the next hop BGP checks who has the maximum weight that route it will take, next it will prefer maximum local preference, next shortest number of system hops, next lowest metric. This way it optimizes the route selection and data transfer over the internet.

## You are designing a video streaming software. What should you use TCP or UDP for? Which and why?

It must be UDP. TCP is used for reliable transport. UDP is used for Realtime transport. Why? If I send this "Rupesh like design" via UDP and  I receive "Rupesh Design" I lost like If I send this "Rupesh like design" via TCP and  I receive "Rupesh Design Like" I lost, then TCP will retransmit the Like and you get the data in different order. For video streaming you do not want this behavior. All streaming things must be UDP! Because it is better, faster for these applications. There are no sliding windows. Performance is going to be what it's going to be and there is no re-transmission on lost data.

## What is CXO and what does it mean to present differently to a CXO vs an Engineer?

CXO means a C-Level executive:

- COO
- CFO
- CEO
- CIO (chief information officer)

CXO means a C-level executive. They are extremely busy people. Because they are so busy they have an attention span of a few seconds at max. So you got to get your concept to the executive out to the point.

And you must talk about things that they care about.

The CEO is tasked with the organization's strategy and increasing shareholder value meaning revenue growth or profitability growth.

The CFO cares about the organization's finances. They are the gatekeeper for the organization's money. When you are presenting to the CFO, you better be really good at basically doing some ROI (return on investment) modeling and showing that the value provided by your solution, provides greater  value and savings or profitability to the company than it's cost. You have to do that.

The CIO wants to know your technology solution is going to meet the CEO's goals and needs. So you have to present this and it's going to work. Now when you are dealing with the Engineers, they might need a lot of technical depth.

Presenting to the executive should be "SHORT to the POINT and the Solution"

Presenting to the engineer should be to dive deep and present how it works technically.

In most companies, the board of directors and the founders are at the top of the corporate hierarchy followed by the C-level executives namely the CEO, COO, CFO, etc. ... Usually Vice Presidents (VPs) and Senior Vice Presidents (SVPs) report to C-level executives. [https://resources.workable.com/hr-terms/c-level-executive](https://resources.workable.com/hr-terms/c-level-executive)

## What does organization strategy mean?

An organizational strategy is a plan that specifies how your business will allocate resources (e.g., money, labor, and inventory) to support infrastructure, production, marketing, inventory, and other business activities.

[https://getsling.com/blog/organizational-strategy](https://getsling.com/blog/organizational-strategy)

## What is a Shareholder?

A shareholder is a party that legally owns shares of a company’s stock. Shareholders who own less than 50% of a company’s stock are known as ‘minority shareholders’, whereas shareholders who own 50% or more of a company’s stock are called ‘majority shareholders’.  Shareholders are owners of the company, but they are not liable for the company’s debts.

From <[https://www.investopedia.com/ask/answers/08/difference-between-a-shareholder-and-a-stakeholder.asp](https://www.investopedia.com/ask/answers/08/difference-between-a-shareholder-and-a-stakeholder.asp)>

From <[https://sumup.co.uk/invoices/dictionary/shareholders/](https://sumup.co.uk/invoices/dictionary/shareholders/)>

## What is a stakeholder?

Stakeholders can be:

- Owners and shareholders
- Employees of the company
- [Bondholders](https://www.investopedia.com/terms/b/bondholder.asp) who own company-issued debt
- Customers who may rely on the company to provide a particular good or service
- Suppliers and vendors who may rely on the company to provide a consistent revenue stream

From <[https://www.investopedia.com/ask/answers/08/difference-between-a-shareholder-and-a-stakeholder.asp](https://www.investopedia.com/ask/answers/08/difference-between-a-shareholder-and-a-stakeholder.asp)\> A shareholder can sell their stock and buy different stock; they do not have a long-term need for the company. Stakeholders, however, are bound to the company for a longer term and for reasons of greater need. For example, if a company is performing poorly financially, the vendors in that company's supply chain might suffer if the company no longer uses their services. Similarly, employees of the company, who are stakeholders and rely on it for income, might lose their jobs.

## What is AWS?

Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to lower costs, become more agile, and innovate faster.

From <[https://aws.amazon.com/what-is-aws/?nc1=f_cc](https://aws.amazon.com/what-is-aws/?nc1=f_cc)>

## What is cloud computing?

Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS).

From <[https://aws.amazon.com/what-is-cloud-computing/](https://aws.amazon.com/what-is-cloud-computing/)>

## Cloud Computing Models?

From <[https://docs.aws.amazon.com/whitepapers/latest/aws-overview/types-of-cloud-computing.html](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/types-of-cloud-computing.html)>

### Infrastructure as a Service (IaaS)

IaaS contains the basic building blocks for cloud IT. It typically provides access to networking features, computers (virtual or on dedicated hardware), and data storage space.

From <[https://aws.amazon.com/what-is-cloud-computing/](https://aws.amazon.com/what-is-cloud-computing/)>

### Platform as a Service (PaaS)

PaaS removes the need for you to manage underlying infrastructure (usually hardware and operating systems), and allows you to focus on the deployment and management of your applications

From <[https://aws.amazon.com/what-is-cloud-computing/](https://aws.amazon.com/what-is-cloud-computing/)>

### Software as a Service (SaaS)

SaaS provides you with a complete product that is run and managed by the service provider.

From <[https://aws.amazon.com/what-is-cloud-computing/](https://aws.amazon.com/what-is-cloud-computing/)>

## Six Advantages of Cloud Computing

From <[https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html)>

1.  Go global in minutes
2.  Trade capital expense for variable expense
3.  Benefit from massive economies of scale
4.  Increase speed and agility
5.  Stop spending money running and maintaining data centers
6.  Stop guessing capacity

## Cloud Computing Deployment Models?

- Cloud
- Hybrid
- On Premise

## What is Region?

An AWS Region is a physical location in the world where we have multiple Availability Zones. Each Amazon Region is designed to be completely isolated from the other AWS Regions. This achieves the greatest possible fault tolerance and stability. AWS has 25 AWS regions with 240 countries.

## What is the Availability Zone?

Availability Zones consist of one or more discrete data centers, each with redundant power, networking, and connectivity, housed in separate facilities. These Availability Zones offer you the ability to operate production applications and databases that are more highly available, fault tolerant, and scalable than would be possible from a single data center.  Each Availability Zone is designed as an independent failure zone. This means that Availability Zones are physically separated within a typical metropolitan region and are located in lower risk flood plains (specific flood zone categorization varies by AWS Region).

## What is NAS?

Network attached storage. Centralize storage device for storing data on a network. I will have multiple hard drives in a RAID  configuration. Used in home and small side business. It has a NIC so that you can connect this with a switch or router to be in the network and then you can access it from laptop, desktop mobile etc. It can be accessed as a shared drive. It has a single point of failure, if power supply fail in the NAS then other devices will not able to access it.
![](https://i.imgur.com/ij6H8IB.png){: .full}

![](https://i.imgur.com/csRF4G2.png){: .full}

![](https://i.imgur.com/KHdXMeJ.png){: .full}

## What is SAN?

Storage area network is special. SANs are a highly scalable, highly redundant and high speed network that stores and provides access to large amounts of data. SAN is fault tolerant since data is shared among several disk arrays. If a switch, disk array or server goes down data can still be accessed. Server accesses this data as if it was a local attached hard drive. In NAS it is recognized as a network drive. All other devices in SAN are connected to each other using fiber channel (fiber optics ) 2 -128 gbps speed. Fiber channel is very costly. The other option is iSCSI (Internet Small Computer System Interface) which is a cheaper alternative to using Fiber channel but they are not very fast.  SANs are not affected by network traffic happening in LAN because SANs are not part of LAN. SANs are partitioned off, it's basically a network all by itself.  SANs are very expensive therefore, only large company, enterprises can afford this.

Some important slides from [NAS vs SAN - Network Attached Storage vs Storage Area Network](https://www.youtube.com/watch?v=3yZDDr0JKVc&ab_channel=PowerCertAnimatedVideos)

![](https://i.imgur.com/DJUbzlf.png){: .full}

![](https://i.imgur.com/M0Ot4YC.png){: .full}

![](https://i.imgur.com/tzn8Bdy.png){: .full}

![](https://i.imgur.com/U01CykX.png){: .full}

![](https://i.imgur.com/xYXWhmt.png){: .full}

![](https://i.imgur.com/LkshL3g.png){: .full}

## What is Scalability?

Scalability is the ability of a system to increase workload by adding resources. Scale up, down, out or in. [ Scalability vs Elasticity in 99 seconds](https://www.youtube.com/watch?v=e8F2ls3n_Wo&ab_channel=zeisys)

![](https://i.imgur.com/VoFA3Eg.png){: .full}

![](https://i.imgur.com/gZCASSS.png){: .full}

## What is Elasticity?

Elasticity is the ability to automatically match the resources  sufficient for a given workload size.[Scalability vs Elasticity in 99 seconds](https://www.youtube.com/watch?v=e8F2ls3n_Wo&ab_channel=zeisys)

![](https://i.imgur.com/sbLUG3n.png){: .full}

## Network load balancer vs Application load balancer

Application load balancer:

- URL routing can be done in
- In level -7  (application)
- Low performance
- Load balance frontend servers

Network load balancer:

- In level -4 (transport)
- High performance
- Load balance backend servers

I will publish one more article where I will explain what are the soft skills you need to be successful in your next cloud architect interview so stay tuned.

## References

- [Go Cloud Videos](https://www.youtube.com/playlist?list=PL0azhNeBK66KfW04TZBQWkX62hhnFcb9E)

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
