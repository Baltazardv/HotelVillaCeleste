import { Link } from 'react-router-dom'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import { contact, logo } from '../data/site'
import { thumb } from '../data/img'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'El Hotel', to: '/hotel' },
  { label: 'Habitaciones', to: '/habitaciones' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Tlapa', to: '/tlapa' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black/60 border-t border-white/10 py-12 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={thumb(logo)} alt="Hotel Villa Celeste" loading="lazy" className="h-16 w-auto object-contain mb-3" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Hospedaje de encanto colonial en el corazón de {contact.city}. {contact.region}
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm tracking-wide">Navegar</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 text-sm tracking-wide">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href={contact.phone1.href} className="flex items-center gap-2 text-gray-400 text-sm hover:text-yellow-400 transition-colors">
                  <Phone size={13} className="text-yellow-400/60" />{contact.phone1.display}
                </a>
              </li>
              <li>
                <a href={contact.phone2.href} className="flex items-center gap-2 text-gray-400 text-sm hover:text-yellow-400 transition-colors">
                  <Phone size={13} className="text-yellow-400/60" />{contact.phone2.display}
                </a>
              </li>
              <li>
                <a href={contact.whatsapp.href} className="flex items-center gap-2 text-gray-400 text-sm hover:text-green-400 transition-colors">
                  <MessageCircle size={13} className="text-green-400/70" />WhatsApp: {contact.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition-colors break-all">
                  <Mail size={13} className="text-blue-400/60 flex-shrink-0" />{contact.email}
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-600/30 transition-colors">
                <FacebookIcon />
              </a>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 hover:bg-pink-500/20 transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">© {year} Hotel Villa Celeste · Todos los derechos reservados</p>
          <p className="text-gray-700 text-xs">{contact.city}, México</p>
        </div>
      </div>
    </footer>
  )
}
