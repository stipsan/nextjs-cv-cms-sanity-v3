import { defaultLocale, locales } from 'lib/intl.config'
import {absolute } from 'lib/url'
import { headers } from 'next/headers';

// import { getSettings } from 'lib/sanity.client'
import favicon from './favicon.png'

export default async function LocaleHead({
  params,
}: {
  params: { locale: string }
}) {
  const host =  headers().get('host')
  
  return (
    <>
      <title>{`Cody Olsen, Full Stack Engineer – CV`}</title>
      <meta name="theme-color" content="#fff" />
      <meta
        name="theme-color"
        content="#0f172a"
        media="(prefers-color-scheme: dark)"
      />
      <link rel="shortcut icon" type="image/png" href={favicon.src} />

      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${absolute(`/${locale}`)}`}
        />
      ))}
      <link rel="canonical" href={`${absolute(`/${defaultLocale}`)}`}
      />
      <meta property="og:url"content={`${absolute(`/${defaultLocale}`)}`}
      />

      <meta
        property="og:image"
        // Because OG images must have a absolute URL, we use the
        // `VERCEL_URL` environment variable to get the deployment’s URL.
        // More info:
        // https://vercel.com/docs/concepts/projects/environment-variables
        content={`${absolute('/api/og')}`}
      />
    </>
  )
}
