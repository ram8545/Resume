import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Bind to all network interfaces, allowing external access
    port: 5173, // Ensure port is 5173 (or another if you prefer)
  },
});
