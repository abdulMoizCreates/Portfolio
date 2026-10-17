import { ArrowDown, Mail } from 'lucide-react'
import { profile } from '../data'
import { Badge, Button } from './ui'

const ticker = ['React', 'Tailwind', 'Supabase', 'Node.js', 'MongoDB', 'AI Visuals', 'Video Editing', 'Blender']

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-6xl px-5 pt-36 pb-14 sm:px-8 sm:pt-44 sm:pb-20">
        <div className="rise">
          <Badge variant="accent">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-teal-bright" aria-hidden="true" />
            {profile.role} — {profile.location}
          </Badge>
        </div>

        {/* The heavy type moment */}
        <h1 className="rise rise-1 font-display mt-7 text-[clamp(3.5rem,14vw,10.5rem)] font-extrabold uppercase leading-[0.88] tracking-tight">
          Abdul
          <br />
          Moiz<span className="text-teal-bright">.</span>
        </h1>

        <div className="rise rise-2 mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-base leading-relaxed text-faint">{profile.tagline}</p>

          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="lg" onClick={() => scrollTo('projects')}>
              View Work
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollTo('contact')}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Floating paper marquee slab — the inverted moment on the dark page */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="marquee overflow-hidden rounded-full bg-ink py-3.5 shadow-[0_20px_60px_-24px_rgb(0_0_0/0.8)]">
          <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
            {[...ticker, ...ticker].map((word, i) => (
              <span
                key={i}
                className="flex items-center gap-8 text-sm font-bold uppercase tracking-[0.25em] text-paper"
              >
                {word}
                <span className="text-teal" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
