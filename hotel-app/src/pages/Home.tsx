import { Link } from 'react-router-dom'
import AnimatedHeading from '../components/AnimatedHeading'
import FadeIn from '../components/FadeIn'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTABand from '../components/CTABand'
import ServiceSection from '../components/ServiceSection'
import { Building2, Waves, MapPin, ConciergeBell, Star } from 'lucide-react'
import { heroPoster, homeHighlights, roomTypes, facilities, tlapaAttractions, contact } from '../data/site'
import { thumb, med } from '../data/img'

const highlightIcons = { Building2, Waves, MapPin, ConciergeBell }

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
)

const heroVideo = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/videos/video-hotel-juntos.mp4`

function HeroVideo() {
  return (
    <div className="absolute inset-0">
      <video
        className="w-full h-full object-cover"
        src={heroVideo}
        poster={med(heroPoster)}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col overflow-hidden">
        <HeroVideo />
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
                  <Link to="/contacto#reservar" className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium text-sm hover:bg-white hover:text-black transition-all">
                    Reservar ahora
                  </Link>
                </div>
              </FadeIn>
              <FadeIn delay={1500} duration={1000}>
                <div className="flex flex-wrap items-center gap-2.5 mt-6">
                  <span className="text-white/60 text-xs tracking-wide uppercase mr-1 w-full sm:w-auto">Síguenos</span>
                  <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center gap-2 bg-blue-600/20 border border-blue-400/40 text-blue-100 px-4 py-2.5 rounded-xl text-xs font-medium hover:bg-blue-600/35 transition-colors backdrop-blur-sm">
                    <FacebookIcon /> Facebook
                  </a>
                  <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center gap-2 bg-pink-500/20 border border-pink-400/40 text-pink-100 px-4 py-2.5 rounded-xl text-xs font-medium hover:bg-pink-500/35 transition-colors backdrop-blur-sm">
                    <InstagramIcon /> Instagram
                  </a>
                  <a href={contact.maps} target="_blank" rel="noopener noreferrer" aria-label="Ver ubicación en Google Maps" className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 px-4 py-2.5 rounded-xl text-xs font-medium hover:bg-emerald-500/35 transition-colors backdrop-blur-sm">
                    <MapPin size={16} /> Ver Ubicación
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

      {/* HIGHLIGHTS — bento con personalidad */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:h-[560px]">
            {homeHighlights.map((h, i) => {
              const Icon = highlightIcons[h.icon as keyof typeof highlightIcons]
              const feature = i === 0
              const span = feature
                ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2'
                : i === 1
                  ? 'sm:col-span-2 lg:col-span-2'
                  : 'lg:col-span-1'
              return (
                <Reveal
                  key={h.title}
                  delay={i * 80}
                  className={`${span} min-h-[220px] lg:min-h-0 h-full`}
                >
                  <div className="group relative w-full h-full overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={med(h.image)}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-[#081221]/70 to-transparent" />
                    <div className="relative z-10 flex flex-col justify-end h-full p-6">
                      <div className={`rounded-full bg-yellow-400 flex items-center justify-center mb-3 shadow-lg ${feature ? 'w-14 h-14' : 'w-12 h-12'}`}>
                        <Icon size={feature ? 26 : 22} style={{ color: '#0a1628' }} />
                      </div>
                      <h3 className={`text-white font-semibold mb-1 ${feature ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                        {h.title}
                      </h3>
                      <p className={`text-gray-200/90 leading-relaxed ${feature ? 'text-base max-w-md' : 'text-sm'}`}>
                        {h.text}
                      </p>
                    </div>
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
