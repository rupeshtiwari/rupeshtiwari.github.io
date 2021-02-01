---
layout: post
title: Prototypal Inheritance in JavaScript
date: 2010-09-05 08:07:01.000000000 -04:00
published: true
categories:
  - JavaScript
tags:
  - JavaScript
  - Object-Oriented
  - prototypal inheritance
description: In this Article I will explain what prototype is and how protoBy using Prototypal inheritance technique, we can create the instance of an object.
subtitle: In this Article I will explain what prototype is and how protoBy using Prototypal inheritance technique, we can create the instance of an object.
---

<p>There is a great article written by <a href="http://javascript.crockford.com/prototypal.html" target="_blank" rel="noopener noreferrer">Douglas Crockford</a>. I recommend everybody to read this article. By using Prototypal inheritance technique, we can create the instance of an object. Suppose, we have one object User, we want to create the instance of the user object and use it in different-2 places. In order to create the instance of an object, we can set the prototype property of an Constructor Function equal to the object and then we can instantiate that constructor function to create the instance of that object. Below is the create method that will help us to do so. This method is taken from Doug's article.</p>
<pre class="EnlighterJSRAW" data-enlighter-language="null">/*
creating a method that will pops up
the new objects inherited with the old object.
*/
if ( Object.create !== "function") {
  Object.create = function (oldObj) {
    function F () {} ;
    F.prototype = oldObj;
    return new F ();
    }
}</pre>
<p>Now let's say we have one object User that has one property say name that is an array. It has name array property and `addName` method to add new name in the array.</p>
<h2>Explaining Prototype Example</h2>
<pre class="EnlighterJSRAW" data-enlighter-language="null">/*
User is a simple object contains 3 methods and one property
*/
var User = {
  name : [],
  addName:function(n) {
    this.name.push(n);
  },
  getName : function ( ) {
    alert(this.name);
  }
};</pre>
<p>Now, by using `Object.create` method, we can create instances of the User object.</p>
<pre class="EnlighterJSRAW" data-enlighter-language="null">/*
creating one instance of User
*/
var user1 = Object.create(User);
user1.addName("Rupesh");
user1.getName( );
// Wo return "Rupesh"</pre>
<pre class="EnlighterJSRAW" data-enlighter-language="null">/*
creating another instance of the User
*/
var user2 = Object.create(User);
user2.addName("Ritesh");
user2.getName( );
// Will return "Rupesh", "Ritesh"</pre>
<p>We saw that how easily we can create the instances of an object and can use its properties and methods using Prototypal inheritance.</p>
<p>I like Prototypal inheritance because it has many advantages one of them is it saves memory. Because, when we create new object by putting old object in its prototype property then we don't refer to the concrete old object rather we refer to the property of an object which has a link or which refer to or which points to the concrete old object. It also help us to create the loosely coupled architecture.</p>
<p>However, in above User object there is one problem!! The problem is when you call `user1.getName( )` it will alert Rupesh. When you call `user2.getName( )` it will alert Rupesh, Ritesh. This is a problem!! This was never expected. We thought that we are creating two different new instances user1 and user2. Which will have their own name properties and will store different values. But it is not the case!!!</p>
<h2>Let's analyze the Prototype Chain</h2>
<p><img class="size-full" src="{{ site.baseurl }}/assets/2010/09/lens-14274696621702000794186467.jpg" data-wpid="106" /></p>
<p>When we write the code user1.addName("Rupesh"); The user1, new object will look for the <strong>name </strong>property in user1 object. It will not find the name property in the user1 object. So, it will go to the prototype object which is a User object and there it will search for the <strong>name </strong>property and finally it updates the <strong>name </strong>property of the prototype object which is nothing but the <strong>User Object</strong>. Therefore, the next time when user2.addName("Ritesh") is called, it again looks for <strong>name </strong>property in <strong>this</strong> (user2) and it again fails to find the name property in user2 object. Therefore, it searches in user2's prototype object for name property. There exists User object that has name property and user1 has already entered "<strong>Rupesh" </strong>in this property so user2 again enters "Ritesh" in the same name property and hence when we do user2.getName( ) then it says "Rupesh, Ritesh".</p>
<p>Whatever data is entered by the user1 in name property. It is inserted in the prototype objects name property that is also shared with user2. That means, they are sharing the same name property. It's like a static property that is being used by the multiple instances of the User object. But, that was not intended. We wanted a new fresh object in each instance.</p>
<p><a href="http://rupeshtiwari.com/wp-content/uploads/2010/09/after-init.jpg"><img class="aligncenter" title="After Init method" src="{{ site.baseurl }}/assets/2010/09/after-init.jpg?w=300" alt="" width="300" height="157" /></a></p>
<p>In order to achieve that, we can introduce one method to User object say <strong>init. </strong>In this method we will initialized the name property with a new array and assign it to the instance object "this".</p>
<pre class="EnlighterJSRAW" data-enlighter-language="null">var User = {
  init:function ( ) {
    /* we are initializing its name      property in new instance or new     object.
    */
      this.name = [];
  },
  name :[],
  addName:function(n) {
    this.name.push(n);
  },
  getName : function ( ) {
    return this.name;
  }
};</pre>
<p>Now if we write below code to set and get the name property then each instance will have different or their own values.</p>
<pre class="EnlighterJSRAW" data-enlighter-language="null">// creating one instance of User
var user1 = Object.create(User);

