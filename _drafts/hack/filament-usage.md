---
layout: post
title: Filament Usage
---

Whenever I'm on [Thingiverse](https://www.thingiverse.com/) I often times would like to know how much filament something uses. Now, I understand every printer is different and slicing software too, but at least give me an estimate of how much filament is used by grams at the settings provided (infill, rafts, supports, filament type, etc.)

To do this I could create a bot to download and slice all files from Thingiverse and store them in a database. Then create a browser extension that will fetch this data and show it on the things page.

On first glance I see that the URL of things is very simple, just `/thing:<number>`. The downloading of the files might be harder for a bot to do.

I suspect a rate limit might be present so the bot might be better to not try to slice everything but just popular things and things users of the extension are opening. If on a thing's page that we don't have data for it could automatically slice or we could add a button.

Unzip file.
Show print time too. Maybe configurable with the cost.

## Slicing Software

Doesn't have to be anything super complex.
Needs to run from a serverless function?
Easy to invoke from CLI

## Bot Hosting

## Database

## Other Sites

Similar to the YouTube dislike extension.
