import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Project page served from https://<user>.github.io/HotelVillaCeleste/
  base: '/HotelVillaCeleste/',
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT || '5173'),
    strictPort: true,
  },
})
