---
layout: post
title: Finding JS Memory leaks with chrome development tools
date: 2019-07-21 12:23:39.000000000 -04:00
type: post

published: true
password: ''
status: publish
categories:
- JavaScript
tags:
- fixing memory issue
- fullstackmaster
- heap
- JavaScript
- rupesh tiwari
meta:
  qode_page_background_image_fixed: 'yes'
  _edit_last: '1'
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1610887330;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:320;}i:1;a:1:{s:2:"id";i:850;}i:2;a:1:{s:2:"id";i:2248;}}}}
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _b2s_post_meta: |-
    a:6:{s:8:"og_title";s:53:"Finding JS Memory leaks with chrome development tools";s:7:"og_desc";s:155:"Memory IssuesTrouble shooting memory issues in web application is very important and it needs careful understanding of memory analysis. There are various m";s:8:"og_image";s:83:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/06/Thumbnail-Final-Design.png";s:10:"card_title";s:53:"Finding JS Memory leaks with chrome development tools";s:9:"card_desc";s:160:"
    Memory Issues



    Trouble shooting memory issues in web application is very important and it needs careful understanding of memory analysis. There are various m";s:10:"card_image";s:83:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/06/Thumbnail-Final-Design.png";}
  slide_template: default
  _yoast_wpseo_primary_category: '195'
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '60'
  wpmm_postgrid_views: '1399'
  _qode-like: '0'
  _thumbnail_id: '2366'
  _oembed_46444233a23be2c73698df386300ca8e: <iframe title="js-memory-leak - StackBlitz"
    class="wp-embedded-content" sandbox="allow-scripts" security="restricted" src="https://stackblitz.com/edit/js-memory-leak?embed=1#?secret=fjFmRt9Qnw"
    data-secret="fjFmRt9Qnw" height="400" width="745"></iframe>
  _oembed_time_46444233a23be2c73698df386300ca8e: '1561673428'
  _oembed_3988cfd03fe99ff8241c64c6ef925f8e: <iframe title="js-memory-leak - StackBlitz"
    class="wp-embedded-content" sandbox="allow-scripts" security="restricted" src="https://stackblitz.com/edit/js-memory-leak?ctl=1&#038;embed=1&#038;file=index.html&#038;hideExplorer=1&#038;hideNavigation=1&#038;view=preview#?secret=3rixrxvzxP"
    data-secret="3rixrxvzxP" height="400" width="745"></iframe>
  _oembed_time_3988cfd03fe99ff8241c64c6ef925f8e: '1561673488'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/finding-js-memory-leaks-with-chrome-development-tools/"
