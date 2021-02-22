---
title: Dependency Injection in React Core
date: 2018-12-16T04:30:16.000Z
published: true
comments: true
social-share: true
categories:
  - Dependency Injection
  - Design Patterns
  - JavaScript
  - React
tags:
  - Dependency Injection
  - Ract DOM
  - react
description:
  "In Software Engineering Dependency Injection is a technique where one object
  injects or passes the dependency object to other object at run time.According
  to Robert Martin Inversion of Control can be achieved by doing Dependency
  Injection. Where Compile or Build time dependencies are inverted and they are
  supplied at run time via Dependency Injection.\t\t"
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<h2>Dependency Injection</h2>
<blockquote><p>In Software Engineering Dependency Injection is a technique where one object injects or passes the dependency object to other object at run time.</p></blockquote>
<p>According to <a href="https://en.wikipedia.org/wiki/Robert_C._Martin" target="_blank" rel="noopener noreferrer">Robert Martin</a> Inversion of Control can be achieved by doing Dependency Injection. Where Compile or Build time dependencies are inverted and they are supplied at run time via Dependency Injection. Therefore, various separate components at build time does not depend on themselves however at run time there are dependencies.</p>
<p>React library is very famous library now a days. It is a client side framework that enables you to write multi-platform targeted UI Components. React is very flexible and loosely coupled with its features and low level dependent libraries by implementing Inversion of Control and Dependency Injection principles.</p>
<h2>Inversion Of Control (IOC)</h2>
<p>According to <strong>Inversion of Control</strong> principle, Higher level Implementations should not depend on Lower Level Implementations. They should depend on Abstractions. Similarly, Low Level Implementations should not depend on Higher Level Implementations rather it should also depend on Abstraction.</p>
<p><img class="alignnone size-full wp-image-965" src="{{ site.baseurl }}/assets/2018/12/IOC-concept.png" alt="IOC-concept" width="450" height="127" /></p>
<p>At Build time both Higher and Lower Level Implementations should depend on Abstraction however, at run time Higher Level Implementations will use Lower Level Implementations to perform a desired task. Therefore build time dependencies are inverted and it is inversion of running time dependencies.</p>
<p>I know, it is confusing let me explain by giving you one example!</p>
<h2>Example of Inversion Of Control in React</h2>
<p>React wants to update the state of the component into DOM. Here Higher Level Implementation is <strong>React</strong> and Low Level Implementation is <strong>React DOM</strong>. According to Inversion of Control, even though React needs React DOM to update the component state at Run Time React should not depend on React DOM for compiling, building or releasing React Package. Therefore, React package can be independently developed and released. Hence its creation and release life cycle is completely independent of<strong> React DOM </strong>library release and creation life cycle.</p>
<p><img class="alignnone size-full wp-image-966" src="{{ site.baseurl }}/assets/2018/12/react-updater-DI.png" alt="react-updater-DI" width="450" height="370" /></p>
<p>In the above diagram DOM is Platform Specific Details which is very low level implementations. For IOS updating UI Component is different than Android or DOM. Therefore, React does not care about this rather it just depends on <code>updater. Updater</code> is the abstraction which is implemented by Platform specific libraries such as <code>React DOM Server, React DOM, iOS Native, Android or Test </code></p>
<h2>Dependency Injection (DI) in React Framework</h2>
<p><strong>React DOM</strong> has implementation details of <code>updater</code> object. React uses <code>updater</code> to set the state of the Component which finally renders in UI. <strong>React DOM</strong> injects the dependency of updater implementation details to <strong>React </strong>by Property Dependency Injection.</p>
<p><img class="alignnone size-full wp-image-967" src="{{ site.baseurl }}/assets/2018/12/react-DI-for-renderer_.png" alt="react-DI-for-renderer_.png" width="450" height="257" /></p>
<h2>Example of DI in REACT Framework</h2>
<p>Suppose we want to to call <code>setState</code> method in React Component to change the UI State of the Component on button click. Then we will write code <code>this.setState({clickec:true})</code> on button click of component. React will call <code>enqueSetState</code> on updater object which is implemented by <code>React DOM</code>. <code>React DOM</code> will create the instance of the component and it will assign updater to <code>ReactDomUpdater</code> which is property dependency injection style. Please see the code below.</p>
<p>https://gist.github.com/roopkt/f5e3c341727363d6806b4f06fc187245</p>
<h2>References</h2>
<ul>
<li id="firstHeading" class="firstHeading" lang="en"><a href="https://en.wikipedia.org/wiki/Dependency_injection" target="_blank" rel="noopener noreferrer">Dependency injection</a></li>
<li><a href="https://overreacted.io/how-does-setstate-know-what-to-do/" target="_blank" rel="noopener noreferrer">How Does setState Know What to Do? by</a> <a href="https://github.com/gaearon" target="_blank" rel="noopener noreferrer">Dan Abramov</a></li>
</ul>
<h2></h2>
