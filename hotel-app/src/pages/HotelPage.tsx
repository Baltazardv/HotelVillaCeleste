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

// Imágenes de apoyo: para los conceptos genéricos (Wi-Fi, aire, estacionamiento,
// seguridad, reserva) usamos fotografías libres de Unsplash servidas desde su CDN;
// para los que sí representamos con fotos propias usamos nuestras imágenes locales.
const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&q=70&fm=jpg&fit=crop`

const amenities = [
  { icon: Wifi, title: 'Wi-Fi Gratuito', desc: 'Conexión en todas las áreas', image: U('1645725677294-ed0843b97d5c') },
  { icon: Wind, title: 'Aire Acondicionado', desc: 'En habitaciones seleccionadas', image: U('1762341123870-d706f257a12e') },
  { icon: Car, title: 'Estacionamiento', desc: 'Área disponible para huéspedes', image: U('1624211822547-9f6e733d32c4') },
  { icon: Coffee, title: 'Atención 24/7', desc: 'Recepción y servicio continuo', image: '/images/Hotel/vc-153.webp' },
  { icon: Shield, title: 'Seguridad', desc: 'Instalaciones seguras', image: U('1589935447067-5531094415d1') },
  { icon: Star, title: 'Alberca y Jardines', desc: 'Áreas verdes y de descanso', image: '/images/Hotel/vc-151.webp' },
  { icon: MapPin, title: 'Ubicación Central', desc: 'A pasos de la Catedral', image: '/images/Catedral/vc-58.webp' },
  { icon: Phone, title: 'Reserva Directa', desc: 'Mejor tarifa garantizada', image: U('1726066012801-14d892021339') },
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
              const src = a.image.startsWith('http') ? a.image : med(a.image)
              return (
                <Reveal key={a.title} delay={i * 50}>
                  <div className="group relative h-44 md:h-52 overflow-hidden rounded-xl border border-white/10">
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-[#081221]/75 to-[#081221]/10" />
                    <div className="relative z-10 flex flex-col justify-end h-full p-4">
                      <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center mb-2 shadow-lg">
                        <Icon size={18} style={{ color: '#0a1628' }} />
                      </div>
                      <h3 className="text-white font-semibold text-sm mb-0.5">{a.title}</h3>
                      <p className="text-gray-200/85 text-xs leading-relaxed">{a.desc}</p>
                    </div>
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
