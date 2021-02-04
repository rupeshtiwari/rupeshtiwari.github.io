---
layout: post
title: Integrating CkEditor In Nx Monorepo
date: "2021-02-01 10:22 -0500"
subtitle: Learn how to integrate ckeditor with custom plugin in Nx Monorepo
description: Learn how to integrate ckeditor with custom plugin in Nx Monorepo
cover-img: "https://i.imgur.com/NRaQUA5.png"
cover_image: "https://imgur.com/H43sJjo.png"
thumbnail-img: "https://imgur.com/6ySnUBQ.png"
share-img: "https://imgur.com/6ySnUBQ.png"
tags: "nx,angular,ckeditor,beginners"
canonical_url: "https://rupeshtiwari.github.io/2021-02-01-integrating-ckeditor-in-nx-monorepo/"
last_modified_at: "2021-02-01 10:22 -0500"
published: true
sitemap: true
excerpt_separator: <!--more-->
id: 588929
toc: true
---

> So you want to learn how you will integrate CkEditor v5 in
> [Nx Monorepo](https://nx.dev). Do you also want to learn how to create custom
> plugin inside CkEditor v5? Then I will show you how I will consume **CkEditor
> v5** with custom plugin inside Angular project. I will use Nrwl/Nx Monorepo to
> demonstrate this.

## Introduction

I need to create one custom placeholder button on the ckeditor toolbar then I
want to use this ckeditor in my angular project.

![](https://i.imgur.com/Oha32uv.png)

I will not use CkEditor Angular inbuilt component. Because, they do not give
much benefit. There is no easy way to add custom plugin inside the angular
component.

Therefore, I will create my own CkEditor JS project inside the Nx Monorepo. I
will guide & show you how to initialize CKEditor 5 rich-text inline editor from
source code.

![](https://i.imgur.com/HSwnfZU.png)

And then consume in my own Angular project called `editor`. Then I will use
`editor` directive in my other Angular projects as CkEditor custom Angular
component.

## Create New Nrwl/Workspace Library for CkEditor JavaScript Project

I am going to use Nx Console to create my CkEditor Javascript Project. Please
install
[Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)
from market place in your Vs Code Extensions.

Follow steps to create Nrwl/workspace library see below steps in screenshot.

![](https://i.imgur.com/tRUo45x.png)

Fill the library details in the nx console form as in screenshot.

- **Name**: `ckeditor`
- **directory**: `branding`
- **importPath**: `@myorg/branding-ckeditor`
- **JS**: `Generate JS`
- **linter**: `Eslint`

![](https://i.imgur.com/sc9IJW4.png)

![](https://i.imgur.com/9shPCaY.png)

![](https://i.imgur.com/c28A5Cg.png)

## Adding CkEditor Node Packages Dependency

I will use independent package.json file inside ckeditor project and only put
the dependencies required for ckeditor.

Add below dependencies and dev-dependencies. Not you need ckeditor webpack file
as well to compile the project with custom plugin.

```json
  "dependencies": {
    "@ckeditor/ckeditor5-adapter-ckfinder": "^25.0.0",
    "@ckeditor/ckeditor5-autoformat": "^25.0.0",
    "@ckeditor/ckeditor5-basic-styles": "^25.0.0",
    "@ckeditor/ckeditor5-block-quote": "^25.0.0",
    "@ckeditor/ckeditor5-ckfinder": "^25.0.0",
    "@ckeditor/ckeditor5-easy-image": "^25.0.0",
    "@ckeditor/ckeditor5-editor-inline": "^25.0.0",
    "@ckeditor/ckeditor5-essentials": "^25.0.0",
    "@ckeditor/ckeditor5-heading": "^25.0.0",
    "@ckeditor/ckeditor5-image": "^25.0.0",
    "@ckeditor/ckeditor5-indent": "^25.0.0",
    "@ckeditor/ckeditor5-link": "^25.0.0",
    "@ckeditor/ckeditor5-list": "^25.0.0",
    "@ckeditor/ckeditor5-media-embed": "^25.0.0",
    "@ckeditor/ckeditor5-paragraph": "^25.0.0",
    "@ckeditor/ckeditor5-paste-from-office": "^25.0.0",
    "@ckeditor/ckeditor5-table": "^25.0.0",
    "@ckeditor/ckeditor5-typing": "^25.0.0",
    "copyfiles": "^2.4.1",
    "webpack-cli": "^3.3.11"
  },
  "devDependencies": {
    "@ckeditor/ckeditor5-core": "^25.0.0",
    "@ckeditor/ckeditor5-dev-utils": "^20.0.0",
    "@ckeditor/ckeditor5-dev-webpack-plugin": "^20.0.0",
    "@ckeditor/ckeditor5-theme-lark": "^25.0.0",
    "postcss-loader": "^3.0.0",
    "raw-loader": "^4.0.1",
    "style-loader": "^1.2.1",
    "terser-webpack-plugin": "^3.0.2",
    "webpack": "^4.43.0"
  }
```

Then open terminal from this package & Run `npm install` to install all ckeditor
dependencies.

## Creating Custom Placeholder Button on ckeditor Toolbar

Lets create placeholder button on tool bar for that follow steps:

![](https://i.imgur.com/a08eiXh.png)

1. Create libs\branding\ckeditor\src\lib\plugins\placeholder\placeholder.js

```javascript=
import PlaceholderButtonUI from "./placeholderbuttonui";
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";

export default class Placeholder extends Plugin {
	static get requires() {
		return [PlaceholderButtonUI];
	}

	static get pluginName() {
		return "placeholder";
	}
}

```

2. Create
   libs\branding\ckeditor\src\lib\plugins\placeholder\placeholderbuttonui.js

```javascript=
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import pilcrow from './icons/pilcrow.svg';

export default class PlaceholderButtonUI extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('placeholder', (locale) => {
      const placeHolderButtonOnToolbar = new ButtonView(locale);

      placeHolderButtonOnToolbar.set({
        label: 'fsms-Placeholder', // tooltip to show
        icon: pilcrow,
        tooltip: true,
      });

      placeHolderButtonOnToolbar.on('execute', () => '');

      return placeHolderButtonOnToolbar;
    });
  }
}

```

## Importing Custom Plugin Inside Ckeditor.js File

![](https://i.imgur.com/GVCbl7H.png)

```javascript
import InlineEditorBase from "@ckeditor/ckeditor5-editor-inline/src/inlineeditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import Placeholder from "./plugins/placeholder/placeholder";

export default class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
InlineEditor.builtinPlugins = [
  Essentials,
  UploadAdapter,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  CKFinder,
  EasyImage,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,
  Placeholder,
];

// Editor configuration.
InlineEditor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "indent",
      "outdent",
      "|",
      "imageUpload",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "undo",
      "redo",
      "|",
      "placeholder",
    ],
  },
  image: {
    toolbar: [
      "imageStyle:full",
      "imageStyle:side",
      "|",
      "imageTextAlternative",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "en",
};
```

## Creating Webpack File for CkEditor JavaScript Project

I want to compile ckeditor project and create final `index.js` file under SRC
folder. We will use ckeditor official webpack file to work on this.

![](https://i.imgur.com/jCACqrp.png)

I will take the webpack.json file from ckeditor official site
([Learn more here](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/quick-start.html))
so that I don't have to re-write all.

However, I have to change the **entry** path, **output** path, and output
**filename** in the webpack file.

Entry Path: `entry: path.resolve(__dirname, 'src/lib', 'ckeditor.js'),`

Output Path: `path.resolve(__dirname,'src'),`

Output Filename: `filename: 'index.js',`

Final webpack file:

```javascript
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const path = require("path");
const webpack = require("webpack");
const { bundler, styles } = require("@ckeditor/ckeditor5-dev-utils");
const CKEditorWebpackPlugin = require("@ckeditor/ckeditor5-dev-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  devtool: "source-map",
  performance: { hints: false },

  entry: path.resolve(__dirname, "src/lib", "ckeditor.js"),

  output: {
    // The name under which the editor will be exported.
    library: "InlineEditor",
    path: path.resolve(__dirname, "src"),
    filename: "index.js",
    libraryTarget: "umd",
    libraryExport: "default",
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          output: {
            // Preserve CKEditor 5 license comments.
            comments: /^!/,
          },
        },
        extractComments: false,
      }),
    ],
  },

  plugins: [
    new CKEditorWebpackPlugin({
      // UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
      // When changing the built-in language, remember to also change it in the editor's configuration (src/ckeditor.js).
      // language: 'en',
      // additionalLanguages: 'all',
    }),
    new webpack.BannerPlugin({
      banner: bundler.getLicenseBanner(),
      raw: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["raw-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "singletonStyleTag",
              attributes: {
                "data-cke": true,
              },
            },
          },
          {
            loader: "postcss-loader",
            options: styles.getPostCssConfig({
              themeImporter: {
                themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
              },
              minify: true,
            }),
          },
        ],
      },
    ],
  },
};
```

## Building CkEditor JavaScript Project

Now lets add the script to build this ckeditor JS project and create index.js
file.

Go to Package.json of ckeditor project and add below scripts to compile project.

```json
"scripts": {
    "build:dev": "webpack --mode development",
    "build": "webpack --mode production"
  },
```

Lets build the ck-editor project now. Open terminal from ckeditor project
location

![](https://i.imgur.com/mT5KSGT.png)

and run `npm run build:dev`

![](https://i.imgur.com/2Hl4BOc.png)

Notice our index.js file created which has `InlineEditor` that we created with
our custom placeholder button.

![](https://i.imgur.com/PkZFAYE.png)

## Creating Editor Angular Library

Next I will create one angular project as library there we will consume
`InlineEidtor` and crate our custom `Editor` Angular directive.

Use Nx Console to crate @nrwl/angular - Library project.

![](https://i.imgur.com/YhUqukj.png)

Fill out the form to create angular library. We will make our project **Non
Buildable** & **Non Publishable**

- **name**: `editor`
- **style**: `css`
- **directory**: `branding`
- **importPath**: `@myorg/branding-editor`
- **prefix**: `@myorg-branding`
- **tags**: `scope:branding,type:branding-editor`
- **unitTestRunner**: `Karma`

![](https://i.imgur.com/y5C3UH9.png)

![](https://i.imgur.com/BD3BGNF.png)

![](https://i.imgur.com/wKr9BrD.png)

![](https://i.imgur.com/bAn5EIk.png)

Angular Project created

![](https://i.imgur.com/4kRLClC.png)

## Creating Angular Editor Directive using CkEditor5

Create Editor.Directive.ts under `editor` lib

```typescript
import { Directive, ElementRef, Input, OnInit } from "@angular/core";

import * as InlineEditor from "@myorg/branding-ckeditor";

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: "[editor]", // If you put something else it will not work. Keep it editor.
})
export class BrandingEditorDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  @Input() toolbarSpecifications: any;
  @Input() readOnly = false;

  ngOnInit(): void {
    this.CreateInlineEditor();
  }

  public CreateInlineEditor(): void {
    const configObj = JSON.parse(this.toolbarSpecifications);

    InlineEditor.create(this.elementRef.nativeElement, configObj)
      .then((editor) => {
        editor.isReadOnly = this.readOnly;
        console.log(Array.from(editor.ui.componentFactory.names()));
      })
      .catch((error) => {
        console.error(error.stack);
      });
  }
}
```

Export the directive so to use in other projects.

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrandingEditorDirective } from "./editor.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [BrandingEditorDirective],
  exports: [BrandingEditorDirective], // export
})
export class BrandingEditorModule {}
```

Export directive from index.ts file

```typescript
export * from "./lib/branding-editor.module";
export * from "./lib/editor.directive";
```

## Using Editor Angular Directive inside Other Angular Library

Now I will use the editor inside my angular project `puppy-editor`

1. Import `BrandingEditorModule`

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { AddPuppyComponent } from "./add-puppy/add-puppy.component";
import { BrandingEditorModule } from "@myorg/branding-editor";

export const salesPuppyEditorRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    BrandingEditorModule, // importing module
    RouterModule.forChild([
      { path: "", pathMatch: "full", component: AddPuppyComponent },
    ]),
  ],
  declarations: [AddPuppyComponent],
  exports: [AddPuppyComponent],
})
export class SalesPuppyEditorModule {}
```

2. Using `myorg-branding-editor` in Angular Component HTML

```html
<div
  class="margin50 block80"
  editor
  toolbarSpecifications='{"toolbar": ["bold", "italic", "|", "undo", "redo", "|", "placeholder"]}'
>
  <b>Please click here</b>
  Showing 4 build-in plugins and 1 custom plugin (placeholder)
</div>

<div
  class="margin50 block80"
  editor
  toolbarSpecifications='{"toolbar": ["selectAll", "undo", "redo", "bold", "italic", "blockQuote", "ckfinder", "imageTextAlternative", "imageUpload", "heading", "imageStyle:full", "imageStyle:side", "indent", "outdent", "link", "numberedList", "bulletedList", "mediaEmbed", "insertTable", "tableColumn", "tableRow", "mergeTableCells", "|", "placeholder"]}'
>
  <b>Please click here</b>
  Showing all plugins and our own custom plugin as well.
</div>

<div
  class="margin50 block80"
  editor
  readOnly="true"
  toolbarSpecifications='{"toolbar": ["bold", "italic", "|", "undo", "redo"]}'
>
  <b>Please click here</b>
  Showing no editor since it is readonly "readOnly='true'"
</div>
```

I am using `addpuppy` directive in my `cutepuppies-admin` app. Next lets run the
app.

## Running Nx Monorepo app to see ckeditor in action

Run `nx serve cutepuppies-admin`

Click first box to see 4 built-in and out custom plugin

![](https://i.imgur.com/omkBD5z.png)

Click second box to see all plugins and our custom plugin

![](https://i.imgur.com/5mJVbmj.png)

Click 3rd one and you wont see editor since it is in readonly mode.

![](https://i.imgur.com/t7nwOLl.png)

## Using Nx Build to build ckeditor JavaScript Project

I will give you one tip to modify `workspace.json` such that nx will run
ckeditor build when you run `nx build branding-ckeditor`.

With this we will get benefit of dependency-graph out of the box from nx. When
you change ckeditor project then nx will show how many projects are impacted.
Which is super helpful.

I would add a build script in workspace.json file like below. Go to
"branding-ckeditor" and inside the "build" object lets add
**"@nrwl/workspace:run-commands"** command executor. This helps you to run any
custom command line program. I will use this to run `npm run build` inside
ckeditor project.

```json
    "branding-ckeditor": {
      "root": "libs/branding/ckeditor",
      "sourceRoot": "libs/branding/ckeditor/src",
      "projectType": "library",
      "targets": {
        "lint": {
          "executor": "@nrwl/linter:eslint",
          "options": {
            "lintFilePatterns": [
              "libs/branding/ckeditor/**/*.js"
            ]
          }
        },
        "build": {
          "executor": "@nrwl/workspace:run-commands",

          "options": {
            "outputPath": "libs/branding/ckeditor", // output folder to create index.js file
            "commands": [
              "npm run build" // command to build ckeditor in prod mode.
            ],
            "cwd": "libs/branding/ckeditor/src", // location of the ckeditor project's src file
            "parallel": false
          }
        }
      }
    },
```

Now go to the root of the folder and you can build ckeditor project right from
here. Run `nx build branding-ckeditor`

This is really cool! :+1:

ckeditor build run successfully:

![](https://i.imgur.com/uUeno2F.png)

## Testing Dependency Graph after Modifying CkEditor JavaScript Project

This is my overall dependency graph of the project

![](https://i.imgur.com/eycLmti.png)

Now go to ckeditor placeholderbuttonui.js and change the tooltip.

![](https://i.imgur.com/XwaTLQb.png)

Now run `npm run affected:dep-graph` to see the affected projects.

Notice you can see Nx identified how many projects are impacted.

![](https://i.imgur.com/WO4pn4Y.png)

I love the way Nx treats everything as same. I mean I have JavaScript project
and Angular project. However, Nx can easily find out which projects are impacted
once ckeditor JS project is changed.

This is why I would advise to run all of your angular cli scripts using `nx`
only.

## Nx Supports many front-end technologies

Nx supports all major front-end technologies. Nx community is growing very fast
they write many plugins on nx to support other technologies like `electron`,
`firebase` etc. I like Nx Monorepo more than Lerna. Because of reasons like
["Dependency Constraints in Nx Monorepo Projects"](https://rupeshtiwari.github.io/2021-01-30-enforcing-dependency-constraints-in-nx-monorepo-projects/),
Affected Dependency Graph and caching.

To see supported technology just run `nx list` you will see official plugins and
community plugins as well.

```shell
$ nx list

>  NX  Installed plugins:

  @angular-devkit/build-angular (builders)
  @nrwl/angular (builders,generators)
  @nrwl/cypress (builders,generators)
  @nrwl/jest (builders,generators)
  @nrwl/linter (builders)
  @nrwl/workspace (builders,generators)


>  NX  Also available:

  @nrwl/express (executors,generators)
  @nrwl/nest (executors,generators)
  @nrwl/next (executors,generators)
  @nrwl/node (executors,generators)
  @nrwl/nx-plugin (executors,generators)
  @nrwl/react (executors,generators)
  @nrwl/storybook (executors,generators)
  @nrwl/web (executors,generators)


>  NX  Community plugins:

  nx-electron - An Nx plugin for developing Electron applications
  @nxtend/ionic-react - An Nx plugin for developing Ionic React applications and libraries  @nxtend/ionic-angular - An Nx plugin for developing Ionic Angular applications and libraries
  @nxtend/capacitor - An Nx plugin for developing cross-platform applications using Capacitor
  @nxtend/firebase - An Nx plugin for developing applications using Firebase
  @angular-architects/ddd - Nx plugin for structuring a monorepo with domains and layers
  @offeringsolutions/nx-karma-to-jest - Nx plugin for replacing karma with jest in an Nx workspace
  @flowaccount/nx-serverless - Nx plugin for
node/angular-universal schematics and deployment builders in an Nx workspace
  @dev-thought/nx-deploy-it - Nx plugin to deploy applications on your favorite cloud provider
  @offeringsolutions/nx-protractor-to-cypress - Nx plugin to replace protractor with cypress in an nx workspace
  @nx-tools/nx-docker - Nx plugin to build docker images of your affected apps
  @angular-custom-builders/lite-serve - Nx plugin to run the e2e test on an existing dist
folder
  @nx-plus/nuxt - Nx plugin adding first class support for Nuxt in your Nx workspace.
  @nx-plus/vue - Nx plugin adding first class support for Vue in your Nx workspace.
  @nx-plus/docusaurus - Nx plugin adding first class support for Docusaurus in your Nx workspace.
  @twittwer/compodoc - Nx Plugin to integrate the generation of documentation with Compodoc
in the Nx workflow
  @nxext/svelte - Nx plugin to use Svelte within nx workspaces
  @nxext/stencil - Nx plugin to use StencilJs within nx workspaces
  @joelcode/gcp-function - Nx plugin to generate, test, lint, build, serve, & deploy Google
Cloud Function
  @nx-go/nx-go - Nx plugin to use Go in a Nx workspace
  @angular-architects/module-federation - Nx plugin to use webpack module federation
  @nxrocks/nx-spring-boot - Nx plugin to generate, run, package, build (and more) Spring Boot projects inside your Nx workspace
  @trumbitta/nx-plugin-openapi - OpenAPI Plugin for Nx. Keep your API spec files in libs, and auto-generate sources.
  @nxrocks/nx-flutter - Nx Plugin adding first class support for Flutter in your Nx workspace
  @srleecode/domain - Nx Plugin for allowing operations to occur at the domain level instead of the default library level
  @jscutlery/semver - Nx plugin to automate semantic versioning and CHANGELOG generation.

```

## Conclusion

I hope you learn how to add ckeditor project inside nx monorepo. Additionally,
this blog also proved that Nx is capable of incorporating/adding any front-end
technology inside your organization monorepo.

## Become full stack developer 💻

If you want to become full stack developer and grow your carrier as new software
developer or Lead Developer/Architect. Consider subscribing to our full stack
development training programs. We have All-Access Monthly membership plans and
you will get unlimited access to all of our video courses, slides, source code &
Monthly video calls.

- Please subscribe to
  [All-Access Membership PRO plan](https://www.fullstackmaster.net/pro) to
  access current and future angular, node.js and related courses.
- Please subscribe to
  [All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite) to
  get everything from PRO plan. Additionally, you will get access to monthly
  live Q&A video call with Rupesh and you can ask doubts/questions and get more
  help, tips and tricks.

> You bright future is waiting for you so visit today
> [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board
> on your dream software company as a Developer,Architect or Lead Engineer role.
> <a href="https://www.fullstackmaster.net">
> <img src="https://i.imgur.com/9OCLciM.png" width="270" height="65"> </a>

<br/>

### 💖 Say 👋 to me!

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:fullstackmaster1@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>
