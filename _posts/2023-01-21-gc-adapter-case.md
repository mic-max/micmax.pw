---
layout: post
title: GameCube USB Adapter Case
---

Smash Bros. Melee is one of the few video games I'll play. You need an adapter to play on PC and I removed [mine's](https://www.brookaccessory.com/detail/93354732/) case when I moved to Seattle to "reduce baggage". Did I really save much space in doing so? Not at all, but I did create a fun little project for my future self :smiling_imp:

## The Adapter

I will be calling the circuit board with controller ports the `I/O Board` and the other, the `Logic Board` for clarity.

![Shape](/assets/img/gc-adapter/shape.jpg)

> Minimal volume configuration I came up with; tucking the ribbon cables between two ports.

### Overclocking

I followed a guide on [blippi.gg](https://blippi.gg) (awesome site for PC Melee players) to overclock it from `125 Hz` to `1000 Hz`. Apparently the best performance requires the Nintendo official [Super Smash Bros. GameCube Adapter for Wii U](https://www.amazon.com/dp/B00L3LQ1FI), but what the heck that costs $100!

## Measurements and Plan

I'll be making the design as compact as possible in [spirit](https://spiritedman.com) of the original destructive motive.
I also tried to use multiples of my nozzle size `0.4mm` whenever possible in the design process.

Key Measurements (centre to centre & radius)

- Base: `104mm` (L) x `42mm` (W) x `37mm` (H)
- Top: `104mm` (L) x `42mm` (W) x `5mm` (H)
- `Logic Board` Mounts: `53.10mm` (L) x `33.10mm` (W) x `5mm` (H)
- `I/O Board` Mounts:
  - Top Two: `97.97mm` (L) x `18.72mm` (W) x `19mm` (H)
  - Bottom Two: `48.00mm` (L) x `18.72mm` (W) x `19mm` (H)
- Controller Ports: `8.8mm`
  - LED: `1.9mm`
  - LED Vertical Offset: `13.93mm`
  - Spacing: `27.81mm`
- M2x4mm "self-tapping" Holes: `0.875mm`
  - Case Mounts: `2.125mm` to accommodate the `~2mm` M2 screw head
  - Depth: `2mm, 3mm` through the `2mm` case or `1mm` PCB respectively
  - Offsets: `2mm` of wall on all sides
- Cable Hole: `1.875mm` centred between the flanking mounts and `9mm` from the bottom

![Plans 1](/assets/img/gc-adapter/plans-1.jpg)
![Plans 2](/assets/img/gc-adapter/plans-2.jpg)
![Plans 3](/assets/img/gc-adapter/plans-3.jpg)
![Plans 4](/assets/img/gc-adapter/plans-4.jpg)

Things I wrote down in the above plans that I forgot to actually do and are still good ideas

- Use longer screws when possible
- Use a variable infill percentage for different areas of the print
- Recessed screws if possible (with a `2mm` wall thickness and a `1.5mm` screw head height this makes little sense due to the required `0.5mm` wall thickness at that point)

Asides

- I've heard good things of the iPad App, [Concepts](https://apps.apple.com/us/app/concepts/id560586497), that could help with professionalising my insane chicken scratch plans.
- [I'm hung up on this decade](https://youtu.be/AusayQ_xkE4) reference in `Plan 3` - RIP Jeremiah Green

## Cost

- $23.00 [1 Kg Plastic Filament Spool](https://www.amazon.com/gp/product/B00J0ECR5I): `41g` is about `$0.94`
- $10.46 100 pieces [M2x4mm Button Head Hex Socket Screws](https://www.amazon.com/dp/B01B1OD83Y): `10 pieces` is about `$1.05`

Total: $1.99

## Shapr3D

There is not much variation in the z-axis, that is to say, the parts of this model are generally just shapes stretched straight up vertically. As such, most of the effort is in creating the two parts' sketches. The rationale for making the top so thin was to not overly recess the screws, a deeper than necessary hole would look weird and make them harder to access. The entire case is symmetrical (minus the cable hole)... Could I have used and abused some tool in Shapr3D to make it easier? [3D Printed Enclosure Design](https://www.hubs.com/knowledge-base/enclosure-design-3d-printing-step-step-guide/) has some really good tips that I incorporated. I took inspiration from this [box and lid with 4 screw holes](https://www.thingiverse.com/thing:4598367) and [Universal Project Box](https://cults3d.com/en/3d-model/tool/universal-project-box) for how to affix the top and bottom pieces of the enclosure.

Shapr3D tools and features used

- Rectangle: Diagonal and centre
- Circle
- Line
- Offset: Creating a padded outline of a circle
- Extrude: Turn a face of a sketch into a body
- Trim: Remove segments of sketches
- Copy: Duplicating common bodies to a new location
- Loft: To make the angled `I/O Board` supports that didn't make it to the final version
- Linear Repeat: Repeat the controller port and LED holes sketch

The `STL` files can be found [here](https://github.com/mic-max/micmax.pw/tree/master/assets/cad/gc-adapter).

## Cable Fix

The wires to the `Logic Board` were getting quite damaged. There were two USB cables connected to the `Logic Board` one grey, used to power the rumble, and one black, together in a rugged overmolded cable. I never use rumble so removed the grey USB plug cable. I desoldered all connections using desoldering wick and resoldered the ones from the black USB plug cable all to perfection and here's the proof :grimacing: I am doing you all a favour by not making this a close up :skull: Also, I don't believe my solder has a rosin core! Another thing I can shift blame to! :joy:

![Solder job that sucks pretty bad](/assets/img/gc-adapter/cable-hole.jpg)

| `Logic Board` | USB (Plug: Wire) |
|---------------|------------------|
| GND           | Grey: Black      |
| P1-V50        | Grey: Red        |
| P3-V50        | Black: Red       |
| D-            | Black: White     |
| D+            | Black: Green     |
| GND           | Black: Black     |

The pinout is taken from [this photo](/assets/img/gc-adapter/original-wires.jpg).

I plugged in the adapter, and much to my delight heard the [Windows device connected sound](https://youtu.be/9omajpF7v-o), fetched my controller, plugged it in. While opening Slippi I saw the red LED illuminate and I knew it was a success. Now, the lead fumes are doing a number on me as I don't have great ventilation. How did we, as a society, decide putting this stuff in paint was a good idea... That didn't stop me from booting into an unranked game (over WiFi, I'm sorry) to teach the Falco named kodiak `kdk#605` a quick 2-0 lesson :devil: However, this satisfaction was short lived. I remembered I had to drill the hole for the cable in the case. That's not the issue though, I already knew I had to that. The problem was how was I going to get the cable into the hole! On one end it was soldered to a circuit board and the other end has a USB-a plug. Both are much larger than I'd like to make the hole...

Anyway, I drill the hole with a wobbly wood drill bit I own :confounded: that is close to the same diameter as the USB cable. Then I go in for round 2 of soldering, which also worked! Either my soldering isn't too bad or I'm that chump who would've bought the winning lottery ticket this week and [but didn't](https://www.moneyunder30.com/why-you-should-never-play-the-lottery).

![Solder job #2 where cable actually goes through case](/assets/img/gc-adapter/cable-hole.jpg)

### Cable Portals

Cutting the cable hole in the middle of the top and bottom parts connection would have been a good option to allow more easily swapping out the circuit boards. An example of this concept can be seen at `1:27` in [this cool 3D printed mouse case video](https://youtu.be/ulmHhyfg8iw).

I found this revealing [electronics.stackexchange post about cable strain relief](https://electronics.stackexchange.com/questions/77516).

#### Port

Solder the `Logic Board` to a [USB Type-B Port](https://www.addicore.com/USB-Type-B-Receptacle-Female-Breakout-Board-p/ad447.htm) mounted to the inside of the case. This would also help in reducing the amount of strain (which hasn't really ameliorated with the creation of this enclosure) applied to my, assuredly weak, solder joints. I could use some [thermal adhesive](https://www.instagram.com/p/BipsZaUgvCU/), but in the event of having to replace the cable it would be a larger PITA. This also lets the user choose what cable to use and customise the length or sheathing. I think this is the best option and I wonder why the manufacturer of this device didn't do so, probably the additional monetary cost.

#### Retractable Cable

Similar to the port idea, except the port is a retractable cable spool. I've always thought these would be cool to use on electronics, but rarely see them in use, perhaps for good reason :tongue:

#### Grommet

It would need to be large enough for the USB Type-A plug. It would give it an old-school custom water cooling PC vibe.

#### Pass Through

A tighter of a [seal type thing](https://www.pacergroup.net/wire-management/cable-pass-throughs/) like a grommet. I don't see much benefit using these other than aesthetics or water tightness applications.

## Simple Box Makers

Instead of labouring over Shapr3D, you could also just use one of these sites to aid in the design process. Just add: cable hole, controller port & LED holes, and `I/O Board` mounts.

- [SOL 75 Electronic Enclosure](https://www.sol75.com/component/electronic_enclosure_if)
- [Lightning Boxes - Basic Box](https://lightningboxes.com/product/basic-box/)

<!--
## Online Printing Service

My 3D printer is pretty average and I'm not too keen on fiddling around with it for hours to find the optimal positions for all its dials. Now that I have a good design let me give a 3D printing service a whirl!

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
-->

## V1

I partially printed an early design of the bottom to check the fit and alignment. I learned there was not enough space to slide the `Logic Board` under the overhanging supports. Ultimately, I didn't end up using these overhang screw mounts for a myriad of reasons.

![V1 logic board not fitting under angled i/o board screw mounts](/assets/img/gc-adapter/v1-no-fit.jpg)

After snapping off the angled mounts I verified the alignment with some pushpins, in place of the undelivered screws.

![push pins in logic board](/assets/img/gc-adapter/tacks-logic.jpg)
![push pins in i/o board](/assets/img/gc-adapter/tacks-io.jpg)

## Printing

![3D printer hose being suspended](/assets/img/gc-adapter/suspension.jpg)

I set up this fool-proof system to avoid my printer snagging on itself

![Case being printed by my Ender 5 Pro](/assets/img/gc-adapter/mid-print.jpg)

The most professional-looking photo taken of this project

## Result

![Top fit 1](/assets/img/gc-adapter/top-fit-1.jpg)
![Top fit 2](/assets/img/gc-adapter/top-fit-2.jpg)

![Bottom mounted](/assets/img/gc-adapter/bottom-mounted.jpg)

![Front angle of the case](/assets/img/gc-adapter/front.jpg)
![Side profile of case](/assets/img/gc-adapter/side.jpg)
![Case close up macro](/assets/img/gc-adapter/macro.jpg)

See how easily a tridecagon can impersonate a circle!

I hope going through the process of designing a model with tight specifications and printing it will help springboard me into mounting my Wii into the void left by removing the VCR from my CRT's. It is a combination of easier and harder. Finding a Wii CAD model [would be easier](https://en.wikipedia.org/wiki/List_of_best-selling_game_consoles).

<!-- TODO Update: I ended up finishing the CRT Wii project! Here's the [blog post](#TODO) :smile: -->

### Takeaways

A major takeaway from this iterative design and prototype cycle is I desperately need to learn [parametric design](https://www.shapr3d.com/videotutorials/parametric-v-direct-modeling). So I can reference variables for sketch or model dimensions, make a change to the variable and the whole model gets recreated automatically. Ex: If I wanted to use larger screws I'd have to increase the radius of all holes, which also affects how much offset is around them, etcetera, etcetera. Not to mention I might accidentally skip one, being the dumb and error-prone human I am :monkey:

There must be a better way to draw a circle 1.5mm away from a corner in both directions than drawing two straight lines from the corner adding the circle, then deleting those lines. If I draw circle and move 1.5mm in each sometimes there are constraints that got in the way?

I should probably watch all [these tutorials](https://www.shapr3d.com/videotutorials/sketching-improvements) so I can make better things and get better at making them.

There's also [OpenSCAD - The Programmers Solid 3D CAD Modeller](https://openscad.org/), which sounds [right up my wheelhouse](https://www.thoughtco.com/malaphor-word-play-1691298).

Also, I took a lot of mostly useless measurements in the beginning, so being conscious of which are needed is a [good time save](https://oyster.ignimgs.com/wordpress/stg.ign.com/2017/10/Owless.gif). Maybe making a simple model of each board would have been worth the small effort...

<!--
## Volume Comparison

| GameCube Adapter | Volume (mm<sup>3</sup>) |
|------------------|-------------------------|
| Mayflash         |  |
| Nintendo         |  |
| Brook            |  |
| Custom           | 108 x 46 x 37 = 183,816 |
-->

## V2 Ideas

### Metal

- Subtractive manufacturing for a sturdy metal case!
- The majority of the aluminum bar would be removed in the milling process
- Leaving extra metal on the interior to add mass and decrease milling time
- Aluminum has a density of roughly `2x` that of PLA
- Would need to thread all screw holes
- Would need something like [1.75" Square Aluminum Bar x 12"](https://www.amazon.com/dp/B01F80W12Q)

### Enclosure

- Structure
  - Has flex on long side, add gussets onto the base and bottom/top walls
  - Add y-padding to the `Logic Board`, to squeeze gussets on the inside of the screw mounting posts. Outside gussets would not need more padding.
  - Use [actual threads](https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/) rather than self-tapping screws
  - Give more clearance, sacrificing `10 mm` in each dimension isn't realistically a huge deal
  - USB port rather than cable directly out of case
  - The middle ports noticeable compress more than the outer ports
  - Use larger screws and longer when possible
  - Mount the `Logic Board` right side up for smaller clearance and proper PCB screw guards?
  - The front panel is not connected to the `I/O Board` at all directly making that connection less sturdy and precise as it could be
- Looks
  - Filament material and colour
  - Add chamfers and fillets to make it less boxy
  - Different, more interesting outer shape than the most basic of rectangular prisms
  - Add design elements
  - Recessed screws, contrast with case colour. e.g. brass hardware onto black
  - Better print finish, less visible printing lines, polish?
- LEDs
  - Improve casing fit and prevent them from sinking over time or being pushed inwards
  - [Colour match](https://www.amazon.com/gp/product/B01AUI4W5U) to shield in Melee: P1 red, P2 blue, P3 yellow, P4 green
