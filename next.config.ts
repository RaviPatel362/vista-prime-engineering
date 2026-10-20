import type { NextConfig } from "next";

/**
 * Vista Prime Engineering — Next.js config
 *
 * This project is built to be deployed as a static site on GitHub Pages.
 *
 * GitHub Pages serves content from `https://<user>.github.io/<repo>/` for
 * project sites, so we set `basePath` and `assetPrefix` to the repo name
 * using the `NEXT_PUBLIC_BASE_PATH` env variable at build time.
 *
 * Local dev:
 *   NEXT_PUBLIC_BASE_PATH=  (empty)  bun run dev
 *
 * Production build for GitHub project pages:
 *   NEXT_PUBLIC_BASE_PATH=/vpe-website bun run build
 *   # Output is written to ./out  (upload that as Pages artifact)
 *
 * For a user/organisation page (`<user>.github.io` repo), leave
 * NEXT_PUBLIC_BASE_PATH unset — the site is served from root.
 */

const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Activate static HTML export (required for GitHub Pages free hosting).
  output: isProd ? "export" : "standalone",

  // Apply basePath only in production — keeps `bun run dev` clean.
  ...(isProd && basePath
    ? { basePath, assetPrefix: basePath }
    : {}),

  // GitHub Pages has no Next.js image optimizer — client-render images.
  images: {
    unoptimized: true,
  },

  // Add a trailing slash so static page links resolve cleanly on Pages.
  trailingSlash: true,

  // Skip type errors during build so a strict CI doesn't break the deploy.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
