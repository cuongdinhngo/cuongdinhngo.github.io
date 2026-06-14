# Cuong Ngo — Full Stack Developer

> Personal portfolio. Building scalable web applications with modern technologies.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-ngodinhcuong-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/ngodinhcuong/)
[![GitHub](https://img.shields.io/badge/GitHub-cuongdinhngo-grey?style=flat&logo=github)](https://github.com/cuongdinhngo)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-green?style=flat)](https://cuongdinhngo.github.io)

A modern, dark-themed portfolio built with **React + Vite + Tailwind CSS** ("Aurora" design language).

## Tech stack

- **React 18** + **TypeScript**, bundled with **Vite**
- **Tailwind CSS** for styling
- **React Router** (clean URLs, with a GitHub Pages SPA redirect fallback)
- Deployed to **GitHub Pages** via GitHub Actions

## Development

```bash
bun install      # install dependencies
bun run dev      # start the dev server (http://localhost:5173)
bun run build    # production build -> dist/
bun run preview  # preview the production build
```

## Project structure

```
index.html            # app shell + SPA redirect restore script
public/               # static assets (images, robots.txt, 404.html SPA redirect)
src/
  main.tsx            # entry (BrowserRouter)
  App.tsx             # routes: / , /projects , 404
  index.css           # Tailwind + Aurora design tokens / component classes
  data/               # content: profile, projects, experience, education, social
  components/         # Navbar, Hero, ProjectCard, Experience, Education, Contact, Icons
  pages/              # Home, Projects, NotFound
```

Content lives in `src/data/*` — edit those files to update projects, experience, education, and contact details.

## Deployment

Pushing to `main` triggers `.github/workflows/deployment.yml`, which builds with Bun and publishes `dist/` to GitHub Pages.

## Contact

📧 dinhcuongngo@gmail.com — available for full-time, consulting, and freelance work. Open to remote and relocation.
