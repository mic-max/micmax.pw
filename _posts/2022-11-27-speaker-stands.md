---
title: Laser Cut Speaker Stands
---

One day I woke up and realised that my greyhound style-ears were not in the direct path of the sound waves being produced by my desktop speakers. Adding a slight upward tilt would make all the difference. Come along for my journey of laser cutting speaker stands and achieving aural perfection :hear_no_evil:

## Components

- Audio Gear
  - [Simple Audio Listen Speakers](https://www.corsair.com/us/en/Categories/Products/Gaming-Headsets/Simple-Audio-Listen%E2%84%A2-Stereo-Speakers-with-Bluetooth/p/SH-90S0001-US)
    - 109 mm x 109 mm outside base
    - 95 mm x 95 mm rounded corner inside base
  - [Drop O2 Amplifier + Grace SDAC](https://drop.com/buy/massdrop-o2-sdac-dac-amp)
    - 104 mm x 99 mm x 34 mm
- Software
  - [Inkscape](https://inkscape.org) - free and open-source vector graphics editor
- Tools
  - [Epilog Helix 24 - 60 Watt Laser Cutter](https://www.epiloglaser.com/laser-machines/minihelix-techspecs.htm)
  - Calipers
  - Brush
  - Sander
  - File
  - Clamps
- Materials
  - Birch Plywood `1/4" x 2' x 4'` for $17.27
  - Wood Glue

## Plan

My first intention was to 3D print the stands. The inside base piece would take 2 hours to print... a similar result from the laser cutter, which I was recently trained to use, would take 40 seconds! I am team [light amplification by stimulated emission of radiation](https://en.wikipedia.org/wiki/Laser)!

{{ 'November 16, 2022' | date: '%b %e, %Y' }}

I went to the Microsoft Garage after work and drafted my first designs and cut my first piece of wood. I created a rounded rectangle in Microsoft Visio using the measurements of the speakers inside base and, somewhat ironically, hit `Print`. It was a perfect fit.

![Design page 1](/assets/img/speaker-stands/plan-1.jpg)
![Design page 2](/assets/img/speaker-stands/plan-2.jpg)

Here you can see my rough designs, measurements, and mathematics!

> When I was in Grade 1, my friend Mateo and I were tasked with measuring things. We started measurements at the `1cm` mark though so we were off by one on everything :joy: We were very precise, but not so accurate.

![Foot hold being cut](/assets/img/speaker-stands/foot-cut.jpg)
![Foot hold fit to the speaker](/assets/img/speaker-stands/foot-cut-inserted.jpg)

Another blessing that day brought was the realisation that the rear driver on my left speaker is hanging on for dear life, a single bass drop from a harrowing free fall (no pun intended). I'll need to super glue down that bad boy before it's too late!

{{ 'November 19, 2022' | date: '%b %e, %Y' }}

Was the day I made a complete version of a stand. I designed all the parts on paper then transferred to Inkscape. Which is much better than Visio for anything more complicated than a simple shape. I did them all by hand instead of using some [laser cutter tabbed-box Inkscape extension](https://github.com/paulh-rnd/TabbedBoxMaker) although it would necessitate minimal modifications :yum:

![Design page 3](/assets/img/speaker-stands/plan-3.jpg)

I drew this one using 1:1 measurements and a ruler which really did help with visualising the panel interactions in real space. Sorry for the faint pencil I used :pensive:

![V1 being cut](/assets/img/speaker-stands/v1-cuts.jpg)
![V1 being clamped while glue sets](/assets/img/speaker-stands/v1-clamps.jpg)

I love how absurd this looks, it reminds me of [Gulliver Tie-Down](https://tvtropes.org/pmwiki/pmwiki.php/Main/GulliverTieDown)

![V1 front](/assets/img/speaker-stands/v1-front.jpg)

This photo was taken to illustrate the gap sizes on the side and top of the DAC

![V1 side](/assets/img/speaker-stands/v1-side.jpg)
![V1 back](/assets/img/speaker-stands/v1-back.jpg)
![V1 on desk](/assets/img/speaker-stands/v1.jpg)

Here's a comparison of no stand vs. stand. This photo shows the angle of attack need be increased since I should not be able to see any of the top of the speaker.

{{ 'November 23, 2022' | date: '%b %e, %Y' }}

I was absolutely shocked the garage was empty the day before Thanksgiving :poultry_leg:

I had forgotten my USB stick at the laser cutter computer, thankfully it was still there after a few days. Not everyone dodged an entry in my burn book, however. A slimy little snake cut a big circle from my clearly labelled "for a project" plywood I left in the corner. Luckily I still had enough. Tracking down the culprit by searching the file system for files modified in that time range might be possible depending on how petty I am :laughing:

![Illegal circle cut out of my plywood](/assets/img/speaker-stands/theft.jpg)

To help keep the slightly bowed plywood pinned down I cut some [Laser Holdfasts](https://www.festi.info/boxes.py/LaserHoldfast) at 6 mm thickness. I'd definitely recommend using them, just make sure they don't get in the way of your cuts!

## V2

The first stand is definitely functional but I wanted to do another iteration to fix some small issues I had with it. Little did I know I was going to be leaving the garage at nearly 4 AM after a 7 hour session.

Changes made

- Reduce clearance on DAC, while maintaining a square footprint
- Align rear port cutouts better
- Increase the angle
- Add a front fascia

## Result

Final [speaker-stand.svg](https://github.com/mic-max/micmax.pw/tree/master/assets/cad/speaker-stand.svg) - I only did the vector cuts.

It fits into a 10" x 12" bounding box. So after the R+D work is done one stand would use like an eighth of the board, making it cost `$2.16` per unit. Plus around 6 minutes to cut and some time to glue together.

![V2 isometric point of view](/assets/img/speaker-stands/v2-iso.jpg)

Ignore all the unused cuts in the background :sweat_smile:

![V2 front](/assets/img/speaker-stands/v2-front.jpg)

Much tighter fit!

![V2 side](/assets/img/speaker-stands/v2-side.jpg)

I made modifications to fill these visible gaps on the side panels. Making [non 90 degree angle box joints](https://florianfesti.github.io/boxes/html/generators.html#console) is not my strong suit. Being only able to cut through the wood vertically is an issue that could be ameliorated by using some jig or over extruding some parts and filing them down afterwards, does not sound particularly beginner friendly...

![V2 back](/assets/img/speaker-stands/v2-back.jpg)
![V2 on desk next to V1](/assets/img/speaker-stands/v2-and-v1.jpg)

Now there's the angle I'm looking for!

## Resources

- [Designing a Laser Cut Tabbed Box Using Inkscape](https://youtu.be/A1FIl5Eq4PQ)
  - Set document to size of laser cutter bed 24" x 24"
  - Add a 1 mm grid with snapping
  - Bezier tool in the paraxial or straight line modes
    - After each line press enter and escape to prevent merging line segments
- [Creating Laser Cut Tabbed Boxes in Inkscape](https://www.hackschool.org/post/creating-tabbed-boxes-in-inkscape)
- Use an odd number of box joints per side, the side hopefully has a factor pair somewhere between 1 cm and a few
- How can all shapes in a design be clumped into the smallest area to minimise wood waste

## Improvements

- Construction
  - The inside speaker base piece didn't quite fit and had to file down the corners
  - Devise a better way of aligning the foot piece hold
  - Align the grain
  - Ensure the panels facing outward use the same side of the plywood
  - Better glue solution, less visible in final product, clamping strategy
  - Recess DAC feet, just cut holes for them. Prevents lateral movement
  - Kerf adjustments
- Burns
  - Masking tape to reduce burn marks
  - Isopropyl alcohol or bleach to clean burn from edges
- Looks
  - Etch designs
  - Stain

## Reflections

I enjoyed this project and learned a lot while doing it. I basically knew what design I wanted from the start, but it took me a while to enter the right mindset to work with wood and all three of its breathtaking dimensions. I definitely have room to improve with Inkscape and on the laser. There has to be a whole treasure trove of features in Inkscape and cutting techniques to uncover :heartpulse: Doing simple trigonometry was also a nice little throw back `soh cah toa` :triangular_ruler:

want. learn. build. enjoy.
