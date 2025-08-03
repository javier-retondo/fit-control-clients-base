import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';
import critical from 'rollup-plugin-critical';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/',
  plugins: [
    react(),

    // SVG como componente
    svgr(),

    // Gzip + Brotli

    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),

    viteCompression({
      algorithm: 'gzip',
    }),

    // Extraer CSS crítico solo en producción

    {
      ...critical({
        criticalBase: './dist/',
        criticalUrl: '/',
        criticalPages: [{ uri: '', template: 'index' }],
        width: 360,
        height: 640,
      }),
      enforce: 'post',
      apply: 'build',
    },
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'esnext',
    cssCodeSplit: true,
    minify: 'esbuild',
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {},
    },
  },

  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
