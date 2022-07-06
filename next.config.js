module.exports = {
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
    browsersListForSwc: true,
    legacyBrowsers: false,
  },
  compiler: { styledComponents: true },
  i18n: {
    locales: ['en', 'no'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
  },
}
