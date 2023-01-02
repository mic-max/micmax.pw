---
layout: post
title: GameCube Adapter Case
---

One of the few video games I still play is Smash Bros. Melee and I use an adapter to play it on PC. Its case was removed when I moved to Seattle to "reduce baggage space". Did this man really save much space in doing so? Not really, but this man did create a fun little project for his future self :smile:

[3D Printed Enclosure Design](https://www.hubs.com/knowledge-base/enclosure-design-3d-printing-step-step-guide/) has some really good tips for designing the structure.

<https://blippi.gg>

overclock and drivers.

i guess i misread "brook" on the case for "break". ha ha.

[orignal product](<https://www.walmart.com/ip/Brook-4-Ports-Gamecube-Controller-Adapter-for-Gamecube-to-Switch-PC-turbo-fire/328519751>)

Now aparently to get the best performance you do want the Nintendo official [Super Smash Bros. GameCube Adapter for Wii U](https://www.amazon.com/dp/B00L3LQ1FI), but what the heck that costs $110. I'll also make the design as compact as possible in spirit of the original motive.

## Mesurements and Plan

I took some key measurements from the both of the adapter's logic boards and cable.

- screw hole radius: 0.875
  - accomodates an M2 screw
- screw hole depth: at least 3mm?
  - accomodates an M2x4mm screw through at least 1mm material (the circuit board)

- Screw Holes
  - 0.875mm Radius to self-tap an M2 screw
  - Depths of 2mm to 3mm depending on whether the 4mm screw will pass through another part of the case or PCB respectively
- Base: 104mm (L) x 42mm (D) x TODOmm (H)
- Top:

wrote down and planned an enclosure with how the boards would be mounted in small case.

Use increments of nozzle size whenever possible for 3d printing. Mine is 0.4mm so multiples of that were consciously used in the design process.

![Plans 1](/assets/img/gc-adapter/plans-1.jpg)
![Plans 2](/assets/img/gc-adapter/plans-2.jpg)
![Plans 3](/assets/img/gc-adapter/plans-3.jpg)
![Plans 4](/assets/img/gc-adapter/plans-4.jpg)

Things I wrote down that I forgot to actually do and are still good ideas

- TODO

[M2x4mm Button Head Hex Socket Screws](https://www.amazon.com/dp/B01B1OD83Y)

## Shapr3D

all steps I did to make it

should I create the entire thing I want to house in 3d? 2 boards, cables, gamecube ports. LEDs?
getting key measurements is probably all i realistically need though.

- box bottom
  - create rectangle 106mm x 46mm from origin
  - offset edge 2mm
  - move 2mm by 2mm
  - extrude base to 2mm
  - extrude walls to 31mm
  - union base with walls
- box bottom grooves
  - sketch lines on the top wall's face 8mm from the outside edge
  - trim away any excess lines so we just end up with a rectangle 8mm from each outside edge
  - extrude it down 2mm
- box screw mounts each corner where inside of wall intersects base
  - offset inner edge by -1.4mm
  - make a 0.875mm radius circle
  - delete the intersecting offset line just created
  - offset edge 2mm
  - from centre of circle draw two rectangles of 3.4mm x 2.875mm (make sure other walls are not affected by a constraint)
  - select all 6 sections that are not part of inside circle and extrude 27mm (4mm shorter than walls)
  - for all 3 other corners
    - select body, copy. and rotate -90, 90, or 180 degrees
    - select corner edge of both box and screw mount bodies, and click align
    - adjust height to snap their bottoms together (move down 2mm)
  - union all screw mounts to box
- logic board mounts
  - draw rectangle 53.07mm x 33.12mm centered on existing box body
  - draw a 0.875mm circle at a corner
  - delete rectangle
  - offset edge 2mm
  - extrude 6mm (so it will be 4mm tall from the base)
  - copy this tube to each of the other 3 corners
  - union all bodies
- io board simple mounts
  - draw rectangle 98.10mm x 18.44mm centered on existing base rectangle
  - draw a 0.875mm circle at the top left corner
  - delete rectangle
  - offset edge 2mm
  - extrude 20.15mm
  - copy this tube over 98.10mm
  - TODO add ribs and gussets to outer walls
  - union bodies
- io board overhang mounts
  - draw rectangle 48.08mm x 18.44mm centered on existing base rectangle
  - draw 2.875mm radius circles at each bottom corner
  - move them 20.15mm upwards
  - draw 2.875mm radius circles at each bottom corner
  - move them 10mm away from the center along x axis
  - loft tool the two circles together
  - sketch a 0.875mm circle on top
  - extrude 3mm
  - copy this body and move XXmm on x-axis
  - rotate 180 degrees
- box top
  - copy box bottom
- box top tongues
  - extrude walls to XXmm
  - extrude 1.2mm on the inside of the walls down 2mm
- box screw mounts each corner
  - make a 0.875mm radius circle
  - offset edge 2mm
  - extrude 27mm (4mm shorter than walls)
- port + light openings
  - TODO

bevel corners
champfer case screw holes

The rationale for making the top so thin is so the screws did not have to be overly recessed down a hole. It would look weirder and make them harder to access.

symmetrical, can i use shapr3d symetrical tool / constraint?
everything except the cable hole anyways.

I took inspiration from this [box and lid with 4 screw holes](https://www.thingiverse.com/thing:4598367) for how to afix the top and bottom pieces of the enclosure.

<https://cults3d.com/en/3d-model/tool/universal-project-box>

TODO
The `STL` files can be found [here](/assets/cad/gc-adapter/).

## Cable Fix

I also forgot to add the cable hole in the model, so I will just drill one.

The wires to the board were getting quite damaged from being fully exposed and moved around when plugging and unplugging the adapter.

The pinout is taken from [this photo](/assets/img/gc-adapter/pinout.jpg)

| Circuit Board Label | USB Cable + Colour |
|---------------------|--------------------|
| GND                 | Rumble Black       |
| P1-V50              | Rumble Red         |
| P3-V50              | Red                |
| D-                  | White              |
| D+                  | Green              |
| GND                 | Black              |

## Simple Box Makers

I definitely could have used one of these to aid in the design process. All I'd have to add is the cable hole, controller port holes, the mounts for the I/O board.

- [SOL75 Electronic Enclosure](https://www.sol75.com/component/electronic_enclosure_if)
- [Lightning Boxes - Basic Box](https://lightningboxes.com/product/basic-box/)

## Online Printing Service

My 3D printer is definitely not the best and I'm not too keen on fiddling around with it for hours to find the optimal positions for all its dials. Now that I have a good design let me give a 3D printing service a whirl!

They all ask for my email address to give me a quote! GRRR
Even worse are the ones that make you create an account.
Even worse is when I can't just sign-in with Google.

- <https://www.hubs.com/manufacture>
  - Minimum order value surcharge makes any print cost at least $90
  - 3-5 business days
  - $20.25 for the bottom part
- <https://www.shapeways.com1>
  - $38.75 for the bottom part

I can also get different materials, rarer colours!

## Printing

I had to fully calibrate my printer again to get a nice print.

I also setup a fool-proof system to prevent the cables getting caught

![3D printer hose being suspended](/assets/img/gc-adapter/suspended.jpg)

## Result

![Nintendo GameCube USB Adapter](/assets/img/gc-adapter/result.jpg)

## Volume Comparison

to nintendo, mayflash, brook

## Next

I hope after going through this process of designing a model with tight specifications and printing it will help me springboard into mounting my Wii into my CRT's VCR void.
<!-- TODO include link when done -->

## Ideas to Improve

### Metal

There's also CNC Milling services. Subtractive manufacturing for a sturdy metal case!
A large majority of the aluminum bar would be removed in the milling process with the current design. Think about leaving extra metal on the interior to add mass and decreate required milling time.

Mounting in metal could short the circuit boards?
Self-taping screws would not be a thing, need to thread all the screw holes.

Unfortunately, the aluminum bar I already have and will have leftover from the chess piece weight mould is not dimensionally large enough. So I'd have to buy something like [1.75" Square Aluminum Bar x 12"](https://www.amazon.com/dp/B01F80W12Q). On second thought, it would work because the height can be split something like 7mm and 30mm which is less than 1.25". But, on third thought the height split doesn't change the width of the enclosure which has to be 42mm. And 42mm is > 1.25".

### LED Swap

To match the shield colours in Super Smash Bros. Melee for the Nintendo GameCube I replaced 3 of the 4 LEDs on the board.

| Port | Colour |
| 1    | Red    |
| 2    | Blue   |
| 3    | Yellow |
| 4    | Green  |