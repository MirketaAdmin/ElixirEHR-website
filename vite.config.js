import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        // React and the router change far less often than the site, so they ship as their own
        // long-cached chunk (this also keeps the app chunk under Vite's 500 kB warning).
        codeSplitting: {
          groups: [{ name: 'vendor', test: /node_modules[\\/](react|react-dom|react-router|scheduler)[\\/]/ }],
        },
      },
    },
  },
})
