---
layout: post
title: Common Git Commands
---

[Download Git](https://git-scm.com/downloads)

`git fetch --all`
  is this needed to get a fresh version of upstream? `git fetch upstream`

`git checkout -b <feature> upstream/main --no-track`

TODO: set upstream when i create the branch?

`git checkout main` or `git checkout master`
  common checkouts that could get an alias

`git push -u origin <feature>`

`git branch -D <feature>`
  delete locally TODO and from my fork after merging a PR

`git commit --allow-empty -m "CI"; git push`
  push an empty commit to rerun the CI (flakey tests, or after fixing bugged CI in another PR)
  note: if you have access to rerun from GitHub, just do that, this is a workaround for the untrusted devs

`git merge upstream/main`
  merge up-to date version of branch I am submitting a PR against (fetch first)

`git log`

`git restore .`
  undo all changes to unstaged files

  <!-- maybe use a `git stash` command if I want to reapply the unstaged changes -->

`git fetch upstream pull/$ID/head:$BRANCHNAME` then ``
  makes a local branch called test-branch from a PR on the upstream repo. replace upstream with origin if you're using the same repo. if the PR is from a branch on the source repo and not a fork, you can probably do something more simple like git checkout pull/$ID

`git checkout upstream/main -- <filepath>`
  get current version of the filepath supplied, usually used to undo changes.

git pull  get changes to the current branch you're on - maybe you made a change from another PC and want to fetch and merge them into your current state. pretty much an alias for fetch and merge. 
set default line encoding and editor that it opens for long conflict resolution and commit messages.
git diff   view all changes to unstaged files   add --cached for the ones that are staged (have been git added)
git status   any cool switches?
git add -p   intereactively add, skip or split diff hunks, (explain what a hunk is!!!)

i worked on a branch more after it had merged to the upstreamhow do i get my changes ready for a new pr?- will the next PR have all the same commits as my previous one, i don't want it to!https://softwareengineering.stackexchange.com/questions/351727/working-on-a-branch-with-a-dependence-on-another-branch-that-is-being-reviewed ???

git reset --hard
git branch  - to view all branches i have locally. option to view all branches remote?
git checkout someones branch from a pr? so i can test it myself.
git cherry-pick  copy a commit to a branch (good for when you need to make a fix to multiple branches i.e. master and the current release)

I just made a PR that includes two topics. I want to reset my branch to original commit I branched it from and pick and choose changes for this PR
- git log "find commit to use as head"
- git reset <commit_id>
- choose files to add. git commit.
- git stash the changes related to something else.
- git fetch --all and git merge upstream/main and fix any merge conflicts.shown in git status. 
  - git add fix files and git commit to finish merge.
- git push -f to overwrite the existing branch history if one exists

## Aliases

[Setup guide](https://catalins.tech/git-aliases-what-are-they-and-how-to-use-them)
_ohmyzsh and enabled its git plugin_

- gc \<message> => git commit -m "\<message>"
- gca \<message> => git commit -am "\<message>"
- gf => git fetch --all
- gp => git push
- gcd <repo> => cd /git/<repo>

## GitHub CLI

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

`gh issue create --label bug`
  create bug

`gh issue list`

`gh issue view 345`
