---
layout: post
title: MEAN Stack Full Course for Beginners
date:
type: post

published: false
password: ''
status: draft
categories:
- MEAN.js
tags:
- Angular
- cloud
- Express
- heroku
- Mongo
- Node.js
meta:
  _oembed_d5d5a99645887cf33879e37e65fc6ac1: "{{unknown}}"
  _edit_last: '1'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _b2s_post_meta: |-
    a:6:{s:8:"og_title";s:36:"MEAN Stack Full Course for Beginners";s:7:"og_desc";s:160:"
    A hands-on tutorial to build a working Angular e-commerce application from scratch on MEAN Stack with deploy &amp; run on Cloud using Heroku. Lean step-by-step";s:8:"og_image";s:87:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/05/mean-stack-feature-image-1.png";s:10:"card_title";s:36:"MEAN Stack Full Course for Beginners";s:9:"card_desc";s:160:"
    A hands-on tutorial to build a working Angular e-commerce application from scratch on MEAN Stack with deploy &amp; run on Cloud using Heroku. Lean step-by-step";s:10:"card_image";s:87:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/05/mean-stack-feature-image-1.png";}
  slide_template: default
  _yoast_wpseo_primary_category: '241'
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '30'
  wpmm_postgrid_views: '5'
  _qode-like: '0'
  _thumbnail_id: '2168'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/"
---
<p><!-- wp:quote --></p>
<blockquote class="wp-block-quote"><p><strong>A hands-on tutorial to build a working Angular e-commerce application from scratch on MEAN Stack with deploy &amp; run on Cloud using Heroku.</strong> Lean step-by-step how to create a full e-commerce store web site using Angular on MEAN.js stack. Also learn how to deploy the site in Cloud using Heroku.]</p>
<p>YouTube Channel to watch this course live is: <a href="https://www.youtube.com/watch?v=4b9xjzjY38c&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD">Creating angular app from scratch with MEAN STACK</a></p>
<p>Source Code for this entire course is in here<a href="https://github.com/rupeshtiwari/product-mart/">: Product Mart </a></p></p>
</blockquote>
<p><!-- /wp:quote --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#introduction"></a>Introduction</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>I will help you to become a full stack MEAN developer step by step. From the very basic you will learn entire stack. This is a hands-on Tutorial to build an working angular app from the scratch on MEAN Stack. Creating Restful Api Server using node.js. Saving Data in MongoDB and deploying our production code to&nbsp;<code>heroku</code>. You can see each hands-on live in&nbsp;<a href="https://www.youtube.com/watch?v=4b9xjzjY38c&amp;list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD">Rupesh Tiwari YouTube Channel</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#environment-settings"></a>Environment Settings</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:list --></p>
<ul>
<li>Install Node.js</li>
<li>Install&nbsp;<code>Visual Studio Code</code></li>
<li>Install&nbsp;<code>angular cli</code>&nbsp;by running&nbsp;<code>npm i -g @angular/cli</code></li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#creating-new-angular-app"></a>Creating new Angular App</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><code>ng new pm-pinch --routing --style scss --prefix pm --skip-install --dry-run</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>With routing module With sass as default styles With pm as the prefix for all components and directives With Skip installed so it just creats the folder structures With dry run so that it will just create in memory and display it in the console.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#integrating-with-angular-material"></a>Integrating with Angular Material</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><code>ng add @angular/material</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#building--running-angular-app"></a>Building &amp; Running Angular App</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:list --></p>
<ul>
<li>build:&nbsp;<code>npm run build</code></li>
<li>start:&nbsp;<code>npm start</code></li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#adding-registeration-feature"></a>Adding Registeration Feature</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#stylesscss"></a>styles.scss</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>/* You can add global styles to this file, and also import other style files */
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
@import '~@angular/material/theming';


$custom-typography: mat-typography-config(
    $font-family: 'Exo'
);

@include mat-core($custom-typography);

body {
  background-color: #f4f3f3;

  margin: 0;
  app-root * {
    font-family: 'Exo', sans-serif;
  }
}

.left-spacer{
    margin-left: 2%
}

