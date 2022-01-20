import { useRouter } from 'next/router'
import { useIntl, useNow } from 'next-intl'
import { useTranslations } from 'next-intl'
import { memo, useMemo } from 'react'

type FooterProps = {
  then: number
  next: string
  react: string
  tailwind: string
}
export default memo(function Footer({
  then,
  next,
  react,
  tailwind,
}: FooterProps) {
  const t = useTranslations('Footer')
  const intl = useIntl()
  const { locale } = useRouter()
  const buildDate = useMemo(() => new Date(then), [then])
  const date = useMemo(
    () =>
      intl.formatDateTime(buildDate, {
        dateStyle: 'full',
        timeStyle: 'long',
      }),
    [buildDate, intl]
  )
  const generated = useMemo(
    () =>
      t.rich('generated', {
        when: date,
        print: (children) => (
          <span className="hidden print:inline">{children}</span>
        ),
        github: (children) => (
          <a
            className="text-slate-800"
            href={new URL(
              locale === 'en' ? '/' : `/${locale}`,
              'https://cv.cocody.dev/'
            ).toString()}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        link: (children) => (
          <a
            className="text-slate-800"
            href={new URL(
              locale === 'en' ? '/' : `/${locale}`,
              'https://cv.cocody.dev/'
            ).toString()}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        site: 'cv.cocody.dev',
      }),
    [date, locale, t]
  )

  return (
    <footer className="py-6 mt-5 mb-6 text-center text-xs print:pb-0 print:mb-0">
      {generated}
      <RelativeWhen
        date={buildDate}
        intl={intl}
        dateJson={buildDate.toJSON()}
        dateAbsolute={date}
      />
      <div className="mt-3 grid grid-flow-col gap-3 justify-center">
        <Tag name="next" version={next} url="https://nextjs.org/" />
        <Tag name="react" version={react} url="https://reactjs.org/" />
        <Tag
          name="tailwind"
          version={tailwind}
          url="https://tailwindcss.com/"
        />
      </div>
    </footer>
  )
})

const RelativeWhen = ({
  date,
  intl,
  dateJson,
  dateAbsolute,
}: {
  date: Date
  intl: ReturnType<typeof useIntl>
  dateJson: string
  dateAbsolute: string
}) => {
  const now = useNow({ updateInterval: 1000 })
  const relativeWhen = intl.formatRelativeTime(date, now)
  // Get the string used for "now", as we are skipping it
  const nowText = useMemo(
    () => intl.formatRelativeTime(new Date(), new Date()),
    [intl]
  )

  return (
    <a
      className="hover:underline focus:outline-none focus:underline print:hidden"
      href="https://github.com/stipsan/cv.cocody.dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      <time dateTime={dateJson} title={dateAbsolute}>
        {nowText !== relativeWhen ? relativeWhen : dateAbsolute}
      </time>
    </a>
  )
}

const Tag = ({
  name,
  version,
  url,
}: {
  name: string
  version: string
  url: string
}) => (
  <a
    className="block rounded bg-slate-900 overflow-hidden text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-800"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="inline-block px-2 py-1">{name}</span>
    <span className="inline-block px-2 py-1 bg-cyan-700 text-slate-50 rounded-r">
      {version}
    </span>
  </a>
)
