import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/nombre-de-tu-nuevo-repo/' : '/',
    server: {
      open: '/',
      watch: {
        usePolling: true
      }
    }
  }
})