import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://guide-rh.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [tailwind()],
});
