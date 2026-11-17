---
title: 'Automating Your Deployment: A Simple Guide to GitHub Actions'
description: 'A straightforward guide to using GitHub Actions to build and deploy a site automatically.'
pubDate: '2026-07-01'
heroImage: '../../assets/Failed-Github-action-Job.png'
---

If you’re tired of manually building your project and uploading files every time you make a change, GitHub Actions is the answer.

Think of it as having a personal assistant that lives inside your repository. Every time you save your code and push it, your assistant handles all the “boring” deployment tasks for you.

Here is a straightforward, step-by-step guide to setting up your first automation pipeline.

## What Exactly is a GitHub Action?

In plain English, think of a GitHub Action as a Virtual Machine (VM).

Every time you push code to GitHub, a fresh Linux computer wakes up in the cloud. It downloads your code, installs your tools (like Node.js), builds your site, and pushes it live to the web. Once it's done, it turns off.

Best of all? For standard public repositories, this assistant works completely for free.

## Step 1: Create the "Instructions" Folder

GitHub looks for its automation instructions in a very specific place. In your project’s root directory, you need to create a couple of folders:

1. Create a folder named `.github` (the dot at the start is important!).
2. Inside that, create another folder named `workflows`.
3. Inside `workflows`, create a file named `deploy.yml`.

Your project structure should look like this:

```text
your-project/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
├── package.json
└── ...
```

## Step 2: The Logic (The YAML File)

Open your newly created `deploy.yml` file. This is where we write the checklist for our assistant. Copy and paste the following configuration:

```yaml
name: Build and Deploy Site

# When should this "assistant" wake up?
on:
  push:
    branches: ["main"] # Only run when code is pushed to the main branch

# Give the assistant permission to write to your GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest # The type of virtual computer to use

    steps:
      # 1. Copy the code from GitHub to the virtual machine
      - name: Checkout Code
        uses: actions/checkout@v4

      # 2. Install Node.js (Crucial for modern frameworks like Astro)
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22 # Using a modern version avoids "Unsupported Engine" errors

      # 3. Install your project dependencies
      - name: Install Dependencies
        run: npm install

      # 4. Build the project
      - name: Build Project
        run: npm run build

      # 5. Hand the final 'dist' folder to GitHub Pages
      - name: Upload Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist # The folder created by your build command

      # 6. Final step: Make it live!
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Step 3: Update Your Repository Settings

Even with the code in place, GitHub won’t deploy your site until you give it the explicit "Green Signal."

1. Go to your repository on [GitHub.com](https://github.com).
2. Click the Settings gear icon at the top.
3. On the left sidebar, click Pages.
4. Under **Build and deployment > Source**, click the dropdown and switch it from **Deploy from a branch** to **GitHub Actions**.

## Step 4: The Build Test

Now, let's test the pipeline. Commit your changes and push them to your repository:

```bash
git add .
git commit -m "chore: setup github actions"
git push origin main
```

Once pushed, click the Actions tab at the top of your GitHub repository page.

You’ll see a yellow spinning circle. This means GitHub is actively following your checklist. If everything is correct, the yellow circle will turn into a Green Checkmark in a minute or two. Your site is now live!

## Troubleshooting Common Errors

If your build didn't turn green on the first try, don't panic. Here are three common issues developers face:

- **The “Node” Error:** If the logs show an error about an unsupported Node version, double-check your `deploy.yml` file. Ensure `node-version` is set to a modern release (like 22).
- **The “Blank Screen” (CSS Missing):** If your site deploys successfully but shows up white or unstyled, it’s usually a base path issue. Ensure your framework configuration knows it is living in a subfolder (e.g., `/your-repo-name/`).
- **Permissions Denied:** If the workflow fails at the final deployment step, verify that the `permissions:` block in your YAML file explicitly includes `pages: write` and `id-token: write`.

## Summary

Setting up automation requires a tiny bit of upfront effort, but it saves you thousands of manual clicks down the road. Now, every time you write a new feature or publish a blog post, all you have to do is push your code. Your pipeline handles the rest.

Welcome to the world of hands-free CI/CD! 🚀

Reference: [Automating Your Deployment: A Simple Guide to GitHub Actions](https://www.linkedin.com/pulse/automating-your-deployment-simple-guide-github-actions-manjare-j8h0c/)
