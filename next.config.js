// @ts-check

// @TODO move intl config into intl.config.mjs and share it with sanity.config.ts
/**
 * @type {import('next').NextConfig['i18n']}
 **/
const i18n = {
  locales: ['en', 'no'],
  defaultLocale: 'en',
}

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
