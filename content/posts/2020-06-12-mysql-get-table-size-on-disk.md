---
title: "Snippet - How to get MySQL Tables size on disk?"
slug:
description: "A query that allows to get the mysql table size on disk"
date: 2020-06-12 11:30:00
author: Catalin
tags: ['Snippets', 'MySQL', 'Databases']
cover:
fullscreen: false
---

This is a basic snippet that would help in case you dont have arround a visual database management tool:

```sql
SELECT 
     table_schema as `Database`, 
     table_name AS `Table`, 
     round(((data_length + index_length) / 1024 / 1024), 2) `Size in MB` 
FROM information_schema.TABLES 
ORDER BY (data_length + index_length) DESC;
```
