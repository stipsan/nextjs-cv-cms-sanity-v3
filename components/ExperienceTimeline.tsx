import { IdentificationIcon } from '@heroicons/react/outline'
import cx from 'classnames'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { memo } from 'react'

import { type Experiences } from './ExperienceTimeline.getStaticProps'
import styles from './ExperienceTimeline.module.css'
import logos from './logos'

export default memo(function ExperienceTimeline({
  experiences,
}: {
  experiences: Experiences
}) {
  const t = useTranslations('ExperienceTimeline')

  return (
    <section className="py-6">
      <h1 className="mb-3 text-lg leading-6 font-medium text-slate-700">
        {t('title')}
      </h1>
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {experiences.map((experience, experienceIdx) => (
            <li key={experience.id} className="break-inside-avoid">
              <div className="relative pb-8">
                {experienceIdx !== experiences.length - 1 ? (
                  <span
                    className="absolute top-5 left-6 -ml-px h-full w-0.5 bg-slate-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  {experience.type === 'worked' ? (
                    <>
                      <figure
                        className={cx(
                          styles.dropShadowOutline,
                          'h-12 w-12 flex items-center justify-center'
                        )}
                      >
                        <Image
                          src={logos[experience.id]}
                          alt=""
                          loading="eager"
                          height={96}
                          width={96}
                        />
                      </figure>

                      <div className="min-w-0 flex-1">
                        <div>
                          <h2 className="font-medium text-slate-900">
                            {experience.role}
                          </h2>
                          <div className="text-sm">
                            <a
                              href={experience.href}
                              className="hover:underline font-medium text-slate-900"
                            >
                              {experience.company}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-slate-500">
                            {
                              <>
                                {experience.range ||
                                  t('range', {
                                    start: experience.joined,
                                    end: t('present'),
                                  })}
                                <span className="mx-1">&bull;</span>
                                {experience.duration &&
                                  t('duration', experience.duration)}
                              </>
                            }
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">
                            <a
                              className="hover:underline"
                              href={experience.mapUrl}
                            >
                              {experience.location}
                            </a>
                            <span className="ml-1 translate-y-[1px] print:hidden">
                              {experience.flag}
                            </span>
                            {experience.remote && (
                              <span className="ml-2 print:hidden">
                                {t('remote')}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : experience.type === 'changed-name' ? (
                    <>
                      <figure
                        className={cx(
                          styles.dropShadowOutline,
                          'h-12 w-12 flex items-center justify-center'
                        )}
                      >
                        <IdentificationIcon className="rounded-full m-1 p-2 bg-slate-100 text-slate-600 w-full" />
                      </figure>

                      <div className="min-w-0 flex-1">
                        <div>
                          <h2 className="font-medium text-slate-900">
                            {t('changedName')}
                          </h2>
                          <div className="text-sm">
                            <a
                              href={t('changedNameLink')}
                              className="hover:underline group font-medium text-slate-900"
                            >
                              {t.rich('changedNameFromTo', {
                                from: experience.from,
                                to: experience.to,
                                del: (children) => (
                                  <span className="line-through group-hover:no-underline decoration-2 decoration-pink-500/50">
                                    {children}
                                  </span>
                                ),
                                b: (children) => (
                                  <span className="underline group-hover:no-underline decoration-2 decoration-teal-500/50">
                                    {children}
                                  </span>
                                ),
                              })}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-slate-500">
                            {experience.date}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
})
