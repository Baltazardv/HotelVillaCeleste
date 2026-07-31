// Central site data — Hotel Villa Celeste, Tlapa de Comonfort, Guerrero

// Consulta usada para los enlaces y el mapa embebido de Google Maps.
const mapsQuery = encodeURIComponent(
  'Hotel Villa Celeste, Calle Morelos 360, Col. San Francisco, Tlapa de Comonfort, Guerrero, 41300',
)

export const contact = {
  whatsapp: { display: '+52 (757) 477-5876', href: 'https://wa.me/527574775876' },
  whatsappMsg:
    'https://wa.me/527574775876?text=Hola,%20me%20gustar%C3%ADa%20conocer%20disponibilidad%20y%20tarifas%20del%20Hotel%20Villa%20Celeste.',
  phone1: { display: '+52 (757) 47 60 606', href: 'tel:+527574760606' },
  email: 'hotel.villa.celeste26@gmail.com',
  facebook: 'https://www.facebook.com/share/1H8KdLfACK/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/hotel.villaceleste',
  address: {
    street: 'Calle Morelos No. 360, Col. San Francisco',
    cityLine: 'Tlapa de Comonfort, Guerrero. C.P. 41300',
    full: 'Calle Morelos No. 360, Col. San Francisco, Tlapa de Comonfort, Guerrero, C.P. 41300',
  },
  maps: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  mapsEmbed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  city: 'Tlapa de Comonfort, Guerrero',
  region: 'Región de La Montaña · México',
}

const img = (folder: string, n: number) => `/images/${folder}/vc-${n}.webp`

export const logo = '/images/logos/LOGOS.webp'

// Emblema del gobierno municipal de Tlapa de Comonfort
export const tlapaLogo = '/images/logos/tlapa-gobierno.webp'

export const heroSlides = [22, 6, 14, 34, 151, 11].map((n) => img('Hotel', n))

// Imagen de respaldo del hero (se muestra mientras carga el video / si no carga)
export const heroPoster = img('Hotel', 6)

export interface RoomType {
  slug: string
  name: string
  tagline: string
  description: string
  capacity: string
  features: string[]
  images: string[]
}

// Catálogo real de habitaciones (fuente: catálogo de WhatsApp Business del hotel).
// Las tarifas no se publican en el catálogo; se consultan por teléfono/WhatsApp.
// Las fotos se emparejaron por contexto (mismo tipo de cama, acabados y mobiliario)
// a partir de nuestra galería, ya que las del catálogo eran de baja calidad.
// "Doble de ventilador" y "Doble con ventilador" del catálogo son la misma
// categoría (la segunda sin foto), por lo que se unificaron en una sola.
export const roomTypes: RoomType[] = [
  {
    slug: 'junior-suite',
    name: 'Junior Suite',
    tagline: 'La más amplia',
    description:
      'Nuestra habitación más espaciosa, con cama King size, piso tipo mármol y una cómoda zona de escritorio. Ambiente luminoso y moderno, ideal para estancias prolongadas o una ocasión especial.',
    capacity: '1 a 2 personas',
    features: ['1 cama King size', 'Amplio espacio', 'Piso tipo mármol', 'Escritorio de trabajo', 'Baño privado', 'TV y Wi-Fi gratuito'],
    // Solo habitaciones de UNA cama King, piso de mármol, cubrecama verde tropical
    images: [120, 119, 121, 123, 124, 122].map((n) => img('Hotel', n)),
  },
  {
    slug: 'sencilla-king-aa',
    name: 'Habitación Sencilla con A/C',
    tagline: 'Descanso con clima',
    description:
      'Habitación con cama King size y aire acondicionado, perfecta para descansar del calor de La Montaña. Cómoda, privada y con baño propio.',
    capacity: '1 a 2 personas',
    features: ['1 cama King size', 'Aire acondicionado', 'Baño privado', 'TV y Wi-Fi gratuito'],
    // Cama King, cubrecama turquesa, aire acondicionado
    images: [138, 140, 141, 139].map((n) => img('Hotel', n)),
  },
  {
    slug: 'doble-aa',
    name: 'Habitación Doble con A/C',
    tagline: 'Para compartir, con clima',
    description:
      'Dos camas matrimoniales y aire acondicionado en un espacio amplio. La opción ideal para familias o grupos que buscan comodidad y frescura.',
    capacity: '2 a 4 personas',
    features: ['2 camas matrimoniales', 'Aire acondicionado', 'Baño privado', 'TV y Wi-Fi gratuito'],
    // Dos camas, cubrecama verde tropical, piso de mármol, aire acondicionado
    images: [110, 111, 112, 115, 113].map((n) => img('Hotel', n)),
  },
  {
    slug: 'doble-ventilador',
    name: 'Habitación Doble con Ventilador',
    tagline: 'Espacio para dos',
    description:
      'Habitación con dos camas y ventilador de techo, cómoda y bien ventilada. Una opción práctica para compartir sin renunciar al confort.',
    capacity: '2 a 4 personas',
    features: ['2 camas', 'Ventilador de techo', 'Baño privado', 'TV y Wi-Fi gratuito'],
    // Dos camas, cubrecama naranja, ventilador
    images: [135, 133, 137, 134, 136].map((n) => img('Hotel', n)),
  },
  {
    slug: 'sencilla-ventilador',
    name: 'Habitación Sencilla con Ventilador',
    tagline: 'Confort esencial',
    description:
      'Acogedora habitación con cama matrimonial y ventilador de techo. Sencilla, limpia y confortable, perfecta para una estancia tranquila.',
    capacity: '1 a 2 personas',
    features: ['1 cama matrimonial', 'Ventilador de techo', 'Baño privado', 'TV y Wi-Fi gratuito'],
    // Una cama matrimonial, cubrecama beige a rayas, ventilador
    images: [143, 144, 145, 147].map((n) => img('Hotel', n)),
  },
  {
    slug: 'triple-ventilador',
    name: 'Habitación Triple con Ventilador',
    tagline: 'Ideal para grupos',
    description:
      'Amplia habitación con tres camas y ventilador de techo, pensada para grupos de amigos o familias. Espacio y comodidad a un excelente valor.',
    capacity: 'Hasta 3 personas',
    features: ['3 camas', 'Ventilador de techo', 'Baño privado', 'TV y Wi-Fi gratuito'],
    // Única foto disponible es la del catálogo (adaptada a formato horizontal)
    images: ['/images/Catalogo/triple-ventilador.webp'],
  },
]

