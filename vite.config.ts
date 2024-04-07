import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(), // Add React support
    // Add other plugins if needed
  ],
  server: {
    // Server configuration options
  },
  build: {
    // Build configuration options
  },
});
