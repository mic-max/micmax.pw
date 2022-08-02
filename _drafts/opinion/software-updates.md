---
layout: post
title: Software Updates
---

How they should be delivered

- Package manager (windows store, apt)
- Built into the app (Chrome, vs code)
  - Adds complexity to the app, need to maintain a "service"
- Just include a link to download site and inform user a new version is available (gh cli)
  - Still needs a "service" it would just be GET /latest-version/ => `v.2.4.1` and if it is newer, supply a link to the download page. Updating the download page or the service address would also be a difficulty.

How often should they be done

- Daily, Weekly
- Give user enough information to choose whether an update is worth it for them (changelog)

Network and disk cost

- If it is a bug fix and only 0.1% of the code is changed then should the entire program be downloaded, or just the affected changed files (adds complexity and increases chances to bug out)

Do people like them

- Generally no, they have to wait at their computer while it updates and sometimes even need to restart the PC!

Support of older versions of the software

- If you only support the latest version of the software then way less cherry picking for bug fixes need to occur.
