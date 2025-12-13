# Blog Management from Replit

This guide explains how to manage your blog (blog.rupeshtiwari.com) from Replit.

## Quick Commands

Run these commands in the Replit Shell:

```bash
# Create a new blog post (interactive)
npx tsx scripts/new-blog-post.ts

# Push blog posts to GitHub
npx tsx scripts/push-blog-post.ts

# Update the About page
npx tsx scripts/push-blog-about.ts

# Deploy portfolio site (www.rupeshtiwari.com)
npx tsx scripts/deploy-to-github.ts
```

## Creating a New Blog Post

1. Run `npx tsx scripts/new-blog-post.ts`
2. Enter the title, description, categories, and tags
3. Optionally set a future publish date for scheduling
4. The post is saved to `blog-drafts/_posts/` or `blog-drafts/_scheduled/`
5. Edit the generated markdown file to add your content
6. Run `npx tsx scripts/push-blog-post.ts` to publish

## Scheduling Posts for Future

1. When creating a post, enter a future date (YYYY-MM-DD format)
2. The post goes to `blog-drafts/_scheduled/`
3. Push it with `npx tsx scripts/push-blog-post.ts`
4. The GitHub Action automatically publishes it on the scheduled date

## File Locations

| File | Purpose |
|------|---------|
| `blog-content/_tabs/about.md` | Your About page content |
| `blog-drafts/_posts/` | Posts ready to publish now |
| `blog-drafts/_scheduled/` | Posts scheduled for future |
| `blog-drafts/_archive/` | Previously published posts |

## GitHub Repos

- **Portfolio**: github.com/rupeshtiwari/rupeshtiwari.github.io (main branch)
- **Blog**: github.com/rupeshtiwari/rupeshtiwari-blog (master branch)

## Setting Up Scheduled Publishing

Add the GitHub Action to your blog repo:

1. Copy `scripts/blog-scheduler.yml` content
2. Create file at `.github/workflows/scheduled-publish.yml` in your blog repo
3. The action runs hourly and publishes any posts whose date has passed

## Tips

- Posts use Chirpy Jekyll theme frontmatter format
- Categories and tags should be lowercase with hyphens
- Images go in `/assets/img/posts/` folder in your blog repo
- After pushing, wait 1-2 minutes for Jekyll to rebuild