</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>create user interface first.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#userts"></a>user.ts</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>export interface User {
    email:string;
    password:string;
    repeatPassword?:string;

}
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>lets update the auth service to create register, login and logout methods.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#authservicets"></a>auth.service.ts</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">import { Injectable } from '@angular/core'
import { of, Subject } from 'rxjs'
import { User } from './user'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user$ = new Subject&lt;User&gt;()
    constructor() {}

    login(email: string, password: string) {
        const loginCredentials = { email, password }
        console.log('login credentials', loginCredentials)
        return of(loginCredentials)
    }

    get user() {
        return this.user$.asObservable()
    }

    register(user: any) {
        this.user$.next(user)
        console.log('registered user successful', user)
        return of(user)
    }

    logout() {
        this.user$.next(null)
    }
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#appcomponentscss"></a>app.component.scss</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="css">header {
    width: 100%;
    .logo {
        background-image: url('../assets/logo.png');
        width: 50px;
        height: 50px;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .mat-icon {
        vertical-align: middle;
        margin: 0 5px;
    }
    a {
        margin: 1%;
        cursor: pointer;
    }
    .active-link {
        background-color: royalblue;
    }
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:html --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="html">&lt;header&gt;
  &lt;mat-toolbar color="primary"&gt;
    &lt;mat-toolbar-row&gt;
      &lt;a [routerLink]="['/']" class="logo"&gt;&lt;/a&gt;
      &lt;span class="left-spacer"&gt;&lt;/span&gt;
      &lt;a mat-button links side routerLink="/home" routerLinkActive="active-link"
        &gt;Home&lt;/a
      &gt;
      &lt;a
        mat-button
&lt;header&gt;
  &lt;mat-toolbar color="primary"&gt;
    &lt;mat-toolbar-row&gt;
      &lt;a [routerLink]="['/']" class="logo"&gt;&lt;/a&gt;
      &lt;span class="left-spacer"&gt;&lt;/span&gt;
      &lt;a mat-button  routerLink="/home" routerLinkActive="active-link"
        &gt;Home&lt;/a
      &gt;
      &lt;a
        mat-button

        routerLink="/products"
        routerLinkActive="active-link"
        &gt;Products&lt;/a
      &gt;
      &lt;a
        mat-button

        routerLink="/login"
        routerLinkActive="active-link"
        *ngIf="!user"
        &gt;Login&lt;/a
      &gt;
      &lt;div&gt;
        &lt;a
          mat-button

          *ngIf="user"
          [matMenuTriggerFor]="menu"
        &gt;
          &lt;mat-icon&gt;account_circle&lt;/mat-icon&gt;{{ user.fullname }}
        &lt;/a&gt;
        &lt;mat-menu #menu="matMenu"&gt;
          &lt;button mat-menu-item (click)="logout()"&gt;logout&lt;/button&gt;
        &lt;/mat-menu&gt;
      &lt;/div&gt;
    &lt;/mat-toolbar-row&gt;
  &lt;/mat-toolbar&gt;
&lt;/header&gt;

&lt;router-outlet&gt;&lt;/router-outlet&gt;

</pre>
<p><!-- /wp:html --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#appcomponenthtml"></a>app.component.html</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#appcomponentts"></a>app.component.ts</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:html --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js">import { Component, OnDestroy } from '@angular/core'
import { AuthService } from './auth.service'
import { Subscription } from 'rxjs'
import { Router } from '@angular/router'
import { User } from './user'

@Component({
    selector: 'pm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    userSubscription: Subscription
    user: User

    ngOnDestroy(): void {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe()
        }
    }

    constructor(private authService: AuthService, private router: Router) {
        this.userSubscription = this.authService.user.subscribe(
            user =&gt; (this.user = user)
        )
    }

    logout() {
        this.authService.logout()
        this.router.navigate(['/'])
    }
}</pre>
<p><!-- /wp:html --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#registercomponenthtml"></a>register.component.html</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="null">&lt;mat-card class="register-card"&gt;
    &lt;mat-card-header&gt;
        &lt;mat-card-title&gt;Register&lt;/mat-card-title&gt;
    &lt;/mat-card-header&gt;
    &lt;mat-card-content&gt;
        &lt;form class="register-form"&gt;
            &lt;table class="full-width" cellspacing="0" [formGroup]="userForm"&gt;
                &lt;tr&gt;
                    &lt;td&gt;
                        &lt;mat-form-field class="full-width"&gt;
                            &lt;input
                                matInput
                                placeholder="Fullname"
                                formControlName="fullname"
                                name="fullname"
                                required
                            /&gt;
                        &lt;/mat-form-field&gt;
                    &lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;
                        &lt;mat-form-field class="full-width"&gt;
                            &lt;input
                                matInput
                                placeholder="Email"
                                formControlName="email"
                                name="email"
                                required
                            /&gt;
                            &lt;mat-error
                                *ngIf="email.invalid &amp;&amp; email.errors.email"
                                &gt;Invalid email address&lt;/mat-error
                            &gt;
                        &lt;/mat-form-field&gt;
                    &lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;
                        &lt;mat-form-field class="full-width"&gt;
                            &lt;input
                                matInput
                                placeholder="Password"
                                formControlName="password"
                                type="password"
                                name="password"
                                required
                            /&gt;
                        &lt;/mat-form-field&gt;
                    &lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;
                        &lt;mat-form-field class="full-width"&gt;
                            &lt;input
                                matInput
                                placeholder="Reapet Password"
                                formControlName="repeatPassword"
                                type="password"
                                name="repeatPassword"
                                required
                            /&gt;
                            &lt;mat-error
                                *ngIf="repeatPassword.invalid &amp;&amp; repeatPassword.errors.passwordMatch"
                                &gt;Password mismatch&lt;/mat-error
                            &gt;
                        &lt;/mat-form-field&gt;
                    &lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;
        &lt;/form&gt;
    &lt;/mat-card-content&gt;
    &lt;mat-card-actions&gt;
        &lt;button mat-raised-button (click)="register()" color="primary"&gt;
            Register
        &lt;/button&gt;
        &lt;span class="left-spacer"
            &gt;Allrady have an account ?
            &lt;a [routerLink]="['/login']"&gt;login&lt;/a&gt; here&lt;/span
        &gt;
    &lt;/mat-card-actions&gt;
&lt;/mat-card&gt;</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#registercomponentscss"></a>register.component.scss</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">.register-card {
    max-width: 800px;
    min-width: 150px;
    margin: 10% auto;
}

