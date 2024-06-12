// vite.config.js
import { defineConfig } from 'vite';
import proxy from 'vite-plugin-proxy';

export default defineConfig({
  plugins: [
    proxy({
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }),
  ],
});
