import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ResumeRapid/',
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'client/src') },
      { find: '@shared', replacement: path.resolve(__dirname, 'shared') },
      { find: '@assets', replacement: path.resolve(__dirname, 'attached_assets') },
    ]
  },
  root: "client",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
  },
});