.full-width {
    width: 100%;
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#registercomponentts"></a>register.component.ts</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>import { FormControl, Validators } from '@angular/forms'<br />
import { Component, OnInit } from '@angular/core'<br />
import { FormGroup } from '@angular/forms'<br />
import { Router } from '@angular/router'<br />
import { AuthService } from '../auth.service'</p>
<p>@Component({<br />
    selector: 'pm-register',<br />
    templateUrl: './register.component.html',<br />
    styleUrls: ['./register.component.scss']<br />
})<br />
export class RegisterComponent implements OnInit {<br />
    userForm = new FormGroup({<br />
        fullname: new FormControl('', [Validators.required]),<br />
        email: new FormControl('', [Validators.required, Validators.email]),<br />
        password: new FormControl('', [Validators.required]),<br />
        repeatPassword: new FormControl('', [<br />
            Validators.required,<br />
            this.passwordsMatchValidator<br />
        ])<br />
    })</p>
<p>    constructor(private router: Router, private authService: AuthService) {<br />
        console.log('userform', this.userForm)<br />
    }</p>
<p>    passwordsMatchValidator(control: FormControl) {<br />
        let password = control.root.get('password')<br />
        return password &amp;&amp; control.value !== password.value<br />
            ? {<br />
                  passwordMatch: true<br />
              }<br />
            : null<br />
    }</p>
<p>    register() {<br />
        if (!this.userForm.valid) return</p>
<p>        const user = this.userForm.getRawValue()<br />
        this.authService<br />
            .register(user)<br />
            .subscribe(s =&gt; this.router.navigate(['']))<br />
    }</p>
<p>    get fullname(): any {<br />
        return this.userForm.get('fullname')<br />
    }<br />
    get email(): any {<br />
        return this.userForm.get('email')<br />
    }<br />
    get password(): any {<br />
        return this.userForm.get('password')<br />
    }<br />
    get repeatPassword(): any {<br />
        return this.userForm.get('repeatPassword')<br />
    }</p>
<p>    ngOnInit() {}<br />
}</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#creating-restful-api-server-side"></a>Creating Restful API server side</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>install below npm packages:</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><code>npm i -S express dotenv body-parser cors helmet morgan express-async-handler</code>&nbsp;<code>npm i -D concurrently nodemon</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#serverconfigconfigjs"></a>server/config/config.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">require('dotenv').config()

const envVars = process.env
module.exports = {
    port: envVars.PORT,
    env: envVars.NODE_ENV
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#serverconfigexpressjs"></a>server/config/express.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>const express = require('express');
const path = require('path');
const config = require('./config');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../routes/index.route');

const app = express();

// logger only in dev env
if (config.env === 'development') {
  app.use(logger('dev'));
}
const distDir = path.join(__dirname, '../../dist');

// dist folder hosting

app.use(express.static(distDir));

// api body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// API router
app.use('/api/', routes);

// index html serving
app.get('*', (req, res) => res.sendFile(path.join(distDir, 'index.html')));

module.exports = app;
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#serverroutesauthroutejs"></a>server/routes/auth.route.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">const express = require('express')
const userController = require('../controllers/user.controller')
const asyncHandler = require('express-async-handler')

const router = express.Router()

router.post('/register', asyncHandler(insert))

async function insert(req, res, next) {
    console.log(`registering user`, req.body)
    let user = await userController.insert(req.body)
    res.json(user)
}

module.exports = router</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#serverroutesindexjs"></a>server/routes/index.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">const express = require('express')
const authRoutes = require('./auth.route')

const router = express.Router()

router.use('/auth', authRoutes)

module.exports = router</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#servercontrollersusercontrollerjs"></a>server/controllers/user.controller.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">module.exports = {
    insert
}

users = []

async function insert(user) {
    return users.push(user)
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#serverindexjs"></a>server/index.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">const app = require('./config/express')
const config = require('./config/config')

// listen to port
app.listen(config.port, () =&gt; {
    console.info(`server started on port ${config.port} (${config.env})`)
})</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#gitignore"></a>.gitignore</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>add below filter</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code># environment
.env

</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#srcenv"></a>src/.env</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>NODE_ENV=development
PORT = 4050
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>.env file will have all of the environment variables which will vary per environment like prod, qa , dev , stage, uat servers. Therefore, do not checkin this file in github. Rather create&nbsp;<code>.env.sample</code>&nbsp;file to checkin in github for just helping others to get the .env file locally by running simple copy command&nbsp;<code>cp .env.sample .env</code>&nbsp;this way locally anyone can get&nbsp;<code>.env</code>&nbsp;file.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#packagejson"></a>package.json</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>update start:server script and create kill all node processes script.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">"scripts": {
    "ng": "ng",
	"start:server": "concurrently -c \"yellow.bold,green.bold\" -n \"SERVER,CLIENT\"  \"npm run server:watch\"  \"npm run build:watch\"",
    "server:watch": "nodemon server",
    "serve": "ng serve -o --port 4030",
    "build": "ng build",
    "build:watch": "ng build --watch",
    "build:prod": "npm run build -- --prod",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "stop": "taskkill /f /im node.exe"
  }</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#srcenvsample"></a>src/.env.sample</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>create a sample env file to check in github for reuse. update the read me for how to create .env file from .env.sample</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code># after cloning repository run below command from root folder
cp .env.sample .env
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>now you can use postman and register user by posting data.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#integrating-restful-api-to-angular-app"></a>Integrating Restful API to Angular APP</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><a href="https://github.com/rupeshtiwari/product-mart/tree/workshop-session-4-30">Github Source Code Branch</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#authservicets-1"></a>auth.service.ts</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Integrating Restfull API with Auth service</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">import { Injectable } from '@angular/core'
import { of, Subject, throwError } from 'rxjs'
import { User } from './user'
import { HttpClient } from '@angular/common/http'
import { switchMap, catchError } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user$ = new Subject&lt;User&gt;()
    constructor(private http: HttpClient) {}
    apiUrl = '/api/auth/'

    login(email: string, password: string) {
        const loginCredentials = { email, password }
        console.log('login credentials', loginCredentials)
        return of(loginCredentials)
    }

    logout() {
        // remove user from suject
        this.setUser(null)
        console.log('user did logout successfull')
    }

    get user() {
        return this.user$.asObservable()
    }

    register(user: any) {
        return this.http.post&lt;User&gt;(`${this.apiUrl}register`, user).pipe(
            switchMap(savedUser =&gt; {
                this.user$.next(savedUser)
                console.log('registered user successful', savedUser)
                return of(savedUser)
            }),
            catchError(err =&gt; {
                return throwError('Registration failed please contact admin')
            })
        )
    }

    private setUser(user) {
        this.user$.next(user)
    }
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#appmodulets"></a>app.module.ts</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>import httpclient here</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">import { HttpClientModule } from '@angular/common/http'

imports: [HttpClientModule]</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>now if you run npm run start:server you can register user successfully. However , if you want to run ng serve and register user then you will get&nbsp;<code>404 Not Found</code>&nbsp;error In order to solve this you need to add proxy to&nbsp;<code>angular.json</code>&nbsp;file.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#angularjson"></a>angular.json</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>go to serve.options and add&nbsp;<code>"proxyConfig": "proxy.conf.json"</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code> "serve": {
   ...
   "options": {
     "browserTarget": "product-mart:build",
     "proxyConfig": "proxy.conf.json"
   },
   ...
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>next create&nbsp;<code>proxy.conf.json</code>&nbsp;file.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#proxyconfjson"></a>proxy.conf.json</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>{
  "/api": {
    "target": "http://localhost:4050",
    "secure": false
  }
}
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>kill all process and then start server in watch mode and serve client.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#configuring-mongoose"></a>Configuring Mongoose</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><a href="https://github.com/rupeshtiwari/product-mart/tree/workshop-session-5-7">Github Source Code Brnach</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:list --></p>
<ul>
<li>MongoDb Installation for windows:&nbsp;<a href="https://www.mongodb.com/download-center/community?jmp=docs">https://www.mongodb.com/download-center/community?jmp=docs</a>&nbsp;msi to install in windows machine</li>
<li>Mongoose MPM:&nbsp;<a href="https://www.npmjs.com/package/mongoose">https://www.npmjs.com/package/mongoose</a>&nbsp;npm library to connect to mongo db from node.js</li>
<li>Install robo 3T&nbsp;<a href="https://robomongo.org/download">https://robomongo.org/download</a>&nbsp;This is an editor to view db collections.</li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#install-npm-packages"></a>install npm packages</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>npm i -S mongoose
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Install mongo db in your machine. If you are using mac os then follow&nbsp;<a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#id1">this steps</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#serverconfigconfigjs-1"></a>server/config/config.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>add mongo object</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>require("dotenv").config();

const envVars = process.env;
module.exports = {
 port: envVars.PORT,
 env: envVars.NODE_ENV,
 mongo: {
   uri: envVars.MONGODB_URI,
   port: envVars.MONGO_PORT,
   isDebug: envVars.MONGOOSE_DEBUG
 }
};
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#serverconfigmongoosejs"></a>server/config/mongoose.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>const mongoose = require('mongoose');
const util = require('util');
const debug = require('debug')('express-mongoose-es6-rest-api:index');
const config = require('./config');
const mongoUri = config.mongo.uri;

mongoose.connect(mongoUri, { keepAlive: 1, useNewUrlParser: true });

const db = mongoose.connection;
db.once('open', ()=>{
    console.log(`connected to database: ${mongoUri}`);
})
db.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// print mongoose logs in dev env
if (config.mongo.isDebug) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}


module.exports = db;

