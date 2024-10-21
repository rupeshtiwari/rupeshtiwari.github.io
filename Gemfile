# Source for all gems
source "https://rubygems.org"

# Platform-specific gems for Windows systems
platforms :mswin do
  gem "x" # Replace 'x' with the actual gem name for Windows compatibility
end

# GitHub Pages dependency, this includes Jekyll and other plugins managed by GitHub Pages
gem "github-pages", group: :jekyll_plugins

# Timezone info for Windows platforms
gem "tzinfo-data"

# File watching on Windows, only needed if you're using Jekyll on a Windows system
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# Webrick is needed for starting a local server with `jekyll serve`
gem "webrick"

# Dotenv to load environment variables from a `.env` file, useful for project configuration
gem "dotenv"

# Group for Jekyll plugins (included in GitHub Pages gem)
group :jekyll_plugins do
  # Pagination plugin for Jekyll
  gem "jekyll-paginate"

  # Sitemap generator plugin
  gem "jekyll-sitemap"

  # Embed GitHub Gists in your site
  gem "jekyll-gist"

  # RSS feed generator
  gem "jekyll-feed"

  # GitHub emoji support
  gem "jemoji"

  # Cache includes for performance
  gem "jekyll-include-cache"

  # A plugin to ease content creation (e.g., drafts, posts)
  gem 'jekyll-compose'
end