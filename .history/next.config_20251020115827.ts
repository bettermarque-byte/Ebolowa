import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [50, 75, 90, 100], // include 100 if you want to allow it
    // other image config...
  },
};

export default nextConfig;
