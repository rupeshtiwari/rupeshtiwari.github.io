---
layout: post
title: Push Based Architecture With RxJS Behavior Subject
date: 2019-06-22 11:56:45.000000000 -04:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- RxJS
tags:
- A push-based architecture
- Managing State Using RxJS Subjects
- Pull vs. Push
- push based architecture
- push based architecture with rxjs
- RxJS
- 'RxJS: Managing Operator State'
- state management in angular rxjs
- state management rxjs
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1612171929;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:2275;}i:1;a:1:{s:2:"id";i:779;}i:2;a:1:{s:2:"id";i:1084;}}}}
  _edit_last: '1'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _b2s_post_meta: a:6:{s:8:"og_title";s:50:"Push Based Architecture With RxJS Behavior
    Subject";s:7:"og_desc";s:292:"There are 2 types of architectures one is Pull Based
    the second one is Push Based. I will explain you how can we leverage RxJS BehaviorSubject
    to establish Push Based Architecture. In Design Patterns book we have Observer
    Design Pattern that is exactly what I mean by Push Based Architecture.";s:8:"og_image";s:94:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/06/push-based-architecture-with-rxjs.png";s:10:"card_title";s:50:"Push
    Based Architecture With RxJS Behavior Subject";s:9:"card_desc";s:292:"There are
    2 types of architectures one is Pull Based the second one is Push Based. I will
    explain you how can we leverage RxJS BehaviorSubject to establish Push Based Architecture.
    In Design Patterns book we have Observer Design Pattern that is exactly what I
    mean by Push Based Architecture.";s:10:"card_image";s:94:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/06/push-based-architecture-with-rxjs.png";}
  slide_template: default
  _yoast_wpseo_primary_category: '206'
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '90'
  _thumbnail_id: '2304'
  wpmm_postgrid_views: '744'
  _qode-like: '0'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/push-based-architecture-with-rxjs/"
excerpt: There are 2 types of architectures one is Pull Based the second one is Push
  Based. I will explain you how can we leverage RxJS BehaviorSubject to establish
  Push Based Architecture. In Design Patterns book we have Observer Design Pattern
  that is exactly what I mean by Push Based Architecture.
