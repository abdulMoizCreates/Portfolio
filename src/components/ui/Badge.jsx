const variants = {
  default: 'bg-ink/10 text-ink',
  outline: 'bg-ink/[0.06] text-faint',
  accent: 'bg-teal-bright/10 text-teal-bright',
}

export function badgeClasses({ variant = 'default', className = '' } = {}) {
  return `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${
    variants[variant]
  } ${className}`
}

export function Badge({ variant = 'default', className = '', children, ...props }) {
  return (
    <span className={badgeClasses({ variant, className })} {...props}>
      {children}
    </span>
  )
}

export default Badge
