/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "demo.cmssuperheroes.com",
      },
    ],
  },
};

export default nextConfig;