---
<p><!-- wp:quote --></p>
<blockquote class="wp-block-quote"><p>There are 2 types of architectures one is&nbsp;<code>Pull Based</code>&nbsp;the second one is&nbsp;<code>Push Based</code>. I will explain you how can we leverage&nbsp;<code>RxJS BehaviorSubject</code>&nbsp;to establish&nbsp;<code>Push Based Architecture</code>. In Design Patterns book we have&nbsp;<code>Observer Design Pattern</code>&nbsp;that is exactly what I mean by&nbsp;<code>Push Based Architecture</code>.</p>
</blockquote>
<p><!-- /wp:quote --></p>
<p><!-- wp:separator --></p>
<hr class="wp-block-separator" />
<!-- /wp:separator --></p>
<p><!-- wp:paragraph --></p>
<p>Source Code:&nbsp;<a href="https://codesandbox.io/embed/rt-rxjs-state-management-js941?fontsize=14" target="_blank" rel="noreferrer noopener">https://codesandbox.io/embed/rt-rxjs-state-management-js941?fontsize=14</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:separator --></p>
<hr class="wp-block-separator" />
<!-- /wp:separator --></p>
<p><!-- wp:heading --></p>
<h2 id="👮"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#%F0%9F%91%AE"></a>👮</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading --></p>
<h2 id="What-is-Pull-Based-Architecture"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#What-is-Pull-Based-Architecture"></a>What is Pull Based Architecture</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>In order to get some data we call some service and service call server and return the data. Till that time the main UI thread is hung or blocked.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:quote --></p>
<blockquote class="wp-block-quote"><p>Every time client has to call some method for state change and also seek eagerly for getting the new changed state to show in UI. This behavior is called as&nbsp;<code>Pull Based Architecture</code>.</p>
</blockquote>
<p><!-- /wp:quote --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="See-below-Online-Shopping-eCommerce-Example"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#See-below-Online-Shopping-eCommerce-Example"></a>See below Online Shopping eCommerce Example</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:image --></p>
<figure class="wp-block-image"><img src="{{ site.baseurl }}/assets/2019/06/pull%2520based%2520architecture.PNG" alt="shopping cart" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:separator --></p>
<hr class="wp-block-separator" />
<!-- /wp:separator --></p>
<p><!-- wp:heading --></p>
<h2 id="😞"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#%F0%9F%98%9E"></a>😞</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading --></p>
<h2 id="Disadvantages-of-Pull-Based-Architecture"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#Disadvantages-of-Pull-Based-Architecture"></a>Disadvantages of Pull Based Architecture</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:list --></p>
<ul>
<li class="">Framework is slow &amp; hence application run slow. System is under performance and hence business is in loss.</li>
<li class="">UI thread is blocked for every operation hence poor user experience.</li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:paragraph --></p>
<p>If you are using&nbsp;<code>React</code>,&nbsp;<code>Angular</code>&nbsp;or&nbsp;<code>Vue</code>&nbsp;or&nbsp;<code>Knockout</code>&nbsp;then these framework will continue check is there any changes in the&nbsp;<code>View Model</code>. Whenever there is change on view model because of certain state change. These frameworks will re-render the view. This is how Angular works auto update UI on Model change.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>However, this makes framework slow. Because, framework has to watch the changes continuously.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>In Angular 2-8 there is&nbsp;<code>ChangeDetectionStrategy</code>&nbsp;which by default always create a list models which are bound to UI &amp; keep running a timer to check if the model changed then show the changes in UI or Re-render the UI.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><code>ChangeDetectionStrategy</code>&nbsp;has&nbsp;<code>OnPush</code>&nbsp;Strategy which I will discuss later. However in detail I will explain&nbsp;<code>ChangeDetectionStrategy</code>&nbsp;in my some other article.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:separator --></p>
<hr class="wp-block-separator" />
<!-- /wp:separator --></p>
<p><!-- wp:heading --></p>
<h2 id="📌"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#%F0%9F%93%8C"></a>📌</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading --></p>
<h2 id="What-is-Push-Based-Architecture"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#What-is-Push-Based-Architecture"></a>What is Push Based Architecture</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:quote --></p>
<blockquote class="wp-block-quote"><p>Client subscribes to an event and receives new state through the event only. It can be achieve by call back functions. This is called as&nbsp;<code>Push Based Architecture</code><br />State is pushed to client via call back functions.<br />Therefore, here system is lazy, UI framework is not eagerly seeking for any view model state change. Rather waiting lazily for any new state to be pushed.</p>
</blockquote>
<p><!-- /wp:quote --></p>
<p><!-- wp:paragraph --></p>
<p><code>Promise</code>&nbsp;or&nbsp;<code>Observables</code>&nbsp;are the model to achieve push based architecture in javascript apps.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>You can also do this by using regular messaging by&nbsp;<code>amplify</code>&nbsp;library or some other messaging framework.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>I personally like&nbsp;<code>RxJS</code>&nbsp;now a days for doing push based event driven architecture.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:separator --></p>
<hr class="wp-block-separator" />
<!-- /wp:separator --></p>
<p><!-- wp:heading --></p>
<h2 id="🛒"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#%F0%9F%9B%92"></a>🛒</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="Shopping-eCommerce-Example-to-Understand-Push-Based-Design"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#Shopping-eCommerce-Example-to-Understand-Push-Based-Design"></a>Shopping eCommerce Example to Understand Push Based Design</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:image --></p>
<figure class="wp-block-image"><img src="{{ site.baseurl }}/assets/2019/06/push%2520based%2520architecture.PNG" alt="shopping cart" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:separator --></p>
<hr class="wp-block-separator" />
<!-- /wp:separator --></p>
<p><!-- wp:heading --></p>
<h2 id="🎉"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#%F0%9F%8E%89"></a>🎉</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading --></p>
<h2 id="Advantages-of-PULL-Based-Architecture"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#Advantages-of-PULL-Based-Architecture"></a>Advantages of PUSH Based Architecture</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:list --></p>
<ul>
<li class="">Framework is Fast hence system performance is well &amp; Business improves.</li>
<li class="">UI is not blocked hence best user experience.</li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:separator --></p>
<hr class="wp-block-separator" />
<!-- /wp:separator --></p>
<p><!-- wp:heading --></p>
<h2 id="🍴"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#%F0%9F%8D%B4"></a>🍴</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading --></p>
<h2 id="How-to-Achieve-Push-Based-Architecture"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#How-to-Achieve-Push-Based-Architecture"></a>How to Achieve Push Based Architecture</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:separator --></p>
<hr class="wp-block-separator" />
<!-- /wp:separator --></p>
<p><!-- wp:paragraph --></p>
<p>Below are 4 simple steps we will follow:</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:list --></p>
<ul>
<li class="">First Design the state that you want</li>
<li class="">Wrap the state under&nbsp;<code>Behavior Subject</code></li>
<li class="">Write&nbsp;<code>Pure Functions</code>&nbsp;to change the state</li>
<li class="">Create Selectors to subscribe change of state</li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:heading --></p>
<h2 id="Modeling-Shopping-Cart-Using-Push-Based-Architecture"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#Modeling-Shopping-Cart-Using-Push-Based-Architecture"></a>Modeling Shopping Cart Using Push Based Architecture</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:separator --></p>
<hr class="wp-block-separator" />
<!-- /wp:separator --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="👉Defining-The-State--Shopping-Cart-State--Step-1"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#%F0%9F%91%89Defining-The-State--Shopping-Cart-State--Step-1"></a>👉Defining The State | Shopping Cart State | Step 1</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">interface CartItem {
  name: string;
  quantity: number;
  id: number;
}
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:paragraph --></p>
<p><strong>Cart State</strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">interface CartState {
  items: [];
}
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:paragraph --></p>
<p><strong>Cart Initial State</strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">const initialState: CartState = {
  items: []
};
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:separator --></p>
<hr class="wp-block-separator" />
<!-- /wp:separator --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="👉-Creating-BehaviorSubject--Cart-Store--Step-2"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#%F0%9F%91%89-Creating-BehaviorSubject--Cart-Store--Step-2"></a>👉 Creating BehaviorSubject | Cart Store | Step 2</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">export class CartStore {
  _cartState = new BehaviorSubject&lt;CartState>(initialState);

  get state() {
    return this._cartState.getValue();
  }

  setState(newCartState: CartState) {
    this._cartState.next(newCartState);
  }

  get state$() {
    return this._cartState.asObservable();
  }
}
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:separator --></p>
<hr class="wp-block-separator" />
<!-- /wp:separator --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="👉-Writing-Pure-Functions-For-State-Change--Cart-Store--Step-3"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#%F0%9F%91%89-Writing-Pure-Functions-For-State-Change--Cart-Store--Step-3"></a>👉 Writing Pure Functions For State Change | Cart Store | Step 3</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong>Add Cart Item Method</strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">addCartItem(newCartItem: CartItem) {
    console.log("[cart Item] Add");
    logLine();
    logState("Previous", this.state);

    const newState = {
      ...this.state,

      items: [].concat(this.state.items, newCartItem)
    } as CartState;

    this.setState(newState);
    logState("Current", this.state);
    logLine();
  }


  function logLine() {
  console.log(`----------------------------------------`);
}

