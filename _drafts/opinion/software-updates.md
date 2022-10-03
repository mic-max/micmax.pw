---
layout: post
title: Software Updates
---

Webpage with several download links depending on platform and operating system

- Couldn't the platform and operating system be detected from JavaScript and give a simple obvious link with a see more download options dropdown or similar? Less scanning and Ctrl + F searching for `win64`
- To help alleviate this minor annoyance a browser extension could be created to highlight the platform and operating system links, which would be a lot easier than changing every download page on the Internet.

How should the program be downloaded and installed

- Installer application
  - Small ~1MB file that downloads actual program from some server and installs it
  - A zip file with the binary and all libraries needed
  - Can give options to only download certain modules (ex. Visual Studio Installer, Android Studio)
    - If they're substantial in download size and disk storage this makes sense
    - If they're a fraction of the total download and disk for the program, bundling them all might be preferable

- Adding bin folder of application to PATH environment variable
  - Not really part of the installation of the program, just user preference
  - Different depending on the operating system
  - If using an installer, a checkbox for this option would be nice

How they should be delivered

- Package manager (windows store, apt, winget, pacman, chocolatey, npm)
- Built into the app (Chrome, vs code)
  - Adds complexity to the app, need to maintain a "service"
- Just include a link to download site and inform user a new version is available (gh cli)
  - A little annoying that my program by default is always telling me to get the new version. I don't *need* any of the features in that new version or might not care about certain bug fixes (maybe my program even relies on something considered a bug) or performance gains.
  - Still needs a "service" it would just be GET /latest-version/ => `v.2.4.1` and if it is newer, supply a link to the download page. Updating the download page or the service address would also be a difficulty.

Limit the accidental download of entire programs in wrong platform or architecture by having a launcher.
Someone might not realize they downloaded the wrong version until launching it or at some point after starting the download. Having a minimal launcher

DRM! If the software is sold or has a premium-only feature.
Have an online account that you need to sign into to verify your membership.
Annoying if its a program that doesn't need online connectivity, like photoshop for example and unlike some online video game, where using it without an Internet connection is kind of pointless.

Reduction of piracy by making it more difficult

How often should they be done

- Daily, Weekly
- Give user enough information to choose whether an update is worth it for them (changelog)

Network and disk cost

- If it is a bug fix and only 0.1% of the code is changed then should the entire program be downloaded, or just the affected changed files (adds complexity and increases chances to bug out)

Do people like them

- Generally no, they have to wait at their computer while it updates and sometimes even need to restart the PC!

Support of older versions of the software

- If you only support the latest version of the software then way less cherry picking for bug fixes need to occur.
