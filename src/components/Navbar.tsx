import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconGitHub, IconLinkedIn, IconSun, IconMoon } from './Icons'
import { social } from '../data/site'
import { getStoredTheme, setTheme, type Theme } from '../lib/theme'

const gradient = 'linear-gradient(120deg,#8b5cf6,#3b82f6,#22d3ee)'

export default function Navbar() {
  const { pathname } = useLocation()
  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme())
  const link = (active: boolean) =>
    active ? 'text-ink' : 'text-muted hover:text-ink transition-colors'

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    setThemeState(next)
  }

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6">
      <nav className="glass rounded-2xl max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Home">
          <span
            className="grid place-items-center w-9 h-9 rounded-xl font-display font-bold text-sm text-white shadow-glow"
            style={{ background: gradient }}
          >
            CN
          </span>
          <span className="font-display font-semibold text-base tracking-tight">Cuong Ngo</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className={link(pathname === '/')}>
            About
          </Link>
          <Link to="/projects" className={link(pathname === '/projects')}>
            Works
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="grid place-items-center w-9 h-9 rounded-xl glass text-muted hover:text-ink hover:border-accent-violet/50 transition-colors"
          >
            {theme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
          </button>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid place-items-center w-9 h-9 rounded-xl glass text-muted hover:text-ink hover:border-accent-violet/50 transition-colors"
          >
            <IconGitHub size={18} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid place-items-center w-9 h-9 rounded-xl glass text-muted hover:text-ink hover:border-accent-violet/50 transition-colors"
          >
            <IconLinkedIn size={18} />
          </a>
        </div>
      </nav>
    </header>
  )
}
