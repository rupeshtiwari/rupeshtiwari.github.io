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
image: https://i.imgur.com/HkTjirq.png
header:
  image: https://i.imgur.com/zipiW93.png
  teaser: https://i.imgur.com/HkTjirq.png
  og_image: https://i.imgur.com/HkTjirq.png
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

<#
Function Do-Something
{
Write-Host "The entire function is commented"
}
#>

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

If you know any other Powershell Built-In method that you use frequently then please write them in comment box. I may add those method details in this blog :slightly_smiling_face 🙂

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

{: .notice--info}
I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to a monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

{: .notice--warning}
Your bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)
