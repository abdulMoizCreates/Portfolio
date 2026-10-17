import SectionHead from './Section'
import { facts, education, profile } from '../data'
import { Badge, Card, CardContent, List, ListItem } from './ui'
import { GraduationCap, LocateFixed, Send, Target } from 'lucide-react'

const icons = { Location: LocateFixed, Focus: Target, Status: Send }

export default function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead index="01" title="About" />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-xl space-y-5 text-lg leading-relaxed">
            <p>
              {profile.name} — front-end developer from {profile.location}, studying Web &amp; Mobile
              App Development at Saylani WMA. I build clean, responsive interfaces with React and
              Tailwind CSS.
            </p>
            <p className="text-faint">
              Learning the MERN stack one project at a time — and cutting videos, motion graphics
              and AI film experiments on the side.
            </p>
          </div>

          {/* Facts card */}
          <Card hover>
            <CardContent className="pt-6">
              <List>
                {facts.map((fact) => (
                  <ListItem
                    key={fact.label}
                    icon={icons[fact.label] || LocateFixed}
                    title={fact.value}
                    note={fact.label}
                  />
                ))}
              </List>
            </CardContent>
          </Card>
        </div>

        {/* Education card */}
        {education.map((item) => (
          <Card key={item.title} hover className="mt-6">
            <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-teal-bright/25 bg-teal-bright/10">
                  <GraduationCap className="h-4.5 w-4.5 text-teal-bright" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display font-bold">{item.title}</p>
                  <p className="mt-0.5 text-sm text-faint">{item.place}</p>
                </div>
              </div>
              <Badge variant="outline">{item.period}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
