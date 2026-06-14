import { contact, social } from '../data/site'
import { IconMail, IconGitHub, IconLinkedIn } from './Icons'

const gradient = 'linear-gradient(120deg,#8b5cf6,#3b82f6,#22d3ee)'

export default function Contact() {
  return (
    <footer id="contact" className="aurora-bg grain border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10 text-center">
        <p className="eyebrow mb-5">// GET IN TOUCH</p>
        <h2 className="aurora-text font-display font-bold text-4xl md:text-6xl tracking-tight mb-6">
          Let's build something
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-10">{contact.availability}</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5"
            style={{ background: gradient }}
          >
            <IconMail size={18} />
            {contact.email}
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-ink hover:border-accent-violet/50 transition-colors"
          >
            <IconGitHub size={18} />
            GitHub
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-ink hover:border-accent-violet/50 transition-colors"
          >
            <IconLinkedIn size={18} />
            Connect on LinkedIn
          </a>
        </div>

        <hr className="border-line my-12 max-w-2xl mx-auto" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-2xl mx-auto font-mono text-xs text-faint">
          <span>© 2026 Cuong Ngo</span>
          <span>Built with React + Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
