/** @type {import("next").NextConfig} */

const {
  withAxiom
} = require("next-axiom")

module.exports = withAxiom({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [{
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
      }, ],
    }, ]
  },
})
