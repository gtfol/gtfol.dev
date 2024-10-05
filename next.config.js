/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: [
    {
      source: "/.well-known/apple-developer-merchantid-domain-association",
      headers: [
        {
          key: "Cache-Control",
          value: "no-cache",
        },
      ],
    },
  ],
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
