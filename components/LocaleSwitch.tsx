import cx from 'classnames'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo } from 'react'

export default memo(function LocaleSwitch({
  displayNames,
}: {
  displayNames: { [key: string]: string[] }
}) {
  const { locale: currentLocale, locales, route, defaultLocale } = useRouter()
  const currentIdx = locales.indexOf(currentLocale)

  return (
    <>
      <Head>
        {locales.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={new URL(
              locale === defaultLocale ? '/' : `/${locale}`,
              'https://cv.cocody.dev/'
            ).toString()}
          />
        ))}
        <link
          rel="canonical"
          href={new URL(
            currentLocale === defaultLocale ? '/' : `/${currentLocale}`,
            'https://cv.cocody.dev/'
          ).toString()}
        />
        <meta
          property="og:url"
          content={new URL(
            currentLocale === defaultLocale ? '/' : `/${currentLocale}`,
            'https://cv.cocody.dev/'
          ).toString()}
        />
      </Head>
      <nav className="shadow-inner shadow-slate-400/25 p-0.5 rounded-lg justify-self-center inline-flex space-x-1 bg-slate-100 transition">
        {locales.map((locale) => (
          <Link key={locale} href={route} locale={locale} prefetch={false}>
            <a
              className={cx(
                'transform-cpu leading-4 py-1.5 px-3 text-sm font-medium rounded-[0.4rem] focus:outline-none focus-visible:ring-2 ring-offset-2 ring-offset-slate-400 ring-white ring-opacity-60 transition active:scale-95',
                {
                  'text-slate-600 bg-white shadow shadow-slate-500/25 pointer-events-none':
                    locale === currentLocale,
                  'text-slate-500 hover:text-slate-800 active:text-slate-900':
                    locale !== currentLocale,
                }
              )}
            >
              {displayNames[locale].map((part, idx) => (
                <span
                  key={part}
                  className={cx('block text-xs capitalize transition-opacity', {
                    'opacity-60': currentIdx !== idx,
                  })}
                >
                  {part}
                </span>
              ))}
            </a>
          </Link>
        ))}
      </nav>
    </>
  )
})
