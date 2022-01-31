Function Build {
    Write-Host Building Project
    Set-Variable JEKYLL_ENV=production 
    bundle exec jekyll build -q -d docs
    Write-Host Project build is complete
}

## Build 
Build

## Push github
Write-Host Pushing docs to gh_pages branch
Set-Location C:\Rupesh\Blog-SourceCode\rupeshtiwari.github.io
git checkout gh_pages
git pull 
git commit -am "blog updates"
git push

