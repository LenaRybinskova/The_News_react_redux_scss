import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/The_News_react_redux_scss",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