</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#env"></a>.env</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>NODE_ENV=development
PORT = 4050
MONGODB_URI=mongodb://localhost/productmart
MONGOOSE_DEBUG:true
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#indexjs"></a>index.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>initialize mongoose before listening to port</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">// initialize mongo
require('./config/mongoose')</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Now run npm run server:watch and see mongoose connected successfully. see below message :</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>server started on port 4050 (development)
connected to database: mongodb://localhost/productmart
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#saving-user-in-mongo-db"></a>Saving User in Mongo Db</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Now we will create model and save user into mongo db.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#install-bcrypt-for-hashing-password"></a>install bcrypt for hashing password</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><code>npm i -S bcrypt</code>&nbsp;we will create hashed password before saving to db.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#remove-repeatpassword-from-user-not-needed"></a>remove repeatpassword from user not needed</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>// user.ts</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">export interface User {
    email: string
    fullname: string
    password: string
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#servermodelsusermodeljs"></a>server/models/user.model.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
            match: [
                /^(([^&lt;&gt;()[<strong>\]\\</strong>.,;:\s@<strong>\"</strong>]+(<strong>\.</strong>[^&lt;&gt;()[<strong>\]\\</strong>.,;:\s@<strong>\"</strong>]+)*)|(<strong>\"</strong>.+<strong>\"</strong>))@((<strong>\[</strong>[0-9]{1,3}<strong>\.</strong>[0-9]{1,3}<strong>\.</strong>[0-9]{1,3}<strong>\.</strong>[0-9]{1,3}<strong>\]</strong>)|(([a-zA-Z\-0-9]+<strong>\.</strong>)+[a-zA-Z]{2,}))$/,
                'Please enter a valid email'
            ]
        },
        hashedPassword: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        roles: [
            {
                type: String
            }
        ]
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('User', UserSchema)</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#update-user-controller-servercontrollersusercontrollerjs"></a>Update user controller server/controllers/user.controller.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">const bcrypt = require('bcrypt')
const User = require('../models/user.model')

async function insert(user) {
    // make a mogoose db call to save user in db
    console.log(`saving user to db`, user)

    // go to https://www.npmjs.com/package/bcrypt#to-hash-a-password-1
    // and learn about hashsync
    //  the salt to be used to hash the password.
    user.hashedPassword = bcrypt.hashSync(user.password, 10)

    delete user.password

    console.log(`user to save in db`, user)
    return await new User(user).save()
}

module.exports = {
    insert
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Now you can go to&nbsp;<code>http://localhost:4050/register</code>&nbsp;page and register yourself check mongo db you will have data saved.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#login-user-by-verifying-user-data-in-mongo-db"></a>Login User by verifying user data in Mongo Db</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#srcappauthservicets"></a>src\app\auth.service.ts</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>add login method in auth service</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">  login(email: string, password: string) {
   const loginCredentials = { email, password };
   console.log('login credentials', loginCredentials);
   // return of(loginCredentials);
   return this.http.post&lt;User&gt;(`${this.apiUrl}login`, loginCredentials).pipe(
     switchMap(savedUser =&gt; {
       this.user$.next(savedUser);
       console.log('find user successful', savedUser);
       return of(savedUser);
     }),
     catchError(err =&gt; {
       console.log('find user fail', err);

       return throwError(
         'Your login details could not be verified. Please try again.'
       );
     })
   );
 }
</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#serverroutesauthroutejs-1"></a>server\routes\auth.route.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>add login route</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">router.post('/login', asyncHandler(getUser))

async function getUser(req, res, next) {
    const user = req.body
    console.log(`searching user`, user)
    const savedUser = await userController.getUserByEmail(
        user.email,
        user.password
    )
    res.json(savedUser)
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#servercontrollersusercontrollerjs-1"></a>server\controllers\user.controller.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>update user controller to have getuserbyemail method.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">async function getUserByEmail(email, password) {
    let user = await User.findOne({ email })
    if (isUserValid(user, password, user.hashedPassword)) {
        user = user.toObject()
        delete user.hashedPassword
        return user
    } else {
        return null
    }
}

function isUserValid(user, password, hashedPassword) {
    return user &amp;&amp; bcrypt.compareSync(password, hashedPassword)
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#srcapploginlogincomponentts"></a>src\app\login\login.component.ts</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Update login.component.ts to show error</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
    selector: 'pm-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    email: string
    password: string
    error: string
    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit() {}

    login() {
        this.error = ''
        this.authService.login(this.email, this.password).subscribe(
            s =&gt; this.router.navigate(['/']),
            e =&gt; {
                console.log('show ui error', e)
                this.error = e
            }
        )
    }
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#srcapploginlogincomponenthtml"></a>src\app\login\login.component.html</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Update logincomponent.html to add this extra row to show error.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">...
&lt;tr&gt;
    &lt;td colspan="2"&gt;
        &lt;mat-error *ngIf="error"&gt;{{error}}&lt;/mat-error&gt;
    &lt;/td&gt;
&lt;/tr&gt;
...</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Now if you login with correct credential you will be navigated to home page. Or if you did wrong credentials then you will see error.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#debuggin-nodejs-in-visual-studio-code"></a>Debuggin Node.js in Visual Studio Code</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Now I will demonstrate how can you debug serverside code in vscode live.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#adding-vscode-configuration-for-debugging-server"></a>Adding VsCode configuration for debugging server</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Go to debug tab and select add configuration for node.js</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Server",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run-script", "debug"],
      "port": 9229
    }
  ]
}

</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#adding-packagejson-script-for-debug"></a>Adding package.json script for debug</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>add&nbsp;<code>"debug": "node --nolazy --inspect-brk=9229 server"</code>&nbsp;in your package.json/scripts</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>scripts: {
...
"debug": "node --nolazy --inspect-brk=9229 server"
...
}
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Now hit F5 button and you should be able to run your server in debug mode.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#debugging-angular-in-visual-studio-code"></a>Debugging Angular in Visual Studio Code</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Lets debug client side app now.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#launchjson"></a>launch.json</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>inside launch.json add below object</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>  {
      "name": "Launch Angular",
      "type": "chrome",
      "request": "launch",
      "preLaunchTask": "npm: serve",
      "url": "http://localhost:4200/",
      "webRoot": "${workspaceFolder}"
    }
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#taskjson"></a>Task.json</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>add below object in task.json</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "type": "npm",
      "script": "serve",
      "isBackground": true,
      "presentation": {
        "focus": true,
        "panel": "dedicated"
      },
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "problemMatcher": {
        "owner": "typescript",
        "source": "ts",
        "applyTo": "closedDocuments",
        "fileLocation": ["relative", "${cwd}"],
        "pattern": "$tsc",
        "background": {
          "activeOnStart": true,
          "beginsPattern": {
            "regexp": "(.*?)"
          },
          "endsPattern": {
            "regexp": "Compiled |Failed to compile."
          }
        }
      }
    }
  ]
}

</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#packagejson-1"></a>package.json</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Here is your final scripts in&nbsp;<code>package.json</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted"> <code>
 
 "scripts": {
    "ng": "ng",
    "start:server": "concurrently -c \"yellow.bold,green.bold\" -n \"SERVER,CLIENT\" \"npm run server:watch\" \"npm run build:watch\"",
    "server:watch": "nodemon server",
    "serve": "ng serve",
    "build": "ng build",
    "build:watch": "ng build --watch",
    "build:prod": "npm run build -- --prod",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "stop": "taskkill /f /im node.exe",
    "debug": "node --nolazy --inspect-brk=9229 server"
</code></pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Now you can launch your angular app in debug mode.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#debugging-nodejs-and-angular-together-in-visual-studio-code"></a>Debugging NodeJs and Angular Together in Visual Studio Code</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Lets debug both client and server together.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#launchjson-1"></a>launch.json</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>inside launch.json add below object</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>  "compounds": [
    {
      "name": "Do Em Both",
      "configurations": ["Debug Server", "Launch Angular"]
    }
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Here is the final launch.json</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Server",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run-script", "debug"],
      "port": 9229
    },
    {
      "name": "Launch Angular",
      "type": "chrome",
      "request": "launch",
      "preLaunchTask": "npm: serve",
      "url": "http://localhost:4200/",
      "webRoot": "${workspaceFolder}"
    }
  ],
  "compounds": [
    {
      "name": "Do Em Both",
      "configurations": ["Debug Server", "Launch Angular"]
    }
  ]
}

