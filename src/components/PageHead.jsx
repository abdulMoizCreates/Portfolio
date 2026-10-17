import { profile } from '../data'

export default function PageHead({ title, blurb }) {
  return (
    <div className="no-print mx-auto max-w-6xl px-5 pt-32 pb-10 sm:px-8 sm:pt-40 sm:pb-14">
      <div className="rise flex items-center gap-3">
        <span className="pulse-dot h-2 w-2 rounded-full bg-teal-bright" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-faint">
          {profile.role} — {profile.location}
        </p>
      </div>

      <h1 className="rise rise-1 font-display mt-6 text-[clamp(3.25rem,11vw,8rem)] font-extrabold uppercase leading-[0.9] tracking-tight">
        {title}
        <span className="text-teal-bright">.</span>
      </h1>

      {blurb && (
        <p className="rise rise-2 mt-6 max-w-xl text-base leading-relaxed text-faint">{blurb}</p>
      )}
    </div>
  )
}
