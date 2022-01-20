import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import headshot from 'public/headshot.jpeg'

export default function SocialMediaCard() {
  const t = useTranslations('SocialMediaCard')
  const router = useRouter()

  return (
    <div
      className="flex items-center justify-center h-screen w-full bg-black group cursor-pointer overflow-auto"
      title="Click to switch locale"
      onClick={() =>
        router.push(router.route, router.route, {
          locale: router.locale === 'en' ? 'no' : 'en',
        })
      }
    >
      <div
        // Should look good at 500px width, scale(0.4)
        className="transition-transform transform-gpu duration-500 active:scale-50 h-[640px] w-[1280px] flex-shrink-0 flex justify-center items-center"
        style={{
          // First bg concept https://www.joshwcomeau.com/gradient-generator?colors=0990a7|63f2e3|000000&angle=135&colorMode=hcl&precision=15&easingCurve=1.1|1|-0.1|0
          // Remade version uses: bg-cyan-600, bg-cyan-100, bg-cyan-300, bg-cyan-900, bg-black
          // https://www.joshwcomeau.com/gradient-generator?colors=0891b2|cffafe|67e8f9|164e63|000000&angle=135&colorMode=hcl&precision=20&easingCurve=1.1|1|-0.1|0
          backgroundImage: `linear-gradient(
          135deg,
          hsl(192deg 91% 36%) 1%,
          hsl(193deg 49% 50%) 31%,
          hsl(192deg 49% 58%) 39%,
          hsl(191deg 51% 66%) 44%,
          hsl(189deg 56% 74%) 47%,
          hsl(187deg 66% 82%) 49%,
          hsl(185deg 96% 90%) 50%,
          hsl(186deg 93% 87%) 51%,
          hsl(186deg 92% 84%) 51%,
          hsl(186deg 91% 81%) 51%,
          hsl(187deg 91% 77%) 51%,
          hsl(187deg 92% 73%) 50%,
          hsl(187deg 92% 69%) 50%,
          hsl(189deg 69% 61%) 50%,
          hsl(191deg 53% 53%) 49%,
          hsl(192deg 49% 46%) 49%,
          hsl(194deg 53% 38%) 49%,
          hsl(195deg 57% 31%) 49%,
          hsl(196deg 64% 24%) 50%,
          hsl(194deg 98% 17%) 51%,
          hsl(196deg 100% 15%) 53%,
          hsl(198deg 100% 12%) 56%,
          hsl(202deg 100% 10%) 61%,
          hsl(205deg 100% 8%) 69%,
          hsl(0deg 0% 0%) 99%
        )`,
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <article className="rounded-full backdrop-blur-xl backdrop-saturate-200 bg-black/50 p-10 flex items-center space-x-5">
          <div className="flex-shrink-0 block relative rounded-full mx-auto w-64 h-64 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500">
            <Image
              className="rounded-full "
              src={headshot}
              alt=""
              priority
              height={256}
              width={256}
            />
            <span className="block absolute top-0 right-0 bottom-0 left-0 rounded-full bg-cyan-700 mix-blend-screen opacity-70" />
          </div>
          <div className="text-4xl leading-10 font-medium flex flex-col text-cyan-100 pl-6 pr-12">
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-sky-100 to-teal-200">
              Curriculum Vitae
            </div>
            <div className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-100 to-teal-400 pt-3 pb-6">
              Cody Olsen
            </div>
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-sky-100 to-teal-400">
              {t('pronouns')} • {t('role')}
            </div>
          </div>
        </article>
      </div>
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
    props: { messages: messages[locale] },
  }
}
