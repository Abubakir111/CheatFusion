import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CheatFusion',

  plugins: [react()],
  css: {
    devSourcemap: true // Включает sourcemaps для CSS в режиме разработки
  }
});
