import Education from 'components/Education'
import ExperienceStats from 'components/ExperienceStats'
import ExperienceTimeline from 'components/ExperienceTimeline'
import { getStaticProps as getStaticExperienceTimelineProps } from 'components/ExperienceTimeline.getStaticProps'
import Footer from 'components/Footer'
import { getStaticProps as getStaticFooterProps } from 'components/Footer.getStaticProps'
import LocaleSwitch from 'components/LocaleSwitch'
import { getStaticProps as getStaticLocaleSwitchProps } from 'components/LocaleSwitch.getStaticProps'
import OpenSourceStats from 'components/OpenSourceStats'
import { getStaticProps as getStaticOpenSourceStatsProps } from 'components/OpenSourceStats.getStaticProps'
import ProfileCard from 'components/ProfileCard'
import References from 'components/References'
import UnlockButton from 'components/UnlockButton'
import useUnlocked from 'hooks/useUnlocked'
import Head from 'next/head'
import { useTranslations } from 'next-intl'

export default function Index({
  displayNames,
  // Renaming to then, to make it clear that it doesn't update after nounting, used when something should reflect the time the CV got built
  now: then,
  next,
  react,
  tailwind,
  csivWeeklyDownloads,
  imDependants,
  rsbsStars,
  experiences,
}) {
  const t = useTranslations('Index')
  const { error, setError, loading, unlock, unlocked } = useUnlocked()

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="theme-color" content="#fff" />
        <meta
          name="theme-color"
          content="#0f172a"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Head>
      <div className="h-1 bg-gradient-to-r from-teal-400 to-blue-600" />
      <main className="font-sans antialiased text-slate-600 max-w-[21cm] mx-auto px-4 sm:px-6 print:px-10 lg:px-8 pt-4 sm:pt-5 print:pt-5">
        <div className="print:hidden pb-4 sm:pb-5 flex justify-start items-center">
          <LocaleSwitch displayNames={displayNames} />
          <UnlockButton
            error={error}
            setError={setError}
            loading={loading}
            unlock={unlock}
            unlocked={unlocked}
          />
        </div>
        <ProfileCard unlocked={unlocked} then={then} />
        <ExperienceStats then={then} />
        <ExperienceTimeline experiences={experiences} />
        <OpenSourceStats
          csivWeeklyDownloads={csivWeeklyDownloads}
          imDependants={imDependants}
          rsbsStars={rsbsStars}
          then={then}
        />
        <References unlocked={unlocked} />
        <Education />
        <Footer then={then} next={next} react={react} tailwind={tailwind} />
      </main>
    </>
  )
}

export async function getStaticProps({ locale, locales }) {
  const [
    { displayNames },
    { default: shared },
    { default: local },
    { next, react, tailwind },
    { csivWeeklyDownloads, imDependants, rsbsStars },
    { experiences },
  ] = await Promise.all([
    getStaticLocaleSwitchProps({ locales }),
    import('messages/en.json'),
    import(`messages/${locale}.json`),
    getStaticFooterProps(),
    getStaticOpenSourceStatsProps(),
    getStaticExperienceTimelineProps({ locale }),
  ])
  const messages = { ...shared, ...local }
  const now = new Date().getTime()
  return {
    props: {
      displayNames,
      messages,
      next,
      react,
      tailwind,
      csivWeeklyDownloads,
      rsbsStars,
      imDependants,
      experiences,
      now,
    },
    revalidate: 60,
  }
}
