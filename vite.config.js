import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: './',
  publicDir: 'public', // Assuming your Rive file is in the public folder
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})

