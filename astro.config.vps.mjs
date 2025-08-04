import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: process.env.SITE_URL || 'https://yourdomain.com',
  // CRITICAL: No base path for VPS deployment - serves from root
  base: '/',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false
    }
  }
}); 