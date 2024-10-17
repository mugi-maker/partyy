import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build:{
    chunkSizeWarningLimit: 1500,
  },
  plugins: [svelte()],
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib')
      
    }
  }
})
