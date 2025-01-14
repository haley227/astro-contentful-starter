import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind()],
  site: 'https://haley227.github.io',
  base: 'astro-contentful-starter',
});