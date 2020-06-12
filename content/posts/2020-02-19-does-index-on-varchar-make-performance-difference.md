---
title: "MySQL - Does an index on VARCHAR field make performance difference?"
slug:
description: "MySQL - Does an index on VARCHAR field make performance difference?"
date: 2020-02-19 15:00:00
author: Catalin
tags: ['Today I Learned', 'MySQL', 'Performance']
cover:
fullscreen: false
---

I was working today on a project that required the relation of two tables in MySQL by a hash string.
So the next problem that was on the table, how to make things better to affect speed as little as possible.

The first thing that crossed my mind is to add indexes. But would that help in the case of a VARCHAR data type of that field?

So I got to this answer on [stackoverflow.com](https://stackoverflow.com/a/1898511/944397) that was backed later by a talk with our CTO.

So I will quote this below just in case:

---

_Does index on a varchar column make the query run slower?_

No, it does not.

If the optimizer decides to use of the index, the query will run faster. INSERTs/UPDATEs/DELETEs on that table will be slower, but not likely enough to notice.
...

Be aware that using:

``LIKE '%whatever%'``

..will not use an index, but the following will:

``LIKE 'whatever%'``

The key is wildcarding the lefthand side of the string means that an index on the column can't be used.

Also know that [MySQL limits the amount of space set aside for indexes](http://dev.mysql.com/doc/refman/5.7/en/mysql-indexes.html) - they can be up to 1000 bytes long for MyISAM (767 bytes for InnoDB) tables.

 ---

In the end, I used crc32 (PHP link as that's what I was using https://www.php.net/manual/en/function.crc32.php) which generates an integer value that is better when doing searches /indexes on MySQL and most RDBMS's.

But I learned from that answer on stackoverflow.com when indexes on varchars gets into action and when they are not usefull.