import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useCache: true,
  },
  images: {
    remotePatterns: [new URL("https://picsum.photos/**")],
  },
};

export default nextConfig;
