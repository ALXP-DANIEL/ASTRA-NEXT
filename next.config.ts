import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  reactCompiler: true,
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
