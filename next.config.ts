import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Avoid picking up lockfiles from parent folders as the project root.
  outputFileTracingRoot: path.resolve("."),
  turbopack: { root: path.resolve(".") },
};

export default nextConfig;
