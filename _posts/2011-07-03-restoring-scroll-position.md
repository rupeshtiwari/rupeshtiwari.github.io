---
title: Restoring Scroll Position
date: 2011-07-04T00:00:07.000Z
published: true
comments: true
social-share: true
categories:
  - dotnet
  - javascript
tags:
  - dotnet
  - javascript
description: Restoring Scroll Position in Html page
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p><span style="font-size: medium;">Suppose you are searching for a product in a shopping website and you got a big set of results. It normally comes in a grid view with a long scroll bar. Sometimes you scrolled to some end and selected a particular product and suppose because of some reason or you clicked some button and page got posted back. Normally now a days because of Ajax nobody does page post back. However, suppose it happened and now page again rendered. Now user has to again scroll the page to find out his/her product. From User Experience point of view it is not good and it is really annoying to scroll to multiple times when your page got posted.</span></p>
<p>Therefore, we should keep the record of last scrolled position before rendering the grid view. We can do this by using one hidden field to store the last scrolled positions and we have to update the hidden field whenever user will scroll the page. While rendering the page we have to read the scroll position from the hidden field and set it to the page. This way we can solve our problem. I know there are multiple ways to do it.</p>
<p>In my below example I have one div with id "me" and inside this div suppose I have a gridview or table with multiple rows.</p>
<p>[sourcecode language="javascript"]<br />
&lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="scroll.aspx.cs" Inherits="scroll" %&gt;</p>
<p><title></title></p>
<style type="text/css">
        div.demo<br />
        {<br />
            background: #CCCCCC none repeat scroll 0 0;<br />
            border: 3px solid #666666;<br />
            margin: 5px;<br />
            padding: 5px;<br />
            position: relative;<br />
            width: 200px;<br />
            height: 100px;<br />
            overflow: auto;<br />
        }<br />
        p<br />
        {<br />
            margin: 10px;<br />
            padding: 5px;<br />
            border: 2px solid #666;<br />
            width: 1000px;<br />
            height: 1000px;<br />
        }<br />
    </style>
<form id="form1" runat="server">
<input type="hidden" runat="server" id="hdnPos" /></p>
<p>//you can put your grid inside this div</p>
<div class="demo" id="me">
<p>//Multiple rows are there need vertical scroll bar and fixed height.</p>
<table></table>
</div>
<p>//button to do postback and check if the scroll position is maintained or not.<br />
<asp:button id="Button1" runat="server" text="Button"></asp:button></p>
<p>//Javascript code required for getting and setting the scroll position of the grid div.<br />
<script type="text/javascript"><br />
        //getting hidden field and grid id.<br />
        var<br />
        hdn = document.getElementById("hdnPos"),<br />
        gridDiv = document.getElementById("me");<br />
        //storing top left scroll position on scroll<br />
        gridDiv.onscroll = function(e) {<br />
            var<br />
            x = gridDiv.scrollTop,<br />
            y = gridDiv.scrollLeft;<br />
            hdn.value = x + "," + y;<br />
        }<br />
        //restoring the top left position on each load.<br />
        window.onload = function(e) {<br />
            var token = hdn.value.split(",");<br />
            gridDiv.scrollTop = token[0] | 0;<br />
            gridDiv.scrollLeft = token[1] | 0;<br />
        }<br />
    </script><br />
</form>
<p>[/sourcecode]</p>
