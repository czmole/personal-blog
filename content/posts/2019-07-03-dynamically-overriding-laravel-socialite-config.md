---
title: "How to override dynamically Laravel Socialite config"
slug:
description: "How to override dynamically Laravel Socialite config"
date: 2019-07-03 15:35:55
author: Catalin
tags: ['Laravel', 'Socialite', 'Config social login']
cover:
fullscreen: false
---

## Intro

As you may already have known and as their [https://github.com/laravel/socialite](https://github.com/laravel/socialite) says: "Laravel Socialite provides an expressive, fluent interface to OAuth authentication with Facebook, Twitter, Google, LinkedIn, GitHub, GitLab and Bitbucket. It handles almost all of the boilerplate social authentication code you are dreading writing."

After installing it in your project, the configuration is pretty easy: in the ``config/services.php`` you can add for each social provider its name and the connection parameters, for example:

```php
    return [
        'facebook' => [
            'client_id' => 'AAA-the-id-generated-facebook-developer-console',
            'client_secret' => 'BBB-the-key-generated-facebook-developer-console', 
            'redirect' => 'https://mydomain.com/socialredirect/facebook'
        ]
    ];
```

The login flow via a social media account also means having two extra routes in your app:

1. A route where the user will be sent when they click a button saying "Login with Facebook" that will work as a proxy between app settings related to that social network, that will just get the config details and send the user to the propper OAuth Consent Screen on Facebook based on that config.

2. The second route that the Social Network will use to redirect the user back inside your application after login consent was done. (e.g: the URL ``https://mydomain.com/socialredirect/facebook`` from our config example above)

On both routes, inside your codebase you have to load the Socialite driver for the correspoding social network and you are doing that with, for example in case of Facebook: ```Socialite::driver('facebook')->redirect()```

When you use that piece of code, what it does behind the scene, is that the Socialite library looks inside ``config/services.php`` for the social driver settings and calls an endpoint API from that social network to send the user on their consent screen. 

After the consent is done on the return URL inside your application, you would have to use something similar like ``Socialite:driver('facebook')->user()`` to extract the user info from the social network reply.

OK ... Should be pretty clear so far how it works in general terms 😊

## The problem

But how would you do the same stuff if for example, you would have an application used by multiple companies where each of them can set their own client id, client secret and redirect URL for their own social login? And these companies could change these config parameters at their own wish, anytime from a settings page inside your application.

## A possible solution

In such a case those config details would need to be loaded dynamically and not from that ``config/services.php`` file. 

I have recently got into the same issue and this is how I solved the problem:

```php

$config = [
    'client_id' => 'company-specific-id-generated-facebook-developer-console',
    'client_secret' => 'company-specific-key-generated-facebook-developer-console', 
    'redirect' => 'https://mydomain.com/socialredirect/facebook'
];

$provider = Socialite::buildProvider(
                            \Laravel\Socialite\Two\FacebookProvider::class, 
                            $config
                        );
                        
return $provider->redirect();

```

What it simply does is to build a custom provider based on the Facebook provider with the customer config parameters.

It works like magic! Hope it will help you as well!

**Have you hit into simillar problem? How did you solved it? If you want to share your experience on this ping me on Twitter [@czmole](https://twitter.com/czmole)**
