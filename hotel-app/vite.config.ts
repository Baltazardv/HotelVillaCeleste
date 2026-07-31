import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from the root of the custom domain: https://hotelvillacelestetlapa.com/
  base: '/',
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT || '5173'),
    strictPort: true,
  },
})
