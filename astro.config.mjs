import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://guide-rh.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [tailwind(), sitemap({ changefreq: 'weekly', priority: 0.7 })],
});
