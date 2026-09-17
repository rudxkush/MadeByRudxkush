# Rudra Kushwah — Portfolio

A responsive, single-page portfolio site showcasing my experience, projects, skills, and achievements as a Software Engineer.

**🔗 Live site:** [rudxkush.github.io/MadeByRudxkush](https://rudxkush.github.io/MadeByRudxkush/)

## Overview

Built as a fully static React application — no backend, no database. All content is driven by a single structured data file, making it easy to update without touching component code.

## Features

- **Responsive design** — works across mobile, tablet, and desktop
- **Dark/Light theme toggle** with persisted preference
- **Scroll-triggered animations** via Intersection Observer
- **Sections:** Hero, About, Experience, Projects, Skills, Achievements, Contact
- **Working contact form** — submissions handled via [Formspree](https://formspree.io), no backend required
- **Data-driven content** — all personal/experience/project data lives in one file (`src/data/mock.js`) for easy updates

## Tech Stack

- **React** — component-based UI
- **Tailwind CSS** — utility-first styling
- **shadcn/ui + Radix UI** — accessible, unstyled UI primitives
- **Lucide React** — icon set
- **CRACO** — CRA configuration override (path aliases, build config)
- **Formspree** — serverless contact form handling
- **GitHub Pages** — static hosting/deployment

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── images/              # profile photo, background assets
├── src/
│   ├── components/
│   │   ├── ui/               # shadcn/ui primitives
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── ThemeContext.jsx  # dark/light theme state
│   ├── data/
│   │   └── mock.js           # all portfolio content (single source of truth)
│   ├── hooks/
│   │   ├── use-toast.js
│   │   └── useFadeInOnScroll.js
│   ├── lib/
│   │   └── utils.js
│   ├── App.js
│   └── index.js
├── craco.config.js
├── tailwind.config.js
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### Installation

```bash
cd frontend
npm install --legacy-peer-deps
```

> `--legacy-peer-deps` is needed due to an unused shadcn `date-fns`/`react-day-picker` version mismatch in the dependency tree — it doesn't affect functionality.

### Run locally

```bash
npm start
```
Opens at [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
```

## Deployment

This site is deployed to **GitHub Pages** via the `gh-pages` package.

```bash
npm run deploy
```

This builds the app and pushes the `build/` output to the `gh-pages` branch, which GitHub Pages serves directly. The `homepage` field in `package.json` is set to match the repo's Pages URL so all asset paths resolve correctly.

## Customization

To update the content shown on the site (experience, projects, skills, achievements, contact info), edit:
```
src/data/mock.js
```
No component changes are needed for content updates — components render whatever this file provides.

## Contact

- **Email:** kushwahrudra919@gmail.com
- **LinkedIn:** [linkedin.com/in/rudxkush](https://linkedin.com/in/rudxkush)
- **GitHub:** [github.com/rudxkush](https://github.com/rudxkush)
