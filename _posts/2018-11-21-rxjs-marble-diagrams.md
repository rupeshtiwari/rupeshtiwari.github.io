---
layout: post
title: RxJS Marble Diagrams
date: 2018-11-21 21:29:53.000000000 -05:00
type: post

published: true
comments: true
social-share: true
categories:
- Marble Diagrams
- RxJS
tags:
- Marble Diagrams
- RxJS
meta:
  _wpas_mess: RxJS Marble Diagrams are made to visualize the values emitted from the
    RxJS Observable over timeline. 
  advanced_seo_description: RxJS Marble Diagrams are made to visualize the values
    emitted from the RxJS Observable over timeline.
  _wpas_done_all: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1611957269;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2158;}i:1;a:1:{s:2:"id";i:1039;}i:2;a:1:{s:2:"id";i:45;}}}}
  _thumbnail_id: '1464'
  _publicize_twitter_user: "@roopkt"
  _edit_last: '1'
  _qode-like: '0'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  slide_template: default
  wpmm_postgrid_views: '1821'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/rxjs-marble-diagrams/"
description: "RxJS Marble Diagrams are made to visualize the values emitted from the RxJS
  Observable over timeline.Hi in this article I will explain why we need marble diagrams
  and what are the benefits of Marble Diagrams.\t\t\t\t"
