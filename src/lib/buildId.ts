/** Bust GitHub Pages CDN/browser cache after each deploy. */
export function getBuildId(): string {
  return process.env.SITE_BUILD_ID || process.env.GITHUB_SHA || 'local';
}

/** Append a deploy-scoped query so listing navigations skip stale /blog/ HTML. */
export function withBuildId(path: string): string {
  const id = getBuildId();
  const [pathnameAndQuery, hash = ''] = path.split('#');
  const [pathname, existingQuery = ''] = pathnameAndQuery.split('?');
  const params = new URLSearchParams(existingQuery);
  params.set('b', id);
  const query = params.toString();
  return `${pathname}?${query}${hash ? `#${hash}` : ''}`;
}
