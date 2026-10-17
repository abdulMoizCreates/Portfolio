export default function Switch({ checked, onCheckedChange, label, className = '' }) {
  return (
    <label className={`inline-flex cursor-pointer select-none items-center gap-3 ${className}`}>
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
      />
      {/* Track + knob */}
      <span
        aria-hidden="true"
        className="relative h-6 w-11 shrink-0 rounded-full border border-ink/15 bg-ink/10 transition-colors after:absolute after:left-1 after:top-1/2 after:h-4 after:w-4 after:-translate-y-1/2 after:rounded-full after:bg-faint after:transition-all after:content-[''] peer-checked:border-teal/60 peer-checked:bg-teal peer-checked:after:translate-x-5 peer-checked:after:bg-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-teal-bright peer-focus-visible:outline-offset-2"
      />
      {label && (
        <span className="text-xs font-semibold uppercase tracking-widest text-faint">{label}</span>
      )}
    </label>
  )
}
