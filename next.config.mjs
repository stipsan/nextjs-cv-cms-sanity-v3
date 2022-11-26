// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {
    appDir: true,
    urlImports: ['https://themer.sanity.build/'],
    legacyBrowsers: false,
    runtime: 'experimental-edge',
  },
  images: {
    domains: ['cdn.sanity.io', 'source.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
