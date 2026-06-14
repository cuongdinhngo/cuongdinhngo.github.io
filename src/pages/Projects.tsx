import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <>
      <Navbar />
      <main>
        <section className="aurora-bg grain">
          <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 relative z-10">
            <p className="eyebrow mb-4">// SELECTED WORK</p>
            <h1 className="font-display aurora-text text-5xl sm:text-6xl font-bold tracking-tight">Featured Projects</h1>
            <p className="text-muted text-lg mt-5 max-w-2xl">
              A list of projects I've built to demonstrate modern frontend development
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 90}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Contact />
    </>
  )
}
