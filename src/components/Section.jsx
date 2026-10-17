import { Reveal } from './ui'

export default function SectionHead({ index, title }) {
  return (
    <Reveal as="div" className="mb-10 flex items-baseline gap-4 sm:mb-14">
      <span className="font-display text-sm font-bold text-teal-bright">({index})</span>
      <h2 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  )
}
