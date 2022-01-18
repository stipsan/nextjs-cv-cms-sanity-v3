import { PrinterIcon } from '@heroicons/react/outline'
import useShorterUrl from 'hooks/useShorterUrl'
import type { UnlockProps } from 'hooks/useUnlocked'
import useYears from 'hooks/useYears'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import headshot from 'public/headshot.jpeg'

import { RedactedLabel } from './UnlockButton'

const city = 'Oslo'
const email = 'stipsan@gmail.com'
const birthday = new Date('1989-10-07')
const github = 'https://github.com/stipsan'
const linkedin = 'https://linkedin.com/in/stipsan'

export default function ProfileCard({
  unlocked,
}: Pick<UnlockProps, 'unlocked'>) {
  const t = useTranslations('ProfileCard')
  const { integer: age } = useYears(birthday)
  const githubUrl = useShorterUrl(github)
  const linkedinUrl = useShorterUrl(linkedin)
  return (
    <section className="rounded-2xl bg-slate-50 border border-slate-300 border-opacity-25">
      <h1 className="sr-only">{t('title')}</h1>
      <div className="px-6 py-4">
        <div className="sm:flex sm:items-center sm:justify-between print:flex print:items-center print:justify-between">
          <div className="sm:flex sm:space-x-5 print:flex print:space-x-5">
            <div className="flex-shrink-0">
              <a
                className="block relative rounded-full mx-auto h-20 w-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500"
                href="/headshot.jpeg"
                download={`${t('name')}.jpeg`}
              >
                <Image
                  className="rounded-full"
                  src={headshot}
                  alt={t('imageAlt')}
                  priority
                  height={160}
                  width={160}
                />
                <span className="block absolute top-0 right-0 bottom-0 left-0 rounded-full shadow-[inset_0_0_1px_1px_rgba(30,41,59,0.2)]" />
              </a>
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left print:mt-0 print:pt-1 print:text-left">
              <p className="text-sm font-medium text-slate-600">{t('role')}</p>
              <p className="text-xl font-bold text-slate-900 sm:text-2xl print:text-2xl">
                {t('name')}
              </p>
              <p className="text-sm font-medium text-slate-600">
                {t.rich('age', {
                  birthday,
                  age: age * -1,
                  b: (children) => (
                    <span className="text-slate-900">{children}</span>
                  ),
                })}
              </p>
            </div>
          </div>
          <div className="mt-5 prin flex justify-center sm:mt-0 print:hidden">
            <button
              type="button"
              className="transition inline-flex items-center px-5 py-2 border border-transparent rounded-lg hover:shadow-sm text-sm font-medium text-white bg-sky-600 hover:shadow-sky-100 hover:bg-sky-700 active:bg-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
              onClick={() => window.print()}
            >
              <PrinterIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              {t('print')}
            </button>
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
                  href={unlocked.data.phoneUrl || `tel:${unlocked.data.phone}`}
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
                {githubUrl}
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
                {linkedinUrl}
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
  )
}

function Dt({ children }) {
  return <dt className="text-sm font-medium text-slate-500">{children}</dt>
}

function Dd({ children }) {
  return <dd className="mt-0.5 text-sm text-slate-900">{children}</dd>
}
