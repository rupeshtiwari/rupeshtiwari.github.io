#!/bin/bash

# Simple script to push all changes to GitHub
# Run this from your local machine after downloading files from Replit

echo "🚀 Pushing changes to GitHub..."

# Configure git
git config user.email "rupesh.tiwari.info@gmail.com"
git config user.name "Rupesh Tiwari"

# Stage all changes
echo "📦 Staging files..."
git add -A

# Commit
echo "💾 Creating commit..."
git commit -m "Update: Modern dark theme portfolio, remove Google Ads, add automation workflows

- New dark theme CSS with animations
- Updated portfolio layout (hero, about, skills, trusted, content, footer)
- Removed Google Ads
- Added 4 new GitHub Actions workflows:
  * Link validation
  * Build checking
  * SEO verification
  * Auto-commit support
- Fixed all social links and URLs
- Ready for GitHub Pages deployment"

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push origin main

# Check result
if [ $? -eq 0 ]; then
  echo "✅ SUCCESS! Files pushed to GitHub"
  echo "🔄 GitHub Actions will trigger in 1-2 minutes"
  echo "📝 Check: https://github.com/rupeshtiwari/rupeshtiwari.github.io/actions"
  echo "🌍 Visit: www.rupeshtiwari.com (in 2-3 minutes)"
else
  echo "❌ Error pushing to GitHub. Check your connection and permissions."
  exit 1
fi
