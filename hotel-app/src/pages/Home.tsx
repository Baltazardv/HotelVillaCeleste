import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedHeading from '../components/AnimatedHeading'
import FadeIn from '../components/FadeIn'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTABand from '../components/CTABand'
import ServiceSection from '../components/ServiceSection'
import { Building2, Waves, MapPin, ConciergeBell, Star } from 'lucide-react'
import { heroSlides, homeHighlights, roomTypes, facilities, tlapaAttractions, contact } from '../data/site'
import { thumb, med } from '../data/img'

const highlightIcons = { Building2, Waves, MapPin, ConciergeBell }

function HeroSlideshow() {
  const [idx, setIdx] = useState(0)
  const [loaded, setLoaded] = useState<number[]>([0])
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 6000)
    return () => clearInterval(t)
  }, [])
  // Only mount the background image once a slide is about to be shown
  useEffect(() => {
    const next = (idx + 1) % heroSlides.length
    setLoaded((l) => Array.from(new Set([...l, idx, next])))
  }, [idx])
  return (
    <div className="absolute inset-0">
      {heroSlides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: loaded.includes(i) ? `url('${med(src)}')` : undefined,
            opacity: i === idx ? 1 : 0,
            transform: i === idx ? 'scale(1.06)' : 'scale(1)',
            transition: 'opacity 1500ms ease, transform 7000ms ease',
            willChange: 'opacity',
          }}
        />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col overflow-hidden">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40 pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full px-6 md:px-12 lg:px-16 pt-24 pb-12 lg:pb-16">
          <div className="flex-1" />
          <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8">
            <div>
              <FadeIn delay={100} duration={800}>
                <p className="text-yellow-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">
                  Tlapa de Comonfort · Guerrero
                </p>
              </FadeIn>
              <AnimatedHeading
                text={'Hotel Villa Celeste\nun refugio con encanto.'}
                delay={300}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 text-white leading-tight"
              />
              <FadeIn delay={900} duration={1000}>
                <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl leading-relaxed">
                  Hospedaje de estilo colonial con amplios jardines, alberca y habitaciones confortables,
                  en el corazón de la región de La Montaña.
                </p>
              </FadeIn>
              <FadeIn delay={1300} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/habitaciones" className="bg-yellow-400 px-8 py-3 rounded-lg font-semibold text-sm hover:bg-yellow-300 transition-colors" style={{ color: '#0a1628' }}>
                    Ver habitaciones
                  </Link>
                  <a href={contact.phone1.href} className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium text-sm hover:bg-white hover:text-black transition-all">
                    Reservar ahora
                  </a>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={1500} duration={1000}>
              <div className="mt-8 lg:mt-0 flex items-end justify-start lg:justify-end">
                <div className="liquid-glass border border-white/20 px-6 py-4 rounded-xl">
                  <p className="text-lg md:text-xl lg:text-2xl font-light text-white flex items-center gap-2 justify-center">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="mx-1">Hotel Villa Celeste</span>
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  </p>
                  <p className="text-sm text-yellow-400/80 mt-1 tracking-wide">{contact.region}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {homeHighlights.map((h, i) => {
              const Icon = highlightIcons[h.icon as keyof typeof highlightIcons]
              return (
                <Reveal key={h.title} delay={i * 80}>
                  <div className="p-6 rounded-xl border border-white/8 text-center h-full" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center mx-auto mb-3">
                      <Icon size={22} className="text-yellow-400" />
                    </div>
                    <h3 className="text-white font-medium text-sm mb-2">{h.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{h.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* WELCOME / ABOUT PREVIEW */}
      <section className="py-20 px-6 md:px-12 lg:px-16" style={{ background: '#0d1f3c' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              <img src={thumb(facilities[0].images[0])} alt="Jardines" loading="lazy" decoding="async" className="rounded-xl object-cover h-48 w-full" />
              <img src={thumb(facilities[2].images[0])} alt="Arquitectura" loading="lazy" decoding="async" className="rounded-xl object-cover h-48 w-full" />
              <img src={thumb(facilities[1].images[0])} alt="Alberca" loading="lazy" decoding="async" className="rounded-xl object-cover h-40 w-full col-span-2" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-yellow-400 text-sm tracking-[0.3em] uppercase font-medium mb-3">Bienvenidos</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-5">Un oasis colonial en La Montaña</h2>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                El Hotel Villa Celeste combina la calidez de la hospitalidad guerrerense con la elegancia
                de una casona colonial. Nuestros jardines, corredores con arcos y alberca crean el ambiente
                perfecto para descansar tras recorrer Tlapa.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                A unos pasos de la Catedral y el Zócalo, somos tu punto de partida ideal para explorar
                la cultura y tradiciones de la región.
              </p>
              <Link to="/hotel" className="inline-flex items-center gap-2 text-yellow-400 text-sm font-medium hover:gap-3 transition-all">
                Conoce el hotel →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Descansa" title="Nuestras Habitaciones" subtitle="Espacios pensados para tu comodidad, desde habitaciones clásicas hasta nuestra suite más amplia." />
          <div className="grid md:grid-cols-3 gap-6">
            {roomTypes.slice(0, 3).map((r, i) => (
              <Reveal key={r.slug} delay={i * 100}>
                <Link to="/habitaciones" className="block rounded-2xl overflow-hidden border border-white/10 group h-full" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="overflow-hidden h-52">
                    <img src={thumb(r.images[0])} alt={r.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <p className="text-yellow-400/80 text-xs mb-1">{r.tagline}</p>
                    <h3 className="text-white font-semibold text-lg mb-2">{r.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{r.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/habitaciones" className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-8 py-3 rounded-lg text-sm font-medium hover:bg-yellow-400 hover:text-black transition-all">
              Ver todas las habitaciones
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE / ATENCIÓN */}
      <ServiceSection />

      {/* TLAPA PREVIEW */}
      <section className="py-20 px-6 md:px-12 lg:px-16" style={{ background: '#0d1f3c' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Descubre" title="Explora Tlapa de Comonfort" subtitle="Cultura, historia y tradición de la región de La Montaña a unos pasos del hotel." />
          <div className="grid md:grid-cols-3 gap-6">
            {tlapaAttractions.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <div className="rounded-2xl overflow-hidden border border-white/10 h-full" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="overflow-hidden h-48">
                    <img src={thumb(a.images[0])} alt={a.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="text-yellow-400/70 text-xs mb-1">{a.distance}</p>
                    <h3 className="text-white font-semibold mb-2">{a.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{a.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/tlapa" className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-8 py-3 rounded-lg text-sm font-medium hover:bg-yellow-400 hover:text-black transition-all">
              Conoce más de Tlapa
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
