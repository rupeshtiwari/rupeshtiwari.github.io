---
layout: post
title: SETTING UP WEBPACK FOR ANY TYPESCRIPT PROJECT FROM SCRATCH
date: 2019-06-01 10:02:20.000000000 -04:00
type: post

published: true
comments: true
social-share: true
categories:
- Webpack
tags:
- Node.js
- Typescript
- webpack
meta:
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1611612411;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:775;}i:1;a:1:{s:2:"id";i:1021;}i:2;a:1:{s:2:"id";i:493;}}}}
  _edit_last: '1'
  qode_page_background_image_fixed: 'yes'
  qode_hide-featured-image: 'no'
  qode_post_style_masonry_date_image: full
  qode_post_style_masonry_gallery: default
  qode_show-sidebar: default
  gallery_type: slider
  video_format_choose: youtube
  _b2s_post_meta: a:6:{s:8:"og_title";s:58:"SETTING UP WEBPACK FOR ANY TYPESCRIPT
    PROJECT FROM SCRATCH";s:7:"og_desc";s:220:"Welcome to step by step hands-on guide
    to setup webpack in your upcoming typescript project. Please follow the steps
    and you should be able to create your own webpack project. Please download the
    source code from github.";s:8:"og_image";s:84:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/06/feature-createwebpack-1.jpg";s:10:"card_title";s:58:"SETTING
    UP WEBPACK FOR ANY TYPESCRIPT PROJECT FROM SCRATCH";s:9:"card_desc";s:220:"Welcome
    to step by step hands-on guide to setup webpack in your upcoming typescript project.
    Please follow the steps and you should be able to create your own webpack project.
    Please download the source code from github.";s:10:"card_image";s:84:"https://blog.rupeshtiwari.com/wp-content/uploads/2019/06/feature-createwebpack-1.jpg";}
  slide_template: default
  _yoast_wpseo_primary_category: '214'
  _wpb_vc_js_status: 'false'
  _yoast_wpseo_content_score: '60'
  wpmm_postgrid_views: '639'
  _qode-like: '0'
  _thumbnail_id: '2176'
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: "/setting-up-webpack-for-any-typescript-project-from-scratch/"
description: Welcome to step by step hands-on guide to setup webpack in your upcoming
  typescript project. Please follow the steps and you should be able to create your
  own webpack project. Please download the source code from github.
---
<p><!-- wp:heading {"level":1} --></p>
<h1>Introduction</h1>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Welcome to step by step hands-on guide to setup webpack in your upcoming typescript project. Please follow the steps and you should be able to create your own webpack project. <a href="https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript"><strong>Download complete Source Code from GitHub Now !</strong></a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:list {"ordered":true} --></p>
<ol>
<li>✅Create a Typescript node.js project.</li>
<li>✅Install Dependencies with webpack &amp; typescripts.</li>
<li>✅Use Webpack CLI to crate&nbsp;<code>webpack.config.js</code>&nbsp;file and modify webpack.config.js based on our need.</li>
<li>✅Add Build script in package.json At this point you should see the dist folder created with bundle file.</li>
<li>✅Create TypeDefinition Bundle.</li>
<li>✅Clean up dist folder before create bundle.</li>
<li>✅Copy your library&nbsp;<code>package.json</code>&nbsp;to your dist folder.</li>
<li>✅Creating Typescript documentation of your own Typescript Project</li>
</ol>
<p><!-- /wp:list --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#creating-a-typescript-nodejs-project"></a>🌄Creating a Typescript Node.js Project</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Run below script to create default node.js project.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>npm init --y
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#step-1--install-dependencies"></a>Step 1- Install Dependencies</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Run below script to get all of the dependencies</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>npm i -D wepack-cli webpack typescript ts-loader declaration-bundler-webpack-plugin copy-webpack-plugin clean-webpack-plugin @types/node @types/webpack
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>package.json looks like this:</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js">{
    "name": "@scci-questions/itemslibrary-contracts-app",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {},
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@types/node": "^12.0.4",
        "@types/webpack": "^4.4.32",
        "clean-webpack-plugin": "^3.0.0",
        "copy-webpack-plugin": "^5.0.3",
        "declaration-bundler-webpack-plugin": "^1.0.3",
        "ts-loader": "^6.0.1",
        "typescript": "^3.5.1",
        "webpack": "^4.32.2",
        "webpack-cli": "^3.3.2",
        "wepack-cli": "0.0.1-security"
    }
}
</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#step-2--add-tsconfig-file--required-for-typescript-project"></a>Step 2- Add TSConfig File ( required for typescript project)</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Add tsconfig file at the root of the project&nbsp;<code>tsconfig.json</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js">{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true,
    "declaration": true,
    "moduleResolution": "node",
    "outDir": "./dist",
    "rootDir": "."
  },
  "include": ["src"]
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#step-3--create-calculatorts-file"></a>Step 3- Create Calculator.ts file</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><code>src\calculator.ts</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js">export class Calculator {
    static version = '1'
    constructor() {}
    add(a: number, b: number) {
        console.log(`version ${Calculator.version}`)
        return a + b
    }
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#step-4--create-indexts-file"></a>Step 4- Create Index.ts File</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>create index file to export all of the public apis/modules.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><code>src\index.ts</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">export * from './calculator'</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#creating-webpackconfigjs-file"></a>🚿Creating Webpack.config.js file</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Run below script to go with interactive webpack cli</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>npx webpack-cli init
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Webpack cli will ask you below questions and then it will create the webpack.config.js file automatically See my answers to below questions.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>? Will your application have multiple bundles? No
? Which module will be the first to enter the application? [default: ./src/index]
? Which folder will your generated bundles be in? [default: dist]:
? Will you be using ES2015? No
? Will you use one of the below CSS solutions? No
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:image {"linkDestination":"custom"} --></p>
<figure class="wp-block-image"><a href="https://gist.githubusercontent.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5/raw/2113b81710d56430ab93549dda834d4d0f269f12/z_interactive-webpack-cli.PNG" target="_blank" rel="noreferrer noopener"><img src="{{ site.baseurl }}/assets/2019/06/z_interactive-webpack-cli.PNG" alt="questions" /></a></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p><strong>Will you be using ES2015?</strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Answer: No, since I will use Typescript therefore I answer No to below question.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><strong>Will you use one of the below CSS solutions?</strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Answer: No, since My project is purely typescript library project I don't have web project also I don't have html css. Therefore, I selected no for CSS question.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#adding-entry-point-in-webpack"></a>Adding Entry Point in Webpack</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js">    entry: {
        "mylib": path.resolve(__dirname, 'src/index.ts')
    },</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#adding-typescript-loader"></a>Adding Typescript Loader</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Add below rule in your&nbsp;<code>webpack.config.js</code>&nbsp;file.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js"> module: {
        rules: [
            {
                test: /<strong>\.</strong>ts$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            }
        ]
    },</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#remove-chunk-hashing"></a>Remove Chunk Hashing</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Normally webpack will create a bundle file with hashed file name. I personally don't like it therefore I am removing the hash from output. Feel free to skip this step.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><code>webpack.config.js</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js">  output: {
        chunkFilename: '[name].js',
        filename: '[name].js'
    },</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#add-devtools"></a>Add devtools</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>In&nbsp;<code>webpack.config.js</code>&nbsp;add devtool</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>devtool:'source-map',
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#add-resolve-for-typescript-extensions"></a>Add Resolve for Typescript extensions</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>In&nbsp;<code>webpack.config.js</code>&nbsp;add resolve</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>resolve: { extensions: ['.ts'] },
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#add-build-script-in-packagejson"></a>🔧Add Build Script in package.json</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted --></p>
<pre class="wp-block-preformatted">"scripts": {
    "build": "webpack"
},</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Now if you run npm run build you should see the dist folder to be created with your output file.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><strong>Build Output in Dist Folder:</strong></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"linkDestination":"custom"} --></p>
<figure class="wp-block-image"><a href="https://gist.githubusercontent.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5/raw/beea898180eaa04e28268155ac89661331d6bc44/z_build_output.PNG" target="_blank" rel="noreferrer noopener"><img src="{{ site.baseurl }}/assets/2019/06/z_build_output.PNG" alt="Build Output in Dist Folder" /></a></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#">Go to Top</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>🏆Commit Link&nbsp;<a href="https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript/commit/adc2c62508ba534026bed81fb9ff7d2a6d8c7f9b">https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript/commit/adc2c62508ba534026bed81fb9ff7d2a6d8c7f9b</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#create-typedefinition-bundle"></a>🍺Create TypeDefinition Bundle</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>It is always a good idea to also create type definition bundle so that your library can be used by other projects and they can get the type intellisense.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#step-1--add-fix-for-type-definition-bundler-webpack-plugin"></a>Step 1- add fix for type definition bundler webpack plugin</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Add below file&nbsp;<code>declaration-bundler-webpack-plugin.fix.js</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js">const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin')

