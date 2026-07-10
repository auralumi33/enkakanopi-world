// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';

// Static output, hosted from the GitHub repo (Vercel Git integration) — not
// laptop- or cron-dependent. Canonical host is www.enkakanopi.world (the apex
// 308-redirects to www, so canonicals/sitemap/OG URLs all point at www); override
// with the SITE env var for preview builds. Assets resolve relative to BASE_URL
// so a GitHub-Pages project subpath still works as a fallback host.
//
// rehype-slug (2026-07-11 · workaround-path mitigation): silently adds `id`
// attributes to h1–h6 in every essay (MDX + Markdown). Enables the reader-
// desire path of paragraph-anchor bookmarks ("come back to THIS line"). Zero
// visual change; screen-reader-neutral; SEO-positive. Slug format matches
// GitHub's kebab-case — predictable for anyone who wants to share a deep link.
export default defineConfig({
  site: process.env.SITE || 'https://www.enkakanopi.world',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'never',
  integrations: [mdx({ rehypePlugins: [rehypeSlug] }), sitemap()],
  markdown: { rehypePlugins: [rehypeSlug] },
  build: { assets: 'assets' },
});
