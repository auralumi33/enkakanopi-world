// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Static output, hosted from the GitHub repo (Vercel Git integration) — not
// laptop- or cron-dependent. Canonical domain is enkakanopi.world; override with
// the SITE env var for preview builds. Assets resolve relative to BASE_URL so a
// GitHub-Pages project subpath still works as a fallback host.
export default defineConfig({
  site: process.env.SITE || 'https://enkakanopi.world',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'never',
  integrations: [mdx(), sitemap()],
  build: { assets: 'assets' },
});
