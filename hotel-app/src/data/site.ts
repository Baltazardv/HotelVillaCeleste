// Central site data — Hotel Villa Celeste, Tlapa de Comonfort, Guerrero

export const contact = {
  whatsapp: { display: '+52 (757) 477-5876', href: 'https://wa.me/527574775876' },
  whatsappMsg:
    'https://wa.me/527574775876?text=Hola,%20me%20gustar%C3%ADa%20conocer%20disponibilidad%20y%20tarifas%20del%20Hotel%20Villa%20Celeste.',
  phone1: { display: '+52 (757) 47 60 606', href: 'tel:+527574760606' },
  phone2: { display: '+52 (757) 49 71 625', href: 'tel:+527574971625' },
  email: 'hotel.villa.celeste26@gmail.com',
  facebook: 'https://www.facebook.com/HotelVillaCeleste',
  instagram: 'https://www.instagram.com/hotel.villaceleste',
  city: 'Tlapa de Comonfort, Guerrero',
  region: 'Región de La Montaña · México',
}

const img = (folder: string, n: number) => `/images/${folder}/vc-${n}.webp`

export const logo = '/images/logos/LOGOS.webp'

export const heroSlides = [22, 6, 14, 34, 151, 11].map((n) => img('Hotel', n))

export interface RoomType {
  slug: string
  name: string
  tagline: string
  description: string
  capacity: string
  features: string[]
  images: string[]
}

// NOTA: los trípticos no especifican categorías ni tarifas de habitación.
// Los tipos siguientes se definieron agrupando las fotos reales por estilo,
// número de camas y acabados, de modo que cada galería corresponde a su tipo.
export const roomTypes: RoomType[] = [
  {
    slug: 'estandar',
    name: 'Habitación Estándar',
    tagline: 'Confort tradicional',
    description:
      'Acogedora habitación de estilo clásico con cama matrimonial, mobiliario de madera y decoración cálida. Ideal para una estancia tranquila y confortable.',
    capacity: '1 a 2 personas',
    features: ['Cama matrimonial', 'Baño privado', 'Ventilador de techo', 'TV y Wi-Fi gratuito'],
    // Habitaciones clásicas de una cama (cubrecama naranja / azul)
    images: [128, 129, 130, 132, 138, 139, 141].map((n) => img('Hotel', n)),
  },
  {
    slug: 'doble',
    name: 'Habitación Doble',
    tagline: 'Espacio para compartir',
    description:
      'Perfecta para familias o grupos, con dos camas y amplio espacio. Comodidad y privacidad en un ambiente luminoso y bien ventilado.',
    capacity: '2 a 4 personas',
    features: ['2 camas', 'Baño privado', 'Clóset amplio', 'TV y Wi-Fi gratuito'],
    // Habitaciones con dos camas
    images: [133, 134, 135, 136, 110, 112].map((n) => img('Hotel', n)),
  },
  {
    slug: 'superior',
    name: 'Habitación Superior',
    tagline: 'Estilo renovado',
    description:
      'Habitaciones renovadas con pisos de mármol, acabados contemporáneos y baño moderno, conservando el encanto del hotel.',
    capacity: '1 a 2 personas',
    features: ['Cama matrimonial o King', 'Baño moderno', 'Pisos de mármol', 'Escritorio de trabajo'],
    // Habitaciones modernas, piso de mármol, cubrecama verde
    images: [111, 121, 122, 123, 124, 125].map((n) => img('Hotel', n)),
  },
  {
    slug: 'suite',
    name: 'Suite Villa Celeste',
    tagline: 'La máxima comodidad',
    description:
      'Nuestra opción más amplia, con cama King, sala de estar y detalles de bienvenida. El espacio ideal para una ocasión especial o estancias prolongadas.',
    capacity: '2 a 4 personas',
    features: ['Cama King + sala de estar', 'Baño completo', 'Amplio espacio', 'Amenidades de bienvenida'],
    // Suites amplias con sala / cama King
    images: [115, 120, 144, 145, 147].map((n) => img('Hotel', n)),
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
  { icon: 'Building2', title: 'Encanto Colonial', text: 'Arquitectura tradicional con arcos, jardines y patios.' },
  { icon: 'Waves', title: 'Jardines y Alberca', text: 'Amplias áreas verdes y alberca para tu descanso.' },
  { icon: 'MapPin', title: 'Centro de Tlapa', text: 'A pasos de la Catedral y el Zócalo.' },
  { icon: 'ConciergeBell', title: 'Atención 24/7', text: 'Servicio cálido y personalizado todo el día.' },
]
