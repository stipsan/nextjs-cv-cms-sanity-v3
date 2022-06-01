import dynamic from 'next/dynamic'

const Studio = dynamic(() => import('components/SanityStudio.client'), {
  ssr: false,
})

export default function StudioPage() {
  return <Studio />
}
