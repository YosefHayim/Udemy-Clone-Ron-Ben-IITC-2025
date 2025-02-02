import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "unsafe-none", // Disable COOP
      "Cross-Origin-Embedder-Policy": "credentialless", // Allow embedded content
    },
  },
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 1000,
  },
});
