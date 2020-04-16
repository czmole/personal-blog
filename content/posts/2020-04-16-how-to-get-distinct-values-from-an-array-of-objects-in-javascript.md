---
title: "How to get distinct values from an array of objects in JavaScript?"
slug:
description: "Some ways on how to get distinct values from an array of objects in JavaScript?"
date: 2020-04-16 23:00:00
author: Catalin
tags: ['Today I Learned', 'JavaScript', 'Arrays']
cover:
fullscreen: false
---

Let's say you have an array of objects like follow and you would like to get distinct values based on a key - property of the object.

Let's consider to have this list:

```javascript
const list = [{
	group: 'A',
	name: 'Peter'
}, {
	group: 'B',
	name: 'Robert'
}, {
	group: 'A',
	name: 'Julia'
}, {
	group: 'B',
	name: 'Lee'
}];
```

And you would like to have as a result an array of unique group names, in this case ``['A', 'B']``

A simple solution that I have found is to use Set and map to create the list with your results:

```javascript
let unique = [...new Set(list.map(item => item.group))];
```

I have put [here a codepen](https://codepen.io/czmole/pen/bGVpByG?editors=0012) that would allow to test.

If we would like to actually get distinct unique objects based on the ``group`` property then we could do something like this:

```javascript
let unique = [...new Map(list.map(item => [item['group'], item])).values()];
```

You can see the results in the same [codepen snippet](https://codepen.io/czmole/pen/bGVpByG?editors=0012). 

In terms of performance, in the same thread that I found these solutions you can see a comparison on using dictionary approach vs map and filter.

The example is very nice using a bigger data set and you will find out that the dictionary approuch is much much faster, even if it is not a one line code. Here is the answer I am talking about [https://stackoverflow.com/a/15125953/944397](https://stackoverflow.com/a/15125953/944397)

And the example that looks between 1000 items instead of 3 to compare the speed (it's in the above answer but thought to mention it separatelly also) [https://jsperf.com/filter-vs-dictionary-more-data](https://jsperf.com/filter-vs-dictionary-more-data)