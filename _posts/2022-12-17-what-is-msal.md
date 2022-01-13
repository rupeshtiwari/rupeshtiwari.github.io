---
title: Introduction to MSAL
date: 2022-12-17 00:00 +0000
description: Azure Active Directory helps your resources to provide identity and access management. MSAL is the additional library that helps you to integrate Azure AD features programmatically.
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

> If you have any project that you want to integrate with Azure Active Directory and secure your app. Then you must try using Microsoft Authentication Library (MSAL). Yes, in this article I will introduce you to MSAL 🔥.

## What is MSAL?

Microsoft Authentication Library (MSAL) gives secure access to acquire security token on-behalf of user or application and helps you to achieve single sign on. 
![](https://i.imgur.com/zb53M5t.png)

MSAL specifies which audience can sign in to your application.

## What is the audience?

Audience is the actor or client who interact with the system to whom your application authenticate. Sometimes audience can be used for the target application for which security principal is generated. Audience could be:

1.  Your organization
2.  Several Organization
3.  Work  Organization
4.  School  Organization
5.  Microsoft Personal account
6.  Social Identities with Azure AD B2B
7.  Users in Sovereign
8.  National Cloud (Sovereign cloud )
    1. Azure Government
    2. Azure Germany
    3. Azure China 21Vianet

## Which Applications MSAL supports?

In your application you do not need to write code, you just install the MSAL library and configure it. MSAL will get the security tokens from Azure Identity provider for

1.  Web applications
2.  Web APIs
3.  SPA (Javascript)
4.  Mobile & Native Applications
5.  Daemons & Server Side applications

## Difference between ADAL & MSAL 

Active Directory Authentication Library (ADAL) integrates with the Azure AD for developers (v1.0) endpoint, where MSAL integrates with the Microsoft identity platform.

![](https://i.imgur.com/mF36jCV.png)

## What Programming Language MSAL supports?

MSAL can be used with below languages:

1.  .net applications
2.  Angular projects
3.  JAVA applications
4.  Javascript apps
5.  Node.js projects
6.  Python
7.  React
8.  Android

This list is continuously growing please check with Microsoft document for more updates.

MSAL used for asp.net web applications is called as Microsoft Identity Web Library

## References

1.  [https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-overview#differences-between-adal-and-msal](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-overview#differences-between-adal-and-msal)

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
