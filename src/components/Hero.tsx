import { Link } from 'react-router-dom'
import { hero, profile, social } from '../data/site'
import { IconArrowRight, IconGitHub, IconLinkedIn } from './Icons'

const gradient = 'linear-gradient(120deg,#8b5cf6,#3b82f6,#22d3ee)'

export default function Hero() {
  return (
    <section id="about" className="aurora-bg grain">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 md:gap-8 items-center relative z-10">
        {/* Left */}
        <div>
          <p className="eyebrow mb-5">// {hero.eyebrow}</p>
          <h1 className="aurora-text font-display font-bold tracking-tight text-6xl md:text-7xl lg:text-8xl leading-none mb-6">
            {profile.name}
          </h1>
          <p className="font-mono text-sm md:text-base text-muted mb-6">{hero.techLine}</p>
          <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl mb-8">{hero.subtitle}</p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white shadow-glow"
              style={{ background: gradient }}
            >
              View my work
              <IconArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-ink hover:border-accent-violet/50 transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid place-items-center w-10 h-10 rounded-xl glass text-muted hover:text-ink hover:border-accent-violet/50 transition-colors"
            >
              <IconGitHub size={20} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center w-10 h-10 rounded-xl glass text-muted hover:text-ink hover:border-accent-violet/50 transition-colors"
            >
              <IconLinkedIn size={20} />
            </a>
          </div>
        </div>

        {/* Right: photo ring */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="relative rounded-full p-[3px] overflow-hidden">
              {/* Slow-spinning conic aurora ring */}
              <div
                aria-hidden="true"
                className="ring-spin absolute inset-0"
                style={{ background: 'conic-gradient(from 0deg,#8b5cf6,#3b82f6,#22d3ee,#8b5cf6)' }}
              />
              <div className="relative rounded-full p-1 bg-canvas">
                <img
                  loading="lazy"
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="glass absolute -bottom-3 -left-4 md:-left-8 rounded-2xl px-4 py-2.5 flex items-center gap-2.5 shadow-glow">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-cyan" />
              </span>
              <span className="font-mono text-xs text-ink">Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
