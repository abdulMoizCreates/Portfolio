export default function Progress({ value = 0, className = '' }) {
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-ink/10 ${className}`} role="progressbar" aria-valuenow={Math.round(value)}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-teal to-teal-bright transition-[width] duration-700 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
