---
title: Poker Program Refactor
---

I made a poker program in University. The goal was to get experience writing software using Test Driven Development (TDD) methodology. Each commit is either testing, feature work, or refactoring in that order.

<https://github.com/mic-max/poker>

I had the idea to refactor this Java code and see what I would have done differently a few years later and without the time pressure of it being a assignment. My tests should be good enough to catch any slip-ups I make in the refactor phase. I will call out certain changes I make and why I think they're an improvement.

Also, I might consider doing a quick rewrite in a different language since Java is so verbose, it would be much more consumable in a language like JavaScript, I believe.

How easy would it be to modify it to play Texas Hold-em instead of 5 card poker? Hopefully, the logic has been abstracted from the classes, thus making them resuable.