</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#token-based-authentication"></a>Token Based Authentication</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>The general concept behind a token-based authentication system is simple. Allow users to enter their username and password in order to obtain a token which allows them to fetch a specific resource - without using their username and password. Once their token has been obtained, the user can offer the token - which offers access to a specific resource for a time period - to the remote site.&nbsp;<a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9">JWT</a>&nbsp;Other advantages are Token-Based Authentication, relies on a signed token that is sent to the server on each request.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#what-are-the-benefits-of-using-a-token-based-approach"></a>What are the benefits of using a token-based approach?</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Cross-domain / CORS: cookies + CORS don't play well across different domains. A token-based approach allows you to make AJAX calls to any server, on any domain because you use an HTTP header to transmit the user information.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Stateless (a.k.a. Server side scalability): there is no need to keep a session store, the token is a self-contained entity that conveys all the user information. The rest of the state lives in cookies or local storage on the client side.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>CDN: you can serve all the assets of your app from a CDN (e.g. javascript, HTML, images, etc.), and your server side is just the API.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Decoupling: you are not tied to any particular authentication scheme. The token might be generated anywhere, hence your API can be called from anywhere with a single way of authenticating those calls.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Mobile ready: when you start working on a native platform (iOS, Android, Windows 8, etc.) cookies are not ideal when consuming a token-based approach simplifies this a lot.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>CSRF: since you are not relying on cookies, you don't need to protect against cross site requests (e.g. it would not be possible to sib your site, generate a POST request and re-use the existing authentication cookie because there will be none).</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Performance: we are not presenting any hard perf benchmarks here, but a network roundtrip (e.g. finding a session on database) is likely to take more time than calculating an HMACSHA256 to validate a token and parsing its contents.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#json-web-token-generation-process--authentication-process-with-googlefacebooktwitter"></a>JSON Web Token Generation Process &amp; Authentication process with Google/Facebook/Twitter</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>JWTs allow for the token to be cryptographically signed, meaning that you can guarantee that the token has not been tampered with. There is also provision for them to be encrypted, meaning that without the encryption key the token can not even be decoded.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"linkDestination":"custom"} --></p>
<figure class="wp-block-image"><a href="https://gist.githubusercontent.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9/raw/88b1af6ffb860d0b5779993bd098cf20fb8504cd/JWT.png" target="_blank" rel="noreferrer noopener"><img src="{{ site.baseurl }}/assets/JWT.png" alt="JWT" /></a></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#install-passport--jsonwebtoken-middleware"></a>Install passport &amp; jsonwebtoken middleware</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>First install below packages to support JWT Authentication.&nbsp;<code>npm i -S passport passport-jwt passport-local jsonwebtoken</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:list --></p>
<ul>
<li><code>passport</code>&nbsp;: Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies like&nbsp;<code>passport-jwt, passport-local</code></li>
<li><code>jsonwebtoken</code>: Creates JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.</li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:paragraph --></p>
<p><a href="https://www.npmjs.com/package/passport">https://www.npmjs.com/package/passport</a>&nbsp;<a href="http://www.passportjs.org/docs/">http://www.passportjs.org/docs/</a>&nbsp;(read "Verify Callback" header )&nbsp;<a href="https://tools.ietf.org/html/rfc7519">JWT</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#servercontrollersusercontrollerjs-2"></a>server\controllers\user.controller.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong><em>Find User By ID</em></strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>add&nbsp;<code>getUserById</code>&nbsp;function and rename existing function&nbsp;<code>getUserByEmail</code>&nbsp;to&nbsp;<code>getUserByEmailPassword</code>&nbsp;also update the<code>server\routes\auth.route.js</code>&nbsp;to use&nbsp;<code>getUserByEmailPassword</code>.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">async function getUserById(id) {
    let user = await User.findById(id)
    if (user) {
        user = user.toObject()
        delete user.hashedPassword
        return user
    } else {
        return null
    }
}
module.exports = {
    insert,
    getUserByEmail,
    getUserById
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Complete user.controller.js file looks like below</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">const bcrypt = require('bcrypt')
const User = require('../models/user.model')

async function insert(user) {
    // make a mogoose db call to save user in db
    console.log(`saving user to db`, user)

    // go to https://www.npmjs.com/package/bcrypt#to-hash-a-password-1
    // and learn about hashsync
    //  the salt to be used to hash the password.
    user.hashedPassword = bcrypt.hashSync(user.password, 10)

    delete user.password

    console.log(`user to save in db`, user)
    return await new User(user).save()
}

async function getUserByEmailPassword(email, password) {
    let user = await User.findOne({ email })
    if (isUserValid(user, password, user.hashedPassword)) {
        user = user.toObject()
        delete user.hashedPassword
        return user
    } else {
        return null
    }
}

async function getUserById(id) {
    let user = await User.findById(id)
    if (user) {
        user = user.toObject()
        delete user.hashedPassword
        return user
    } else {
        return null
    }
}

function isUserValid(user, password, hashedPassword) {
    return user &amp;&amp; bcrypt.compareSync(password, hashedPassword)
}
module.exports = {
    insert,
    getUserByEmailPassword,
    getUserById
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#servermiddlewarepassportjs"></a>server\middleware\passport.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong><em>Create Passport Middleware &amp; Register it in App</em></strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:list --></p>
<ul>
<li>For local login it will search user by email id</li>
<li>For JWT login it will parse the Token and get the User Id and search user by user id.</li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">const passport = require('passport')
const LocalStrategy = require('passport-local')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const bcrypt = require('bcrypt')

const config = require('./config')
const userController = require('../controllers/user.controller')

const localLogin = new LocalStrategy(
    {
        usernameField: 'email'
    },
    async (email, password, done) =&gt; {
        const user = await userController.getUserByEmailPassword(
            email,
            password
        )
        return user
            ? done(null, user)
            : done(null, false, {
                  error:
                      'Your login details could not be verified. Please try again.'
              })
    }
)

const jwtLogin = new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwtSecret
    },
    async (payload, done) =&gt; {
        const user = await userController.getUserById(payload._id)
        return user ? done(null, user) : done(null, false)
    }
)

module.exports = passport.use(localLogin).use(jwtLogin)</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#serverconfigexpressjs-1"></a>server\config\express.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong><em>Add the passport middleware in our app.</em></strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">// authentication
app.use(passport.initialize())</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>The complete express.js file looks like this</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')

const routes = require('../routes')
const config = require('./config')
const passport = require('../middleware/passport')

// get app
const app = express()

// logger
if (config.env === 'development') {
    app.use(logger('dev'))
}

