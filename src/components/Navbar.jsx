import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile } from '../data'
import { buttonClasses } from './ui'

const links = [
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="no-print fixed inset-x-0 top-3 z-50 flex flex-col items-center gap-2 px-4 sm:top-4">
      <nav className="flex h-12 w-full max-w-6xl items-center justify-between gap-2 rounded-full border border-ink/10 bg-paper/70 pl-5 pr-1.5 shadow-[0_16px_40px_-16px_rgb(0_0_0/0.6)] backdrop-blur-xl">
        <Link to="/" className="font-display shrink-0 text-lg font-bold tracking-tight">
          {profile.initials.slice(0, -1)}
          <span className="text-teal-bright">.</span>
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors ${
                  isActive ? 'bg-ink/10 text-ink' : 'text-faint hover:bg-ink/5 hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <Link to="/resume" className={`hidden sm:inline-flex ${buttonClasses({ size: 'sm' })}`}>
            Hire Me
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-ink sm:hidden ${
              open ? 'bg-ink/10' : 'hover:bg-ink/10'
            }`}
          >
            {open ? (
              <X className="h-4.5 w-4.5" aria-hidden="true" />
            ) : (
              <Menu className="h-4.5 w-4.5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="w-full max-w-md rounded-3xl border border-ink/10 bg-paper/90 p-2 shadow-[0_24px_60px_-20px_rgb(0_0_0/0.7)] backdrop-blur-xl sm:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-ink/10 text-ink' : 'text-faint hover:bg-ink/5 hover:text-ink'
                }`
              }
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4 opacity-40" aria-hidden="true" />
            </NavLink>
          ))}
          <div className="p-2 pt-1">
            <Link
              to="/resume"
              onClick={() => setOpen(false)}
              className={`w-full ${buttonClasses({ size: 'md' })}`}
            >
              Hire Me
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
