---
layout: post
title: Microsoft contributions to jQuery Plugins
date: 2011-02-06 22:21:12.000000000 -05:00
type: post

published: true
password: ''
status: publish
categories:
- ASP.Net
- jQuery
tags:
- JQuery
- jquery plugin
meta:
  _edit_last: '1'
  geo_latitude: '40.271005'
  geo_longitude: "-74.838503"
  geo_accuracy: '0'
  geo_address: 1214 Scenic Drive, NJ, 08628
  geo_public: '1'
  _wpas_done_fb: '1'
  _wpas_done_twitter: '1'
  _wpas_skip_yup: '1'
  _wpas_skip_ms: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1609993696;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:361;}i:1;a:1:{s:2:"id";i:264;}i:2;a:1:{s:2:"id";i:2329;}}}}
  _qode-like: '0'
  wpmm_postgrid_views: '386'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/microsoft-contributions-to-jquery-plugins/"
description: ""
---
<p>
				<span style="font-family:Calibri;font-size:large;">Almost 3 years ago Scottgu </span><a href="http://weblogs.asp.net/scottgu/archive/2008/09/28/jquery-and-microsoft.aspx" target="_blank" rel="noopener noreferrer">announced</a><span style="font-family:Calibri;font-size:large;"> that Microsoft would begin offering product support for jQuery. Now </span><span style="font-size:large;"><span style="font-family:Calibri;">﻿﻿﻿Microsoft is pla﻿ying a great role on contributing to jQuery plugin.&nbsp;From&nbsp;past 8 to 9 months they were striving on 3 major jQuery plugins.</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">They were:</span></span></p>