---
<p><!-- wp:heading --></p>
<h2>Memory Issues</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Trouble shooting memory issues in web application is very important and it needs careful understanding of memory analysis. There are various memory issue can happens to your website out of them <strong>Memory Leak </strong>is very dangerous one which makes your page cumulatively slow and finally stuck and die at certain point and hence incur business loss. Therefore, I will focus more on Memory Leak issue in this article. Chrome Development tool has done a fantastic job by giving many handy tools to learn about your website performance. In this article I will explain how to use Chrome Performance Tool to find out the memory leak in your website. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3>There are 3 types of memory issues found in websites and they are as following:</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>1- <strong>Performance is bad consistently</strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Symptom of <strong>Memory Bloat: </strong>Page is using more memory than its capacity. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>2- <strong>Performance is delayed or appears to pause frequently</strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Garbage Collecting can effect performance </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>3- <strong>Performance gets progressively worse over time</strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>This is a symptom of <strong>Memory Leak</strong>. Page uses more and more memory over time and the browser slows down and page stop responding. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>How to find Memory Leak </h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Heap Allocation &amp; Heap Snapshots in Chrome Development Tool.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>What is Heap ?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>It is a data-structure that holds the entire page JavaScript data in-memory. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:quote --></p>
<blockquote class="wp-block-quote"><p>In order find out the Memory Leak in your website you need to understand 2 things 1) <strong>Heap Allocations </strong>2) <strong>Heap Snapshots</strong></p>
</blockquote>
<p><!-- /wp:quote --></p>
<p><!-- wp:heading --></p>
<h2>Heap Allocations Definitions</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Heap Allocations find out when new memory is being allocated in your JavaScript heap &amp; visualize memory usages over time. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>In Chrome Development Tool <strong>Allocation sampling</strong> is the tool to record JavaScript allocation over time used to isolate the memory leaks. If you see gradual increase on stacks then you know there is memory leak going on. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"id":2333} --></p>
<figure class="wp-block-image"><img src="{{ site.baseurl }}/assets/2019/07/image.png?fit=1024%2C322&amp;ssl=1" alt="" class="wp-image-2333" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:heading --></p>
<h2>Heap Snapshot definition</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p> Heap Snapshots identify detached DOM trees this is very common cause of memory leaks. If there is a memory leak then where is the memory leak? Heap snapshot is way to show how the memory is distributed across the JavaScript objects and DOM Nodes.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"id":2335} --></p>
<figure class="wp-block-image"><img src="{{ site.baseurl }}/assets/2019/07/image-1.png?fit=1024%2C308&amp;ssl=1" alt="" class="wp-image-2335" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p>If I take the first snapshot at certain time then you will see below screen:</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"id":2337} --></p>
<figure class="wp-block-image"><img src="{{ site.baseurl }}/assets/2019/07/image-3.png?fit=1024%2C469&amp;ssl=1" alt="" class="wp-image-2337" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:heading --></p>
<h2>How to Compare Heap Snapshots</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Sometimes it is important to know where the memory leak is happening by comparing the various snapshots. You can take a heap snapshots at different point of times and chrome dev tool will create the snapshots. Then you can compare the available snapshots using the dev tool.. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>When you select compare option in dev tool then you will see below page. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"id":2342} --></p>
<figure class="wp-block-image"><img src="{{ site.baseurl }}/assets/2019/07/image-4.png?fit=1024%2C482&amp;ssl=1" alt="" class="wp-image-2342" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3>Heap snapshots sections for memory leak analysis</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>You will discover 3 important sections in heap snapshot comparison that I personally use to track memory leak.  </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:list {"ordered":true} --></p>
<ol>
<li><strong>New</strong>
<ol>
<li>New things added in JavaScript or DOM </li>
</ol>
</li>
<li><strong>Deleted</strong>
<ol>
<li>How many nodes or JavaScript elements are deleted. </li>
</ol>
</li>
<li><strong>Delta</strong>
<ol>
<li><strong>Plus number :</strong>describes in next snapshot you got extra memory allocation.  </li>
<li><strong>Zero</strong>: describes all cleared</li>
<li><strong>Negative number: </strong>describes if more elements got deleted. </li>
</ol>
</li>
</ol>
<p><!-- /wp:list --></p>
<p><!-- wp:image {"id":2363} --></p>
<figure class="wp-block-image"><img src="{{ site.baseurl }}/assets/2019/07/image-8.png" alt="" class="wp-image-2363" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p>You should focus more on the numbers with plus sign, you need to dig more on this tree structure. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Garbage collected dom elements (GOOD)</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>When an HTML element is showing on the page and functional it is attached to the DOM. Therefore, garbage collector checks for these DOM elements and it will not remove them fully from the page. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"id":2345,"width":794,"height":410} --></p>
<figure class="wp-block-image is-resized"><img src="{{ site.baseurl }}/assets/2019/07/image-5.png" alt="" class="wp-image-2345" width="794" height="410" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p>When we remove some DOM element from the page by writing program then those elements are no longer with DOM and hence they are called as detached elements. These kind of detached elements are target for Garbage Collector. All detached DOM Elements are cleared from the page by Garbage Collector and their withhold memory should be reclaimed by the page. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"id":2347,"width":794,"height":402} --></p>
<figure class="wp-block-image is-resized"><img src="{{ site.baseurl }}/assets/2019/07/image-6.png?fit=1024%2C519&amp;ssl=1" alt="" class="wp-image-2347" width="794" height="402" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:heading --></p>
<h2>Detached DOM Elements ( BAD )</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>When you have some DOM elements which are removed from the DOM however they are still connected or referenced with the JavaScript Objects or Window Object then those elements are called as <strong>DETACHED ELEMENTS</strong>. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"id":2351} --></p>
<figure class="wp-block-image"><img src="{{ site.baseurl }}/assets/2019/07/image-7.png" alt="" class="wp-image-2351" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p>These are the elements which are not Garbage Collected and they are still hanging around on the Page. They keep the memory allocations and when you have many </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>elements such that then our page  starts accumulating memory. Hence our page starts having <strong>Memory Leak </strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Example of bad code causing detached dom elements</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>This is a simple website where you can add todo list. After adding couple of todo list you can select <code>escape</code> button from keyboard to go to the home page. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><a href="https://js-memory-leak.stackblitz.io">https://js-memory-leak.stackblitz.io</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"id":2422} --></p>
<figure class="wp-block-image"><img src="{{ site.baseurl }}/assets/2019/07/image-1.png" alt="" class="wp-image-2422" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p>Lets see what is the problem with the cod.e.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"id":2423} --></p>
<figure class="wp-block-image"><img src="{{ site.baseurl }}/assets/2019/07/image-2.png" alt="" class="wp-image-2423" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p>Lets see what is the problem with this code why it is creating a memory leak problem.    👮 </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><strong><a rel="noreferrer noopener" aria-label="Download Source Code Link (opens in a new tab)" href="https://stackblitz.com/edit/js-memory-leak" target="_blank">Download Source Code Link</a></strong>: https://stackblitz.com/edit/js-memory-leak</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">import './style.css';&lt;br>
import $ from 'jquery';</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:enlighter/codeblock {"language":"js"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">$(function () {
  var addMoreTodo = $('&lt;button class="btn btn-primary" id="addMoreTodo">Add More Todo...&lt;/button>');
  var addTodoForm = $(`
  &lt;form>
  &lt;div id="addTodoForm">
		&lt;div class="form-group">
			&lt;label for="formControlRange">Todo Item&lt;/label>
      &lt;input class="form-control-range" id="todotext" />
		&lt;/div>
    &lt;div style="padding-top:3px">
      &lt;button  type="submit" class="btn btn-primary" id="addtodo" >Add Todo&lt;/button> 
    &lt;/div>
  &lt;/div>&lt;/form>`);

  $('#container').html(addTodoForm);
  focusTodo();

  window.addEventListener('keyup', function (e) {
    if (e.which == 27) {
      $('#container').html(addMoreTodo);
      $('#addMoreTodo').focus();
      $('#addMoreTodo').on('click', function () {
        $('#container').html(addTodoForm);
        focusTodo();
        return false;
      });
    }
  });
  $('#addtodo').on('click', function () {
    const todo = $('#todotext').val();
    $('#list').append(`&lt;li class="list-group-item"> ${todo} &lt;/li>`);
    $('#todotext').val('').focus();
    return false;
  })
  function focusTodo() {
    $('#todotext').focus();
  }
});</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">window.addEventListener('keyup', function (e) {    if (e.which == 27) {      $('#container').html(addMoreTodo); </pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:paragraph --></p>
<p>In the above code every time we select escape button we are adding <code>Add More Todo</code> Button into the DOM and we not removing the event handlers  from the previous DOM. Therefore, the old DOM is not getting cleared or claimed by Garbage collector. Since the old DOM which got replaced has still event handlers connected to Window object, garbage collector will not remove it from memory. And therefore, every time we select escape button we create one <code>Detached Element</code>. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:enlighter/codeblock {"language":"js"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">$('#addMoreTodo').on('click', function () {        $('#container').html(addTodoForm);        focusTodo();        return false;      });</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:paragraph --></p>
<p>In above code also you notice when click on <code>Add More Todo</code> button we are replacing the container HTM with <code>Add Todo Form</code> without even properly destroying the old todo form. Therefore old todo form is still having click event handler which is connected with window object in JavaScript world. Hence Garbage collector can not clean up it and we start creating a memory allocation which never going to be clean up. The more todo we add the more memory allocations we create and our website will become sluggish and slow. Hence we created a memory leaking website. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Lets see next how to fix this issue. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Fixing detached elements and removing memory leak</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>We will do 2 things: </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:list {"ordered":true} --></p>
<ol>
<li>Using jQUery elements caching. That means we will query the dom elements and cache it in a local variable so that we do not need to query every time to them. </li>
<li>We will do show hide rather replacing HTML on top of each other. When we select <code>escape</code> button then it will toggle the visibility of <code>add todo form</code> and <code>add more todos</code> button. </li>
</ol>
<p><!-- /wp:list --></p>
<p><!-- wp:enlighter/codeblock {"language":"js"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">
// FIXING MEMORY LEAK

$(function () {
  var addMoreTodo = $('&lt;button class="btn btn-primary" id="addMoreTodo">Add More Todo...&lt;/button>');
  var addTodoForm = $(`
  &lt;form>
  &lt;div id="addTodoForm">
		&lt;div class="form-group">
			&lt;label for="formControlRange">Todo Item&lt;/label>
      &lt;input class="form-control-range" id="todotext" />
		&lt;/div>
    &lt;div style="padding-top:3px">
      &lt;button  type="submit" class="btn btn-primary" id="addtodo" >Add Todo&lt;/button> 
    &lt;/div>
  &lt;/div>&lt;/form>`);

  $('#container').append(addTodoForm);

  $('#container').append(addMoreTodo);

  addMoreTodo.on('click', function () {
    addTodoForm.toggle();
    addMoreTodo.toggle();
    focusTodo();
    return false;
  });

  var list = $('#list');
  var todoText = $('#todotext');

  addTodoForm.find('#addtodo').on('click', function () {
    const todo = $('#todotext').val();
    list.append(`&lt;li class="list-group-item"> ${todo} &lt;/li>`);
    todoText.val('').focus();
    return false;
  })

  addTodoForm.hide();

  window.addEventListener('keyup', function (e) {
    if (e.which == 27) {
      addMoreTodo.toggle().focus();
      addTodoForm.toggle();
    }
  });

  function focusTodo() {
    $('#todotext').focus();
  }
});</pre>
<p><!-- /wp:enlighter/codeblock --></p>
