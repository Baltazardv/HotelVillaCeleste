interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="text-center mb-14">
      {eyebrow && (
        <p className="text-yellow-400 text-sm tracking-[0.3em] uppercase font-medium mb-3">{eyebrow}</p>
      )}
      <div className="gold-divider" />
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
