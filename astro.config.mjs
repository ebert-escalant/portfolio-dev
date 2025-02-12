import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: 'https://ebert-escalante.tech',
  integrations: [tailwind(), sitemap(), robotsTxt()],
  devToolbar: {
    enabled: false
  }
});