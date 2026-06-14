import { toBullets } from '../lib/utils'
import { IconExternal, IconCode } from './Icons'
import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  const bullets = toBullets(project.description)

  return (
    <article className="glass grad-border lift rounded-2xl overflow-hidden flex flex-col">
      {/* Screenshot with faux browser chrome */}
      <div className="p-3">
        <div className="rounded-xl overflow-hidden border border-line bg-canvas">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-line bg-white/[0.02]">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="aspect-video">
            <img
              loading="lazy"
              src={project.image}
              alt={`${project.title} screenshot`}
              className={`w-full h-full ${project.contain ? 'object-contain' : 'object-cover object-top'}`}
            />
          </div>
        </div>
      </div>

      <div className="p-5 pt-2 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-xl mb-3">{project.title}</h3>
        <ul className="space-y-2 text-sm text-muted mb-4 flex-1">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-accent-cyan mt-0.5">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-4 border-t border-line text-sm">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink hover:text-accent-cyan transition-colors"
          >
            <IconExternal size={15} />
            Live Demo
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted hover:text-ink transition-colors"
          >
            <IconCode size={15} />
            Source
          </a>
        </div>
      </div>
    </article>
  )
}
