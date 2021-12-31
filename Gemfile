source "https://rubygems.org"

gem "jekyll", "~> 4.2"
gem "jekyll-mentions"
gem "jekyll-remote-theme"
gem "jemoji"
gem "minima", github: "jekyll/minima"
gem "webrick", "~> 1.7"
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Loaded before Jekyll starts
# Ref: https://jekyllrb.com/docs/plugins/installation/
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 2.0"
  gem "tzinfo-data"
end
