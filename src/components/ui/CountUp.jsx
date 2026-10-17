import { useEffect, useRef, useState } from 'react'

// Counts up from 0 to `to` (eased) the first time it scrolls into view.
// Later changes to `to` (e.g. dragging a slider) update instantly.
// With reduced motion it simply renders the final number.
export default function CountUp({ to = 0, duration = 1100, suffix = '', className = '', ...props }) {
  const ref = useRef(null)
  const doneRef = useRef(false)
  const rafRef = useRef(0)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const finish = () => {
      doneRef.current = true
      setValue(to)
    }

    if (doneRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish()
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
          setValue(Math.round(to * eased))
          if (t < 1) {
            rafRef.current = requestAnimationFrame(tick)
          } else {
            finish()
          }
        }
        rafRef.current = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [to, duration])

  return (
    <span ref={ref} className={className} {...props}>
      {value}
      {suffix}
    </span>
  )
}
