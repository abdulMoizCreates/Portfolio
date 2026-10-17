import { profile, projects, education, stacks, tools, certifications, craft } from '../data'
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, List, ListItem } from './ui'
import {
  Aperture,
  ArrowUpRight,
  Award,
  Download,
  FolderOpen,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  User,
} from 'lucide-react'

export default function Resume() {
  return (
    <section aria-label="Resume">
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="space-y-6">
          {/* Contact strip */}
          <Card>
            <CardContent className="flex flex-col gap-6 pt-6 sm:flex-row sm:items-start sm:justify-between">
              <List className="w-full max-w-md">
                <ListItem icon={Mail} title={profile.email} note="Email" />
                <ListItem icon={MapPin} title={profile.location} note="Based in" />
              </List>
              <div className="no-print flex flex-wrap gap-3">
                <Button onClick={() => window.print()}>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download PDF
                </Button>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-ink/10 px-6 text-xs font-bold uppercase tracking-widest text-ink transition-all hover:bg-ink/15"
                >
                  Email me
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle>
                <User className="h-4 w-4 text-teal-bright" aria-hidden="true" />
                Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="max-w-2xl text-lg leading-relaxed">{profile.tagline}</p>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>
                <Layers className="h-4 w-4 text-teal-bright" aria-hidden="true" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <List>
                {stacks.map((stack) => (
                  <ListItem key={stack.label} wrap title={stack.label} note={stack.items.join('  ·  ')} />
                ))}
                <ListItem wrap title="Foundations" note={tools.join('  ·  ')} />
              </List>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle>
                <GraduationCap className="h-4 w-4 text-teal-bright" aria-hidden="true" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <List>
                {education.map((item) => (
                  <ListItem
                    key={item.title}
                    icon={GraduationCap}
                    title={item.title}
                    note={`${item.place} — ${item.period}`}
                  />
                ))}
              </List>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle>
                <Award className="h-4 w-4 text-teal-bright" aria-hidden="true" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <List>
                {certifications.map((cert) => (
                  <ListItem key={cert.title} icon={Award} title={cert.title} note={cert.issuer} />
                ))}
              </List>
            </CardContent>
          </Card>

          {/* Creative craft */}
          <Card>
            <CardHeader>
              <CardTitle>
                <Aperture className="h-4 w-4 text-teal-bright" aria-hidden="true" />
                Craft beyond the code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <List>
                {craft.map((item) => (
                  <ListItem key={item.title} icon={Aperture} wrap title={item.title} note={item.detail} />
                ))}
              </List>
            </CardContent>
          </Card>

          {/* Selected work */}
          <Card>
            <CardHeader>
              <CardTitle>
                <FolderOpen className="h-4 w-4 text-teal-bright" aria-hidden="true" />
                Selected work
              </CardTitle>
            </CardHeader>
            <CardContent>
              <List>
                {projects.map((project) => (
                  <ListItem
                    key={project.num}
                    icon={ArrowUpRight}
                    title={project.title}
                    note={project.description}
                    right={
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 font-semibold text-faint transition-colors hover:text-teal-bright"
                      >
                        {project.year}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    }
                  />
                ))}
              </List>
            </CardContent>
          </Card>
        </div>

        <Badge variant="accent" className="mt-8">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-teal-bright" aria-hidden="true" />
          {profile.availability}
        </Badge>
      </div>
    </section>
  )
}
