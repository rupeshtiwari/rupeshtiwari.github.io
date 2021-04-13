---
title: Creating Your own Custom JavaScript GitHub Action
date: 2021-06-12 00:00 +0000
description: How to create your own JavaScript action using the GitHub Actions toolkit.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/OcpRim0.png
header:
  image: https://i.imgur.com/ENXmHaL.png
  teaser: https://i.imgur.com/OcpRim0.png
  og_image: https://i.imgur.com/OcpRim0.png
tags:
  - github
  - devops
  - webdev
  - beginners
---

> Do you want to create your own custom **GitHub Action**? It's very simple & really fun! In this article I will walk you through the steps to **write, test, and deploy** your own **JavaScript** **GitHub Actions**.

## Getting Started

Let's setup our Machine and Project first.

### Pre-requisites

Since you want to create JavaScript GitHub Actions make sure you have installed `node.js` in your machine.

### Creating GitHub Actions Project

Create simple `node.j`s project by executing following scripts.

```shell
mkdir hello-world-javascript-action
cd hello-world-javascript-action
npm init -y
```

Create `.gitignore` add `node_modules/` there.

## Creating Action File

Let's create schema of our custom `action.yml` file.

### Defining Action Schema

Create `action.yml` at the root of the project and add below script.

```yaml
name: 'Hello World'
description: 'Greet someone and record the time'
inputs:
  who-to-greet: # id of input
    description: 'Who to greet'
    required: true
    default: 'World'
outputs:
  time: # id of output
    description: 'The time we greeted you'
runs:
  using: 'node12'
  main: 'index.js'
```

### Installing GitHub actions npm Packages

We need GitHub Actions `core` and `github` packages to write our custom action. `@actions/core` helps to get input and set output value in workflow. `@actions/github` helps us to get the entire payload of the GitHub action. Run below script to install them.

```shell
npm i @actions/core @actions/github
```

### Writing our Custom Action Behavior

Now we will write JavaScript code to add the custom behavior to our custom action. Create index.js at the root of the project.

```js
const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}`);

  const time = new Date().toTimeString();

  core.setOutput('time', time);
  const payload = JSON.stringify(github.context.payload, undefined, 2);

  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
```

## Compiling Action

Next we need to compile our action into single JavaScript file that includes all of the `node_module` source code that we are referring in our `index.js` file.

### Installing Vercel npm package

[`@vercel/ncc`](https://www.npmjs.com/package/@vercel/ncc?activeTab=dependents) Npm package help us to bundle up our code as `index.js` including all dependencies and create `license.txt` file as well inside the `dist` folder.

Run below script to install `@vercel/ncc` globally.

```
npm i -g @vercel/ncc

```

### Compiling code

Next run `ncc build index.js --license licenses.txt` to compile code.

![](https://imgur.com/8cLYdjh.png)

## Testing Local Action from GitHub Workflow

Before actually deploying code to GitHub Actions publicly. I would prefer to test it once. Therefore, let's push our code and create a workflow to user our own action from this repository only.

### Referring to Compiled Local Action

Now lets test our own action from the workflow by referring to the repository `action.yml` file only.
We will refer to the compiled `index.js` file in our own repo. Change the main keyword in your `action.yml` file to use the new `dist/index.js` file. `main: 'dist/index.js'`

```yaml
name: 'Hello World'
description: 'Greet someone and record the time'
inputs:
  who-to-greet:  # id of input
    description: 'Who to greet'
    required: true
    default: 'World'
outputs:
  time: # id of output
    description: 'The time we greeted you'
runs:
  using: 'node12'
  main: 'dist/index.js' 👈

```

### Creating GitHub Workflow

Create `.github\workflows\main.yml` and add below script.

```yml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: My first own action to say hello
    steps:
      # To use this repository's private action,
      # you must check out the repository
      - name: Checkout
        uses: actions/checkout@v2
      - name: Hello world action step
        uses: ./ # Uses an action in the root directory
        id: hello
        with:
          who-to-greet: 'Rupesh Tiwari'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```

## Triggering our Local GitHub Action

Let's commit and push our code at this point to trigger local action.

### Commit and Push your code

To trigger your custom action commit and push the code by running below scripts on command terminal.

```shell
git add action.yml index.js node_modules/* package.json package-lock.json README.md
git commit -m "My first action is ready"
git push
```

![](https://imgur.com/1kS1TlZ.png)

Notice 👆 our workflow success and action executed.

## Publishing your Action to Public

Now this is the time to make our action public.

### tag and push your action to GitHub

In order for making our action public we must tag and push to GitHub that's it.

```shell
git add action.yml index.js node_modules/* package.json package-lock.json README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

![](https://imgur.com/hx55QGL.png)

### Testing your Public Action in Workflow

Change the workflow to use your public action `actions/hello-world-javascript-action@v1.1`

```yml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: My First Custom Public GitHub Action To Say Hello
    steps:
      - name: Hello world action step
        id: hello
        uses: actions/hello-world-javascript-action@v1.1
        with:
          who-to-greet: 'Rupesh Tiwari'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```

### Triggering Your Published Action

Again push your code and notice our public action is triggered as well Hurray! Time for party 🍕 !

![](https://imgur.com/ZgPFkKN.png)

Download my [source code here for custom JavaScript GitHub Action](https://github.com/rupeshtiwari/hello-world-javascript-action)

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
