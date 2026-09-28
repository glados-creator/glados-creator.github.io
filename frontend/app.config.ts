import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  ssr: false,
  server: {
    preset: "static",
    prerender: { crawlLinks: true, routes: ["/"] },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});