---
layout: post
title: How to Share Variables Between Tasks in Azure CI Pipeline
date: '2021-01-28 00:00 +0000'
subtitle: Learn sharing variable among azure ci tasks
description: Learn sharing variable among azure ci tasks
cover-img: 'https://i.imgur.com/hiQZ0BG.png'
cover_image: null
thumbnail-img: null
share-img: null
tags: 'devops,azure,tutorial,beginners'
last_modified_at: null
published: true
sitemap: true
comments: true
social-share: true
excerpt_separator: <!--more-->
id: 589366
---

## Passing variables between tasks in the same job
In a script task, you need to print a special value to STDOUT that will be captured by Azure Pipelines to set the variable.


For example, to pass the variable COMMANDS between scripts:
1. Set the value with the command echo `"##vso[task.setvariable variable=COMMANDS]npm run build"`
2. In subsequent tasks, you can use the `$(COMMANDS)` syntax to have Azure Pipelines replace the variable with `npm run build`
3. Alternatively, in the following scripts tasks, `COMMANDS` is also set as environmental variable and can be accessed as `$COMMANDS`
