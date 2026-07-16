import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Public URL the built theme assets are served from in WordPress.
// Defaults to a standard install at wp-content/themes/solar365/. If you rename
// the theme folder or host assets elsewhere, set VITE_THEME_BASE to match.
const THEME_BASE = process.env.VITE_THEME_BASE || '/wp-content/themes/solar365/dist/';

// The site's images live in public/ and are referenced in the source as
// root-absolute paths ("/images/..."). That works in dev (Vite serves public/
// from the web root) but not once the app is served from a theme subfolder.
// This build-only plugin rewrites those literals to the theme asset URL so the
// source can keep using clean "/images/..." paths.
function rewriteImagePaths(base: string): Plugin {
  return {
    name: 'solar365-rewrite-image-paths',
    apply: 'build',
    enforce: 'post',
    renderChunk(code) {
      if (!code.includes('/images/')) return null;
      return { code: code.split('/images/').join(`${base}images/`), map: null };
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  return {
    // Dev keeps a root base so `npm run dev` behaves normally; the production
    // build targets the WordPress theme.
    base: isBuild ? THEME_BASE : '/',
    plugins: [react(), rewriteImagePaths(THEME_BASE)],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    build: {
      outDir: 'wordpress/solar365/dist',
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {
        // Build straight from the app entry (no index.html); functions.php
        // reads the manifest and enqueues the hashed files.
        input: 'src/main.tsx',
      },
    },
  };
});
