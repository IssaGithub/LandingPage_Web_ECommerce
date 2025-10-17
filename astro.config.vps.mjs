import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: process.env.SITE_URL || "https://digital-commerce-zaytoun.de",
  // CRITICAL: Force empty base path for VPS - ignore any environment variables
  base: undefined,
  i18n: {
    defaultLocale: "de",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
