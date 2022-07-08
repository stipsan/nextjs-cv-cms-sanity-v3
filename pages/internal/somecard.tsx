import SocialMediaCard from 'components/SocialMediaCard'
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
        className='w-[1280px] transition-transform duration-500 transform-gpu active:scale-50'
        eyebrow={data?.eyebrow}
        name={data?.name}
        headshot={headshot}
        pronouns={t('pronouns')}
        role={t('role')}
      />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const messages = {
    en: {
      SocialMediaCard: {
        pronouns: 'He/him',
        role: 'Full Stack Engineer',
      },
    },
    no: {
      SocialMediaCard: {
        pronouns: 'Han/ham',
        role: 'Fullstack Utvikler',
      },
    },
  }

  return {
    props: {
      messages: messages[locale],
      data: { eyebrow: 'Curriculum Vitae', name: 'Cody Olsen' },
    },
  }
}
