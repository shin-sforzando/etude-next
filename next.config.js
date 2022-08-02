/** @type {import("next").NextConfig} */

module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [{
      source: "/(.*)",
      headers: [{
        key: "X-DNS-Prefetch-Control",
        value: "on",
      }]
    }]
  }
}
