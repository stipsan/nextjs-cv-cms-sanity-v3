import { IdentificationIcon } from '@heroicons/react/outline'
import cx from 'classnames'
import { intervalToDuration, parseISO } from 'date-fns'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useIntl, useTranslations } from 'next-intl'
import { useEffect, useMemo, useRef, useState } from 'react'

import styles from './ExperienceTimeline.module.css'
import logos from './logos'

export default function ExperienceTimeline() {
  const t = useTranslations('ExperienceTimeline')
  const intl = useIntl()
  const { locale } = useRouter()
  // The date calc needs to be current, even if it's been a while since the last build
  const [mounted, setMounted] = useState<Date | false>(false)
  const rangeFormatter = useRef<Intl.DateTimeFormat | false>(false)
  useEffect(() => {
    if ('formatRange' in Intl.DateTimeFormat.prototype) {
      rangeFormatter.current = new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'short',
      })
    }
    setMounted(new Date())
  }, [locale])

  const activity = useMemo(
    () => [
      {
        id: 'proxy',
        type: 'worked',
        role: 'Full Stack Engineer',
        company: 'Proxy',
        joined: parseISO('2021-01-04'),
        left: null,
        location: 'San Francisco',
        flag: '🇺🇸',
        imageUrl: logos.proxy,
        href: 'https://www.linkedin.com/company/proxy-technologies/',
        mapUrl:
          'http://maps.apple.com/?address=500+3rd+Street,Suite+245,San+Francisco',
        remote: true,
      },
      {
        id: 'finn',
        type: 'worked',
        role: 'Senior Full Stack JavaScript Engineer',
        company: 'FINN.no',
        joined: parseISO('2018-11-01'),
        left: parseISO('2020-12-31'),
        location: 'Oslo',
        flag: '🇳🇴',
        imageUrl: logos.finn,
        href: 'https://www.linkedin.com/company/finn-no/',
        mapUrl: 'http://maps.apple.com/?address=Grensen+5-7,Oslo',
      },
      {
        id: 'km',
        type: 'worked',
        role: 'JavaScript Consultant',
        company: 'Kulturmeglerne',
        joined: parseISO('2018-09-01'),
        left: parseISO('2018-10-31'),
        location: 'Oslo',
        flag: '🇳🇴',
        imageUrl: logos.km,
        href: 'https://www.linkedin.com/company/kulturmeglerne/',
        mapUrl: 'http://maps.apple.com/?address=Brenneriveien+5,Oslo',
      },
      {
        id: 'sd',
        type: 'changed-name',
        date: parseISO('2018-06-12'),
        from: 'Stian Didriksen',
        to: 'Cody Olsen',
      },
      {
        id: '24',
        type: 'worked',
        role: 'Chief Front-End Engineer',
        company: '24Nettbutikk',
        joined: parseISO('2014-11-01'),
        left: parseISO('2018-08-31'),
        location: 'Oslo',
        flag: '🇳🇴',
        imageUrl: logos['24'],
        href: 'https://www.linkedin.com/company/24nettbutikk/',
        mapUrl: 'http://maps.apple.com/?address=Grev+Wedels+Plass+5,Oslo',
      },
      {
        id: 'yt',
        type: 'worked',
        role: 'Freelance Developer',
        company: 'YOOtheme',
        joined: parseISO('2014-09-01'),
        left: parseISO('2014-09-30'),
        location: 'Hamburg',
        flag: '🇩🇪',
        imageUrl: logos.yt,
        href: 'https://www.linkedin.com/company/yootheme-gmbh/',
        mapUrl: 'http://maps.apple.com/?address=Hongkongstraße+10a,Hamburg',
        remote: true,
      },
      {
        id: 'im',
        type: 'worked',
        role: 'Developer & Project Manager',
        company: 'I Media AS',
        joined: parseISO('2014-05-01'),
        left: parseISO('2014-08-31'),
        location: 'Molde',
        flag: '🇳🇴',
        imageUrl: logos.im,
        href: 'https://www.linkedin.com/company/i-media-as/',
        mapUrl: 'http://maps.apple.com/?address=Molde',
      },
      {
        id: 'timble',
        type: 'worked',
        role: 'Developer/JavaScript Specialist',
        company: 'Timble',
        joined: parseISO('2010-05-01'),
        left: parseISO('2014-05-31'),
        location: 'Leuven',
        flag: '🇧🇪',
        imageUrl: logos.timble,
        href: 'https://www.linkedin.com/company/timble/',
        mapUrl: 'http://maps.apple.com/?address=Leuven,Belgium',
        remote: true,
      },
      {
        id: 'nf',
        type: 'worked',
        role: 'Designer & Developer',
        company: 'NinjaForge',
        joined: parseISO('2008-02-01'),
        left: parseISO('2012-05-31'),
        location: 'Osaka',
        flag: '🇯🇵',
        imageUrl: logos.nf,
        href: 'https://www.linkedin.com/company/ninjaforge/',
        mapUrl: 'http://maps.apple.com/?address=Osaka,Japan',
        remote: true,
      },
      {
        id: 'pt',
        type: 'worked',
        role: 'Developer',
        company: 'ProThemer',
        joined: parseISO('2010-01-01'),
        left: parseISO('2011-04-30'),
        location: 'Cape Town',
        flag: '🇿🇦',
        imageUrl: logos.pt,
        href: 'https://www.linkedin.com/company/prothemer/',
        mapUrl: 'http://maps.apple.com/?address=Cape+Town,South+Africa',
        remote: true,
      },
    ],
    []
  )

  return (
    <section className="py-6">
      <h1 className="mb-3 text-lg leading-6 font-medium text-slate-700">
        {t('title')}
      </h1>
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {activity.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id} className="break-inside-avoid">
              <div className="relative pb-8">
                {activityItemIdx !== activity.length - 1 ? (
                  <span
                    className="absolute top-5 left-6 -ml-px h-full w-0.5 bg-slate-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  {activityItem.type === 'worked' ? (
                    <>
                      <figure
                        className={cx(
                          styles.dropShadowOutline,
                          'h-12 w-12 flex items-center justify-center'
                        )}
                      >
                        <Image
                          src={logos[activityItem.id]}
                          alt=""
                          loading="eager"
                          height={96}
                          width={96}
                        />
                      </figure>

                      <div className="min-w-0 flex-1">
                        <div>
                          <h2 className="font-medium text-slate-900">
                            {activityItem.role}
                          </h2>
                          <div className="text-sm">
                            <a
                              href={activityItem.href}
                              className="hover:underline font-medium text-slate-900"
                            >
                              {activityItem.company}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-slate-500">
                            {
                              <>
                                {rangeFormatter.current && activityItem.left ? (
                                  // @ts-expect-error formatRange is not in the type definition yet
                                  rangeFormatter.current.formatRange(
                                    activityItem.joined,
                                    activityItem.left
                                  )
                                ) : (
                                  <>
                                    {t('range', {
                                      start: intl.formatDateTime(
                                        activityItem.joined,
                                        {
                                          year: 'numeric',
                                          month: 'short',
                                        }
                                      ),
                                      end: activityItem.left
                                        ? intl.formatDateTime(
                                            activityItem.left,
                                            {
                                              year: 'numeric',
                                              month: 'short',
                                            }
                                          )
                                        : t('present'),
                                    })}
                                  </>
                                )}
                                <span className="mx-1">&bull;</span>
                                {activityItem.left || mounted
                                  ? t(
                                      'duration',
                                      getDuration(
                                        activityItem.joined,
                                        // @ts-expect-error
                                        activityItem.left || mounted
                                      )
                                    )
                                  : null}
                              </>
                            }
                          </p>
                          <p className="mt-0.5 text-sm text-slate-500">
                            <a
                              className="hover:underline"
                              href={activityItem.mapUrl}
                            >
                              {activityItem.location}
                            </a>
                            <span className="ml-1 translate-y-[1px] print:hidden">
                              {activityItem.flag}
                            </span>
                            {activityItem.remote && (
                              <span className="ml-2 print:hidden">
                                {t('remote')}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : activityItem.type === 'changed-name' ? (
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
                                from: activityItem.from,
                                to: activityItem.to,
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
                            {t('changedNameDate', { date: activityItem.date })}
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
}

function getDuration(start: Date, end: Date) {
  const duration = intervalToDuration({ start, end })
  return {
    years: duration.years,
    months: duration.months + (duration.days > 8 ? 1 : 0),
  }
}
