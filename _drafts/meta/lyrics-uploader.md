---
title: Ponder Lyrics Helper Script
---

It can take a few minutes for each song lyric I add to my ponder list. I can spend a couple hours to automate this and potentially save myself time and reduce mistakes.

input

- youtube link
- spotify link
- song lyric

output

- commit and push new file to `_lyrics` folder

extract data

- name
- artist
- youtube link
- lyrics i want to highlight

actions

- add to youtube playlist
- extract artist name and song name from youtube title when possible
- hypgenate artist name and song name
- create artist folder (if not already exists)
- create file song-name.md in artist-folder
- attempt to fetch lyrics from azlyrics or musixmatch or similar
- open editor with the fetched lyrics if available
  - user deletes parts they don't want to include
- git add file
- git commit
- git push [optionally]

a mode that verifies that all `link`s in the `_lyrics` folder files are present in the playlist. and that they are all still HTTP 200 OK.
