import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 650,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          'fluent-components': ['@fluentui/react-components'],
          'fluent-icons': ['@fluentui/react-icons'],
        },
      },
    },
  },
});
