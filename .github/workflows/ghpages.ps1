Function Cleanup {
    Set-Location go to docs folder 
    $Folder = "_site\docs"
  
    if (Test-Path -Path $Folder) {
        # Deleting content of the docs folder
        Get-ChildItem -Path $Folder -Include * -File -Recurse | ForEach-Object { $_.Delete() }
        Write-Host Removed _site/docs folder
    }
}

Function Build{
    Write-Host Building Project
    Set-Variable JEKYLL_ENV=production 
    bundle exec jekyll build -q
    Write-Host Project build is complete
}

## Cleanup 
Cleanup

## Build 
Build

## Create Docs folder
Copy-Item -Path "_site\*" -Destination "docs" -Recurse -Force
Write-Host Build copied to docs folder 


## Push github
Write-Host Pushing docs to gh_pages branch
git checkout gh_pages
git pull 

# Clean
$Folder = "docs\docs"
if (Test-Path -Path $Folder) {
    Remove-Item $Folder -Force -Recurse
}

git add .
git commit -m "blog updates"
git push

