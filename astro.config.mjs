import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://u1142715-hub.github.io/resethaven/",

  base: "/resethaven",

  trailingSlash: "always",
  build: { format: "directory" },

  integrations: [sitemap()],
});
