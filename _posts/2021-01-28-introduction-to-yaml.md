---
tags:
  - devops
  - yaml
  - yml
  - tutorial
date: '2021-01-02 19:32 -0500'
title: Introduction to YAML
description: Introduction to YAML
image: 'https://i.imgur.com/jZQbmj4.jpg'
cover_image: 'https://i.imgur.com/jZQbmj4.jpg'
thumbnail-img: 'https://i.imgur.com/jZQbmj4.jpg'
share-img: 'https://i.imgur.com/jZQbmj4.jpg'
published: true
sitemap: true
comments: true
excerpt_separator: <!--more-->
id: 589332
toc: true
related: true
share: true
read_time: true
author_profile: true
---

`Yaml` files are used in Azure Pipelines for build and release definition. Yaml
files are also used in GitHub build and release. Yaml is designed to be clean
and easy to read.

## File Format

.yml or .yaml

## How to comment?

`# comment`

## Define info about person

```yaml
# Create a person object with properties.
person:
    name: "mike"
    occupation: "programmer"
    age: 23
    gpa: 3.5
    fav_num: 1e+10
    male: true
    birthday:1994-02-06 14:33:22 # ISO 86001 standard
    flaws: null
# Now this is a person object and you can access their values
# person.name // give u person name

# Storing array in 2 diff styles
    hobbies:
        - hiking
        - movies
        - riding bike
    movies: ["Dark Knight", "Harry Portar"]

# Storing an object in 3 styles in a list
    friends:
        - name: "Sanjay"
          age: 22
        - {name: "Ruepsh", age: 35}
        -
          name: "Joe"
          age:23

# values with lot of information
    descriptions:
     Generating random paragraphs can be an excellent way for writers to          get their creative flow going at the beginning of the day. The writer        has no idea what topic the random paragraph will be about when it            appears.This forces the writer to use creativity to complete one              of three common writing challenges.

# values to render in single line
    descriptionsSingle: >
     Generating random paragraphs can be an excellent way for writers to get      their creative flow going at the beginning of the day. The writer has no      idea what topic the random paragraph will be about when it appears. This      forces the writer to use creativity to complete one of three common          writing challenges.

# Preserve the format with | just like <pre> tag in html
    signature: |
        Rupesh Tiwari
        email: rupesh.tiwari.info@gmail.com

# Anchor some value
    state: &location "NJ"
    tax: *location  # it will print NJ tax is refering the value of state

# Anchor key value pair
    base: &base
        var1: value1

    foo:
        <<: *base  # var1: value1
        var2: value2
# Convert number to string datatype
    salary: !!str 23,000 # rendered as "23,000" string type
# Conver number to float
    height: !!float 5 # rendered as 5.0

```

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

> Your bright future is waiting for you so visit today
> [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board
> on your dream software company as a Developer,Architect or Lead Engineer role.
