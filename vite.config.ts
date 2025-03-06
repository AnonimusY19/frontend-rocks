import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'https://sturdy-space-guacamole-4xq65q7q6q6hjw5q-5173.app.github.dev/' : '/',
  plugins: [react(), tailwindcss()],
})
