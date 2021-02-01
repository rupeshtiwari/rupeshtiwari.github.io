---
layout: post
title: Creating Custom jQuery Widget
date: 2010-11-21 18:46:48.000000000 -05:00
type: post

published: true
password: ''
status: publish
categories:
- jQuery
tags:
- JQuery
meta:
  _edit_last: '1'
  
  _publicize_twitter_user: "@roopkt"
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609226441;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:278;}i:1;a:1:{s:2:"id";i:361;}i:2;a:1:{s:2:"id";i:275;}}}}
  _qode-like: '0'
  wpmm_postgrid_views: '358'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/creating-custom-jquery-widget/"
description: "Creating Custom jQuery Widget"
---

<p>Hi I just came across a greate website <a href="http://bililite.com/blog/understanding-jquery-ui-widgets-a-tutorial/">http://bililite.com/blog/understanding-jquery-ui-widgets-a-tutorial/</a></p>
<p>There I learned how to create custom jQuery widget. I have tried to create my one TexBox widget.</p>
<p>This widget will help to takecare each validations we want to do on a TextBox. Currently I have listed only 2 validations. Similarly we can put many validations.</p>
<p>I want to share that.<br /><span style="text-decoration:underline;">myWidget.js</span></p>
<pre class="EnlighterJSRAW" data-enlighter-language="null">$(function(){<br />  $.widget("ui.TextBox", {<br />    options: {<br />      color:"red"<br />     ,required:true<br />     ,numeric:true<br />     ,msg : {req: "Please enter     some text" , num: "Text should be alphanumeric" }<br />     }<br />     ,_init : function (){<br />       this._setColor();<br />     } <br />     ,_setColor:function ( ) {<br />this.element.css({"background-color":this.options.color});<br />    }<br />     ,off:function ( ) {<br />     this.element.css({"background-color":""}); <br />this.destroy( );<br />      }<br />     ,_rules : {num:/[0-9]/}<br />     ,validate : function ( ) {<br />       var o = this.options,ret=true;<br />     this.element.removeClass("ui-state-error");<br />if (o.required) {<br />var txt=$.trim( this.element.val( ) );<br />if(txt==="") {<br />ret = false;<br />this.element.addClass("ui-state-error");<br />alert(o.msg.req) ;<br />}<br />}<br />if(ret &amp;&amp; ! this._rules.num.exec(txt)) {<br />  ret = false;<br />  this.element.addClass("ui-state-error");<br />  alert(o.msg.num) ;<br />  }<br />};<br />});$("#txtfact").myWidget({color:"khaki",msg:{req:"Please enter your name !!!"}});<br />$("#btnon").click( function( ) {<br />$("#txtfact").TextBox("validate");<br />});<br />$("#btnoff").click( function( ) {<br />$("#txtfact").TextBox("off");<br />});<br /><br />});</pre>
<pre class="EnlighterJSRAW" data-enlighter-language="null"><br /><br /><br /><br /><br />&lt;!--pan class="hiddenSpellError" pre=--&gt;DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"&gt;<br />&lt;HTML&gt;&lt;HEAD&gt;<br />&lt;META http-equiv=Content-Type content="text/html; charset=unicode"&gt;<br />&lt;META content="MSHTML 6.00.2900.3603" name=GENERATOR&gt;<br />&lt;link href="C:\rupesh\css\redmond\jquery-ui-1.8.6.custom.css" rel="stylesheet" type="text/css" /&gt;<br />&lt;script type="text/&lt;span class="&gt;&lt;!--mce:0--&gt;&lt;/script&gt;<br />&lt;script type="text/&lt;span class="&gt;&lt;!--mce:1--&gt;&lt;/script&gt;<br />&lt;script type="text/javascript" src="C:\rupesh\js\myWidget.js"&gt;&lt;/script&gt;<br /><br />&lt;/HEAD&gt;<br />&lt;BODY&gt;<br /><br />Enter Account Number &lt;input type="text" value="" id="txtfact" /&gt;<br />&lt;button id="btnon"&gt;Validate&lt;/button&gt;<br />&lt;button id="btnoff"&gt;Remove Widget&lt;/button&gt;<br />&lt;/BODY&gt;<br /><br />&lt;/HTML&gt;</pre>
