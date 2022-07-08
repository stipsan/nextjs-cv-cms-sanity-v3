import createSanityClient from '@sanity/client'
import SocialMediaCard from 'components/SocialMediaCard'
import { sanity as sanityConfig } from 'env.config.mjs'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import headshot from 'public/headshot.jpeg'

// @TODO refactor to output as SVG
export default function SocialMediaCardPage({ data }) {
  const t = useTranslations('SocialMediaCard')
  const router = useRouter()

  return (
    <div
      className="flex items-center justify-center w-full h-screen overflow-auto bg-black cursor-pointer group"
      title="Click to switch locale"
      onClick={() =>
        router.push(router.route, router.route, {
          locale: router.locale === 'en' ? 'no' : 'en',
        })
      }
    >
      <SocialMediaCard
        className="w-[1280px] transform-gpu transition-transform duration-500 active:scale-50"
        eyebrow={data?.eyebrow}
        name={t('name')}
        headshot={headshot}
        pronouns={t('pronouns')}
        role={t('role')}
      />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const { projectId, dataset, apiVersion, useCdn, token } = sanityConfig
  const client = createSanityClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    token,
  })
  const [en, no] = await Promise.all([
    client.fetch(/* groq */ `
      *[_id == "settings"][0]{
        profile { name, role, pronouns }
      }`),
    client.fetch(/* groq */ `
      *[_id == "i18n.settings.no"][0]{
        profile { name, role, pronouns }
      }`),
  ])

  const messages = {
    en: {
      SocialMediaCard: {
        name: en?.profile?.name || 'Untitled',
        pronouns: en?.profile?.pronouns || 'They/them',
        role: en?.profile?.role || 'Unemployed',
      },
    },
    no: {
      SocialMediaCard: {
        name: no?.profile?.name || 'Uten navn',
        pronouns: no?.profile?.pronouns || 'Hen',
        role: no?.profile?.role || 'Arbeidsledig',
      },
    },
  }
  debugger
  return {
    props: {
      messages: messages[locale],
      data: { eyebrow: 'Curriculum Vitae' },
    },
  }
}
