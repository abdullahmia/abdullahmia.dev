/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // my image link is http://localhost:8000/uploads/2023-11-16T18-33-56.723Z-6f79bb73-d511-4183-92f0-9bdb96cdf575.jpeg. So configure it
    remotePatterns: [
      {
        // protocol: "http",
        hostname: "**",
        // hostname: "api-abdullahmia-dev.onrender.com",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
