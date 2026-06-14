import { education } from '../data/education'

const nodeColors = ['#8b5cf6', '#5a7ef6', '#3b82f6', '#2bb6f0', '#22d3ee']

export default function Education() {
  return (
    <div>
      <p className="eyebrow mb-4">// LEARNING</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-10">Education</h2>
      <div className="relative pl-8">
        <span
          className="absolute left-[7px] top-2 bottom-2 w-px"
          style={{ background: 'linear-gradient(180deg,#8b5cf6,#3b82f6,#22d3ee)' }}
        />
        {education.map((item, i) => (
          <div key={`${item.year}-${item.title}`} className={i === education.length - 1 ? 'relative' : 'relative mb-8'}>
            <span
              className="absolute -left-[26px] top-1.5 w-3.5 h-3.5 rounded-full bg-canvas"
              style={{ boxShadow: `0 0 0 3px ${nodeColors[i % nodeColors.length]}` }}
            />
            <p className="font-mono text-xs text-accent-cyan mb-1">{item.year}</p>
            <p className="font-display font-semibold text-base">{item.title}</p>
            <p className="text-sm text-muted">{item.subtitle}</p>
            {item.description ? <p className="text-sm text-muted mt-1 leading-relaxed">{item.description}</p> : null}
          </div>
        ))}
      </div>
    </div>
  )
}
