---
layout: post
title: Laser Cut Speaker Stands
---

One day I woke up and realised that my greyhound style-ears were not in the direct path of the sound waves being produced by my desktop speakers. Adding a slight upward tilt would make all the difference. Come along for my journey of laser cutting speaker stands and achieving aural perfection :hear_no_evil:

<!-- Best Tutorials I Found:

- [Designing a Laser Cut Tabbed Box Using Inkscape](https://youtu.be/A1FIl5Eq4PQ)
- [Creating Laser Cut Tabbed Boxes in Inkscape](https://www.hackschool.org/post/creating-tabbed-boxes-in-inkscape)

The only example of a box with an angled side was [boxes.py consoles](https://florianfesti.github.io/boxes/html/generators.html#console) -->

## Components

- Audio Gear
  - [Simple Audio Listen Speakers](https://www.corsair.com/us/en/Categories/Products/Gaming-Headsets/Simple-Audio-Listen%E2%84%A2-Stereo-Speakers-with-Bluetooth/p/SH-90S0001-US)
  - [Drop O2 Amplifier + Grace SDAC](https://drop.com/buy/massdrop-o2-sdac-dac-amp)
- Software
  - [Inkscape](https://inkscape.org) - free and open-source vector graphics editor
- Tools
  - [Epilog Helix 24 - 60W Laser Cutter](https://www.epiloglaser.com/laser-machines/minihelix-techspecs.htm)
  - Calipers
  - Brush
  - Sander
  - File
- Materials
  - Birch Plywood `1/4" x 2' x 4'` for $17.27
  - Wood Glue

## Measurements

- Speakers
  - 109mm x 109mm outside base
  - 95mm x 95mm rounded corner inside base
- AMP + SDAC
  - 104mm x 99mm x 34mm

## Plan

My first intention was to create the stands using 3D printing. I designed the foot hold piece and printing it was going to take over an hour. Simple cuts on the laser cutter, which I just so happen to have been recently trained on, would take less than a minute! I am team [light amplication by stimulated emission of radiation](https://en.wikipedia.org/wiki/Laser)!

{{ 'November 16, 2022' | date: '%b %e, %Y' }}

I went after work and drew my first designs and cut my first piece out of some scrap, the foot hold. Using the measurements of the inside base I created a rounded rectangle in Microsoft Visio and hit `Print`, somewhat ironically. What came out surprised me by how well it fit.

![Foot hold being cut](/assets/img/speaker-stands/foot-cut.jpg)
![Foot hold fit to the speaker](/assets/img/speaker-stands/foot-cut-inserted.jpg)

![Design page 1](/assets/img/speaker-stands/plan-1.jpg)
![Design page 2](/assets/img/speaker-stands/plan-2.jpg)

After learning a bit more about my new found love and pride and joy I rethought the blueprints to include a lower compartment for my DAC since that has to go on my desk anyway, might as well combine their footprints, plus the added height leads to a reduction in speaker angle which was a slight worry of mine, win win. The basic design though would be a box with the top panel being angled upwards toward the front and the front would be partially open.

My goal is to build two identical speaker stands with a lower compartment sized to fit my DAC + AMP - I'll store trinkets, knick knacks, and other various thingamabobs in the other.

Also, that day I realised the rear driver on the left speaker is partially detached. I'll need to super glue that down or something... sweet!

{{ 'November 19, 2022' | date: '%b %e, %Y' }}

Was the day I made a complete version of a stand. I designed all the parts by hand using Inkscape. Which is much better than visio for anything more complicated than a simple shape.

![Design page 3](/assets/img/speaker-stands/plan-3.jpg)

I drew this one using 1:1 measurements and a ruler which did help in the visualising the interactions.

Most helpful tips I learned

- Set document to size of laser cutter bed 24" x 24"
- Add a 1mm grid with snapping
- Bezier tool in the paraxial or straight line modes
  - After each line press Enter and Esc to prevent merging line segments
- Have an odd amount of box joints per side

Things I want to learn

- Offset each line in a direction by the kerf easily
- Clump together the shapes into the smallest area with padding

![v1 being cut](/assets/img/speaker-stands/v1-cuts.jpg)
![v1 being clamped while glue sets](/assets/img/speaker-stands/v1-clamps.jpg)

I love how absurd this looks

![v1 front](/assets/img/speaker-stands/v1-front.jpg)
![v1 side](/assets/img/speaker-stands/v1-side.jpg)
![v1 back](/assets/img/speaker-stands/v1-back.jpg)
![v1 on desk](/assets/img/speaker-stands/v1.jpg)

{{ 'November 23, 2022' | date: '%b %e, %Y' }}

Shocker, but the garage was very empty the day before Thanksgiving.
After realising it was getting late I went to McDonald's for a burger and fries, then got all the ingredients for my Friendsgiving Turkey before QFC closed.

I had forgotten my USB stick at the laser cutter computer, thankfully it was still there after a few days :sweat_smile:

Not everyone avoided an entry in my burn book however. Some slimey little snake cut a big ol' circle out of my plywood I left in the corner with a sticky note including my alias an a message "For a project" near similar bundles of wood. Last time I do that, luckily I still had enough to complete my project. Maybe I could track down the culprit by searching the file system for files modified in that time range... How petty will I be about this :laughing:

![Illegal circle cut out of my plywood](/assets/img/speaker-stands/theft.jpg)

To help keep the slightly bowed plywood pinned down I cut some [Laser Holdfasts](https://www.festi.info/boxes.py/LaserHoldfast) at 6.2mm thickness (6.0mm would have been better). I'd definitely recommend using them, just make sure they don't get in the way of your cuts!

I had this list of alterations to make to my original design

- Reduce clearence on DAC, both vertical and horizontal (while maintaining the square footprint)
- Align rear port cutouts better
- Increase the angle (I should only see the front face of the speaker, not the top)
- Add a facia-esque piece to the front

glued and clamped only for a short time since it was almost 4am
glued foothold on the next afternoon
then needed to file down the edges since it just narrowly couldn't fit. idk how I didn't test fit this while at the garage...

## Prototype

Changes to make

- Decrease back height (~7mm 8mm)
- Increase front height (the angle might be )
- Shrink width/depth slightly? 3mm maybe, 4mm max.
- Add a front panel covering only the top half?
- Etch stuff?
- Add feet?
- Properly adjust for kerf
- Extend fingers slightly to sand off burnt edges
- AMP might slide from front to back, etch out little dimples for its feet to sit in? Would also then be able to decrease back height a couple mm.
- Use different glue and application method

## Result

Final [speaker-stand.svg](https://github.com/mic-max/micmax.pw/tree/master/assets/cad/speaker-stand.svg) - I only did the vector cuts.

It fits into a 10" x 12" bounding box. So after the (majority of the) R+D work is done one stand would use like an eigth of the board, making it cost `$2.16` per unit.

![v2 isometric pov](/assets/img/speaker-stands/v2-iso.jpg)

Ignore all the unused cuts in the background :sweat_smile:

![v2 front](/assets/img/speaker-stands/v2-front.jpg)
![v2 side](/assets/img/speaker-stands/v2-side.jpg)

I actually made modifications to slightly fill the gap on the top left corner and extended the left finger after seeing this. Making non 90 degree angle box joints is not my strong suit. Being only able to cut throught the wood vertically is an issue that could be ameliorated by using some jig or over extruding some parts and filing them down afterwards...

![v2 back](/assets/img/speaker-stands/v2-back.jpg)
![v2 on desk next to v1](/assets/img/speaker-stands/v2-and-v1.jpg)

## Improvements

- 95mm is a bit too wide. 94 maybe? or was it the corners
- align grain
- ensure outsides are all cut from same side of wood
- better glue solution, reduce visibility
- better way to hold together when gluing than the clamps
- use masking tape to reduce burn
- isopropyl alcohol or bleach to clean burn from edges?
- better way to align the top foot piece hold
- etch design?
- places to the dac's feet to recess? feet are actually like 4mm of the 4.5mm thickness, so maybe just holes. would prevent sliding around. would still need the same headroom so the DAC still be removable :/
- kerf adjusts
- order of operations: cuts, clean burns, stain, glue.
- wood front. with holes for the buttons and knobs. would be not permanently attached. use hinges or something? the placement of the holes then would need the DAC to be at a more permanent depth. maybe at the back of the base piece is a stop that the feet would hit preventing the unit from being overly recessed.

## Reflections

I enjoyed this project and learned a lot while doing it. I basically knew what design I wanted from the start but it took me a while to enter the right mindset of working with wood and all of its three dimensions and the interlocking box joints. I definitely have room to improve in using Inkscape to draw up the design so learning that could be beneficial in reducing how late I stayed at the garage :P There has to be a whole treasure trove of features in Inkscape to help the process and I'd love to uncover. Doing simple trigonometry was also a nice little throw back `soh cah toa` :triangular_ruler:

want. learn. build. enjoy.
