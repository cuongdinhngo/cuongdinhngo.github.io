import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base '/' — this deploys to the org root page cuongdinhngo.github.io
export default defineConfig({
  base: '/',
  plugins: [react()],
})
