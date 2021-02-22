---
title: Angular Folder Structure For Large Scale Enterprise Application
date: 2020-01-11T18:27:47.000Z
published: true
comments: true
social-share: true
categories:
  - angular
tags:
  - angular
  - architecture
  - webdev
  - tutorial
description: >-
  How to define a highly scalable folder structure for your Angular project.
  Finding a suitable folder structure for my Angular applications is something.
  Especially when the application grew in size. Rupesh will explain the
  structure as per angular guide style in this article.
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p><!-- wp:paragraph --></p>
<p>Nowadays, we build large enterprise applications with Angular. But how to best structure such projects to ensure long-term maintainability and re-usability? <a href="https://www.youtube.com/watch?v=cCvLk_U4IQ0&amp;list=PLZed_adPqIJq4IDrDSguUotCAicVhPPMI">Angular Folder Structure For Large Scale Enterprise Application</a>  course by Rupesh Tiwari provides answers to this question. The audience explores how to split large projects into individually reusable npm packages and how to deploy them through an internal and public registry. How to define a highly scalable folder structure for your Angular project. Finding a suitable folder structure for my Angular applications is something always challenging especially when the application grew in size.  As an alternative, it discusses the Monorepo approach that is used successfully by big companies like Google and Facebook and which compensates for some of the disadvantages of npm packages in internal projects.  </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Angular Project Structure Best Practices | architecture | features</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>In this video Rupesh will describe CORE, SHARED, BLOCKS and FEATURE modules in depth for <a href="https://www.youtube.com/watch?v=4b9xjzjY38c&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD">online e-commerce application course written in mean.js stack</a> and then finally Rupesh will also do one questionnaire to concrete the idea of folder structure and dependency graph between modules within angular project. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=cCvLk_U4IQ0","type":"video","providerNameSlug":"youtube","align":"center","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} --></p>
<figure class="wp-block-embed-youtube aligncenter wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
<div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=cCvLk_U4IQ0
</div>
</figure>
<p><!-- /wp:core-embed/youtube --></p>
<p><!-- wp:paragraph --></p>
<p>Angular application architecture and folder structure is important concept you should learn in order to organize you angular project. It helps when your project will have large set of modules. It helps to the team to have a common  understanding where what exists. Angular Modules can be broadly divided in 2 types app module and feature modules. Feature Modules are the business facing one which has business capabilities and use cases. Next is The Core Module,  Shared Module and Blocks Module. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Core Module | Angular Folder Structure </h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Core module is the most stable one on which every modules depends on . Core Module can be only imported once in your app module. Core Module can not depend on any other modules as stated above. Core Module can only Have State , Models , Services and Utilities. Core Module should not have visual components like directive or components. Core Module is the heart of the app as it has the core business logic used across the application. In case you want to change the UI or migrate the angular version then just replace your feature modules/ shared modules by any UI framework or newer components however you can work with the same core module. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=IHZl6arWpsM","type":"video","providerNameSlug":"youtube","align":"center","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} --></p>
<figure class="wp-block-embed-youtube aligncenter wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
<div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=IHZl6arWpsM
</div>
</figure>
<p><!-- /wp:core-embed/youtube --></p>
<p><!-- wp:heading --></p>
<h2>Shared Module | Angular Folder Structure | Feature</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Shared Module: Can have visual component and they can depend on Core Module. Shared module can not depend on feature modules. Shared module can be imported in feature modules independently. In your app you should have only one shared module.  Shared module can have Directives, Components, Pipes and filters.  Shared module should not have services that is singleton across the application. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=Xnyed148vE8","type":"video","providerNameSlug":"youtube","align":"center","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} --></p>
<figure class="wp-block-embed-youtube aligncenter wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
<div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=Xnyed148vE8
</div>
</figure>
<p><!-- /wp:core-embed/youtube --></p>
<p><!-- wp:heading --></p>
<h2>Block Module | Angular Folder Structure | Project</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Block Modules: Blocks modules have components, Directives, pipes and filters which are singleton throughout your app and it is imported only once in your app module. Block Module Depends on only Core Module and Shared Module.  Block Module Controls the visual building blocks of a page. Blocks are boxes of content rendered into an area, or region, of a web page. Normally like  Loader Screen, Layouts, Menu, Single Dialog etc.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=gYuS6uedkOQ\u0026t=19s","type":"video","providerNameSlug":"youtube","align":"center","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} --></p>
<figure class="wp-block-embed-youtube aligncenter wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
<div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=gYuS6uedkOQ&amp;t=19s
</div>
</figure>
<p><!-- /wp:core-embed/youtube --></p>
<p><!-- wp:heading --></p>
<h2>DEPENDENCY DIAGRAM For Block, Feature, Shared and Core Modules</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Core Module should not depend on any other modules. All dependency should be inwards to core module. There should not be any outward dependency from core module. Core Module can be created once instance throughout the app and imported only in app module of your angular project.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Shared Module can only depend on Core Module. Shared Module can be instantiated multiple times and can have 2 different states for the same components. Like Start Rating Component can be in shared module and it can be of 2 or 3 instances. One instance of the star rating component can show 2 start on the same page the other instance of the star rating component can show 4 start as per the need of your app. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Block Module can also be instantiated only once and imported only once in your app. It can depend on shared module if required.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Feature module can depend on shared or core module and Feature module should not depend on other feature module. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"align":"center","id":2921,"sizeSlug":"large"} --></p>
<div class="wp-block-image">
<figure class="aligncenter size-large"><img src="{{ site.baseurl }}/assets/2020/01/image-1.png" alt="" class="wp-image-2921" /></figure>
</div>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Your thoughts Please</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Let me know your thoughts and feedback!</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Message from Rupesh tiwari</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=gzqDoHYO_xk","type":"video","providerNameSlug":"youtube","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} --></p>
<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
<div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=gzqDoHYO_xk
</div>
</figure>
<p><!-- /wp:core-embed/youtube --></p>
<p><!-- wp:heading --></p>
<h2>Enroll in full stack master link</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong>❤️ Hey Viewers! show your support &amp; subscribe to full stack master school to watch full stack javascript HD course videos including node.js, angular, express, webpack and much more. Download source code, slides and step by step guide. Learn more at https://blog.rupeshtiwari.com/subscribe 💥 I am super excited to teach you at Full Stack Master!</strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"id":3391,"sizeSlug":"large","linkDestination":"custom"} --></p>
<figure class="wp-block-image size-large"><a href="https://blog.rupeshtiwari.com/subscribe"><img src="{{ site.baseurl }}/assets/2020/01/plan-subscription-2.jpg?fit=605%2C1024&amp;ssl=1" alt="" class="wp-image-3391" /></a></figure>
<p><!-- /wp:image --></p>
