---
layout: post
title: Dependency Injection Patterns
date: 2011-03-17T03:17:26.000Z
type: post
published: true
comments: true
social-share: true
categories:
  - Design Patterns
tags:
  - Abstract Factory Pattern
  - Inversion of Control
  - Loose coupling
  - Separation of concerns
  - Unit Testing
meta:
  _edit_last: "1"
  geo_latitude: "40.271005"
  geo_longitude: "-74.838503"
  geo_accuracy: "0"
  geo_address: "1214 Scenic Drive, NJ, 08628"
  geo_public: "1"
  _wpas_done_twitter: "1"
  _wpas_done_fb: "1"
  _wpas_skip_yup: "1"
  _wpas_skip_ms: "1"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609259452;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2077;}i:1;a:1:{s:2:"id";i:2132;}i:2;a:1:{s:2:"id";i:2511;}}}}
  _qode-like: "0"
  wpmm_postgrid_views: "409"
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /dependency-injection-pattern/
description: Dependency Injection Patterns

---

<p>
				<span style="font-size:1.2em;font-family:calibri;"><br />
In order to make&nbsp;the application more loosely coupled we should use interfaces. In Dependency injection pattern there exist a class called as assembler or container that takes care of instantiation of classes taking care of dependencies among the classes using interfaces, constructor arguments or any input property. Why would we need another assembler or container to instantiate the objects in our project? That we can do by our own self in our UI layer and work without failure …right!! Well this is good question and I would try to answer it as per my understanding.</p>
<p>Suppose we have 10 different classes in our Business Object (BO) layer and in our web application if we are going to instantiate all those classes as per the requirement in our page (I know it’s very foolish example but yes now it is coming in my mind… L sorry). So here the page has to know that which class I have to instantiate and if some class do need some input parameter in there constructor then we have to pass the appropriate constructor argument while instantiating the object of the class. So if&nbsp;eventually we need to modify the BO layer then the web application project would also have to be change accordingly and compiled that is against the Law of Loosely Coupled Architecture. In order to adhere to the principle of loose coupling, we have to keep our web application layer or UI layer or client layer separate than our concrete business objects or BO layer. So that when we update our business objects it should not accounts for web application changes or compilations.</p>
<p>For creating loosely coupled architecture there are various patterns available according to the requirement one can use those patterns. Some of them are like Factory Pattern, Abstract Factory Pattern, MVP pattern etc.&nbsp; In our above requirement that we just discussed lets apply Factory pattern to make the application more loosely coupled. So we will use Factory class to create our 10 instances of 10 classes present in BO layer. By this we are abstracting the object creation part out of the page or UI layer. However, yet we have not achieved 100% loose coupling you can ask why? The answer to your why is suppose if we want to send some arguments to the constructor of the class then again it should be passed from the UI layer to the Factory class in order to create the object of classes with the supplied arguments. Here again the UI layer has to know that which class needs which argument before creating the instance. Therefore, indirectly it is coupled with the concrete BO classes and prone change when those concrete classes’ changed. Here our UI layer is doing something extra which it was not supposed to do. According to the Principle of Separation of Concerns the UI layer should only display the data and raise the event that’s it so here the Separation of concern principle is also defeated.</p>
<p>Now here comes Container / Dependency Injection Principle that says we should have some central location there we can put our mappings for our required classes, interfaces and constructor arguments. And we should have someone who will each time look to these settings and give the appropriate object after instantiating it properly with appropriate data. So that the UI layer has to not worry about the instantiating of classes UI guy has to not even remember which class name and which argument I would need to call during instantiating. This gives us the complete Separation of Concern principle and also makes our project more Loosely Coupled.&nbsp; This mechanism is also called as Dependency Injection that is using the Containers we can now inject the dependencies while instantiating the object of the class without allowing the UI layer to aware with this. Eventually we can change our UI layer to Windows UI or Silverlight it does not matter our project will work 100% loosely coupled with and properly. One more benefit that we will get is Unit test would become much simpler as we have used Interfaces and Containers we can easily mock our data and can do Unit Testing. So it’s more of Test Driven Architecture that is in high demand in today’s Agile era of SDLC. After applying IOC (Inversion of Control) to do Dependency Injection we could achieve Agile methodology as well.</p>
<p>I have used Microsoft Unity Application block for Dependency Injection. Sometime I will surely post the code how to use the Unity. In Unity we use web.config file for container we generally put our mappings inside the web.config file.</p>
<p>There are three main styles of dependency injection. The names I'm using for them are Constructor Injection, Setter Injection, and Interface Injection.</p>
<p><strong>Constructor Injection: </strong>It is something where the assembler would create the instance of the class using the interface it also populates the required properties via the constructor. While instantiating the object it finds the appropriate object or variable to be passed to the constructor and creates the instance. It can go to any level, i mean there may be the chances that a class can have internally another class and it can also get some data at its constructor level. That also can be taken care by assembler class. This assembler is also called as Inversion of Control. We can use Picco or Unity to work with constructor injection.</p>
<p><strong>Setter Injection: </strong>In setter injection we have setter methods for setting the property while instantiating the classes. And we put the property name and the value name value may be a class or interface or some text file name etc. That mapping we put in our web.config file it we use Unity. So here our assembler will look at the config file and will get us the object of the class after populating the property of the class. That’s cool na… :)</p>
<p>&nbsp;<strong>Interface Injection: </strong>The container uses the declared injection interfaces to figure out the dependencies and the injectors to inject the correct dependents. Suppose we have the requirement to use the some methods of an interface <strong>A</strong> so if you inherit that interface in order to implement few methods then you can’t because if you inherit it then you have to implement its all methods because it’s a contract.&nbsp; In this scenario you can inherit with another new Interface <strong>B </strong>that would inject the and in your class you would have the interface A as the property. Interface B would have one setter method which will accept the interface A. So if you inherit with B then it would set your property interface A and now you can use the as many methods of A as you want because, now it is more of an object A which you have in your class not the whole interface.</p>
<p>&nbsp;Let’s suppose you if you took the cable connection at your home then you have to watch all the channels those they would broadcast whether you want them or not. However, suppose if you want to watch only selected channels and you may want change your selected channels eventually. Then better to have one Set up box installed at your home that would cater you exactly what you want only and you have to pay only for those channels which you entertain or enjoy or watch… cool na… :)</p>
<p>So here in my above basic lay man example the Setup Box is the Interface Injector. So using Interface injector you can enjoy your favorite channels (Methods). Instead of taking the entire cable connection and watch all channels (or inherit the interface to implement all unwanted methods) So in future if you want to use another class or 3<sup>rd</sup> party tool (that is other different channels) also to use instead of the current class (current channels) then you just need to change in the settings of the web.config (setup box settings) and you are all set to go… no need to change your entire code (entire Setup box)</p>
<p>I hope I was able to put my thoughts on Inversion of control and dependency injection. If you have your comments to help me understand more better then please do the favors, you are most welcome. Good Luck… Happy IOC…&nbsp; :)<br />
</span>		</p>
