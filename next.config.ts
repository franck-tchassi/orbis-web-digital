import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,   // 👈 Ajoute cette ligne
  },
};

export default nextConfig;
