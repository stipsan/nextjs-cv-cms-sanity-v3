// Debug the React component that Puppeteer is rendering in scripts/createSocualImage.ts

import createSanityClient from '@sanity/client'
import SocialMediaCard from 'components/SocialMediaCard'
import { sanity as sanityConfig } from 'env.config.mjs'

// @TODO refactor to output as SVG
export default function CreateSocialImagePage({ data }) {
  return (
    <SocialMediaCard
      className="w-full"
      eyebrow={data?.eyebrow}
      name={data?.name}
      headshot={data?.headshot}
      pronouns={data?.pronouns}
      role={data?.role}
    />
  )
}

export async function getStaticProps({ locale, defaultLocale }) {
  const client = createSanityClient(sanityConfig)
  const data = await client.fetch(
    /* groq */ `
      *[_id == $id][0]{
        social {
          "headshot": headshot.asset->{
            "src": url,
            "height": metadata.dimensions.height,
            "width": metadata.dimensions.width
          }, 
          eyebrow, 
          name, 
          role, 
          pronouns, 
        }
      }
    `,
    { id: locale === defaultLocale ? 'settings' : `settings__i18n_${locale}` }
  )

  return {
    props: {
      data: {
        eyebrow: data?.social?.eyebrow || 'settings.social.eyebrow',
        name: data?.social?.name || 'settings.social.name',
        pronouns: data?.social?.pronouns || 'settings.social.pronouns',
        role: data?.social?.role || 'settings.social.role',
        headshot: data?.social?.headshot || null,
      },
    },
  }
}
