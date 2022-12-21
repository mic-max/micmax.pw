---
layout: post
title: Drawings
image: drawings.jpg
---

Here are some things I've drawn in reverse chronological order, some random doodles, and a list of nostalgia motivated subjects I want to draw in the future. I enjoy drawing and find it to be a good way to relax my mind. I will continue to update this post as I draw to preserve this monumental artwork for millennia :relieved:

<!-- sort by date field desc -->

{% assign sorted = site.drawings | sort: 'date' | reverse %}
{% for x in sorted %}
  <h4>{{ x.name }}</h4>
  <p>{{ x.date | date: '%b %e, %Y' }}</p>
  <img src="/assets/drawings/{{ x.src }}" alt="{{ x.alt }}"/>
  {{ x.content | markdownify }}
{% endfor %}

## Uncategorised / Doodles

![CA Love](/assets/drawings/ca-love.png)
<!-- TODO -->

![Colourful Cry Baby](/assets/drawings/cry-baby.png)
Soon after I got my iPad I drew the Lil Peep Cry Baby bird. I added some colour to the feather tips and some grid brushing. If it wasn't already obvious I am a big fan of his. RIP Gus.

![Hilltop Castle](/assets/drawings/hilltop-castle.jpg)
Reminiscing about a Scooby-Doo movie I wanted to draw from memory the castle from a scene. After drawing and looking up the movie to be [`Scooby-Doo! and the Reluctant Werewolf`](https://www.imdb.com/title/tt0189072/) and comparing the two I was slightly disappointed, but I did try a technique: crosshatching!

![Lil Peep Mirror](/assets/drawings/lil-peep-mirror.jpg)
With each word being a palindrome in `Lil Peep`, it mirrors pretty well horizontally.

![Ferris Bueler Quote](/assets/drawings/ferris-bueler.jpg)
Don't miss it.

![Colours](/assets/drawings/colours.jpg)
How can I both make some decor for my apartment and drain these markers... two-bird style.

![Questionable Beast](/assets/drawings/beast.jpg)
Started with some question mark horns, questioned some authority, and then went aggressively outside the lines.

![Doodles](/assets/drawings/doodles.jpg)
First paper doodles including: Jack O' Lantern skin-walker, Medieval Michael in `Lil Uzi vs The World` style, les dents :fr:, [Beetman](https://americandad.fandom.com/wiki/Beetman), rainbow [Kiriboh](https://yugioh.fandom.com/wiki/Kuriboh) damaged by :droplet:

![Whiteboard Organisms](/assets/drawings/whiteboard-organisms.jpg)
The humble whiteboard beginnings. Pineapple. Daisy. Blueberries. Kiwis. Grapefruit - guess my stance on them. Hey! Don't look at my checklist :boom:

![Zoboomafoo Profile](/assets/drawings/lemur.png)

I made this for my profile picture on the [Linus Tech Tips Forum](https://linustechtips.com/profile/787-prolemur/). I traced over a picture of the puppet I found on Google Images using `mspaint` and I use it for many of my more-anonymous online accounts.

## Not Illustrated Yet

- Scooby-Doo
- Tranquility Base Hotel & Casino
- Super Smash Bros. Melee
- Rats and Snakes Family Portrait
- George Shrinks
- Stuart Little
- Toy Soldiers
- Little Lulu
- Dithering Pixels 3D Geometry
- Rock-em Sock-em Robots
- Ludwig
- Tyrannical Games
