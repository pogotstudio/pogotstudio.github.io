import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Vite config — https://vitejs.dev/config/
export default defineConfig({
  // Set base to the GitHub Pages repository sub-path.
  // For a repo at github.com/<user>/PogotStudioStatic, use '/PogotStudioStatic/'.
  // For a custom domain or root deployment, set to '/'.
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: true,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
})
