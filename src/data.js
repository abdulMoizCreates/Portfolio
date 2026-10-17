// ════════════════════════════════════════════════════════════════════════════
//  YOUR DETAILS — edit this single file to make the portfolio yours.
//  Look for the "TODO" marks and swap in your real info.
// ════════════════════════════════════════════════════════════════════════════

export const profile = {
  name: 'Abdul Moiz',
  initials: 'AM.',
  role: 'Front-End Developer',
  tagline:
    'I build clean, responsive interfaces with React and Tailwind CSS — turning what I learn into real, working products.',
  email: 'abdulmoiz.creates@gmail.com', // TODO: replace with your real email
  location: 'Karachi, Pakistan', // TODO: replace with your city
  availability: 'Open to internships & junior roles',
  github: 'https://github.com/abdulMoizCreates', // TODO: replace with your username
  linkedin: 'https://www.linkedin.com/in/abdul-moiz-522607437/', // TODO: replace with your handle
}

export const facts = [
  { label: 'Location', value: 'Karachi, Pakistan' },
  { label: 'Focus', value: 'Front-End / Web Apps' },
  { label: 'Status', value: 'Open to internships' },
]

export const skills = [
  { name: 'React', note: 'components, hooks & state' },
  { name: 'Next.js', note: 'App Router, SSR & API routes' },
  { name: 'Express', note: 'REST APIs & middleware' },
  { name: 'MongoDB', note: 'schemas, CRUD & aggregation' },
  { name: 'Adobe Premiere Pro', note: 'video editing & pacing' },
  { name: 'After Effects', note: 'motion graphics & VFX' },
  { name: 'Illustrator', note: 'vector art & logo design' },
  { name: 'Photoshop', note: 'raster & photo composites' },
  { name: 'Canva', note: 'fast brand & social layouts' },
  { name: 'AI Filmmaking Tools', note: 'script-to-screen workflows' },
]

export const tools = ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Git & GitHub', 'Vite', 'Figma (basics)']

// Skill groupings used on the Resume page
export const stacks = [
  { label: 'Web Development', items: ['React', 'Next.js', 'Express', 'MongoDB'] },
  {
    label: 'Creative Suite',
    items: ['Adobe Premiere Pro', 'After Effects', 'Illustrator', 'Photoshop', 'Canva'],
  },
  { label: 'AI Media', items: ['AI Filmmaking Tools'] },
]

// Comfort meters rendered as sliders on the Skills page (0–100)
export const meters = [
  { name: 'React', value: 70 },
  { name: 'Next.js', value: 60 },
  { name: 'Express', value: 55 },
  { name: 'MongoDB', value: 50 },
  { name: 'Adobe Premiere Pro', value: 75 },
  { name: 'After Effects', value: 65 },
]

export const projects = [
  {
    num: '01',
    title: 'TaskFlow',
    year: '2026',
    description:
      'A task manager built with React — add, complete, delete and filter tasks, with state persisted to localStorage.',
    tags: ['React', 'LocalStorage'],
    link: 'https://github.com/abdulmoiz', // TODO: real repo link
  },
  {
    num: '02',
    title: 'SkyCast',
    year: '2026',
    description:
      'A weather dashboard that fetches live data from a public API and shows current conditions with a 5-day forecast.',
    tags: ['JavaScript', 'REST API'],
    link: 'https://github.com/abdulmoiz', // TODO: real repo link
  },
  {
    num: '03',
    title: 'WMA Assignments Hub',
    year: '2025',
    description:
      'A single page that organises all my Web & Mobile App Development coursework from Saylani, week by week.',
    tags: ['HTML', 'CSS', 'JS'],
    link: 'https://github.com/abdulmoiz', // TODO: real repo link
  },
  {
    num: '04',
    title: 'Portfolio v1',
    year: '2025',
    description:
      'My first hand-coded portfolio in plain HTML and CSS — the fossil record of how far I have come.',
    tags: ['HTML', 'CSS'],
    link: 'https://github.com/abdulmoiz', // TODO: real repo link
  },
]

export const education = [
  {
    title: 'Web & Mobile App Development',
    place: 'Saylani Mass IT Training (WMA)',
    period: '2025 — 2026',
  },
]
