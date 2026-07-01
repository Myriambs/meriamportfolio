# Meriam Ben Salah — Portfolio

A premium, dark-themed portfolio built with React, Vite, Tailwind CSS v4, Three.js
(react-three-fiber), GSAP/Framer Motion, and Lenis smooth scroll. Content is sourced
directly from the CV — nothing fabricated.

## Design direction

Instead of a generic "AI hologram" look, the visual identity is a structured QA / lab-notebook
aesthetic: monospace stats, status tags (PASS / SHIPPED), a terminal-style hero log that
"runs" real numbers from the CV, and a 3D orbiting skills system where each ring is a skill
category and each node a real tool. Palette: near-black ink #0A0E12, warm paper #F5F3EE,
signal teal #7DD3C0, flag red #E8664A, slate #8B92A0.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/
    layout/        Nav, Footer, Loader (boot sequence)
    hero/           Hero.jsx — headline + terminal log + stats
    about/          About.jsx — career transition timeline
    skills/         Skills.jsx — wraps the 3D orbit + detail panel
    projects/       Projects.jsx — expandable project cards
    experience/     Experience.jsx — role timeline with stats
    certifications/ Certifications.jsx — flip cards + education
    contact/        Contact.jsx — form (EmailJS) + social links
  scenes/
    ParticleField.jsx   Hero background (particles + grid), perf-scaled
    SkillsOrbit.jsx     3D interactive skills galaxy
  data/
    profile.js      ALL content — sourced from the CV, edit here only
  hooks/
    useLenis.js             smooth scroll
    usePerformanceTier.js   detects device capability, scales 3D complexity
public/
  cv/Meriam_Ben_Salah_QA.pdf   downloadable CV (linked from Nav + Hero)
```

## Editing content

Everything text-based (stats, bullets, project descriptions, certifications) lives in
src/data/profile.js. Update the CV, update that file, and the whole site updates.

## Contact form (EmailJS)

The contact form is wired to EmailJS but needs your own credentials:

1. Create a free account at https://www.emailjs.com
2. Create an email service + template
3. Create a .env file in the project root:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Restart npm run dev

Until configured, the form shows a friendly message pointing to your email link instead of failing silently.

## Performance

- usePerformanceTier detects mobile/low-core devices and reduces particle count and 3D
  detail automatically (or disables 3D entirely if the OS-level "reduce motion" setting is on,
  falling back to a static skills list).
- Three.js and vendor libs are split into separate chunks (see vite.config.js) so the initial
  JS payload stays smaller.
- All animations respect prefers-reduced-motion.

## Deployment

Any static host works since this is a Vite SPA build:

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm run build
netlify deploy --prod --dir=dist
```

**GitHub Pages**
Set base: '/your-repo-name/' in vite.config.js, then build and deploy the dist/ folder
with your preferred GitHub Pages action.

## What's simplified vs. the original brief (and how to extend)

To ship something real and performant rather than an over-scoped prototype, a few things were
scoped down deliberately — all are extendable from the existing structure:

- Skills galaxy uses lightweight instanced spheres + orbit math rather than full physics —
  swap in @react-three/rapier in SkillsOrbit.jsx if you want real physics later.
- Projects use an expand/collapse pattern rather than full camera-zoom-into-3D-cube — this
  keeps them fast and accessible; a Three.js camera-fly version can be added per project ID.
- EmailJS requires your own account credentials (can't be pre-provisioned for you).
- Add your professional photo by placing it in src/assets/images/ and swapping it in for the
  monogram in Hero.jsx if you'd rather show a photo than the "MB" mark.
