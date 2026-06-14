import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const gradient = 'linear-gradient(120deg,#8b5cf6,#3b82f6,#22d3ee)'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="aurora-bg grain min-h-[70vh] grid place-items-center px-6">
        <div className="text-center relative z-10">
          <p className="eyebrow mb-4">// 404</p>
          <h1 className="aurora-text font-display font-bold text-7xl md:text-8xl tracking-tight mb-6">Lost in space</h1>
          <p className="text-muted text-lg mb-8">This page doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white shadow-glow"
            style={{ background: gradient }}
          >
            Back home
          </Link>
        </div>
      </main>
    </>
  )
}
