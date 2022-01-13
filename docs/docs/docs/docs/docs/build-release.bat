set JEKYLL_ENV=production | bundle exec jekyll build

Xcopy "C:\Rupesh\Blog-SourceCode\rupeshtiwari.github.io\_site" "C:\Rupesh\Blog-SourceCode\rupeshtiwari.github.io\docs" /h /i /c /k /e /r /y

git add .
git commit -m 'blog updates'
git push