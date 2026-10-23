import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio',
  test: {
    globals: true,
    environment: 'happy-dom',
    // pas de requête réseau quand un test affiche l'iframe de la maquette
    environmentOptions: { happyDOM: { settings: { disableIframePageLoading: true } } },
    setupFiles: ['./src/test/setup.js'],
    css: false,
  },
});