let buggyFunc = DeclarationBundlerPlugin.prototype.generateCombinedDeclaration
DeclarationBundlerPlugin.prototype.generateCombinedDeclaration = function(
    declarationFiles
) {
    for (var fileName in declarationFiles) {
        let declarationFile = declarationFiles[fileName]
        declarationFile._value =
            declarationFile._value || declarationFile.source()
    }
    return buggyFunc.call(this, declarationFiles)
}

module.exports = DeclarationBundlerPlugin</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#step-2--add-declarationbundlerplugin-to-webpackconfigjs"></a>Step 2- add DeclarationBundlerPlugin to webpack.config.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js">const DeclarationBundlerPlugin = require('./declaration-bundler-webpack-plugin.fix')

...
 plugins: [
        new UglifyJSPlugin(),
        new DeclarationBundlerPlugin({
            moduleName: '"mylib"',
            out: '@types/index.d.ts'
        })
    ],
...</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Complete webpack.config.js file looks like below:</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js">const webpack = require('webpack')
const path = require('path')
const DeclarationBundlerPlugin = require('./declaration-bundler-webpack-plugin.fix')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        mylib: path.resolve(__dirname, 'src/index.ts')
    },
    module: {
        rules: [
            {
                test: /<strong>\.</strong>ts$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            }
        ]
    },
    resolve: { extensions: ['.ts'] },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js'
    },

    mode: 'development',
    plugins: [
        new UglifyJSPlugin(),
        new DeclarationBundlerPlugin({
            moduleName: '"mylib"',
            out: '@types/index.d.ts'
        })
    ],
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[<strong>\\</strong>/]node_modules[<strong>\\</strong>/]/
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    }
}</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#step-3--create-build"></a>Step 3- Create Build</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Now run&nbsp;<code>npm run build</code>&nbsp;It will crate dist folder with library bundle and type definition bundle as well.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Dist folder with&nbsp;<code>mylib.js</code>&nbsp;and&nbsp;<code>@types</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"linkDestination":"custom"} --></p>
<figure class="wp-block-image"><a href="https://gist.githubusercontent.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5/raw/3910cb02805c5530ba828a5662ae2355d2055d43/z_dist%2520with%2520typedefinition%2520bundle.PNG" target="_blank" rel="noreferrer noopener"><img src="{{ site.baseurl }}/assets/2019/06/z_dist%2520with%2520typedefinition%2520bundle.PNG" alt="DIST with mylib and types image" /></a></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#">Go to Top</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>🏆Commit Link&nbsp;<a href="https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript/commit/adc2c62508ba534026bed81fb9ff7d2a6d8c7f9b">https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript/commit/adc2c62508ba534026bed81fb9ff7d2a6d8c7f9b</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#clean-up-dist-folder-before-create-bundle"></a>🌱Clean up dist folder before create bundle.</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Add below code in&nbsp;<code>webpack.config.js</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js">const { CleanWebpackPlugin }  = require('clean-webpack-plugin')

     plugins: [
      new CleanWebpackPlugin(),
      ...
    ],
