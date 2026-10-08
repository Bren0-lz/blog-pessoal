import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export to `out/` — Hostinger's Single plan can't run Node.js.
  output: "export",
  // Emit `/artigos/slug/index.html` so Apache serves clean URLs.
  trailingSlash: true,
  images: { unoptimized: true },
  // Avoid picking up lockfiles from parent folders as the project root.
  outputFileTracingRoot: path.resolve("."),
  turbopack: { root: path.resolve(".") },
};

export default nextConfig;
