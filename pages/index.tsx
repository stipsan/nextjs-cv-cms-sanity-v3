import createSanityClient from '@sanity/client'
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
import { sanity as sanityConfig } from 'env.config.mjs'
import useUnlocked from 'hooks/useUnlocked'
// import * as esbuild from 'https://deno.land/x/esbuild@v0.14.45/mod.js'
import { urlForImage } from 'lib/image'
import Head from 'next/head'
import { useTranslations } from 'next-intl'
import favicon from 'public/favicon.png'

// console.log({esbuild})

/*
console.groupCollapsed('utils/test')
import('utils/test').then(({default: hello}) => console.log('utils/test', {hello})).catch(reason => console.error('utils/test failed', {reason})).finally(() => console.groupEnd())
// */

// /*
if (typeof document !== 'undefined') {
  console.groupCollapsed('import(/api/from-palette)')
  const url = new URL('/api/from-palette', location.origin)
  console.log(url.toString())
  import(/* webpackIgnore: true */ url.toString())
    .then(({ studioTheme }) => console.log('from-palette', { studioTheme }))
    .catch((reason) => console.error('from-palette failed', { reason }))
    .finally(() => console.groupEnd())
}
// */

export default function Index({
  displayNames,
  // Renaming to then, to make it clear that it doesn't update after nounting, used when something should reflect the time the CV got built
  now: then,
  next,
  react,
  tailwind,
  sanity,
  csivWeeklyDownloads,
  imDependants,
  rsbsStars,
  experiences,
  data,
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
        <link rel="shortcut icon" type="image/png" href={favicon.src} />
      </Head>
      <div className="h-1 bg-gradient-to-r from-teal-400 to-blue-600" />
      <main className="mx-auto max-w-[21cm] px-4 pt-4 font-sans text-slate-600 antialiased print:px-10 print:pt-5 sm:px-6 sm:pt-5 lg:px-8">
        <div className="flex items-center justify-start pb-4 print:hidden sm:pb-5">
          <LocaleSwitch displayNames={displayNames} />
          <UnlockButton
            error={error}
            setError={setError}
            loading={loading}
            unlock={unlock}
            unlocked={unlocked}
          />
        </div>
        <ProfileCard
          unlocked={unlocked}
          then={then}
          twitter={data?.meta?.twitter || null}
          somecardurl={
            data?.social?.image?.asset?._ref
              ? urlForImage(data.social.image.asset._ref)
                  .height(640)
                  .width(1280)
                  .fit('crop')
                  .url()
              : null
          }
        />
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
        <Footer
          then={then}
          next={next}
          react={react}
          tailwind={tailwind}
          sanity={sanity}
        />
      </main>
    </>
  )
}

export async function getStaticProps({ locale, locales, defaultLocale }) {
  const client = createSanityClient(sanityConfig)
  const [
    { displayNames },
    { default: shared },
    { default: local },
    { next, react, tailwind, sanity },
    { csivWeeklyDownloads, imDependants, rsbsStars },
    { experiences },
    data,
  ] = await Promise.all([
    getStaticLocaleSwitchProps({ locales }),
    import('messages/en.json'),
    import(`messages/${locale}.json`),
    getStaticFooterProps(),
    getStaticOpenSourceStatsProps(),
    getStaticExperienceTimelineProps({ locale }),
    client.fetch(/* groq */ `*[_id == $id][0]`, {
      id: locale === defaultLocale ? 'settings' : `settings__i18n_${locale}`,
    }),
  ])
  const messages = { ...shared, ...local }

  // @TODO move away from next-intl and use a simpler data shape in the future
  // until then we're patching messages
  Object.assign(messages.ProfileCard, {
    name: data?.profile?.name || 'Missing name',
    role: data?.profile?.role || 'Missing role',
    title: data?.a11y?.profileCardTitle || messages.ProfileCard.title,
    metaTitle: data?.meta?.title || 'Missing settings.meta.title',
    metaDescription:
      data?.meta?.description || 'Missing settings.meta.description',
    imageAlt: messages.ProfileCard.imageAlt,
    address: data?.label?.address || 'Missing label',
    country: data?.profile?.country || 'Missing country',
    email: data?.label?.email || 'Missing label',
    phone: data?.label?.phone || 'Missing label',
    subheading: messages.ProfileCard.subheading,
    pronouns: data?.profile?.pronouns || 'Missing pronouns',
    about: data?.label?.about || 'Missing label',
    profile: messages.ProfileCard.profile,
    print: data?.label?.print || 'Missing label',
    latest: data?.label?.latest || 'Missing label',
    twitterImageAlt: data?.social?.image?.alt || '',
  })

  // @TODO filter out this data to reduce initial payload
  const filteredData = data

  const now = new Date().getTime()
  return {
    props: {
      displayNames,
      messages,
      next,
      react,
      tailwind,
      sanity,
      csivWeeklyDownloads,
      rsbsStars,
      imDependants,
      experiences,
      now,
      data: filteredData,
    },
    revalidate: 60,
  }
}
