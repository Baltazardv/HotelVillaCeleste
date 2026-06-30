import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { logo, contact } from '../data/site'
import { thumb } from '../data/img'

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'El Hotel', to: '/hotel' },
  { label: 'Habitaciones', to: '/habitaciones' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Tlapa', to: '/tlapa' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  const onHome = pathname === '/'
  const solid = scrolled || !onHome

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${solid ? 'navbar-scrolled' : 'bg-transparent'}`}>
      <div className="px-5 md:px-12 lg:px-16 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={thumb(logo)} alt="Hotel Villa Celeste" className="h-12 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === l.to ? 'text-yellow-400' : 'text-white/80 hover:text-yellow-400'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={contact.phone1.href}
          className="hidden md:inline-flex items-center gap-2 bg-yellow-400 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-300 transition-colors"
          style={{ color: '#0a1628' }}
        >
          Reservar
        </a>

        <button className="md:hidden text-white p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menú">
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden liquid-glass-navy border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-base py-2.5 font-medium border-b border-white/5 ${
                  pathname === l.to ? 'text-yellow-400' : 'text-white/90'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a href={contact.phone1.href} className="mt-3 bg-yellow-400 text-center py-3 rounded-lg font-semibold text-sm" style={{ color: '#0a1628' }}>
              Reservar ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
