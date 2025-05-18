import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Equivalent to --host (binds to 0.0.0.0)
    watch: {
      usePolling: true, // Required for Docker/macOS/Windows to detect file changes
    },
    port: 5173,
    strictPort: true, // Prevent Vite from picking another port if 5173 is taken
  },
});
