---
title: Caesar Cipher Wheel
---

laser cut one: <https://www.amazon.com/gp/product/B08P3TLJHX/ref=ox_sc_saved_image_3?smid=AJGKGVCR58XHV&psc=1>

Make flat. if the bottom part was cut down the middle and glue around the top part.
It could be on rails where the middle circle has a male groove and the outer circle has a female groove cut by a router.
The male groove would need to be added on. Can't just cut small circle from centre of large circle because it won't have any overlap which is needed for the groove technique to work
This design uses and wastes less material, has a simpler design SVG, reduces the height, and doesn't require any hardware.
Butterfly nut + bolt through two circles.

![Cipher Wheel Plan](/assets/img/cipher/plan.png)

## Inkscape Design

1. Outer Circle + Radial Lines
  1. Create 50mm radius circle at 0, 0
  1. Draw a line from 50, 0 to 50, 50
  1. Select that line twice and move the centre anchor to 50, 50
  1. Edit > Clone > Create Tiled Clones
  1. 1 row, 26 columns. Shift per column -100%, Rotation per column = 360/26 = 13.846 (cumulative?)
1. Letters
  1. Create text with "ABCDEFGHIJKLMNOPQRSTUVWXYZ", ya know, the alphabet
  1. Set centre anchor to 50, 50
  1. Text > Put on Path
  1. Adjust spacing between letters so distance between A and Z matches all other letters
1. Clone everything
1. Adjust spacing between letters

[Cipher SVG](/assets/cad/cipher.svg)

What's awesome about circles is the lines on each will match up perfectly without any extra work or thought given.

## Routing

How to use a router.

If I really wanted to avoid using a router I could of course create my own plywood by sandwiching 3 boards together with glue having already cut the grooves by adjusting the radius. i.e. 3 outer halos where the middle layer has a smaller inner radius and 3 inner circles where the middle layer has a larger radius. However, this only seems to transfer the difficulty to gluing precisely and perform more cuts.

The thickness of the board needs to not be unsubstantial.

<https://youtu.be/mcLBmdYs5iU>
<https://youtu.be/bCKe3llVE8I>

Router can cut the male groove. Can it cut the female???

Could cut the female groove on a table saw? Set height of blade and rotate semi-halo piece of wood over it? I think this would only work for a blade of similar radius as the piece of wood... Dremel? Might be able to use a dremel with some jig attached to act similarly to the router...

## Materials

## Resources

- [Inkscape - Radial Tiled Clones](https://youtu.be/YZLwVpeu2-g)
- [Inkscape - Text on a Path](https://youtu.be/sriOf60TVxg)
