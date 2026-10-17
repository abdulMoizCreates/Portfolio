import SectionHead from './Section'
import { profile, projects } from '../data'
import { Badge, Card, CardContent, CardFooter } from './ui'
import { ArrowUpRight, FolderGit2 } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead index="03" title="Projects" />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.num}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block"
              aria-label={`${project.title} — open on GitHub`}
            >
              <Card hover className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-bright/10">
                      <FolderGit2 className="h-4.5 w-4.5 text-teal-bright" aria-hidden="true" />
                    </span>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{project.num}</Badge>
                      <Badge variant="default">{project.year}</Badge>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight transition-colors group-hover:text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-faint">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <span className="flex w-full items-center justify-between text-[11px] font-bold uppercase tracking-widest text-faint transition-colors group-hover:text-ink">
                    <span className="flex items-center gap-2">
                      View
                      <ArrowUpRight
                        className="h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-bright"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="flex items-center gap-2 text-[10px] opacity-60">
                      GitHub
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </span>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>

        <p className="mt-10 text-sm text-faint">
          More on{' '}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:text-teal-bright hover:decoration-teal-bright"
          >
            GitHub
          </a>{' '}
          — new projects land here as I finish them.
        </p>
      </div>
    </section>
  )
}
