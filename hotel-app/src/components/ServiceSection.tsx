import { useState } from 'react'
import { ConciergeBell, Sparkles, HeartHandshake, Award } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Lightbox from './Lightbox'
import { service } from '../data/site'
import { thumb, med } from '../data/img'

const icons = { ConciergeBell, Sparkles, HeartHandshake, Award }

export default function ServiceSection() {
  const [lb, setLb] = useState<number | null>(null)
  const imgs = service.images

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Nuestro sello" title={service.title} subtitle={service.intro} />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Photo collage of the team */}
          <Reveal>
            <div className="grid grid-cols-2 gap-2">
              <img
                src={thumb(imgs[0])}
                alt="Recepción Hotel Villa Celeste"
                loading="lazy"
                decoding="async"
                onClick={() => setLb(0)}
                className="col-span-2 h-56 w-full object-cover rounded-xl cursor-pointer hover:brightness-110 transition"
              />
              {imgs.slice(1, 5).map((src, i) => (
                <img
                  key={src}
                  src={thumb(src)}
                  alt="Equipo del hotel"
                  loading="lazy"
                  decoding="async"
                  onClick={() => setLb(i + 1)}
                  className="h-28 w-full object-cover rounded-lg cursor-pointer hover:brightness-110 transition"
                />
              ))}
            </div>
          </Reveal>

          {/* Service points */}
          <Reveal delay={120}>
            <div className="space-y-5">
              {service.points.map((p) => {
                const Icon = icons[p.icon as keyof typeof icons]
                return (
                  <div key={p.title} className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{p.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>

      {lb !== null && (
        <Lightbox images={imgs.map(med)} index={lb} onClose={() => setLb(null)} onNavigate={setLb} />
      )}
    </section>
  )
}
