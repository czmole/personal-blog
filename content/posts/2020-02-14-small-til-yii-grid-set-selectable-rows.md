---
title: "Small tweak in Yii - defining how many rows can be selected in a CGridView"
slug:
description: ""
date: 2020-02-14 11:50:00
author: Catalin
tags: ['Today I Learned', 'Yii', 'CGridView', 'how to Yii grid', 'how to']
cover:
fullscreen: false
---

If you would like to set how many rows can be selected in a ```CGridView`` you would have to set ``selectableRows`` by giving it a value to the column that puts a checkbox ``CCheckBoxColumn`` to the grid.

Example:

``[ 'id' => 'checkitems', 'class' => 'CCheckBoxColumn', 'selectableRows' => 100]``

Setting it like below it would allow selecting only one row at a time:

``[ 'id' => 'checkitems', 'class' => 'CCheckBoxColumn']``