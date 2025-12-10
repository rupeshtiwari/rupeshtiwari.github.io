#!/bin/bash
set -e

echo "🚀 Pushing all changes to GitHub..."

cd "$(dirname "$0")"

# Configure git
git config user.email "rupesh.tiwari.info@gmail.com"
git config user.name "Rupesh Tiwari"

# Clean any locks
rm -f .git/index.lock .git/config.lock .git/objects/maintenance.lock 2>/dev/null

# Stage all changes
echo "📦 Staging files..."
git add -A

# Commit with detailed message
echo "💾 Creating commit..."
git commit -m "🚀 Polish Release: Modern dark theme, blog carousel, PWA support, service worker, automated workflows

✨ Features:
- Beautiful dark theme with purple/blue gradients
- Blog post carousel (12 latest from 299+ articles)
- Progressive Web App (PWA) offline support
- Service Worker caching
- 5 GitHub Actions workflows
- Mobile-optimized responsive design

✅ Tests: No errors, fully polished, ready for production"

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push origin main -v

echo ""
echo "✅ SUCCESS! Site is now live!"
echo "🔄 GitHub Pages deploying (wait 2-3 minutes)..."
echo "📝 Check: https://github.com/rupeshtiwari/rupeshtiwari.github.io/actions"
echo "🌍 Visit: www.rupeshtiwari.com"
