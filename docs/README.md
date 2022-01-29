# Rupesh Home 
[![Build every day](https://github.com/rupeshtiwari/rupeshtiwari.github.io/actions/workflows/schedule-posts.yml/badge.svg?branch=main)](https://github.com/rupeshtiwari/rupeshtiwari.github.io/actions/workflows/schedule-posts.yml)
## Writing New Blog command

`bundle exec jekyll compose "Importing WordPress or Blogger Blogs to Jekyll Blog" --date 2021-03-20`

## Writing new draft

`bundle exec jekyll draft "My new Draft"`

### Publishing draft

`bundle exec jekyll publish _drafts/my-new-draft.md --date 2014-01-24`

## Getting Started

First time if you download the code in new machine then please install the dependencies by running command 
`bundle install`.

## Serve in dev

`bundle exec jekyll s`

`bundle exec jekyll serve`

`bundle exec jekyll serve --limit_posts=5`

`jekyll serve --unpublished`

To preview your site locally, you can --future option
`jekyll serve --future`


