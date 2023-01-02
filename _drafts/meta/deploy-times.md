---
layout: post
title: Blog Deployment Times
---

As the amount of content on my blog increases so has the deployment time. It is still not an issue but the once sub-minute has grown to over 3 minutes in my first year. Scaling this to 10 years of similar growth it would take 26 minutes. Now that would be a problem, so let's get ahead of this problem!

I have one GitHub action with two Jobs

- build
- deploy

## build

| Task? | Time Taken Jan '22 (s) | Time Taken Jan '23 (s) |
| Set up job | 2 | 3 |
| Pull ghcr.io/actions/jekyll-build-pages:v1-beta | 14 | 17 |
| Checkout | 2 | 18 |
| Build page with Jekyll | 3 | 5 |
| Archive build output | 0 | ??? |
| Upload artifact | 3 | 96 |
| Post Checkout | 1 | 0 |
| Complete job | 0 | 0 |

## deploy

| Task? | Time Taken Jan '22 (s) | Time Taken Jan '23 (s) |
| Set up job | 2 | 1 |
| Pre Deploy to GitHub Pages | 2 | ??? |
| Deploy to GitHub Pages | 7 | 53 |
| Complete job | 0 | 0 |

The real time difference is in the tasks

- `build.Upload artifact` +93s 3200%
- `build.Checkout` +16s 900%
- `deploy.Deploy to GitHub Pages` +46s 757%

## Total

| Task? | Time Taken Jan '22 (s) | Time Taken Jan '23 (s) |
| build | 25 | 141 |
| deploy | 11 | 55 |
| total | 36 | 196 |

I suspect the main culprit for increasing deployment time is the inclusion of large files such as high resolution images.

Running [SpaceSniffer 1.3.0.2](https://www.fosshub.com/SpaceSniffer.html) (a great little program) on my website's directory other than the `.git` I can see the `img` and `art` folders make up a massive portion of the used storage space.

`120 MB` and `108 MB` respectively.

## Solutions

Host image assets elsewhere? Host smaller versions of assets in git repository but when clicked on it can open a higher resolution file on flickr, blob storage, or something else?
