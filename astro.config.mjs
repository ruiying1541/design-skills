// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://ruiying1541.github.io',
  base: process.env.PUBLIC_BASE_PATH ?? '/design-skills',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});
