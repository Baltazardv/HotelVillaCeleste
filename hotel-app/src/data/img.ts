// Image size helpers. Originals live at /images/<folder>/<file>.
// Optimized variants mirror the path under /thumbs (640px) and /med (1400px).
// Paths are prefixed with Vite's BASE_URL so they resolve correctly when the
// site is served from a sub-path (e.g. GitHub Pages: /HotelVillaCeleste/).
const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const withBase = (src: string) => base + src
export const thumb = (src: string) => withBase(src.replace('/images/', '/images/thumbs/'))
export const med = (src: string) => withBase(src.replace('/images/', '/images/med/'))
