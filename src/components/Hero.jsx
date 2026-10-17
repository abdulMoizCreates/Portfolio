import { ArrowDown, Mail } from 'lucide-react'
import { education, profile } from '../data'
import { Badge, Button } from './ui'

const ticker = ['React', 'Tailwind', 'Supabase', 'Node.js', 'MongoDB', 'AI Visuals', 'Video Editing', 'Blender']

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  const current = education[0]

  return (
    <section id="top" className="relative flex min-h-svh flex-col">
      <div className="mx-auto w-full max-w-6xl px-5 pt-32 sm:px-8 sm:pt-40">
        {/* Meta rail — one status, one identity line, no repeats */}
        <div className="rise flex items-start justify-between gap-6">
          <Badge variant="accent">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-teal-bright" aria-hidden="true" />
            {profile.availability}
          </Badge>
          <p className="hidden text-right text-[11px] font-semibold uppercase leading-loose tracking-[0.25em] text-faint sm:block">
            {profile.role}
            <br />
            {profile.location}
          </p>
        </div>

        {/* The heavy type moment — solid + ghost outline, one focal point */}
        <h1 className="rise rise-1 font-display mt-9 text-[clamp(3.75rem,15.5vw,11.5rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.02em] sm:mt-12">
          <span className="hero-stroke block">Abdul</span>
          <span className="block">
            Moiz<span className="text-teal-bright">.</span>
          </span>
        </h1>

        {/* Story + actions on one baseline */}
        <div className="rise rise-2 mt-10 grid gap-10 sm:mt-14 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-faint">{profile.tagline}</p>
            {current && (
              <p className="mt-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-faint">
                <span className="h-px w-6 bg-ink/30" aria-hidden="true" />
                {current.title} — Saylani WMA · {current.period}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" onClick={() => scrollTo('projects')}>
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

      {/* Skills marquee — invisible container, white words flowing right to left */}
      <div className="mx-auto mt-auto w-full max-w-6xl px-5 pb-6 sm:px-8 sm:pb-8">
        <div className="marquee overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
            {[...ticker, ...ticker].map((word, i) => (
              <span
                key={i}
                className="flex items-center gap-10 text-base font-bold uppercase tracking-[0.3em] text-ink"
              >
                {word}
                <span className="text-teal-bright" aria-hidden="true">
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
