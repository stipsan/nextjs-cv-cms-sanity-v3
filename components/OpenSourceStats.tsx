import useYears from 'hooks/useYears'
import { useIntl, useTranslations } from 'next-intl'
import { useMemo } from 'react'

type OpenSourceStatsProps = {
  computeScrollIntoViewWeeklyDownloads: number
  ioredisMockDependants: number
  reactSpringBottomSheetStars: number
}
export default function OpenSourceStats({
  computeScrollIntoViewWeeklyDownloads,
  ioredisMockDependants,
  reactSpringBottomSheetStars,
}: OpenSourceStatsProps) {
  const t = useTranslations('OpenSourceStats')
  const intl = useIntl()
  const { integer: yearsSinceFirstLib } = useYears('2010-02-18')
  const stats = useMemo(
    () => [
      {
        name: 'im',
        stat: intl.formatNumber(ioredisMockDependants),
        unit: t('repos'),
        url: 'https://github.com/stipsan/ioredis-mock/network/dependents',
      },
      {
        name: 'csiv',
        stat: intl.formatNumber(computeScrollIntoViewWeeklyDownloads),
        unit: t('monthly'),
        url: 'https://www.npmjs.com/package/compute-scroll-into-view',
      },
      {
        name: 'first',
        stat: t.rich('firstStat', {
          years: yearsSinceFirstLib * -1,
          unit: (children) => (
            <span className="inline-block font-normal text-3xl text-slate-300 ml-0.5">
              {children}
            </span>
          ),
        }),
        unit: t('yearsAgo'),
        url: 'https://mootools.net/forge/p/string_inflector',
      },
      {
        name: 'last',
        stat: t.rich('lastStat', {
          stars: reactSpringBottomSheetStars,
          unit: (children) => (
            <span className="inline-block font-normal text-3xl text-slate-300 ml-0.5">
              {children}
            </span>
          ),
        }),
        unit: t('lastSubtext'),
        url: 'https://github.com/stipsan/react-spring-bottom-sheet/stargazers',
      },
    ],
    [
      computeScrollIntoViewWeeklyDownloads,
      intl,
      ioredisMockDependants,
      reactSpringBottomSheetStars,
      t,
      yearsSinceFirstLib,
    ]
  )
  return (
    <section className="my-5 py-6 relative break-inside-avoid">
      <h1 className="mb-3 text-lg leading-6 font-medium text-slate-700">
        {t('title')}
      </h1>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 print:grid-cols-2">
        {stats.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-5 transition bg-slate-900 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-500 rounded-2xl overflow-hidden sm:p-6 print:p-6"
          >
            <dt className="text-sm font-medium text-slate-400 truncate">
              {t(item.name)}
            </dt>
            <dd className="mt-1">
              <span className="text-3xl font-semibold text-slate-100">
                {item.stat}
              </span>
              <span className="block text-sm text-slate-400">{item.unit}</span>
            </dd>
          </a>
        ))}
      </dl>
    </section>
  )
}