---
<blockquote>RxJS Marble Diagrams are made to visualize the values emitted from the <code>RxJS Observable</code> over timeline.</p></blockquote>
<p>Hi in this article I will explain why we need marble diagrams and what are the benefits of Marble Diagrams.</p>
<h2>Inventor of Rx Marbles</h2>
<p><img src="{{ site.baseurl }}/assets/2018/11/pexels-photo-1670045.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="Man Taking Photo of Brown Decorative Speaker" /></p>
<p>In 2009 Erik Meijer first discovered Marbles concept for Rx project please checkout <a href="https://channel9.msdn.com/Blogs/Charles/Erik-Meijer-Rx-in-15-Minutes">Erik Meijer 15 Minutes Talk Here  </a>It was called Rx Marbles because, it was first created for C# language in Microsoft team.</p>
<h2>Why RxJS Marbles</h2>
<p>RxJS Marbles are helpful to visualize the values coming from observable. In JavaScript we call it <code>RxJS Marbles</code>. Similarly in Java it is called <code>RxJava</code> Marble Diagrams and so on. Marble Diagrams helps us to understand the RxJS Operators and their behavior. Realizing the concept of RxJS Operators is difficult unless you see them how they are effecting the behavior of underneath streams. Therefore, I believe Marble Diagrams are great tool to visualize the patterns of stream events and derive its behavior over time.</p>
<blockquote><p>suppose I told you that RxJS <code>interval</code> method takes an argument of 10 and hence emits only 10 values. This behavior is understandable, since it is a simple example. However, if we have complex operator or collection of operators applied over source/s observables then It is very difficult to understand how values will be emitted in result observable. Therefore, visualizing result values and source values over timeline gives much clarity.</p></blockquote>
<p><a href="https://staltz.com/">André Staltz</a> has created nice website called as <a href="http://rxmarbles.com/">rxmarbles.com </a>that can be used to visualize the marbles and play it out live for major RxJS operators. I am using some pics from same website to show you visual marbles.</p>
<h3>Explaining RxJS method: interval(10)</h3>
<p>[caption id="attachment_784" align="aligncenter" width="1412"]<img class="size-full wp-image-784" src="{{ site.baseurl }}/assets/2018/11/10-values-marble-diagrams-interval-1.png" alt="10 values marble diagrams interval" width="1412" height="166" /> 10 values marble diagrams interval[/caption]</p>
<p>In above diagram one can easily say that okay, I can see 10 circles / marbles with their values. Which is the explanation of method <code>interval(10).</code> So without explaining the behavior of observable you can understand what is its behavior by just viewing its diagram. That is the power of Marble diagrams.</p>
<h2>How to Draw Marble Diagrams</h2>
<p><img class=" aligncenter" src="{{ site.baseurl }}/assets/2018/11/drawing-1313453.jpg" alt="Drawing,draw,drawing,signature" width="753" height="541" /></p>
<p>Marbles are normally drawn by circles which indicates the values. Marbles are drawn over Timeline. Timeline is horizontal line which moves from left to right, it indicates the time passage. In order to indicate the stream is completed we use pipe symbol <code>|</code>and in order for indicating error over timeline we use <code>X</code> symbol<strong>.</strong></p>
<p><strong>Below are the symbols used in order to draw marble diagram.</strong></p>
<ul>
<li><strong>X</strong> error (notification)</li>
<li><strong>|</strong> completion (notification)</li>
<li><strong>O</strong> values (emitted by observable)</li>
<li>-----&gt; Time line</li>
</ul>
<h2>Examples of Marble Diagrams</h2>
<h3>Emitting 10 Values and complete</h3>
<p><img class="size-full wp-image-784" src="{{ site.baseurl }}/assets/2018/11/10-values-marble-diagrams-interval-1.png" alt="10 values marble diagrams interval" width="1412" height="166" /></p>
<p>In above marble diagrams each circle represents marbles and inside the circle you can see the values.  The Pipe symbol at the end indicates on 10th value the stream gets completed. Therefore, here we knew that this is an observable which emitted 10 serial numbers and then complete. That is <code>interval(10)</code> .</p>
<h3>Emitting Value and Error out</h3>
<p>[caption id="attachment_785" align="alignnone" width="1303"]<img class="size-full wp-image-785" src="{{ site.baseurl }}/assets/2018/11/marbles-with-errors.png" alt="marbles with errors" width="1303" height="135" /> 3 values marble diagrams with error[/caption]</p>
<p>In above marble diagrams <code>X</code> symbol represents Error notification and hence this behavior says that this observable emitted 3 values and then error out.</p>
<h2>Marble Diagrams used in Unit Testing</h2>
<p><img class=" aligncenter" src="{{ site.baseurl }}/assets/2018/11/abstract-blur-background-english-multiple-choice-test-picture-id499509690?b=1&amp;k=6&amp;m=499509690&amp;s=612x612&amp;w=0&amp;h=FqCpCmewz0zWaZ9VUWfl1ep6ziwBd8yKA-dNOODRDqs=" alt="Abstract blur background. English multiple choice test" width="650" height="430" /></p>
<p>In order to write RxJS testing now a days marble diagrams are used as domain specific language (<strong>DSL</strong>).  And it is used to write unit test in order to assert observable and operators behavior. There are many node libraries which supports marble testing. Out of that <code>jasmine-marbles</code> is one the famous one. I am creating one pluralsight course where I will be explaining <code>Marble Testing</code>  and please stay tuned to know more about the marble diagrams.</p>
<h2>Marble Diagrams to visualize Operator Behavior</h2>
<p><img class="size-full wp-image-787" style="font-weight: bold; font-size: 1.0625rem;" src="{{ site.baseurl }}/assets/2018/11/operator-behavior-marble-diagrms.png" alt="operator behavior marble diagrams" width="921" height="472" /></p>
<p>The first marble diagram line represents <code>source observable</code> the middle line where <code>flip</code> is written represents the operator. The last line represents the <code>result observable. </code>In the above example we have applied flip operator on source observable and we got result operator.</p>
<h2>Some More Examples of Marble Diagrams</h2>
<p>[caption id="attachment_786" align="alignnone" width="1231"]<img class="size-full wp-image-786" src="{{ site.baseurl }}/assets/2018/11/merge.png" alt="merge operator marble diagram" width="1231" height="527" /> merge operator marble diagram[/caption]</p>
<p>In this above marble diagram we are trying to understand <code>merge</code> operator.</p>
<ul>
<li>The  first <code>source observable</code> emitted 5 values and completed.</li>
<li>The 2nd <code>source observable</code> emitted 2 values and completed.</li>
<li>In the <code>result observable</code> you can see whenever which ever value comes first has been put early. So value 1 from 2nd observable arrives earlier than value 80 from first observable.</li>
</ul>
<h2>Benefits of Marble Diagrams</h2>
<p><img src="{{ site.baseurl }}/assets/2018/11/make-a-difference-picture-id693322828?b=1&amp;k=6&amp;m=693322828&amp;s=612x612&amp;w=0&amp;h=n_wKObBdXdyHCIOwPOYGk0KGc9cl5brJLpufq7NCpug=" alt="Make a Difference" /></p>
<p>There are many benefits however below are the major ones:</p>
<ul>
<li>Makes easy to understand the behavior of observable and operators</li>
<li>Marbles are used in unit testing to make our test more readable, visual and synchronous.</li>
<li>Marble diagrams are used in unit testing also to find out race conditions.</li>
</ul>
<h2>Playground for Marble Diagrams</h2>
<p><img src="{{ site.baseurl }}/assets/2018/11/little-boy-climbs-up-the-ladder-on-the-playground-picture-id535466066?b=1&amp;k=6&amp;m=535466066&amp;s=612x612&amp;w=0&amp;h=8iol5yE8iLF_7gelayJL3UVyrgVMdj6vPVLZlrhMR24=" alt="little boy climbs up the ladder on the playground" /></p>
<p>I always search for playground where I can try my own things. In order to see Marbles drawn automatically from your RxJS Code please go to the <a href="https://rxviz.com/">Animated playground for RxJS Observable</a> it is nice website where you can see the marbles diagrams drawn live based on the RxJS code.</p>
<p>[caption id="attachment_788" align="alignnone" width="1629"]<img class="size-full wp-image-788" src="{{ site.baseurl }}/assets/2018/11/live-marble-diagrams-drawn.gif" alt="live marble diagrams drawn" width="1629" height="358" /> live marble diagrams drawn[/caption]</p>
<p>Please feel free to ask questions , give suggestions and share your thoughts here !</p>
