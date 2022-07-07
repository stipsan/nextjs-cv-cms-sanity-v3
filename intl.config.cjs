// @ts-check

// @TODO move intl config into intl.config.mjs and share it with sanity.config.ts
/**
 * @type {import('next').NextConfig['i18n']}
 **/
const config = {
  locales: ['en', 'no'],
  defaultLocale: 'en',
}

module.exports = config
