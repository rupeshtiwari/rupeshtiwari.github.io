---
title: Sending xml data from one page to other page without using session state.
date: 2010-12-27T20:10:22.000Z
published: true
comments: true
social-share: true
categories:
  - ASP.Net
  - jQuery
tags:
  - Asp.Net
  - JavaScript
  - JQuery
description:
  Sending xml data from one page to other page without using session state
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>
				<font size="3"><br />
Recently, I received one question how to send the xml data from one page to another page without using any state management or caching technique of Asp.Net.</p>
<p>Say, there are two pages page1.aspx and page2.aspx. In page1.aspx, we have one button named OpenPage2 after clicking on this button, page2 will be opened up. On page2, we want the xml data sent from page1.</p>
<p>I suggested the below way:</p>
<p>We can post the xml data from one page to another page by using XmlHttpRequest.</p>
<p>In page1, we can have two divs, first with id div1 for page1 and another div with id div2. On the div2, we can load page2 using jQuery’s load utility method, on click of button. Simultaneously show and hide the required div’s. When page2 has to be shown then show div2, hide div1 and vice versa. Pass xml string data to page2 using JSON object. Before sending the xml string data encode it, using JavaScript escape method.</p>
<p>[sourcecode language="javascript"]</p>
<p>var xmlData = escape(&quot;&lt;Name&gt;Rupesh&lt;/Name&gt;&lt;Age&gt;28&lt;/Age&gt;&quot;);</p>
<p>$.load( “page2.aspx”, {“xmlkey”: xmlData } );</p>
<p>[/sourcecode]</p>
<p>Hence, in the page load event of page2.aspx, the same xml string data can be extracted from the request parameters. Since, xmlData would be in encoded format in order to decode it HttpUtility.UrlDecode can be used like below.</p>
<p>[sourcecode language="javascript"]</p>
<p>string xmlData =  Request.Params[“xmlkey”];</p>
<p>xmlData = HttpUtility.UrlDecode(xmlData);</p>
<p>[/sourcecode]</p>
<p>Below is the complete code.<br />
In page1.aspx put one hidden field and on page load event of the page1.aspx store your xml data inside the hidden field so that from the client side you can get the xml data from the same hidden field and post it to page2.<br />
[sourcecode language="javascript"]</p>
<p>//-----put below code in Page1.aspx----//</p>
<p>&lt;script type=&quot;text/javascript&quot;&gt;</p>
<p>var xmlData; //JavaScript object where xml string should be stored.</p>
<p>function openPage2 ( )  {</p>
<p>//Hide the div1 before opening the page2</p>
<p>$(&quot;#div1&quot;).hide();</p>
<p>//Before opening the page2 you can store the xml string in javascript object.</p>
<p>//The XML string can be taken from the hidden field. Use escape method to encode the data</p>
<p>xmlData = escape( $(&quot;#hdnXml&quot;).val() );</p>
<p>//Show div2 and load page2 on div2</p>
<p>$(&quot;#div2&quot;)</p>
<p>.load( &quot;page2.aspx&quot; , { &quot;xmlkey&quot; : xmlData} )</p>
<p>.show()</p>
<p>}</p>
<p>&lt;/script&gt;</p>
<p>&lt;div id=&quot;div1&quot;&gt;</p>
<p>&lt;input type=&quot;hidden&quot; id=&quot;hdnXml&quot; name=&quot;hdnXml&quot; /&gt;</p>
<p>&lt;button click=&quot;openPage2();&quot;&gt;Open Second Page&lt;/button&gt;</p>
<p>&lt;/div&gt;</p>
<p>&lt;div id =div2&quot;&gt;&lt;/div&gt;</p>
<p>//------Page1.aspx End ----</p>
<p>//Put below code in Page2.aspx<br />
&lt;script runat=&quot;server&quot;&gt;</p>
<p>protected void Page_Load(object sender, EventArgs e)</p>
<p>{</p>
<p>if(!IsPostBack) {</p>
<p>//Use urlDecode to decode the xml data</p>
<p>string xml = HttpUtility.UrlDecode(Request.Params[&quot;xml&quot;]);</p>
<p>}</p>
<p>}</p>
<p>&lt;/script&gt;</p>
<p>[/sourcecode]</p>
<p>we could have used query string and send the data using query string also but as we know for query string there is size limit up to 256 chars. If we store the data in cookies variable then cookies also have size limit of up to 4096 Bytes and there may be the chances that cookies are not enabled in client machine.<br />
Therefore, I suggested to use POST method in order to sending the data to the other page. The size limit for POST method depends on type of browser and IIS. I think in IIS 6 and 7 the size limit is 200KB.<br />
</font>		</p>
