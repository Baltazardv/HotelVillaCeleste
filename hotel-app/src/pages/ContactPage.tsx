import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { contact, service } from '../data/site'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
)

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contacto y Reservaciones"
        subtitle="Estamos para atenderte. Comunícate por el medio que prefieras."
        image={service.images[0]}
      />

      <section className="py-16 px-6 md:px-12 lg:px-16 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="liquid-glass-navy rounded-2xl p-6 border border-green-500/20 text-center group hover:border-green-500/50 transition-all">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={28} className="text-green-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                <p className="text-gray-400 text-sm mb-3">Respuesta inmediata</p>
                <p className="text-green-400 text-sm font-medium mb-4">{contact.whatsapp.display}</p>
                <a href={contact.whatsappMsg} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 text-center bg-green-500 text-white py-3 rounded-xl font-semibold text-sm hover:bg-green-400 transition-colors">
                  <MessageCircle size={16} /> Escribir
                </a>
              </div>

              <div className="liquid-glass-navy rounded-2xl p-6 border border-yellow-400/20 text-center group hover:border-yellow-400/50 transition-all">
                <div className="w-16 h-16 rounded-full bg-yellow-400/10 flex items-center justify-center mx-auto mb-4">
                  <Phone size={28} className="text-yellow-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">Teléfono 1</h3>
                <p className="text-gray-400 text-sm mb-3">Recepción principal</p>
                <p className="text-yellow-400 text-sm font-medium mb-4">{contact.phone1.display}</p>
                <a href={contact.phone1.href} className="w-full flex items-center justify-center gap-2 text-center bg-yellow-400 py-3 rounded-xl font-semibold text-sm hover:bg-yellow-300 transition-colors" style={{ color: '#0a1628' }}>
<Phone size={16} /> Llamar
                </a>
              </div>

              <div className="liquid-glass-navy rounded-2xl p-6 border border-yellow-400/20 text-center group hover:border-yellow-400/50 transition-all">
                <div className="w-16 h-16 rounded-full bg-yellow-400/10 flex items-center justify-center mx-auto mb-4">
                  <Phone size={28} className="text-yellow-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">Teléfono 2</h3>
                <p className="text-gray-400 text-sm mb-3">Línea alternativa</p>
                <p className="text-yellow-400 text-sm font-medium mb-4">{contact.phone2.display}</p>
                <a href={contact.phone2.href} className="w-full flex items-center justify-center gap-2 text-center bg-yellow-400 py-3 rounded-xl font-semibold text-sm hover:bg-yellow-300 transition-colors" style={{ color: '#0a1628' }}>
<Phone size={16} /> Llamar
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="liquid-glass-navy rounded-2xl p-6 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold mb-0.5">Correo Electrónico</h3>
                  <p className="text-gray-400 text-xs mb-2">Cotizaciones y solicitudes</p>
                  <a href={`mailto:${contact.email}`} className="text-blue-400 text-sm font-medium hover:underline break-all">{contact.email}</a>
                </div>
              </div>

              <div className="liquid-glass-navy rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={20} className="text-yellow-400" />
                  <div>
                    <h3 className="text-white font-semibold leading-tight">Ubicación</h3>
                    <p className="text-gray-400 text-sm">{contact.city}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 px-4 py-2.5 rounded-xl text-blue-400 hover:bg-blue-600/20 transition-colors flex-1 justify-center">
                    <FacebookIcon /> <span className="text-xs font-medium">Facebook</span>
                  </a>
                  <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 px-4 py-2.5 rounded-xl text-pink-400 hover:bg-pink-500/20 transition-colors flex-1 justify-center">
                    <InstagramIcon /> <span className="text-xs font-medium">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={150}>
            <div className="mt-8 rounded-2xl overflow-hidden border border-white/10" style={{ height: 360 }}>
              <iframe
                title="Mapa Tlapa de Comonfort"
                src="https://www.google.com/maps?q=Tlapa%20de%20Comonfort%2C%20Guerrero&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
