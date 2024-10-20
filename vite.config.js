import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Diğer alias'lar
      'redux-devtools-extension': 'redux-devtools-extension/developmentOnly',
    },
  },
});