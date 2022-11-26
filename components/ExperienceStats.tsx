import { differenceInYears } from 'date-fns'
import Image from 'next/image'
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
  const t = (key) => `ExperienceStats.${key}`
  return (
    <section className="py-6 my-5 break-inside-avoid">
      <h1 className="mb-3 text-lg font-medium leading-6 text-slate-700">
        {t('title')}
      </h1>
      <dl className="grid grid-cols-1 gap-5 mt-5 print:grid-cols-3 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative px-4 py-5 overflow-hidden group rounded-2xl bg-slate-900 print:p-6 sm:p-6"
          >
            <dt className="text-sm font-medium truncate text-slate-400">
              {item.name}
            </dt>
            <Since since={item.since} then={then} />
            <span className="absolute transition-opacity -translate-y-6 opacity-25 top-1/2 right-4 transform-gpu mix-blend-screen group-hover:opacity-100">
              <span className="relative inline-block w-12 h-12">
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
  
  const t = (key) => `Since.${key}`
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
          <span className="inline-block ml-1 text-3xl text-slate-400">
            {children}
          </span>
        ),
      })}
    </dd>
  )
}
