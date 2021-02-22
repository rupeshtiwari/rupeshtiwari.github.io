---
title: Model in Domain Driven Design
date: 2019-02-07T12:00:12.000Z
published: true
comments: true
social-share: true
categories:
  - ddd
tags:
  - architecture
  - ddd
  - beginners
  - webdev
description:
  "\n\t\t\t\tModel in Domain Driven Design is a system of abstraction that
  eliminates things which are not required. Domain Model allows us to think
  about a particular domain in a particular way.\_\t\t"
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>Model in Domain Driven Design is a system of abstraction that eliminates things which are not required. Domain Model allows us to think about a particular domain in a particular way.</p>
<blockquote><p>In Domain Driven Design (DDD) philosophy, Model is a conceptual system and a system of abstraction.</p></blockquote>
<p>In my previous article <a href="https://blog.rupeshtiwari.com/domain-driven-design-philosophy/" target="_blank" rel="noopener noreferrer">Philosophy of Domain Driven Design</a>&nbsp;we have seen how one can apply strategic pattern of DDD and draw boundaries within a system. Among those boundaries, together business and Development team can decide which subdomain is most competitive and has core business values there only you will apply Domain Driven Design and find out Models.</p>
<h2>You will learn</h2>
<p><img class=" alignnone" src="{{ site.baseurl }}/assets/2019/02/open-gift-box-blank-white-260nw-339299915.jpg" width="391" height="274" /></p>
<p>In this article, you will learn</p>
<ul>
<li><strong>W</strong>hat is Domain ?</li>
<li><strong>W</strong>hat is a Model in Domain Driven Design ?</li>
<li><strong> W</strong>hat are the characteristics of a Good Model ?</li>
<li><strong>H</strong>ow to do Modeling ?</li>
<li><strong>W</strong>hat are the benefits of Model ?</li>
</ul>
<p>Lets Begin with definition of Domain and Model in Domain Driven Design (DDD) philosophy.</p>
<h2>What is Domain ?</h2>
<p><img class="alignnone size-full wp-image-849" src="{{ site.baseurl }}/assets/2019/02/what-is-domain.png" alt="what is domain.png" width="607" height="308" /></p>
<blockquote><p><strong>Domain&nbsp;</strong>is a sphere of knowledge or activity.</p></blockquote>
<p>Example of domain in real world could be Content Management, Tourism, Education, Banking, Cargo Shipping, Insurance etc. If you are working on a software project for a client who is in Education field. They create software for students to give online exam etc. Then Your Problem Domain is about Education. Like I said Domain is a sphere of knowledge hence Education Domain is that sphere here. Imagine Google Earth how it looks like a sphere :)</p>
<h2>What is Model ?</h2>
<p><img src="{{ site.baseurl }}/assets/2019/02/pexels-photo-356147.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=350" alt="Man's Portrait Photo" /></p>
<blockquote><p><strong>Model</strong> is a system of abstraction representing&nbsp; selected aspects of a domain.</p></blockquote>
<p>As we know <strong>D</strong>omain is always full of lots of information and it has real world problems. Therefore, its a general tendency to start thinking model as Real World Model. However, We do not want to model the real thing, that is not a Model.&nbsp;Model itself is just a concept, a system of abstraction.</p>
<p><strong>M</strong>odel is an answer to a question related to a difficult problem in Domain which we want to solve by software. Domain has huge and overwhelming amount of information sometimes very messy information available. Using Model, we help to shift apart that data to find the part of the data that actually relevant to answering our difficult question. Once you found the data needed to answer then transform them into a form that makes that answer more clear and even simpler.</p>
<p>Hence Model Addresses a subset of information about the domain. Model is Specialized rather than generalize. Models are artificial not real and it evolves over the time.</p>
<h2>Characteristics of Good Model</h2>
<p><img src="{{ site.baseurl }}/assets/2019/02/core-values-picture-id685774898?b=1&amp;k=6&amp;m=685774898&amp;s=612x612&amp;w=0&amp;h=znynvt8gN8wQ4_E14M3Ca6Aac4EZRA0wuaDzTZI9GTo=" alt="core values" /></p>
<p>Although model is never perfect, it evolves and the old model always becomes useless. Therefore, we should define the characteristics of a good model.</p>
<ul>
<li>Model should focus only on relevant information and exclude other information.</li>
<li>Model formalizes our thinking. Sometimes by drawing upon pre existing bodies of thoughts, sometimes we have to invent new things etc.</li>
<li>Model should make assertions about the result. This allows us to confidently say what will happen if the artifact is used in a certain way. Example in Google Map important assertion is when we drive on given direction car should reach at destination. It should not take to some other place.</li>
</ul>
<p>&nbsp;</p>
