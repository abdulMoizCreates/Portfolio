export function List({ className = '', children, ...props }) {
  return (
    <ul className={`space-y-1 ${className}`} {...props}>
      {children}
    </ul>
  )
}

export function ListItem({ icon: Icon, title, note, right, wrap = false, className = '', ...props }) {
  return (
    <li className={`flex items-center gap-3 rounded-2xl px-2 py-2.5 ${className}`} {...props}>
      {Icon && <Icon className="h-4 w-4 shrink-0 text-teal-bright" aria-hidden="true" />}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold">{title}</p>
        {note && (
          <p
            className={`mt-0.5 text-xs text-faint ${wrap ? 'leading-relaxed' : 'truncate'}`}
          >
            {note}
          </p>
        )}
      </div>
      {right && <div className="shrink-0 text-xs text-faint">{right}</div>}
    </li>
  )
}
