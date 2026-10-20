// Prefix static asset paths with the configured basePath so they resolve
// correctly on GitHub Pages project sites (where the site lives at
// /<repo-name>/ instead of root).
export const assetPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  return `${basePath}${path}`
}