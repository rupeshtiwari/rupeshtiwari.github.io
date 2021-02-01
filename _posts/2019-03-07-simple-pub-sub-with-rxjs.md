---
layout: post
title: How to create RxJS Publish Subscribe Library?
date: 2019-03-07 15:00:08.000000000 -05:00
type: post

published: true
password: ''
status: publish
categories:
- RxJS
- Typescript
tags:
- BehaviorSubject
- filter
- publish
- subscribe
meta:
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1612128943;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2275;}i:1;a:1:{s:2:"id";i:775;}i:2;a:1:{s:2:"id";i:2302;}}}}
  _wpas_done_all: '1'
  _thumbnail_id: '1448'
  _edit_last: '1'
  _qode-like: '0'
  wpmm_postgrid_views: '975'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  slide_template: default
  _b2s_post_meta: a:6:{s:8:"og_title";s:45:"How to create RxJS Publish Subscribe Library?";s:7:"og_desc";s:350:"Did
    you know you can create your own publish-subscribe library for your RxJS project?
    By using BehaviorSubject and filter operator it is possible to create your first
    pub sub library. Publish and Subscribe framework is very helpful to create isolated
    modules. Therefore, I will explain and demonstrate you how can you create your
    own pub sub library.";s:8:"og_image";s:78:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/03/subscribe-library.jpg";s:10:"card_title";s:45:"How
    to create RxJS Publish Subscribe Library?";s:9:"card_desc";s:350:"Did you know
    you can create your own publish-subscribe library for your RxJS project? By using
    BehaviorSubject and filter operator it is possible to create your first pub sub
    library. Publish and Subscribe framework is very helpful to create isolated modules.
    Therefore, I will explain and demonstrate you how can you create your own pub
    sub library.";s:10:"card_image";s:78:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/03/subscribe-library.jpg";}
  _wpcom_is_markdown: '1'
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '90'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/simple-pub-sub-with-rxjs/"
excerpt: "\n\t\t\t\tDid you know you can create your own publish-subscribe library
  for your RxJS project? By using BehaviorSubject and filter operator it is possible
  to create your first pub sub library. Publish and Subscribe framework is very helpful
  to create isolated modules. Therefore, I will explain and demonstrate you how can
  you create your own pub sub library.\t\t"
---
<p><!-- wp:paragraph --></p>
<p>Did you know you can create your own publish-subscribe library for your RxJS project? By using <code>BehaviorSubject</code> and <code>filter</code> operator it is possible to create your first pub sub library. Publish and Subscribe framework is very helpful to create isolated modules. Therefore, I will explain and demonstrate you how can you create your own pub sub library.  </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Model Each message as Action</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>In your project model every messages as action. Imagine whatever events are happening, any user interactions, any side effects etc everything as Action. It is an abstraction over <code>events</code> and <code>commands</code> . An Action can look like below.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>The Action File</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Action can have type so that you can identify them independently. Your action can have other properties as you wish like <code>payload</code> etc. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>export  interface Action {
  type: string;
}
export const INIT = 'myapp [init]';
export const initAction = { type: INIT }</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p><code>INIT</code> is an action type indicates that your application is initiated. This is just an example you can create your own Action Type. Finally <code>initAction</code> is an action.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>How to manage all Actions within Your App?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>We do not want the actions to be produce repetitively whenever a new subscriber subscribes for the same action type. Therefore, we have to make our actions <code>Hot</code>Observable. Also we want to start up our pub sub framework with an <code>INIT </code>action to indicate our library and app both are ready. Hence I will use <code>BehaviorSubject</code> from RxJS. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>import { BehaviorSubject } from 'rxjs';
import {initAction, Action} from './action';

export const actions$ = new BehaviorSubject&lt;Action>(initAction);</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Now we are ready to publish and filter desired action on our action stream. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Manage Publish an Action</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>export const publish = (action) => actions$.next(action);</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p><code>publish</code>is a method that will next on our <code>actions$</code>subject. So that whoever else has subscribed to this action will get their subscription callback method invoked with the <code>action.</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Manage Filtering Desired Action</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Now its time to allow filtering desired action from the stream of actions <code>actions$</code> I will use <code>filter</code> operator from RxJS and do filter by matching <code>type</code>of action. Therefore, let me create a  new method called as <code>ofType</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>export const ofType = (actionType) => actions$.pipe(filter(a => a.type === actionType));
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2>Pub Sub Final Code </h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Our library work is done and here is my final code.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"align":"center","id":1089} --></p>
<div class="wp-block-image">
<figure class="aligncenter"><img src="{{ site.baseurl }}/assets/2019/03/background-beverage-career-1855233.jpg?fit=840%2C628&amp;ssl=1" alt="" class="wp-image-1089" /></figure>
</div>
<p><!-- /wp:image --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>// action.ts

