---
layout: post
title: Common Git Commands
---

[Download Git](https://git-scm.com/downloads)

`git fetch --all`
  is this needed to get a fresh version of upstream?

`git checkout -b <feature> upstream/main --no-track`

TODO: set upstream when i create the branch?

`git push -u origin <feature>`

`git branch -D <feature>`
  delete locally TODO and from my fork after merging a PR

`git commit --allow-empty -m "CI"; git push`
  push an empty commit to rerun the CI (flakey tests, or after fixing bugged CI in another PR)
  note: if you have access to rerun from GitHub, just do that, this is a workaround for the untrusted devs

`git merge upstream/main`
  merge up-to date version of branch I am submitting a PR against (fetch first)

`git log`

Aliases

[Setup guide](https://catalins.tech/git-aliases-what-are-they-and-how-to-use-them)
_ohmyzsh and enabled its git plugin_

- gc \<message> => git commit -m "\<message>"
- gca \<message> => git commit -am "\<message>"
- gf => git fetch --all
- gp => git push

[Download GitHub CLI](https://cli.github.com)

`gh pr create`
  create a pull request from using the current branch

`gh repo view`
  view repository, option to open in browser

`gh pr status`
  check how your pull request is doing, reviews or CI

`gh search prs`
  look for a pr using some query

`gh search issues`
  look for an issue using some query, use gh issue 12 if you know the ID
