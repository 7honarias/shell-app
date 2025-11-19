import { defineConfig } from 'vite'
import * as packageJson from './package.json'; 

const { dependencies } = packageJson; 

import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        remoteLogin: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true, 
          requiredVersion: dependencies.react, 
        },
        'react-dom': { 
          singleton: true, 
          requiredVersion: dependencies['react-dom'], 
        },
        'react-router-dom': { 
          singleton: true, 
          requiredVersion: dependencies['react-router-dom'], 
        },
        'react-hook-form': { 
          singleton: true, 
          requiredVersion: dependencies['react-hook-form'], 
        },
      },
    }),
  ],
  server: {
    port: 5000,
    strictPort: true,
    cors: true,
  },
  preview: {
    port: 5000,
    strictPort: true,
    cors: true,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