// get dist folder
const distDir = path.join(__dirname, '../../dist')

// use dist flder as hosting folder by express
app.use(express.static(distDir))

// parsing from api
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// secure apps http
app.use(helmet())

// allow cors
app.use(cors())

// authentication
app.use(passport.initialize())

// api router localhost:4050/api
app.use('/api/', routes)

// serve the index.html
app.get('*', (req, res) =&gt; res.sendFile(path.join(distDir, 'index.html')))

module.exports = app</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#servercontrollersauthcontrollerjs"></a>server\controllers\auth.controller.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong><em>Generate JSON Web Token</em></strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Now we will add generateToken method in auth controller this token we will return to the client.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = { generateToken }

function generateToken(user) {
    const payload = JSON.stringify(user)
    return jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' })
    // do not put secret in source code
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#serverconfigconfigjs-2"></a>server\config\config.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong><em>Add jwtSecret in config</em></strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">require('dotenv').config()
const envVars = process.env
module.exports = {
    port: envVars.PORT,
    env: envVars.NODE_ENV,
    jwtSecret: envVars.JWT_SECRET,
    mongo: {
        uri: envVars.MONGODB_URI,
        port: envVars.MONGO_PORT,
        isDebug: envVars.MONGOOSE_DEBUG
    }
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Note: It’s important that your secret is kept safe: only the originating server should know what it is. It’s best practice to set the secret as an environment variable, and not have it in the source code, especially if your code is stored in version control somewhere.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#env-1"></a>.env</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong><em>Add tje jwt secret value in .env file</em></strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>	NODE_ENV = development
	PORT = 4050
	MONGODB_URI=mongodb://localhost/productmart
	MONGOOSE_DEBUG:true
	JWT_SECRET=9f31e57b-4a4d-436f-a844-d9236837b2f6
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#serverroutesauthroutejs-2"></a>server\routes\auth.route.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong><em>Update Auth Route</em></strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:list --></p>
<ul>
<li>Updating auth route to have a&nbsp;<code>findme</code>&nbsp;method to populate the user based on the token by adding passport middlewares.</li>
<li>Creating APIs<code>register, login and findme</code>&nbsp;and for each one we will add a login middleware to return both&nbsp;<code>user &amp; token</code></li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">const express = require('express')
const asyncHandler = require('express-async-handler')

const userController = require('../controllers/user.controller')
const passport = require('../middleware/passport')
const authController = require('../controllers/auth.controller')

const router = express.Router()

// localhost:4050/api/auth/register
router.post('/register', asyncHandler(register), login)
// localhost:4050/api/auth/login
router.post('/login', passport.authenticate('local', { session: false }), login)
// localhost:4050/api/auth/findme
router.get('/findme', passport.authenticate('jwt', { session: false }), login)

async function register(req, res, next) {
    const user = req.body
    console.log(`registering user`, user)
    req.user = await userController.insert(user)
    next()
}

function login(req, res) {
    const user = req.user
    const token = authController.generateToken(user)
    res.json({
        user,
        token
    })
}
module.exports = router</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Now if you register a user from UI then you will see below in the network tab of chrome.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">{
    "user": {
        "roles": [],
        "_id": "5cd6cabf0fa512398cd8fbe1",
        "fullname": "asfsd",
        "email": "asdf@gmail.com",
        "hashedPassword": "$2b$10$K3lsayWxuriTDF5/MB5s8ejPMwD/t8M8CZYlZoYpOHddL/y8EZ4DK",
        "createdAt": "2019-05-11T13:14:39.770Z"
    },
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6W10sIl9pZCI6IjVjZDZjYWJmMGZhNTEyMzk4Y2Q4ZmJlMSIsImZ1bGxuYW1lIjoiYXNmc2QiLCJlbWFpbCI6ImFzZGZAZ21haWwuY29tIiwiaGFzaGVkUGFzc3dvcmQiOiIkMmIkMTAkSzNsc2F5V3h1cmlUREY1L01CNXM4ZWpQTXdEL3Q4TThDWllsWm9ZcE9IZGRML3k4RVo0REsiLCJjcmVhdGVkQXQiOiIyMDE5LTA1LTExVDEzOjE0OjM5Ljc3MFoifQ.VenrIYnBPMZJ23q8kQIRFLzBk7gouK_oogRssZIKI_8"
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#client-integration-to-jwt-authentication"></a>Client Integration to JWT Authentication</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>We will integrate JWT serverside apis with angular code base.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#generate-tokenstorate-service-in-angular-app"></a>Generate TokenStorate Service in Angular App</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>In client we have to save the web token in local storage therefore we will create a service.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>run below script&nbsp;<code>ng g s tokenStorage</code>&nbsp;This will create&nbsp;<code>token.storage.service.ts</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">import { Injectable } from '@angular/core';

const TOKEN_KEY = 'ProductMart.AuthToken';

@Injectable({providedIn:'root'})c
export class TokenStorage {
  constructor() {}

  signOut() {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.clear();
  }

  saveToken(token: string) {
    if (!token) {
      return;
    }
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }
}
</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#srcappauthservicets-1"></a>src\app\auth.service.ts</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong><em>Save Json Web Token After Register</em></strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted"> import { TokenStorage } from './token.storage.service';

 constructor(private http: HttpClient, private tokenStorage: TokenStorage) {}

  register(userToSave: any) {
    return this.http.post&lt;any&gt;(`${this.apiUrl}register`, userToSave).pipe(
      switchMap(({ user, token }) =&gt; {
        this.user$.next(user);
        this.tokenStorage.saveToken(token);
        console.log('register user successful', user);
        return of(user);
      }),
      catchError(err =&gt; {
        return throwError('Registration failed please contact admin');
      })
    );
  }
</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Now if you register an user from&nbsp;<a href="http://localhost:4200/home">website</a>&nbsp;then you can check the chrome application localstorage and you will find your key and token stored their.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>However now if you refresh your page user is no more available in our angular app.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Lets now create&nbsp;<code>findme</code>&nbsp;method that we will call every time when&nbsp;<code>app.component</code>&nbsp;is refreshed.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#srcappauthservicets-2"></a>src\app\auth.service.ts</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong><em>Fetch User once logged in after page refresh also</em></strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>adding&nbsp;<code>findme</code>&nbsp;method in&nbsp;<code>authservice</code>&nbsp;to get the user info from token.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">  findMe() {
    const token = this.tokenStorage.getToken();

    if (!token) {
      return EMPTY;
    }

    return this.http.get&lt;any&gt;('/api/auth/findme').pipe(
      switchMap(({ user }) =&gt; {
        this.setUser(user);
        console.log('Find User Success', user);
        return of(user);
      }),
      catchError(err =&gt; {
        return throwError('Find User Failed');
      })
    );
  }
</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#srcappappcomponentts"></a>src\app\app.component.ts</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong><em>Now lets call&nbsp;<code>findme</code>&nbsp;function in&nbsp;<code>app.component</code></em></strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>First we will implement onInit interface call find me and then subscribe to the user updated.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">  ngOnInit() {
    // find the user if already logged in
    this.allSubscriptions.push(
      this.authService.findMe().subscribe(({ user }) =&gt; (this.user = user))
    );

    // update this.user after login/register/logout
    this.allSubscriptions.push(
      this.authService.user.subscribe(user =&gt; (this.user = user))
    );
  }</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>This is the complete file for the&nbsp;<code>app.component</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">import { Component, OnDestroy, OnInit } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { User } from './user'
