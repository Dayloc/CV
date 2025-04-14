import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  base: '/CV/' // ← ¡Esta línea es crucial para GitHub Pages!
})