</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Now add some garbage files in dist folder and run&nbsp;<code>npm run build</code>&nbsp;you should see your garbage files are deleted and only types and lib files are there.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#">Go to Top</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>🏆Commit Link&nbsp;<a href="https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript/commit/5f77ec0af2cf89b1e7508d14697d562a8202becb">https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript/commit/5f77ec0af2cf89b1e7508d14697d562a8202becb</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#copy-your-library-packagejson-to-your-dist-folder"></a>📠Copy your library&nbsp;<code>package.json</code>&nbsp;to your dist folder</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>You should copy package.json to dist folder so that you can publish your dist folder to&nbsp;<code>npm.org</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#step-1--create-srcpackagejson-file-with-below-code"></a>Step 1- Create&nbsp;<code>src\package.json</code>&nbsp;file with below code.</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js">{
    "name": "my-sample-typescript",
    "version": "1.0.0",
    "description": "My Library",
    "author": "",
    "license": "ISC"
}
</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#step-3--copy-packagejson-after-build"></a>Step 3- Copy package.json after build</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Add below webpack plugin to copy package.json file to dist.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js">const CopyWebpackPlugin = require('copy-webpack-plugin')


plugins: [
...
        new CopyWebpackPlugin([
            {
                from: './src/package.json',
                to: '../dist/package.json'
            }
        ])
    ],
