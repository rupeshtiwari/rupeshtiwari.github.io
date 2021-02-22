---
title: Use Existing provider practical example
date: 2019-07-08T14:26:39.000Z
published: true
comments: true
social-share: true
categories:
  - Angular
  - Dependency Injection
tags:
  - Angular
  - Dependency Injection
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>As we know UseExisting provider configures the Injector to return a value of another UseExisting token. Through this provider, we can use already existing instance or object. Let’s discuss one practical example of UseExisting provider which is present in angular itself.</p>
<p>Inside the angular code base you will see library called as browser, inside that they have some implementation for sanitization which means they want to check whether security wise things are correct or not. Sanitizer is used by the views to sanitize potentially dangerous values. DomSanitizer and eDomSanitizerImpl are two subclasses used in Sanitizer.</p>
<p>So basically we have two abstract classes and one implementation class for sanitizer. In video session <a href="https://www.youtube.com/watch?v=avIl5dK_s2k" target="_blank" rel="noopener noreferrer"><strong>Use Existing Practical Example | useExisting | Angular | Tutoria</strong></a><strong>l<em> </em></strong>we have explained practical example of UseExisting provider type in detail. This is the real world example that angular uses with in itself. So mostly UseExisting provider is framework related stuff that shows capability of both Sanitizer &amp; domSanitizer.</p>
<p><img class="alignnone size-full wp-image-2406" src="{{ site.baseurl }}/assets/2019/07/85.png" alt="" width="790" height="398" /></p>
<p>DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing values to be safe to use in the different DOM contexts. In specific situations, it might be necessary to disable sanitization. Users can bypass security by constructing a value with one of the bypassSecurityTrust methods, and then binding to that value from the template. We can call one of the following methods depending upon the context, to disable Angular’s built-in sanitization.</p>
<ul>
<li>bypassSecurityTrustHtml</li>
<li>bypassSecurityTrustScript</li>
<li>bypassSecurityTrustStyle</li>
<li>bypassSecurityTrustUrl</li>
<li>bypassSecurityTrustResourceUrl</li>
</ul>
<p><iframe src="https://www.youtube.com/embed/avIl5dK_s2k" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
