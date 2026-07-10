# Elijah Young Portfolio

Static GitHub Pages portfolio for Elijah Young, MIT mechanical engineering.

## Local Preview

No build step is required. From the repository root, run one of:

```powershell
py -m http.server 8000
```

or:

```powershell
node tools/static-server.mjs
```

or:

```powershell
npx serve .
```

Then open `http://localhost:8000` for Python, or `http://127.0.0.1:8787` for the Node helper.

Opening `index.html` directly also works for most content, but a local server is better for checking GitHub Pages-style paths.

## Structure

- `index.html` - main portfolio page
- `projects/` - static case-study pages
- `style.css` - design tokens, layout, responsive styling
- `script.js` - mobile navigation, active section state, reveal transitions, copy email
- `assets/profile/` - headshot assets
- `assets/resume/` - resume PDF
- `assets/projects/` - project media and documents
- `assets/icons/` - favicon and sharing artwork

## Deployment

This repository is designed to deploy from the repository root on GitHub Pages. Push changes to the configured publishing branch and GitHub Pages will serve the static files directly.

## Content Rules

Do not add claims, dates, metrics, employers, collaborators, or technical details unless they are supported by the resume, project files, or documented source material in this repository.
