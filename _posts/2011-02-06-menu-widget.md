---
title: Menu Widget
date: 2011-02-06T22:42:47.000Z
published: true
comments: true
social-share: true
categories:
  - jQuery
tags:
  - JQuery
  - jquery plugin
description: Menu Widget in jQuery
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>
				I was trying to make my own menu widget using jQuery and  I came with this below Widget.</p>
<p>[sourcecode language="javascript"]</p>
<p>//Menu Widget created by Rupesh<br />
(function ($) {</p>
<p>    JDQMenu = {</p>
<p>        options: {</p>
<p>          items: { &quot;Reports&quot;:[{</p>
<p>                      &quot;File&quot; : { &quot;Report1&quot;:&quot;#&quot;,&quot;Report2&quot;:&quot;#&quot;,&quot;Report3&quot;:&quot;#&quot; }</p>
<p>                      ,&quot;Edit&quot; : { &quot;Report4&quot;:&quot;#&quot;,  &quot;Report5&quot;:&quot;#&quot; }</p>
<p>                      ,&quot;Report&quot; : { &quot;Report6&quot;:&quot;#&quot;,  &quot;Report7&quot;:&quot;#&quot; }</p>
<p>                      ,&quot;Help&quot; : {&quot;How to see Reports&quot;:&quot;#&quot;}</p>
<p>                  }]</p>
<p>                  ,&quot;Clients&quot; : [{</p>
<p>                      &quot;Search&quot; : { &quot;Client1&quot;:&quot;#&quot;,&quot;Client2&quot;:&quot;#&quot;,&quot;v3&quot;:&quot;#&quot; }</p>
<p>                      ,&quot;Edit&quot; : { &quot;Client4&quot;:&quot;#&quot;,  &quot;Client5&quot;:&quot;#&quot; }</p>
<p>                      ,&quot;Help&quot; : {&quot;How to see Clients&quot;:&quot;#&quot;}</p>
<p>                  }]</p>
<p>                  ,&quot;Tools&quot; : [{</p>
<p>                      &quot;View&quot;: { &quot;Tool1&quot;:&quot;#&quot;,&quot;Tool2&quot;:&quot;#&quot;,&quot;Tool3&quot;:&quot;#&quot;}</p>
<p>                       ,&quot;Help&quot; : {&quot;How to find Tools&quot;:&quot;#&quot;}</p>
<p>                  }]</p>
<p>            }</p>
<p>            ,selected_menu : &quot;Reports&quot;</p>
<p>        }</p>
<p>        ,_init : function ( ) {</p>
<p>           this._create_menu( );</p>
<p>        }</p>
<p>        ,_create_menu : function ( ) {</p>
<p>           var that= this,el = that.element,itms=that.options.items,sel=$.trim(that.options.selected_menu);</p>
<p>           if( sel !=&quot;default&quot;) {</p>
<p>           //save element in widget cache</p>
<p>            var data = $(this).data(sel);</p>
<p>                //refresh the menu</p>
<p>                el.empty();</p>
<p>                //take element from inner widget cache data</p>
<p>                if(data) {</p>
<p>                    el.append(data);</p>
<p>                } else {</p>
<p>                    if( itms[sel] ) {</p>
<p>                        var menu_itms = itms[sel][0];</p>
<p>                        $.each(menu_itms , function ( i,v ) {</p>
<p>                            el.append( $(&quot;<br />
	&lt;li&gt;&quot;).append( $(&quot;&lt;a&gt;&quot;,{&quot;class&quot;:&quot;menu_trigger&quot;, &quot;href&quot;:&quot;#&quot;,&quot;text&quot;:i}) ).append(&quot;&quot;) );&lt;/a&gt;&lt;/li&gt;<br />
                            $.each(v,function(n,k){</p>
<p>                                el.find(&quot;ul#&quot;+i+&quot;&quot;).append($(&quot;&lt;a&gt;&quot;,{&quot;href&quot;:k,&quot;text&quot;:n}));&lt;/a&gt;</p>
<p>                            })</p>
<p>                        })</p>
<p>                       $(this).data(sel,el.find(&quot;li&quot;));</p>
<p>                   }</p>
<p>                }</p>
<p>                //Show the menu by triggering it</p>
<p>                $(&quot;a.menu_trigger&quot;).first().trigger(&quot;mousedown&quot;);</p>
<p>           }</p>
<p>        }</p>
<p>        ,show_menu : function (el) {</p>
<p>            el  = el.replace(&quot;#&quot;,'');</p>
<p>            this.options.selected_menu = el;</p>
<p>            this._create_menu( );</p>
<p>        }</p>
<p>    };</p>
<p>    $.widget(&quot;ui.JDQMenu&quot;, JDQMenu);    </p>
<p>})( jQuery );</p>
<p>[/sourcecode]<br />
Now for using this widget you just have to add one ul element and call our JDQMenu widget's.<br />
[sourcecode language="javascript"]<br />
&lt;ul id=&quot;menu&quot;&gt;<br />
&lt;/ul&gt;<br />
&lt;script type=&quot;text/javascript?<br />
$(&quot;#menu&quot;).JDQMenu();<br />
&lt;/script&gt;<br />
[/sourcecode]		</p>
