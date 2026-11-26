import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' permite publicar la carpeta dist en cualquier ruta o hosting.
export default defineConfig({
  plugins: [react()],
  base: './',
});
