---
layout: post
title: Lyrics to Ponder
---

An [incomplete and growing collection](https://youtube.com/playlist?list=PLN3gGIxbQaxwFdgBnDwdxl-T272lieqLP) of impactful lyrics that stood out to me. Multiple lyrics from the same song are separated by ellipses, but are strong enough to stand alone. Please check out any artists or songs you haven't listened to you see here, I wish you the best, and enjoy the music :studio_microphone:

Notes

- Most lyrics are taken from Spotify or [Genius](https://genius.com)
- Built to Spill has a cool [handwritten lyric section](https://www.builttospill.com/lyrics) on their website for all their songs.
- Please let me know if stumble across a dead link

{% for song in site.song_lyrics %}
  <h4>
    <a href ="{{ song.link }}">
      {{ song.artist }} - {{ song.name }}
    </a>
  </h4>
  <div id="content">{{ song.content | newline_to_br }}
{% endfor %}
