import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { contact, service } from '../data/site'
import { med } from '../data/img'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
)

// Imágenes libres de Unsplash (CDN) para dar presencia a los paneles de contacto.
const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&q=70&fm=jpg&fit=crop`

const methods = [
  {
    kind: 'whatsapp',
    Icon: MessageCircle,
    title: 'WhatsApp',
    sub: 'Respuesta inmediata',
    value: contact.whatsapp.display,
    href: contact.whatsappMsg,
    cta: 'Escribir',
    external: true,
    image: U('1760349748488-bd2a7ef25ea0'),
    border: 'border-green-500/30 hover:border-green-500/60',
    chip: 'bg-green-500/20 text-green-300',
    value_cls: 'text-green-300',
    btn: 'bg-green-500 text-white hover:bg-green-400',
  },
  {
    kind: 'phone1',
    Icon: Phone,
    title: 'Teléfono 1',
    sub: 'Recepción principal',
    value: contact.phone1.display,
    href: contact.phone1.href,
    cta: 'Llamar',
    external: false,
    image: '/images/Hotel/vc-153.webp',
    border: 'border-yellow-400/30 hover:border-yellow-400/60',
    chip: 'bg-yellow-400/20 text-yellow-300',
    value_cls: 'text-yellow-300',
    btn: 'bg-yellow-400 hover:bg-yellow-300',
  },
  {
    kind: 'phone2',
    Icon: Phone,
    title: 'Teléfono 2',
    sub: 'Línea alternativa',
    value: contact.phone2.display,
    href: contact.phone2.href,
    cta: 'Llamar',
    external: false,
    image: '/images/Hotel/vc-156.webp',
    border: 'border-yellow-400/30 hover:border-yellow-400/60',
    chip: 'bg-yellow-400/20 text-yellow-300',
    value_cls: 'text-yellow-300',
    btn: 'bg-yellow-400 hover:bg-yellow-300',
  },
]

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
              {methods.map((m) => {
                const Icon = m.Icon
                const src = m.image.startsWith('http') ? m.image : med(m.image)
                const linkProps = m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
                return (
                  <div key={m.kind} className={`relative overflow-hidden rounded-2xl border text-center group transition-all min-h-[340px] flex flex-col justify-end ${m.border}`}>
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #060d18 0%, #060d18 55%, rgba(6,13,24,0.82) 100%)' }} />
                    <div className="relative z-10 p-6">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm ${m.chip}`}>
                        <Icon size={26} />
                      </div>
                      <h3 className="text-white font-semibold mb-1 drop-shadow">{m.title}</h3>
                      <p className="text-gray-200 text-sm mb-2">{m.sub}</p>
                      <p className={`text-sm font-semibold mb-4 ${m.value_cls}`}>{m.value}</p>
                      <a
                        href={m.href}
                        {...linkProps}
                        className={`w-full flex items-center justify-center gap-2 text-center py-3 rounded-xl font-semibold text-sm transition-colors ${m.btn}`}
                        style={m.kind === 'whatsapp' ? undefined : { color: '#0a1628' }}
                      >
                        <Icon size={16} /> {m.cta}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 group min-h-[128px]">
                <img src={U('1758612214882-03f8a1d7211f')} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #060d18 0%, #060d18 55%, rgba(6,13,24,0.82) 100%)' }} />
                <div className="relative z-10 p-6 flex items-center gap-4 h-full">
                  <div className="w-12 h-12 rounded-full bg-blue-500/25 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-blue-200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold mb-0.5">Correo Electrónico</h3>
                    <p className="text-gray-200 text-xs mb-2">Cotizaciones y solicitudes</p>
                    <a href={`mailto:${contact.email}`} className="text-blue-200 text-sm font-semibold hover:underline break-all">{contact.email}</a>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 group">
                <img src={U('1687902346888-1320f25fe265')} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #060d18 0%, #060d18 55%, rgba(6,13,24,0.82) 100%)' }} />
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin size={20} className="text-yellow-400" />
                    <div>
                      <h3 className="text-white font-semibold leading-tight">Ubicación</h3>
                      <p className="text-gray-200 text-sm">{contact.city}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600/20 border border-blue-400/40 px-4 py-2.5 rounded-xl text-blue-200 hover:bg-blue-600/35 transition-colors flex-1 justify-center backdrop-blur-sm">
                      <FacebookIcon /> <span className="text-xs font-medium">Facebook</span>
                    </a>
                    <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-pink-500/20 border border-pink-400/40 px-4 py-2.5 rounded-xl text-pink-200 hover:bg-pink-500/35 transition-colors flex-1 justify-center backdrop-blur-sm">
                      <InstagramIcon /> <span className="text-xs font-medium">Instagram</span>
                    </a>
                  </div>
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
