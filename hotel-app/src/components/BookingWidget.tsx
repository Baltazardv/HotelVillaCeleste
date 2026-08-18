import { useEffect, useRef } from 'react'

// Motor de reservas externo del hotel (proveedor "R2", com-r2.com).
// Equivale al embed que entregó el proveedor: un <iframe> más un listener de
// postMessage que ajusta la altura del iframe según lo que reporta el widget.
// El <script> original se reescribe como efecto de React (los <script> en JSX
// no se ejecutan).
export default function BookingWidget() {
  const ref = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data && e.data.r2Widget === 'hotelvillacelestetlapa' && ref.current) {
        ref.current.style.height = e.data.height + 'px'
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <iframe
      ref={ref}
      id="r2-booking-hotelvillacelestetlapa"
      title="Motor de reservas — Hotel Villa Celeste"
      src="https://hotelvillaceleste.com-r2.com/embed/hotelvillacelestetlapa?color=00A76F"
      width="100%"
      height={120}
      style={{ border: 'none', width: '100%' }}
      scrolling="no"
      loading="lazy"
    />
  )
}
