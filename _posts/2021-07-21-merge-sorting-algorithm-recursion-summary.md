---
title: Merge Sorting Algorithm Recursion Summary
date: 2021-07-21 00:00 +0000
description:
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/1ugcAKm.png
header:
  image: https://i.imgur.com/zipiW93.png
  teaser: https://i.imgur.com/1ugcAKm.png
  og_image: https://i.imgur.com/1ugcAKm.png
tags:
  - algorithm
  - tutorial
  - beginners
  - sorting
---

> Learn Merge Sorting algorithm in recursion function. In this article I will show you the execution of the recursion function for `Merge Sorting`.

## Merge sort

Merge sort is one of the most powerful sorting algorithm. Mozilla, Firefox, Chrome and many browser by default most of the time uses `Merge Sort` for sorting an array. You should learn `Merge sort` algorithm.

## Complexity Analysis

- **Time complexity** = `O(nlogn)`
- **Space complexity** = `O(n)`

## Merge Sort Implementation Coding

- Here is the [exercise file](https://codepen.io/roopkt/pen/ExWRRgP?editors=0010) for you to implement merge sort. First try by your own.
- Here is the [answer file](https://codepen.io/roopkt/pen/ZEeMPPL) for merge sort `un-optimized` version.
- Here is the [answer file](https://codepen.io/roopkt/pen/yLMQvbv?editors=0010) for merge sort space `optimized` `in-place` array sorting.

Merge sort algorithm code shared in gist also.

{% gist 85bb9242725a5a897f41522ef6744a61 %}

## Step by Step explanation for Recursive Merge Sort Algorithm

First `main` function will call the `mergeSort` with entire given array.

![](https://i.imgur.com/7297c2D.png){: .full}

![](https://i.imgur.com/JsR9WiT.png){: .full}

`1st` Recursion call to `mergeSort` with left part of the array `[2,4,1,6]` and pause the function execution at line `number-7`.

![](https://i.imgur.com/hHS3xNl.png){: .full}

`2nd` recursion call with Array `[2, 4]` and pervious function pauses at line `number -7`.

![](https://i.imgur.com/phJfnSY.png){: .full}

`3rd` recursion call with array `[2]` and previous function pauses at line `number-7`

![](https://i.imgur.com/eIa9tQY.png){: .full}

Resume 2nd recursion call with array `[2,4]` and call merge sort with right part `[4]`

![](https://i.imgur.com/E4lHVoS.png){: .full}

`3rd` recursion call with array `[4]` and previous function pauses at line `number -8`.

![](https://i.imgur.com/BPGqO9K.png){: .full}

This function will exit since length is `less than 2`. Therefore, 3rd recursion call resumes and executes at line `number-9`.

![](https://i.imgur.com/qRlvs1g.png){: .full}

Which is a call to `stitch` method which will join both left and right array and `re-order` them in `ascending` order.

![](https://i.imgur.com/Sac57Mq.png){: .full}

Resume `2nd` recursion method at line `number-7` and call `mergeSort` with right part of the array `[1,6]`.

![](https://i.imgur.com/EDo7OuL.png){: .full}

Pause the function at line `numnber-7` and call `mergeSort` with `[1]` which will exit because of base condition.

![](https://i.imgur.com/IWO421x.png){: .full}

Function resume at line `numnber-7` and execute line `number-8` call `mergeSort` with `[6]`

![](https://i.imgur.com/Et0NceF.png){: .full}

Next `mergeSort` with `[6]` will exit because of base condition. Next function will resume at line `number-9` and `stitch` method will call that will re-order array `[1,6]`.

![](https://i.imgur.com/IqzLMOY.png){: .full}

Next Resume `1st` recursion at line `number-7` and execute `mergeSort` with `[8,5,3,7]`. Next function will pause at line `number-7` and will call `mergeSort` recursively with `[8,5]`.

![](https://i.imgur.com/4nkvxgp.png){: .full}

Next first it will make `mergeSort` with [8] and pause at line `number-7`.

![](https://i.imgur.com/tgRaKe4.png){: .full}

Next It will pause the previous function at line `number-7`. And Resume at line `number-8` and call `mergeSort` recursively with `[5]` and pause again at line `number-8`, which will exit.

![](https://i.imgur.com/yF0Dmqm.png){: .full}

Therefore, function will resume at line `number-8` and execute `stitch` to sort the array. Hence the array will become `[5,8]` and exit the function. The previous function resumes at line `number-7` and call `mergeSort` recursively with `[3,7]` and pauses at line `number-9`.

![](https://i.imgur.com/kEnaF5C.png){: .full}

Next, it will call `mergeSort` with `[3]` recursively then pause at line `number-7`.

![](https://i.imgur.com/6Bb8EZy.png){: .full}

`mergeSort` with `[3]` will exit and then previous function will resume again at `number-7` and execute next line which will call `mergeSort` with `[7]` recursively then pauses at line `number-8`. `mergeSort` with `[7]` exit function.

![](https://i.imgur.com/kZ1hvzE.png){: .full}

And then previous function will resume again at `number-8` and execute next line `stitch` function that will sort the array in ascending order to `[3,7]` and exit.

![](https://i.imgur.com/xyLPW86.png){: .full}

Next `1st` iteration function will resume at line `number-9` and `stitch` the array `[5,8]` and `[3,7]` and reorder the array `A` to `[3,5,7,8]`.

![](https://i.imgur.com/bZgzA0b.png){: .full}

Finally, the `1st` function will resume at line `number-8` and call `stitch` method to re-order the array `[1,2,3,4,5,6,7,8]` and finally exit.
This way you get the sorted array.

![](https://i.imgur.com/xBTClXY.png){: .full}

Sorting is done! however let me explain you the stitch algorithm which is the core part or merge sort.

## Merge sort Stitch algorithm

You might have noticed that `MergeSort` Method is calling stitch at every recursion method. Now I will explain the `stitch` function to you. This is the algorithm that takes `left`, `right` and original array. Then it will re-order the original array in ascending order.

Here is the `stitch` algorithm code used for `merge` sort.

{% gist 1de701d2a201dda405ea701ab0030d5b%}

First compare left with right array 1st element. 1 is less than 3 so copy 1 at `A[0]`.

![](https://i.imgur.com/QgcDEkf.png){: .full}

Next compare 2 in left array with 3 in Right array. Since 2 is less than 3. Copy 2 at `A[1]`. Increment left and A array indices.

![](https://imgur.com/EVK7a8N.png){: .full}

Next compare 4 in left array with 3 in right array and since 4 is more than 3. Copy 4 to `A[2]` and increment A and R array indices.

![](https://i.imgur.com/HyNtQhv.png){: .full}

Next compare `4` in left array with `5` in Right array. Since `4` is less than `5`. Copy `4` at `A[3]`. Increment `left` and `A` array indices.

![](https://i.imgur.com/D40d5Ti.png){: .full}

Next compare `6` in left array with `5` in right array and since `6` is more than `5`. Copy `5` to `A[4]` and increment A and R array indices.

![](https://i.imgur.com/5sn4Kvx.png){: .full}

Next iterate over `left` array and copy remaining elements at Array `A` and increment both indices.

![](https://i.imgur.com/TwgMpfB.png){: .full}

Finally, iterate over `right` array and copy remaining elements at Array `A` and increment both indices.

![](https://i.imgur.com/ju1SPTW.png){: .full}

I hope you have enjoyed this visual walkthrough of Merge sort algorithm.

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
