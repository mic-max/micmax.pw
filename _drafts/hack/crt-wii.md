---
layout: post
title: Wii and CRT All-In-One
---

Converting my CRT that has a built-in VCR into the most portable melee setup you've ever seen

- [Toshiba MV13P3 Service Manual](/assets/files/toshiba-mv13p3-manual.pdf)
  - [Toshiba AE002791 Remove Control](https://toshiba.encompass.com/item/5799975/Toshiba/AE002791/) 
- [Wii Teardown Guide byiFixit](https://www.ifixit.com/Teardown/Nintendo+Wii+Teardown/812)
- [Wii 3D Model](https://www.turbosquid.com/3d-models/nintendo-wii-3d-model/392588)
- [Wii Revision Identification Guide](https://bitbuilt.net/forums/index.php?threads/revision-identification-guide.863/)
- [Wii Motherboard Anatomy 101](https://bitbuilt.net/forums/index.php?threads/wii-motherboard-anatomy-101.1286/)
- [Wii Trimming Guide](https://bitbuilt.net/forums/index.php?threads/the-definitive-wii-trimming-guide.198/)
- [Homebrew Tutorial Video](https://youtu.be/BSE34AQTCdg)
<wii.guide>

<https://youtu.be/gxr1e5j2LCo>

<https://youtu.be/DgkIAT26esE>

- Rip out the VCR
- Put a Wii in its place
  - Make sure Wii board does not touch CRT components. Print a shroud?
  - Gamecube controller ports MUST be accessible from front of TV
- Gamecube memory card slots, USB ports, SD card slot SHOULD be easily accessible
  - The Wii hack allows for using a virtual memory installed on an SD Card so I could possibly reuse that space for something else, maybe even desoldering the memory card slots from the Wii.
- Built-in Wii sensor bar, or just two IR LEDs if that is easier. Above or below screen?
- Make sure all buttons work
- Make a controller, the TV didn't come with one... `Toshiba VC-P3S`
- Ensure adequate cooling for the Wii, replace thermal pads?
- Should be able to easily play all games, loadable by SD card or USB storage
- Connect Wii internally. No outside video inputs are necessary
  - Being able to still use it as a monitor would be sweet though, using the front RCA connectors. Have a switch that decides between internal Wii and external device?
- Power button could control both the Wii and the TV
- If possible make navigating to GameCube games from power-on not require the use of a Wii controller.
  - By default load into Melee versus, if a controller is holding a certain button combination?
- Add better handles to carry the TV, strap?
- Get a power adapter and plug both the TV and Wii into it, pass that cable through the chassis.
  - Will likely need to cut and splice together cable since it will be quite long
  - Make the cable retractable so carrying when I carry it around a cable isn't dangling around!
- Add artwork to the outside of the case :smile:
  - Paint exterior, plasti dip? Like GOML 2017 CRTs
  - Replace the stock Toshiba badge with my own custom one
- Place to store 2+ controllers while not in use?
  - Might be able to put a couple Wii motes where the left channel speaker would be if it existed, slide them into some slots. Could even have a charging station?
- Repurpose VCR buttons to control the Wii (Power, Reset, Sync Controller)
  - New buttons, switches for power? The one I got from MoM in Seattle?
  - Since less buttons are needed could go with some larger ones too. Stylistic preference.
- Speaker - Nothing can really do with it.
- Wii video output seems to be a bit off center, more to the left side so some text gets cut off
- Built in capture card? Or ability to save clips to SD Card?
- Overclocking?
- Wireless Internet Connectivity, run an antenna wire up side of the tv inside.
- [DIY AC Power Splitter](https://youtu.be/PZ2wdQFTI9M)
- [DIY RCA Cable](https://youtu.be/Hwtt4vPkATQ)
- Get an antenna, to watch TV on it
- Hardwire wavebirds into port internally?

## Similar DIYs

- <https://www.retrorgb.com/spongebob-crt-tv-rgb-mod.html>
- <https://www.reddit.com/r/crtgaming/comments/adbin9/gamecube_gchd_mkii_thoughts_using_480i_on_a_crt/>
- <https://hackaday.com/2016/10/13/from-crt-tv-to-all-in-one-console/>
- <https://mikeshouts.com/monitor-64-video-game-console-by-mason-stooksbury/>
- <https://www.reddit.com/r/nintendo/comments/6q3j37/gamecube_kiosk_still_running_in_mcdonalds/>
- <https://dot-matrix-game.blogspot.com/2014/02/retail-displayexternal-game-boy-displays.html>
- <https://en.wikipedia.org/wiki/Vectrex>
- <https://hackaday.com/2019/05/06/thumbs-up-for-this-crt-handheld-gaming-console/>
- <https://www.copetti.org/writings/consoles/wii/>
- <https://youtu.be/bFXM8TYwfK4> wii sensor bar teardown
- <https://www.wikihow.com/Make-Rca-Cables>

## Documenting the process

So far I've already tried without any manual to tear down the TV to its individual parts as much as possible.
I did this on June 22 and have had it disassembled in my closet ever since and only playing melee at my friend Jon's place on his Slippi setup. It is time to reassemble and get back that sweet, sweet, electron beam display.

Model: Toshiba MV13P3
Manufacture Date: January 2004

_Include text and photos of anything writen on the TV case since I don't want to open again and will take off the stickers_

## CRT Purchase

So I moved to Seattle in the summer of 2019. I brought a lot of random, probably unnecessary electronics with me. Alas, I wasn't foolish enough to bring a 40lb CRT television set with me. (Later I found out my Dad had tossed it 😢)
I did have my GameCube, and all its games for some reason though... This is my original GameCube I received for Christmas as a child. I thought about using that, but the pros of using a Wii: size, higher performance, backward compatible / more games, smaller form factor all made that a no brainer.
I had my controller since I have a USB adapter for my PC to play on an emulator.
After quite a bit of searching on Craigslist for a CRT finally on the night of September 17, 2020 I made the trek up to Mercer and 13th Ave E in Capitol Hill. You might think I remember the time and place so vividly because this was such an impactful moment in my life, and you're right. I also happened to have paid on Venmo, still have the transaction and have my Google Maps Timeline enabled. Best $25 USD I've ever spent. Thanks to fellow Melee player Julian Bachetti 💙.

## The Christmas Wii Heist

When I return home for Christmas I need to lift the family Wii without rising suspicion. This will be a dubious task but one I am willing to take on. Should I fail this mission I accept all the consequences. The fruits of this heist are worth it.

_Story of me stealing the Wii_

## Teardown

This process is dangerous since the power supply is exposed on the inside of the TV.
It hasn't been plugged into power for months though, so _fingers crossed_ I don't die while drafting this post.

### Cleaning

This bad boy likely hasn't been cracked open for 2021 - 2004 years so there is a lot of dust and other nasty stuff inside it. I did find a crusty spider carcass inside...

I need to make sure the TV still works after taking it apart before I waste any time trying to modify a dead thing. I think that might even be illegal in my state...

Removing stickers, removing VCR flap, cleaning all parts of the CRT's plastic body.

## Modification

The VCR component is roughly the same size of a Wii, so I'm hoping that it can slot right in there.

Add rubber feet to bottom of case. There are circular cutouts that I believe used to have them installed, but a lot has happened since it's birth in `'04`.

[Wii Button Replacement Guide](https://www.instructables.com/Fix-Repair-Nintendo-Wii-Power-Reset-Sync-E/)

## Software Install

My buddy Jon will be taking care of setting up all the software stuff since he expressed interest in the project and already has some experience doing some very illegal Wii homebrew jobs in his dark past.

### SD Card

Need to format SD Card to FAT32. Windows will only work to format 32 GB or less, mine is 64 GB.
So I needed to download a third-party program to perform the format. I used [FAT32 Formatter]() and ran it like so from an Administrator PowerShell terminal

```powershell
fat32format.exe F:
```

For 32GB and lower the following Windows command should work

```powershell
format /FS:FAT32 F: /Q
```

### WiFi

Could not connect to my router, I think Wii only uses 802.11 g and I could not enable that WiFi mode on my locked down Xfinity router. I will try to fix this later, or get a new router to try out the WiFi capabilities of this unit. I also noticed that the Wii would not boot without the WiFi card installed. There might be a workaround to get it to boot...

[Installing Nintendont for Melee on a Wii](https://smashboards.com/threads/full-guide-to-installing-nintendont-for-melee-on-a-wii-from-4-3-to-hacked.485886/)
<https://sites.google.com/site/completesg/backup-launchers/gamecube/nintendont>
<https://wii.guide/priiloader>
<https://wiibrew.org/wiki/BootMii_Configuration_Editor>
<https://wiibrew.org/wiki/Homebrew_setup>

Custom background [MMMod](https://send0r.de/MMMod.html)

### Take it away Jon a.k.a. NeedleGod and JAYP#178 on Slippi

TODO

### Power Switch

Maintaining the ability to plug external devices into the TV is something I wanted to do.
I got a double power switch from a MoM exhibit.

It has three states

- Off - Both TV and Wii will not receive power
- On Wii - Both TV and Wii will receive power, switch RCA input to Wii
- On External - TV will receive power, switch RCA input to external device

<!-- TODO: Add link to GameCube USD Adapter Case -->
