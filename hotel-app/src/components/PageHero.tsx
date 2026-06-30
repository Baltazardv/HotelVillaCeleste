import { med } from '../data/img'

export default function PageHero({ title, subtitle, image }: { title: string; subtitle?: string; image: string }) {
  return (
    <section className="relative h-[42vh] min-h-[300px] md:h-[46vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${med(image)}')` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-black/50 to-black/40" />
      <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-12 max-w-6xl mx-auto w-full">
        <div className="gold-divider !mx-0" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white" style={{ letterSpacing: '-0.03em' }}>{title}</h1>
        {subtitle && <p className="text-gray-200 text-base md:text-lg mt-3 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  )
}