function logState(which, state) {
  console.log(`${which} State`, state);
}
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:image --></p>
<figure class="wp-block-image"><img src="{{ site.baseurl }}/assets/2019/06/add%2520cart%2520item.PNG" alt="state change" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="👉-Creating-Selectors-to-subscribe-change-of-state--Cart-Store--Step-4"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#%F0%9F%91%89-Creating-Selectors-to-subscribe-change-of-state--Cart-Store--Step-4"></a>👉 Creating Selectors to subscribe change of state | Cart Store | Step 4</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:enlighter/codeblock --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">const cartItemCount$ = cartStore.state$.pipe(
  map(s => s.items.length),
  distinctUntilChanged()
);
</pre>
<p><!-- /wp:enlighter/codeblock --></p>
<p><!-- wp:image --></p>
<figure class="wp-block-image"><img src="{{ site.baseurl }}/assets/2019/06/selector%2520for%2520add%2520cart%2520item.PNG" alt="selector" /></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:separator --></p>
<hr class="wp-block-separator" />
<!-- /wp:separator --></p>
<p><!-- wp:heading {"level":1} --></p>
<h1 id="-"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#-"></a>&nbsp;&nbsp;</h1>
<p><!-- /wp:heading --></p>
<p><!-- wp:separator --></p>
<hr class="wp-block-separator" />
<!-- /wp:separator --></p>
<p><!-- wp:heading --></p>
<h2 id="Download-or-Play-with-Complete-source-code"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#Download-or-Play-with-Complete-source-code"></a>Download or Play with Complete source code</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:image {"linkDestination":"custom"} --></p>
<figure class="wp-block-image"><a href="https://codesandbox.io/s/rt-rxjs-state-management-js941?fontsize=14" target="_blank" rel="noreferrer noopener"><img src="{{ site.baseurl }}/assets/2019/06/play-codesandbox.svg" alt="Edit rt-rxjs-state-management" /></a></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3 id="Thank-you-🐑"><a href="https://hackmd.io/cQ1BKlRqSr69zM01Fiyf1A?both#Thank-you-%F0%9F%90%91"></a>Thank you! 🐑</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>You can find me on</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:list --></p>
<ul>
<li><a rel="noreferrer noopener" href="http://youtube.com/fullstackmaster" target="_blank">YouTube Channel Full Stack Master</a></li>
<li><a href="http://github.com/rupeshtiwari">GitHub</a></li>
<li><a href="http://twitter.com/rupeshtiwari_co">Twitter</a></li>
<li>or <a href="mailto:info@rupeshtiwari.com">email me</a></li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:paragraph --></p>
<p><!-- /wp:paragraph --></p>
