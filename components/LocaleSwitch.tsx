import cx from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

export default function LocaleSwitch() {
  const t = useTranslations('LocaleSwitch')
  const { locale, locales, route } = useRouter()

  return (
    <nav className="shadow-inner shadow-slate-400/25 p-0.5 rounded-lg justify-self-center inline-flex space-x-1 bg-slate-100 transition">
      {locales.map((link) => (
        <Link key={link} href={route} locale={link} prefetch={false}>
          <a
            className={cx(
              'transform-cpu leading-4 py-1.5 px-3 flex text-sm font-medium rounded-[0.4rem] focus:outline-none focus:ring-2 ring-offset-2 ring-offset-slate-400 ring-white ring-opacity-60 transition-colors',
              {
                'text-slate-600 bg-white shadow shadow-slate-500/25 pointer-events-none':
                  link === locale,
                'text-slate-500 hover:text-slate-800 active:text-slate-900':
                  link !== locale,
              }
            )}
          >
            {t.rich('link', {
              locale: link,
              flag: (children) => (
                <span className="translate-y-[1px] mr-1.5 scale-110">
                  {children}
                </span>
              ),
            })}
          </a>
        </Link>
      ))}
    </nav>
  )
}