// Detalles de bienvenida y amenidades en habitación
export const roomDetails = [117, 118, 119, 113, 114].map((n) => img('Hotel', n))

export interface Facility {
  title: string
  description: string
  images: string[]
}

export const facilities: Facility[] = [
  {
    title: 'Jardines y Áreas Verdes',
    description:
      'Amplios jardines con vegetación tropical, palmeras y senderos sombreados que invitan al descanso y la convivencia al aire libre.',
    images: [6, 13, 14, 21, 26, 39, 40].map((n) => img('Hotel', n)),
  },
  {
    title: 'Alberca',
    description:
      'Refréscate en nuestra alberca rodeada de jardines, el lugar perfecto para relajarte bajo el sol de La Montaña.',
    images: [9, 12, 148, 149, 150, 151].map((n) => img('Hotel', n)),
  },
  {
    title: 'Arquitectura Colonial',
    description:
      'Corredores con arcos de cantera, columnas y patios que evocan la tradición y la historia de la región.',
    images: [7, 11, 16, 25, 28, 34, 33, 23].map((n) => img('Hotel', n)),
  },
  {
    title: 'Restaurante y Comedor',
    description:
      'Espacios amplios para disfrutar de los alimentos en un ambiente tranquilo y familiar.',
    images: [28, 29, 32].map((n) => img('Hotel', n)),
  },
]

// ---- Sección dedicada: La mejor atención ----
export const service = {
  title: 'La mejor atención de Tlapa',
  intro:
    'En Hotel Villa Celeste, nuestro mayor orgullo es la gente. Un equipo comprometido cuida cada detalle —desde la recepción hasta la limpieza— para que tu única preocupación sea descansar.',
  // Fotos del personal operativo: recepción, lavandería y limpieza
  // (153/154/155 eran la misma recepcionista; se deja solo una)
  images: [153, 156, 152, 116, 142].map((n) => img('Hotel', n)),
  points: [
    { icon: 'ConciergeBell', title: 'Recepción 24/7', text: 'Personal atento a cualquier hora para asistirte en lo que necesites.' },
    { icon: 'Sparkles', title: 'Limpieza impecable', text: 'Habitaciones y áreas comunes cuidadas con esmero todos los días.' },
    { icon: 'HeartHandshake', title: 'Trato cálido', text: 'La hospitalidad guerrerense que te hace sentir como en casa.' },
    { icon: 'Award', title: 'Experiencia memorable', text: 'Huéspedes que regresan por el servicio que nos distingue.' },
  ],
}

export interface Attraction {
  title: string
  description: string
  distance: string
  images: string[]
}

export const tlapaAttractions: Attraction[] = [
  {
    title: 'Catedral de Tlapa',
    description:
      'El imponente Santuario y Catedral de Tlapa, joya colonial con bellos retablos e interiores de cantera, a unos pasos del hotel.',
    distance: 'A 2 min del hotel',
    images: [58, 59, 60, 62, 63, 64, 65, 66].map((n) => img('Catedral', n)),
  },
  {
    title: 'Zócalo y Kiosco',
    description:
      'El corazón de Tlapa: su plaza principal con el kiosco tradicional, ideal para pasear, tomar un café y disfrutar el ambiente local.',
    distance: 'A 3 min del hotel',
    images: [43, 44, 72, 78, 79, 84].map((n) => img('Zocalo', n)),
  },
  {
    title: 'Palacio Municipal y Portales',
    description:
      'Los portales con sus murales históricos y la vida comercial del centro, donde late la cultura de la región de La Montaña.',
    distance: 'En el centro histórico',
    images: [87, 92, 93, 103, 104].map((n) => img('Zocalo', n)),
  },
]

export const homeHighlights = [
  { icon: 'Building2', title: 'Encanto Colonial', text: 'Arquitectura tradicional con arcos de cantera, jardines y patios llenos de historia.', image: img('Hotel', 11) },
  { icon: 'Waves', title: 'Jardines y Alberca', text: 'Amplias áreas verdes con palmeras y una alberca para tu descanso.', image: img('Hotel', 6) },
  { icon: 'MapPin', title: 'Centro de Tlapa', text: 'A unos pasos de la Catedral y el Zócalo, en el corazón de La Montaña.', image: img('Catedral', 58) },
  { icon: 'ConciergeBell', title: 'Atención 24/7', text: 'Un equipo cálido y personalizado, atento a cada detalle a toda hora.', image: img('Hotel', 153) },
]