export  interface Action {
  type: string;
}
export const INIT = 'myapp [init]';
export const initAction = { type: INIT };

// actions.ts

import { BehaviorSubject } from 'rxjs';
import {initAction, Action} from './action';
import { filter } from 'rxjs/operators';


export const actions$ = new BehaviorSubject&lt;Action>(initAction);

export const publish = (action) => actions$.next(action);

export const ofType = (actionType) => actions$.pipe(filter(a => a.type === actionType));

</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2>How to consume RxJS actions?</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>This is very interesting and simple. I am very excited to show you this in action. Lets first try to listen to <code>INIT</code>action and react on it.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>import * as actions from './actions';
import { INIT } from './action';

actions.ofType(INIT).subscribe((action)=>{
  console.log('received message', action);
  // You can do your project initial setup here
  // like brining some data from server etc. 
});
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:image {"id":1090,"width":458,"height":100} --></p>
<figure class="wp-block-image is-resized"><img src="{{ site.baseurl }}/assets/2019/03/subscribing-init.png" alt="" class="wp-image-1090" width="458" height="100" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p>Next I will show you how can you create your own action and do pub sub. In the below example I have created <code>addUserAction</code>and did pub sub on it checkout.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>
const ADD_USER = 'users [add]';
actions.ofType(ADD_USER).subscribe((action) => {
  console.log('received message', action);
});

const addUserAction = {
  type: ADD_USER, payload: {
    id: 23, firstName: 'Rupesh'
  }
};
actions.publish(addUserAction);
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:image {"id":1091} --></p>
<figure class="wp-block-image"><img src="{{ site.baseurl }}/assets/2019/03/subscribing-add-user.png" alt="" class="wp-image-1091" /><br />
<figcaption>Subscribing Add User Action</p>
</figcaption>
</figure>
<p><!-- /wp:image --></p>
<p><!-- wp:heading --></p>
<h2>Conclusion</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>My focus is to learn RxJS by implementing it in real world use. This example for doing publish subscribe using RxJS was very helpful to learn <code>BehaviorSubject</code>and <code>filter</code> operator. Also it solved one of the most demanded need for RxJS app is to do pubsub. Many of you might be aware of <code>ngrx</code>Library there also they use <code>actions$</code>as an injectable service where you can subscribe to any action and perform operations. I hope you enjoyed this and learned something new and simple. See you soon... Happy Coding!</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>Code Base</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><a href="https://stackblitz.com/edit/rxjs-pub-sub-rt">https://stackblitz.com/edit/rxjs-pub-sub-rt</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><a href="https://stackblitz.com/edit/rxjs-pub-sub-rt?embed=1&amp;file=index.ts">https://stackblitz.com/edit/rxjs-pub-sub-rt?embed=1&amp;file=index.ts</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2>message from rupesh tiwari</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=gzqDoHYO_xk","type":"video","providerNameSlug":"youtube","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} --></p>
<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
<div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=gzqDoHYO_xk
</div>
</figure>
<p><!-- /wp:core-embed/youtube --></p>
<p><!-- wp:heading --></p>
<h2>enroll in full stack master link</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong>❤️ Hey Viewers! show your support &amp; subscribe to full stack master school to watch full stack JavaScript HD course videos including node.js, angular, express, webpack and much more. Download source code, slides and step by step guide. Learn more at https://blog.rupeshtiwari.com/subscribe 💥 I am super excited to teach you at Full Stack Master!</strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"id":3402,"sizeSlug":"large","linkDestination":"custom"} --></p>
<figure class="wp-block-image size-large"><a href="https://blog.rupeshtiwari.com/subscribe"><img src="{{ site.baseurl }}/assets/2019/03/plan-subscription-3.jpg?fit=605%2C1024&amp;ssl=1" alt="" class="wp-image-3402" /></a></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p><!-- /wp:paragraph --></p>
