import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// The site's images live in public/ and are referenced in the source as
// root-absolute paths ("/images/..."). That works in dev (Vite serves public/
// from the web root) but not once the app runs inside a theme subfolder whose
// exact path isn't known at build time (staging vs production, folder renames).
//
// This build-only plugin rewrites those string literals so the image URL is
// resolved AT RUNTIME from `window.__SOLAR365_DIST__`, which functions.php sets
// to the theme's real /dist/ URL. Source keeps using clean "/images/..." paths
// and dev is unaffected (the plugin only runs on build).
function rewriteImagePaths(): Plugin {
  // Matches the opening delimiter of any string/template that starts with
  // /images/ — a double quote, single quote, or backtick. Covers plain literals
  // ("/images/x.png") as well as template literals with interpolation
  // (`/images/Gallery/${file}`), which the gallery pages use. The leading "/" is
  // dropped and the runtime base (which ends in "/") is prepended.
  const re = /(["'`])\/images\//g;
  return {
    name: 'solar365-rewrite-image-paths',
    apply: 'build',
    enforce: 'post',
    renderChunk(code) {
      if (!code.includes('/images/')) return null;
      const out = code.replace(re, (_m, q: string) => `window.__SOLAR365_DIST__+${q}images/`);
      return out === code ? null : { code: out, map: null };
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  return {
    // A relative base means the lazy-loaded JS chunks resolve relative to the
    // entry script's own URL (via import.meta.url) at runtime, so they load
    // correctly no matter what the theme folder is named or where WordPress is
    // installed. Dev keeps a root base so `npm run dev` behaves normally.
    base: isBuild ? './' : '/',
    plugins: [react(), rewriteImagePaths()],
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
