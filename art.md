---
layout: post
title: Art
---

Here are some things I've drawn in reverse chronological order, including random doodles. I enjoy drawing and find it to be a good way to relax my mind. I will continue to update this list as I draw to preserve this monumental and paradigm-shifting artwork for millennia :relieved:

<!--
TODO: toggle view between details and gallery mode. add this to the models section too. and lyrics?
      need to use the horizontal space on desktop computers better.
-->

{% assign sorted = site.art | where: "draft", "false" | sort: 'date' | reverse %}
{% for x in sorted %}
  <div>
    <h4 style='display: inline;'>{{ x.name }}</h4>
    <p style='float: right;'>{{ x.date | date: '%b %e, %Y' }}</p>
  </div>
  {% if x.src %}
  <img src="/assets/art/{{ x.src }}" alt="{{ x.alt }}"/>
  {% endif %}
  {{ x.content | markdownify }}
{% endfor %}

## Uncategorised / Doodles

![CA Love](/assets/art/ca-love.png)

My first time in California on my second favourite ride at Disney California Adventure Park with my good friends. Possibly my first iPad sketch, maybe not even in Procreate, but in the Notes app.

![Colourful Cry Baby](/assets/art/cry-baby.png)

Soon after I got my iPad I drew the Lil Peep Cry Baby bird. I added some colour to the feather tips and some grid brushing. If it wasn't already obvious I am a big fan of his. RIP Gus.

![Hilltop Castle](/assets/art/hilltop-castle.jpg)

Reminiscing about a Scooby-Doo movie I wanted to draw from memory the castle from a scene. After drawing and looking up the movie to be [`Scooby-Doo! and the Reluctant Werewolf`](https://www.imdb.com/title/tt0189072/) and comparing the two I was slightly disappointed, but I did try a technique: crosshatching!

![Lil Peep Mirror](/assets/art/lil-peep-mirror.jpg)

With each word being a palindrome in `Lil Peep`, it mirrors pretty well horizontally.

![Ferris Bueler Quote](/assets/art/ferris-bueler.jpg)

Don't miss it.

![Colours](/assets/art/colours.jpg)

How can I both make some decor for my apartment and drain these markers... two-bird style.

![Questionable Beast](/assets/art/beast.jpg)

Started with some question mark horns, questioned some authority, and then went aggressively outside the lines.

![Doodles](/assets/art/doodles.jpg)

First paper doodles including: Jack O' Lantern skin-walker, Medieval Michael in `Lil Uzi vs The World` style, les dents :fr:, [Beetman](https://americandad.fandom.com/wiki/Beetman), rainbow [Kiriboh](https://yugioh.fandom.com/wiki/Kuriboh) damaged by :droplet:

![Whiteboard Organisms](/assets/art/whiteboard-organisms.jpg)

The humble whiteboard beginnings. Pineapple. Daisy. Blueberries. Kiwis. Grapefruit - guess my stance on them. Hey! Don't look at my checklist :boom:

![Zoboomafoo Profile](/assets/art/lemur.png)

I made this for my profile picture on the [Linus Tech Tips Forum](https://linustechtips.com/profile/787-prolemur/). I traced over a picture of the puppet I found on Google Images using `mspaint` and I use it for many of my more-anonymous online accounts.
