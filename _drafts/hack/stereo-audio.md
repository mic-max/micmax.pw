---
layout: post
title: Stereo Audio Madness
---

<!-- # Stereo Audio Madness - Listen to all the things -->

So I'm not sure how to title this blog post so I'll just jump right into what I want to achieve.

I want to be able to listen to something in my left ear and something else in my right ear on my computer.
It should also be pretty easy to do.

There are some browser extensions that have the ability to modify the volume per stereo channel.
However, I don't want this to only work for things from my browser.

Ideas:

- Get a sound device with two audio output jacks
- Get another cable for my headphones, plug both cables into the audio interface
- Plug the first input cable into the left earcup and the other into the right earcup
- Then I can change the output device from Windows Volume mixer on a per process basis.
  - Stretch: How could I also make this work for individual tabs

My use case would be listening to some music while listening to some other video, or being in a discord call in a game where stereo audio doesn't help and you'd rather make sure you hear what your friends are saying. It isn't great for songs that take advantage of the stereo nature of most listening setups so having a way to quickly toggle the output mode of the audio interface device to be in Mono mode would be great. (Maybe if it detects both cables are plugged in?)

Switching from single to double listening mode would just require

1. Unplugging the cable from one earcup
1. Pluggin in the other cable in the now empty earcup jack
1. Maybe enabling the program so that it can start double listening mode (possibly automate this check)
1. All programs should continue to use the original output, and simply change the process you want to listen to in the new ear to the other audio interface (i.e. from `SDAC-Input-1` to `SDAC-Input-2`)
