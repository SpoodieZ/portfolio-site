import type { NextConfig } from "next";

// Tiếng Việt nằm ở "/" (nội bộ là /vi), tiếng Anh ở "/en".
const config: NextConfig = {
  async redirects() {
    return [
      { source: "/vi", destination: "/", permanent: false },
      { source: "/vi/:path*", destination: "/:path*", permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: "/", destination: "/vi" },
      { source: "/privacy", destination: "/vi/privacy" },
      { source: "/work/:slug", destination: "/vi/work/:slug" },
    ];
  },
};

export default config;
