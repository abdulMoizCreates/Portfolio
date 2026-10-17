import { Reveal } from './ui'

export default function SectionHead({ title }) {
  return (
    <Reveal as="div" className="mb-10 flex items-center gap-4 sm:mb-14">
      {/* Gradient accent dash — the same gradient language as the progress bars */}
      <span
        aria-hidden="true"
        className="h-1.5 w-8 shrink-0 rounded-full bg-gradient-to-r from-teal to-teal-bright"
      />
      <h2 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  )
}
