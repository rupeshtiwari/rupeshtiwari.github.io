---
title: Application and Service Principal Objects in Azure
date: 2023-01-07 00:00 +0000
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
  - cloud
---

Application and Service Principal Objects in Azure

---

> In azure cloud in order to protect your resources  like web applications you must register them in Azure Active Directory. After registering an application you get service principal. All of your users registered in Azure AD have user principal as security key. .

## Application Registration in Azure Active Directory

You register your application in Azure AD tenant to manage identity & access by creating identity configuration of your application. While registration you must specify:

1.  URL of your application
2.  URL to redirect after authentication
3.  URI to identify your application

The Azure AD tenant where you register your application is called HOME TENANT. You can choose to give access to either single or multiple tenants for your application. You can register multiple apps with the same name however they will must have unique application id. 
![](https://i.imgur.com/zPk3Sth.png){: .full}

![](https://i.imgur.com/gfqUETE.png){: .full}

## What is an Application Object?

After you register an application in Azure AD Home Tenant. It creates a globally unique instance of the application known as Application object. You get globally unique Id (application or client Id ) for your registered application. After registering application you also get service principal auto created (object Id)

![](https://i.imgur.com/YtniiGk.png){: .full}

You can add secrets or certificates & scope to your application. You can use an application object to create multiple service principal objects for your application. Service Principal objects are the same as application instances.

![](https://i.imgur.com/ZeblZYd.png){: .full}

If you use your application in multiple tenants then a new service principal is created in that tenant. However application objects remain single in its home tenant as global identity. 
![](https://i.imgur.com/qMvFl9P.png){: .full}

There are some static properties in application objects that is always common to all application instances or service principals.

Application object describes 3 different aspects of an application as following:

1.  How the service can issue tokens in order to access application
2.  Resources that application might access
3.  The actions that the application can take

Application Entity defines the schema for an application object’s properties.

## What is a Service Principal Object?

To access resources that are secured by an Azure AD tenant, the entity that requires access must be represented by a security principal. This requirement is true for both users (user principal) and applications (service principal). The security principal defines the access policy and permissions for the user/application in the Azure AD tenant. This enables core features such as authentication of the user/application during sign-in, and authorization during resource access.

There are three types of service principal: application, managed identity, and legacy.

The first type of service principal is the local representation, or application instance, of a global application object in a single tenant or directory.  A service principal is created in each tenant where the application is used and references the globally unique app object. The service principal object defines what the app can actually do in the specific tenant, who can access the app, and what resources the app can access.

When an application is given permission to access resources in a tenant (upon registration or [consent](https://docs.microsoft.com/en-us/azure/active-directory/develop/developer-glossary#consent)), a service principal object is created.  When using the portal, a service principal is created automatically when you register an application.

The second type of service principal is used to represent a [managed identity](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview). Managed identities eliminate the need for developers to manage credentials. Managed identities provide an identity for applications to use when connecting to resources that support Azure AD authentication. When a managed identity is enabled, a service principal representing that managed identity is created in your tenant. Service principals representing managed identities can be granted access and permissions, but cannot be updated or modified directly.

The third type of service principal represents a legacy app (an app created before app registrations were introduced or created through legacy experiences). A legacy service principal can have credentials, service principal names, reply URLs, and other properties which are editable by an authorized user, but does not have an associated app registration. The service principal can only be used in the tenant where it was created.

The Enterprise applications blade in the portal is used to list and manage the service principals in a tenant.

## Relationship between application objects and service principals

The application object is the global representation of your application for use across all tenants, and the service principal is the local representation for use in a specific tenant.

The application object serves as the template from which common and default properties are derived for use in creating corresponding service principal objects. An application object therefore has a 1:1 relationship with the software application, and a 1:many relationship with its corresponding service principal object(s).

A service principal must be created in each tenant where the application is used, enabling it to establish an identity for sign-in and/or access to resources being secured by the tenant. A single-tenant application has only one service principal (in its home tenant), created and consented for use during application registration. A multi-tenant application also has a service principal created in each tenant where a user from that tenant has consented to its use.

## Consequences of modifying and deleting applications

Any changes that you make to your application object are also reflected in its service principal object in the application's home tenant only (the tenant where it was registered). This means that deleting an application object will also delete its home tenant service principal object. However, restoring that application object will not restore its corresponding service principal. For multi-tenant applications, changes to the application object are not reflected in any consumer tenants' service principal objects, until the access is removed through the [Application Access Panel](https://myapps.microsoft.com/) and granted again.

## Example of Service principal and Application object

The following diagram illustrates the relationship between an application's application object and corresponding service principal objects, in the context of a sample multi-tenant application called HR app. There are three Azure AD tenants in this example scenario:

- Adatum - The tenant used by the company that developed the HR app
- Contoso - The tenant used by the Contoso organization, which is a consumer of the HR app
- Fabrikam - The tenant used by the Fabrikam organization, which also consumes the HR app

![](https://i.imgur.com/zpgHTR8.png){: .full}

## How to create a Service Principal?

You can not create service principal from Azure portal as of November, 2021. Check Microsoft document for latest update.

Service principal is an identity created for use in application, hosted service and automated tools to access Azure resources. You should always use service principal for automated tools rather than login with user identity.

![](https://i.imgur.com/7uSpO0r.png){: .full}

When you create service principal it gives you credentials that you need while in use of service principal. If you don't want to manage credentials try creating managed identity. If you don't have a password for the service principal then you can use the reset service principal credential option.

By default when we create a service principal it assigns a contributor role on subscription scope. You can use \`New-AzADServicePrincipal\` powershell cmdlet to create a new service principal.

## Service Principal Authentication Types

There are 2 types of authentications for service principal:

1.  Password-based (application secret)
2.  Certificate-based (Recommended)

### Password-Based Authentication

When you create a service principal for password-based. It will return an auto generated password. You need that password to authenticate. By default service principal gets read and write access at subscription scope. For sign In using service principal you need tenant Id. Use `New-AZADServicePrincipal -DisplayName Web` to create a new one.

![](https://i.imgur.com/iJ8nGgm.png){: .full}

### Certificate-based Authentication

In order to create a certificate-based service principal you need to pass a base-64 encoded ASCII string of public certificates. Once it is created it will return Id and displayname.

## References

1.  [https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals#application-object](https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals#application-objec)
2.  [https://docs.microsoft.com/en-us/powershell/azure/create-azure-service-principal-azureps?view=azps-5.9.0](https://docs.microsoft.com/en-us/powershell/azure/create-azure-service-principal-azureps?view=azps-5.9.0)
3.  [https://docs.microsoft.com/en-us/powershell/azure/create-azure-service-principal-azureps?view=azps-5.9.0#manage-service-principal-roles](https://docs.microsoft.com/en-us/powershell/azure/create-azure-service-principal-azureps?view=azps-5.9.0#manage-service-principal-roles)

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
