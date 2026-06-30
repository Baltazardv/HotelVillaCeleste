import { Phone, MessageCircle } from 'lucide-react'
import { contact } from '../data/site'

export default function CTABand({ title, text }: { title?: string; text?: string }) {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-16" style={{ background: '#0d1f3c' }}>
      <div className="max-w-4xl mx-auto liquid-glass-navy rounded-2xl p-8 md:p-10 text-center border border-yellow-400/20">
        <h3 className="text-2xl md:text-3xl font-light text-white mb-3">{title || '¿Listo para tu próxima estancia?'}</h3>
        <p className="text-gray-300 text-base mb-6 max-w-xl mx-auto">
          {text || 'Reserva directo con nosotros y obtén la mejor tarifa. Contáctanos por el medio que prefieras.'}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={contact.phone1.href} className="inline-flex items-center gap-2 bg-yellow-400 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-yellow-300 transition-colors" style={{ color: '#0a1628' }}>
            <Phone size={16} /> {contact.phone1.display}
          </a>
          <a href={contact.phone2.href} className="inline-flex items-center gap-2 bg-yellow-400 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-yellow-300 transition-colors" style={{ color: '#0a1628' }}>
            <Phone size={16} /> {contact.phone2.display}
          </a>
          <a href={contact.whatsappMsg} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-green-400 transition-colors">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
