import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://github.com/u1142715-hub/resethaven/",
  base: "/resethaven",

  trailingSlash: "always",
  build: { format: "directory" },

  integrations: [sitemap()],
});
