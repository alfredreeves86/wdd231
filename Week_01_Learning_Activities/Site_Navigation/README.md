# WDD 231 — Web Frontend Development I

Course repository for BYUI WDD 231 (Fall 2026).

## Project Structure

```
wdd231/
├── index.html              # Week 1: Course Home Page
├── images/
│   └── home.svg            # Logo (Heroicons Outline)
├── scripts/
│   └── navigation.js       # Mobile nav toggle, accessibility
├── styles/
│   ├── normalize.css       # Minimal reset
│   ├── base.css            # Mobile-first: hide nav, hamburger, wayfinding
│   └── larger.css          # Desktop (≥768px): flex horizontal nav
├── chamber/                # Weeks 2–5: Chamber of Commerce project
└── project/                # Week 6: Capstone project
```

## Week 1 Deliverable

**Course Home Page** — Responsive navigation with:
- Mobile: Hamburger menu (tap to show/hide), animated ☰ → ✕
- Desktop: Horizontal flex navigation, hamburger hidden
- Wayfinding: Active page highlighted (`aria-current="page"` + `.current`)
- Accessibility: `aria-expanded`, semantic `<nav>`, `<ul>`/`<li>`/`<a>` structure

## Development

```bash
open index.html
npx serve .
```

## Deployment

GitHub Pages enabled from `main` branch / root (`/`).