/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "picsum.photos" },
      { hostname: "dummyimage.com" }
    ]
  }
}

module.exports = nextConfig
