import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Netlify publish directory is configured as `build`, keep the CRA output path.
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
