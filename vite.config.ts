import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      onRoutesGenerated: (routes) => {
        console.log("executed");
        return generateSitemap({ routes });
      },
    }),
  ],
});
