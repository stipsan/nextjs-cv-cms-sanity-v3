import type { UnlockProps } from 'hooks/useUnlocked'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { memo } from 'react'

import logos from './logos'

export default memo(function References({
  unlocked,
}: Pick<UnlockProps, 'unlocked'>) {
  const t = useTranslations('References')
  return (
    <section className="my-5 py-6 relative print:hidden">
      <h1 className="mb-3 text-lg leading-6 font-medium text-slate-700">
        {t('title')}
      </h1>
      {unlocked?.data?.references ? (
        <ul
          role="list"
          className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 bg-slate-100 p-2 rounded-3xl"
        >
          {unlocked.data.references.map((reference) => (
            <li
              key={reference.id}
              className="px-4 py-5 transition bg-white rounded-2xl overflow-hidden sm:p-6 flex items-center justify-center flex-col"
            >
              <figure
                className={
                  reference.id === 'proxy'
                    ? 'h-20 w-20 mb-4 pt-2'
                    : 'h-24 w-24 pt-4'
                }
              >
                <Image
                  src={logos[reference.id]}
                  alt=""
                  height={96}
                  width={96}
                />
              </figure>
              <h2 className="mt-5 text-lg font-medium text-slate-800">
                {reference.name}
              </h2>
              <a
                className="text-sm text-slate-600 hover:underline focus:outline-none focus:underline"
                href={reference.phoneUrl || `tel:${reference.phone}`}
              >
                {reference.phone}
              </a>
              <a
                className="hover:underline focus:outline-none focus:underline block text-sm text-slate-600 truncate w-full text-center"
                href={`mailto:${reference.email}`}
              >
                {reference.email}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="bg-slate-100 p-2 rounded-3xl">
          <RedactedLabel />
        </div>
      )}
    </section>
  )
})

function RedactedLabel() {
  const t = useTranslations('UnlockButton')

  return (
    <label
      className="block bg-white rounded-2xl py-2 px-4 h-10 text-opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
      htmlFor="unlock-button"
    >
      {t('redacted')}
    </label>
  )
}
