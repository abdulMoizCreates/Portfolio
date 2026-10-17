import { useEffect, useRef } from 'react'

// One shared IntersectionObserver for every Reveal on the page —
// each element fades + rises once when it enters the viewport.
let sharedObserver = null

function getObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            sharedObserver.unobserve(entry.target)
          }
        }
      },
      // Fire a touch early so the motion reads as "just in time", never late
      { rootMargin: '0px 0px -10% 0px', threshold: 0 },
    )
  }
  return sharedObserver
}

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    // Honor reduced-motion: show instantly, never animate
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('revealed')
      return undefined
    }
    const observer = getObserver()
    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  )
}
