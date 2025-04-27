import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/road-grip/', // <-- VERY IMPORTANT!
  plugins: [react()],
})
