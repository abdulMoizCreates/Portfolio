import { useEffect, useRef, useState } from 'react'
import SectionHead from './Section'
import { meters, skills, tools } from '../data'
import { Badge, Card, CardContent, CardHeader, CardTitle, Progress, Search, Slider } from './ui'
import { Braces, Code2, Frame, GitBranch, PenTool, SlidersHorizontal, Wind, Zap } from 'lucide-react'

const toolIcons = {
  HTML5: Code2,
  CSS3: PenTool,
  JavaScript: Braces,
  'Tailwind CSS': Wind,
  'Git & GitHub': GitBranch,
  Vite: Zap,
  'Figma (basics)': Frame,
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
    <section id="skills" className="scroll-mt-16 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead index="02" title="Skills" />

        {/* Search card — filters the list live, "/" focuses it */}
        <Card className="mb-10 max-w-xl">
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

        {/* Big typographic skill list — hover inverts the row */}
        <ul>
          {filtered.map((skill, index) => (
            <li
              key={skill.name}
              className="group flex items-baseline gap-5 border-b border-ink/10 py-5 transition-colors last:border-b-0 hover:bg-ink sm:gap-8"
            >
              <span className="font-display w-8 shrink-0 text-sm font-bold text-teal-bright transition-colors group-hover:text-teal">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-2xl font-bold uppercase tracking-tight transition-all group-hover:translate-x-2 group-hover:text-paper sm:text-4xl">
                {skill.name}
              </span>
              <span className="ml-auto hidden text-sm text-faint transition-colors group-hover:text-paper/70 sm:block">
                {skill.note}
              </span>
            </li>
          ))}
        </ul>

        {filtered.length === 0 && filteredTools.length === 0 && (
          <p className="py-10 text-sm text-faint">
            Nothing matches “{query}” — try another term.
          </p>
        )}

        {/* Stack meters card — draggable sliders + shared progress */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
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

          <div className="space-y-6">
            {/* Average comfort progress card */}
            <Card hover>
              <CardContent className="pt-6">
                <div className="mb-3 flex items-baseline justify-between gap-4">
                  <p className="text-sm font-semibold">Average comfort</p>
                  <span className="font-display text-sm font-bold text-teal-bright">
                    {Math.round(avg)}%
                  </span>
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
                    const Icon = toolIcons[tool]
                    return (
                      <Badge key={tool} variant="default" className="px-3.5 py-1.5">
                        {Icon && <Icon className="h-3.5 w-3.5 text-teal-bright" aria-hidden="true" />}
                        {tool}
                      </Badge>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
