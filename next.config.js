// @ts-check

const i18n = require('./intl.config.json')

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {
    // urlImports: ['https://deno.land/x/'],
    browsersListForSwc: true,
    legacyBrowsers: false,
  },
  compiler: { styledComponents: true },
  i18n,
  images: {
    domains: ['cdn.sanity.io', 'source.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        // To allow esbuild-wasm to run on the edge
        'typeof Buffer': JSON.stringify('undefined'),
      })
    )

    return config
  },
  /*
  webpack: (config, options) => {
    config.experiments = {
      // topLevelAwait: true,
    }
    return config
  },
  // */
}

module.exports = nextConfig
