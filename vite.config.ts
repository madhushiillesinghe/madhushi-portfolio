import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build`        -> normal multi-file build in /dist (for Vercel / Netlify / GitHub Pages)
// `npm run build:single` -> one self-contained index.html (handy for sharing a preview)
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), ...(mode === 'single' ? [viteSingleFile()] : [])],
  // Use a relative base so the build also works on GitHub Pages sub-paths
  base: './',
  // Inline (empty) PostCSS config stops Vite from picking up stray
  // postcss.config.* files in parent folders (e.g. C:\Users\Asus) that run Tailwind v3.
  css: { postcss: {} },
}))
