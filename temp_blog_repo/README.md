Here's a refined and systematic version of your README that includes both your content and the additional setup instructions. This version ensures that everything is explained in a logical order, from initial setup to writing and publishing new content.

---

# Welcome to Rupesh's Home Website & Technical Blogs

[![Build & Deploy to Github Pages everyday](https://github.com/rupeshtiwari/rupeshtiwari.github.io/actions/workflows/ghpages.yml/badge.svg?branch=gh_pages&event=push)](https://github.com/rupeshtiwari/rupeshtiwari.github.io/actions/workflows/ghpages.yml)

This repository hosts my personal website and blog built using Jekyll and GitHub Pages. Below are instructions to help you set up, develop, and publish content on this site.

---

## Table of Contents
- [Welcome to Rupesh's Home Website \& Technical Blogs](#welcome-to-rupeshs-home-website--technical-blogs)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [1. Prerequisites](#1-prerequisites)
    - [2. Installing Prerequisites](#2-installing-prerequisites)
    - [3. Clone the Project](#3-clone-the-project)
    - [4. Install Dependencies](#4-install-dependencies)
  - [Writing and Publishing Blogs](#writing-and-publishing-blogs)
    - [Writing a New Blog](#writing-a-new-blog)
    - [Writing a Draft](#writing-a-draft)
    - [Publishing a Draft](#publishing-a-draft)
  - [Local Development](#local-development)
  - [Updating site](#updating-site)
  - [Git Workflow](#git-workflow)
  - [Platform-Specific Notes](#platform-specific-notes)
  - [Troubleshooting](#troubleshooting)

---

## Getting Started

Follow these steps to set up the project on a new machine from scratch.

### 1. Prerequisites

Ensure the following software is installed on your machine:

1. **Ruby**: Version 2.6 or higher
2. **Bundler**: Version 2.4.10 or higher
3. **Git**: Version control system

### 2. Installing Prerequisites

1. **Install Ruby**  
   - **macOS**: Use Homebrew:
     ```bash
     brew install ruby
     ```
   - **Windows**: Install Ruby from [RubyInstaller](https://rubyinstaller.org/).
   - **Linux**: Use your package manager (e.g., `sudo apt install ruby` for Ubuntu).

2. **Install Bundler**  
   Once Ruby is installed, install Bundler:
   ```bash
   sudo gem install bundler -v 2.4.10
   ```

3. **Install Git**  
   - **macOS**: Use Homebrew:
     ```bash
     brew install git
     ```
   - **Windows**: Download and install Git from [here](https://git-scm.com/download/win).
   - **Linux**: Use your package manager (e.g., `sudo apt install git` for Ubuntu).

### 3. Clone the Project

Once you have Ruby, Bundler, and Git installed, clone the repository:

```bash
git clone https://github.com/rupeshtiwari/rupeshtiwari.github.io.git
cd rupeshtiwari.github.io
```

### 4. Install Dependencies

After cloning, run the following to install all the required gems:

```bash
sudo bundle install
```

---

## Writing and Publishing Blogs

Once your environment is set up, you can start writing and publishing blogs or drafts.

### Writing a New Blog

To create a new blog post, use the following command:

```bash
bundle exec jekyll compose "Your Blog Title Here" --date 2023-10-20
```

### Writing a Draft

To create a new draft (unpublished post):

```bash
bundle exec jekyll draft "Your Draft Title"
```

### Publishing a Draft

To publish an existing draft:

```bash
bundle exec jekyll publish _drafts/your-draft-title.md --date 2023-10-20
```

---

## Local Development

To preview the site locally or during development, use the following commands:
 http://127.0.0.1:4000
 
- Serve the site locally:
  ```bash
  bundle exec jekyll serve
  ```
- Limit the number of posts displayed locally (for performance):
  ```bash
  bundle exec jekyll serve --limit_posts=5
  ```
- Serve with unpublished drafts:
  ```bash
  jekyll serve --unpublished
  ```
- Serve future-dated posts:
  ```bash
  jekyll serve --future
  ```

---

## Updating site 

1- If you update _config.yml then run `bundle exec jekyll build`

## Git Workflow

Use this simple Git script to pull the latest changes, commit your work, and push it back to the repository:

```bash
bundle exec jekyll build
git pull; git add .; git commit -m 'update blogs'; git push
```

---

## Platform-Specific Notes

- **Windows**: This project uses Windows-specific gems like `wdm` for file watching. These gems will be automatically installed when you run `bundle install` on a Windows machine.
  
- **macOS/Linux**: The `wdm` gem will not be installed on macOS or Linux, ensuring compatibility across platforms.

---

## Troubleshooting

1. **Permission Issues on macOS/Linux**: If you encounter permission issues while running `gem install bundler` or `bundle install`, use `sudo`:
   ```bash
   sudo gem install bundler
   sudo bundle install
   ```

2. **Missing Ruby Version**: If you face Ruby version issues, consider using a Ruby version manager like `rbenv` or `RVM` to manage multiple Ruby versions seamlessly.

---

By following these steps, you should be able to successfully set up and manage this project on any new machine. If you run into any issues, check the troubleshooting section or feel free to reach out.

---

