import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000'),
    __ENVIRONMENT__: JSON.stringify('web')
  }
})
