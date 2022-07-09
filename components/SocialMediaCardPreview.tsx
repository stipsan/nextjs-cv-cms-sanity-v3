import { Card } from '@sanity/ui'
import SocialMediaCard from 'components/SocialMediaCard'
import headshot from 'public/headshot.jpeg'

export default function SocialMediaCardPreview(props: any) {
  return (
    <Card
      padding={4}
      sizing="border"
      style={{ minHeight: '100%' }}
      tone="transparent"
      overflow="hidden"
    >
      <SocialMediaCard
        // className='w-[500px]'
        className="w-[1280px] -translate-x-[30%] -translate-y-1/4 scale-[0.4]"
        eyebrow="Curriculum Vitae"
        name={props.document?.displayed?.profile?.name || 'Untitled'}
        pronouns={props.document?.displayed?.profile?.pronouns || 'They/them'}
        role={props.document?.displayed?.profile?.role || 'Unemployed'}
        headshot={props.document?.displayed?.profile?.headshot || headshot}
      />
    </Card>
  )
}
