import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Featured work */}
        <section id="works" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <Reveal className="mb-12">
            <p className="eyebrow mb-4">// SELECTED WORK</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Featured Projects</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/projects" className="font-mono text-sm text-accent-cyan hover:text-ink transition-colors">
              View all projects →
            </Link>
          </div>
        </section>

        {/* Experience + Education */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-16">
          <Reveal>
            <Experience />
          </Reveal>
          <Reveal delay={120}>
            <Education />
          </Reveal>
        </section>
      </main>
      <Contact />
    </>
  )
}
