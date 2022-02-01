---
title: Testing Node.js Project with Jasmine & Karma
date: 2021-08-04 00:00 +0000
description: Testing Node.js Project with Jasmine & Karma
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
  - javascript
  - tutorial
  - beginners
  - github
---

> Do you have node.js project that you want to write specs using Jasmine? Are you wondering how to write specs and run all specs in your node.js project? Lets answer all of this in this article so stay tuned!

## Setting up Jasmine in node.js

In order to write specs for your project the best option is to use `Jasmine`. So do not delay and just install `jasmine` now.

```cli
# Run below script

npm i -D jasmine
```

Now you can write your node.js with some specs over there just like below:

```js
function reverseWord(word) {
  const length = word.length
  let reversed = ''
  for (let idx = length - 1; idx >= 0; idx--) {
    reversed += word[idx]
  }

  return reversed
}

// This is the spec written in Jasmin BDD style
describe('reverseWord', () => {
  it('test #1', () => {
    expect(reverseWord('Geeks')).toBe('skeeG')
  })
  it('test #1', () => {
    expect(reverseWord('for')).toBe('rof')
  })
})
```

## How to run the Jasmine specs in Node.js project?

Well you can use jasmine cli or javascript to run jasmine specs. Read this article to learn [how to run specs in node.js](https://jasmine.github.io/setup/nodejs.html).

However, if you want to debug your specs in Chrome browser. Then I would recommend use 3rd party test runner. So I choose `karma`. It is a test runner that will give you script to run all the specs in your project smoothly and you can debug them too!

## How to setup karma in Node.js project?

Karma official document has nice steps to follow and install karma in your node.js project [please read them here](http://karma-runner.github.io/6.3/intro/installation.html).

I followed below steps to setup karma in my node.js project.

### Step 1: Installing Karma plugins

```cli
# Install Karma:
npm install karma --save-dev

# Install plugins that your project needs:
npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev

# Run below then, you can run Karma simply by karma from anywhere and it will always run the local version.
npm install -g karma-cli
```

### Step 2: Creating Karma Configuration file

Read this article to follow [step by step to configure karma.](http://karma-runner.github.io/6.3/intro/configuration.html)

I did below to configure karma in my node.js project.

```cli
karma init karma.conf.js

Which testing framework do you want to use?
Press tab to list possible options. Enter to move to the next question.
> jasmine

Do you want to use Require.js?
This will add Require.js plugin.
Press tab to list possible options. Enter to move to the next question.
> no

Do you want to capture a browser automatically?
Press tab to list possible options. Enter empty string to move to the next question.
> Chrome
> ChromeHeadless
> ""

What is the location of your source and test files?
You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
Press Enter to move to the next question.
>**/*.js
>""

Should any of the files included by the previous patterns be excluded?
You can use glob patterns, eg. "**/*.swp".
Press Enter to move to the next question.
>

Do you want Karma to watch all the files and run the tests on change?
Press tab to list possible options.
> yes
```

### Step 3: Add reporters to show spec result text in Chrome browser

You need to follow below steps to show your spec text in chrome browser:

#### View Karma Test Output in a Chrome Browser Steps

# View Karma Test Output in a Chrome Browser?

- Install npm i -D karma-jasmine-html-reporter
- Open `karma.conf.js`
- add `'kjhtml'` in your reporter.
- add client:{clearContext:false}

```json
    reporters: ['progress', 'kjhtml'],
    client:{clearContext:false},
```

[Example file for karma.conf.js](https://github.com/rupeshtiwari/coding-examples-final-450-by-love-babbar/blob/main/karma.conf.js)

### Step 4: Starting Karma and running specs

Add below script in your npm package scripts.

If you want to run your specs on chrome browser and watch your files and auto refresh specs:

```json
"test": "karma start karma.conf.js"
```

Just run once your node.js specs in ChromeHeadless browser without watch.

```json
 "test:once": "karma start --single-run --browsers ChromeHeadless karma.conf.js",
```

## Run all node.js specs locally

Lets run specs `npm run test`

![](https://i.imgur.com/b6sfxP0.png){: .full}

Hurray! 💯 my specs are running and it is watching too!

Lets test in without watch mode.

`npm run test:once`

![](https://i.imgur.com/iLT4CoL.png){: .full}

Hurray! 💯 again tests are working. Superb.

We did it our project is setup and enjoy writing specs.

[Here is my node.js project](https://github.com/rupeshtiwari/coding-examples-final-450-by-love-babbar) that has jasmine and karma setup.
If you enjoy this project please press the star button.

Next step is how to run these specs in GitHub when we push the code? This I will explore in my next blog so stay tuned!

Happy coding and be happy!

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

{: .notice--info}
I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

{: .notice--warning}
Your bright future is awaiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/5fBatz9.png)
