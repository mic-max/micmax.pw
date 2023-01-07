---
layout: post
title: GameCube USB Adapter Case
---

One of the few video games I still play is Smash Bros. Melee and I use an adapter to play it on PC. Its case was removed when I moved to Seattle to "reduce baggage space". Did this man really save much space in doing so? Not really, but this man did create a fun little project for his future self :smile:

This is the [orignal product](<https://www.walmart.com/ip/Brook-4-Ports-Gamecube-Controller-Adapter-for-Gamecube-to-Switch-PC-turbo-fire/328519751>) I owned, I guess i misread the "brook" on the case for "break" and my command following nature kicked in - ha ha.

<!-- Terminology: The adapter is composed of a USB cable soldered directly to the board and some ribbon cables connecting the two circuit boards. -->
I will be calling the circuit board with controller ports the `I/O Board` and the other, the `Logic Board` for clarity.

## Overclocking

The driver and guide on how to overclock the polling rate from 125Hz to 1000Hz can be found on this super helpful website [blippi.gg](https://blippi.gg) focused on playing Melee on PC. Now aparently to get the best performance you do want the Nintendo official [Super Smash Bros. GameCube Adapter for Wii U](https://www.amazon.com/dp/B00L3LQ1FI), but what the heck that costs $110.

## Mesurements and Plan

I'll be making the design as compact as possible in spirit of the original destructive motive.

I took some key measurements from the both of the adapter's logic boards and cable.

- Base: `104mm` (L) x `42mm` (D) x `37mm` (H)
- Top: `104mm` (L) x `42mm` (D) x `5mm` (H)
- Controller Ports
  - Radius: `TODOmm`
  - LED Radius: `TODOmm`
  - LED Vertical Offset: `TODOmm`
  - Spacing: `TODOmm`
- M2x4mm screw holes, self-tapping
  - Radius: `0.875mm`
  - Depth: `2mm, 3mm` through the `2mm` case or `1mm` PCB respectively

wrote down and planned an enclosure with how the boards would be mounted in small case.

Use increments of nozzle size whenever possible for 3d printing. Mine is 0.4mm so multiples of that were consciously used in the design process.

![Shape](/assets/img/gc-adapter/shape.jpg)
This was the configuration of the board I came up with to minimise volume. The ribon cables tucked nicely into the space between P2 and P3

![Plans 1](/assets/img/gc-adapter/plans-1.jpg)
![Plans 2](/assets/img/gc-adapter/plans-2.jpg)
![Plans 3](/assets/img/gc-adapter/plans-3.jpg)
![Plans 4](/assets/img/gc-adapter/plans-4.jpg)

Things I wrote down in the above plans that I forgot to actually do and are still good ideas

- Recessed screws if possible (with a 2mm wall thickness and a 1.5mm screw head height this makes little sense)
- Use longer screws when possible
- Use a variable infill percentage for different areas of the print
- [I'm hung up on this decade](https://youtu.be/AusayQ_xkE4) - RIP Jeremiah Green

## Cost

$23 1Kg Plastic Filament Spool: `41g` is about `$0.94`
$10.46 100 pcs [M2x4mm Button Head Hex Socket Screws](https://www.amazon.com/dp/B01B1OD83Y): `10 pcs` is about `$1.05`
Total: $1.99

## Shapr3D

all steps I did to make it

There is not much variation in the x-y plane, that is to say parts of this model are generally just shapes stretched straight up vertically. As such, most of the effort is in creating the two sketches for bottom and top.

should I create the entire thing I want to house in 3d? 2 boards, cables, gamecube ports. LEDs?
getting key measurements is probably all i realistically need though.

There must be a better way to draw a circle 1.5mm away from a corner in both directions than drawing two straight lines from the corner adding the circle, then deleting those lines. If I draw circle and move 1.5mm in each sometimes there are constraints that get in the way?

Shapr3D tools and features used

- Rectangle: diagonal and centre
- Circle
- Line
- Offset
- Extrude
- Trim
- Copy
- Loft (for the angled I/O board supports that didn't make it to the final version)
- Linear repeat TODO

The rationale for making the top so thin is so the screws did not have to be overly recessed down a deeper than necessary hole, making them harder to access and overall just looking kinda weirder to be honest.

The entire case is symmetrical (except the cable hole) symmetrical, can I have abused some tool in Shapr3D to make it easier? symetrical tool / constraint?

I took inspiration from this [box and lid with 4 screw holes](https://www.thingiverse.com/thing:4598367) for how to afix the top and bottom pieces of the enclosure.
[3D Printed Enclosure Design](https://www.hubs.com/knowledge-base/enclosure-design-3d-printing-step-step-guide/) has some really good tips for designing the structure.

[Universal Project Box](https://cults3d.com/en/3d-model/tool/universal-project-box)

TODO fill 2 holes in the bottom part. and put a TODOmm hole on right wall near bottom and middle of flanking screw mounts.
The `STL` files can be found [here](https://github.com/mic-max/micmax.pw/tree/master/assets/cad/gc-adapter).

## Cable Fix

I also forgot to add the cable hole in the model, so I will just drill one.

The wires to the board were getting quite damaged from being fully exposed and moved around when plugging and unplugging the adapter.

The pinout is taken from [this photo](/assets/img/gc-adapter/original-wires.jpg)

| Circuit Board Label | USB Cable + Colour |
|---------------------|--------------------|
| GND                 | Rumble Black       |
| P1-V50              | Rumble Red         |
| P3-V50              | Red                |
| D-                  | White              |
| D+                  | Green              |
| GND                 | Black              |

So I soldered it all to perfection and here's the proof.

![Solder job that sucks pretty bad](/assets/img/gc-adapter/cable-hole.jpg)

I am doing you all a favour by not making this a close up :skull:

I plugged it in, much to my surprise and delight heard the [Windows device connected sound](https://youtu.be/9omajpF7v-o), fetched my controller from my TV stand drawer and plugged it in without taking the time to unravel the cable. Rushing to open Slippi I see the red LED illuminate and I knew it was a success. Now, the lead fumes are doing a number on me as I don't have great ventilation. How did we as a society decide putting this stuff in paint was a good idea... That didn't stop me from booting into an unranked game (over wifi, I'm sorry) to teach the Falco named kodiak kdk#605 a quick 2-0 lesson :devil:

However, this satisfaction was short lived. I remembered I had to drill the hole for the cable in the case. That's not the issue though, I already noticed that after printing the case I forgot a cable hole. The problem was how was I going to get the cable into the hole. On one end it was soldered to a circuit board and the other end has a USB-a plug. Both are much larger than I'd like to make the hole...

Anyway, I drill the hole with a wobbly wood drillbit I have that is close to the same diameter as the USB cable, stellar. Then I go in for round 2 of soldering! It worked for the second time! Either my soldering isn't too bad or I'm that chump who would've bought the winning lottery ticket this week and [but didn't](https://www.moneyunder30.com/why-you-should-never-play-the-lottery).

![Solder job #2 where cable actually goes through case](/assets/img/gc-adapter/cable-hole.jpg)

Notice the cable!

### Cable Portals

Port: solder logic board to a [USB port](https://www.aliexpress.us/item/2255800357313257.html) mounted to the inside of the case. This would also help in reducing the amount of strain applied to my assuredly weak soldering joints which hasn't really ameliorated with the creation of this enclosure... I could use some [thermal adhesive](https://www.instagram.com/p/BipsZaUgvCU/) but in the event of having to replace the cable it would be harder. This also lets the user choose what length of cable they want or none at all if they already own a sufficient one. I think this is the best option and I wonder why the manufacturer of this device didn't do so, perhaps it is more expensive to. There were also originally two USB cables so double that cost.

Retractable Cable: this is on the same wave as the port idea except the port is a retractable cable spool. I've always thought these would be cool to use on electronics, but rarely see it and maybe there is a good reason for it that I'd like to learn of first hand :tongue:

Grommet: it would need to be large enough for the USB A plug to exit. The cable doesn't really have

Pass Throughs: <https://www.pacergroup.net/wire-management/cable-pass-throughs/>

Molded Cables: this is what the original case had.

Found this revealing [electronics.stackexchange post about cable strain relief](https://electronics.stackexchange.com/questions/77516).

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

## V1

I partially printed an initial design of the bottom to check the alignment. There was not enough space to, like I had planned, slide the logic board under the overhanging supports. Ultimately I didn't end up using these overhang screw mounts for a myriad of reasons.

![v1 logic board not fitting under angled i/o board screw mounts](/assets/img/gc-adapter/v1-no-fit.jpg)

After snapping off the angled mounts I used some pushpins in place of the screws (still being delivered at the time) and hole alignment was tip top.

![push pins in logic board](/assets/img/gc-adapter/tacks-logic.jpg)
![push pins in i/o board](/assets/img/gc-adapter/tacks-io.jpg)

## Printing

I had to fully calibrate my printer again to get a nice print.

I also setup a fool-proof system to prevent the cables getting caught

![3D printer hose being suspended](/assets/img/gc-adapter/suspension.jpg)
![Case being printed by my ender 5 pro](/assets/img/gc-adapter/mid-print.jpg)
This is the most professional looking of all the photos taken for this project in my opinion.

## Result

![Top fit 1](/assets/img/gc-adapter/top-fit-1.jpg)
![Top fit 2](/assets/img/gc-adapter/top-fit-2.jpg)

![Bottom mounted](/assets/img/gc-adapter/bottom-mounted.jpg)

![Front angle of the case](/assets/img/gc-adapter/front.jpg)
![Side profile of case](/assets/img/gc-adapter/side.jpg)
![Case close up macro](/assets/img/gc-adapter/macro.jpg)

I can see these are not actually circles but one of those pesky tridecagons!

I hope after going through this process of designing a model with tight specifications and printing it will help me springboard into mounting my Wii into my CRT's VCR void. It is a combination of easier and harder. I will be able to find a CAD model of the Wii's PCB but probably not for the TV. Extra size too! But my Wii still fits within the bounds of my 250mm x 250mm Ender 5 Pro's build plate.

<!-- TODO Update: I ended up finishing the CRT Wii project! Here's the [blog post](#TODO) :smile: -->

A major takaway from this iterative design and prototype cycle is that I really need to learn [parametric design](https://www.shapr3d.com/videotutorials/parametric-v-direct-modeling). Also, I took a lot of mostly useless measurements in the beginning, so being conscious of which are needed is a [good time save](https://oyster.ignimgs.com/wordpress/stg.ign.com/2017/10/Owless.gif). Maybe making a simple model of each board would have been worth the small effort...

I should probably watch all [these tutorials](https://www.shapr3d.com/videotutorials/sketching-improvements) so I can make better things and get better at making them.

## Volume Comparison

to nintendo, mayflash, brook

| GameCube Adapter | Volume (mm<sup>3</sup>) |
|------------------|-------------------------|
| Mayflash         | TODO |
| Nintendo         | TODO |
| Brook            | TODO |
| Custom           | 108 x 46 x 37 = 183,816 |

## V2 Ideas

### Metal

There's also CNC Milling services. Subtractive manufacturing for a sturdy metal case!
A large majority of the aluminum bar would be removed in the milling process with the current design. Think about leaving extra metal on the interior to add mass and decreate required milling time.

Mounting in metal could short the circuit boards?
Self-taping screws would not be a thing, need to thread all the screw holes.

How much would it weight (calculate 3d model volume) ? How much of the original aluminum block would be used vs. shredded away by the mill? cost of the block?

Unfortunately, the aluminum bar I already have and will have leftover from the chess piece weight mould is not dimensionally large enough. So I'd have to buy something like [1.75" Square Aluminum Bar x 12"](https://www.amazon.com/dp/B01F80W12Q). On second thought, it would work because the height can be split something like 7mm and 30mm which is less than 1.25". But, on third thought the height split doesn't change the width of the enclosure which has to be 42mm. And 42mm is > 1.25".

<https://youtu.be/_MiFAydiWyM>

### Enclosure

- Structure
  - Has flex on long side, add gussets from base to bottom and top walls? add y-axis padding to logic board, for any gussets that go between the long side's screw mounting posts. outside gussets would not need more padding. 
  - Use actual threads for screw locations rather than self tap method
  - Give more clearance, sacrificing 10mm in each dimension isn't realistically a huge deal
  - USB port rather than cable coming through out
  - The overhanging mounts were way to hard to install, so skipped them and now the middle two ports noticeable compress more than P1 and P4
  - Use larger screws and longer when possible: on 4 box connection screws and 2 i/o board screws
  - Mount the logic board the other way since it has less clearance and proper screw guards?
- The front panel is not connected to the i/o board at all directly so adding that connection could make it more sturdy and precise
  - If the i/o board screwed into the front panel!!! and the cable connecting the board just freefall in the case. that would fix lots of things!!! How am I only thinking of this now, I already screwed in the logic board upside down, why not do both of them in the upside down! Update: Because it physically doesn't work lol. That's why I didn't think of doing it like that.
  - Something that would be possible could be some flexible clips that come in off the top panel and the i/o board snaps into it. I think the two side screws would still fit with this idea, so the clips could add some strength to the inner part. measurements would need to be accurate very for this.
- Looks
  - Use different fillament material and cool colour?
  - Add champfers where possible to make it less boxy
  - Add design elements
  - Recessed screws, contrast with case colour. brass on black?
  - Better print finish, less visible printing lines, polish?
- LEDS
  - Improve casing fit and prevent them from sinking over time or being pushed inwards
  - [Colour match](https://www.amazon.com/gp/product/B01AUI4W5U) to shield in Melee: P1 red, P2 blue, P3 yellow, P4 green

This case <https://content.instructables.com/FN8/RFUF/KQ57CQSI/FN8RFUFKQ57CQSI.jpg> has flat part that inlays to the bottom part of the box, rather than just having the corners do so.

## End

Will I play more Melee            now that I've built this enclosure?
  Possibly.
Will I play Melee more peacefully now that I've built this enclosure?
  Probably.
