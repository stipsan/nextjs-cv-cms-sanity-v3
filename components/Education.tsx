import { useTranslations } from 'next-intl'

const activityItems = [
  {
    id: 1,
    school: 'Vestvågøy videregående skole, Leknes',
    study: 'VG2, Elektrofag',
    when: '2008 - 2009',
  },
  {
    id: 2,
    school: 'Vestvågøy videregående skole, Leknes',
    study: 'VG1, Elektrofag',
    when: '2006 - 2007',
  },
  {
    id: 3,
    school: 'Svolvær Videregående Skole',
    study: 'Studieforberedende',
    when: '2005 - 2006',
  },
]

export default function Education() {
  const t = useTranslations('Education')
  return (
    <section className="my-5 rounded-2xl bg-slate-50 border border-slate-300 border-opacity-25 px-6 py-4 break-inside-avoid">
      <h1 className="text-lg leading-6 font-medium text-slate-900">
        {t('title')}
      </h1>
      <ul role="list" className="divide-y divide-gray-200">
        {activityItems.map((activityItem) => (
          <li key={activityItem.id} className="py-4">
            <div className="flex space-x-3">
              <div className="flex-1 space-y-1">
                <div className="flex-row items-center justify-between">
                  <h3 className="font-medium">{activityItem.school}</h3>
                  <p className="text-sm text-gray-500">{activityItem.study}</p>
                  <p className="text-sm">{activityItem.when}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
