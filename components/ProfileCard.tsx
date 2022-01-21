import { BadgeCheckIcon, PrinterIcon } from '@heroicons/react/outline'
import { differenceInYears } from 'date-fns'
import type { UnlockProps } from 'hooks/useUnlocked'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useIntl, useTranslations } from 'next-intl'
import headshot from 'public/headshot.jpeg'
import somecarden from 'public/somecard-en.png'
import somecardno from 'public/somecard-no.png'
import { memo } from 'react'

import { RedactedLabel } from './UnlockButton'

const city = 'Oslo'
const email = 'stipsan@gmail.com'
const birthday = new Date('1989-10-07')
const github = 'https://github.com/stipsan'
const linkedin = 'https://linkedin.com/in/stipsan'
const twitter = '@stipsan'
const somecards = { en: somecarden, no: somecardno }

export default memo(function ProfileCard({
  unlocked,
  then,
}: Pick<UnlockProps, 'unlocked'> & { then: Date }) {
  const t = useTranslations('ProfileCard')
  const intl = useIntl()
  const { locale, defaultLocale } = useRouter()
  const somecard = somecards[locale]
  return (
    <>
      <Head>
        <meta name="description" content={t('metaDescription')} />
        <meta name="twitter:image:src" content={somecard.src} />
        <meta name="twitter:image:alt" content={t('twitterImageAlt')} />
        <meta name="twitter:site" content={twitter} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('metaTitle')} />
        <meta name="twitter:description" content={t('metaDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={somecard.src} />
        <meta property="og:title" content={t('metaTitle')} />
        <meta property="og:description" content={t('metaDescription')} />
      </Head>
      <section className="rounded-2xl bg-slate-50 border border-slate-300 border-opacity-25">
        <h1 className="sr-only">{t('title')}</h1>
        <div className="px-6 py-4">
          <div className="sm:flex sm:items-center sm:justify-between print:flex print:items-center print:justify-between">
            <div className="sm:flex sm:space-x-5 print:flex print:space-x-5">
              <div className="flex-shrink-0">
                <a
                  className="block relative rounded-full mx-auto h-20 w-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500"
                  href="/headshot.jpeg"
                  target="_blank"
                >
                  <Image
                    className="rounded-full"
                    src={headshot}
                    alt={t('imageAlt')}
                    priority
                    height={256}
                    width={256}
                    quality={100}
                  />
                  <span className="block absolute top-0 right-0 bottom-0 left-0 rounded-full shadow-[inset_0_0_1px_1px_rgba(30,41,59,0.2)]" />
                </a>
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left print:mt-0 print:pt-1 print:text-left">
                <p className="text-sm font-medium text-slate-600">
                  {t('role')}
                </p>
                <p className="text-xl font-bold text-slate-900 sm:text-2xl print:text-2xl">
                  {t('name')}
                </p>
                <Subheading t={t} then={then} intl={intl} />
              </div>
            </div>
            <div className="mt-5 flex justify-center sm:mt-0 print:mt-0">
              <button
                type="button"
                className="print:hidden transition inline-flex items-center px-5 py-2 border border-transparent rounded-lg hover:shadow-sm text-sm font-medium text-white bg-sky-600 hover:shadow-sky-100 hover:bg-sky-700 active:bg-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
                onClick={() => window.print()}
              >
                <PrinterIcon
                  className="-ml-1 mr-2 h-5 w-5"
                  aria-hidden="true"
                />
                {t('print')}
              </button>
              <a
                href={new URL(
                  locale === defaultLocale ? '/' : `/${locale}`,
                  'https://cv.cocody.dev/'
                ).toString()}
                className="hidden print:inline-flex items-center px-5 py-2 border border-transparent rounded-lg text-sm font-medium text-slate-500 bg-slate-100 "
              >
                <BadgeCheckIcon
                  className="-ml-1 mr-2 h-5 w-5"
                  aria-hidden="true"
                />
                {t('latest')}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 border-opacity-50 px-6 py-4 sm:px-6 print:px-6">
          <dl className="grid grid-cols-1 sm:grid-cols-3 print:grid-cols-3 gap-x-4 gap-y-5">
            <div className="sm:col-span-1 sm:row-span-2 sm:order-0 print:row-span-2 print:order-0">
              <Dt>{t('address')}</Dt>
              <Dd>
                <span className="inline-grid grid-cols-1 gap-1">
                  <span>{unlocked?.data?.street || <RedactedLabel />}</span>
                  <span>
                    {unlocked?.data?.postalCode || <RedactedLabel />} {city}
                  </span>
                  <span>{t('country')}</span>
                </span>
              </Dd>
            </div>
            <div className="sm:col-span-1 sm:order-1 print:col-span-1 print:order-1">
              <Dt>{t('email')}</Dt>
              <Dd>
                <a
                  className="hover:underline focus:outline-none focus:underline"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </Dd>
            </div>
            <div className="sm:col-span-1 sm:order-3 print:col-span-1 print:order-3">
              <Dt>{t('phone')}</Dt>
              <Dd>
                {unlocked?.data?.phone ? (
                  <a
                    className="hover:underline focus:outline-none focus:underline"
                    href={
                      unlocked.data.phoneUrl || `tel:${unlocked.data.phone}`
                    }
                  >
                    {unlocked.data.phone}
                  </a>
                ) : (
                  <RedactedLabel />
                )}
              </Dd>
            </div>
            <div className="sm:col-span-1 sm:order-2 print:col-span-1 print:order-2">
              <Dt>GitHub</Dt>
              <Dd>
                <a
                  className="hover:underline focus:outline-none focus:underline"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShortUrl url={github} />
                </a>
              </Dd>
            </div>
            <div className="sm:col-span-1 sm:order-4 print:col-span-1 print:order-4">
              <Dt>LinkedIn</Dt>
              <Dd>
                <a
                  className="hover:underline focus:outline-none focus:underline"
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShortUrl url={linkedin} />
                </a>
              </Dd>
            </div>
            <div className="sm:col-span-3 sm:order-5 print:col-span-3 print:order-5">
              <Dt>{t('about')}</Dt>
              <dd
                className="mt-0.5 text-sm text-slate-900"
                dangerouslySetInnerHTML={{ __html: t.raw('profile') }}
              />
            </div>
          </dl>
        </div>
      </section>
    </>
  )
})

const Subheading = memo(function Birthday({
  t,
  intl,
  then,
}: {
  t: ReturnType<typeof useTranslations>
  intl: ReturnType<typeof useIntl>
  then: Date
}) {
  const age = differenceInYears(then, birthday)
  return (
    <p className="text-sm font-medium text-slate-600">
      {t.rich('subheading', {
        birthday,
        age,
        b: (children) => <span className="text-slate-900">{children}</span>,
        time: (children) => (
          <time
            dateTime={birthday.toJSON()}
            title={intl.formatDateTime(birthday, { dateStyle: 'full' })}
          >
            {children}
          </time>
        ),
      })}
    </p>
  )
})

function Dt({ children }) {
  return <dt className="text-sm font-medium text-slate-500">{children}</dt>
}

function Dd({ children }) {
  return <dd className="mt-0.5 text-sm text-slate-900">{children}</dd>
}

const ShortUrl = memo(function ShortUrl({ url }: { url: string }) {
  const parsed = new URL(url)

  const parts = parsed.pathname.split('/')
  const handle = parts.pop()

  return (
    <>
      <span className="text-slate-500 hover:text-slate-900 transition-colors">{`${
        parsed.hostname
      }${parts.join('/')}/`}</span>
      {handle}
    </>
  )
})
