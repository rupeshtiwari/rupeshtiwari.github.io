---
title: Conventional Git Commit Messages and Linting
date: '2021-02-08 08:53 -0500'
subtitle: Vscode linting to enforce conventional commit message
description: Vscode linting to enforce conventional commit message
header:
  image: 'https://i.imgur.com/60xKLYV.jpg'
  teaser: https://i.imgur.com/INHV6Ax.jpg
  og_image: https://i.imgur.com/INHV6Ax.jpg
image: 'https://i.imgur.com/INHV6Ax.png'
tags:
  - javascript
  - linting
  - webdev
  - vscode
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
toc: true
excerpt_separator: <!--more-->
id: 595653
related: true
share: true
read_time: true
author_profile: true
---

> Do you want to follow Conventional Commits and want to enforce a rule such
> that your team also follows it? In this article, You will learn how to enforce
> [Conventional Commenting](https://www.conventionalcommits.org/en/v1.0.0/#summary)
> rule prior to commit your **Angular** or **Nrwl.Nx Monorepo** code in GitHub.
> Now a days all of open source library like
> [ngrx platform](https://github.com/ngrx/platform/blob/master/CONTRIBUTING.md)
> they started following precise rules over how git commit messages must be
> formatted. This leads to **more readable messages** that are easy to follow
> when looking through the project history.

## What is Conventional Commit?

The
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
specification is a lightweight convention on top of commit messages. It provides
an easy set of rules for creating an explicit commit history; which makes it
easier to write automated tools on top of. This convention dovetails with
[SemVer](https://semver.org/) (Semantic Versioning), by describing the features,
fixes, and breaking changes made in commit messages.

## Why is Conventional Commit?

We will use the Conventional Commits specification. So that it will make easy to
write automated tools on top of it. Example if you follow conventional commits
then you can write some automation to

- Bump version of the `package.json` file based on commit message format.
- You can generate the Changelog automatically.

If you are convinced then continue reading to setup this rule in your angular or
any `node.js` project.

## Examples of Conventional Message Format

**Commit message with scope & no body**
`docs(readme): correct spelling of package`

**Commit message with scope, description and breaking change footer**

```shell
feat(logger): need to depend on websocket library
BREAKING CHANGE: the api parameters changed
```

Learn[ more here](https://www.conventionalcommits.org/en/v1.0.0/#summary).

## Conventional Commit Message Format

We will use
[conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) to enforce
the discipline.

The commit message should be structured as follows:

```shell
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional. Any
line of the commit message cannot be longer than 120 characters! This allows the
message to be easier to read on GitHub as well as in various git tools.

### Conventional Commit Type

Type Must be one of the following:

- **build**: Changes that affect the build system or external dependencies
  (example scopes: webpack, karma, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes:
  azuredevops.yaml, Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space,
  formatting, missing semi-colons, etc.)
- **test**: Adding missing tests or correcting existing tests

### Conventional Commit Scope

The scope should be the name of the `npm` package affected (as perceived by the
person reading the changelog generated from commit messages. Example if you have
a project where you have publishable libraries & applications. Then you can use
their project names.

Apps: admin, client, dashboard Lib: logger, layout, messaging

The following is the list of supported scopes:

- **admin**
- **client**
- **dashboard**
- **logger**
- **layout**
- **messaging**

### Conventional Commit Subject

The subject contains a succinct description of the change and here is some tips
for subject text:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Conventional Commit Body

Just as in the subject, use the imperative, present tense: "change" not
"changed" nor "changes". The body should include the motivation for the change
and contrast this with previous behavior.

### Conventional Commit Footer

The footer should contain any information about Breaking Changes and is also the
place to reference GitHub issues that this commit Closes.

Breaking Changes should start with the word `BREAKING CHANGE:`` with a space or
two newlines. The rest of the commit message is then used for this.

Example:

```shell
feat(scope): commit message

BREAKING CHANGES:

Describe breaking changes here

BEFORE:

Previous code example here

AFTER:

New code example here
```

Lets learn how can we automate these rules in our own project such that no team
member can violate this rules.

## Commitlint Node Package

We will use
[commitlint node package](https://commitlint.js.org/#/guides-local-setup?id=install-commitlint)
to enforce the constraints for commit message format.

We will also use `husky` to run the linting rules before commit.

Run below script to install commitlint & husky.

```shell
npm i -D husky @commitlint/cli @commitlint/config-conventional
```

## Adding rules to package.json

```json
 "commitlint": {
    "extends": [
      "./node_modules/@commitlint/config-conventional"
    ],
    "rules": {
      "subject-case": [
        0
      ],
      "header-max-length": [
        0,
        "always",
        120
      ]
    }
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
```

What will happen here is that every time a commit is attempted, it will get
linted based on the conventional commit message rules. The developer will get an
error if they deviate. This is painful to start with but it becomes second
nature after a while!

## Testing Conventional Commit Rules

Add comment `adding commit rules` and try to commit

![](https://i.imgur.com/6HQmgEa.png)

Notice you see error. ![](https://i.imgur.com/3LSunpY.png)

Commit error ![](https://i.imgur.com/q6kUXjw.png)

Lets fix our comment as per Conventional Commit Rule. Change the comment like
below & commit

`build: added new script for linting`

![](https://i.imgur.com/DQmXFwM.png)

Now you should be able to commit your code.

Note we can successfully commit and push our code.

![](https://i.imgur.com/N1krCDR.png)

## Conclusion

Now you learn how can you use conventional commits and enforce this rule in your
project. In my next article I will explain how can you apply some automation on
this project. Like bumping package.json versions automatically, generating
change log etc. So stay tuned.

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

> Your future is waiting for you so visit today
> [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board
> on your dream software company as a Developer,Architect or Lead Engineer role.

**💖 Say 👋 to me!**

<div> 
Rupesh Tiwari </div><div>
<a href="https://www.rupeshtiwari.com"> www.rupeshtiwari.com</a> </div><div>
✉️ <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi"> Email Rupesh</a> </div><div>
Founder of <a href="https://www.fullstackmaster.net"> Fullstack Master</a></div><div>
</div>
