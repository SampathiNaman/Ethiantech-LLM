/**
 * vite.config.js
 *
 * Vite configuration for the LMS Platform frontend.
 *
 * Key additions over the scaffold default:
 *   - @/ path alias → src/ (required by all internal imports per architecture §14.3)
 *   - Tailwind v4 CSS-first plugin (no tailwind.config.js required)
 *
 * Architecture reference: frontend_architecture.md §14.3
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      // All internal imports use @/ to avoid deep relative paths (../../)
      '@': resolve(__dirname, 'src'),
    },
  },
})
