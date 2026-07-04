// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Static output. The domain (enkakanopi.world) is re-attached at deploy time —
// deliberately NOT hardcoded here yet. `site` is left to the Vercel preview URL
// via the SITE env var so canonical URLs stay portable across preview + Pages.
// Assets resolve relative to BASE_URL so a GitHub-Pages project subpath works too.
export default defineConfig({
  site: process.env.SITE || undefined,
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'never',
  integrations: [mdx()],
  build: { assets: 'assets' },
});
