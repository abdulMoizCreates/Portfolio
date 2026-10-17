export function Card({ hover = false, className = '', children, ...props }) {
  return (
    <div
      className={`rounded-3xl bg-ink/[0.06] shadow-[0_18px_50px_-20px_rgb(0_0_0/0.55)] ${
        hover
          ? 'transition-all duration-300 hover:-translate-y-1 hover:bg-ink/[0.08] hover:shadow-[0_34px_90px_-26px_rgb(13_150_136/0.45)]'
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
    <div className={`p-6 pb-4 ${className}`} {...props}>
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
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className = '', children, ...props }) {
  return (
    <div className={`p-6 pt-4 ${className}`} {...props}>
      {children}
    </div>
  )
}
