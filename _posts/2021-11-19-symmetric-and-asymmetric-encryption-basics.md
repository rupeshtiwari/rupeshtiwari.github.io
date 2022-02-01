---
title: Symmetric and Asymmetric Encryption Basics
date: 2022-11-19 00:00 +0000
description:  Symmetric and Asymmetric Encryption Basics and examples
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
  - cloud
---

> Why do you care about encryption strategies? Well if you are planning to become system administrator or solution architect then you must know how you would secure your applications deployed on-premise or cloud.  Also remember this question is asked in most of the solution architect interviews.

## Why do you need to encrypt user data?

Suppose you have a banking website hosted on a server. A user logged in to your application and he is fetching his account details. If the server does not encrypt the data sent over the internet to the user machine then any attacker can sniff the traffic and steal the account information. Also possible some attacker can steal the cookie or session key and authenticate himself as you and start doing transactions on behalf of you called [session fixation](https://owasp.org/www-community/attacks/Session_fixation). There is also the possibility of cross site scripting (XSS) and cross site request forgery (XSRF) attacks which are in top [10 vulnerability attacks identified by Open Web Application Security Project (OWASP](https://owasp.org/www-project-top-ten/)) if you do not secure your communication between server application and client.

![](https://i.imgur.com/8jIjVJJ.png){: .full}

I hope no you are convinced that you must learn encryption mechanisms in order to protect your server.

## What is cryptography?

Cryptography is the study of secure communications techniques that allow only the sender and intended recipient of a message to view its contents. The term is derived from the Greek word kryptos, which means hidden. - [Cryptography Definitions](https://www.kaspersky.com/resource-center/definitions/what-is-cryptography)

## What is Symmetric Encryption?

In the symmetric encryption you use a single key to encrypt and decrypt user data. Both server (sender) and client (receiver) must have the same key in order for sending and receiving data successfully.

![](https://i.imgur.com/t2Fs7Xa.png){: .full}

[TLS/SSL](https://en.wikipedia.org/wiki/Transport_Layer_Security) uses symmetric cryptography using the session key after the initial handshake is done. The most frequently and widely used symmetric encryption algorithms are AES-128, AES-192 and AES-256.

## What is Asymmetric encryption?

In Asymmetric encryption the sender creates a pair of keys. One is called a public key, another one is a private key. The user data is encrypted by using a private key which can only be decrypted by using the corresponding public key.

![](https://i.imgur.com/Pr8xBQv.png){: .full}

TLS/SSL uses asymmetric cryptography to initiate the communication which is also known as TLS/SSL handshake. Most widely used asymmetric encryption algorithms are elgamal, RSA, Elliptic curve technique and PKCS.
