export function List({ className = '', children, ...props }) {
  return (
    <ul className={`divide-y divide-ink/10 ${className}`} {...props}>
      {children}
    </ul>
  )
}

export function ListItem({ icon: Icon, title, note, right, className = '', ...props }) {
  return (
    <li className={`flex items-center gap-3 py-3.5 first:pt-0 last:pb-0 ${className}`} {...props}>
      {Icon && <Icon className="h-4 w-4 shrink-0 text-teal-bright" aria-hidden="true" />}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold">{title}</p>
        {note && <p className="mt-0.5 truncate text-xs text-faint">{note}</p>}
      </div>
      {right && <div className="shrink-0 text-xs text-faint">{right}</div>}
    </li>
  )
}
