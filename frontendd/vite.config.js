import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
<<<<<<< HEAD
    server: {
      host: '0.0.0.0',
      port: process.env.PORT || 5173
    }
=======
   server: {
    allowedHosts: ['.onrender.com'],
  },
    
>>>>>>> 038789bf922c10a95d13ca6df9cdd0c468a64664
  },
})
