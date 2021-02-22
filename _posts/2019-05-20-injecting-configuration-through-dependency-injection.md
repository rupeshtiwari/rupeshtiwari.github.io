---
title: Injecting Configuration through Dependency Injection
date: 2019-05-20T09:23:52.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
  - Dependency Injection
tags:
  - Angular
  - Dependency Injection
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>Most of the applications connect to multiple environments during their lifecycle. Environment which your application needs to connect can differ depending on the current phase of the project. For example, you may be using a dev environment during development, a test environment during testing, Staging environment during UAT and a production environment for the final deployment of your App. Switching between these environments can be cumbersome and prone to errors. You can’t simply hardcode these environment specific values in your project and make your life difficult. Dependency Injection framework in angular, provide us a way to inject configuration as service to configure the environment and choose a configuration or environment based on the variable. To inject Configuration details in our app we can define Config files with values like Env, API, Mode, DB in a defined schema and these values differ from one environment to other.</p>
<p><img class="alignnone size-full wp-image-2095" src="{{ site.baseurl }}/assets/2019/05/Variables-1.png" alt="" width="2000" height="700" />This is how we can make our application so dynamic or configurable that we can inject our Config files/objects as a dependency. Have a look into our video <a href="https://www.youtube.com/watch?v=iUmjgYD8gfA" target="_blank" rel="noopener noreferrer"><strong>0008-6- angular: How to Inject Configs as Service? </strong></a>to get more details on this topic. In <a href="https://www.youtube.com/watch?v=iUmjgYD8gfA" target="_blank" rel="noopener noreferrer"><strong>video</strong></a>, we have described the scenario in detail where we have injected the Config as regular literal objects into your components or services using Angular Dependency Injection.</p>
<p><iframe src="https://www.youtube.com/embed/iUmjgYD8gfA" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
