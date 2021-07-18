---
title: "Quick GIT tip — fix .gitignore untracked files"
slug: git-tips-fix-gitignore-untracked-files
description: "Quick GIT tip — fix .gitignore untracked files"
date: 2018-05-04 00:00:01
author: Catalin
tags: ['how to git', 'how to', 'git']
cover: 
fullscreen: false
---
Let’s say you’ve added by mistake a folder to your repo, you want to remove it from tracking and, of course, you are adding it to your .gitignore file.

But…. pff, git continues to track it… 😟

Here are a few lines to run to start fresh and have all git-ignored files untracked for sure:

** IMPORTANT NOTE : First commit your current changes, or you will lose them. **

```bash
git rm -r --cached .

git add .

git commit -m "fixed untracked files"
```

