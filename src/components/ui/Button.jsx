const variants = {
  primary:
    'bg-teal text-white shadow-[0_10px_30px_-12px_rgb(15_118_110/0.7)] hover:bg-teal-deep active:scale-[0.98]',
  outline: 'bg-ink/10 text-ink hover:bg-ink/15 active:scale-[0.98]',
  ghost: 'text-faint hover:bg-ink/10 hover:text-ink active:scale-[0.98]',
}

const sizes = {
  sm: 'h-9 px-4 text-[11px]',
  md: 'h-11 px-6 text-xs',
  lg: 'h-12 px-8 text-xs',
  icon: 'h-10 w-10 px-0',
}

export function buttonClasses({ variant = 'primary', size = 'md', className = '' } = {}) {
  return `inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full font-bold uppercase tracking-widest transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 ${
    variants[variant]
  } ${sizes[size]} ${className}`
}

export function Button({ variant = 'primary', size = 'md', className = '', type = 'button', children, ...props }) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </button>
  )
}

export default Button
