/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "picsum.photos" },
      { hostname: "dummyimage.com" },
      { hostname: "storage.googleapis.com" }
    ]
  }
}

module.exports = nextConfig
