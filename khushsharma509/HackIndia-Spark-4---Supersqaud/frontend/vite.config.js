import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow serving files from one level up to the project root
        '..',
        // Add your specific node_modules directory
        'C:/Users/Swast/node_modules'
      ]
    }
  }
})
