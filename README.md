# 03-Portfolio — Abdul Moiz

A dark, minimal, premium portfolio built with **React + Tailwind CSS (v4) + Vite**.
SPA routing: `#/` (everything, with hero), `#/about`, `#/skills`, `#/projects`, `#/resume`, `#/contact`.

## Run it locally

```bash
npm install
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview the production build
```

## Make it yours

Everything editable lives in **one file**: [`src/data.js`](src/data.js)

- Name, role, tagline, email, location
- GitHub / LinkedIn links (search for `TODO`)
- Skills, tools, projects, education

Replace the placeholder projects and links with your real work, then ship it.

## Structure

```
src/
├── data.js                ← ✏️ all your content (edit this)
├── App.jsx                ← router (HashRouter) + layout
├── index.css              ← Tailwind + dark theme tokens + fonts
├── pages/                 ← routed pages (reuse the section components)
│   ├── HomePage.jsx   ├── AboutPage.jsx   ├── SkillsPage.jsx
│   ├── ProjectsPage.jsx   ├── ResumePage.jsx
│   └── ContactPage.jsx
└── components/
    ├── Navbar.jsx     ├── Hero.jsx      ├── About.jsx
    ├── Skills.jsx     ├── Projects.jsx  ├── Contact.jsx
    ├── Resume.jsx     ├── Section.jsx   ├── PageHead.jsx
    ├── NextLink.jsx   ├── ScrollToTop.jsx
    └── Footer.jsx
```

## Deploy (free options)

- **Vercel / Netlify** — import the repo, framework preset "Vite", done.
- **GitHub Pages** — `npm run build`, publish the `dist/` folder.
