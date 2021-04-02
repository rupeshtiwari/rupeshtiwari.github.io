---
title: How to Install Scoop on windows
date: 2021-07-03 00:00 +0000
description: Install scoop and get powerful cli extensions like oh my posh and make your windows PowerShell prompt colorful.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/hnKqdLc.png
header:
  image: https://i.imgur.com/ulAWY5t.png
  teaser: https://i.imgur.com/hnKqdLc.png
  og_image: https://i.imgur.com/hnKqdLc.png
tags:
   - scoop
   - powershell
   - productivity
   - vscode
---

> Do you love open-source? Do you want to make your PowerShell really powerful? Consider installing **scoop** and make your life simple! 😄 Learn how can scoop help you to make your **Visual Studio Code** terminal colorful. This was my dream on windows machine to achieve. Please read my article till end and enjoy! 


## What is Scoop

[Scoop](https://scoop.sh/) is used to install tools or utilities or plugins for windows PowerShell or CommandLine. You can use scoop to install curl on windows machine. 

![](https://imgur.com/w1X3139.png)

I will install scoop to colorful my PowerShell like this. 
![](https://imgur.com/rUjIDfd.png)
And then I will also make sure my Visual Studio Code terminal looks colorful like this. 
![](https://imgur.com/MVL0Si3.png)

![](https://imgur.com/XVf7nQM.gif)

### 🦂 Installing Scoop

1. Open PowerShell 7 in admin mode.
2. Run `iex`
3. Then in command enter `(New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')` and hit enter. ![](https://imgur.com/QJ2gNWY.png)
4. Or You can directly Run `iex (new-object net.webclient).downloadstring('https://get.scoop.sh')`
   ![](https://imgur.com/s3NCn8m.png)

### Confirm Scoop Installed

Run `scoop help` and see if it is installed.

![](https://imgur.com/5JXukJD.png)

### Installing Curl using Scoop on Windows

Run `scoop install curl` it will install curl command line in your windows machine. It's fun 😄
![](https://imgur.com/w1X3139.png)



## 🥇Coloring your PowerShell

1. Open PowerShell profile normally it is at `c:\users\<username>\My Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`. Run $profile to learn where is your profile. If not then create new one.
2. Add below script in profile file.
```shell
Invoke-Expression (oh-my-posh --init --shell pwsh --config "$(scoop prefix oh-my-posh)/themes/nu4a.omp.json")
```

### Installing on-my-posh

Run `scoop install https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/oh-my-posh.json` to install **on-my-post**.

![](https://imgur.com/2X3fbbH.png)

This installs a couple of things:

1. `oh-my-posh.exe` - Windows executable, added to your $PATH
2. `oh-my-posh-wsl` - Linux executable, added to your $PATH for use in the WSL
3. `themes` - The latest Oh my Posh themes


### Install Nerd Fonts

**Oh-My-Posh** needs Nerd Font therefore, you must install them. 
1. [Download Nerd Fonts](https://www.nerdfonts.com/font-downloads)
2. After downloading font install it.
3. Open PowerShell and select your Nerd Font. I am using `MesloLGL NF` Font. 
![](https://imgur.com/BFgpANA.png)

### PowerShell is Colorful

Open PowerShell and notice it shows colors and Git status. 
![](https://imgur.com/zIN7HRH.png)


## 🛕 Changing Theme

Go to the folder where oh-my-posh is installed. Next go to the themes folder you will notice there are 37 themes. 
![](https://imgur.com/4MNcEBm.png)

### Visualizing All Themes

Run `get-poshthemes` on PowerShell terminal to see all of them. 
![](https://imgur.com/XVf7nQM.gif)

### Changing Theme of  PowerShell

Once you select your new theme then open PowerShell profile and change the theme `json` name. I have currently `themes\nu4a.omp.json` I will switch to `themes\cert`. With below new script

```powershell
Invoke-Expression (oh-my-posh --init --shell pwsh --config "$(scoop prefix oh-my-posh)/themes/cert.omp.json")👈
                           
```
Look at my new theme now ![](https://imgur.com/p6wHB52.png)


All done 🎉 enjoy power of `scoop` and coolness of `PowerShell` on your windows machine.

## References

1. https://scoop.sh/
2. https://ohmyposh.dev/docs/installation 
3. http://rupeshtiwari.com/make-your-powershell-posh-colorful/

---
 
*Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box.*

## Become full stack developer 💻

I teach at [Fullstack Master](https://www.fullstackmaster.net). If you want to become **Software Developer** and grow your carrier as new **Software Engineer** or **Lead Developer/Architect**. Consider subscribing to our full stack development training programs. You will learn **Angular, RxJS, JavaScript, System Architecture** and much more with lots of **hands on coding**. We have All-Access Monthly membership plans and you will get unlimited access to all of our **video** courses, **slides**, **download source code** & **Monthly video calls**.

- Please subscribe to **[All-Access Membership PRO plan](https://www.fullstackmaster.net/pro)** to access *current* and *future* **angular, node.js** and related courses.
- Please subscribe to **[All-Access Membership ELITE plan](https://www.fullstackmaster.net/elite)** to get everything from PRO plan. Additionally, you will get access to monthly **live Q&A video call** with `Rupesh` and you can ask ***doubts/questions*** and get more help, tips and tricks.

> You bright future is waiting for you so visit today [FullstackMaster](www.fullstackmaster.net) and allow me to help you to board on your dream software company as a new **Software Developer, Architect or Lead Engineer** role.

**💖 Say 👋 to me!** 
<br>Rupesh Tiwari
<br>Founder of [Fullstack Master](https://www.fullstackmaster.net)
<br>Email: <a href="mailto:fullstackmaster1@gmail.com?subject=Hi">fullstackmaster1@gmail.com</a> 
<br>Website: [www.rupeshtiwari.com](https://www.rupeshtiwari.com) | [www.fullstackmaster.net](https://www.fullstackmaster.net)

