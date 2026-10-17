import { useEffect, useRef, useState } from 'react'
import SectionHead from './Section'
import { meters, skills, tools } from '../data'
import { Badge, Card, CardContent, CardHeader, CardTitle, CountUp, Progress, Reveal, Search, Slider } from './ui'
import {
  ArrowLeftRight,
  Atom,
  BookOpen,
  Braces,
  Code2,
  Database,
  Feather,
  Film,
  Frame,
  GitBranch,
  Component,
  Hexagon,
  Leaf,
  Palette,
  PenTool,
  Route,
  SlidersHorizontal,
  Sparkles,
  Wind,
  Zap,
} from 'lucide-react'

const toolIcons = {
  HTML5: Code2,
  CSS3: PenTool,
  JavaScript: Braces,
  Axios: ArrowLeftRight,
  Vite: Zap,
  'shadcn/ui': Component,
  Lucide: Feather,
  'Figma (basics)': Frame,
  'Git & GitHub': GitBranch,
}

// One mark per skill — the card's heading glyph
const skillIcons = {
  React: Atom,
  'Tailwind CSS': Wind,
  Supabase: Database,
  'Node.js': Hexagon,
  Express: Route,
  MongoDB: Leaf,
  'AI Visuals': Sparkles,
  'Video Editing': Film,
  Storytelling: BookOpen,
  Canva: Palette,
}

export default function Skills() {
  const [query, setQuery] = useState('')
  const [levels, setLevels] = useState(() => Object.fromEntries(meters.map((m) => [m.name, m.value])))
  const inputRef = useRef(null)

  // Press "/" anywhere to jump to search (unless typing in a field)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const q = query.trim().toLowerCase()
  const filtered = skills.filter(
    (s) => s.name.toLowerCase().includes(q) || s.note.toLowerCase().includes(q),
  )
  const filteredTools = tools.filter((t) => t.toLowerCase().includes(q))
  const avg = meters.reduce((sum, m) => sum + (levels[m.name] ?? m.value), 0) / meters.length

  return (
    <section id="skills" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead title="Skills" />

        {/* Search card — filters the grid live, "/" focuses it */}
        <Reveal as="div" className="mb-10 max-w-xl">
          <Card>
            <CardContent className="pt-6">
              <Search
                ref={inputRef}
                type="search"
                placeholder="Search skills, tools, frameworks…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search skills"
              />
            </CardContent>
          </Card>
        </Reveal>

        {/* Skill cards — the invert-on-hover legacy of the old list, now as tiles */}
        <div className="grid gap-5 sm:grid-cols-2">
          {filtered.map((skill, index) => {
            const Icon = skillIcons[skill.name]
            return (
              <Reveal key={skill.name} as="div" className="h-full" delay={Math.min(index, 4) * 60}>
                <Card className="group h-full cursor-default transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:shadow-[0_34px_90px_-26px_rgb(45_212_191/0.4)]">
                  <CardContent className="flex h-full flex-col pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-bright/10 transition-colors group-hover:bg-teal/15">
                        {Icon && (
                          <Icon
                            className="h-5 w-5 text-teal-bright transition-colors group-hover:text-teal"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                      <span className="font-display text-xs font-bold text-ink/20 transition-colors group-hover:text-paper/40">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="font-display mt-6 text-xl font-bold uppercase tracking-tight transition-colors group-hover:text-paper sm:text-2xl">
                      {skill.name}
                    </h3>
                    <p className="mt-auto pt-4 text-sm leading-relaxed text-faint transition-colors group-hover:text-paper/70">
                      {skill.note}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>

        {filtered.length === 0 && filteredTools.length === 0 && (
          <p className="py-10 text-sm text-faint">
            Nothing matches “{query}” — try another term.
          </p>
        )}

        {/* Stack meters card — draggable sliders + shared progress */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal as="div">
            <Card hover>
              <CardHeader>
                <CardTitle>
                  <SlidersHorizontal className="h-4 w-4 text-teal-bright" aria-hidden="true" />
                  Stack meters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  {meters.map((m) => (
                    <div key={m.name}>
                      <div className="mb-2.5 flex items-baseline justify-between gap-4">
                        <span className="text-sm font-semibold">{m.name}</span>
                        <span className="font-display text-xs font-bold text-teal-bright">
                          {levels[m.name]}%
                        </span>
                      </div>
                      <Slider
                        value={levels[m.name]}
                        onChange={(e) => setLevels((l) => ({ ...l, [m.name]: Number(e.target.value) }))}
                        aria-label={`${m.name} comfort level`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal as="div" className="space-y-6" delay={120}>
            {/* Average comfort progress card */}
            <Card hover>
              <CardContent className="pt-6">
                <div className="mb-3 flex items-baseline justify-between gap-4">
                  <p className="text-sm font-semibold">Average comfort</p>
                  <CountUp
                    to={Math.round(avg)}
                    suffix="%"
                    className="font-display text-sm font-bold text-teal-bright"
                  />
                </div>
                <Progress value={avg} />
                <p className="mt-3 text-xs leading-relaxed text-faint">
                  Drag the meters — this bar recalculates live.
                </p>
              </CardContent>
            </Card>

            {/* Foundations badges */}
            <Card hover>
              <CardContent className="pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-faint">
                  Foundations &amp; tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {filteredTools.map((tool) => {
                    const ToolIcon = toolIcons[tool]
                    return (
                      <Badge key={tool} variant="default" className="px-3.5 py-1.5">
                        {ToolIcon && (
                          <ToolIcon className="h-3.5 w-3.5 text-teal-bright" aria-hidden="true" />
                        )}
                        {tool}
                      </Badge>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
