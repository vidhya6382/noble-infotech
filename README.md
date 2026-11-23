# Noble Infotech — Company Website (Frontend Only)

Next.js (App Router) · JavaScript · React · CSS3 · Framer Motion · Lucide React

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build: `npm run build` then `npm start`

## Pages

| Route | Page |
|---|---|
| `/` | Home: hero, intro, services, why us, stats, projects, testimonials, CTA |
| `/about` | Overview, mission & vision, values, process, team, achievements |
| `/services` | 8 service sections with sticky jump bar (`/services#seo` etc.) |
| `/testimonials` | Rating summary, slider, all reviews |
| `/contact` | Validated contact form, details, socials, map placeholder |

## Folder structure

```
public/               favicon + images/fallback.svg (shown if an image fails)
src/
  app/                layout.js, globals.css, page.js + one folder per page
  components/         Navbar, Footer, Hero, ServiceCard, ProjectCard,
                      TestimonialSlider, ContactForm, ...
  data/               services.js, projects.js, testimonials.js, site.js (mock data)
  lib/
    api.js            ← ALL backend calls live here
    validation.js     contact form validation
```

## Backend integration (for the backend developer)

1. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL`.
2. Everything goes through `src/lib/api.js`:
   - `getServices()` → `GET /api/services`
   - `getProjects()` → `GET /api/projects`
   - `getTestimonials()` → `GET /api/testimonials`
   - `submitContactForm(data)` → `POST /api/contact` with `{ name, email, phone, subject, message }`
3. While `NEXT_PUBLIC_API_URL` is empty, the site uses the mock data in `src/data/`.
4. Newsletter signup: see the `BACKEND:` comment in `src/components/Footer.jsx`.

Search the code for `BACKEND` to find every integration point.

## Images

Images load from Unsplash. To use your own, put files in `public/images/` and change
the `image` paths in `src/data/*.js` (e.g. `"/images/my-project.jpg"`).

## Before going live — update these

- `src/data/site.js` → email, working hours, social media links, stats (marked `UPDATE`)
- `src/data/testimonials.js` → replace sample reviews with real client feedback, set `isSample: false`
- `src/data/projects.js` → replace sample projects with your real work and photos, set `isSample: false`
- Logo: put your logo in `public/images/` and use it in `src/components/Logo.jsx`
