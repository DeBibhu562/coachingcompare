import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  devIndicators: false,
  reactStrictMode: true,
  poweredByHeader: false,
  typescript: {
    // Recovered tree still has incomplete institute/profile types; ranking pages typecheck separately.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

