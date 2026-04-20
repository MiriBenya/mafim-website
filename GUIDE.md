# How to Build and Deploy a Website with GitHub Pages

**Date:** April 20, 2026  
**Website:** מאפים (Mafim) - Bread and Pastry Recipes  
**Live URL:** https://MiriBenya.github.io/mafim-website/

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Step 1: Set Up Git](#step-1-set-up-git)
4. [Step 2: Create Project Folder](#step-2-create-project-folder)
5. [Step 3: Create Website Files](#step-3-create-website-files)
6. [Step 4: Initialize Git Repository](#step-4-initialize-git-repository)
7. [Step 5: Create GitHub Repository](#step-5-create-github-repository)
8. [Step 6: Push Code to GitHub](#step-6-push-code-to-github)
9. [Step 7: Enable GitHub Pages](#step-7-enable-github-pages)
10. [Result](#result)

---

## Overview

This guide explains how to:
- Create a website with HTML, CSS, and JavaScript
- Upload it to GitHub
- Make it live on the internet using GitHub Pages

**No server needed! No hosting fees!**

---

## Prerequisites

- GitHub account (free at github.com)
- Git installed on your computer (git-scm.com)
- Text editor or VS Code
- Basic knowledge of HTML, CSS, JavaScript (optional)

---

## Step 1: Set Up Git

### Install Git

1. Go to: https://git-scm.com/download/win
2. Download and install
3. Accept all default options

### Configure Git

Open PowerShell and run:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@github.com"
```

Replace with your actual name and GitHub email.

---

## Step 2: Create Project Folder

Create a folder for your website project:

```powershell
mkdir my-website
cd my-website
```

### Folder Structure

```
my-website/
├── index.html          # Main page
├── css/
│   └── style.css      # Styling
├── js/
│   └── script.js      # Functionality
├── images/            # For images
├── .gitignore         # Files to exclude from Git
└── README.md          # Project documentation
```

---

## Step 3: Create Website Files

### 1. index.html
Your main HTML file with content.

```html
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>מאפים</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Your Website Title</h1>
    <script src="js/script.js"></script>
</body>
</html>
```

### 2. css/style.css
Styling for your website.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}
```

### 3. js/script.js
JavaScript for interactivity.

```javascript
console.log('Website loaded!');
```

### 4. .gitignore
Files that Git should ignore:

```
node_modules/
.DS_Store
*.log
```

### 5. README.md
Project documentation.

---

## Step 4: Initialize Git Repository

Open PowerShell in your project folder:

```powershell
cd path/to/my-website
```

Initialize Git:

```powershell
git init
```

Add all files:

```powershell
git add .
```

Create first commit:

```powershell
git commit -m "First commit - Initial website"
```

**Check status:**

```powershell
git status
```

Should show: "On branch main" and "nothing to commit, working tree clean"

---

## Step 5: Create GitHub Repository

1. Go to: https://github.com/new
2. Fill in:
   - **Repository name:** `my-website` (or your name)
   - **Description:** Brief description of your site
   - **Visibility:** Select **Public**
3. Click **Create repository**

**Important:** Don't initialize with README or .gitignore (you have these locally)

---

## Step 6: Push Code to GitHub

### Connect Local Repository to GitHub

In PowerShell, run:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/my-website.git
```

Replace `YOUR_USERNAME` with your GitHub username.

### Push to GitHub

```powershell
git branch -M main
git push -u origin main
```

Git may ask you to authenticate in your browser. Click **"Sign in with your browser"** and complete the login.

**Success message:**

```
* [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

---

## Step 7: Enable GitHub Pages

### On GitHub Website

1. Go to your repository: `https://github.com/YOUR_USERNAME/my-website`
2. Click **Settings** (top menu)
3. Click **Pages** (left menu)
4. Under **Build and deployment → Source**:
   - Select **Deploy from a branch**
5. Under **Branch:**
   - Select **main**
   - Select **/(root)** folder
6. Click **Save**

### Wait

GitHub processes the deployment (usually 1-2 minutes).

### Check Live Site

Refresh the Settings → Pages page. You'll see:

> "Your site is live at: https://YOUR_USERNAME.github.io/my-website/"

Click the link to visit your website!

---

## Result

✅ Your website is now **LIVE** on the internet!  
✅ Anyone can visit it using the GitHub Pages URL  
✅ Your code is safely backed up on GitHub  
✅ You can update it anytime by editing files and pushing to GitHub

---

## Updating Your Website

After you make changes locally:

```powershell
git add .
git commit -m "Description of changes"
git push origin main
```

The website updates automatically (usually within 1-2 minutes).

---

## Useful Commands

```powershell
# Check status
git status

# See commit history
git log --oneline

# See all branches
git branch -a

# Check remote connection
git remote -v
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Repository not found" | Check username in URL matches your GitHub username |
| Website shows 404 | Make sure index.html is in root folder, wait 2 minutes |
| Changes not showing | Run `git add .`, `git commit`, `git push` |
| Authentication failed | Click "Sign in with browser" when prompted |

---

## Next Steps

- **Add more content** to your website
- **Customize styling** in css/style.css
- **Add images** to your images/ folder
- **Create new pages** (about.html, contact.html, etc.)
- **Share your website** with friends and family!

---

## Resources

- **GitHub:** https://github.com
- **Git Documentation:** https://git-scm.com/doc
- **GitHub Pages:** https://pages.github.com
- **HTML Reference:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS Reference:** https://developer.mozilla.org/en-US/docs/Web/CSS

---

**Good luck with your website! 🚀**
