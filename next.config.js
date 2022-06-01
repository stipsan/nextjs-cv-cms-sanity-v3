module.exports = {
  compiler: { styledComponents: true },
  swcMinify: true,
  i18n: {
    locales: ['en', 'no'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        // the studio will redirect to /desk after load, we do it here so it's already done before load
        source: '/studio',
        destination: '/studio/desk',
        permanent: false,
      },
    ]
  },
}
