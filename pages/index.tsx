import Education from 'components/Education'
import ExperienceStats from 'components/ExperienceStats'
import ExperienceTimeline from 'components/ExperienceTimeline'
import Footer from 'components/Footer'
import { getStaticProps as getStaticFooterProps } from 'components/Footer.getStaticProps'
import LocaleSwitch from 'components/LocaleSwitch'
import OpenSourceStats from 'components/OpenSourceStats'
import { getStaticProps as getStaticOpenSourceStatsProps } from 'components/OpenSourceStats.getStaticProps'
import ProfileCard from 'components/ProfileCard'
import References from 'components/References'
import UnlockButton from 'components/UnlockButton'
import useUnlocked from 'hooks/useUnlocked'
import Head from 'next/head'
import { useTranslations } from 'next-intl'

export default function Index({
  now,
  next,
  react,
  tailwind,
  csivWeeklyDownloads,
  imDependants,
  rsbsStars,
}) {
  const t = useTranslations('Index')
  const { error, setError, loading, unlock, unlocked } = useUnlocked()

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <div className="h-1 bg-gradient-to-r from-teal-400 to-blue-600" />
      <main className="font-sans antialiased text-slate-600 max-w-[21cm] mx-auto px-4 sm:px-6 print:px-6 lg:px-8 pt-10">
        <div className="print:hidden pb-10 flex justify-start items-center">
          <LocaleSwitch />
          <UnlockButton
            error={error}
            setError={setError}
            loading={loading}
            unlock={unlock}
            unlocked={unlocked}
          />
        </div>
        <ProfileCard unlocked={unlocked} />
        <ExperienceStats />
        <ExperienceTimeline />
        <OpenSourceStats
          csivWeeklyDownloads={csivWeeklyDownloads}
          imDependants={imDependants}
          rsbsStars={rsbsStars}
        />
        <References unlocked={unlocked} />
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
    { next, react, tailwind },
    { csivWeeklyDownloads, imDependants, rsbsStars },
  ] = await Promise.all([
    import('messages/en.json'),
    import(`messages/${locale}.json`),
    getStaticFooterProps(),
    getStaticOpenSourceStatsProps(),
  ])
  const messages = { ...shared, ...local }
  const now = new Date().getTime()
  return {
    props: {
      messages,
      next,
      react,
      tailwind,
      csivWeeklyDownloads,
      rsbsStars,
      imDependants,
      now,
    },
  }
}
