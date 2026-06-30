const repo = 'traintrack-web';

export const productionSiteUrl = 'https://traintrack.dev';

/** Root path prefix for subpath hosting. Empty for traintrack.dev (custom domain). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.GITHUB_PAGES === 'true' ? productionSiteUrl : 'http://localhost:3000');

/** Prefix public asset paths when using a subpath base. */
export function assetPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
