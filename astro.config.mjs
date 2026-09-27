import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/tahutech.github.io',
  output: 'static',
  build: { format: 'directory' }
});