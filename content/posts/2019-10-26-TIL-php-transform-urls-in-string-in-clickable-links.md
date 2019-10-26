---
title: "Replace any URL's within a string of text, to clickable links with PHP #TIL"
slug:
description: ""
date: 2019-10-26 18:55:55
author: Catalin
tags: ['TIL', 'Today I learned', 'PHP', 'regex']
cover:
fullscreen: false
---

Let's say I have a string coming from text box by users (maybe a comment box or something similar), and when displaying that text into another screen I would like that the URLs inside that text to be clickable. 
How I would I do that in PHP ?
I have found you can use something like this:

```php
$text = "Please visit http://google.com and also https://yahoo.com";

$html_links = preg_replace('"\b(https?://\S+)"', '<a href="$1" target="_blank">$1</a>', $text);

echo $html_links;
```

And this would work for both http and https URLs 🎉
