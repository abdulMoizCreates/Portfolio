import { useEffect, useRef, useState } from 'react'
import { profile } from '../data'
import { Switch, useToast } from './ui'
import { ArrowUp } from 'lucide-react'

const year = new Date().getFullYear()

export default function Footer() {
  const toast = useToast()
  const [motion, setMotion] = useState(true)
  const mounted = useRef(false)

  useEffect(() => {
    // Skip the initial mount so we don't toast on load
    if (!mounted.current) {
      mounted.current = true
      return
    }
    document.documentElement.classList.toggle('motion-off', !motion)
    toast({
      title: motion ? 'Motion on' : 'Motion reduced',
      description: motion ? 'Animations are back.' : 'Marquee, pulses and entrances are paused.',
      variant: motion ? 'success' : 'info',
    })
  }, [motion, toast])

  return (
    <footer className="no-print">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-faint">
            © {year} {profile.name}
          </p>
          <p className="mt-1 text-xs uppercase tracking-widest text-faint/60">
            Built with React + Tailwind CSS
          </p>
        </div>

        <Switch
          checked={motion}
          onCheckedChange={setMotion}
          label={motion ? 'Motion on' : 'Motion off'}
        />

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-ink/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-faint transition-colors hover:bg-ink/15 hover:text-ink"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </footer>
  )
}
