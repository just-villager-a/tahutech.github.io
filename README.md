# TahuTech Portfolio

Personal portfolio for Ade Widyatama Dian Boernama, focused on .NET and backend engineering.

The site is a lightweight, accessible, static Astro application. It has no backend, database, authentication, CMS, or admin dashboard.

TahuTech is the visual brand; the hero explicitly presents it as a personal portfolio by Ade, followed by the `.NET / Backend Software Engineer` role.

## Stack

- Astro
- TypeScript
- Plain CSS with custom design tokens
- Inline SVG icons
- GitHub Pages deployment

## Project structure

```text
src/
  components/       Reusable Astro components
  data/             Portfolio content
  layouts/          Document layout and metadata
  pages/            Static routes
  styles/           Global responsive styles
public/
  assets/           Public assets
.github/workflows/  GitHub Pages deployment
reference/          Local PRD, design, and screenshot references
```

The `reference/` directory is intentionally ignored by Git and contains local planning and design material.

## Local development

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown by Astro.

## Checks and production build

```bash
npm run lint
npm run build
npm run preview
```

`npm run lint` runs `astro check`. The production output is generated in `dist/`.

## Updating content

Edit [`src/data/portfolio.ts`](src/data/portfolio.ts) for experience, skills, projects, education, contact links, and profile copy. Keep all public claims factual and avoid confidential client details.

The current project list contains the Mini Microservices Project. Add future projects only when they can be shared publicly; place approved images under `public/assets/projects/` and provide useful alternative text in the project component.

## Deployment

Push to the `main` branch to trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow installs dependencies, builds the static site, and deploys `dist/` to GitHub Pages.

Before launch, replace the placeholder canonical URL (`https://tahutech.example/`) in `src/layouts/BaseLayout.astro` and `public/sitemap.xml` with the real production URL.
