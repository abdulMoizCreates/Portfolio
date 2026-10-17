import SectionHead from './Section'
import { facts, education, certifications, craft, profile } from '../data'
import { Badge, Card, CardContent, List, ListItem } from './ui'
import {
  Aperture,
  Award,
  Boxes,
  Clapperboard,
  GraduationCap,
  LocateFixed,
  Send,
  Target,
} from 'lucide-react'

const factIcons = { Location: LocateFixed, Focus: Target, Status: Send }

const craftIcons = {
  '3D Animation — Blender': Boxes,
  Photography: Aperture,
  Filmmaking: Clapperboard,
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead index="01" title="About" />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-xl space-y-5 text-lg leading-relaxed">
            <p>
              {profile.name} — creative front-end developer from {profile.location}, learning Web
              &amp; Mobile App Development at Saylani IT. I build with React, Tailwind and
              Supabase — and I cut videos and shape AI visuals with the same obsession: story,
              pacing and feel.
            </p>
            <p className="text-faint">
              Certified in Canva design and video editing, self-taught in Blender, photography and
              filmmaking — that craft bleeds into every interface I build.
            </p>
          </div>

          {/* Facts card */}
          <Card hover>
            <CardContent className="pt-6">
              <List>
                {facts.map((fact) => (
                  <ListItem
                    key={fact.label}
                    icon={factIcons[fact.label] || LocateFixed}
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
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-bright/10">
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

        {/* Craft beyond the code */}
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {craft.map((item) => {
            const Icon = craftIcons[item.title] || Aperture
            return (
              <Card key={item.title} hover>
                <CardContent className="pt-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-bright/10">
                    <Icon className="h-4.5 w-4.5 text-teal-bright" aria-hidden="true" />
                  </span>
                  <p className="font-display mt-4 font-bold">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-faint">{item.detail}</p>
                  <Badge variant="default" className="mt-4">
                    YouTube lens
                  </Badge>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Certifications */}
        <Card hover className="mt-6">
          <CardContent className="pt-6">
            <div className="mb-4 flex items-center gap-2.5">
              <Award className="h-4 w-4 text-teal-bright" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-widest text-faint">
                Certifications
              </p>
            </div>
            <List>
              {certifications.map((cert) => (
                <ListItem key={cert.title} icon={Award} title={cert.title} note={cert.issuer} />
              ))}
            </List>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
