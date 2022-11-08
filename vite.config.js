import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: process.env.NODE_ENV === "production" ? "/fatura-generator/" : "/",
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
