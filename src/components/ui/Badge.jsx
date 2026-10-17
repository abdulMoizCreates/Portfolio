const variants = {
  default: 'border-ink/10 bg-ink/5 text-faint',
  outline: 'border-ink/20 text-faint',
  accent: 'border-teal-bright/30 bg-teal-bright/10 text-teal-bright',
}

export function badgeClasses({ variant = 'default', className = '' } = {}) {
  return `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${
    variants[variant]
  } ${className}`
}

export default function Badge({ variant = 'default', className = '', children, ...props }) {
  return (
    <span className={badgeClasses({ variant, className })} {...props}>
      {children}
    </span>
  )
}
