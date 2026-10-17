import { Link } from 'react-router-dom'

export default function NextLink({ to, label }) {
  return (
    <div className="no-print mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
      <Link to={to} className="group block border-t border-ink/10 pt-8 sm:pt-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-faint">Up next</p>
        <p className="font-display mt-2 flex items-center gap-4 text-4xl font-bold uppercase tracking-tight sm:text-6xl">
          {label}
          <span
            className="text-ink/20 transition-all group-hover:translate-x-2 group-hover:text-teal-bright"
            aria-hidden="true"
          >
            ↗
          </span>
        </p>
      </Link>
    </div>
  )
}