</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Now if you run the&nbsp;<code>npm run build</code>&nbsp;you should see package.json file in your dist folder</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"linkDestination":"custom"} --></p>
<figure class="wp-block-image"><a href="https://gist.githubusercontent.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5/raw/313d4ba58d6ae88fc6606e549cebb16d03384eb1/z_copy%2520package.png" target="_blank" rel="noreferrer noopener"><img src="{{ site.baseurl }}/assets/2019/06/z_copy%2520package.png" alt="adding package.json in dist folder image" /></a></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#">Go to Top</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>🏆Commit Link :&nbsp;<a href="https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript/commit/fc1a1cd7c240f63877957083cbe84fce72db975e">https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript/commit/fc1a1cd7c240f63877957083cbe84fce72db975e</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading --></p>
<h2><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#creating-typescript-documentation-of-your-project"></a>📝Creating Typescript documentation of your project</h2>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Read my article for detail insight&nbsp;<a href="https://blog.rupeshtiwari.com/how-to-create-documentation-of-any-typescript-project/">https://blog.rupeshtiwari.com/how-to-create-documentation-of-any-typescript-project/</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#step-1--install-typedoc"></a>Step 1- Install typedoc</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Run below script to install typedoc and webpack plugin for typedoc</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>npm i -D typedoc-webpack-plugin typedoc
</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#step-2--update-webpackconfigjs"></a>Step 2- Update webpack.config.js</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p>Add below code in your&nbsp;<code>webpack.config.js</code>&nbsp;file.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:preformatted {"className":"EnlighterJSRAW"} --></p>
<pre class="EnlighterJSRAW" data-enlighter-language="js">const TypedocWebpackPlugin = require('typedoc-webpack-plugin')

   plugins: [
       ...
        new TypedocWebpackPlugin({
            out: 'docs'
        })
    ],</pre>
<p><!-- /wp:preformatted --></p>
<p><!-- wp:paragraph --></p>
<p>Now if you run the&nbsp;<code>npm run build</code>&nbsp;you should see docs folder created you can browse via any browser and see them.&nbsp;👌</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:image {"linkDestination":"custom"} --></p>
<figure class="wp-block-image"><a href="https://gist.githubusercontent.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5/raw/0d2985547643f3e0988dcbe70d71a5fcaa10f90b/z_docsfor%2520typescript.PNG" target="_blank" rel="noreferrer noopener"><img src="{{ site.baseurl }}/assets/2019/06/z_docsfor%2520typescript.PNG" alt="Docs" /></a></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:image {"linkDestination":"custom"} --></p>
<figure class="wp-block-image"><a href="https://gist.githubusercontent.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5/raw/0d2985547643f3e0988dcbe70d71a5fcaa10f90b/z_docshtml.png" target="_blank" rel="noreferrer noopener"><img src="{{ site.baseurl }}/assets/2019/06/z_docshtml.png" alt="Page" /></a></figure>
<p><!-- /wp:image --></p>
<p><!-- wp:paragraph --></p>
<p><a href="https://gist.github.com/rupeshtiwari/e7235addd5f52dc3e449672c4d8b88d5#">Go to Top</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>🏆Commit Link :&nbsp;<a href="https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript/commit/33ca92547efbead58cb783a78fa51d847db7d2b4">https://github.com/rupeshtiwari/setup-webpack-from-scratch-for-typescript/commit/33ca92547efbead58cb783a78fa51d847db7d2b4</a></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Final webpack.config file is here</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>const webpack = require('webpack')
const path = require('path')
const DeclarationBundlerPlugin = require('./declaration-bundler-webpack-plugin.fix')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TypedocWebpackPlugin = require('typedoc-webpack-plugin') 

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        mylib: path.resolve(__dirname, 'src/index.ts')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            }
        ]
    },
    resolve: { extensions: ['.ts'] },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js'
    },

    mode: 'development',
    plugins: [
        new CleanWebpackPlugin(),
        new UglifyJSPlugin(),
        new DeclarationBundlerPlugin({
            moduleName: '"mylib"',
            out: '@types/index.d.ts'
        }),
        new CopyWebpackPlugin([
            {
                from: './src/package.json',
                to: '../dist/package.json'
            }
        ]),
        new TypedocWebpackPlugin({
            out: 'docs'
        })
    ],
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    }
}
</code></pre>
<p><!-- /wp:code --></p>
