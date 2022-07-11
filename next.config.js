// @ts-check

const i18n = require('./intl.config.json')

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {
    urlImports: ['https://cv.creativecody.dev/'],
    browsersListForSwc: true,
    legacyBrowsers: false,
  },
  compiler: { styledComponents: true },
  i18n,
  images: {
    domains: ['cdn.sanity.io', 'source.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
