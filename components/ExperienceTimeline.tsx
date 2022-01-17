import Image from 'next/image'
import { useTranslations } from 'next-intl'
import TwentyFourEstoreLogo from 'public/24.svg'
import FINNLogo from 'public/finn.svg'
import ImediaLogo from 'public/imedias.svg'
import KulturmeglerneLogo from 'public/kulturmeglerne.svg'
import NinjaForgeLogo from 'public/ninjaforge.png'
import ProThemerLogo from 'public/prothemer.png'
import ProxyLogo from 'public/proxy.svg'
import TimbleLogo from 'public/timble.svg'
import YooLogo from 'public/yootheme.svg'
import { useMemo } from 'react'

//

// started at Proxy

// FINN role, no overlap so no need to state start and end

// 12.06.2018 navnebytte

// JavaScript Consultant

// 24eStore

// YOOtheme

// I Media AS

// Timble

// NinjaForge

// ProThemer

// NinjaForge

export default function ExperienceTimeline() {
  const t = useTranslations('ExperienceTimeline')
  const activity = useMemo(
    () => [
      {
        id: 1,
        type: 'worked',
        role: 'Full Stack Engineer',
        company: 'Proxy',
        duration: 'Jan 2021 – Present - 1 yr 1 mos',
        location: 'Oslo, Norway',
        imageUrl: ProxyLogo,
        href: 'https://www.linkedin.com/company/proxy-technologies/',
      },
      {
        id: 2,
        type: 'worked',
        role: 'Senior Full Stack JavaScript Engineer',
        company: 'FINN.no',
        duration: 'Nov 2018 – Dec 2020 - 2 yrs 2 mos',
        location: 'Oslo Area, Norway',
        imageUrl: FINNLogo,
        href: 'https://www.linkedin.com/company/finn-no/',
      },
      {
        id: 3,
        type: 'worked',
        role: 'JavaScript Consultant',
        company: 'Kulturmeglerne',
        duration: 'Sep 2018 – Oct 2018 - 2 mos',
        location: 'Oslo Area, Norway',
        imageUrl: KulturmeglerneLogo,
        href: 'https://www.linkedin.com/company/kulturmeglerne/',
      },
      {
        id: 4,
        type: 'worked',
        role: 'Chief Front-End Engineer',
        company: '24Nettbutikk',
        duration: 'Nov 2014 – Aug 2018 - 3 yrs 10 mos',
        location: 'Oslo',
        imageUrl: TwentyFourEstoreLogo,
        href: 'https://www.linkedin.com/company/24nettbutikk/',
      },
      {
        id: 5,
        type: 'worked',
        role: 'Freelance Developer',
        company: 'YOOtheme',
        duration: 'Sep 2014 - 1 mo',
        location: 'Orkanger, Norway',
        imageUrl: YooLogo,
        href: 'https://www.linkedin.com/company/yootheme-gmbh/',
      },
      {
        id: 6,
        type: 'worked',
        role: 'Developer & Project Manager',
        company: 'I Media AS',
        duration: 'May 2014 – Aug 2014 - 4 mos',
        location: 'Molde, Norway',
        imageUrl: ImediaLogo,
        href: 'https://www.linkedin.com/company/i-media-as/',
      },
      {
        id: 7,
        type: 'worked',
        role: 'Developer/JavaScript Specialist',
        company: 'Timble',
        duration: 'May 2010 – May 2014 - 4 yrs 1 mo',
        location: 'Belgium',
        imageUrl: TimbleLogo,
        href: 'https://www.linkedin.com/company/timble/',
      },
      {
        id: 8,
        type: 'worked',
        role: 'Designer & Developer',
        company: 'NinjaForge',
        duration: 'Feb 2008 – May 2012 - 4 yrs 4 mos',
        location: 'Japan',
        imageUrl: NinjaForgeLogo,
        href: 'https://www.linkedin.com/company/ninjaforge/',
      },
      {
        id: 9,
        type: 'worked',
        role: 'Developer',
        company: 'ProThemer',
        duration: 'Jan 2010 – Apr 2011 - 1 yr 4 mos',
        location: 'Cape Town, South Africa',
        imageUrl: ProThemerLogo,
        href: 'https://www.linkedin.com/company/prothemer/',
      },
    ],
    []
  )

  return (
    <section className="py-6">
      <h1 className="mb-3 text-lg leading-6 font-medium text-slate-700 [page-break-after:avoid]">
        {t('title')}
      </h1>
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {activity.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id}>
              <div className="relative pb-8">
                {activityItemIdx !== activity.length - 1 ? (
                  <span
                    className="absolute top-5 left-6 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  {activityItem.type === 'worked' ? (
                    <>
                      <a className="h-12 w-12 bg-white flex items-center justify-center ring-8 ring-white translate-y-1">
                        <Image
                          src={activityItem.imageUrl}
                          alt=""
                          loading="eager"
                          height={96}
                          width={96}
                        />
                      </a>

                      <div className="min-w-0 flex-1">
                        <div>
                          <a
                            href={activityItem.href}
                            className="font-medium text-gray-900"
                          >
                            {activityItem.role}
                          </a>
                          <div className="text-sm">
                            <a
                              href={activityItem.href}
                              className="font-medium text-gray-900"
                            >
                              {activityItem.company}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            {activityItem.duration}
                          </p>
                          <p className="mt-0.5 text-sm text-gray-500">
                            {activityItem.location}
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