<p><span style="font-family:Calibri;font-size:large;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.</span> <span style="font-size:large;"><span style="font-family:Calibri;">Templating </span></span></p>
<p><span style="font-family:Calibri;font-size:large;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.</span> <span style="font-size:large;"><span style="font-family:Calibri;">Data-Linking </span></span></p>
<p><span style="font-family:Calibri;font-size:large;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.</span> <span style="font-size:large;"><span style="font-family:Calibri;">Globalization </span></span><br />
<span style="font-family:Calibri;font-size:large;">The good news is&nbsp;</span><span style="font-family:Calibri;font-size:large;">Templating plugin created by Microsoft is going to </span><a href="http://stephenwalther.com/blog/archive/2010/10/04/microsoft-templates-included-in-jquery-1-5.aspx"><span style="font-family:Calibri;font-size:large;">be added officially</span></a><span style="font-size:large;"><span style="font-family:Calibri;">&nbsp;as a new feature in <a href="http://blog.jquery.com/2011/01/31/jquery-15-released/">jQuery 1.5 version</a>&nbsp;</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">&nbsp;</span></span><br />
<span style="font-family:Calibri;font-size:large;">1)</span> <span style="font-family:Calibri;font-size:large;">Client side templating (</span><a href="http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js"><span style="font-family:Calibri;color:#0000ff;font-size:large;">jquery.tmpl.js</span></a><span style="font-size:large;"><span style="font-family:Calibri;">)</span></span><br />
<span style="font-size:large;"><span style="font-family:Calibri;">&nbsp;</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">Say suppose you want to get a set of data and display stuffs in structured manner then use template. Initially we used to concatenate the strings and display the data that was very slow process.</span></span><br />
<span style="font-size:large;"><span style="font-family:Calibri;">Below is one example how to use the template plugin. In below code we are displaying the product object data in UI. The data inside the product can be fetched from server by calling $.ajax</span></span><br />
<span style="font-size:large;"><span style="font-family:Calibri;">&nbsp;</span></span><br />
<span style="font-size:large;"><span style="font-family:Calibri;">Above script is html its type sets to text / html that says the browser not to interpreted </span></span><br />
<span style="font-family:Calibri;font-size:large;">Content within. It injects the HTML. Braces indicating the placeholder for knowing more about the template plugin please </span><a href="http://api.jquery.com/category/plugins/templates/"><span style="font-family:Calibri;font-size:large;">read</span></a><span style="font-size:large;"><span style="font-family:Calibri;">. </span></span><br />
<span style="font-size:large;"><span style="font-family:Calibri;">﻿﻿﻿﻿</span></span></p>
<p>[sourcecode language="javascript"]<br />
&lt;form runat=&quot;server&quot; id=&quot;form1&quot;&gt;<br />
&lt;h1&gt;Product&lt;/h1&gt;<br />
&lt;div id=&quot;productContainer&quot;&gt;&lt;/div&gt;<br />
&lt;/div&gt;<br />
&lt;/form&gt;<br />
&lt;script id=&quot;productTemplate&quot; type=&quot;text/html&quot;&gt;&lt;div&gt;<br />
&lt;h3&gt;${name} = $(formatCurrency(price)})&lt;/h3&gt;<br />
&lt;img&amp;nbsp;src =&quot;Products/${picture}&quot;/&gt;<br />
&lt;p&gt;<br />
{{html description}}<br />
&lt;/p&gt;<br />
&lt;/div&gt;<br />
&lt;/script&gt;<br />
[/sourcecode]<br />
<span style="font-size:large;"><span style="font-family:Calibri;">Above script is html its type sets to text / html that says the browser not to interpreted </span></span><br />
<span style="font-family:Calibri;font-size:large;">Content within. It injects the HTML. Braces indicating the placeholder for knowing more about the template plugin please </span><a href="http://api.jquery.com/category/plugins/templates/"><span style="font-family:Calibri;font-size:large;">read</span></a><span style="font-size:large;"><span style="font-family:Calibri;">. </span></span></p>
<p>&nbsp;[sourcecode language="javascript"]<br />
&lt;Script type=&quot;text/javascript&quot;&gt;<br />
//Array of products<br />
var products = [<br />
{name : &quot;Apple&quot;,price : 3.44, picture : &quot;Apple.png&quot;, description: &quot;&lt;i&gt;&lt;b&gt;Super&lt;/b&gt;&lt;/i&gt; delicious&quot;}<br />
,{name : &quot;Bacon&quot;,price : 4.55, picture : &quot;Bacon.png&quot;, description: &quot;Quality bacon&quot;}<br />
,{name : &quot;Ice Cream&quot;,price : 12.00, picture : &quot;IceCream.png&quot;, description: &quot;Low fat ice cream.&quot;}<br />
];</p>
<p>//render the array of products<br />
$(&quot;#productTemplate&quot;)<br />
.tmpl(products)<br />
.appendTo(&quot;#productContainer&quot;);<br />
tmpl method returns the fragment of html and append to productcontainer.<br />
function formatCurrency(num) {<br />
num = isNaN(num) || num === '' || num === null ? 0.00 : num ;<br />
return &quot;$&quot; + parsefloat(num).tofixed(2);<br />
}<br />
&lt;/script&gt;<br />
[/sourcecode]</p>
<p><span style="font-family:Calibri;font-size:large;">2) Data Linking (</span><a href="https://github.com/jquery/jquery-datalink"><span style="font-family:Calibri;font-size:large;">jquery.datalink.js</span></a><span style="font-size:large;"><span style="font-family:Calibri;">)</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">Data linking plugin gives the easy way to synchronized to UI field and data object. Its easy way to&nbsp;track the changes in happened in the UI elements and vice versa. Initially we used to check the each form input element which changed and then update the javascript&nbsp;object and then send it to server for update. Now we don’t need to bother about the changes happened in the UI element. The moment any UI element is changed the javascript&nbsp;object will get automatically updated and vice versa. By default linkdata plugin does two-way data binding. </span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">Jquery.datalink.js uses jQuery 1.4.3 version therefore please makes sure that you are including this version of jquery while using datalink plugin.</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">Let’s look at the below example. Here we have 2 input fields which are linked with a javascript&nbsp;object say product. Now any changes made in product object will reflect in UI automatically and vice versa is true.</span></span></p>
<p>[sourcecode language="javascript"]<br />
product Name : &lt;input name=&quot;name&quot; id=&quot;name&quot; type=&quot;text&quot;/&gt;<br />
product price : &lt;input name=&quot;price&quot; id=&quot;price&quot; type=&quot;text&quot;/&gt;<br />
&lt;script class=&quot;hiddenSpellError&quot;&gt;&lt;!--mce:1--&gt;&lt;/script&gt;<br />
&lt;script class=&quot;hiddenSpellError&quot;&gt;&lt;!--mce:2--&gt;&lt;/script&gt;<br />
//link product form to product object<br />
var product = {}<br />
$(&quot;form&quot;).link(product);</p>
<p>//changes to product object will be sync'ed&amp;nbsp;with product form<br />
$(product).data(&quot;name&quot;,&quot;Ice Cream&quot;);</p>
<p>//changes to product form will be synced with product object<br />
$(&quot;#btnSave&quot;).click(function ( ) {<br />
e.preventDefault();<br />
//show product object<br />
alert([product.name, product.price]);<br />
});<br />
[/sourcecode]</p>
<p><span style="font-family:Calibri;font-size:large;">3) Jquery glob (</span><a href="https://github.com/nje/jquery-glob"><span style="font-family:Calibri;font-size:large;">jquery.glob.js</span></a><span style="font-size:large;"><span style="font-family:Calibri;">)</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">Globalization plugin can be used to localize the website to any region.</span></span><br />
<span style="font-size:large;"><span style="font-family:Calibri;">You want to globalize or localize your own plugin then use this plugin.</span></span><br />
<span style="font-size:large;"><span style="font-family:Calibri;">Features:</span></span><br />
<span style="font-size:large;"><span style="font-family:Calibri;">1.Supports over 350 different cultures, including country-specific cultures and language, country-neutral cultures.</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">2.Culture information for each culture is available through a simple data structure, accessible to plugins for their own purposes.</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">3.Supports formatting dates to any of these cultures, including those that have non-Gregorian calendars, Gregorian calendars with a year offset, and calendars with multiple Eras.</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">4.Supports formatting numbers to strings as numbers, currency, or percentages, to any of these cultures, including those with very special formatting rules, such as number group sizes that differ between currency and percentages, or have a different number of digits.</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">5.Supports parsing dates and numbers from the culture specific string representation of them back into JavaScript dates and numbers.</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">6.Supports localization through a localize() API that handles selecting the best known match automatically.</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">7.Supports the Accept-Language header value as-is, to select the culture best suited to the user per their browser settings.</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">8.Extensibility allows for plugins to access and add to the culture information, including cultures it does not already support.</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">9.Retrofitted the jQueryUI&nbsp;DatePicker plugin to use this plugin, rather than its existing globalization support. This was fairly simple to do and immediately opens up the range of cultures supported by the plugin to the full set of cultures supported by jQuery.glob.js.</span></span></p>
<p><span style="font-size:large;"><span style="font-family:Calibri;">Let’s see below example we want to use the date picker and make it globalize so that in any country if we use this then it will show the calendar on their language.</span></span></p>
<p>[sourcecode language="javascript"]&lt;/span&gt;<br />
&lt;select id=&quot;&lt;span class=&quot;&gt;selectCulture&quot;&gt;&lt;/select&gt;<br />
&lt;option&gt; Loading...&lt;/option&gt;<br />
&lt;/select&gt;<br />
&lt;div id=&quot;picker&quot;&gt;<br />
&lt;/div&gt;<br />
//populate select list<br />
var select = $(&quot;#selectCulture&quot;).get(0);<br />
select.options.length = 0;<br />
$.each($.cultures, function ( ) {<br />
select.options[select.options.length] = new Option (this.englishName, this.name);<br />
});</p>
<p>$(&quot;#selectCulture&quot;).change(function () {<br />
//set culture form select list<br />
$.preferCulture(this.value);</p>
<p>//Destroy and create datepicker<br />
$(&quot;#picker&quot;).datepicker(&quot;destroy&quot;).datepicker({<br />
changeMonth:true,<br />
changeYear : true<br />
});<br />
});<br />
&lt;/script&gt;<br />
&lt;span style=&quot;font-family: &lt;span class=;&quot;&gt;Calibri&lt;/span&gt;; font-size: large;&quot;&gt; [/sourcecode]		</p>
