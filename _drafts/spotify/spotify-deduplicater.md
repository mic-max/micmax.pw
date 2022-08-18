---
layout: post
title: Remove Duplicate Liked Songs on Spotify
---

export all liked songs from an account
list all the ones thought to be duplicates i.e. remastered, remixes, etc.
output the song name, album and artist and date the user liked it
default sort order ascending by "date added"
let user deselect ones from the list output, could be command line, use arrows and spacebar to toggle
unlike clean versions and like the explicit version if available

- [x] Heat Waves - Glass Animals - Dreamland (+ Bonus Levels) - Oct 20, 2020
- [x] Heat Waves - Glass Animals - Dreamland - Jan 13, 2021
- [x] Heat Waves - Glass Animals - Heat Waves (Live) - Sep 24, 2021

[Great Node.js CLI App Tutorial](https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/)

group songs into their artist
compare all in each group, 5000 liked songs I'd guess it's like 40 songs per artist or so
so it'd be (5000 / 40)^2 which is 15k comparisons
doing 4000^2 comparisons is 16 million which is probably too many haha
see how similar their song titles are, do anything with their album names?
