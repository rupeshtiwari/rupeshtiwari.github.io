---
title: Creating ngShow directive in Angular 11
date: 2022-07-02 00:00 +0000
description: Are you wondering how to use ng-show in Angular 11? There is a way to achieve it by using [hidden]= “false”. However, if you are migrating large angularjs projects into angular 11 then it is really tedious and error prone work to convert them into [hidden]="" expression format. Also you have to negate all existing logic to show the element while using hidden. In this article I will explain how you can create your own ngShow directive in Angular 11.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/qxXxmBa.png
header:
  image: https://i.imgur.com/zipiW93.png
  teaser: https://i.imgur.com/qxXxmBa.png
  og_image: https://i.imgur.com/qxXxmBa.png
tags:
  - webdev
  - tutorial
  - beginners
  - angular
---

> Are you wondering how to use `ng-show` in Angular 11? There is a way to achieve it by using `[hidden]= “false”`. However, if you are migrating large `angularjs` projects into `angular 11` then it is really tedious and error prone work to convert them into `[hidden]=""` expression format. Also you have to negate all existing logic to show the element while using `hidden`. In this article I will explain how you can create your own `ngShow` directive in Angular 11.

So basically we are saying we want to replace below angular js code

```html
<div ng-show="”vm.canShow()”"></div>
```

With Angular 11 style code like:

```html
<div [ngShow]="”canShow()”"></div>
```

![](https://i.imgur.com/HsAXJsD.gif)

Since the `ng-show` directive is going to be used in various modules in your project. Therefore, I have decided to put this directive in a shared module.

Let’s create one shared module in angular and create a `ng-show.directive.ts` file.

![](https://i.imgur.com/WMXyUFT.png){: .full}

## Creating ngShow directive in Angular 11

Add below code in `ng-show.directive.ts`

````ts
import { Directive, ElementRef, Input } from '@angular/core';

/**
 * ## Example
 * ```html
 * <button [ngShow]="show">Create</button>
 * ```
 * ```ts
 * get show() {
 *   return false; // it will hide button. If you pass `true` it will show button.
 * }
 * ```
 */
@Directive({
  selector: '[ngShow]',
})
export class NgShowDirective {
  constructor(private ngEl: ElementRef) {}

  @Input()
  set ngShow(condition: boolean) {
    this.show(condition);
  }

  private show(value: boolean): void {
    this.ngEl.nativeElement.style.display = value ? '' : 'none';
  }
}
````

That's it. Next let me show how this can be used in App Module.

## How to use NgShow in Angular 11

### Step 1: Import the `shared module` in `AppModule`

```ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Step 2: Use the `ngShow` directive.

```html
<div [ngShow]="show">
  <h2>We have created custom `ngShow` directive to show hide this text.</h2>
</div>
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  show = true;
}
```

## Learning Materials

- Here is the [source code link](https://github.com/rupeshtiwari/ng-show-angular11)
- Here is the [live working sample](https://www.rupeshtiwari.com/ng-show-angular11/) for ngshow live in action.

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)
