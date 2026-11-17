# Vinayak's Blog

A personal blog built with [Astro](https://astro.build/) and deployed to GitHub Pages. It features articles on backend architecture, cloud systems, generative AI, and software engineering.

## Run locally

### Requirements

- Node.js 22.12 or later
- npm

### Install and start

```powershell
npm ci
npm run dev
```

Open [http://localhost:4321/my-astro-blog/](http://localhost:4321/my-astro-blog/). The development server watches for changes and rebuilds the site automatically.

## Write a blog post

Add a Markdown (`.md`) or MDX (`.mdx`) file to `src/content/blog/`. Each post must include `title`, `description`, and `pubDate` in its frontmatter. `updatedDate` and `heroImage` are optional.

```md
---
title: 'Your article title'
description: 'A short summary for the article listing and search engines.'
pubDate: '2026-11-17'
heroImage: '../../assets/your-cover-image.png'
---

Write your article here using Markdown.
```

Posts are listed by publication date. Set `heroImage` to an image in `src/assets/` when you want a cover image. The blog page and RSS feed include posts whose publication date is not in the future.

## Build and preview

Create a production build in `dist/`:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

The site uses `/my-astro-blog/` as its base path for GitHub Pages, so local URLs include that path too.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages when changes are pushed to `main`. In the repository's **Settings → Pages**, set the build and deployment source to **GitHub Actions**.

The published site is [vinap.github.io/my-astro-blog](https://vinap.github.io/my-astro-blog/).

## Project structure

```text
.
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── public/                       # Public files, including favicons
├── src/
│   ├── assets/                   # Images and fonts
│   ├── components/               # Shared Astro components
│   ├── content/blog/             # Markdown and MDX posts
│   ├── layouts/                  # Page layouts
│   ├── pages/                    # Site routes and RSS feed
│   └── styles/                   # Global styles
├── astro.config.mjs
└── package.json
```
