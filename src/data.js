// ════════════════════════════════════════════════════════════════════════════
//  YOUR DETAILS — edit this single file to make the portfolio yours.
// ════════════════════════════════════════════════════════════════════════════

export const profile = {
  name: 'Abdul Moiz',
  initials: 'AM.',
  role: 'Creative Front-End Developer',
  tagline:
    'I build web interfaces the way I cut films — with story, pacing and feel. Learning full-stack web dev at Saylani IT, crafting AI visuals and video edits on the side.',
  email: 'hello@abdulmoiz.dev', // TODO: replace with your real email
  location: 'Karachi, Pakistan', // TODO: replace with your city
  availability: 'Open to internships & junior roles',
  github: 'https://github.com/abdulMoizCreates',
  linkedin: 'https://www.linkedin.com/in/abdul-moiz-522607437/',
}

export const facts = [
  { label: 'Location', value: 'Karachi, Pakistan' },
  { label: 'Focus', value: 'Creative Web — React & MERN' },
  { label: 'Status', value: 'Open to internships' },
]

// Big numbered list on the Skills page
export const skills = [
  { name: 'React', note: 'components, hooks & state' },
  { name: 'Tailwind CSS', note: 'utility-first styling' },
  { name: 'Supabase', note: 'auth, database & storage' },
  { name: 'Node.js', note: 'JavaScript on the server' },
  { name: 'Express', note: 'REST APIs & middleware' },
  { name: 'MongoDB', note: 'schemas, CRUD & aggregation' },
  { name: 'AI Visuals', note: 'generating & refining imagery' },
  { name: 'Video Editing', note: 'pacing, cuts & sound' },
  { name: 'Storytelling', note: 'scenes, arcs & rhythm' },
  { name: 'Canva', note: 'certified design essentials' },
]

// Foundations chips + tool icons (Lucide) on the Skills page
export const tools = ['HTML5', 'CSS3', 'JavaScript', 'Axios', 'Vite', 'shadcn/ui', 'Lucide', 'Git & GitHub']

// Skill groupings used on the Resume page
export const stacks = [
  { label: 'Web Development', items: ['React', 'Tailwind CSS', 'Supabase', 'Node.js', 'Express', 'MongoDB'] },
  { label: 'Tooling & Libraries', items: ['Axios', 'Vite', 'shadcn/ui', 'Lucide', 'Git & GitHub'] },
  { label: 'Creative', items: ['AI visuals', 'Video editing & storytelling', 'Canva', 'Blender'] },
]

// Comfort meters rendered as sliders on the Skills page (0–100)
export const meters = [
  { name: 'React', value: 75 },
  { name: 'Tailwind CSS', value: 80 },
  { name: 'Supabase', value: 60 },
  { name: 'Express', value: 55 },
  { name: 'MongoDB', value: 55 },
  { name: 'Video Editing', value: 85 },
]

// Certifications on the About & Resume cards
export const certifications = [
  { title: 'Canva Essentials', issuer: 'The Canva Team' },
  { title: 'Graphic Design Essentials', issuer: 'The Canva Team' },
  { title: 'Video Editing & Freelancing', issuer: 'DigiSkills.pk' },
  { title: 'HTML & CSS Essentials', issuer: 'Cisco' },
]

// Self-taught creative craft (YouTube lens)
export const craft = [
  {
    title: '3D Animation — Blender',
    detail:
      'Modeling, shading, animation, physics, rendering, particle systems, baking, environments & UV textures.',
    image: '/images/craft-3d.jpg',
    imageAlt: 'Abstract flowing 3D forms rendered in grayscale',
  },
  {
    title: 'Photography',
    detail: 'Composition, framing and lighting — and how each shapes a scene to tell a story.',
    image: '/images/craft-photography.jpg',
    imageAlt: 'Camera body and prime lenses laid out on dark wood, in monochrome',
  },
  {
    title: 'Filmmaking',
    detail:
      'Camera movements, angles and settings — aperture, shutter, ISO, rule of thirds, golden ratio, leading lines & symmetry.',
    image: '/images/craft-filmmaking.jpg',
    imageAlt: 'Film slate raised on a bright outdoor set — scene coming in',
  },
]

export const projects = [
  {
    num: '01',
    title: 'TaskFlow',
    year: '2026',
    description:
      'A task manager built with React — add, complete, delete and filter tasks, with state persisted to localStorage.',
    tags: ['React', 'LocalStorage'],
    image: '/images/proj-taskflow.jpg',
    imageAlt: 'Laptop on a studio desk with code on screen, in monochrome',
    link: 'https://github.com/abdulMoizCreates?tab=repositories', // TODO: swap for the project's real repo link
  },
  {
    num: '02',
    title: 'SkyCast',
    year: '2026',
    description:
      'A weather dashboard that fetches live data from a public API and shows current conditions with a 5-day forecast.',
    tags: ['JavaScript', 'REST API'],
    image: '/images/proj-skycast.jpg',
    imageAlt: 'Starry night sky with a shooting star over dark mountains, in monochrome',
    link: 'https://github.com/abdulMoizCreates?tab=repositories', // TODO: swap for the project's real repo link
  },
  {
    num: '03',
    title: 'WMA Assignments Hub',
    year: '2025',
    description:
      'A single page that organises all my Web & Mobile App Development coursework from Saylani, week by week.',
    tags: ['HTML', 'CSS', 'JS'],
    image: '/images/proj-wma.jpg',
    imageAlt: 'Dark code editor glowing on a laptop beside a window, in monochrome',
    link: 'https://github.com/abdulMoizCreates?tab=repositories', // TODO: swap for the project's real repo link
  },
  {
    num: '04',
    title: 'Portfolio v1',
    year: '2025',
    description:
      'My first hand-coded portfolio in plain HTML and CSS — the fossil record of how far I have come.',
    tags: ['HTML', 'CSS'],
    image: '/images/proj-portfolio.jpg',
    imageAlt: 'Hand-drawn website wireframe sketches, in monochrome',
    link: 'https://github.com/abdulMoizCreates?tab=repositories', // TODO: swap for the project's real repo link
  },
]

export const education = [
  {
    title: 'Web & Mobile App Development',
    place: 'Saylani Mass IT Training (WMA)',
    period: '2025 — 2026',
  },
]
