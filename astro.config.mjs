import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://USERNAME.github.io',
  base: process.env.NODE_ENV === 'production' ? '/LandingPage_Web_ECommerce' : undefined,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false
    }
  }
}); 