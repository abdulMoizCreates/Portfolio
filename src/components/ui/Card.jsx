const padding = {
  content: 'p-6 pt-0',
  header: 'p-6 pb-4',
  footer: 'p-6 pt-4',
}

export function Card({ hover = false, className = '', children, ...props }) {
  return (
    <div
      className={`rounded-3xl border border-ink/10 bg-ink/[0.04] ${
        hover
          ? 'transition-all duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_28px_80px_-32px_rgb(45_212_191/0.4)]'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className = '', children, ...props }) {
  return (
    <div className={`${padding.header} ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className = '', children, ...props }) {
  return (
    <p
      className={`font-display flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.15em] text-faint ${className}`}
      {...props}
    >
      {children}
    </p>
  )
}

export function CardContent({ className = '', children, ...props }) {
  return (
    <div className={`${padding.content} ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className = '', children, ...props }) {
  return (
    <div className={`${padding.footer} ${className}`} {...props}>
      {children}
    </div>
  )
}
