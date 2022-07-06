const i18n = {
  locales: ['en', 'no'],
  defaultLocale: 'en',
}

module.exports = {
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
  async redirects() {
    return [
      {
        // Takes care of redirecting /studio to /studio/en as Sanity Studio workspaces requires the same number of
        // path segments in `basePath`. In other words, two workspaces with basePath `/en/studio` and '/no/studio' is allowed
        // while `/studio` and '/no/studio' is not
        source: `/studio/:tool*`,
        destination: `/${i18n.defaultLocale}/studios/:tool*`,
        permanent: false,
        locale: false,
      },
    ]
  },
}
