---
title: Binary Search Concept
date: 2021-07-03 00:00 +0000
description: Learn Binary Search from beginning
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: false
image: https://i.imgur.com/YKvxckX.png
header:
  image: https://i.imgur.com/YKvxckX.png
  teaser: https://i.imgur.com/UQSsXt8.png
  og_image: https://i.imgur.com/YKvxckX.png
tags:
  - binarysearch
  - algorithms
  - beginners
  - tutorial
---

> Do you want to understand binary search? Read this article, I have discussed binary search problems in JavaScript.

## Binary Search Concept

Please watch [this YouTube video from Errichto](https://www.youtube.com/watch?v=GU7DpgHINWQ&list=PLl0KD3g-oDOHpWRyyGBUJ9jmul0lUOD80&index=3). This is the best binary search video I have ever seen. Next solve all the problems as he is going in his lecture.

Binary search can be done on a given sorted array and it is is used to perform:

- Search a number
- Search a number with given conditions
- Find real values like square, square root etc.

## Thumb of rule for Binary Search problems

> Divide your array in set of TRUE and FALSE values then find the First occurrence of TRUE or the last occurrence of TRUE. Binary Search Array should be partially false and partially true. We need to find the boundary between them.


![](https://i.imgur.com/yI68ZFU.png){: .full} 


## Binary Search Algorithm

```js
function binarySearch(array, data) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (data === array[mid]) return mid;
    else if (data < array[mid]) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
}
```

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="XWRrPBE" data-user="roopkt" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/roopkt/pen/XWRrPBE">
  Binary Search on Sorted Array Algorithm</a> by Rupesh Tiwari (<a href="https://codepen.io/roopkt">@roopkt</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Binary Search Problems in JavaScript

While I was watching his lecture I converted all of the problem solutions in JavaScript.

### Find if given number is a SQUARE

#### Question

```js
function isSquare(x) {}
describe('IsSquare', () => {
  it('should work correctly #1', () => {
    expect(isSquare(16)).toBeTruthy();
  });
  it('should work correctly #2', () => {
    expect(isSquare(6570204424081)).toBeFalsy();
  });
});
```

#### Answer

```js
function isSquare(x) {
  // For Array the maximum length is 2GB-1 (2^32-1)
  if (x >= Math.pow(2, 32)) return false;
  const array = Array.from(Array(Math.floor(x / 2)).keys());
  let low = 0;
  let high = array.length - 1;
  let mid;
  let square;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    square = Math.pow(array[mid], 2);
    if (x === square) return true;
    else if (x < square) high = mid - 1;
    else low = mid + 1;
  }

  return false;
}
```

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="WNjQOpE" data-user="roopkt" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/roopkt/pen/WNjQOpE">
  </a> by Rupesh Tiwari (<a href="https://codepen.io/roopkt">@roopkt</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Find Square Root of given Number

#### Question

```js
function sqrt(x) {}

describe('Find Square Root of x', () => {
  it('should work correctly #1', () => {
    expect(sqrt(4)).toBe(2);
  });
  it('should work correctly #2', () => {
    expect(sqrt(36)).toBe(6);
  });
});
```

#### Answer

```js
function sqrt(x) {
  var array = Array.from(Array(x).keys());
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let square = array[mid] * array[mid];
    if (square === x) {
      return mid;
    } else if (square > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}
```

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="OJmygOW" data-user="roopkt" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/roopkt/pen/OJmygOW">
  </a> by Rupesh Tiwari (<a href="https://codepen.io/roopkt">@roopkt</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Find first value greater than equals to given number

#### Question

```js
function findFirstValue(array, data) {}

describe('Find First Value >= x in sorted array', () => {
  it('should work correctly #1', () => {
    expect(findFirstValue([2, 3, 5, 6, 8, 10, 12], 4)).toBe(5);
  });
});
```

#### Answer

```js
function findFirstValue(array, data) {
  let low = 0;
  let high = array.length - 1;
  let mid;
  let result = -1;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (array[mid] >= data) {
      result = array[mid];
      high = mid - 1; // since I need first occurrence so keep searching in the left sorted half of the array.
    } else low = mid + 1;
  }

  return result;
}
```

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="LYypLyK" data-user="roopkt" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/roopkt/pen/LYypLyK">
  Find First Value greater than given number</a> by Rupesh Tiwari (<a href="https://codepen.io/roopkt">@roopkt</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Find Minimum in Circularly Sorted Array

This is also the pivot number in a circularly sorted array. Once you find the pivot element then it's index value can also tell you how many times the array is shifted / rotated. The index of pivot element will give you count or rotation as well.

#### Question

```js
function findMinInCircularlySortedArray(array) {}

describe('Find Min in Circularly Sorted Array', () => {
  it('should work correctly #1', () => {
    expect(findMinInCircularlySortedArray([11, 12, 15, 18, 2, 5, 6, 8])).toBe(
      2
    );
  });
  it('should work correctly #2', () => {
    expect(findMinInCircularlySortedArray([6, 7, 9, 15, 19, 2, 3])).toBe(2);
  });
});
```

#### Answer

```js
function findMinInCircularlySortedArray(array) {
  let low = 0;
  let length = array.length;
  let high = length - 1;
  let mid;
  let result = -1;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (array[mid] <= array[length - 1]) {
      result = array[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
}
```

### Find Maximum number in increasing decreasing array

#### Question

```js
function findMaximumInIncreasingDecreasingArray(array) {}

describe('find Maximum In Increasing and Decreasing Array', () => {
  it('should work correctly #1', () => {
    expect(
      findMaximumInIncreasingDecreasingArray([
        2,
        3,
        4,
        6,
        9,
        12,
        11,
        8,
        6,
        4,
        1,
      ])
    ).toBe(12);
  });
});
```

#### Answer

```js
function findMaximumInIncreasingDecreasingArray(array) {
  let low = 0;
  let high = array.length - 1;
  let mid;
  let answer = -1;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (array[mid] >= array[mid - 1] || mid === 0) {
      answer = array[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return answer;
}
```

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="zYwvzmX" data-user="roopkt" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/roopkt/pen/zYwvzmX">
  Find Maximum in increasing decreasing array</a> by Rupesh Tiwari (<a href="https://codepen.io/roopkt">@roopkt</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### All Binary Search Basic problems 

Here is the link to [see all binary search basic questions](https://codepen.io/collection/ZMQobd)

### References

- [Errichto Binary Search YouTube video](https://www.youtube.com/watch?v=GU7DpgHINWQ&list=PLl0KD3g-oDOHpWRyyGBUJ9jmul0lUOD80&index=3)
- [Errichto Github repo](https://github.com/Errichto/youtube)

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your bright future is awaiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
