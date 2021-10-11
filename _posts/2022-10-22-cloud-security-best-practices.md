---
title: Cloud Security Best Practices for application, servers and network
date: 2022-10-22 00:00 +0000
description: Are you familiar with cloud layered security approach? Do you trust your on-premise users & systems more than outside then you are still exposed to vulnerabilities and cyber attack's. Let's learn what can we do to protect our applications, servers and networks over cloud?
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
image: https://i.imgur.com/nU9cLAy.png
header:
  image: https://i.imgur.com/zipiW93.png
  teaser: https://i.imgur.com/nU9cLAy.png
  og_image: https://i.imgur.com/nU9cLAy.png
tags:
  - azure
  - tutorial
  - beginners
  - security
---

> According to [Statista.com](https://www.statista.com/statistics/1062879/worldwide-cloud-storage-of-corporate-data/#:~:text=As%20of%202021%2C%20around%2050,next%20to%20advancing%20business%20agility) As of 2021, around 50 percent of all corporate data is stored in the cloud. This share reached 30 percent in 2015 and has continued to grow as companies increasingly shift their resources into cloud environments in the hope of improving security and reliability next to advancing business agility. Therefore, securing your data center, your deployed workloads and your architecture in the cloud is now-a-days top priority for every company.

Most of the Cloud providers like Amazon AWS & Microsoft Azure follow the shared security model where they take care of security of the cloud and you secure what is in the cloud. Therefore, you must educate yourself to start securing your workload and architecture in the cloud.

You start securing your environment from network to server to application & data layers. Let's discuss all of these best practices in detail in this article. For cloud protection, I will refer to Azure cloud in this article. You can correlate [Azure Services & Infrastructures with AWS cloud](https://docs.microsoft.com/en-us/azure/architecture/aws-professional/services) by referring to this article.

## Application Security

Why is application security important in your on-premise or cloud? Did you know 75% of organizations worldwide have experienced some kind of phishing attack in 2021? Have you heard about a multi-layered approach to security? Cybercriminals know that web applications are the key to enter an organization's technology enterprise and steal valuable information.

You can secure your web applications in the following ways:

- Single Sign-On
- Application Integrity
- Vulnerability Scanning and
- Virtual Patching

### Single Sign-On in the cloud

You have your on-premise or cloud line of business (LOB) applications, and you want to secure them. Single Sign-On (SSO) is one of the crucial steps to securing your applications. You may ask what Single Sign-On will do in terms of security, right? I used to think SSO is something where you enter a password or login to your enterprise network once, and then you don't need to log in for other applications. Then what exactly is it saving for security? Well, it can protect you from phishing attacks, for one. According to [Tessian Phishing Statistics 2020](https://www.google.com/url?q=https://www.tessian.com/blog/phishing-statistics-2020/&sa=D&source=editors&ust=1633966929713000&usg=AOvVaw0rPv3CiTK4qpNOEfoxv_3d), last year, 75% of organizations worldwide faced a phishing attack. Azure integrates your web applications with Azure active directory and provides single sign-on.

![](https://i.imgur.com/UOsaf4h.png)

Phishing attacks are emails that will ask you to log in to your application using your password. Examples of phishing emails include: Please Read subject or Payment is Urgent Credential needed for login to secure etc. Suppose you were using SSO and strong authentication in your organization, eliminating the need for employees to ever manually enter passwords to access systems, applications, or information. An email requesting credentials would stand out as a likely phishing attack.

### Application Integrity Check

In 2020, the number of data breaches in the United [States came in at a total of 1001 cases.](https://www.statista.com/statistics/273550/data-breaches-recorded-in-the-united-states-by-number-of-breaches-and-records-exposed/)

Therefore, as an organization, you want to make sure your application data integrity is conserved. Application Integrity helps clients secure their organizations. There are many best practices and rules available in Azure policy that require compliance from your applications. Basic requirements like using Https for web APIs and certification validation for calling endpoints are very effective. Limiting access to your applications for only those clients that have a valid certificate will limit your exposure. By default, incoming client certificates are disabled for Azure App Service web applications.

Azure has managed initiatives (collection of policies) for compliance domain and security control. Make sure you apply one of them to your app service plan and other resources in your workload.

### Vulnerability Scans in Applications

[Edgescan's 2021 Vulnerability Statistics Report](https://www.google.com/url?q=https://info.edgescan.com/vulnerability-stats-report-2021&sa=D&source=editors&ust=1633966929715000&usg=AOvVaw1-PJ5lIm1vsmfu9HDYW-8j) analyzed the severity of web application vulnerabilities. It found that 50 percent of internal application vulnerabilities are considered a high or critical risk. It also found that 32 percent of vulnerabilities in internet-facing applications are considered a high or critical risk. According to [the Verizon Data Breach Investigation Report](https://www.k2io.com/2021-verizon-data-breach-investigations-report-is-out/) web applications remain the top vector used by hacking in breaches at over 90%.

![](https://i.imgur.com/WbwSU43.png)

Therefore, you must scan your web app for vulnerability risk. Azure Web apps provide built-in tools for diagnoses and solving vulnerability problems. Azure App Service Diagnostics will help identify and alert you to the security risks associated with your web application.

![](https://i.imgur.com/lqGz7hu.png)

### Virtual Patching for Legacy Code

Virtual Patches are meant for protecting unitary vulnerabilities that the current WAF Security Policy does not already protect.

Cybercriminals know web apps connect with backend, active directory to get valuable business and intellectual data. [According to IBM data breach report 2021](https://www.ibm.com/security/data-breach), data breach costs rose from USD 3.86 million to USD 4.24 million, a 17-year historic increase.

Due to the large volume of cloud migration and web application development, many organizations create too many web apps with too many vulnerabilities. They are left exposed to potential data breaches through these applications. Some companies even take their windows applications and convert them into web applications without understanding how to secure them. Additionally, many applications are poorly written and have security loopholes. So how does an organization mitigate the risk of a breach through their web app portfolio?

Use Microsoft's PaaS (platform service) and leverage Azure vulnerability scans and patching services. Frequent scanning and patching ensure your protection is up-to-date and continuous. Need secure zero-day vulnerability on your web app? Review your case with Azure and get protection for your dedicated host.

In summary, I recommend you follow a [Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/?wa-lens-whitepapers.sort-by=item.additionalFields.sortDate&wa-lens-whitepapers.sort-order=desc) for security for web applications. Do code reviews and seek out any security violations in your code and remove them - similar to sanitizing your incoming text from client to server to make sure you avoid running scripts injected by malicious users.

What about vulnerabilities in existing and potentially out-of-date applications? What if you have VMs hosting web apps in the cloud and you own the responsibility of patching servers? If you leave your VMs vulnerable, they will be the first choice for attackers. The answer is Virtual Patching. Virtual Patching is the technique leveraging WAS (web application scan) and WAF (Web application firewall) to install virtual patch software; use WAS to identify vulnerabilities, and then automatically create rules in [WAF (Web Application Firewall)](https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview). This way, you end up protecting your app from existing vulnerabilities attacks without changing your source code.

### Network Security in Cloud

In cloud you can secure your network by doing the following things:

- Network segmentation
- Network Session Protection
- Network Monitoring
- Traffic Encryption

**Network Segmentation** inspired by [Zero Trust Model](https://en.wikipedia.org/wiki/Zero_trust_security_model).

Network Segmentation can help control your company's network traffic flow. Your IT team can regulate who has access to which segment of the network. Segmentation improves security and performance by dividing the entire network into parts. For example, as a bank, you want to restrict branch employees from your financial reporting systems. With Network segmentation, you can limit traffic flow in the financial system segment, improving performance for the financial analysts and limiting unnecessary system access from unauthorized systems and users. Additionally, you may limit the scope of an infection or attack to a single segment rather than the entire network. Finally, Network Segmentation is a crucial element of the [Zero Trust model](https://en.wikipedia.org/wiki/Zero_trust_security_model).

Please see the [best practices of segmentation.](https://securityscorecard.com/blog/network-segmentation-best-practices-to-maximize-cybersecurity)

On-premises you can use a legacy approach to create multiple DMZ (demilitarized zones) using internal firewalls and Access control Lists( ACLs); however, this approach is more costly and time-consuming. Nowadays, you can apply tags on selected routes and group them virtually by tagging. A tag will enforce segmentation policy directly on the network equipment.

In Azure cloud, you can achieve network segmentation as well by properly organizing network infrastructures. You have an azure subscription, virtual network, network security group, application security group, and an azure firewall. These are great tools to create micro perimeters or segments.

In Azure cloud, you can use subnets within a single virtual network and apply custom routes on each subnet to restrict traffic flow. Alternatively, you can use an application gateway to each subnet. However, this pattern where all workload is in one virtual network cannot span multiple regions since the scope of a virtual network is limited to only one region.

When you use a virtual network (VNet), you get built-in segmentation because one VNet or VPC by default can not talk to others unless you set up peering. You can set up rules like, for example, virtual network X can't talk with virtual network Y but can talk with virtual network Z, or no Internet for Virtual network X except for access to _.github.com_, and so on.

You can use multiple Virtual networks and use virtual network peering to get segmentation free and use NSG or ASG to enforce policies. However, Virtual network peering is not transitive by nature so consider **transitive gateway** or **Hub & Spoke** model.

![](https://i.imgur.com/dPSq0qG.png)

To fix transitive issues, I would recommend going to a Hub and Spoke topology where you create one dedicated VNet as your hub network and all traffic passes through the virtual hub network, and it can act as a gateway to other hubs in different regions. You can set up your security posture at the hubs, so they get to segment and govern the traffic between the virtual networks in a scalable way. Adding a new workload or new virtual network with the same security posture is a minimal effort. [Learn more about network segmentation in azure here.](https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/network-level-segmentation)

### Session Protection

Your users might log in to the system to establish a session with the server and forget to close the browser, creating [Session Hijacking](https://www.google.com/url?q=https://www.globalsign.com/en/blog/session-hijacking-and-how-to-prevent-it&sa=D&source=editors&ust=1633966929727000&usg=AOvVaw2rIMES5rLflGwVo0CM3CFM) opportunities. Any cybercriminal can take advantage of the open sessions and steal valuable information. According to the 2021 [Vulnerability Statistics Report](https://www.globalsign.com/en/blog/session-hijacking-and-how-to-prevent-it), 37% of XSS attacks targeted web applications. Those attacks could be prevented by Network session protection.

![](https://i.imgur.com/W7Ifi3s.png)

#### Types of Session Hijacking Attacks:

- Cross-Site Scripting (XSS): attackers exploit vulnerabilities within servers and inject scripts (JS, Active Directory, DOS) via web pages and retrieve information.
- Session-Side Jacking: attackers can sniff through network packets to get the session key via session cookies and impersonate them to perform malicious actions. These attacks are even more likely when employees access company assets via public WIFI or an unsecured hotspot.
- Session Fixation: Attackers supply their session key and spoof the user into accessing a vulnerable server.

You can protect your network by using a web application firewall to protect any session established on your network from the outside world. Also, if you apply initiatives and policies to your resource groups, you will be forced to implement certification-based communication. That way, you verify the outside endpoints connecting to your server and mitigate session attacks. [In the Azure web app, you can also apply for SSL certificates](https://docs.microsoft.com/en-us/azure/app-service/configure-ssl-bindings#add-a-certificate-for-custom-domain).

![](https://i.imgur.com/mt7RsG1.png)

### Network Monitoring

Network security monitoring is helpful for detecting and analyzing potential threats. Network cybersecurity monitoring can help protect your enterprise data from malicious actors and hackers, from business stats to personal user information. In your on-premises solution, you can use the NMap tool to scan the network.

![](https://i.imgur.com/hCZwCBu.png)

[Azure cloud Network Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/insights/network-insights-overview) within the Azure Security Center can comprehensively view health and metrics for all deployed network resources. You can also see dependency flow, connectivity, and traffic flow, and more.

### Network Traffic Encryption

Encrypting your data while it's in transit is an essential step toward securing your applications. You can purchase certificates from a certificate authority and use them to encrypt the messages that pass in and out of your servers. Encryption prevents unauthorized users from intercepting and examining the information in these messages while in transit. Encryption also prevents [Man in the Middle Attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

Use Application Gateway or front door in Azure or the Web Application Firewall of AWS to protect your traffic and ensure they are encrypted. If you need end-to-end encryption, Application Gateway can use your private key to decrypt the traffic on the gateway and re-encrypt using the public key of the service running in the backend pool.

Exposing your website or web application through Application Gateway means you don't directly connect your servers to the web. You're exposing only port 80 or port 443 on the application gateway. Your web servers aren't directly accessible from the internet, reducing the attack surface of your infrastructure.

![](https://i.imgur.com/uTwY2Zx.png)

Application Gateway can implement an SSL connection with clients. Application Gateway can also implement an SSL connection with the servers running your application.

### Server/Host Security in cloud

In the cloud, you have to secure your virtual machines on your own. Cloud providers will take care of the cloud, but you have to take care of whatever is in the cloud, especially virtual machines. When you provision virtual machines, you are responsible for patching and installing anti-virus and otherwise caring for security.

Azure Security center can scan the network and, based on security policy, alert you to any pending patches, including cloud and on-premise malware vulnerabilities found. Of course, you still have to take corrective actions.

**Please consider below best practices to secure your EC2 instances or Virtual Machines in cloud:**

- Installing Anti Malware & Antivirus, you can purchase them from Microsoft or Symantec, etc.
- Secure your encryption keys created in VMs in the Azure Key Vault or AWS key management service (KMS) in AWS cloud.
- Protect your server by running frequent backups - try [Azure Backup](https://docs.microsoft.com/en-us/azure/backup/backup-overview) which does not need any CaPeX to set up and provides complete protection of your application data.
- Protect from unplanned outages by implementing Site Recovery to ensure your organization's business continuity and disaster recovery objectives keeping your applications and servers running. [Azure Site Recovery](https://docs.microsoft.com/en-us/azure/site-recovery/site-recovery-overview) helps to protect both on-premise and cloud workloads from disasters.
- Secure SQL data using Transparent Data Encryption (TDE) and column level encryption (CLE).

- Encrypt Virtual Machine disks - to encrypt your VMs disks try [Azure Disk Encryption](https://docs.microsoft.com/en-us/azure/security/fundamentals/azure-disk-encryption-vms-vmss) solution.
- Consistently and frequently run Patch updates.
- Prevent unauthorized access on your VMs by implementing SSO (Single Sign On) and using identity-based access controls.

## Summary

Finally, in this article we learned that your cloud service provider will take care of the security of the cloud. However, You are responsible for securing workloads in the cloud.

In order to secure your workload in the cloud you must follow both Defense in depth and Zero Trust Model. The objective of Defense in Depth is to protect information and prevent it from being stolen by those who aren't authorized to access it. Zero Trust is a strategic initiative that helps prevent successful data breaches by eliminating the concept of trust from an organization's network architecture. You trust nobody in your network, create a micro perimeter. This will help to Bring Your Device (BYOD) related security risk.

## References

- https://www.comparitech.com/blog/information-security/cybersecurity-vulnerability-statistics/
- https://blog.qualys.com/product-tech/2017/05/04/virtual-patching-a-lifesaver-for-web-app-security
- https://success.qualys.com/discussions/s/article/000006325
- https://www.microsoft.com/security/blog/2019/10/23/- perimeter-based-network-defense-transform-zero-trust-model/
- https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/- network-level-segmentation
- https://docs.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview
- https://docs.microsoft.com/en-us/azure/azure-monitor/insights/network-insights-overview

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)
