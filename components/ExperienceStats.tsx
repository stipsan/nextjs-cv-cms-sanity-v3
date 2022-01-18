import useYears from 'hooks/useYears'
import { useTranslations } from 'next-intl'
import { memo, useMemo } from 'react'

export default function ExperienceStats() {
  const t = useTranslations('ExperienceStats')
  const stats = useMemo(
    () => [
      // https://github.com/stipsan/uikit-react/commit/9cf682b8f38611293edc0e7da7be9f7692004d96
      { name: 'React', since: '2015-01-02' },
      { name: 'node.js', since: '2010-05-01' },
      { name: 'JavaScript', since: '2008-02-01' },
    ],
    []
  )
  return (
    <section className="my-5 py-6 break-inside-avoid">
      <h1 className="mb-3 text-lg leading-6 font-medium text-slate-700">
        {t('title')}
      </h1>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 print:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="px-4 py-5 bg-slate-900 rounded-2xl overflow-hidden sm:p-6 print:p-6"
          >
            <dt className="text-sm font-medium text-slate-400 truncate">
              {item.name}
            </dt>
            <Since since={item.since} />
          </div>
        ))}
      </dl>
    </section>
  )
}

const Since = memo(function Since({ since }: { since: string }) {
  const t = useTranslations('Since')
  const { integer: years } = useYears(since)

  return (
    <dd className="mt-1">
      {t.rich('label', {
        years: years * -1,
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
})
