---
title: Source Code on a Blog
---

How to store source code on a blog.

- `<region>` markers in the code
- Just copy paste it and if it gets out of sync so be it.
- Gist? Have another repository called `blog-code` that is imported as a git module by this one, then code can be included in the build process
  - Gist renders in an ugly way
- Reference public repository filename with exact git version hash and line number range

Rendering

- Use monospace font
- Syntax highlighting and maybe some other things like bracket colour coordinating?
- Line numbers
- Button to copy the entire contents of the code block

My first post about a piece of software comes with it the challenge to show that code in the blog post.
To deal with rendering Jekyll has a plugin called `rouge` that does code highlighting for many programming languages and more.
