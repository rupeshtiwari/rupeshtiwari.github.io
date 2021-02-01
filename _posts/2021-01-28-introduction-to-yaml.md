---
layout: post
tags:
  - devops
  - yml
date: '2021-01-28 19:32 -0500'
title: Introduction to YAML
description: Introduction to YAML
cover-img: 'https://i.imgur.com/hiQZ0BG.png'
cover_image: 'https://i.imgur.com/jZQbmj4.jpg'
thumbnail-img: 'https://i.imgur.com/jZQbmj4.jpg'
share-img: 'https://i.imgur.com/jZQbmj4.jpg'
published: true
sitemap: true
excerpt_separator: <!--more-->
id: 589332
---

<a href="/azure">
  <span class="crayons-avatar"><img src="https://i.imgur.com/Eqpy465.png" class="crayons-avatar__image" alt="Microsoft Azure profile imag" /></span> Microsoft Azure
  </a>

`Yaml` files are used in Azure Pipelines for build and release definition. Yaml files are also used in GitHub build and release. 
Yaml is designed to be clean and easy to read.  

## File Format

.yml or .yaml 

## How to comment?

`# comment`

## Define info about person

```yaml=\
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
        email: fullstackmaster1@gmail.com

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




---


##  Do You Want to become full stack developer? :computer: 
If you want to become full stack developer and grow your carrier as Lead Developer/Architect. Consider subscribing to our full stack development training programs. We have monthly membership plans and you will get unlimited access to all of our video courses, slides, source code & Monthly video calls. 
- Please visit www.fullstackmaster.net/pro to subscribe to All Access PRO membership. 
- Please visit www.fullstackmaster.net/elite to subscribe to All Access ELITE membership. You will get everything from PRO plan. Additionally you will get access to monthly live Q&A video call with Rupesh and ask doubts and get more tips and tricks.  

>You bright future is waiting for you so visit today www.fullstackmaster.net and allow me to help you to board on your dream software architect/lead role. 



---

### :sparkling_heart: Contact Details: Say :wave: to me! 

* Rupesh Tiwari
* www.rupeshtiwari.com 
* :email: <fullstackmaster1@gmail.com>
* Founder of www.fullstackmaster.net :mortar_board:
* [<img src="https://i.imgur.com/9OCLciM.png" width="295" height="65">](http://www.fullstackmaster.net)

