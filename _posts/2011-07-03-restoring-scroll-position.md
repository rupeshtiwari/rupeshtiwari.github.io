---
layout: post
title: Restoring Scroll Position
date: 2011-07-03 20:00:07.000000000 -04:00
type: post

published: true
password: ''
status: publish
categories:
- ASP.Net
- JavaScript
tags:
- Asp.Net
- JavaScript
meta:
  _edit_last: '1'
  geo_latitude: '40.271005'
  geo_longitude: "-74.838503"
  geo_accuracy: '0'
  geo_address: 1214 Scenic Drive, NJ, 08628
  geo_public: '1'
  tagazine-media: a:7:{s:7:"primary";s:0:"";s:6:"images";a:0:{}s:6:"videos";a:0:{}s:11:"image_count";s:1:"0";s:6:"author";s:6:"314015";s:7:"blog_id";s:6:"311011";s:9:"mod_stamp";s:19:"2011-07-04
    00:15:13";}
  _wpas_done_twitter: '1'
  _wpas_skip_yup: '1'
  _wpas_skip_ms: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609959501;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:311;}i:1;a:1:{s:2:"id";i:361;}i:2;a:1:{s:2:"id";i:170;}}}}
  _publicize_twitter_user: "@roopkt"
  _thumbnail_id: '1484'
  _qode-like: '0'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  slide_template: default
  wpmm_postgrid_views: '390'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/restoring-scroll-position/"
description: ""
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
