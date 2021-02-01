---
layout: post
title: How to do Html Form Validation using RxJS
date: 2019-03-04 19:09:44.000000000 -05:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- RxJS
tags:
- validation
meta:
  _edit_last: '1'
  _thumbnail_id: '1446'
  _wpas_done_all: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1608763078;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:1084;}i:1;a:1:{s:2:"id";i:779;}i:2;a:1:{s:2:"id";i:2158;}}}}
  _qode-like: '0'
  wpmm_postgrid_views: '1277'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  slide_template: default
  _wpcom_is_markdown: '1'
  _b2s_post_meta: a:6:{s:8:"og_title";s:41:"How to do Html Form Validation using RxJS";s:7:"og_desc";s:247:"Did
    you know you can use RxJS simple operators and do html form validation re-actively?
    Well I learn RxJS operators by implementing them in real world project. In this
    post I will explain combineLatest operator and its use in real problem solving.";s:8:"og_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/03/htm-rxjs.jpg";s:10:"card_title";s:41:"How
    to do Html Form Validation using RxJS";s:9:"card_desc";s:247:"Did you know you
    can use RxJS simple operators and do html form validation re-actively? Well I
    learn RxJS operators by implementing them in real world project. In this post
    I will explain combineLatest operator and its use in real problem solving.";s:10:"card_image";s:69:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/03/htm-rxjs.jpg";}
  _yoast_wpseo_primary_category: '206'
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '90'
  _inpost_head_script: |-
    a:1:{s:19:"synth_header_script";s:66:"<script src="https://gumroad.com/js/gumroad-embed.js"></script>
     ";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/form-validation-using-rxjs/"
excerpt: "\n\t\tDid you know you can use RxJS simple operators and do html form validation
  re-actively? Well I learn RxJS operators by implementing them in real world project.
  In this post I will explain combineLatest operator and its use in real problem solving.
  \t\t\t\t"
---
<p><!-- wp:paragraph --></p>
<p>Did you know you can use RxJS simple operators and do html form validation re-actively? Well I learn RxJS operators by implementing them in real world project. In this post I will explain <code>combineLatest</code>&nbsp;operator and its use in real problem solving.&nbsp;</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Sample HTML Form</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>This is a very simple html form however once you understand the concept you can build any complex form. For now I am sticking with this simple form. Feel free to add more fields on this.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:enlighter/codeblock {"language":"html"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="html" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">&lt;form action="#">
   First Name: &lt;input type="text" id="firstName">
    &lt;br>
   Last Name: &lt;input type="text" id="lastName">
  &lt;/form>
  &lt;div id="message">&lt;/div></pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:block {"ref":3197} /--></p>
<p><!-- wp:heading --></p>
<h2>Validation Code</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>I use <code>fromEvent </code> operator to create observable out of input events of text boxes in the form. Next I will use <strong>RxJS </strong><code>startWith</code> operator to initialize my observables with empty data. Next I am using <strong>RxJS </strong><code>combineLatest</code> operator to create a combination of all of the entries of the form as a single stream of data and doing validation over there to find out is form valid or not.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Finally based on the result I will display form valid true or false in the UI</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:enlighter/codeblock {"language":"js"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">import { fromEvent, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

const messageElement = document.querySelector('#message');
const firstNameElement = document.querySelector('#firstName');
const lastNameElement = document.querySelector('#lastName');

const setMessage = (m) => messageElement.textContent = m;

const firstName$ = fromEvent(firstNameElement, 'input')
  .pipe(
    map(e => (e.target as any).value),
    startWith('')
  );

const lastName$ = fromEvent(lastNameElement, 'input')
  .pipe(
    map(e => (e.target as any).value),
    startWith('')
  );

const isFormValid$ = combineLatest(firstName$, lastName$, (firstName: string, lastName: string) => {
  return firstName !== '' &amp;&amp; lastName !== ''
});

isFormValid$.subscribe((isValid) => {
  setMessage(isValid);
})
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
