# Michael's Motive

Welcome to the source code to my website.\
This, like most software nowadays, will never be done.\
To see what I'm working on or planning at any time check [here](https://github.com/mic-max/micmax.pw/projects/1)

## Build

1. Set the environment variable `EDITOR` = `code`
1. Install [Ruby](https://rubyinstaller.org/downloads/)
1. `gem i bundler jekyll`
1. `bundle`
1. `bundle exec jekyll serve [--drafts]`

## Writing

1. `bundle exec jekyll draft "My new draft"`
1. `bundle exec jekyll publish _drafts/my-new-draft.md`

## Spelling Checker

1. `npm i -g spellchecker-cli`
1. `spellchecker -f _posts/*.md -l en-CA -d dictionary.txt -q --no-suggestions`

## Dead Link Checker

1. `gem i deadlink`
1. `deadlink`

## Markdown Lint

1. `gem i mdl`
1. `mdl **/*.md`

## Helper Aliases

Should I add a `package.json` and make these scripts in it?

- `draft <title> <folder>` => `bundle exec jekyll draft "<title>" && mv _drafts/<title>.md _drafts/<folder>/<title>.md`
- `publish <folder> <title>` => `bundle exec jekyll publish _drafts/<folder>/<title>.md`

## Resources

- [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Google Analytics](https://analytics.google.com/analytics/web/#/report-home/a55845382w176857085p175657346)
- [Jekyll Front Matter](https://jekyllrb.com/docs/front-matter/)
- [Liquid Documentation](https://shopify.github.io/liquid/)
- [GitHub Pages Dependencies](https://pages.github.com/versions/)
- [Markdown Tables](https://www.tablesgenerator.com/markdown_tables)
- [Minima Theme](https://github.com/jekyll/minima)
  - [Chirpy Theme](https://jekyll-themes.com/chirpy/) - Might switch to

## Website To Do List

- Misc
  - SEO Optimization <https://jsinibardy.com/optimize-seo-jekyll>
  - Comment section: <https://lobste.rs/>
  - Media Images - When sharing a post on Twitter for example the image and description shown are correct, currently it shows a sparkle emoji when I share just the micmax.pw link in messenger for example
  - Static site host since GitHub pages can't use unsupported jekyll plugins. Use action to build and push to a `docs` branch / use netlify or similar
  - Review all jekyll mention @ tags with friends for permission and their preference of social media / account
  - Setup an email newsletter: <buttondown.email> ? for those who don't want to use an RSS reader
  - Create a stats page: <https://sylhare.github.io/2021/05/26/Generate-jekyll-blog-stats.html>
- Look
  - Table of Contents for longer posts <https://www.aleksandrhovhannisyan.com/blog/jekyll-table-of-contents/>
  - Search bar
  - Time to read on blog posts
  - Tag posts
  - Image viewer - Make a liquid function to make inserting image with caption easy and the same all over the site
    - Image Gallery <https://dmnfarrell.github.io/software/jekyll-galleries> for drawings post
    - Image Carousel
  - Add friend directory, so in a post I can just say their name like everyone knows them and hovering or clicking the link will give a quick introduction to them
  - Show last modified date: <https://dev-yakuza.posstree.com/en/jekyll/jekyll-last-modified-at/>
    - <https://tomkadwill.com/adding-last-modified-date-to-jekyll>
    - <https://divshot.com/blog/web-development/advanced-jekyll-features/>
    - <https://davelee212.github.io/blog/post-modified/>
  - Archive view of posts by month and year like <https://boonepeter.github.io/archive/>
  - Clickable Post Header Links
  - Sticky Nav BarEx: <https://powers-hell.com/>
    - This site is sick! Steal ideas from its design 😌
- Performance
  - Uglify / Minify generated HTML, CSS, JS
  - Compress and resize images to reduce load time and bandwidth
- Search Engine Verification
  - [Bing Verify](https://wilsonmar.github.io/jekyll-site-development/)
  - [Google Verify](https://wilsonmar.github.io/jekyll-site-development/)
