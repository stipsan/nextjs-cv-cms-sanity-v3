import { IdentificationIcon } from '@heroicons/react/outline'
import cx from 'classnames'
import { intervalToDuration, parseISO } from 'date-fns'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useIntl, useTranslations } from 'next-intl'
import TwentyFourEstoreLogo from 'public/24.svg'
import FINNLogo from 'public/finn.svg'
import ImediaLogo from 'public/imedias.svg'
import KulturmeglerneLogo from 'public/kulturmeglerne.svg'
import NinjaForgeLogo from 'public/ninjaforge.png'
import ProThemerLogo from 'public/prothemer.png'
import ProxyLogo from 'public/proxy.svg'
import TimbleLogo from 'public/timble.svg'
import YooLogo from 'public/yootheme.svg'
import { useEffect, useMemo, useRef, useState } from 'react'

import styles from './ExperienceTimeline.module.css'

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
        imageUrl: ProxyLogo,
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
        location: 'Oslo Area, Norway',
        imageUrl: FINNLogo,
        href: 'https://www.linkedin.com/company/finn-no/',
      },
      {
        id: 'km',
        type: 'worked',
        role: 'JavaScript Consultant',
        company: 'Kulturmeglerne',
        joined: parseISO('2018-09-01'),
        left: parseISO('2018-10-31'),
        location: 'Oslo Area, Norway',
        imageUrl: KulturmeglerneLogo,
        href: 'https://www.linkedin.com/company/kulturmeglerne/',
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
        imageUrl: TwentyFourEstoreLogo,
        href: 'https://www.linkedin.com/company/24nettbutikk/',
      },
      {
        id: 'yt',
        type: 'worked',
        role: 'Freelance Developer',
        company: 'YOOtheme',
        joined: parseISO('2014-09-01'),
        left: parseISO('2014-09-30'),
        location: 'Orkanger, Norway',
        imageUrl: YooLogo,
        href: 'https://www.linkedin.com/company/yootheme-gmbh/',
      },
      {
        id: 'im',
        type: 'worked',
        role: 'Developer & Project Manager',
        company: 'I Media AS',
        joined: parseISO('2014-05-01'),
        left: parseISO('2014-08-31'),
        location: 'Molde, Norway',
        imageUrl: ImediaLogo,
        href: 'https://www.linkedin.com/company/i-media-as/',
      },
      {
        id: 'timble',
        type: 'worked',
        role: 'Developer/JavaScript Specialist',
        company: 'Timble',
        joined: parseISO('2010-05-01'),
        left: parseISO('2014-05-31'),
        location: 'Belgium',
        imageUrl: TimbleLogo,
        href: 'https://www.linkedin.com/company/timble/',
      },
      {
        id: 'nf',
        type: 'worked',
        role: 'Designer & Developer',
        company: 'NinjaForge',
        joined: parseISO('2008-02-01'),
        left: parseISO('2012-05-31'),
        location: 'Japan',
        imageUrl: NinjaForgeLogo,
        href: 'https://www.linkedin.com/company/ninjaforge/',
      },
      {
        id: 'pt',
        type: 'worked',
        role: 'Developer',
        company: 'ProThemer',
        joined: parseISO('2010-01-01'),
        left: parseISO('2011-04-30'),
        location: 'Cape Town, South Africa',
        imageUrl: ProThemerLogo,
        href: 'https://www.linkedin.com/company/prothemer/',
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
                          src={activityItem.imageUrl}
                          alt=""
                          loading="eager"
                          height={96}
                          width={96}
                        />
                      </figure>

                      <div className="min-w-0 flex-1">
                        <div>
                          <h2 className="font-medium text-gray-900">
                            {activityItem.role}
                          </h2>
                          <div className="text-sm">
                            <a
                              href={activityItem.href}
                              className="hover:underline font-medium text-gray-900"
                            >
                              {activityItem.company}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
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
                                        activityItem.left || mounted
                                      )
                                    )
                                  : null}
                              </>
                            }
                          </p>
                          <p className="mt-0.5 text-sm text-gray-500">
                            {activityItem.location}
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
                          <h2 className="font-medium text-gray-900">
                            {t('changedName')}
                          </h2>
                          <div className="text-sm">
                            <a
                              href={t('changedNameLink')}
                              className="hover:underline group font-medium text-gray-900"
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
                          <p className="mt-0.5 text-sm text-gray-500">
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
