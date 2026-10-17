export default function SectionHead({ index, title }) {
  return (
    <div className="mb-12 flex items-baseline gap-4 border-b border-ink/10 pb-6 sm:mb-16">
      <span className="font-display text-sm font-bold text-teal-bright">({index})</span>
      <h2 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
        {title}
      </h2>
    </div>
  )
}
