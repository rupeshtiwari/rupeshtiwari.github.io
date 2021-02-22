---
title: Domain Driven Design Philosophy
date: 2018-11-05T02:06:14.000Z
published: true
comments: true
social-share: true
categories:
  - DDD
  - system design
tags:
  - Domain Driven Design ( DDD )
  - System Design
description:
  "\n\t\t\t\tEric Even wrote Domain Driven Design (DDD) book. Eric says DDD is
  the Philosophy of software design that helps projects dealing with complex
  problem. I have been practicing DDD from last 5 years and here I will try to
  explain the philosophy of DDD here in this article.\_ Let's begin...\t\t"
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>
				Eric Even wrote Domain Driven Design (DDD) book. Eric says DDD is the Philosophy of software design that helps projects dealing with complex problem. I have been practicing DDD from last 5 years and here I will try to explain the philosophy of DDD here in this article. Let's begin...</p>
<h2>What DDD ( Domain Drive Design ) is For</h2>
<blockquote><p><i>Domain Driven Design is for accelerating the development of complex software where communication between technical and business people is difficult and there is a chance that business concept can be muddled. </i></p>
<p><strong>Eric Evan </strong></p></blockquote>
<p>Large systems are useful and can be complex too! However, not all large system needs to be well designed every time. There is no ready-made approach or cookbook to know how to design a good system. It requires a disciplined set of approaches to design a good software.</p>
<p>Domain Driven Design (DDD) has 2 major design aspects that together can be applied while designing a large system.</p>
<ol>
<li>Strategic DDD</li>
<li>Tactical DDD</li>
</ol>
<h1>Strategic DDD</h1>
<blockquote><p>Strategic DDD gives us a systematic way to establish boundaries and isolating separate designs. It advises us to focus on most valuable part of the system.</p></blockquote>
<p>There are some projects in your system where we need the deep modeling DDD can be applied to those projects only. For example: If you want to design system for Insurance Policy then how they manage <strong>Claims Resolution</strong> and re-reimburse money could be the core part of the system which is different from company to company. That core part could be something that makes one company different from others and makes them competitive in market. We should value much on the core portion of the system and apply DDD philosophy on them. Therefore, Claims Resolution is core domain and we could apply DDD on this problem domain. However, in Insurance Policy System there might be the requirement for user management software which may not be the core part of the system and this could be even a CRUD application. Accounting software could be outsourced or taken from 3rd party software. Remember DDD is costly it needs time and lots of collaboration therefore use this philosophy for the core part of your system. <strong>Using Strategic DDD</strong> concepts one can<strong> draw the boundaries within a system</strong> and find out the core domain where most of the investment will happen and DDD will be applied.</p>
<p>[caption id="attachment_587" align="alignnone" width="2725"]<img class="alignnone size-full wp-image-587" src="{{ site.baseurl }}/assets/2018/11/img_20181104_210041__01__017529256551958029955.jpg" alt="STRATEGIC DDD" width="2725" height="2444" /> STRATEGIC DDD[/caption]</p>
<p>In my upcoming article I will share how I personally used to define core domain Using one of the potential  DDD strategies that helped me lot.</p>
<h2>Tactical DDD</h2>
<blockquote><p>Tactical DDD demands Collaborative exploration of the models. It emphasizes on Language of domain.</p></blockquote>
<p>Within the project where you decided to apply DDD by applying your strategic DDD approach. Within this context we apply Tactical DDD where we use model and a particular style of modeling in collaboration with domain expert. Both business folks and dev team participate on modeling and connecting deeply with language that we use on our project and in the code. Tactical DDD is collaborative exploration of model and cultivating of the language for the project.</p>
<h2>And in Closing...</h2>
<p>Thanks for reading and being with me so far. I am practicing DDD and I have lots of things to share with you all that I will do in my up coming posts. Meanwhile please feel free to share your thoughts on Domain Driven Design. How you have applied DDD in your system? What are the strategies you used to draw boundaries in your system ? Can you give some examples of portion in your system which does not require DDD ?I can't wait to see your comments on DDD philosophy.		</p>
