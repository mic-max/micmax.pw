---
layout: post
title: Models
image: models.jpg
---

For Christmas, my Mom & Dad gifted me a 3D printer. On Black Friday, mid Californian-roadtrip, I put in the order for an Ender 5 Pro with spools of black and white PLA filament. Sorry, but I was unable to contain my excitement and wait until [Jesus' supposed Birthday](https://www.ucg.org/the-good-news/biblical-evidence-shows-jesus-christ-wasnt-born-on-dec-25) before using it :christmas_tree:

I've never used one before and the only experience I have 3D modelling was a couple days in Grade 9 tech class using `AutoCAD` to design a rudimentary airplane that I would later realise in wood. I'm excited for all the possibilities having a 3D printer will unlock. There are several 3D printers at the Microsoft Garage in Redmond that I could also be making use of... then again, most of my inspiration comes at inopportune times.

View more about my 3D printing "philosophy" and technical setup instructions at the end of this post if your heart desires :heart:

## Models

Here are all the things I have printed so far in chronological order and the [`.stl` files](https://github.com/mic-max/micmax.pw/tree/master/assets/cad/) of my designs.

{% assign sorted = site.models | where: "draft", "false" | sort: 'date' | reverse %}
{% for x in sorted %}
  <h4>{{ x.name }}</h4>
  <p>{{ x.date | date: '%b %e, %Y' }}</p>
  {{ x.content | markdownify }}
{% endfor %}

## Software

So far I've been designing in [Shapr 3D](https://apps.apple.com/us/app/shapr-3d-cad-modeling/id1091675654) on iPad, which has been pretty good and beginner friendly. However, now I'm seeing the great benefits of making parametric designs so will probably switch to Fusion360 when the model calls for it and I'm on a computer.

## Why 3D Print Stuff

It's a great and simple enough way to make things. The things you can make are only limited to the size of the printing area, the filament materials, physics, your imagination, and your [CAD](https://en.wikipedia.org/wiki/Computer-aided_design) skills, in the unlikely scenario where someone hasn't already designed what you want and graciously uploaded to the Internet for free.

I can definitely see more households getting 3D printers in the future. I'm sure it has gotten loads easier in the past several years, but an easy mode and directory/catalog of parts to print or scanning something to duplicate with your phone would really elevate the accessibility. You can create so many things out of a common resource, being the plastic filament. It would also reduce the amount of shipping that occurs. Say you needed to buy a soap dish, a hair clip, and a tiny thingamajigger for your dishwasher that you can only get from this one store 40 minutes away and they are out of stock and it costs like $50. That sounds kinda lame. You would have to drive to 3 different stores or have them all delivered. I imagine that carbon footprint is pretty large for the comparatively small items you need. A more efficient way to get these items if you already had a 3D printer would be to download some 3D models, that hopefully already exist, and buy a multipurpose spool of plastic and run the printer overnight. The shipping cost then becomes more like a one-time fee for the spool and the prints are probably faster than someone driving it to your doorstep anyway.

This is likely an oversimplification, not including how plastic is made. I haven't seen [that episode yet](https://www.sciencechannel.com/show/how-its-made-science).

In summary here's what I feel is good and what is bad about 3D printing

Pros:

- Customisable
- Smaller environmental impact due to less shipping (electricity costs?)
- Potentially faster than buying from a store or online
- More convenient
- Learning :neckbeard:

Cons:

- Ease of use (calibrating perfect settings, needing a computer with specific software and an SD card to transfer the files)
- Small size items only
- Smaller volume of operations, injection moulding plastic is much more efficient at high scale

## Unboxing + Building + Setup

First of all I need to unbox and build the printer. This ended up being much easier than I anticipated. As much of the printer was already pre-assembled as possible and only required me to screw in the base to the top, add the print bed, control unit with screen, and connect all the cables. The cables were pretty well labelled, but I still managed to mix up the print head thermistor with the print bed thermistor :joy: The packaging was also superb and included a 200 g spool of PLA to get started.

![Box contents](/assets/img/3d-printing/parts.jpg)

Not including the dumbbells!

![Assembled printer](/assets/img/3d-printing/assembled.jpg)

<!-- TODO
## Assembly
-->

## Update Firmware

[Marlin 2.1.zip](https://marlinfw.org/meta/download/)
[Ender 5 Pro v4.2.2 Configuration Files](https://github.com/MarlinFirmware/Configurations/tree/release-2.1/config/examples/Creality/Ender-5%20Pro/CrealityV422)

1. Copy all the configuration files to `/Marlin/` and overwrite existing files
1. Install the `PlatformIO IDE` extension to VS Code
1. Select `Project Tasks` > `STM32F103EC_crealitpy` > `Build` (opening the tasks took a long time - just says `Loading...`)
1. Copy the latest file named `/.pio/STM32F103RC_creality/firmware-YYYYMMDD-HHmmss.bin` to the SD card's root directory with the name `firmware.bin`
1. To begin the update, insert the SD card and turn on the printer

## OctoPrint Setup

I'm running OctoPrint on my computer with a `10ft` Micro-USB cable connecting it to my printer. I throw the printer in my closet whenever I'm not using it to save space.

I also have the printer plugged into a smart outlet, this can allow me to turn off my printer once a print is done. Otherwise, the fans will continue to run - the firmware doesn't have an option to do this natively :sad:

## Conclusion

I will definitely have a mindset of can I build this myself now whenever I have the desire to buy something. Not only would it be more fun to do, it could also be more convenient depending on the circumstances and also self-sufficient. If you want something done right, do it yourself :joy:
