---
title: PowerShell Random Notes for You!
date: 2022-03-26 00:00 +0000
description: Learn some important built-in very helpful methods in Powershell. It could be a quick note for you so don't forget to bookmark this article!
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/qxXxmBa.png
header:
  image: https://i.imgur.com/zipiW93.png
  teaser: https://i.imgur.com/qxXxmBa.png
  og_image: https://i.imgur.com/qxXxmBa.png
tags:
  - webdev
  - tutorial
  - beginners
  - powershell
---

> Learn some important built-in very helpful methods in Powershell. It could be a quick note for you so don't forget to bookmark this article! 🥇

## Try Catch in PowerShell

Using built-in exceptions.

```powershell
try {
   $wc = new-object System.Net.WebClient
   $wc.DownloadFile("http://www.contoso.com/MyDoc.doc","c:\temp\MyDoc.doc")
}
catch [System.Net.WebException],[System.IO.IOException] {
    "Unable to download MyDoc.doc from http://www.contoso.com."
}
catch {
    "An error occurred that could not be resolved."
}
```

Printing Anonymous Exception details.

```powershell
try { NonsenseString }
catch {
  Write-Host "An error occurred:"
  Write-Host $_
  # will print the error details.
}
```

```error
An Error occurred:
The term 'NonsenseString' is not recognized as the name of a cmdlet, function,
script file, or operable program. Check the spelling of the name, or if a path
was included, verify that the path is correct and try again.
```

## Try Catch Finally in Powershell

```powershell
try { NonsenseString }
catch {
  Write-Host "An error occurred:"
  Write-Host $_
  # will print the error details.
}
finally {
  Write-Host "I can move temporary log file to permanent location."
}
```

## if else case in Powershell

```powershell
if(Boolean_expression) {
   // Executes when the Boolean expression is true
}else {
   // Executes when the Boolean expression is false
}
```

- **-eq** to check **equality**.
- **-le** to check **less than**.

Example: Comparing Less than in Powershell

```powershell
$x = 30

if($x -le 18){
   write-host "You can't get driving license!"
} else {
   write-host "You are eligible for Driving License!"
}
```

Example: Comparing equality check

```powershell
$file1Timestamp = [datetime](get-date -date '1989-09-25 8AM')

$file2Timestamp = [datetime](get-date -date '1989-09-25 10AM')

if($file1Timestamp -eq $file2Timestamp) {
    write-host "File is not modified"
} else {
    write-host "File is modified"
}
```

## Throwing custom error in Powershell

```powershell
Function Do-Something
{
    throw "Your custom error"
    # This creates a runtime exception
    # that is a terminating error.
}
```

## Multiple line comment in Powershell

```powershell
<#
Function Do-Something
{
Write-Host "The entire function is commented"
}
#>
```

## Contains vs Match vs Like in Powershell

`Contains` is used for collection and **Tells whether a collection of reference values includes a single test value.**

```powershell
"abc" -contains "b" # return False
```

![](https://i.imgur.com/H8GQoBu.png)

```powershell
 "abc","xyz" -contains "abc"
```

![](https://i.imgur.com/xvK8KsJ.png)

`Match` is used in string and it uses regular expression to search in string.

```powershell
"c:\temp\web\config.js" -match "b\\config.js" # True
```

![](https://i.imgur.com/MtYadup.png)

`Like` is used in string and it uses wild card search

```powershell
"c:\temp\web\config.js" -like "*b\config.js" # True
```

![](https://i.imgur.com/jgeLl0t.png)

Whenever error occurs in batch file it save the error code in the environment variable `%ERRORLEVEL%`

```shell
echo "Return Code:" %ERRORLEVEL%
```

## Un-archive zip file

### Using Expand-Archive cmdlet

`Expand-Archive` is built-in powershell 5 module.

```powershell
 expand-archive -path c:\fsms\test.zip -destinationpath c:\fsms\unpack
```

![](https://imgur.com/gxliBJQ.png){: .full}

### Using .Net class [System.IO.Compression.ZipFile]

`ZipFile.ExtractToDirectory()` is .Net Framework 4.5 built-in api.

```powershell
[System.IO.Compression.ZipFile]::ExtractToDirectory("c:\fsms\test.zip","c:\fsms\unpack")
```

![](https://imgur.com/Ku8Q3t5.gif){: .full}

### Using Folder.CopyHere() Method of Shell.Application Class

Using `COM object` created from `Shell.Application` class. Use `namespace().items()` to get all items then copy them to destination folder. Make sure destination folder exist before you copy. Also this way of un-archiving files seems lil lengthy. However, I found that COM method to un-archive files are reliable since it is not modifying the modified date time of the files inside the zip file.

{: .notice--success}
🏆 **ProTip** \
\
For example if there is a file called as `Web.config` inside your `web.zip\Content\website` folder. Then if the actual modified date time is `5/4/2021 07:00:11 AM` then this will show exact same time. However, if u use powershell cmdlet `Expand-Archive` or .Net `ExtractToDirectory` methods they will sometime display `+1` hour so they will show file `lastwritetime` as `5/4/2021 08:00:11 AM`. Note here it is showing `8AM` rather `7AM`.

Suppose

```powershell
$shell = new-object -com Shell.Application
$targetFolderToCopyUnzippedFiles = "c:\fsms\unpack"
# create a target folder if not exist. Make sure you have the folder otherwise un-archive will fail.
if(!(test-path $targetFolderToCopyUnzippedFiles)) {
  new-item -itemtype directory -path $targetFolderToCopyUnzippedFiles -force
}
$zipFile = "c:\fsms\test.zip"
# Unarchive and copy to target folder
$shell.namespace($targetFolderToCopyUnzippedFiles).copyhere($shell.namespace($zipFile).items(),4)
```

## References

- https://ridicurious.com/2019/07/29/3-ways-to-unzip-compressed-files-using-powershell/

If you know any other Powershell Built-In method that you use frequently then please write them in comment box. I may add those method details in this blog :slightly_smiling_face 🙂

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

{: .notice--info}
I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

{: .notice--warning}
Your bright future is awaiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)
