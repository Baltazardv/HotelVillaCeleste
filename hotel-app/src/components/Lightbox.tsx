import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxProps {
  images: string[]
  index: number
  onClose: () => void
  onNavigate: (i: number) => void
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const prev = useCallback(() => onNavigate((index - 1 + images.length) % images.length), [index, images.length, onNavigate])
  const next = useCallback(() => onNavigate((index + 1) % images.length), [index, images.length, onNavigate])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10" onClick={onClose} aria-label="Cerrar">
        <X size={30} />
      </button>
      <button
        className="absolute left-2 md:left-6 text-white/60 hover:text-white p-2 z-10"
        onClick={(e) => { e.stopPropagation(); prev() }}
        aria-label="Anterior"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        className="absolute right-2 md:right-6 text-white/60 hover:text-white p-2 z-10"
        onClick={(e) => { e.stopPropagation(); next() }}
        aria-label="Siguiente"
      >
        <ChevronRight size={40} />
      </button>
      <img
        src={images[index]}
        alt=""
        className="max-w-[92vw] max-h-[88vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {index + 1} / {images.length}
      </div>
    </div>
  )
}
