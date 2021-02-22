---
title: "jTip: jQuery Custom Tool Tip"
date: 2010-12-19T12:24:04.000Z
published: true
comments: true
social-share: true
categories:
  - ASP.Net
  - JavaScript
  - jQuery
tags:
  - Asp.Net
  - JavaScript
  - JQuery
  - Tooltip
description: jQuery Custom Tool Tip
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<div><span style="font-size:small;">Plethora of times it is required to show complex tool tip. Complex, I mean the tool tip that can contain images, links , text decoration etc...To show the custom tool tip is really impossible by using existing Java or .Net visual studio Editor.  There are many ways to implement it.</span><span style="font-size:small;"> </span></div>
<div>
<div>However, I am going to describe one way to overcome this problem that is damn simpler. I have created one javascript file you just need to use that file in your page in which you wish to implement the custom tool tip and your task is done. Now, in any control you can add one <strong>custom attribute</strong> that is <strong>jtip</strong> and inside the custom attribute you can write your html or text to be shown in tool tip. In your page you just need to add the jtip.js script file and jquery.js file. Then in your page you can just use jtip property in any control. Below is one example. Say i want to display one tooltip on button which will contain one link</div>
<div> </div>
<div><span style="font-size:4px;">[sourcecode language="HTML"]<br />
&lt;script type=&quot;text\javascript&quot; src=&quot;jquery.js&quot;&gt;&lt;/script&gt;<br />
&lt;script src=&quot;&lt;span class=&quot; type=&quot;text\javascript&quot;&gt;&lt;/script&gt;<br />
jtip=&quot;j: my name is rupesh please visit my website &lt;a style=&quot;cursor: hand;&quot; href=&quot;#&quot;&gt;My Home Page&lt;/a&gt;&quot; runat=&quot;server&quot; Text=&quot;Button&quot; /&gt;<br />
Button1.Attributes.Add(&quot;jtip&quot;, &quot;j: My name is rupesh....This is custom &lt;a href='#'&gt;ToolTip&lt;/a&gt;&quot;);<br />
[/sourcecode]</p>
<p><span style="font-size:small;">The only thing you have to do is before writing your tool tip things just prepend it with <strong>j: (j colon)</strong>. This is the only pattern that you have to follow. Below is the jTip.js code:</span></span></div>
<div>[sourcecode language="javascript"]<br />
&lt;span style=&quot;font-size: small;&quot;&gt;<br />
$(function( ) {<br />
     $(&quot;[jtip^=j:]&quot;).wrap(&quot;&lt;span class=&quot;jtipHost&quot;&gt;&quot;);&lt;/span&gt;<br />
     $(&quot;.jtipHost&quot;).hover(function(){//debugger;<br />
     $(this)<br />
     .append($('&lt;span style=&quot;font-size: small;&quot;&gt;&lt;span style=&quot;font-size: small;&quot;&gt;jtipcontainer&quot;&gt;'+$(this).find(&quot;[jtip^=j:]&quot;).attr(&quot;jtip&quot;).replace('j:','')+' '))&lt;/span&gt;&lt;/span&gt;<br />
    .find('.jtipcontainer').css(&quot;left&quot;, $(this).position().left + 20)<br />
    .css(&quot;top&quot;, $(this).position().top + $(this).height())<br />
    .fadeIn(500);<br />
 }<br />
   , function() {//debugger;<br />
        $(&quot;.jtipcontainer&quot;).fadeTo(400,.3, function() { $(this).remove(); });<br />
    });<br />
});&lt;/span&gt;&lt;/span&gt;</p>
<p>&lt;span style=&quot;font-size: small;&quot;&gt;&lt;/span&gt;[/sourcecode]</p>
</div>
<p> </p>
</div>
