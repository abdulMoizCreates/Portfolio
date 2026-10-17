const base =
  'w-full rounded-2xl bg-ink/10 px-4 text-sm text-ink outline-none transition-all placeholder:text-faint/70 focus:bg-ink/[0.15] focus:shadow-[0_0_0_4px_rgb(45_212_191/0.12)]'

export default function Input({ ref, className = '', ...props }) {
  return <input ref={ref} className={`${base} h-11 ${className}`} {...props} />
}

export function Textarea({ className = '', rows = 4, ...props }) {
  return (
    <textarea
      rows={rows}
      className={`${base} min-h-28 resize-none px-4 py-3 leading-relaxed ${className}`}
      {...props}
    />
  )
}
