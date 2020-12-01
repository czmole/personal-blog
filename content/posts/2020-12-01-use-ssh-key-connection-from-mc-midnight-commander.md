---
title: "How to use your SSH key to connect remotely from MC Midnight Commander"
slug:
description: "The post describes some steps that would allow you to use a ssh key to connect remotely from midnight commander."
date: 2020-12-01 20:30:00
author: Catalin
tags: ['Today I Learned', 'Servers', 'SSH']
cover:
fullscreen: false
---

If you would need to connect from commnand line to another server using a ssh key pair you would just need to use

```ssh -i file.key user@hostname-ip-of-the-server```

You might get into an error that prompts you that the file has an invalid format, most of the time when using the key generated from Windows Puttygen. But, you can use open the same private key in Putty, go to menu ``Conversions`` and select ``Export OpenSSH Key (force new file format)``. Use the new file for the command line above. It should be good to work.

But, if you are in need to connect from Midnight Commander to another server which requires a ssh key, this requires some more steps:
* In the file ``.ssh/config`` you will need to add this lines, or even create the file if you don't have it already:

    ```bash 
    Host The.host.to.the.server.or.just.the.IP.Address
    _User the-username-here
    IdentityFile /path/to/the/file.key
    ```
* Make sure you start your ssh-agent using the command below. Make sure you use the backquote (`), located under the tilde (~), rather than the single quote (').
    ```bash
    eval `ssh-agent`
    ```
* Add the key file to the ssh agent using
     ```bash
     ssh-add /path/to/the/file.key
     ```
* Now, you should be able to use the menu ``SFTP Link`` from ``mc`` using the below, as you have defined them in the ``.ssh/config`` file:
    ```bash
    the-username-here@The.host.to.the.server.or.just.the.IP.Address
    ```
    