import { Subscription } from 'rxjs'

@Component({
    selector: 'pm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
    user: User
    allSubscriptions: Subscription[] = []

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        // find the user if already logged in
        this.allSubscriptions.push(this.authService.findMe().subscribe())

        // update this.user after login/register/logout
        this.allSubscriptions.push(
            this.authService.user.subscribe(user =&gt; (this.user = user))
        )
    }

    logout() {
        this.authService.logout()
        this.router.navigate(['/'])
    }

    ngOnDestroy(): void {
        this.allSubscriptions.forEach(s =&gt; s.unsubscribe())
    }
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Now restart the server and check it out!</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><strong>Still not working right?</strong>&nbsp;<strong>Because we are not passing the token to the serve</strong>r when we are trying to find out the logged in user. The general requirement is if the user is logged in then any request goes to server should have&nbsp;<code>Authorization header</code>in the request where we put the&nbsp;<code>Bearer ${token}</code>&nbsp;that goes to server. In order to achieve this in Angular we have&nbsp;<code>httpinterceptors</code>&nbsp;Lets create our own&nbsp;<code>header.interceptor.ts</code>&nbsp;now.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#srcappinterceptorsauth-headerinterceptorts"></a>src\app\interceptors\auth-header.interceptor.ts</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><strong><em>Crate JWT Header Interceptor</em></strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { TokenStorage } from '../token.storage.service'

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
    constructor(private tokenStorage: TokenStorage) {}
    intercept(
        req: HttpRequest&lt;any&gt;,
        next: HttpHandler
    ): Observable&lt;HttpEvent&lt;any&gt;&gt; {
        // Clone the request to add the new header
        const token = this.tokenStorage.getToken()
        const clonedRequest = req.clone({
            headers: req.headers.set(
                'Authorization',
                token ? `Bearer ${token}` : ''
            )
        })

        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest)
    }
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#srcappappmodulets"></a>src\app\app.module.ts</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Http interceptors are added to the request pipeline in the providers section of the app.module.ts file.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true
    }
  ],</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Now lets refresh the client app! Your server is running so now you will see the passport&nbsp;<code>jwtLogin</code>&nbsp;method is called.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#servermiddlewarepassportjs-1"></a>server\middleware\passport.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>One correction needed in&nbsp;<code>jwtLogin</code>&nbsp;to put await</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">const user = await userController.getUserById(payload._id)</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">const jwtLogin = new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwtSecret
    },
    async (payload, done) =&gt; {
        const user = await userController.getUserById(payload._id)
        return user ? done(null, user) : done(null, false)
    }
)</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Now after login if you refresh the page you have logged in ! it Worked!</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#fixing-logout"></a>Fixing Logout</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Once you logout still user is logged in why? When you do logout token is not cleared yet.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>got to&nbsp;<code>Authservice</code>&nbsp;and fix logout&nbsp;<code>src\app\auth.service.ts</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">logout() {
    // remove user from suject
    this.tokenStorage.signOut();
    this.setUser(null);
    console.log('user did logout successfull');
  }</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#fixing-login"></a>Fixing Login</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Once you login &amp; refresh still user is not persisted why? Because, we have not yet set the token in&nbsp;<code>localstorage</code>.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">login(email: string, password: string) {
    const loginCredentials = { email, password };
    console.log('login credentials', loginCredentials);
    // return of(loginCredentials);
    return this.http.post&lt;any&gt;(`${this.apiUrl}login`, loginCredentials).pipe(
      switchMap(({ user, token }) =&gt; {
        this.tokenStorage.saveToken(token);
        this.user$.next(user);
        console.log('find user successful', user);
        return of(user);
      }),
      catchError(err =&gt; {
        console.log('find user fail', err);

        return throwError(
          'Your login details could not be verified. Please try again.'
        );
      })
    );
  }</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#improving-network-speed"></a>Improving Network Speed</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Install compression npm package this will gzip our http response and hence decrease the payload from&nbsp;<code>kb</code>&nbsp;to&nbsp;<code>bytes</code>&nbsp;only :)</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><code>npm i -S compression</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#serverconfigexpressjs-2"></a>server\config\express.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">const compress = require('compression')
app.use(compress())</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Now check your network tab again did u see improvement ? I know your answer is yes!</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#cloud-setup-deploy-and-build-sample-app-in-cloud"></a>Cloud Setup Deploy And Build Sample App In Cloud</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#">Go Top</a>&nbsp;We will now deploy our app to cloud. I will use&nbsp;<code>heroku</code>&nbsp;for that. Please make sure you have account in Heroku.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#deploying--running-working-angular-app-to-cloud"></a>Deploying &amp; Running working Angular App to Cloud</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#preparing-angular-app-for-cloud"></a>Preparing Angular app for cloud</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Angular app needs some some changes before we deploy this app to cloud.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":4} --></p>
<h4><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#update-packagejson"></a>Update package.json</h4>
<p><!-- /wp:heading --></p>
<p><!-- wp:list --></p>
<ul>
<li>&nbsp;Create&nbsp;<strong>engines</strong></li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">  "engines": {
    "node": "10.x"
  },</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:list --></p>
