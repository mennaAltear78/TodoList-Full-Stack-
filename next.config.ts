import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['my-proxy.com', '*.my-proxy.com', 'localhost', '127.0.0.1'],
    },
  },
};

export default nextConfig;
