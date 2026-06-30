# traintrack-web

The official website and documentation for [traintrack](https://github.com/OKKHALIL3/traintrack) — a local-first coordination layer for AI coding agents.

**Live site:** https://traintrack.dev/  
**Main repo:** https://github.com/OKKHALIL3/traintrack  
**npm:** https://www.npmjs.com/package/traintrack

Built with [Next.js](https://nextjs.org/) and [Fumadocs](https://www.fumadocs.dev/). Static export — no server required at runtime.

## What's in here

```
app/                 landing page + docs routes
content/docs/*.mdx   documentation source
components/          shared React components
lib/                 site config + Fumadocs source loader
public/assets/       wordmark + favicon
source.config.ts     Fumadocs MDX collection config
```

## Develop

```bash
npm install
npm run dev          # → http://localhost:3000
```

Edit docs in `content/docs/*.mdx`. Sidebar order is controlled by `content/docs/meta.json`.

## Build

```bash
npm run build        # static export → out/
npm start            # preview the export
```

To preview the production build locally:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_SITE_URL=https://traintrack.dev npm run build
npm start
```

## Deploy

Pushes to `main` deploy automatically to **https://traintrack.dev/** via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) (GitHub Pages + custom domain).

Output directory: `out/`

## License

Apache-2.0 — see [LICENSE](LICENSE).
