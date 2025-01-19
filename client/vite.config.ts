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
  build: {
    outDir: "build", // Set output directory for the build
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit (optional)
  },
});
