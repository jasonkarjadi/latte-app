/** @type {import("next").NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: ["latin"], display: "swap" },
      },
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "2000",
        pathname: "/image/**",
      },
    ],
  },
};

export default nextConfig;
