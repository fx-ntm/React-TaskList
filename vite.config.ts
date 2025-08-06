import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/resources/js',
      '@components': '/resources/js/components',
      '@pages': '/resources/js/pages',
      '@types': '/resources/js/types',
      '@hooks': '/resources/js/hooks',
      '@contexts': '/resources/js/contexts',
    },
  },
})
