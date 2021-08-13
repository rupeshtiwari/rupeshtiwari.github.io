---
title: Azure Service Endpoint Overview and Configuration
date: 2022-09-17 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/qxXxmBa.png
header:
  image: https://i.imgur.com/zipiW93.png
  teaser: https://i.imgur.com/qxXxmBa.png
  og_image: https://i.imgur.com/qxXxmBa.png
tags:
  - webdev
  - tutorial
  - beginners
  - azure
---

> Did you know By default azure storage accounts are accessible by the public internet. How can u restrict all public traffic in to your azure storage account and only allow your VNet resources to connect it. Lets learn the same in this article.

## How to access blob storage from VM by minimizing internet access?

Suppose we have one VM om Azure where we have deployed our web server that is hosting rupeshtiwari.com. Now I want to show some images which I want to bring from my azure Blob storage account.

By default all of my images in the azure storage account is accessible from internet. Because, Storage account has `allow access from all network` as default settings.

![](https://i.imgur.com/W7wbOIK.png){: .full}

So question is how can I restrict all internet access to my blob storage and only allow my webserver to communicate to blob storage?

![](https://i.imgur.com/Ex7bJAW.png){: .full}

**Step 1:** **Create Public IP Address (104.41.138.18) and allow only this IP to access blob storage** and restrict internet access in blob storage. You can do this in the Azure portal by going `Firewall and Virtual Network` section of blob storage.

![](https://i.imgur.com/PddFfJo.png){: .full}

![](https://i.imgur.com/5bZIdNp.png){: .full}

**Step 2:** **Allow outbound traffic from VM to blob storage** using port 449. I have used NSG rules in my VM where I denied internet access.

![](https://i.imgur.com/AT4S4w8.png){: .full}

{: .notice--success}
🏆 **Pro Tip** \
\
Even though we assign public IP to VM and communicate to blob storage. All the traffic from VM to blob storage doesn't go via internet. It goes via Azure Backbone since they are in the same region.

## Why we need Virtual Network Service Endpoint?

This above solution will work but what if you wanted to enable internet outbound from VM. It has security risk therefore, you route all traffic from VM to on-premise Firewall for inspection by enabling [Azure Firewall Forced Tunneling](https://docs.microsoft.com/en-us/azure/firewall/forced-tunneling).

This will un-necessary complexity to our network topology. Traffic has to hop multiple time before they reach to the destination.

Therefore, we have to think of different solution. **[Service Endpoints](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoints-overview)** is made for this kind of situation only.

![](https://i.imgur.com/OIlmLEg.png){: .full}

Traffic between the subnet and the storage account in the same region they reside in the Azure backbone network. Using Service Endpoint the VM inside subnet can connect to blob storage directly using optimized direct route.

### How to Configure Service Endpoint for Virtual Network?

- Go to virtual network select Subnet where webserver is residing

  ![](https://i.imgur.com/92M9sNh.png){: .full}

- Add a service endpoint for the Microsoft/Storage in the subnet of your Virtual Network.

  ![](https://i.imgur.com/9eEIpsN.png){: .full}

- Now you can delete public IP address listed in blob storage account.

  ![](https://i.imgur.com/YeL5c4P.png){: .full}

- In blob storage Firewall and Virtual network blade, add existing VNet and the subnet where you webserver resides in.

  ![](https://i.imgur.com/Bq3yPZU.png){: .full}

## How to protect data ex-filtration?

Service Endpoint allows VM to send data to any storage account living inside the same region. Therefore, it is quite possible that you can fetch prod data in VM which is in subscription-1 and send the data to DEV storage account which is in subscription-2. It is possible since both prod and dev storage accounts are in same region ( EAST US). This is security risk for your prod data. How do you protect this data ex-filtration?

![](https://i.imgur.com/xkQjbgD.png){: .full}

Well you need to add policy in Virtual Network Service Endpoint to restrict outside subscription blob storage account communication.

## Service Endpoint Policies

Some malicious employee can send the data from the VM to some other secrete blob storage within same region. How do you prevent this?

You can limit the storage account that service endpoint has access to it by using [service endpoint policies](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoint-policies-overview).

![](https://i.imgur.com/SC6kWYt.png){: .full}

You can go to service endpoint policies and create new policy, where you can restrict communication within your subscription resources only.

![](https://i.imgur.com/HGvPY1j.png){: .full}

Once you add policy and save it then it is fully secured.

![](https://i.imgur.com/WCLZ10p.png){: .full}

## Allow access to Blob Storage from on-premise or home PC

You can do NAT on on-premise and white list one public IP address in your storage account to allow access. However, if you do not want any public IP address access on your storage account then you must use [Azure Private Endpoint](https://docs.microsoft.com/en-us/azure/private-link/private-endpoint-overview).

## References

- https://www.youtube.com/watch?v=gxsitRRgylI&ab_channel=azuremonk-cloudinplainenglish

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
