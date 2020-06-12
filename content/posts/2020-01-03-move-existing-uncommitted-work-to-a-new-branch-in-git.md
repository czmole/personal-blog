---
title: "How to move existing uncommitted work to a new branch in Git"
slug:
description: "How to move existing uncommitted work to a new branch in Git"
date: 2020-01-03 22:50:00
author: Catalin
tags: ['Today I Learned', 'git', 'git branches', 'how to git', 'how to']
cover:
fullscreen: false
---

I've started working on a new feature on the ``master`` branch and found hours later that I need to fix something in production, so on the original version of the branch. 

So ... How could I do the fix without pushing the work on the new feature which was not done yet?

Found the following steps are solving the problem:

First switch to a new branch:

``git checkout -b <new-branch-name>``

Commit the changes related to the new feature to the new branch:

``git add .`` and

``git commit -m "some description goes here"``

And push the changes:

``git push --set-upstream origin  <new-branch-name>``

These will keep the ``master`` branch intact as it was before any changes made for the new feature. The changes for this feature will be pushed only on the <new-branch>

Hope this will help you! it saved me 😊
