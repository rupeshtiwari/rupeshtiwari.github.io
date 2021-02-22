---
title: ASP.Net MVC 3 introduces Razor a new view engine
date: 2010-12-23T04:08:54.000Z
published: true
comments: true
social-share: true
categories:
  - ASP.Net
  - Asp.Net MVC
tags:
  - Asp.Net
  - ASP.NET MVC Framework
  - Microsoft
  - MVC3
description: ASP.Net MVC 3 introduces Razor a new view engine
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<div><span style="font-size:small;">I just read the great article <a href="http://weblogs.asp.net/scottgu/archive/2010/07/02/introducing-razor.aspx" target="_blank" rel="noopener noreferrer">Introducing "Razor" – a new view engine for ASP.NET</a> by <a href="http://weblogs.asp.net/scottgu" target="_blank" rel="noopener noreferrer">Scottgu</a>. I found Razor more comfortable than the other view engines.<br />
It's very easy to write code with Razor View Engine, it substantiates the write less and do more concept. There are lots of good stuffs in Razor.  However, I liked below things in Razor.</span></div>
<div><span style="font-size:small;">1) Instead of writing &lt;% = %&gt; for code block, we can just write @ and start our coding. Razor does not require you to explicitly close the code-block.</span></div>
<div><span style="font-size:small;">2) RenderBody and RenderSection are much powerful, they enables the layout re-useablity.</p>
<p>The sections can be made optional so that any page can have the layout without having those sections defined.</p>
<p>Say we have one Base.cshtml page that has certain basic static html which can be used in multiple pages just like master page.</p>
<p><span style="text-decoration:underline;">Base.cshtml</span></p>
<p>[sourcecode language="HTML"]</p>
<p>&lt;div class=&quot;ui-left-menu&quot;&gt;</p>
<p>@RenderSection(&quot;menu&quot;, optional:true&amp;nbsp;)</p>
<p>&lt;div class=&quot;ui-body&quot;&gt;</p>
<p>@RenderBody()</p>
<p>&lt;div class=&quot;ui-footer&quot;&gt;</p>
<p>@RenderSection(&quot;footer&quot;, optional:true&amp;nbsp;)</p>
<p>[/sourcecode]</p>
<p>Now, say there is one page which wants to inherit from the base.cshtml page and then we can write bellow code for child.cshtml.</p>
<p><span style="text-decoration:underline;">child.cshtml</span></p>
<p>[sourcecode language="HTML"]</p>
<p>@{</p>
<p>LayutPage = &quot;base.cshtml&quot;;</p>
<p>}</p>
<p>@section menu {</p>
<p>&lt;ul&gt;</p>
<p>&lt;li&gt;Home&lt;/li&gt;</p>
<p>&lt;li&gt;Login&lt;/li&gt;</p>
<p>&lt;/ul&gt;</p>
<p>}</p>
<p>@section footer {</p>
<p>&lt;p&gt; Hey I am in footer now... :)&lt;/p&gt;</p>
<p>}</p>
<p>[/sourcecode]</p>
<p>When we render child.cshtml as a view-template again, it will now combine the content from the base.cshtml and child.cshtml page, integrating the two new custom section overrides in it.</p>
<p></span></div>
<div><span style="font-size:small;">3) Last but not lease powerful thing is <span style="text-decoration:underline;">Declarative HTML Helpers </span>. However, in<a href="http://weblogs.asp.net/scottgu/archive/2010/07/27/introducing-asp-net-mvc-3-preview-1.aspx" target="_blank" rel="noopener noreferrer"> ASP.Net MVC 3 (preview 1)</a> this feature is not yet included. HTML helpers are just like <a href="http://msdn.microsoft.com/en-us/vcsharp/aa336809" target="_blank" rel="noopener noreferrer">C#</a> methods which we create once and call it from various places from our project. We can define reusable helpers using a @helper { } declarative syntax like below.</p>
<p>[sourcecode language="html"]</p>
<p>@helper MethodName(arguments) {</p>
<p>.....markup goes here....</p>
<p>}</p>
<p>[/sourcecode]</p>
<p>You can create one Helpers directory inside the View Folder and can put one helper.cshtml file inside that you can create one helper function let’s say ShowAlert method like below.</p>
<p>[sourcecode language="html"]</p>
<p>@helper ShowAlert(var msg, var status) {</p>
<p>@if(status == &quot;error&quot;) {</p>
<p>@msg</p>
<p>} else {</p>
<p>@msg</p>
<p>}</p>
<p>}</p>
<p>[/sourcecode]</p>
<p>After creating above helper method, you can call ShowAlert method from any page.</p>
<p>[sourcecode language="html"]</p>
<p>&lt;html&gt;</p>
<p>&lt;span style=&quot;font-size: small;&quot;&gt;&lt;head&gt;&lt;/head&gt;&lt;/span&gt;</p>
<p>&lt;body&gt;</p>
<p>&lt;p&gt;Below Error Found &lt;/p&gt;</p>
<p>&lt;div&gt;</p>
<p>@ShowAlert(Model.User.Message,&quot;error&quot;)</p>
<p>&lt;/div&gt;</p>
<p>&lt;/body&gt;</p>
<p>&lt;/html&gt;</p>
<p>[/sourcecode]</p>
<p> </p>
<p></span></div>
<p><span style="font-size:small;"> </span>		</p>