//calling its init method
user1.init( );

/_
Here we are adding to the same name property of the new instance of the User object.
_/
user1.addName("Rupesh");
user1.getName( );
// Result = Rupesh

//creating another instance of the User
var user2 = Object.create(User);
user2.init( );
user2.addName("Ritesh");
user2.getName( );
// Result = Ritesh</pre>

<p>Now the `user1.getName()` will return Rupesh and `user2.getName()` will return Ritesh. Because, now obj1 and obj2 will have common shared methods but they will have their own distinct <strong>name </strong>properties.</p>
<h2>Conclusion</h2>
<p>I think, I was able to explain the prototypal inheritance clearly. If you have any suggestions then plz put your comments, I want to learn more from you.</p>
<h6 class="zemanta-related-title" style="font-size: 1em;">Related Articles</h6>
<ul class="zemanta-article-ul">
<li class="zemanta-article-ul-li"><a href="http://www.i-programmer.info/programming/javascript/1029-javascript-jems-a-new-take-on-objects.html">Javascript Jems - a new take on objects</a> (i-programmer.info)</li>
<li class="zemanta-article-ul-li"><a href="http://code.google.com/p/digg/wiki/Class">Class - digg - Class creation and management for jQuery - Project Hosting on Google Code</a> (code.google.com)</li>
<li class="zemanta-article-ul-li"><a href="http://www.cliki.net/ParenscriptClassicOO">CLiki : ParenscriptClassicOO</a> (cliki.net)</li>
<li class="zemanta-article-ul-li"><a href="http://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/">(really) understanding javascript prototypes</a> (javascriptweblog.wordpress.com)</li>
<li class="zemanta-article-ul-li"><a href="http://www.i-programmer.info/programming/javascript/1284-javascript-jems-object-factories-constructors-and-clones.html">Javascript Jems - Object factories, constructors and clones</a> (i-programmer.info)</li>
<li class="zemanta-article-ul-li"><a href="http://www.nczonline.net/blog/2010/07/27/determining-if-an-object-property-exists/">Determining if an object property exists</a> (nczonline.net)</li>
<li class="zemanta-article-ul-li"><a href="http://elegantcode.com/2010/08/11/book-review-object-oriented-javascript/">Book Review: Object-Oriented JavaScript</a> (elegantcode.com)</li>
<li class="zemanta-article-ul-li"><a href="http://blogs.msdn.com/b/jscript/archive/2007/10/31/classes-in-jscript-part-iii-class-hierarchy-and-data-encapsulation.aspx">Classes in JScript - Part III: Class Hierarchy and Data Encapsulation</a> (blogs.msdn.com)</li>
<li class="zemanta-article-ul-li"><a href="http://stackoverflow.com/questions/879061/advantages-of-prototype-based-oo-over-class-based">Advantages of prototype based OO over class based - Stack Overflow</a> (stackoverflow.com)</li>
</ul>