<ul>
<li>&nbsp;Create a&nbsp;<strong>start</strong>&nbsp;script that will spawn your server</li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:paragraph --></p>
<p>Once your app is deployed to cloud run your server.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">"scripts": { ...
	"start": "node server"
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:list --></p>
<ul>
<li>&nbsp;Create&nbsp;<strong>postinstall</strong>&nbsp;script</li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:quote --></p>
<blockquote class="wp-block-quote"><p>Once your app will be deployed to cloud you want to run a script that will deploy your angular app to cloud.</p>
</blockquote>
<p><!-- /wp:quote --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">"scripts": { ...
	"build": "ng build",
	"postinstall": "npm run build -- --prod --aot"
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:list --></p>
<ul>
<li>&nbsp;Move&nbsp;<strong>typescript</strong>&nbsp;to dependencies</li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">"dependencies": {
	...
	"typescript": "~3.2.2"
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":4} --></p>
<h4><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#deploying-app-on-heroku"></a>Deploying app on Heroku</h4>
<p><!-- /wp:heading --></p>
<p><!-- wp:list --></p>
<ul>
<li>Create App:&nbsp;<code>heroku create</code></li>
<li>Deploy App:&nbsp;<code>git push heroku master</code></li>
<li>Scale App:&nbsp;<code>heroku ps:scale web=1</code></li>
<li>Open App:&nbsp;<code>heroku open</code></li>
<li>Check Logs :&nbsp;<code>heroku logs -tail</code></li>
</ul>
<p><!-- /wp:list --></p>
<p><!-- wp:heading {"level":4} --></p>
<h4><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#provisioning-adons-on-heroku"></a>Provisioning adons on Heroku</h4>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Mongo Lab</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":4} --></p>
<h4><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#setup-envvars-on-heroku"></a>Setup EnvVars on Heroku</h4>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Add required environment variables values on Heroku</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"linkDestination":"custom"} --></p>
<figure class="wp-block-image"><a href="https://gist.githubusercontent.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9/raw/9fc282ff3b328642733054c2f51b5b2e45f19029/envvars.JPG" target="_blank" rel="noreferrer noopener"><img src="{{ site.baseurl }}/assets/envvars.JPG" alt="EnvVars" /></a></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p>Next restart your app :&nbsp;<code>heroku restart</code>&nbsp;Reopen app:&nbsp;<code>heroku open</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":4} --></p>
<h4><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#running-working-angular-app-over-cloud"></a>Running working angular app over cloud</h4>
<p><!-- /wp:heading --></p>
<p><!-- wp:image {"linkDestination":"custom"} --></p>
<figure class="wp-block-image"><a href="https://gist.githubusercontent.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9/raw/bdeb1e754c2db9ec6106432817221793b8731520/app-running.JPG" target="_blank" rel="noreferrer noopener"><img src="{{ site.baseurl }}/assets/app-running.JPG" alt="Running Angular App on Cloud" /></a></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p>See app running live on cloud&nbsp;</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#architecture-in-angular-projects"></a>Architecture in Angular projects</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Organizing angular project</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#creating-shared-module"></a>Creating Shared Module</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Shared modules are the module where we put components, pipe, directives and filters that needs to be shared across many features.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>components, pipe, directives and filters have to be imported and re-exported in order to use them in different feature.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Run below script to crreate shared module.&nbsp;<code>ng g m shared</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Next move material module under shared module. Because, material module has items that are used across all modules like&nbsp;<code>button</code>&nbsp;and&nbsp;<code>card</code>&nbsp;etc.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#complete-code-of-shared-module"></a>Complete code of Shared Module</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><code>src\app\shared\shared.module.ts</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PmMaterialModule } from './material-module'

@NgModule({
    declarations: [],
    imports: [CommonModule, PmMaterialModule],
    exports: [PmMaterialModule]
})
export class SharedModule {}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#using-shared-module-in-feature-module"></a>Using Shared Module in Feature Module</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>import shared module in&nbsp;<code>app.module</code>&nbsp;and&nbsp;<code>products.module</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#creating-core-module"></a>Creating Core Module</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Core module is a module that can be only imported once in entire app. Therefore, any&nbsp;<code>angular service</code>&nbsp;which you think needs to be singleton throughout your app consider placing them in&nbsp;<code>core module</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Run below script for creating core module.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><code>ng g m core</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#what-can-go-in-core-module"></a>What can go in Core Module</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Auth Service should be singleton throughout our app therefore, we should move this service into&nbsp;<code>core module</code>. Next lets import core module in app module.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><code>src\app\app.module.ts</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">imports: [...CartModule]</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#adding-cart-feature"></a>Adding Cart Feature</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Add new Cart module with routing Run below script for cart module&nbsp;<code>ng g m cart --routing</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#products-page-alignment"></a>Products page alignment</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Now let align the products page and show products in grid and show add to cart button</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">&lt;mat-grid-list cols="5" rowHeight="600px"&gt;
    &lt;mat-grid-tile *ngFor="let product of (products | async)"&gt;
        &lt;mat-card&gt;
            &lt;img
                mat-card-image
                src="{{ product.imgUrl }}"
                alt="{{ product.name }}"
            /&gt;
            &lt;mat-card-content&gt;
                &lt;p&gt;{{ product.name }} : $ {{ product.price }}&lt;/p&gt;
            &lt;/mat-card-content&gt;
            &lt;mat-card-actions&gt;
                &lt;button
                    color="primary"
                    mat-stroked-button
                    (click)="addToCart(product)"
                &gt;
                    Add to Cart
                &lt;/button&gt;
            &lt;/mat-card-actions&gt;
        &lt;/mat-card&gt;
    &lt;/mat-grid-tile&gt;
&lt;/mat-grid-list&gt;</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#add-cartservice-in-the-cart-module"></a>Add CartService in the Cart Module</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>We will add a shopping cart service using&nbsp;<code>Behavior Subject</code>&nbsp;Cart Service will have state management technique using behavior subject.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Run below script to add cart service</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><code>ng g s cart/cart</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><code>src\app\cart\cart.service.ts</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { initialState, CartState } from './cart-state'
import { map } from 'rxjs/operators'
import { Product } from '../product'

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartSubject = new BehaviorSubject&lt;CartState&gt;(initialState)

    constructor() {}

    get cartState() {
        return this.cartSubject.asObservable()
    }

    get cartCount() {
        return this.cartSubject.pipe(map(state =&gt; state.products.length))
    }

    addToCart(product: Product) {
        const newState = {
            ...this.currentState,
            products: [].concat(this.currentState.products, product)
        }
        this.cartSubject.next(newState)
    }

    get currentState() {
        return this.cartSubject.value
    }
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#shopping-cart-state--initial-state"></a>Shopping Cart State &amp; Initial State</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><code>src\app\core\product.ts</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">export interface Product {
    name: string
    price: number
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p><code>src\app\cart\state\cart-state.ts</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">import { Product } from '../product'

export interface CartState {
    products: Product[]
}
export const initialState = {
    products: []
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#sharing-state-via-shared-component-from-cart-feature"></a>Sharing State Via Shared Component from Cart Feature</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Now we want to show the cart item count. Therfore, lets create an component to show the cart item count in an icon with badge.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><code>ng g c cart/cartItemCount</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">&lt;mat-icon [matBadge]="cartItemCount$|async" matBadgeColor="warn"
    &gt;shopping_cart&lt;/mat-icon
&gt;</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Injecting Angular Service in Directive</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">  cartItemCount$: Observable&lt;number&gt;;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItemCount$ = this.cartService.cartCount;
  }</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>export component to share&nbsp;<code>src\app\cart\cart.module.ts</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CartRoutingModule } from './cart-routing.module'
import { SharedModule } from '../shared/shared.module'
import { CartItemCountComponent } from './cart-item-count/cart-item-count.component'

@NgModule({
    declarations: [CartItemCountComponent],
    exports: [CartItemCountComponent],
    imports: [CommonModule, CartRoutingModule, SharedModule]
})
export class CartModule {}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":4} --></p>
<h4><a href="https://gist.github.com/rupeshtiwari/533ae85655816b58386f7bd1e94df8a9#showing-cart-icon-on-menu"></a>Showing Cart Icon on Menu</h4>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>src\app\app.component.html</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">&lt;div&gt;
    &lt;pm-cart-item-count&gt;&lt;/pm-cart-item-count&gt;
&lt;/div&gt;</pre>
<p><!-- /wp:preformatted --></p>
