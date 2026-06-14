import { experience } from '../data/experience'
import { toBullets } from '../lib/utils'

const nodeColors = ['#8b5cf6', '#5a7ef6', '#3b82f6', '#22d3ee']

export default function Experience() {
  return (
    <div>
      <p className="eyebrow mb-4">// CAREER</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-10">Experience</h2>
      <div className="relative pl-8">
        <span
          className="absolute left-[7px] top-2 bottom-2 w-px"
          style={{ background: 'linear-gradient(180deg,#8b5cf6,#3b82f6,#22d3ee)' }}
        />
        {experience.map((item, i) => (
          <div key={`${item.year}-${item.title}`} className={i === experience.length - 1 ? 'relative' : 'relative mb-6'}>
            <span
              className="absolute -left-[26px] top-2 w-3.5 h-3.5 rounded-full bg-canvas"
              style={{ boxShadow: `0 0 0 3px ${nodeColors[i % nodeColors.length]}` }}
            />
            <div className="glass grad-border rounded-2xl p-5">
              <p className="font-mono text-xs text-accent-cyan mb-1.5">{item.year}</p>
              <p className="font-display font-semibold text-base mb-3">
                {item.title} · {item.company}
              </p>
              <ul className="space-y-1.5 text-sm text-muted leading-relaxed mb-3">
                {toBullets(item.description).map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-accent-cyan mt-0.5">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
