---
layout: post
title: Lyrics
---

An [incomplete and growing collection](https://youtube.com/playlist?list=PLN3gGIxbQaxwFdgBnDwdxl-T272lieqLP) of impactful lyrics that stood out to me. Multiple lyrics from the same song are separated by ellipses, but are strong enough to stand alone. Please check out any artists or songs you haven't listened to you see here, I wish you the best, and enjoy the music :studio_microphone:

<!-- TODO: add song duration and release date -->
<!-- TODO: add image of artist and maybe thumnail of album or single cover art? -->

{% assign artists = site.lyrics | group_by: "artist" %}
{% for artist in artists %}
  <h4>{{ artist.name }}</h4>
  <ul>
  {% for x in artist.items %}
    <li>
      <a href ="{{ x.link }}">
        {{ x.name }}
      </a>
      <div id="content">
        {{ x.content | newline_to_br }}
      </div>
    </li>
  {% endfor %}
  </ul>
{% endfor %}

## Notes

- Most lyrics are taken from Spotify or [Genius](https://genius.com)
- Built to Spill has a cool [handwritten lyric section](https://www.builttospill.com/lyrics) on their website for all their songs.
- Please let me know if stumble across a dead link
