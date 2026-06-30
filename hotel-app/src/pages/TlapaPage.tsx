import { useState } from 'react'
import { MapPin, Navigation, Church, Landmark, Image, ShoppingBag, Utensils, Mountain } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import CTABand from '../components/CTABand'
import { tlapaAttractions, contact } from '../data/site'
import { thumb, med } from '../data/img'

const nearby = [
  { Icon: Church, name: 'Catedral de Tlapa', distance: '2 min a pie' },
  { Icon: Landmark, name: 'Zócalo y Kiosco', distance: '3 min a pie' },
  { Icon: Image, name: 'Portales y murales', distance: 'Centro histórico' },
  { Icon: ShoppingBag, name: 'Mercado y comercios', distance: '5 min a pie' },
  { Icon: Utensils, name: 'Restaurantes locales', distance: 'A la vuelta' },
  { Icon: Mountain, name: 'Región de La Montaña', distance: 'Paisajes y cultura' },
]

export default function TlapaPage() {
  const [lb, setLb] = useState<{ images: string[]; index: number } | null>(null)

  return (
    <>
      <PageHero
        title="Tlapa de Comonfort"
        subtitle="Historia, cultura y tradición de la región de La Montaña, a unos pasos del hotel."
        image={tlapaAttractions[0].images[0]}
      />

      <section className="py-16 px-6 md:px-12 lg:px-16 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center mb-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Tlapa de Comonfort es el corazón comercial y cultural de La Montaña de Guerrero. Su Catedral,
            su animado Zócalo y los portales con murales históricos hacen de cada paseo una experiencia
            única. Desde Hotel Villa Celeste, todo queda cerca.
          </p>
        </div>
      </section>

      <section className="pb-8 px-6 md:px-12 lg:px-16 bg-navy-900">
        <div className="max-w-6xl mx-auto space-y-16">
          {tlapaAttractions.map((a, ai) => (
            <Reveal key={a.title}>
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${ai % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                <div className="[direction:ltr] grid grid-cols-2 gap-2">
                  <img
                    src={thumb(a.images[0])}
                    alt={a.title}
                    loading="lazy"
                    decoding="async"
                    onClick={() => setLb({ images: a.images.map(med), index: 0 })}
                    className="col-span-2 h-60 w-full object-cover rounded-xl cursor-pointer hover:brightness-110 transition"
                  />
                  {a.images.slice(1, 3).map((src, i) => (
                    <img
                      key={src}
                      src={thumb(src)}
                      alt={`${a.title} ${i + 2}`}
                      loading="lazy"
                      decoding="async"
                      onClick={() => setLb({ images: a.images.map(med), index: i + 1 })}
                      className="h-32 w-full object-cover rounded-lg cursor-pointer hover:brightness-110 transition"
                    />
                  ))}
                </div>
                <div className="[direction:ltr]">
                  <p className="text-yellow-400/70 text-sm mb-2">{a.distance}</p>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-4">{a.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{a.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Map + nearby */}
      <section className="py-16 px-6 md:px-12 lg:px-16" style={{ background: '#0d1f3c' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height: 380 }}>
            <iframe
              title="Ubicación Tlapa de Comonfort"
              src="https://www.google.com/maps?q=Tlapa%20de%20Comonfort%2C%20Guerrero&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <div className="liquid-glass-navy rounded-xl p-6 border border-white/10 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Ubicación</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{contact.city}<br />{contact.region}</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Hotel+Villa+Celeste+Tlapa+de+Comonfort"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-yellow-400 text-sm font-medium hover:underline"
              >
                <Navigation size={14} />Abrir en Google Maps
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {nearby.map((p) => (
                <div key={p.name} className="flex gap-3 items-center p-3 rounded-lg border border-white/8" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span className="text-yellow-400 flex-shrink-0"><p.Icon size={20} /></span>
                  <div>
                    <p className="text-white text-xs font-medium leading-tight">{p.name}</p>
                    <p className="text-yellow-400/70 text-xs">{p.distance}</p>
                  </div>
                </div>
              ))}
            </div>
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
