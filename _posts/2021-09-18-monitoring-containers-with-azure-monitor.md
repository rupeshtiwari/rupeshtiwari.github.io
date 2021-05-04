---
title: Monitoring Containers with Azure Monitor
date: 2021-09-18 00:00 +0000
description: Learn how to implement and configure Azure Container monitoring with examples and guided videos.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/h4QI62f.png
header:
  image: https://i.imgur.com/po7VJxp.png
  teaser: https://i.imgur.com/h4QI62f.png
  og_image: https://i.imgur.com/h4QI62f.png
tags:
  - azure
  - webdev
  - beginners
  - certification
---

> Did you know you can **containerize** your **asp.net MVC** with **docker** application and upload to **Azure Container Registry** and host them using Azure **Kubernetes Cluster** and start monitoring your container using **Azure Monitor**? In this article, I will explain all of this in this article. This article will help you to prepare for [az-303: Microsoft Azure Architect Technologies](https://docs.microsoft.com/en-us/learn/certifications/exams/az-303).

## Azure Monitor For Containers 🛢️

Monitors the performance of containers deployed to several platforms.
You can monitor below:

- Azure Kubernetes Service (AKS)
- Self-managed K8 cluster hosted on Azure using AKS Engine
- Azure Container Instances
- Self-managed K8 clusters hosted on Azure Stack or on-premises
- Azure Red Hat OpenShift
- Azure Arc enabled Kubernetes

### Implementing Azure Monitor for Kubernetes

![](https://imgur.com/vG39wgW.png)

Let's create and deploy a docker container to AKS. [Source code for azure app insight for docker container](https://github.com/rupeshtiwari/azure-app-container-insights-demo).

#### Creating MVC application with docker

{% include video id="5c2Ccdq_0xg" provider="youtube" %}

- First create MVC asp.net project select docker Linux support.
- Run project locally
- Package this app in container and deploy into container registry
- You can use Docker hub or Azure Container Registry

#### Creating Azure Container Registry

{% include video id="_G5I2JojkN0" provider="youtube" %}

- Next I am going to use **Azure Container Registry Service** to create new container registry.
- Under **repository** of my container registry My MVC application docker image will appear.
- Visual Studio will package my app into a **docker image** and deploy to my **azure docker container registry**.
- Once my docker image any docker host like **Azure Container Instances** or **Azure Kubernetes Service** (AKS).

#### Publishing Asp.net Docker Image to Azure

{% include video id="nklZHjzh2Z4" provider="youtube" %}

- Right click application and publish
- Select Docker Container Registry
- Next select azure container registry
- Select your resource group and azure container registry to publish then select publish. It will take some time to publish your image to Azure Container Registry.

### What is the meaning of word Kubernetes?

The name **“Kubernetes”** stems from an ancient Greek word for “helmsman,” (someone who steers a ship, like a container ship) which explains the ship wheel logo.

#### Creating Kubernetes Cluster in Azure

![](https://imgur.com/Ov87oEs.png)
**Kubernetes Cluster concepts**

1. **Azure Container Registry** has Docker Image and in order to connect to your own docker container image you will get **container name** and **registry name** that will help you to host your docker image to any Azure container hosting services.

2. **Azure Kubernetes Cluster** host the docker container and exposes the container into public **8080** port using in-built high performance **load balancer**.
   1. You need **pod** workflow from Kubernetes Cluster which will connect to the container registry using container name and registry name and create internal 80 port for your app.
   2. Next you need **service** to expose internal port 80 to public 8080 over load balancer.

While creating Kubernetes Cluster remember 3 things.

1. **Authentication method**: required to connect Azure Container Registry to get the docker image.
2. **Integration**: Which Container Registry to select your own Container Registry that is we created where we have our docker image.
3. You can check the **performance** of your container by going to the Monitor Insights. Once our container will be deployed to the Kubernetes then we can observe performance.

Here is the YML for creating POD in k8 cluster.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: insights-demo01 # give any name
  labels:
    app: insights-demo01 # app name
    component: netcore-app
spec:
  containers: # which container u want to deploy
    - image: regdemo01.azurecr.io/appcontainerinsightsdemo:latest # <NameOfTheContainerRegistry>/<NAMEofTheDockerContainer>:latest
      name: webapi
      ports:
        - containerPort: 80
```

YML for creating service in K8 cluster.

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: insights-demo01 # give any name
  name: insights-demo01 # give any name
spec:
  ports:
    - port: 8080 # public port
      protocol: TCP
      targetPort: 80 # internal port
  selector:
    app: insights-demo01
    component: netcore-app
  type: LoadBalancer
```

Follow the video steps to create the Kubernetes Cluster including pod and service.

{% include video id="xoN1efAAEBg" provider="youtube" %}

## References

1. https://techcommunity.microsoft.com/t5/itops-talk-blog/what-s-the-difference-between-azure-security-center-azure/ba-p/2155188

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your bright future is awaiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
