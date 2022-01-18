import Education from 'components/Education'
import ExperienceStats from 'components/ExperienceStats'
import ExperienceTimeline from 'components/ExperienceTimeline'
import Footer from 'components/Footer'
import LocaleSwitch from 'components/LocaleSwitch'
import OpenSourceStats from 'components/OpenSourceStats'
import ProfileCard from 'components/ProfileCard'
import UnlockButton from 'components/UnlockButton'
import useUnlocked from 'hooks/useUnlocked'
import Head from 'next/head'
import { useTranslations } from 'next-intl'

export default function Index({
  now,
  next,
  react,
  tailwind,
  computeScrollIntoViewWeeklyDownloads,
  ioredisMockDependants,
  reactSpringBottomSheetStars,
}) {
  const t = useTranslations('Index')
  const { error, setError, loading, unlock, unlocked } = useUnlocked()

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <div className="h-1 bg-gradient-to-r from-teal-400 to-blue-600" />
      <div className="print:hidden pt-10 flex justify-center items-center">
        <LocaleSwitch />
        <UnlockButton
          error={error}
          setError={setError}
          loading={loading}
          unlock={unlock}
          unlocked={unlocked}
        />
      </div>
      <main className="font-sans antialiased text-slate-600 max-w-[21cm] mx-auto px-4 sm:px-6 print:px-6 lg:px-8 pt-10">
        <ProfileCard unlocked={unlocked} />
        <ExperienceStats />
        <ExperienceTimeline />
        <OpenSourceStats
          computeScrollIntoViewWeeklyDownloads={
            computeScrollIntoViewWeeklyDownloads
          }
          ioredisMockDependants={ioredisMockDependants}
          reactSpringBottomSheetStars={reactSpringBottomSheetStars}
        />
        <Education />
        <Footer build={now} next={next} react={react} tailwind={tailwind} />
      </main>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const { JSDOM } = await import('jsdom')
  const [
    { default: shared },
    { default: local },
    { version: next },
    { version: react },
    { version: tailwind },
    computeScrollIntoViewWeeklyDownloads,
    reactSpringBottomSheetStars,
    ioredisMockDependants,
  ] = await Promise.all([
    import('messages/en.json'),
    import(`messages/${locale}.json`),
    import('next/package.json'),
    import('react/package.json'),
    import('tailwindcss/package.json'),
    fetch(
      'https://api.npmjs.org/downloads/point/last-month/compute-scroll-into-view'
    )
      .then((res) => res.json())
      .then((data) => data.downloads || 12114685)
      .catch((err) => {
        console.error(
          'Error while fetching download stats for compute-scroll-into-view',
          err
        )
        // number fetched 14th january 2022
        return 12114685
      }),
    fetch('https://api.github.com/repos/stipsan/react-spring-bottom-sheet')
      .then((res) => res.json())
      .then((data) => data.stargazers_count || 277)
      .catch((err) => {
        console.error(
          'Error while fetching stargazers for react-spring-bottom-sheet',
          err
        )
        // number fetched 14th january 2022
        return 277
      }),
    Promise.race([
      fetch('https://github.com/stipsan/ioredis-mock/network/dependents')
        .then((data) => {
          if (!data.ok) {
            throw new Error(`${data.status}: ${data.statusText}`)
          }
          return data.text()
        })
        .then((text) => {
          const dom = new JSDOM(text)
          const dependents = dom.window.document.querySelectorAll(
            `#dependents > div.Box > div.Box-header.clearfix > div > div > a.btn-link.selected`
          )

          return Array.from(dependents).reduce((prev, curr: HTMLElement) => {
            const extracted = curr.textContent
              ? parseInt(
                  curr.textContent.trim().split(' ')[0].replace(',', ''),
                  10
                )
              : 0
            if (extracted > prev) {
              return extracted
            }
            return prev
          }, 0)
        })
        .catch((err) => {
          console.error(
            'Error while fetching stargazers for react-spring-bottom-sheet',
            err
          )
          // number fetched 14th january 2022
          return 1607
        }),
      new Promise((resolve) => setTimeout(() => resolve(1607), 30000)),
    ]),
  ])
  const messages = { ...shared, ...local }
  const now = new Date().getTime()
  return {
    props: {
      messages,
      next,
      react,
      tailwind,
      computeScrollIntoViewWeeklyDownloads,
      reactSpringBottomSheetStars,
      ioredisMockDependants,
      now,
    },
  }
}
