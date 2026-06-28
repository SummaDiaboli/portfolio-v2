# Salim Hussaini — Portfolio

Personal portfolio website built with Astro and deployed on Cloudflare Pages.

Live at [salimhussaini.dev](https://salimhussaini.dev)

## Tech Stack

- [Astro](https://astro.build/) — web framework
- [TypeScript](https://www.typescriptlang.org/) — type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [GSAP](https://gsap.com/) — animations
- [Cloudflare Pages](https://pages.cloudflare.com/) — deployment

## Getting Started

```bash
pnpm install
pnpm dev       # start dev server
pnpm build     # production build
pnpm preview   # preview build locally (via Wrangler)
pnpm deploy    # deploy to Cloudflare Pages
```

## Project Structure

```
src/
  components/   # reusable Astro components
  layouts/      # page layouts
  pages/        # routes
  utils/        # profile data and helpers
  styles/       # global CSS
public/         # static assets (favicon, resume PDF, OG image)
```

All content — work history, skills, education — lives in `src/utils/profileData.ts`.
