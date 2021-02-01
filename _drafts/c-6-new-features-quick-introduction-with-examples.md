---
layout: post
title: C# 6 New Features quick introduction with examples
date:
type: post

published: false
password: ''
status: draft
categories:
- C#
tags:
- c# 6
meta:
  qode_post_style_masonry_gallery: default
  qode_post_style_masonry_date_image: full
  qode_hide-featured-image: 'no'
  _edit_last: '1'
  qode_show-sidebar: default
  qode_page_background_image_fixed: 'yes'
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:2:{s:32:"37550b67d263a3ce789993dc25046c5f";a:2:{s:7:"expires";i:1560136907;s:7:"payload";a:6:{i:0;a:1:{s:2:"id";i:311;}i:1;a:1:{s:2:"id";i:320;}i:2;a:1:{s:2:"id";i:278;}i:3;a:1:{s:2:"id";i:361;}i:4;a:1:{s:2:"id";i:217;}i:5;a:1:{s:2:"id";i:1084;}}}s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1560136944;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:311;}i:1;a:1:{s:2:"id";i:320;}i:2;a:1:{s:2:"id";i:278;}}}}
  _publicize_twitter_user: "@rupeshtiwari_co"
  gallery_type: slider
  video_format_choose: youtube
  _b2s_post_meta: a:6:{s:8:"og_title";s:50:"C# 6 New Features quick introduction with
    examples";s:7:"og_desc";s:243:"C# 6 has nice clean way of writing code. I loved
    few features that I personally liked and wanted to share to you. You will learn
    them by reading this article. Features like Expression Bodied Functions, Null
    Conditional Operators and many more.";s:8:"og_image";s:0:"";s:10:"card_title";s:50:"C#
    6 New Features quick introduction with examples";s:9:"card_desc";s:243:"C# 6 has
    nice clean way of writing code. I loved few features that I personally liked and
    wanted to share to you. You will learn them by reading this article. Features
    like Expression Bodied Functions, Null Conditional Operators and many more.";s:10:"card_image";s:0:"";}
  slide_template: default
  _yoast_wpseo_primary_category: '1'
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '60'
  wpmm_postgrid_views: '11'
  _qode-like: '0'
  qode_page_background_color: "#5204e2"
  post_layout_meta: default
  qode_header-style-on-scroll: 'yes'
  qode_animate-page-title: text_right_left
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/"
excerpt: C# 6 has nice clean way of writing code. I loved few features that I personally
  liked and wanted to share to you. You will learn them by reading this article. Features
  like Expression Bodied Functions, Null Conditional Operators and many more.
---
<p><!-- wp:quote --></p>
<blockquote class="wp-block-quote"><p>C# 6 has nice clean way of writing code. I loved few features that I personally liked and wanted to share to you. You will learn them by reading this article. Features like Expression Bodied Functions, Null Conditional Operators and many more.</p>
</blockquote>
<p><!-- /wp:quote --></p>
<p><!-- wp:heading --></p>
<h2 id="expression-bodied-functions">Expression-bodied functions</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="before-c-6">Before C# 6</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">public bool IsReadyForSale()
{
   return Status == “Ready”;
}

</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="in-c-6">In C# 6</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">
public bool IsReadyForSale() => Status == “Ready”;

</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:heading --></p>
<h2 id="null-conditional-operators">Null conditional Operators</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="before-c-6-1">Before C# 6</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">if (selectedEmployee != null &amp;&amp; selectedEmployee.Address != null) {
  return selectedEmployee.Address.StreetAddress;
}
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="in-c-6-1">In C# 6</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">return selectedEmployee?.Address?.StreetAddress
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:heading --></p>
<h2 id="string-interpolations-instead-of-stringformat">String Interpolations instead of string.format</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="before-c-6-2">Before C# 6</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">string.Format("EmployeeId can not exceed length of {0} characters", MaximumLength));
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="in-c-6-2">In C# 6</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">$"EmployeeId can not exceed length of {MaximumLength} characters");
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:heading --></p>
<h2 id="auto-property">Auto Property</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="before-c-6-3">Before C# 6</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">public EmployeeId EmployeeId { get; private set; }
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="in-c-6-3">In C# 6</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">public EmployeeId EmployeeId { get}
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:heading --></p>
<h2 id="auto-property-with-string-interpolation-in-c-6">Auto Property with string interpolation in C# 6</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">public string FullName => $"{FirstName} {LastName}";
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:heading --></p>
<h2>References</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Ref: <a href="http://carlosschults.net/en/csharp-6-features/">http://carlosschults.net/en/csharp-6-features/</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Ref: <a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated">https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated</a></p>
<p><!-- /wp:paragraph --></p>