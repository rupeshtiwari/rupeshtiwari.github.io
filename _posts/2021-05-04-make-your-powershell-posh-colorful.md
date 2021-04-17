---
title: Make Your PowerShell Posh & Colorful
date: 2021-05-04 00:00 +0000
description: Learn how to make your PowerShell show the Git status with colorfulness!
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/9mEAJzs.png
header:
  image: https://i.imgur.com/X6kQ1uJ.png
  teaser: https://i.imgur.com/9mEAJzs.png
  og_image: https://i.imgur.com/9mEAJzs.png
tags:
  - powershell
  - windows
  - productivity
  - beginners
---

> Do you want to make your **PowerShell prompt colorful**? Please read this article to make your PowerShell Terminal colorful and **Git** supported. I will use **oh-my-posh** git prompt engine to make my PowerShell colorful.

![](https://imgur.com/UW6uzpc.gif)

![](https://imgur.com/4GMa0mw.png)

Follow me now! 🏃

## 🎉Installing Posh Git

Run on admin PowerShell

```powershell
Install-Module posh-git -Scope CurrentUser
```

If you are using PowerShell 7 then use below script to install posh-git

```powershell
PowerShellGet\\Install-Module posh-git -Scope CurrentUser -AllowPrerelease -Force
```

### Installing Oh My Posh

Run on admin PowerShell

```powershell
Install-Module oh-my-posh -Scope CurrentUser
```

If you are using **PowerShell 7** then use below script to install **oh-my-posh**

```powershell
Install-Module oh-my-posh -Scope CurrentUser -AllowPrerelease -Force
```

## 🎨 PowerShell Theme

### Browse All existing themes

View themes in [GitHub](https://github.com/JanDeDobbeleer/oh-my-posh/tree/main/themes)

```powershell
Get-PoshThemes
```

![](https://imgur.com/lOQIM6c.png)

Here are some top listed Nerd Fonts

![](https://imgur.com/ZfjdTEu.png)

### Setting a Theme

Run on admin PowerShell to setup `agnoster` theme.

```powershell
Set-PoshPrompt -Theme agnoster
```

You can setup custom theme as well [learn more](https://ohmyposh.dev/docs/upgrading/#i-use-a-custom-themesettings)...

![](https://imgur.com/KFzr46S.png)

Now you can see colors are coming 😃 However, we have to fix the fonts I will explain next that. For Now lets make this colors as our default in PowerShell. Follow me in next steps.

## 💯 Make PowerShell Theme Permanent

Notice, once you close this PowerShell and open new then colors will go away. In order to make this permanent you must update the profile of PowerShell.

### Check Profile Exists

Most of the time we don't have any profile

Run `test-path $profile` if this returns `False` then you must create new one.

![](https://imgur.com/elXcEim.png)

### Create new PowerShell Profile

Run

```powershell
New-Item -path $profile -type file –force
```

![](https://imgur.com/uKmrLSm.png)

Notice new profile file created it is empty now.

![](https://imgur.com/MzCHIRy.png)

### Setting Default PowerShell Colors

Now open PowerShell profile file and paste below code to setup default colors. Save and close the file.

```powershell
Import-Module posh-git
Import-Module oh-my-posh
Set-PoshPrompt -Theme Paradox
```

Close and reopen PowerShell terminal to see the effects.

## 🆎 Fixing Fonts

Notice our PowerShell shows lots of `?` because we are missing required fonts.

![](https://imgur.com/KFzr46S.png)

Lets fix them.

### Which Fonts I need?

**Oh my Posh** was designed to use [Nerd Fonts](https://www.nerdfonts.com/). Nerd Fonts are popular fonts that are patched to include icons.

### Download Nerd Fonts

1. On windows machine go to the link and [download](https://www.nerdfonts.com/font-downloads) your favorite fonts.
2. Right click on the specific font face & "Install for all users". Check the GIF for clarification where I'm using the `3270 Nerd Font` face.

![](https://imgur.com/rlgfSrf.gif)

### Set PowerShell Fonts

1. Open PowerShell
2. Right Click Properties next go to font Tab.
3. Search for `3270Medium Nerd Font` and select ok.

Now open new PowerShell Terminal and enjoy your brand new colorful theme.

![](https://imgur.com/1j53eJU.png)

![](https://imgur.com/26La18u.gif)

## 🥇Changing PowerShell Theme

### Select New Theme

First browse all themes and select yours one.

![](https://imgur.com/lOQIM6c.png)

I am going to select `jandedobbeleer` theme this time.

![](https://imgur.com/4GMa0mw.png)

### Set new Theme As Default

Now open the PowerShell profile and update the theme name.

```powershell
Import-Module posh-git
Import-Module oh-my-posh
Set-PoshPrompt -Theme jandedobbeleer
```

![](https://imgur.com/UW6uzpc.gif)
All done 🎉 Enjoy your new theme 😃

## VS Code PowerShell

### Apply Posh Theme

Open user settings in `json` and paste below code.

```json
"terminal.external.osxExec": "iTerm.app",
"terminal.integrated.cursorBlinking": true,
"terminal.integrated.enableBold": true,
"terminal.integrated.fontFamily": "'MesloLGL NF'", 👈
"terminal.integrated.fontSize": 14,
"terminal.integrated.rightClickCopyPaste": true,
```

If you are using `Fira Code` then change the `fontFamily` accordingly.

## Using Microsoft Terminal

Download the [Microsoft Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab) and open the settings on JSON and update the `FontFace` like below.

![](https://imgur.com/wERARXc.png)

```json
    "profiles":
    {
        "defaults":
        {
            // Put settings here that you want to apply to all profiles.
            "fontFace": "MesloLGL NF"
        },
        ...
    }
```

## References

1. https://ohmyposh.dev/docs/upgrading/
2. https://www.hanselman.com/blog/now-is-the-time-to-make-a-fresh-new-windows-terminal-profilesjson
3. https://www.hanselman.com/blog/how-to-make-a-pretty-prompt-in-windows-terminal-with-powerline-nerd-fonts-cascadia-code-wsl-and-ohmyposh

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access _current_ and _future_ **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask **_doubts/questions_** and get more help, tips and tricks.

> Your bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!**
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)
