import { useState } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import CTABand from '../components/CTABand'
import { galleryStory, allImages } from '../data/gallery'
import { thumb, med } from '../data/img'

export default function GalleryPage() {
  const [lb, setLb] = useState<{ images: string[]; index: number } | null>(null)

  return (
    <>
      <PageHero
        title="Galería"
        subtitle={`Un recorrido en imágenes por el Hotel Villa Celeste y el corazón de Tlapa de Comonfort — ${allImages.length} fotografías, contadas como una historia.`}
        image={galleryStory[0].feature}
      />

      {galleryStory.map((ch, ci) => {
        const rest = ch.images.filter((s) => s !== ch.feature)
        const open = (src: string) =>
          setLb({ images: ch.images.map(med), index: Math.max(0, ch.images.indexOf(src)) })
        const flip = ci % 2 === 1

        return (
          <section
            key={ch.id}
            id={ch.id}
            className={`py-16 md:py-24 px-6 md:px-12 lg:px-16 ${flip ? '' : 'bg-navy-900'}`}
            style={flip ? { background: '#0d1f3c' } : undefined}
          >
            <div className="max-w-6xl mx-auto">
              {/* Intro + imagen protagonista */}
              <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${flip ? 'lg:[direction:rtl]' : ''}`}>
                <Reveal className="lg:col-span-5 [direction:ltr]">
                  <span className="block text-6xl md:text-7xl font-extralight leading-none text-yellow-400/25 mb-4 select-none">
                    {String(ci + 1).padStart(2, '0')}
                  </span>
                  <p className="text-yellow-400 text-sm tracking-[0.3em] uppercase font-medium mb-3">{ch.kicker}</p>
                  <h2 className="text-3xl md:text-4xl font-light text-white mb-5 leading-tight">{ch.title}</h2>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">{ch.story}</p>
                </Reveal>

                <Reveal delay={120} className="lg:col-span-7 [direction:ltr]">
                  <button
                    type="button"
                    onClick={() => open(ch.feature)}
                    className="group block w-full overflow-hidden rounded-2xl border border-white/10"
                  >
                    <img
                      src={med(ch.feature)}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[300px] md:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </button>
                </Reveal>
              </div>

              {/* Mosaico de apoyo */}
              {rest.length > 0 && (
                <div className="columns-2 md:columns-3 lg:columns-4 gap-3 mt-6 md:mt-8 [column-fill:_balance]">
                  {rest.map((src) => (
                    <div key={src} className="mb-3 break-inside-avoid overflow-hidden rounded-lg gallery-cv">
                      <img
                        src={thumb(src)}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        onClick={() => open(src)}
                        className="w-full object-cover cursor-pointer hover:brightness-110 hover:scale-[1.02] transition duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )
      })}

      <CTABand />

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
