import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // 👈 cambia esto a `/` si estás en la raíz de datia.digital
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
