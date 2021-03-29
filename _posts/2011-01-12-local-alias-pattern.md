---
title: Local Alias pattern
date: 2011-01-12T05:00:06.000Z
published: true
comments: true
social-share: true
categories:
  - designpatterns
  - javascript
tags:
  - csharp
  - designpattern
  - javascript
description: Local Alias pattern
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p>
				In any jQuery Plugin there JavaScript local alias pattern is being used as a best practice. They have localized the global jQuery object as an alias $. It is a handy and popular pattern for JavaScript developer however, that is not very well know from C# developers or fledging JavaScript people.<br />
Local alias pattern has 3 benefits:<br />
1)      It allows using short-cut custom name for a global namespace, thus shortening the code writings, page size decreases.<br />
2)      It does not populates the global scope variables<br />
3)      It allows us to make global variable to make it localize and thus faster to refer the variable.<br />
As we know to refer the global variable is slower than to referring the local scoped variable.</p>
<p>[sourcecode language="javascript"]</p>
<p>See the below example:<br />
(function ($) {<br />
        $.fn.myPlugin : function(){<br />
        …//new plugin code.<br />
}<br />
}<br />
)(jQuery)</p>
<p>[/sourcecode]</p>
<p>In the above code jQuery object is being passed as an argument to the self executing function which is being aliased by $. Therefore, inside the function we can use the alias $ without any hesitation as it is referring to the jQuery object.</p>
<p>If we had just used $ as an alias to jQuery without passing it as an argument and bringing it inside out local scope then there would have lot of chances that in some other JavaScript library $ may be overridden by some other object or value and it might have broke our code.<br />
In below code if you see window object is being passed as an argument.</p>
<p>[sourcecode language="javascript"]</p>
<p>(function( window, undefined ) {<br />
//jquery code..<br />
// Expose jQuery to the global objectwindow.jQuery = window.$ = jQuery;<br />
}) (window);</p>
<p>[/sourcecode]</p>
<p>By passing one argument “window” while calling it, we are able to localize the window object. The second argument is not being passed therefore; the 2nd parameter would be assigned as undefined.<br />
There is a chance that in somewhere else the undefined is assigned with some other value that may be overridden by the jQuery code therefore, in jQuery function they have made undefined as a local parameter so that they can use the undefined without worrying about the external world.<br />
By making our object locale we are not populating the global scope with other variables.</p>
<p>[sourcecode language="javascript"]</p>
<p>namespace Rupesh.AliasDemo {<br />
    using System;<br />
    using System.Collections;<br />
    using CountriesCode = Utility.Constant.Countries;</p>
<p>[/sourcecode]</p>
<p>In above code you can see that one alias has been created for Utility.Constants.Countries as CountriesCode.<br />
So now under the Rupesh.AliasDemo namespace in each class, CountriesCode can be used as shortcut alias instead of writing the whole name (Utility.Constant.Countries).<br />
This will make more easiness while writing the code, will save time and number of lines of code.<br />
After knowing this I am vastly using this pattern in my C# as well as JavaScript code.		</p>
