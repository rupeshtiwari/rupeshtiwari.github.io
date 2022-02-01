---
title: TCP vs Http difference
date: 2021-09-16 00:00 +0000
description: TCP is a transport-layer protocol, and HTTP is an application-layer protocol that runs over TCP
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
  - devops
---

> **TCP:** is a transport-layer protocol, and HTTP is an application-layer protocol that runs over TCP.

To understand the difference between TCP and HTTP you need to understand the idea of a layered networking model. Essentially, there are different protocols that let a computer talk at different distances and different layers of abstraction.

![No alt text provided for this image](https://media-exp1.licdn.com/dms/image/C5612AQFidHOoxBXcxQ/article-inline_image-shrink_1000_1488/0/1629980753836?e=1635379200&v=beta&t=ejscPivqV22eHtkynxLjj1NrEolsm3GA0HjLji4ZjNw)

## Networking system layers & TCP UDP Fundamentals

At the very bottom of the network stack is the **physical layer**. This is where electrical signals or light pulses or radio waves actually transmit information from place to place. The physical layer doesn't really have protocols, but instead has standards for voltages, frequencies, and other physical properties. You can transmit information directly this way, but you need a lot of power or a dedicated line, and without higher layers you won't be able to share bandwidth.

The next layer up is the **link layer**. This layer covers communication with devices that share a physical communications medium. Here, protocols like Ethernet, 802.11a/b/g/n, and Token Ring specify how to handle multiple concurrent accesses to the physical medium and how to direct traffic to one device instead of another. In a typical home network, this is how your computer talks to your home "router."

The third layer is the **network layer**. In the majority of cases, this is dominated by Internet Protocol (IP). This is where the magic of the Internet happens, and you get to talk to a computer halfway around the world, without needing to know where it is. Routers handle directing your traffic from your local network to the network where the other computer lives, where its own link layer handles getting the packets to the right computer.

Now we are getting somewhere. We can talk to a computer somewhere around the world, but that computer is running lots of different programs. How should it know which one to deliver your message to? The transport layer takes care of this, usually with port numbers. The two most popular transport layer protocols are **TCP and UDP.** TCP does a lot of interesting things to smooth over the rough spots of network-layer packet-switched communication like reordering packets, retransmitting lost packets, etc._ UDP is more unreliable, but has less overhead._

So we've connected your browser to the web server software on the other end, but how does the server know what page you want? How can you post a question or an answer? These are things that application-layer protocols handle. For web traffic, this is the Hypertext Transfer Protocol (HTTP). There are thousands of application-layer protocols: SMTP, IMAP, and POP3 for email; XMPP, IRC, ICQ for chat; Telnet, SSH, RDP for remote administration; etc.

These are the five layers of the TCP/IP networking model, but they are really only conceptual. The OSI model has 7 layers. In reality, some protocols shim between various layers, or can work at multiple layers at once. **_TLS/SSL _**_for instance provides encryption and session information between the network and transport layers._ Above the application layer, Application Programming Interfaces (APIs) govern communication with web applications like Quora, Twitter, and Facebook.

## References

- [https://erg.abdn.ac.uk/users/gorry/course/inet-pages/tcp.html](https://erg.abdn.ac.uk/users/gorry/course/inet-pages/tcp.html)
- Quora: https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol/answer/Daniel-Miller-7?srid=nZLo
