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
};

export default nextConfig;
