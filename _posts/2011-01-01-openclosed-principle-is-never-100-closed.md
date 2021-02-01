---
layout: post
title: Open/Closed principle is never 100% closed
date: 2011-01-01 19:25:38.000000000 -05:00
type: post

published: true
password: ''
status: publish
categories:
- Design Patterns
tags:
- Design Pattern
- Object-oriented programming
- Open/closed principle
meta:
  geo_latitude: '40.271005'
  _edit_last: '1'
  geo_longitude: "-74.838503"
  geo_accuracy: '0'
  geo_address: 1214 Scenic Drive, NJ, 08628
  geo_public: '1'
  _wpas_done_fb: '1'
  _wpas_done_twitter: '1'
  _wpas_skip_yup: '1'
  _wpas_skip_ms: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1600703592;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:295;}i:1;a:1:{s:2:"id";i:2254;}i:2;a:1:{s:2:"id";i:2502;}}}}
  _qode-like: '0'
  wpmm_postgrid_views: '403'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/openclosed-principle-is-never-100-closed/"
description: "Open/Closed principle is never 100% closed"
---
<p>
				<font size="3">At the outset, I used to write programs that just work because, I had to complete and deliver the project on time.</p>
<p>I remember, when&nbsp;was assigned a task to create web application that will create New Enrollment request on a given account number. After slogging the whole day, writing code and proper testing, I created one small application that was allowing user to upload an Excel Sheet consisting of&nbsp;list of Account Number. This application iterates through each account number validates and creates one New Enrollment Request on each account. If it fails then moves to create request on next account number without breaking the execution. Application worked splendidly and my manager became happy that&nbsp;I did the job on time and application was working fine... J</p>
<p>As software programmer, you might know that software project never becomes perfect and client requirement never ends. Same thing happened to me and on the next day, my Manager again came and asked to update the application so that it will also create Account Maintenance Request. I&nbsp;worked for that, done changes throughout the application, put everywhere if else condition needed to check the new account maintenance request type, and finally gave&nbsp;him the application. It worked good... But&nbsp;my manager’s&nbsp;expectations never stopped...</p>
<p>In my project work story the pain part was…, for every new requirement in project, I had to change each and every page, class and doing that repetitively made my code much confusing and disordering.</p>
<p>Then I read about the <a href="http://en.wikipedia.org/wiki/Open/closed_principle">Open/Closed Principle</a>&nbsp;(OCP) of <a href="http://en.wikipedia.org/wiki/Object-oriented_programming">Object oriented programming</a>. This principle states that <em>software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification</em>. What I understood from this principle that software application should be designed such that, if eventually new requirements comes up then project should not allow any changes and it can only be extended.</p>
<p>I planned to re-create my application in such a way that it fits with the idea of Open/Closed Principle. Therefore, implemented <a href="http://en.wikipedia.org/wiki/Factory_method_pattern">Factory Pattern</a>&nbsp;to make project more object-oriented. Converted each request as an object, created one base <a href="http://en.wikipedia.org/wiki/Abstract_class">abstract class</a>&nbsp;(BaseRequest)having one abstract method like CreateRequest inherited by an <a href="http://en.wikipedia.org/wiki/Interfaces">Interface</a> (IRequest) hence followed <a href="http://en.wikipedia.org/wiki/Template_method_pattern">Template pattern</a> as well. Created New Enrollment and Account Maintenance classes inherited form the BaseRequest class and implemented the CreateRequest method in each request class.&nbsp;Created one Factory class that returns the required request Object based on the request type and made its return type the interface IRequest that was pointing to the real request concrete object hence maintained the <a href="http://en.wikipedia.org/wiki/Loose_coupling">loose coupling</a> architecture.</p>
<p>After doing all above mentioned stuffs, project became more object-oriented&nbsp;and loosely coupled architecture by adhering to the precepts of OCP&nbsp;and factory design pattern. Now, life became little easy, say if some new&nbsp;requirement comes&nbsp;up in future for adding one new request type say "withdrawal request"&nbsp;in project&nbsp;then I just have to introduce one new "withdrawal" request class inheriting with the BaseRequest class, implanting the create request method. Changed the Factory class to return withdrawal request object based on some logical condition. That’s it, my work is done and project is ready. Project became more extendable and less changeable, that is very close to the precepts of Open/Close principle.</p>
<p>After redesigning project, comparatively it required fewer changes and efforts to implement new requirements. However, you can see although after implementing the open closed principle&nbsp;and factory design pattern, I had to change the code in Factory class to handle the new Request added in application. That code modification in factory class was compulsory and&nbsp;it could not be avoided.</p>
<p>I read all design patterns, analyzed my project requirement and made best attempts to make an architecture that will never allow any changes in project under any circumstances for implementing new requirement&nbsp;but, failed.</p>
<p>In order to implement new requirements in existing software project, changes have to be done. However, software architecture should be such that it should allow fewer changes and more flexible to extend.</p>
<p>The moral of the story is obvious that there exist no software program that is 100 % closed for changes and 100% adheres to the Open/Closed Principle.</font>		</p>
