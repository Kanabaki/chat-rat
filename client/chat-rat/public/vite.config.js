// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  esbuild: {
    loader: {
      '.js': 'jsx',
    },
  },
};
