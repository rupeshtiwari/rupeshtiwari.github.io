---
layout: post
title: Responsive Products Page – online ecommerce store part 2
date: 2020-05-18 06:00:30.000000000 -04:00
type: post

published: true
comments: true
social-share: true
categories:
- Angular
- Express.JS
- JavaScript
tags:
- Angular
- Express
- fullstackmaster
- JavaScript
meta:
  _wpcom_is_markdown: '1'
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1607990749;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:3277;}i:1;a:1:{s:2:"id";i:3290;}i:2;a:1:{s:2:"id";i:3345;}}}}
  _edit_last: '1'
  slide_template: default
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '60'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _yoast_wpseo_primary_category: '178'
  wpmm_postgrid_views: '154'
  _qode-like: '0'
  _thumbnail_id: '3302'
  _b2s_post_meta: a:6:{s:8:"og_title";s:58:"Responsive Products Page – online ecommerce
    store part 2";s:7:"og_desc";s:202:"In our previous demo session Responsive Products
    Page | e-Commerce | Angular Material | 1 we discussed how to use mat-table rather
    mat-cards or mat-grids in products page to properly align our products.";s:8:"og_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/04/RUPESH-124.png";s:10:"card_title";s:58:"Responsive
    Products Page – online ecommerce store part 2";s:9:"card_desc";s:160:"In our previous
    demo session Responsive Products Page | e-Commerce | Angular Material | 1 we discussed
    how to use mat-table rather mat-cards or mat-grids in pro";s:10:"card_image";s:71:"https://blog.rupeshtiwari.com/wp-content/uploads/2020/04/RUPESH-124.png";}
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/responsive-products-page-online-ecommerce-store-part-2/"
---
<p>In our previous demo session <a href="https://www.youtube.com/watch?v=ID3sxo7NchA&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=70&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Responsive Products Page | e-Commerce | Angular Material | 1</strong></a> we discussed how to use mat-table rather mat-cards or mat-grids in products page to properly align our products. Now in this demo session <a href="https://www.youtube.com/watch?v=tijsesStWGI&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD&amp;index=71&amp;t=0s" target="_blank" rel="noopener noreferrer"><strong>Responsive Products Page | e-Commerce | Angular Material | 2 </strong></a>we will see how to make this products page responsive.</p>
<p>First we will start with making required code changes for loading of products page. We will take the spinner code from angular material site <a href="https://material.angular.io/">https://material.angular.io</a> and put it in products component html file to show spinner while loading this page.</p>
<p><img class="alignnone size-full wp-image-3306" src="{{ site.baseurl }}/assets/2020/05/R2-1.png" alt="" width="852" height="484" /></p>
<p>Next we will try to apply sorting on Image, price and Name of products. For this first we will apply matSort directive in products component html file, then we will get the element reference in products component ts file.</p>
<p><img class="alignnone size-full wp-image-3306" src="{{ site.baseurl }}/assets/2020/05/R2-1.png" alt="" width="852" height="484" /></p>
<p><img class="alignnone size-full wp-image-3305" src="{{ site.baseurl }}/assets/2020/05/R2-3.png" alt="" width="852" height="480" /></p>
<p><img class="alignnone size-full wp-image-3304" src="{{ site.baseurl }}/assets/2020/05/R2-4.png" alt="" width="854" height="481" /></p>
<p>Now we will again go to html file to put mat-sort-header everywhere, wherever we wants to do sorting.</p>
<p><img class="alignnone size-full wp-image-3303" src="{{ site.baseurl }}/assets/2020/05/R2-5.png" alt="" width="854" height="478" /></p>
<p>So till now in this demo session we have done loading of products with spinner, applied sorting to products name, image and price. Next in upcoming video sessions we will learn how to create cart store to save the state of the cart and make it reactive so that whenever we do change in products page it shows it in cart store icon.</p>
<p><iframe src="https://www.youtube.com/embed/tijsesStWGI" width="790" height="350" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
