# Michael's Motive

Welcome to the source code to my website.  
This like most software nowadays will never be done.
To see what I'm working on or planning to at any time check [here](https://github.com/mic-max/micmax.pw/projects/1)

## Build

1. Install [Ruby](https://rubyinstaller.org/downloads/)
1. `gem install bundler jekyll`
1. `bundle install`
1. `bundle exec jekyll serve --incremental --drafts --strict_front_matter --trace`

## Resources

- [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Google Analytics](https://analytics.google.com/analytics/web/#/report/defaultid/a55845382w176857085p175657346/)
- [Jekyll Front Matter](https://jekyllrb.com/docs/configuration/front-matter-defaults/)
- [Liquid Documentation](https://shopify.github.io/liquid/)
- Themes
  - [Minima Theme](https://github.com/jekyll/minima)
  - [Chirpy Theme](https://jekyll-themes.com/chirpy/)
  - [Gesko Theme](https://jekyll-themes.com/gesko/)
  - [Dark Poole Theme](https://jekyll-themes.com/dark-poole/)

## Website To Do List

- SEO Optimization
- Media Images - When sharing a post on Twitter for example the image and description shown are correct, currently it shows a sparkle emoji when I share just the micmax.pw link in messenger for example
- Table of Contents for longer posts
- Pagination - I currently think I should not use this
- Use alt text and descriptions for images - Making the site more accessible to users and web scrapers
- Compress and resize images to reduce load time and bandwidth
- Allow both light and dark mode depending on user preference
- Show time to read at top of blog post
- Show tags and categories at top of blog post
- Jekyll water.css theme [Github Issue](https://github.com/kognise/water.css/issues/18)
- Title being "*the blog post title* | Michael's Motive" is probably too long - shorten this 😊
- Include Twitter feed
- Include Instagram feed
- Include Spotify currently listening to
- Twitch, Discord social links
- Comment section: https://lobste.rs/
- Spelling and grammar checks, GitHub action?
- Dead link checks, GitHub action?
- Uglify / minify generated HTML, CSS, JS
- Bing Verify my site - <https://wilsonmar.github.io/jekyll-site-development/>
- Google Verify my site - <https://wilsonmar.github.io/jekyll-site-development/>
- Add friend directory, so in a post I can just say their name like everyone knows them and hovering or clicking the link will give a quick introduction to them
- Make social links open in associated app if present on mobile (works from chrome, but if opened in instagram browser does not)
- Verify mobile experience is pretty good
- Search bar
- VS Code Tasks for building and running server: <https://code.visualstudio.com/Docs/editor/tasks>
- Add tags to all posts and be able to view all posts for a given tag
- `timezone` in `_config.yml` seems to not be affecting anything: `Regenerating: 1 file(s) changed at 2021-12-07 06:20:43` when I changed it on `Dec 6, 10:20 PM`
- Markdownlint, warning for non ASCII characters (e.g. emojis)
- Last modified date: <https://dev-yakuza.posstree.com/en/jekyll/jekyll-last-modified-at/>
- Image viewer - only load low-res image until clicked on? Make a liquid function to make inserting image with caption easy and the same all over the site.
