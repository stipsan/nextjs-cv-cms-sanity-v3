import { differenceInYears } from 'date-fns'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import JSLogo from 'public/js.svg'
import NodeLogo from 'public/node.svg'
import ReactLogo from 'public/react.svg'
import { memo } from 'react'

const stats = [
  {
    name: 'React',
    // 2015-01-02
    since: new Date(2015, 0, 2),
    logo: ReactLogo,
  },
  {
    name: 'node.js',
    // 2010-05-01
    since: new Date(2010, 4, 1),
    logo: NodeLogo,
  },
  {
    name: 'JavaScript',
    // 2008-02-01
    since: new Date(2008, 1, 1),
    logo: JSLogo,
  },
]

export default memo(function ExperienceStats({ then }: { then: Date }) {
  const t = useTranslations('ExperienceStats')
  return (
    <section className="my-5 py-6 break-inside-avoid">
      <h1 className="mb-3 text-lg leading-6 font-medium text-slate-700">
        {t('title')}
      </h1>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 print:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="px-4 py-5 bg-slate-900 rounded-2xl overflow-hidden sm:p-6 print:p-6 relative group"
          >
            <dt className="text-sm font-medium text-slate-400 truncate">
              {item.name}
            </dt>
            <Since since={item.since} then={then} />
            <span className="absolute top-1/2 -translate-y-6 right-4 mix-blend-screen opacity-25 transition-opacity transform-gpu group-hover:opacity-100">
              <span className="inline-block relative h-12 w-12">
                <Image src={item.logo} alt="" layout="fill" />
              </span>
            </span>
          </div>
        ))}
      </dl>
    </section>
  )
})

function Since({ since, then }: { since: Date; then: Date }) {
  const t = useTranslations('Since')
  const years = differenceInYears(then, since)

  return (
    <dd className="mt-1">
      {t.rich('label', {
        years: years,
        value: (children) => (
          <span className="text-3xl font-semibold text-slate-100">
            {children}
          </span>
        ),
        unit: (children) => (
          <span className="inline-block text-3xl text-slate-400 ml-1">
            {children}
          </span>
        ),
      })}
    </dd>
  )
}
