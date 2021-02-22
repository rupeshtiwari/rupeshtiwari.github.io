---
title: How to kill all node process in your Angular/Node.JS App?
date: 2019-02-27T01:02:04.000Z
published: true
comments: true
social-share: true
categories:
  - javascript
  - NodeJS
tags:
  - npm
description:
  "\n\t\t\t\tYou might be aware of EADDRINUSE  node error in node.js
  application. Where it says address is in use. This is very annoying. It
  happenes if some of the ports are still being in used even though you think
  they are not. What I do is I create a stop script in my node application and I
  call stop to stop all of the existing node processes.\t\t"
toc: true
related: true
share: true
read_time: true
author_profile: true
---

<p><!-- wp:paragraph --></p>
<p>You might be aware of <code>EADDRINUSE </code> node error in node.js application. Where it says address is in use. This is very annoying. It happenes if some of the ports are still being in used even though you think they are not. What I do is I create a stop script in my node application and I call stop to stop all of the existing node processes.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>Error: listen EADDRINUSE 127.0.0.1:8888
    at Object._errnoException (util.js:992:11)
    at _exceptionWithHostPort (util.js:1014:20)
    at Server.setupListenHandle [as _listen2] (net.js:1355:14)
    at listenInCluster (net.js:1396:12)
    at doListen (net.js:1505:7)
    at _combinedTickCallback (internal/process/next_tick.js:141:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/roopkt/2c6b56692081077dbce664eb16104813#kill-all-node-process"></a>Kill all Node Process</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>One option that I prefer to kill all node processes. Be aware that when you do this all of the existing node processes will stop.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/roopkt/2c6b56692081077dbce664eb16104813#how-to-stop-node-process-in-windows"></a>How to stop node process in windows?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>  "stop": "taskkill /f /im node.exe",
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/roopkt/2c6b56692081077dbce664eb16104813#how-to-stop-node-process-in-mac"></a>How to stop node process in Mac?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>  "stop": "killall node",</code></pre>
<p><!-- /wp:code --></p>
