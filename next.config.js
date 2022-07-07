// @ts-check

const i18n = require('./intl.config.cjs')

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false,
  },
  compiler: { styledComponents: true },
  i18n,
  images: {
    domains: ['cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
