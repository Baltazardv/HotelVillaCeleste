import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import Lightbox from '../components/Lightbox'
import CTABand from '../components/CTABand'
import { galleryCategories, allImages } from '../data/gallery'
import { thumb, med } from '../data/img'

const filters = [{ key: 'all', label: 'Todo' }, ...galleryCategories.map((c) => ({ key: c.key, label: c.label }))]

export default function GalleryPage() {
  const [active, setActive] = useState<string>('all')
  const [lbIndex, setLbIndex] = useState<number | null>(null)

  const images = useMemo(() => {
    if (active === 'all') return allImages
    return galleryCategories.find((c) => c.key === active)?.images ?? []
  }, [active])

  return (
    <>
      <PageHero
        title="Galería"
        subtitle={`Explora nuestras instalaciones y los alrededores de Tlapa — ${allImages.length} fotografías.`}
        image={galleryCategories[0].images[6]?.src || galleryCategories[0].images[0].src}
      />

      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-16 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => { setActive(f.key); setLbIndex(null) }}
                className={`px-4 md:px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  active === f.key
                    ? 'bg-yellow-400 border-yellow-400'
                    : 'bg-transparent border-white/15 text-white/80 hover:border-yellow-400/50 hover:text-yellow-400'
                }`}
                style={active === f.key ? { color: '#0a1628' } : undefined}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Masonry-ish grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [column-fill:_balance]">
            {images.map((img, i) => (
              <div key={img.id} className="mb-3 break-inside-avoid overflow-hidden rounded-lg gallery-cv">
                <img
                  src={thumb(img.src)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  onClick={() => setLbIndex(i)}
                  className="w-full object-cover cursor-pointer hover:brightness-110 hover:scale-[1.02] transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />

      {lbIndex !== null && (
        <Lightbox
          images={images.map((i) => med(i.src))}
          index={lbIndex}
          onClose={() => setLbIndex(null)}
          onNavigate={setLbIndex}
        />
      )}
    </>
  )
}
