import { useState } from 'react'
import { Users, Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import CTABand from '../components/CTABand'
import { roomTypes, contact } from '../data/site'
import { thumb, med } from '../data/img'

export default function RoomsPage() {
  const [lb, setLb] = useState<{ images: string[]; index: number } | null>(null)

  return (
    <>
      <PageHero
        title="Habitaciones"
        subtitle="Confort, descanso y el encanto colonial de Villa Celeste en cada espacio."
        image={roomTypes[3].images[0]}
      />

      <div className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-navy-900">
        <div className="max-w-6xl mx-auto space-y-20">
          {roomTypes.map((room, ri) => (
            <Reveal key={room.slug}>
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${ri % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                {/* Image collage */}
                <div className="[direction:ltr]">
                  <div className="grid grid-cols-2 gap-2">
                    <img
                      src={thumb(room.images[0])}
                      alt={room.name}
                      loading="lazy"
                      decoding="async"
                      onClick={() => setLb({ images: room.images.map(med), index: 0 })}
                      className="col-span-2 h-64 w-full object-cover rounded-xl cursor-pointer hover:brightness-110 transition"
                    />
                    {room.images.slice(1, 5).map((src, i) => (
                      <img
                        key={src}
                        src={thumb(src)}
                        alt={`${room.name} ${i + 2}`}
                        loading="lazy"
                        decoding="async"
                        onClick={() => setLb({ images: room.images.map(med), index: i + 1 })}
                        className="h-28 w-full object-cover rounded-lg cursor-pointer hover:brightness-110 transition"
                      />
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="[direction:ltr]">
                  <p className="text-yellow-400 text-sm tracking-[0.2em] uppercase mb-2">{room.tagline}</p>
                  <h2 className="text-3xl md:text-4xl font-light text-white mb-2">{room.name}</h2>
                  <p className="text-yellow-400/70 text-sm mb-4 flex items-center gap-2"><Users size={15} /> {room.capacity}</p>
                  <p className="text-gray-400 text-base leading-relaxed mb-6">{room.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check size={15} className="text-yellow-400 flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <a href={contact.phone1.href} className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-yellow-300 transition-colors" style={{ color: '#0a1628' }}>
                      Reservar
                    </a>
                    <a href={contact.whatsappMsg} target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-white hover:text-black transition-all">
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <CTABand title="¿Reservamos tu habitación?" text="Disponibilidad y tarifas al instante por teléfono o WhatsApp." />

      {lb && (
        <Lightbox
          images={lb.images}
          index={lb.index}
          onClose={() => setLb(null)}
          onNavigate={(i) => setLb({ ...lb, index: i })}
        />
      )}
    </>
  )
}
