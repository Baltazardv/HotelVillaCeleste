import { useState } from 'react'
import { Wifi, Wind, Car, Coffee, Shield, MapPin, Phone, Star } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Lightbox from '../components/Lightbox'
import CTABand from '../components/CTABand'
import ServiceSection from '../components/ServiceSection'
import { facilities } from '../data/site'
import { thumb, med } from '../data/img'

const amenities = [
  { icon: Wifi, title: 'Wi-Fi Gratuito', desc: 'Conexión en todas las áreas' },
  { icon: Wind, title: 'Aire Acondicionado', desc: 'En habitaciones seleccionadas' },
  { icon: Car, title: 'Estacionamiento', desc: 'Área disponible para huéspedes' },
  { icon: Coffee, title: 'Atención 24/7', desc: 'Recepción y servicio continuo' },
  { icon: Shield, title: 'Seguridad', desc: 'Instalaciones seguras' },
  { icon: Star, title: 'Alberca y Jardines', desc: 'Áreas verdes y de descanso' },
  { icon: MapPin, title: 'Ubicación Central', desc: 'A pasos de la Catedral' },
  { icon: Phone, title: 'Reserva Directa', desc: 'Mejor tarifa garantizada' },
]

export default function HotelPage() {
  const [lb, setLb] = useState<{ images: string[]; index: number } | null>(null)

  return (
    <>
      <PageHero
        title="El Hotel"
        subtitle="Conoce nuestras instalaciones, servicios y el encanto colonial de Villa Celeste."
        image={facilities[2].images[0]}
      />

      {/* Intro */}
      <section className="py-16 px-6 md:px-12 lg:px-16 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            En Hotel Villa Celeste cada rincón está pensado para tu comodidad. Desde nuestros amplios
            jardines y alberca, hasta los corredores con arcos de cantera y un equipo siempre dispuesto a
            atenderte, te ofrecemos una estancia memorable en el corazón de Tlapa de Comonfort.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section className="pb-8 px-6 md:px-12 lg:px-16 bg-navy-900">
        <div className="max-w-6xl mx-auto space-y-16">
          {facilities.map((f, fi) => (
            <Reveal key={f.title}>
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${fi % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                <div className="[direction:ltr] grid grid-cols-2 gap-2">
                  <img
                    src={thumb(f.images[0])}
                    alt={f.title}
                    loading="lazy"
                    decoding="async"
                    onClick={() => setLb({ images: f.images.map(med), index: 0 })}
                    className="col-span-2 h-60 w-full object-cover rounded-xl cursor-pointer hover:brightness-110 transition"
                  />
                  {f.images.slice(1, 3).map((src, i) => (
                    <img
                      key={src}
                      src={thumb(src)}
                      alt={`${f.title} ${i + 2}`}
                      loading="lazy"
                      decoding="async"
                      onClick={() => setLb({ images: f.images.map(med), index: i + 1 })}
                      className="h-32 w-full object-cover rounded-lg cursor-pointer hover:brightness-110 transition"
                    />
                  ))}
                </div>
                <div className="[direction:ltr]">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-4">{f.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{f.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Service / Atención */}
      <ServiceSection />

      {/* Amenities grid */}
      <section className="py-20 px-6 md:px-12 lg:px-16" style={{ background: '#0d1f3c' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Todo para ti" title="Servicios y Amenidades" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.map((a, i) => {
              const Icon = a.icon
              return (
                <Reveal key={a.title} delay={i * 50}>
                  <div className="p-6 rounded-xl border border-white/8 text-center h-full hover:border-yellow-400/30 transition-all" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center mx-auto mb-3">
                      <Icon size={20} className="text-yellow-400" />
                    </div>
                    <h3 className="text-white font-medium text-sm mb-1">{a.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CTABand />

      {lb && (
        <Lightbox images={lb.images} index={lb.index} onClose={() => setLb(null)} onNavigate={(i) => setLb({ ...lb, index: i })} />
      )}
    </>
  )
}
